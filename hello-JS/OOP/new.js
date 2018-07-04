function _new(constructor, params) {
    let args = Array.from( arguments );

    let constructor = args.shift();

    let context = Object.create(constructor.prototype);

    let result = constructor.apply( context, args );

    return (typeof result === 'object' && result != null ) ? result : context;
}


setTimeout(function() {
    console.log(1);
}, 1000)