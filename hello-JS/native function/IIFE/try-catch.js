/**
 * let const <= try..catch
 * 
 */

{
    let a = 2;
    console.log(a);
}

if( true ) {
    try{
        throw undefined;
    }catch(a){
        a = 2;
        console.log(a);
    }
}

//console.log(a);

let foo = true;

{
    let b = foo * 2;
    console.log( b );
}