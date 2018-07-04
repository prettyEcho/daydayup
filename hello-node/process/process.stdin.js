process.stdin.on('data', (chunk) => {
    process.stdout.write(`process get data is ${chunk}`);
})
