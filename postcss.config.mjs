import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config = {
  plugins: ["@tailwindcss/postcss"],
};

// Always look out..

export default config;