const moodtracker = require('../schema/mood.tracker.schema');
const mongoose = require('mongoose');

function create(req, res, next) {
  let howareyou = req.body.howareyou;
  let whatyoufeel = req.body.whatyoufeel;
  let whyyoufeelthisway = req.body.whyyoufeelthisway;
  let expressyourself = req.body.expressyourself;
  let MoodTracker = new moodtracker({
    howareyou,
    whatyoufeel,
    whyyoufeelthisway,
    expressyourself,
  });
  MoodTracker.save().then(data => {
    res.send({
      error: false,
      status: 201,
      message: 'Created successfully',
      data: data,
    });
  });
}

function view(req, res, next) {
  moodtracker.find({}).then(data => {
    res.send({
      error: false,
      status: 200,
      message: 'Fetched successfully',
      data: data,
    });
  });
}

function update(req, res, next) {
  moodtracker.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
    if (err) {
      return res.status(500).send({
        error: true,
        message: 'Problem with Updating the MoodTracker recored ',
      });
    }
    res.send({
      error: false,
      status: 200,
      message: 'Updated successfully',
      data: emp,
    });
  });
}

function remove(req, res, next) {
  moodtracker.findByIdAndDelete(req.params.id, (err, emp) => {
    if (err) {
      return res.status(500).send({
        error: true,
        message: 'Problem with Deleting the MoodTracker recored ',
      });
    }
    res.send({
      error: false,
      status: 200,
      message: 'Deleted successfully',
      data: null,
    });
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.remove = remove;
