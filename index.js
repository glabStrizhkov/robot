const { exec } = require('child_process');
const express = require('express');
const app = new express();

exec('npm run api', (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout:\n${stdout}`);
});

app.listens