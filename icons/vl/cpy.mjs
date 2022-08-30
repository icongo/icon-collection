import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/www/logos/**/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    filter: file => /-icon.svg$/ig.test(file.path),
    rename: basename => basename.replace(/-icon/, '')
  })
})();