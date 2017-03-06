/**
 * Created by Kevin Phu on 02/03/2017.
 */

angular.module('angularInteracphiApp')
  .factory('Channels', function($firebaseArray){
    var ref = firebase.database().ref('channels');
    var channels = $firebaseArray(ref);

    return channels;
  });
