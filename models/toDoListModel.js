const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoItemSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    dueDate: Date,
    progress: {
        type: String,
        enum: ['to-do', 'in-progress', 'done'],
        default: 'to-do'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ToDoListSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    items: [ToDoItemSchema],
    isArchived: {
        type: Boolean,
        default: false
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    labels: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ToDoList = mongoose.model('ToDoList', ToDoListSchema);

module.exports = ToDoList;
