/**
 * Created by Ckabe on 09/03/2017.
 */

angular.module('angularInteracphiApp')
  .controller('MessagesCtrl', function(profile, channelName, messages){
    var messagesCtrl = this;

    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;
    messagesCtrl.message = '';

    messagesCtrl.sendMessage = function (){
      if(messagesCtrl.message.length > 0){
        messagesCtrl.messages.$add({
          uid: profile.$id,
          body: messagesCtrl.message,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(function (){
          messagesCtrl.message = '';
        });
      }
    };

  });
