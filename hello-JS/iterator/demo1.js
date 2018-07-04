class RangeIterator {
    constructor(start, stop) {
        this.start = start;
        this.stop = stop;
        this.value = this.start;
        
    }

    [Symbol.iterator]() { return this }

    next() {
        return this.value <= this.stop ?
            { value: this.value++ } :
            { done: true } 
    }
}

var range = new RangeIterator(0,3);

for( let i of range ) {
    console.log( i );
}