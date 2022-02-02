var express = require('express');
var router = express.Router();
const Team = require('../models/team');

// CRUD

/* GET users listing. */
router.post('/', function (req, res, next) {
    // Save the object in mongo
    const { name, stadium, size } = req.body;
    let newTeam = new Team({
        name,
        stadium,
        size,
    });

    newTeam.save((err) => {
        if (err) {
            console.log(err);
        }
    });

    res.send('Teams page');
});

router.get('/', function (req, res, next) {

    let resp;

    Team.find({}, (err, data) => {
        if (err) {
            console.log('There is an error', err)
        }
        data.forEach((entry) => {
            console.log(entry)
        })
    })
    res.send(`${resp}`);
})

router.put('/', function (req, res, next) {

    const id = req.query.id;

    Team.updateOne({_id: id}, {name: 'A generic Team Name'}, (err, data) => {
        if (err) {
            console.log('There is an error', err)
        }
        console.log(data)
    })
    res.send(`Deleted`);
})

router.delete('/', function (req, res, next) {

    const id = req.query.id;

    Team.deleteOne({_id: id}, (err, data) => {
        if (err) {
            console.log('There is an error', err)
        }
        console.log(data)
    })
    res.send(`Deleted`);
})

module.exports = router;