import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    activity: String,
    date: Date,
    sets: Number,
    duration: Number,
    description: String,
    setCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostExercise = mongoose.model('PostExercise', postSchema);

export default PostExercise;