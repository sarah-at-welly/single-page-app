// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
	  basePath: '',
	  frameworks: ['jasmine', '@angular-devkit/build-angular'],
	  plugins: [
		require('karma-jasmine'),
		require('karma-chrome-launcher'),
		require('karma-jasmine-html-reporter'),
		require('@angular-devkit/build-angular/plugins/karma')
	  ],
	  client: {
		clearContext: false, // leave Jasmine Spec Runner output visible in browser
		// See https://jasmine.github.io/setup/nodejs.html for more configuration
		jasmine: {
		  // Whether to fail a spec that ran no expectations
		  failSpecWithNoExpectations: true,
		},
	  },
	  reporters: ['progress', 'kjhtml'],
	  port: 9876,
	  colors: true,
	  logLevel: config.LOG_INFO,
	  autoWatch: false,
	  browsers: ['ChromeHeadlessNoSandbox'],
	  customLaunchers: {
	    ChromeHeadlessNoSandbox: {
			base: 'ChromeHeadless',
			flags: ['--no-sandbox']
	    }
	  },
	  singleRun: false,
	  restartOnFileChange: true,
	});
  };
  