import cpy from 'cpy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  await cpy('data/docs/Iconsax/Svg/All/bold/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_bold`
  });

  await cpy('data/docs/Iconsax/Svg/All/broken/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_broken`
  });

  await cpy('data/docs/Iconsax/Svg/All/broken/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_broken`
  });

  await cpy('data/docs/Iconsax/Svg/All/bulk/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_bulk`
  });

  await cpy('data/docs/Iconsax/Svg/All/Crypto/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_Crypto`
  });

  await cpy('data/docs/Iconsax/Svg/All/linear/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_linear`
  });

  await cpy('data/docs/Iconsax/Svg/All/outline/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_outline`
  });

  await cpy('data/docs/Iconsax/Svg/All/twotone/*.svg', '.cache_svg', {
    flat: true,
    cwd: __dirname,
    rename: (basename) => `${basename}_twotone`
  });

})();