require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('6033be7c1d2f4a32b5962ce4')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('60326b51b050641d37b8c6de')
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
