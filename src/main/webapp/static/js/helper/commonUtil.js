'use strict';

angular.module('app').factory('Helper', ['$http', '$q', function ($http, $q) {

    var factory ={
        camelize: camelize,
        acent: acent
    };
    
    return factory;
    
    function camelize(str) {  
        return str[0].toLowerCase() + str.replace(/\s([A-Za-z])/g, function(a, b) {        
            return b.toUpperCase();
        }).slice(1);
    }

    function acent(input){
        var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
        var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
        for (var i = 0; i < tittles.length; i++) {
            input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
        };
        return input;        
    }        
        
}]);


