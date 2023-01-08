const Model = require('./chitterModel')

describe('chitterModel class', () => {
  it('stores a user', () => {
    const model = new Model();

    model.addUser('chris');

    expect(model.getUsers()).toEqual(['chris']);
  });

  it('stores multiple users', () => {
    const model = new Model();
    model.addUser('chris');
    model.addUser('liv');

    expect(model.getUsers()).toEqual(['chris','liv']);
  });

  it('stores a peep', () => {
    const model = new Model();
    
    model.addPeep('hello');
    
    expect(model.getPeeps()).toEqual(['hello']);
  });

  it('stores multiple peeps', () => {
    const model = new Model();
    model.addPeep('title1');
    model.addPeep('title2');

    expect(model.getPeeps()).toEqual(['title1','title2']);
  });
})