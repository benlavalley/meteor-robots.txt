Package.describe({
	name: 'gadicohen:robots-txt',
	summary: 'Serves a robot.txt which can be modified programatically',
	version: '0.0.11',
	git: 'https://github.com/gadicc/meteor-robots.txt.git',
});

Package.onUse(function (api) {
	api.use('webapp', 'server');
	api.addFiles('robots.js', 'server');
	api.export('robots', 'server');
});
