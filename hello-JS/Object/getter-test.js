let _this = this;

let obj = Object.defineProperty({}, "account", {
    configurable: false,
    enumerable: false,
    set (arr) {
      _this.id = arr[0]; 
    }
})

obj.account = web3.eth.accounts;

