const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bfa1ed94a9f8c151c395ab7';
var userId = '5bfaff36e0b240a4d1408c13';

//pass in no arguments to get everything
//or pass in anything
Todo.find({}).then((todos) => {
    console.log('Todos', todos);
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
})

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('id not found!');
    }
    console.log('Todo by id:', todo);
}).catch((err) => {
    console.log(err);
})


User.findById(userId).then((user) => {
    if(!user){
        return console.log('Could not find user!');
    }
    console.log(JSON.stringify(user));
}).catch((err) => {
    console.log('Error', err);
})
