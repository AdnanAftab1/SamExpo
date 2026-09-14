import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_ROOT = path.join(__dirname, "public");

const parentFoldered = path.join(PUBLIC_ROOT, "ProWoBG");

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
]);

// Function to check if an image has already been processed
async function isImageAlreadyProcessed(filePath: string): Promise<boolean> {
  try {
    // Check if the imageData.ts file exists
    const imageDataPath = path.join(__dirname, "imageData.ts");
    if (!fs.existsSync(imageDataPath)) {
      return false;
    }

    // Read the existing imageData.ts file
    const content = fs.readFileSync(imageDataPath, "utf8");
    
    // Extract the relative path for this image
    const relativePath = filePath.replace(PUBLIC_ROOT, "").replace(/\\/g, "/");
    
    // Check if this path exists in the current imageData
    // Simple check: look for the path string in the file content
    // More robust: we could parse the JSON, but this is simpler
    return content.includes(relativePath);
  } catch (err) {
    console.warn(`⚠️ Could not check if image exists in imageData: ${filePath}`, err);
    return false;
  }
}

async function cropImage(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();

  if (!IMAGE_EXTENSIONS.has(ext)) return;

  try {
    // Check if image is already processed
    const isProcessed = await isImageAlreadyProcessed(filePath);
    
    if (isProcessed) {
      console.log(`⏭️ Skipping (already processed): ${filePath}`);
      return;
    }

    const tempPath = filePath + ".tmp";

    await sharp(filePath)
      .trim() // removes transparent / uniform border
      .toFile(tempPath);

    fs.renameSync(tempPath, filePath); // overwrite original, keep same name

    console.log("✓ Cropped:", filePath);
  } catch (err) {
    console.error("✗ Failed:", filePath, err);
  }
}

async function getFolderImagesMap(dir: string, existingPaths?: Set<string>): Promise<any> {
  const result: any = {};

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      result[entry.name] = await getFolderImagesMap(fullPath, existingPaths);
    } else if (entry.isFile()) {
      await cropImage(fullPath); // crop before adding

      if (!result.files) result.files = [];

      result.files.push(
        fullPath.replace(PUBLIC_ROOT, "").replace(/\\/g, "/")
      );
    }
  }

  return result;
}

// Alternative approach: Load existing imageData first and use it to skip
async function loadExistingImagePaths(): Promise<Set<string>> {
  const imageDataPath = path.join(__dirname, "imageData.ts");
  const existingPaths = new Set<string>();
  
  try {
    if (fs.existsSync(imageDataPath)) {
      const content = fs.readFileSync(imageDataPath, "utf8");
      // Extract the JSON part from the export statement
      const jsonMatch = content.match(/export const folderImagesMap = ([\s\S]*?);/);
      
      if (jsonMatch && jsonMatch[1]) {
        try {
          const parsedData = JSON.parse(jsonMatch[1]);
          // Recursively collect all file paths from the parsed data
          function collectPaths(obj: any) {
            if (!obj) return;
            if (obj.files && Array.isArray(obj.files)) {
              obj.files.forEach((file: string) => existingPaths.add(file));
            }
            // Check all properties for nested structures
            Object.keys(obj).forEach(key => {
              if (key !== 'files' && typeof obj[key] === 'object') {
                collectPaths(obj[key]);
              }
            });
          }
          collectPaths(parsedData);
        } catch (parseErr) {
          console.warn('⚠️ Could not parse existing imageData.ts, will process all images');
        }
      }
    }
  } catch (err) {
    console.warn('⚠️ Could not load existing imageData.ts');
  }
  
  return existingPaths;
}

// Updated cropImage that uses the existing paths set
async function cropImageWithCheck(filePath: string, existingPaths?: Set<string>) {
  const ext = path.extname(filePath).toLowerCase();

  if (!IMAGE_EXTENSIONS.has(ext)) return;

  try {
    // Check if image is already in existing paths
    const relativePath = filePath.replace(PUBLIC_ROOT, "").replace(/\\/g, "/");
    
    if (existingPaths && existingPaths.has(relativePath)) {
      console.log(`⏭️ Skipping (already processed): ${relativePath}`);
      return;
    }

    const tempPath = filePath + ".tmp";

    await sharp(filePath)
      .trim() // removes transparent / uniform border
      .toFile(tempPath);

    fs.renameSync(tempPath, filePath); // overwrite original, keep same name

    console.log("✓ Cropped:", relativePath);
  } catch (err) {
    console.error("✗ Failed:", filePath, err);
  }
}

// Updated main function
async function getFolderImagesMapWithCheck(dir: string, existingPaths?: Set<string>): Promise<any> {
  const result: any = {};

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      result[entry.name] = await getFolderImagesMapWithCheck(fullPath, existingPaths);
    } else if (entry.isFile()) {
      await cropImageWithCheck(fullPath, existingPaths); // crop with check

      if (!result.files) result.files = [];

      result.files.push(
        fullPath.replace(PUBLIC_ROOT, "").replace(/\\/g, "/")
      );
    }
  }

  return result;
}

(async () => {
  // Load existing image paths before processing
  const existingPaths = await loadExistingImagePaths();
  
  console.log(`📊 Loaded ${existingPaths.size} existing image paths from imageData.ts`);
  
  // Use the version that checks existing paths
  const folderImagesMap = await getFolderImagesMapWithCheck(parentFoldered, existingPaths);

  const outputPath = path.join(__dirname, "imageData.ts");

  const jsContent =
    "export const folderImagesMap = " +
    JSON.stringify(folderImagesMap, null, 2) +
    ";\n";

  fs.writeFileSync(outputPath, jsContent, "utf8");

  console.log(`✅ imageData.ts written to ${outputPath}`);
})();