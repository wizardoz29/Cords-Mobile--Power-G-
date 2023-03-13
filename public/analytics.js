// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// import firebase from "firebase/compat/app";
// import firebaseui from "../firebaseui";
// import './auth';

// var ui = new firebaseui.auth.AuthUI(firebase.auth());


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIAj6ExZSiwL960vJfoq_JKfTxU1-u7g",
  authDomain: "cords-mobile-pgs.firebaseapp.com",
  projectId: "cords-mobile-pgs",
  storageBucket: "cords-mobile-pgs.appspot.com",
  messagingSenderId: "523279866681",
  appId: "1:523279866681:web:dca2f4aafbcd0793f766e8",
};



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Authentication
const auth = firebase.auth();


ui.start('#cords', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ]
});


// Is there an email link sign-in?
// if (ui.isPendingRedirect()) {
//     ui.start('#cords', uiConfig);
// }

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        return true;
      },
      uiShown: function() {
        // The widget is rendered. Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'https://cordsmobileupdate.web.app/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: 'https://cordsmobileoz.web.app/',
    // Privacy policy url.
    privacyPolicyUrl: 'https://cordsmobileoz.web.app/'
};

ui.start('#cords', uiConfig);

// ui.start('#cords', uiConfig);









