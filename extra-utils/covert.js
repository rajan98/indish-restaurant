const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAX_SIZE_KB = 50;
const START_QUALITY = 40;
const MAX_WIDTH = 1600; // You can lower to 1200 or 1024 if needed
const IMAGE_DIR = '../';

const isImage = (file) => /\.(jpg|jpeg|png)$/i.test(file);

const walkAndProcess = async (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkAndProcess(fullPath);
    } else if (entry.isFile() && isImage(entry.name)) {
      const outputWebP = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      try {
        let buffer = await sharp(fullPath)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true }) // ⬅️ Resize
          .webp({ quality: START_QUALITY, nearLossless: false })
          .toBuffer();

        let sizeKB = buffer.length / 1024;

        if (sizeKB > MAX_SIZE_KB) {
          const reducedQuality = Math.max(20, Math.floor(START_QUALITY * (MAX_SIZE_KB / sizeKB)));
          buffer = await sharp(fullPath)
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .webp({ quality: reducedQuality, nearLossless: false })
            .toBuffer();

          sizeKB = buffer.length / 1024;
        }

        fs.writeFileSync(outputWebP, buffer);
        console.log(`✅ ${path.basename(fullPath)} → ${Math.round(sizeKB)} KB`);
      } catch (err) {
        console.error(`❌ Failed to convert: ${fullPath}`, err);
      }
    }
  }
};

walkAndProcess(IMAGE_DIR);