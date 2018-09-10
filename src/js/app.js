window.createUser = (email, password, repeatPassword) => {
  if (password === repeatPassword) {
    const createUserWithEmailAndPassword = firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.assign('index.html')
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        // console.log(error);
      });
    return createUserWithEmailAndPassword;
  } else {
    const error = 'Your password doesnt mach';
    // console.log(error);
    alert(error);
    return error;
  }
};

window.signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      window.location.assign('wall.html');
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      // console.log(error);
    });
  return true;
};


/* window.writeUserData = (userId, name, email, imageUrl) => {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}; */

window.writeNewPost = (uid, userName, body, imageName, imageUrl, privacy, countlike) => {
  // A post entry.
  var postData = {
    uid: uid,
    userName: userName,
    body: body,
    imageName: imageName,
    imageUrl: imageUrl,
    privacy: privacy,
    countlike: countlike,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  firebase.database().ref().update(updates);
  return newPostKey;
};

window.updatePostUser = (uid, userName, body, imageName, imageUrl, privacy, countlike, postId) => {
  const newPost = {
    uid: uid,
    userName: userName,
    body: body,
    imageName: imageName,
    imageUrl: imageUrl,
    privacy: privacy,
    countlike: countlike,
  };

  // const updatesUser = {};
  const updatesPost = {};

  // updatesUser['/user-posts/' + uid + '/' + postId] = newPost;
  updatesPost['/posts/' + postId] = newPost;
  // firebase.database().ref().update(updatesUser);

  return firebase.database().ref().update(updatesPost);
}
