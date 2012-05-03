// THIS FILE IS AUTOMATICALLY GENERATED BY: packed_helper.js

({
	optimize: "none",
	baseUrl: "../",
	paths: {
	"core" : "empty:",
	"ext" : "empty:",
	"apf" : "empty:",
	"treehugger" : "empty:"
	},
	include: ["build/src/core.packed", "%s"], 
	out: "../plugins-client/ext.packed/packed.js",
	inlineText: true,
	findNestedDependencies: true,
	optimizeAllPluginResources: false,
	useStrict: true,
	wrap: true,
	onBuildRead: function (moduleName, path, contents) {
		var textRegExp = new RegExp(/text!ext\/(\w+)\//g);
		var match;
		if ( (match = contents.match(textRegExp) ) ) {
		        for (var m in match) {
		                var name = match[m].split("/")[1];
		                var path = "text!plugins-client/ext." + name + "/";
		                contents = contents.replace(match[m], path);
		        }
		}

		return contents;
	}
})