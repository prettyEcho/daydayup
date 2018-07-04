for( var i = 0; i < 5; i++ ) {
    ((j) => {
        setTimeout(() => {
            console.log( j );
        }, 1000 * j)
    })(i)	
}