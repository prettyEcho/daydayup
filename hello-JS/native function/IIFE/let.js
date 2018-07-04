//显性相对于隐性的优势

//隐性
if( true ) {
    let a = 1;
    console.log( a );
}

//显性

//1
if( true ) {
    {
        let a = 2;
        console.log( a );
    }
}

function foo() {
    {
        console.log(b);
        let b = 2;
    }
}

foo();
