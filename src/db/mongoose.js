const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(connectionURL, connectionOptions);

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: 'Andrew',
//   age: 'Mike',
// });

// me.save()
//   .then(() => console.log(me))
//   .catch((error) => console.log('Error!', error));

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const newTask = new Task({
  description: 'Housework',
  completed: false,
});

newTask
  .save()
  .then(() => console.log(newTask))
  .catch((error) => console.log('Error!', error));
