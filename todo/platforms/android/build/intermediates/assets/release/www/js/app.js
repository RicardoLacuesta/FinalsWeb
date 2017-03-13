var app = angular.module('todo', ['ionic','ngCordova'])
 
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.

 app.controller('MyController', function ($scope,  $cordovaGeolocation, $ionicPopup, $state) {
    

ionic.Platform.ready(function(){
        // Code goes here
    }   

    
})

 */


     
 /*   $ionicPlatform.ready(function() {    
 
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });
         
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
 
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
             
            var myLatlng = new google.maps.LatLng(lat, long);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
            $scope.map = map;   
            $ionicLoading.hide();           
             
        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
        });
    }               */

 
.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.shop', {
      url: "/shop",
      views: {
        'home-tab': {
          templateUrl: "templates/shop.html"
        }
      }
    })
    .state('tabs.blog', {
      url: "/blog",
      views: {
        'home-tab': {
          templateUrl: "templates/blog.html"
        }
      }
    })
    .state('tabs.cont', {
      url: "/cont",
      views: {
        'home-tab': {
          templateUrl: "templates/cont.html"
        }
      }
    })
    .state('tabs.direction', {
      url: "/direction",
      views: {
        'home-tab': {
          templateUrl: "templates/direction.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })

    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });

   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})

.controller('MyCtrl', function($scope, $cordovaGeolocation) {
   var posOptions = {timeout: 10000, enableHighAccuracy: false};
   $cordovaGeolocation
   .getCurrentPosition(posOptions)
  
   .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      console.log(lat + '   ' + long)
   }, function(err) {
      console.log(err)
   });

   var watchOptions = {timeout : 3000, enableHighAccuracy: false};
   var watch = $cordovaGeolocation.watchPosition(watchOptions);
  
   watch.then(
      null,
    
      function(err) {
         console.log(err)
      },
    
      function(position) {
         var lat  = position.coords.latitude
         var long = position.coords.longitude
         console.log(lat + '' + long)
      }
   );

   watch.clearWatch();

});
