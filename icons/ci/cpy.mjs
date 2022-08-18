import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/svg/brand/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/svg/flag/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/svg/free/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
})();