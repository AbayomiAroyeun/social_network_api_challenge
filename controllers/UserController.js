const User = require('../models/User');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends');
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get user' });
    }
  },

  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
};

module.exports = UserController;
