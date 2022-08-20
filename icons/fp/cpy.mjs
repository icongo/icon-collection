import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/svg/l/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-l`
  });
  await cpy('data/svg/m/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-m`
  });
  await cpy('data/svg/s/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-s`
  });
})();