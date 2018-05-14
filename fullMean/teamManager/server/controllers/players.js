const Player = require('mongoose').model('Player');

module.exports = {
  index(request, response) {
    Player.find({})
      .then(players => response.json(players))
      .catch(error => console.log('error:', error));
  },
  create(request, response) {
    Player.create(request.body)
      .then(player => response.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.json(errors);
      });
  },
  update(request, response) {
    Player.findByIdAndUpdate(request.params.playerID, request.body, {
      new: true,
    })
      .then(player => response.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        response.json(errors);
      });
  },
  delete(request, response) {
    Player.findByIdAndRemove(request.params.playerID)
      .then(player => response.json(player))
      .catch(error => console.log('error:', error));
  },
};
