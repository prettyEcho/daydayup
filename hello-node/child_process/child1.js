process.on('message', m => {
    console.log( `message from parent: ${m}` );
})

process.send('send from child');

process.on('SIGTERM', () => {
    process.exit(0);
})