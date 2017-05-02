angular.module('app.directives', [])
    .directive('panel', function() {
        var ddo = {}; //sempre retorna

        ddo.restrict = 'E'; //Atribute or element

        ddo.scope = {
            title: '@title',
            linkback: '@linkback',
            type: '@type'
        }

        ddo.transclude = true;

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/panel.html' + r;
        return ddo;
    })

    .directive('numberpicker', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.scope = {
            title: '@title',
            min: '@min',
            max: '@max',
            step: '@step',
            model: '='
        }


        ddo.controller = function($rootScope, $scope, $attrs) {

            $scope.model = $scope.min;

            $scope.plusOne = function() {
                $scope.model = Number($scope.model) + Number($scope.step);
                $scope.checkValues();
            }
            $scope.minusOne = function() {
                $scope.model = Number($scope.model) - Number($scope.step);
                $scope.checkValues();
            }

            $scope.change = function() {
                $scope.checkValues();
            }

            $scope.checkValues = function() {

                if ($scope.model > $scope.max) {
                    $scope.model = $scope.max;
                }

                if ($scope.model < $scope.min) {
                    $scope.model = $scope.min;
                }
            }
        }

        ddo.compile = function(element, attrs) {
            element.attr('class', "number-picker");
        }



        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/number-picker.html' + r;
        return ddo;
    })
    .directive('numberpickercx', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.scope = {
            title: '@title',
            min: '@min',
            max: '@max',
            step: '@step',
            model: '='
        }


        ddo.controller = function($rootScope, $scope, $attrs) {

            $scope.model = $scope.min;

            $scope.plusOne = function() {
                $scope.model = Number($scope.model) + Number($scope.step);
                $scope.checkValues();
            }
            $scope.minusOne = function() {
                $scope.model = Number($scope.model) - Number($scope.step);
                $scope.checkValues();
            }

            $scope.change = function() {
                $scope.checkValues();
            }

            $scope.checkValues = function() {

                if ($scope.model > $scope.max) {
                    $scope.model = $scope.max;
                }

                if ($scope.model < $scope.min) {
                    $scope.model = $scope.min;
                }
            }
        }

        ddo.compile = function(element, attrs) {
            element.attr('class', "number-picker");
        }



        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/number-picker-cx.html' + r;
        return ddo;
    })
    .directive('targetBlank', function() {
        return {
            compile: function(element) {
                var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
                elems.attr("target", "_blank");
            }
        };
    })
    .directive('entry', function() {
        var ddo = {};


        ddo.restrict = 'E';

        ddo.scope = {
            title: '@title',
            size: '@size',
            type: '@type',
            placeholder: '@placeholder',
            onlyview: '=',
            list: '=',
            model: '='
        }

        ddo.controller = function($rootScope, $scope, $attrs) {
            //console.log("onlyview: " + $scope.model);

            if (!$scope.size) {
                $scope.size = 2;
            }
            if (!$scope.name) {
                $scope.name = $attrs.model;
            }
        }

        ddo.compile = function(element, attrs) {
            element.attr('class', "col-md-" + attrs.size);
            element.attr('showtitle', attrs.title.length > 1);
        }

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/entry.html' + r;
        return ddo;
    })
    .directive('exportToCsv', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var el = element[0];
                element.bind('click', function(e) {
                    var table = e.target.nextElementSibling;
                    var csvString = '';
                    for (var i = 0; i < table.rows.length; i++) {
                        var rowData = table.rows[i].cells;
                        for (var j = 0; j < rowData.length; j++) {
                            csvString = csvString + rowData[j].innerHTML + ",";
                        }
                        csvString = csvString.substring(0, csvString.length - 1);
                        csvString = csvString + "\n";
                    }
                    csvString = csvString.substring(0, csvString.length - 1);
                    var a = $('<a/>', {
                        style: 'display:none',
                        href: 'data:application/octet-stream;base64,' + btoa(csvString),
                        download: 'emailStatistics.csv'
                    }).appendTo('body')
                    a[0].click()
                    a.remove();
                });
            }
        }
    })
    .directive('numbersOnly', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9]/g, '');

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }
                        return transformedInput;
                    }
                    return undefined;
                }
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    })
    .directive('currencyInput', function($filter) {
        return {
            scope: {
                amount: '='
            },
            link: function(scope, el, attrs) {
                el.val($filter('currency')(scope.amount, 'R$ '));

                el.bind('focus', function() {
                    el.val(scope.amount);
                });

                el.bind('input', function() {
                    scope.amount = el.val();
                    scope.$apply();
                });

                el.bind('blur', function() {
                    el.val($filter('currency')(scope.amount, 'R$ '));
                });
            }
        }
    })
    .directive('validNumber', function() {
        return {
            require: '?ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                if (!ngModelCtrl) {
                    return;
                }

                ngModelCtrl.$parsers.push(function(val) {
                    if (angular.isUndefined(val)) {
                        var val = '';
                    }
                    var clean = val.replace(/[^0-9\.]/g, '');
                    var decimalCheck = clean.split('.');

                    if (!angular.isUndefined(decimalCheck[1])) {
                        decimalCheck[1] = decimalCheck[1].slice(0, 2);
                        clean = decimalCheck[0] + '.' + decimalCheck[1];
                    }

                    if (val !== clean) {
                        ngModelCtrl.$setViewValue(clean);
                        ngModelCtrl.$render();
                    }
                    return clean;
                });

                element.bind('keypress', function(event) {
                    if (event.keyCode === 32) {
                        event.preventDefault();
                    }
                });
            }
        };
    })
;
