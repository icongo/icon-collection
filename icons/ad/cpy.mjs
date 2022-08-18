import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/packages/icons-svg/svg/filled/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/packages/icons-svg/svg/outlined/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-outlined`
  })
  await cpy('data/packages/icons-svg/svg/twotone/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-twotone`
  })
})();