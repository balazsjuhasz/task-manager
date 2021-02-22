require('../src/db/mongoose');

const User = require('../src/models/user');

// 60327f8979db0c27c5785bbd

User.findByIdAndUpdate('6033bb93f6033d2facb470e5', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
