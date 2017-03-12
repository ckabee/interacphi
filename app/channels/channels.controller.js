/**
 * Created by Kevin Phu on 02/03/2017.
 */

angular.module('angularInteracphiApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;
    channelsCtrl.users = Users.all;


    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;

    channelsCtrl.logout = function(){
      Auth.$signOut().then(function(){
        $state.go('home');
      });
    };

    channelsCtrl.reloadRoute = function() {
      $state.reload();
    };

    channelsCtrl.newChannel = {
      name: ''
    };

    channelsCtrl.createChannel = function(){
      channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(){
        channelsCtrl.newChannel = {
          name: ''
        };
      });
    };
  });
