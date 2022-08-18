import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/azure-cds/*.svg', '.cache_svg', { flat: true, cwd: __dirname })
  await cpy('data/azure-docs/*.svg', '.cache_svg', { flat: true, cwd: __dirname })
  await cpy('data/azure-icons/*.svg', '.cache_svg', { flat: true, cwd: __dirname })
  await cpy('data/azure-patterns/*.svg', '.cache_svg', { flat: true, cwd: __dirname })
  await cpy('data/azure-logos/*.svg', '.cache_svg', { flat: true, cwd: __dirname })
  await cpy('data/azure-other/*.svg', '.cache_svg', { flat: true, cwd: __dirname })
})();