(async function test() {
    let a = await 1;
    let b = await a;
    return b;
})().then(val => {
    console.log( val );
})