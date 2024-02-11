/* 
GetToken (getDeviceToken.js) requires an empty file named firebase-messaging-sw.js.
Please don't delete the file.

REFERENCE
https://firebase.google.com/docs/cloud-messaging/js/send-multiple
*/

// When a notification is received, the push event is called.
self.addEventListener(
  "push",
  function (event) {
    console.log("event: " + JSON.stringify(event));
    
    let messageTitle = "Bright";
    let messageBody = "Check your notifications on the app!";

    const notificationPromise = self.registration.showNotification(
      messageTitle,
      {
        body: messageBody,
      }
    );

    event.waitUntil(notificationPromise);
  },
  false
);



