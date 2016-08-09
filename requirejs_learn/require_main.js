requirejs.config({
	baseUrl: ".",
	paths: {
		react: "../react_learn/javascript"
	}
});

requirejs(["main", "react/main1"], function(main, main1) {

	main.alert("main loaded!");

	main1.alert("main1 loaded!");

});