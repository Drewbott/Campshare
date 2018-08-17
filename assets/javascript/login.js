//script inclusions required for each login HTML page
  //insert bootstrap links here
// <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
// <script src="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.js"></script>
// <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css" />


// initialize firebase
var config = {
  apiKey: "AIzaSyAONZYnyHUjy1Sng-pxNkStJ_NBkLM83Dw",
  authDomain: "campshare-2c108.firebaseapp.com",
  databaseURL: "https://campshare-2c108.firebaseio.com",
  projectId: "campshare-2c108",
  storageBucket: "campshare-2c108.appspot.com",
  messagingSenderId: "850750063272"
};
firebase.initializeApp(config);
var db = firebase.database();


// //CREATE VARs for username and password capture from form:



// // sign up new users
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });


// // sign-in existing users
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// // global listener for each page that requires login
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
// });

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
    //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'index.html',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  ui.start('#firebaseui-auth-container', uiConfig);

var mainApp = {};
var uid = null;
var firebase = app_fireBase;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
    }
    else {
        uid - null;
      // redirect to login page
      window.location.replace("login.html");
    }

    function logOut() {
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
  });