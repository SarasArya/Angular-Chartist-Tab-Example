var app = angular.module('chartist', ['angular-chartist', 'ngMaterial', 'ngAnimate', 'ngAria']);

app.controller('chartistController', function($scope, $timeout, ChartService, $document) {
    $scope.allTheCharts = ChartService.charts();
    $scope.tabToggled = function(tab) {
       $timeout(function() {
                angular.element('#'+tab).each(function(i, e) {
                    console.log("Updating");
                    e.__chartist__.update();
                });

            }, 100);
    };
});

app.service('ChartService', function() {
    this.charts = function() {
        var charts = {
            TAB_1: {
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
                    series: [
                        [1, 10, 13, 5, 3]
                    ]
                },
                options: {
                    axisX: {
                        showGrid: true,
                    },
                    axisY: {
                        showGrid: true,
                    }
                }
            },

            TAB_2: {
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
                    series: [
                        [20, 10, 30, 40, 80]
                    ]
                },
                options: {
                    axisX: {
                        showGrid: true,
                    },
                    axisY: {
                        showGrid: true,
                    }
                }
            },
            TAB_3: {
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
                    series: [
                        [1, 10, 34, 5, 3]
                    ]
                },
                options: {
                    axisX: {
                        showGrid: true,
                    },
                    axisY: {
                        showGrid: true,
                    }
                }
            }
        };
        return charts;
    };

});
