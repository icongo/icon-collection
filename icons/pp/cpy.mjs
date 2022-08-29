import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/packages/pepicons/svg/pop/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  });
  await cpy('data/packages/pepicons/svg/print/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_print`
  });
})();