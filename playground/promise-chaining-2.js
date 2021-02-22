require('../src/db/mongoose');

const Task = require('../src/models/task');

Task.findByIdAndDelete('6033be7c1d2f4a32b5962ce4')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
