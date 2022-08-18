import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/flags/1x1/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/flags/4x3/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-1`
  })
})();