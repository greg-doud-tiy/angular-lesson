angular.module('TutApp', ['ngRoute'])

.controller('TutCtrl', ['$http', function($http) {
	var self = this;
	self.about = 'About AngularJS - The lesson'; 

	self.students = [
		{ Id: 1, Name: 'Austin' },
		{ Id: 2, Name: 'Bobby' },
		{ Id: 3, Name: 'Kristin' },
		{ Id: 4, Name: 'Michael' },
		{ Id: 5, Name: 'Nathan' },
		{ Id: 6, Name: 'Nick' }
	];

	self.refreshStudents = function() {
		$http.get('http://cohort20170329092818.azurewebsites.net/api/Students')
			.then(function(response) { // on success
				console.log('Success!');
				self.students = response.data;
			}, function(response) { // on failure
				console.log('Failed!', response)
			});
	};

}])

.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'home.view.html'
		})
		.when('/about', {
			templateUrl: 'about.view.html'
		})
		.otherwise({
			redirectTo: '/'
		});

}]);