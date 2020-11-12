const router = require('express').Router();
const sequelize = require('../config/connection');
const { Visits, Users, Ailments } = require('../models')

router.get('/', (req, res) => {
  Visits.findAll({
    include: [
      { model: Users, as: 'doctor' },
      { model: Users, as: 'patient' },
      { model: Ailments, as: 'ailment' }
    
    ],
  })
    .then((data) => {
      const visits = data.map((visit) => visit.get({ plain: true }));
      res.render('visits', { visits });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
module.exports = router;