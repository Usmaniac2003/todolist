const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstName: String,
    lastName: String,
    bio: String
});

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: ProfileSchema,
    createdAt: {
        type: Date,
        default: Date.now
    },
    toDoLists: [{
        type: Schema.Types.ObjectId,
        ref: 'ToDoList'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
