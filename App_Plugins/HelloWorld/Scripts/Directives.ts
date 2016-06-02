module LocalizePlaceholderModule {
    'use strict';

    export interface IAttr extends ng.IAttributes {
        localizePlaceholder: any;
    }

    export class LocalizePlaceholderDirective {

        static $inject = ['$rootScope', 'localizationService'];

        constructor($rootScope: ng.IScope, localizationService: any) {

            var directive: ng.IDirective = {
                restrict: 'A', // Attribute
                link: ($scope: ng.IScope, element: JQuery, attrs: IAttr) => {
                    var key = attrs.localizePlaceholder;

                    localizationService.localize(key).then(value => {
                        $(element).attr('placeholder', value);
                    });
                } // End of link
            }; // End of assigning directive
            return directive;
        }
    }
}

angular.module('umbraco').directive('localizePlaceholder', <any>LocalizePlaceholderModule.LocalizePlaceholderDirective);
