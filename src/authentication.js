export default {
  login(email, password, remeberMe) {
    if (email === 'todobox@test.com' && password === 'todoboxtest') {
      const user = {
        email,
        password,
        remeberMe,
      };
      return user;
    }
    return null;
  },
};
