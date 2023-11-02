const fs = require('fs');

// filePath is <file/directory path>
// console.log() contents of filePath
function readFile (filePath) {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return fileContents
    } catch (error) {
        console.error('Error reading the file:', error.message);
        process.exit(1);
    }
};

module.exports = readFile;