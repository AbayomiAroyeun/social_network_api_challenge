const Thought = require('../models/Thought');

const ThoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get thoughts' });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get thought' });
    }
  },

  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create thought' });
    }
  },

  updateThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update thought' });
    }
  },

  deleteThought: async (req, res) => {
    try {
      await Thought.findByIdAndDelete(req.params.id);
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete thought' });
    }
  }
};

module.exports = ThoughtController;