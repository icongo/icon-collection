import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy(['data/src/icons/*.svg', '!data/src/icons/walking.svg', '!data/src/icons/viewing.svg', '!data/src/icons/bicycling.svg', '!data/src/icons/fishing.svg', '!data/src/icons/golf.svg', '!data/src/icons/horse-riding.svg', '!data/src/icons/motobike-trail.svg', '!data/src/icons/trail-walking.svg'], '.cache_svg', {
    flat: true,
    cwd: __dirname,
  });
})();