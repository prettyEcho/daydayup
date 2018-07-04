function foo() {
    var a = 10;
    setTimeout(() => {
      console.log(this.a);
    }, 100);
}

foo();