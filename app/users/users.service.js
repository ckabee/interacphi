/**
 * Created by Kevin Phu on 28/02/2017.
 */

angular.module('angularInteracphiApp')
  .factory('Users', function($firebaseArray, $firebaseObject){
    var usersRef = firebase.database().ref('users');
    var users = $firebaseArray(usersRef);

    var Users = {
      getProfile: function(uid){
      return $firebaseObject(usersRef.child(uid));
    },
      getDisplayName: function(uid){
        return users.$getRecord(uid).displayName;
      },
      all: users
    };

    return Users;
  });
