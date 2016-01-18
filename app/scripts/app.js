'use strict';

/**
 * @ngdoc overview
 * @name voyagApp
 * @description
 * # voyagApp
 *
 * Main module of the application.
 */
angular
  .module('voyagApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/home.html'
          },
          'footer_programs_block@home': {
            templateUrl: 'views/footer_programs_block.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/about.html'
          },
          'footer_programs_thin@about': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('values', {
        url: '/about/values',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/about.values.html'
          },
          'footer_programs_thin@values': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('team', {
        url: '/about/team',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/about.team.html'
          },
          'footer_programs_thin@team': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('programs', {
        url: '/programs',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/programs.html'
          },
          'footer_programs_thin@programs': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('spiritually', {
        url: '/programs/spiritually',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/programs.spiritually.html'
          },
          'footer_programs_thin@spiritually': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('relationally', {
        url: '/programs/relationally',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/programs.relationally.html'
          },
          'footer_programs_thin@relationally': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('physically', {
        url: '/programs/physically',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/programs.physically.html'
          },
          'footer_programs_thin@physically': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('mentally', {
        url: '/programs/mentally',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/programs.mentally.html'
          },
          'footer_programs_thin@mentally': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('financially', {
        url: '/programs/financially',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/programs.financially.html'
          },
          'footer_programs_thin@financially': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('ih', {
        url: '/ih',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/ih.html'
          },
          'footer_programs_thin@ih': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      })
      .state('contact', {
        url: '/contact',
        controller: 'MainController',
        'views': {
          'main': {
            templateUrl: 'views/contact.html'
          },
          'footer_programs_thin@contact': {
            templateUrl: 'views/footer_programs_thin.html'
          }
        }
      });
  });
