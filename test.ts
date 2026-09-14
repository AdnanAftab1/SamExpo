import { Images } from "./imageData";

console.log(Object.entries(Images.Men).map(([name,item])=>{return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")})); 

console.log(Object.entries(Images.Women).map(([name,item])=>{return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")}));