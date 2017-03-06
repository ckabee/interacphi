/**
 * Created by Ckabe on 24/02/2017.
 */

angular.module('angularInteracphiApp')
  .factory('Auth', function($firebaseAuth){
    var auth = $firebaseAuth();

    return auth;
  });
