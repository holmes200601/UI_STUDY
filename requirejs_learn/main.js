requirejs.config({
	baseUrl: ".",
	paths: {
		reactLib: "../node_modules/babel-types/lib"
	}
});

requirejs(["js/react_module"], function(compnent) {

	var a = 1;

});