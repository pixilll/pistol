const fs = require('fs');
const path = require('path');

function createFileStructure(inputFilePath) {
    const fileName = path.basename(inputFilePath);
    const projectName = path.parse(fileName).name;

    const rootDir = `./${projectName}`;
    if (!fs.existsSync(rootDir)) {
        fs.mkdirSync(rootDir);
    }

    const fileContents = fs.readFileSync(inputFilePath, 'utf-8');

    const mainFilePath = path.join(rootDir, 'main.js');
    fs.writeFileSync(mainFilePath, fileContents);

    const pistolFilePath = './.pistol';
    const pistolContent = `[ \"node\", \"$pistol.this$/${projectName}/main.js\", \"$pistol.loc$\", \"$pistol.args$\" ]`;
    fs.writeFileSync(pistolFilePath, pistolContent);

    console.log(`➤➤ project structure created:`);
    console.log(`➤➤ root: ${rootDir}`);
    console.log(`➤➤ main.js: ${mainFilePath}`);
    console.log(`➤➤ pistol: ${pistolFilePath}`);
}

// Example usage
const inputFilePath = process.argv[3];
if (!inputFilePath) {
    console.error('➤➤ error: please provide a path to the input file.');
    process.exit(1);
}

if (!fs.existsSync(inputFilePath)) {
    console.error('➤➤ error: the specified file does not exist.');
    process.exit(1);
}

createFileStructure(inputFilePath);