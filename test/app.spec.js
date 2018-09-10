describe('auth', () => {
  it('createUser is function', () => {
    assert.isFunction(createUser);
  });
  it('createUser is function', () => {
    assert.isFunction(signInUser);
  });
  it('createUser is function', () => {
    assert.isFunction(writeNewPost);
  });
  it('createUser is function', () => {
    assert.isFunction(updatePostUser);
  });

  describe('createUser', () => {
    it('createUser necesita password iguales', () => {
      createUser('', '123', '456', (error) => {
        assert.equal(error.code, 'auth/password-mismatch');
      })
    });
    it('createUser crea usuario', () => {
      createUser('usuario1', '12345678', '12345678', (error, response) => {
        assert.equal(response.username, 'usuario1');
      })
    });
    it('createUser no crea usuario con password cortos', () => {
      createUser('usuario2', '1234', '1234', (error, response) => {
        assert.equal(error.code, 'auth/weak-password');
      })
    });
  })

  describe('signInUser(email, password)', () => {
    it('Debería retornar debería retornar true para resetar constrase;a', (done) => {
      const result = signInUser('email@yopmail.com', '123456');
      assert.equal(result, true);
      done();
    });
  });

  describe('writeNewPost(uid, userName, body, imageName, imageUrl, privacy, countlike)', () => {
    it('Debería retornar un objeto con el key de la nueva visita registrada', (done) => {
      const result = writeNewPost('lOAgxhLUxpXUlFwEiCOD7PfG8iz2', 'Valeria Biaggi', 'Post test', '', '', 'private', '0');
      assert.equal(typeof result, 'string');
      done();
    });
  });

  describe('updatePostUser(uid, userName, body, imageName, imageUrl, privacy, countlike, postId)', () => {
    it('Debería retornar un objeto con todos los datos actualizados de la visita', (done) => {
      const result = updatePostUser('lOAgxhLUxpXUlFwEiCOD7PfG8iz2', 'Valeria Biaggi', 'Laboratoria', 'DSC_0045.JPG', 'https://firebasestorage.googleapis.com/v0/b/my-social-red.appspot.com/o/post-images%2FDSC_0045.JPG?alt=media&token=61e0fcec-dcc1-46ce-ae81-c37906cf2175', 'private', '2', '-LIRxhusm5ZkazMh8Z2b');
      assert.equal(typeof result, 'object');
      done();
    });
  });

});