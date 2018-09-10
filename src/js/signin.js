const register = document.querySelector("#singUp");
const getEmail = document.querySelector('#email');
const getPassword = document.querySelector('#password');
const logIn = document.querySelector("#log-In")
const loginGoogle = document.querySelector('#login-google');
const loginFacebook = document.querySelector('#login-facebook');
const loginTwitter = document.querySelector('#login-twitter');
const username = document.querySelector("#text-white");
const forgotPassword = document.querySelector('#forgot-Password');
const loginAnonymous = document.querySelector('#login-anonymous');


window.onload = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location.assign('wall.html')
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
    } else {
      // console.log('No user is signed in.');

    }
  });
}
register.addEventListener('click', (e) => {
  if (e.preventDefault) {
    window.location.assign('signup.html')
  }
})

logIn.addEventListener('click', () => {
  signInUser(getEmail.value, getPassword.value);
})

forgotPassword.addEventListener('click', () => {
  resetPassword(getEmail.value)
})

loginGoogle.addEventListener('click', () => {
  const callback = (error, Response) => {
    if (!error) {
      window.location.assign('wall.html');
    } else {
      var errorCode = error.code;
      var errorMessage = error.message;
    }
  }
  loginWithGoogle(callback);
});

loginFacebook.addEventListener('click', () => {
  const callback = (error, Response) => {
    if (!error) {
      window.location.assign('wall.html');
    } else {
      var errorCode = error.code;
      var errorMessage = error.message;
    }
  }
  loginWithFacebook(callback);
});

loginTwitter.addEventListener('click', () => {
  const callback = (error, Response) => {
    if (!error) {
      window.location.assign('wall.html');
    } else {
      var errorCode = error.code;
      var errorMessage = error.message;
    }
  }
  loginWithTwitter(callback);
});

loginAnonymous.addEventListener('click', () => {
  const callback = (error, Response) => {
    if (!error) {
      window.location.assign('wall.html');
    } else {
      var errorCode = error.code;
      var errorMessage = error.message;
    }
  }
  loginWithAnonymous(callback);
})

