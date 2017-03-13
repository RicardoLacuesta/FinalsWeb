angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  }).state('recipes', {
    url: '/page5',
    templateUrl: 'templates/recipes.html',
    controller: 'recipesCtrl'
  })

  .state('chickenRecipes', {
    url: '/page6',
    templateUrl: 'templates/chickenRecipes.html',
    controller: 'chickenRecipesCtrl'
  })

  .state('beefRecipes', {
    url: '/page7',
    templateUrl: 'templates/beefRecipes.html',
    controller: 'beefRecipesCtrl'
  })

  .state('porkRecipes', {
    url: '/page8',
    templateUrl: 'templates/porkRecipes.html',
    controller: 'porkRecipesCtrl'
  })

  .state('seafoodRecipes', {
    url: '/page9',
    templateUrl: 'templates/seafoodRecipes.html',
    controller: 'seafoodRecipesCtrl'
  })

  .state('desserts', {
    url: '/page10',
    templateUrl: 'templates/desserts.html',
    controller: 'dessertsCtrl'
  })

  .state('bakedTeriyakiChicken', {
    url: '/page12',
    templateUrl: 'templates/bakedTeriyakiChicken.html',
    controller: 'bakedTeriyakiChickenCtrl'
  })

  .state('asianGlazedChickenThighs', {
    url: '/page13',
    templateUrl: 'templates/asianGlazedChickenThighs.html',
    controller: 'asianGlazedChickenThighsCtrl'
  })

  .state('appleButterPorkLoin', {
    url: '/page11',
    templateUrl: 'templates/appleButterPorkLoin.html',
    controller: 'appleButterPorkLoinCtrl'
  })

  .state('herbedPorkAndApples', {
    url: '/page14',
    templateUrl: 'templates/herbedPorkAndApples.html',
    controller: 'herbedPorkAndApplesCtrl'
  })

  .state('beefStewVI', {
    url: '/page15',
    templateUrl: 'templates/beefStewVI.html',
    controller: 'beefStewVICtrl'
  })

  .state('slowCookerBeefPotRoast', {
    url: '/page16',
    templateUrl: 'templates/slowCookerBeefPotRoast.html',
    controller: 'slowCookerBeefPotRoastCtrl'
  })

  .state('garlickyAppetizerShrimpScampi', {
    url: '/Garlicky_Appetizer_Shrimp_Scampi',
    templateUrl: 'templates/garlickyAppetizerShrimpScampi.html',
    controller: 'garlickyAppetizerShrimpScampiCtrl'
  })

  .state('blackenedTuna', {
    url: '/Blackened_Tuna',
    templateUrl: 'templates/blackenedTuna.html',
    controller: 'blackenedTunaCtrl'
  })

  .state('menu2', {
      url: '/page7',
      templateUrl: 'templates/menu2.html',
      controller: 'menu2Ctrl'
    })


  .state('offers', {
    url: '/page8',
    templateUrl: 'templates/offers.html',
    controller: 'offersCtrl'
  })

  .state('myCart', {
    url: '/page9',
    templateUrl: 'templates/myCart.html',
    controller: 'myCartCtrl'
  })

  .state('lastOrders', {
    url: '/page10',
    templateUrl: 'templates/lastOrders.html',
    controller: 'lastOrdersCtrl'
  })

  .state('favourite', {
    url: '/page11',
    templateUrl: 'templates/favourite.html',
    controller: 'favouriteCtrl'
  })

  .state('settings', {
    url: '/page12',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('support', {
    url: '/page13',
    templateUrl: 'templates/support.html',
    controller: 'supportCtrl'
  })

  .state('checkout', {
    url: '/page16',
    templateUrl: 'templates/checkout.html',
    controller: 'checkoutCtrl'
  })

  .state('tabsController.forgotPassword', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page5')



});
