class Model {
  constructor() {
    this.users = [];
    this.peeps = [];
  }

  addUser(name) {
    this.users.push(name);
  }

  getUsers() {
    return this.users;
  }

  addPeep(title) {
    this.peeps.push(title)
  }

  getPeeps() {
    return this.peeps;
  }
}

module.exports = Model;