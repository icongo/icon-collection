import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/azure-cds/*.svg', '.cache_svg', { flat: true, cwd: __dirname, rename: (basename) => `cds-${basename}` });
  await cpy('data/azure-docs/*.svg', '.cache_svg', { flat: true, cwd: __dirname, rename: (basename) => `doc-${basename}` });
  await cpy('data/azure-icons/*.svg', '.cache_svg', { flat: true, cwd: __dirname, rename: (basename) => `icon-${basename}` });
  await cpy('data/azure-patterns/*.svg', '.cache_svg', { flat: true, cwd: __dirname, rename: (basename) => `p-${basename}` });
  await cpy('data/logos/*.svg', '.cache_svg', { flat: true, cwd: __dirname, rename: (basename) => `logo-${basename}` });
  await cpy('data/other/out/*.svg', '.cache_svg', { flat: true, cwd: __dirname, rename: (basename) => `o-${basename}` });
})();