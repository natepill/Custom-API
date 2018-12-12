var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');


// Todo.findOneAndRemove()  --> only diff is that you can specify what criteria you want to delete by

Todo.findByIdAndRemove('5bfa1da6d96c0514fa28bb6f').then((todo) => {
    console.log(todo);
});
