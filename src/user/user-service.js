const UserService = {
  getUserInfo(db) {
    return db
      .select('*')
      .from('users');
  },
  postUserInfo(db, newUser) {
    return db
      .insert(newUser)
      .into('users');
  }
};

module.exports = UserService;