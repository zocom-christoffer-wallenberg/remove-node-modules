#!/usr/bin/env node

const path = require('path');
const colors = require('colors');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const checkFolder = require('../lib/remove');

readline.question(`Enter absolute path to the folder with your projects? `, (folderPath) => {
  if (folderPath) { 
    const fullFolderPath = path.resolve(folderPath);
    checkFolder(fullFolderPath);
  } else {
    console.log(colors.cyan('No path specified!'));
  }
  readline.close()
})