jQuery(function(){

  chrome.runtime.sendMessage({junk: 'hielladsf'}, function(hi){});

  console.log("Adding listener");

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    console.log(request.emails);
    console.log("Emails");

  });

});

