var myModule = (function (window, undefined) {
	let name = "echo";
	
	function getName() {
		return name;
	}
	
	return {
		name,
		getName
	}
})(window);

console.log( myModule.name ); // echo
console.log( myModule.getName ); // echo