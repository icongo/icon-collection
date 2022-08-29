import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/icons/dark/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_dark`
  });

  await cpy('data/icons/light/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_light`
  });
})();