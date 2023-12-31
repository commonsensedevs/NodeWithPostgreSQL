const express = require('express');
const sessionRouter = express.Router();
//const pool = require('../data/database');
const containerDatabase = require('../data/containerDatabase');

const SessionRepository = require('../data/sessionRepository');
//const sessionRepository = new SessionRepository(pool);
const sessionRepository = new SessionRepository(containerDatabase);

sessionRouter.route('/').get(async(req, res) => {
    try {
      const sessions = await sessionRepository.getAllSessions();
      res.render('sessions',{sessions});

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  sessionRouter.route('/:id').get(async(req, res) => {
    try {
      const session = await sessionRepository.getSessionById(req.params.id);
      res.render('session',{session});
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
module.exports = sessionRouter;
