// Basic Node.js Backup Utility Script

const fs = require('fs');
const path = require('path');

const sourceDir = 'path/to/source'; // Specify the source directory
const backupDir = 'path/to/backup'; // Specify the backup directory

function backup() {
    // Create backup directory if it doesn't exist
    if (!fs.existsSync(backupDir)){ 
        fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Read the source directory
    fs.readdir(sourceDir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const sourceFile = path.join(sourceDir, file);
            const backupFile = path.join(backupDir, file);

            // Copy file to backup directory
            fs.copyFile(sourceFile, backupFile, (err) => {
                if (err) throw err;
                console.log(`Backup of ${file} completed.`);
            });
        });
    });
}

backup();
