const mongoose = require('mongoose');

mongoose.connect('"mongodb://127.0.0.1:27017/MoodTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once('open', function () {
    console.log('Database connected Successfully');
  })
  .on('error', function (err) {
    console.log('Error', err);
  });
module.exports = mongoose;
