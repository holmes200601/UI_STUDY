requirejs.config({
	baseUrl: ".",
	paths: {
		wgt: "javascript",
		react: "../node_modules/babel-types/lib"
	}
});

requirejs(["wgt/main1"], function(main1) {
	main1.alert("Hello, RequireJS");
});