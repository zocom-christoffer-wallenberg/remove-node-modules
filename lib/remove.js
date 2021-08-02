const fs = require('fs')
const path = require('path');
const emoji = require('node-emoji');
const colors = require('colors');

function checkFolder(basePath) {
  fs.readdirSync(basePath)
    .forEach((project) => {
      const fullPath = path.join(basePath, project);
      const dir = fs.statSync(fullPath);

      if (dir.isDirectory()) {
        if (!fs.existsSync(path.join(fullPath, 'package.json'))) {
          checkFolder(fullPath)
        } else {
          if (fs.existsSync(path.join(fullPath, 'node_modules'))) {
            fs.rm(fullPath + '/node_modules', { recursive: true }, () => {
              const message = path.join(fullPath, 'node_modules') + ` removed! ${emoji.get('tada')}`.cyan;
              console.log(colors.magenta(message));
              console.log('--------------------'.blue);
            });
          } else {
            console.log(`Nothing here:`.magenta + ` ${fullPath} ${emoji.get('smile_cat')}`.cyan);
            console.log('--------------------'.blue);
          }
        }
      }
  });
}

module.exports = checkFolder;