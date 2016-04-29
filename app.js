var app = angular.module('madLibs', []);

app.controller('mlCtrl', function($scope) {
	$scope.active = {
		fillingInWords: true,
			// horrorStory: false,
			// actionStory: false,
			// sadStory: false,
			// inspirationalStory: false
		};
		// $scope.fillingInWords = true;

		$scope.showHorror = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.actionStory = false;
			// $scope.active.sadStory = false;
			if($scope.madLibsForm.$valid) {
				$scope.active = {};
				$scope.active.horrorStory = true;
			}
		}

		$scope.showAction = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.sadStory = false;
			if($scope.madLibsForm.$valid) {
				$scope.active = {};
				$scope.active.actionStory = true;
			}
		}

		$scope.showSad = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.actionStory = false;
			if($scope.madLibsForm.$valid) {
				$scope.active = {};
				$scope.active.sadStory = true;
			}
		}

		$scope.editWordList = function() {
			$scope.active = {};
			$scope.active.fillingInWords = true;
		}

		$scope.startNewMadLibs = function() {
			$scope.word = {};
			$scope.active = {};
			$scope.formComplete = false;
			$scope.active.fillingInWords = true;
		}

		// $scope.editWordListShowing = function() {
		// 	$scope.active.horrorStory = true;
		// 	$scope.active.fillingInWords = true;
		// }

	})

.directive('madLibsStory', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'madLibsTemplate.html'
	}
})

.directive('fillInWords', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: 'wordList.html'
	}
})