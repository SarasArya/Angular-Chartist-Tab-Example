var app = angular.module('chartist', ['angular-chartist', 'ngMaterial', 'ngAnimate', 'ngAria']);

app.controller('chartistController', function($scope, $timeout) {
    $scope.attributes = ["Score","Distance","Time","Speed"];
    $scope.attribute = $scope.attributes[0];
    $scope.change = function() {
        console.log($scope.attribute);
        if ($scope.attribute === "Score") {
            $scope.data1 = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                series: [
                    [20, 30, 40, 10, 35, 27]
                ]
            };
            $scope.data2 = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                series: [
                    [20, 30, 40, 10, 35, 27]
                ]
            };
            $scope.data3 = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                series: [
                    [20, 30, 40, 10, 35, 27]
                ]
            };
            $scope.options1 = {
                chartPadding: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 5
                },
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctAxisTitle({
                        axisX: {
                            axisTitle: "Driver",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 50
                            },
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: "Score",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 20
                            },
                            flipTitle: true

                        }
                    })
                ]
            };
            $scope.options2 = {
                chartPadding: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 20
                },
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctAxisTitle({
                        axisX: {
                            axisTitle: "Date",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 50
                            },
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: "Score",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 20
                            },
                            flipTitle: true

                        }
                    })
                ]
            };
            $scope.options3 = {
                chartPadding: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 5
                },
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctAxisTitle({
                        axisX: {
                            axisTitle: "Driver",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 50
                            },
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: "Score",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 20
                            },
                            flipTitle: true

                        }
                    })
                ]

            };
        } else if ($scope.attribute === "Distance") {
            $scope.data1 = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                series: [
                    [40, 50, 30, 10, 25, 45]
                ]
            };
            $scope.data2 = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                series: [
                    [40, 50, 30, 10, 25, 45]
                ]
            };
            $scope.data3 = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                series: [
                    [20, 30, 40, 10, 35, 27]
                ]
            };
            $scope.options1 = {
                chartPadding: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 5
                },
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctAxisTitle({
                        axisX: {
                            axisTitle: "Driver",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 50
                            },
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: "Distance",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 20
                            },
                            flipTitle: true

                        }
                    })
                ]
            };
            $scope.options2 = {
                chartPadding: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 20
                },
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctAxisTitle({
                        axisX: {
                            axisTitle: "Date",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 50
                            },
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: "Distance",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 20
                            },
                            flipTitle: true

                        }
                    })
                ]
            };
            $scope.options3 = {
                chartPadding: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 5
                },
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctAxisTitle({
                        axisX: {
                            axisTitle: "Driver",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 50
                            },
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: "Distance",
                            axisClass: 'ct-axis-title',
                            offset: {
                                x: 0,
                                y: 20
                            },
                            flipTitle: true

                        }
                    })
                ]

            };


        } else if ($scope.attribute === "Speed") {

        }

    };
    $scope.tabToggled = function(tab) {
        console.log(tab);
        $timeout(function() {
            angular.element('#' + tab).each(function(i, e) {
                console.log("Updating");
                e.__chartist__.update();
            });

        }, 100);
    };
});