var a = 1, b = 2, c = 3;

(function first() {
	var b = 5, c = 6;

	(function second() {
		var b = 8;

		console.log("a: "+a+", b: "+b+", c: "+c);

		(function third() {
			var a = 7, c = 9;

			(function fourth() {
				var a = 1, c = 8;
			})();
		})();
	})();
})();
