function Promiss(fn) {
    this.resolve = function(value){};
    this.rejected = function(err){};
    fn(resolve, rejected);
}

Promiss.prototype.then = function(fn) {
    fn();
}

new Process(function(resolve, rejected) {
    // code...
    if( true ) {
        resolve(value);
    }else{
        rejected(err);
    }
}).then(value => {

}).catch(err => {

})