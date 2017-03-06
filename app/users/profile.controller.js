/**
 * Created by Kevin Phu on 28/02/2017.
 */

angular.module('angularInteracphiApp')
  .controller('ProfileCtrl', function($state, md5, auth, profile){
    var profileCtrl = this;
    profileCtrl.profile = profile;

    profileCtrl.updateProfile = function(){
      profileCtrl.profile.emailHash = md5.createHash(auth.email);
      profileCtrl.profile.$save().then(function(){
        $state.go('channels');
      });
    };

    getGravatar = function(uid){
      return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
    };
  });
