import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/icons/mdl2/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `mdl-${basename}`
  });
  await cpy('data/icons/webbrand/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  });
})();