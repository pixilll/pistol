const { exec } = require('child_process');

if (process.argv.length < 3) {
    console.error('➤➤ usage: search <url>');
    process.exit(1);
}

const url = process.argv[2];

const openUrl = () => {
    if (!url) {
        console.error('➤➤ usage: search <url>');
    }
    else if (!(url.startsWith('http://') || url.startsWith('https://') || url.startsWith('ftp://'))) {
        console.error('➤➤ invalid url');
    }
    else {
        switch (process.platform) {
            case 'win32':
                exec(`start "" "${url}"`);
                break;
            case 'darwin':
                exec(`open "${url}"`);
                break;
            default:
                exec(`xdg-open "${url}"`);
                break;
        }
    }
};

openUrl();