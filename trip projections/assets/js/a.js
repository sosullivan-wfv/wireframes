angular

.module('prototype', [])

.controller('PrototypeCtrl', ['$scope', function ($scope) {
	$scope.transactions = [
		[1041, 794, 654, 530, 430, 310, 468],
		[369, 414, 611, 885, 767, 321, 519]
	];

	$scope.tripDay = 0;

	$scope.trips = [
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		],
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		],
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		],
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		],
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		],
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		],
		[
			[null, 104, 0, 0],
			[0, null, 52, 52],
			[58, 20, null, 0],
			[0, 20, 52, null]
		]
	];

	$scope.sumArray = function (arr) {
		return arr.reduce(function (a, b) { return a + b }, 0);
	}

	$scope.setTripDay = function (num) {
		$scope.tripDay = num;
	}
}])
;