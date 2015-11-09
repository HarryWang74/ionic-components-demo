// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.init', {
        url: '/init',
        views: {
            'menuContent': {
                templateUrl: 'templates/init.html'
            }
        }
    })
    .state('app.actionSheet', {
        url: '/actionsheet',
        views: {
            'menuContent': {
                templateUrl: 'templates/actionSheet.html',
                controller: 'actionSheet'
            }
        }
    })
    .state('app.backDrop', {
        url: '/backdrop',
        views: {
            'menuContent': {
                templateUrl: 'templates/backdrop.html',
                controller: 'backdrop'
            }
        }
    })
    .state('app.content', {
        url: '/content',
        views: {
            'menuContent': {
                templateUrl: 'templates/content.html',
            }
        }
    })
    .state('app.refresher', {
        url: '/refresher',
        views: {
            'menuContent': {
                templateUrl: 'templates/refresher.html',
            }
        }
    })
    .state('app.inputs', {
        url: '/inputs',
        views: {
            'menuContent': {
                templateUrl: 'templates/inputs.html',
            }
        }
    })
    .state('app.header', {
        url: '/header',
        views: {
            'menuContent': {
                templateUrl: 'templates/header-footer.html',
            }
        }
    })
    .state('app.list', {
        url: '/list',
        views: {
            'menuContent': {
                templateUrl: 'templates/list.html',
                controller: 'list'
            }
        }
    })
    .state('app.loading', {
        url: '/loading',
        views: {
            'menuContent': {
                templateUrl: 'templates/loading.html',
                controller: 'loading'
            }
        }
    })
    .state('app.modal', {
        url: '/modal',
        views: {
            'menuContent': {
                templateUrl: 'templates/modal.html',
                controller: 'modal'
            }
        }
    })
    .state('app.popover', {
        url: '/popover',
        views: {
            'menuContent': {
                templateUrl: 'templates/popover.html',
                controller: 'popover'
            }
        }
    })
    .state('app.popup', {
        url: '/popup',
        views: {
            'menuContent': {
                templateUrl: 'templates/popup.html',
                controller: 'popup'
            }
        }
    })
    .state('app.slidebox', {
        url: '/slidebox',
        views: {
            'menuContent': {
                templateUrl: 'templates/slidebox.html'
            }
        }
    })
 .state('app.card', {
        url: '/card',
        views: {
            'menuContent': {
                templateUrl: 'templates/card.html'
            }
        }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/init');
});
