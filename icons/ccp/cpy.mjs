import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/flat/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname
  })
  await cpy('data/flat-rounded/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-rounded`
  })
  await cpy('data/logo/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/logo-border/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-border`
  })
  await cpy('data/mono/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
  })
  await cpy('data/mono-outline/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: basename => `${basename}-outline`
  })
})();