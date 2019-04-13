const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/nauphilus-widget/runtime.js',
    './dist/nauphilus-widget/polyfills.js',
    './dist/nauphilus-widget/scripts.js',
    './dist/nauphilus-widget/main.js',
  ]
  await fs.ensureDir('elements');
  await concat(files, 'elements/simple-spike-form.js');
  await fs.copyFile('./dist/nauphilus-widget/styles.css', 'elements/styles.css');
  await fs.copy('./dist/nauphilus-widget/assets/', 'elements/assets/' );

})();
