import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/src/solid/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/src/outline/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-outline`
  })
})();