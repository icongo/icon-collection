import fs from 'node:fs';
import path from 'node:path';

;(async () => {
  const mdLineString = ['<!--start-->', '| Name | NPM Version | Website |', '| ----- | ----- | ----- |'];
  (await fs.promises.readdir(path.resolve(process.cwd(), 'icons'), { withFileTypes: true })).map((item) => {
    return item.isDirectory() ? item.name : undefined;
  }).filter(Boolean).forEach((dirName) => {
    mdLineString.push(`| \`@icongo/${dirName}\` | [![npm version](https://img.shields.io/npm/v/@icongo/${dirName}.svg)](https://www.npmjs.com/package/@icongo/${dirName}) | [\`#preview\`](https://icongo.github.io/#/icons/${dirName}/) |`)
  });
  mdLineString.push('<!--end-->');

  const mdStr = await fs.promises.readFile(path.resolve(process.cwd(), 'README.md'));
  const str = mdStr.toString().replace(/<!--start-->([\s\S]*?)?<!--end-->/, mdLineString.join('\n'));
  await fs.promises.writeFile(path.resolve(process.cwd(), 'README.md'), str)
})();