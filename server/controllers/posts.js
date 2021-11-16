import express from 'express';
import mongoose from 'mongoose';

import PostExercise from '../models/postExercise.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const PostExercises = await PostExercise.find();
                
        res.status(200).json(PostExercises);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostExercise.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { date, sets, description, activity, duration } = req.body;

    const newPostExercise = new PostExercise({ date, sets, description, activity, duration })

    try {
        await newPostExercise.save();

        res.status(201).json(newPostExercise );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { date, sets, activity, description, duration } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { activity, date, message, duration, description, _id: id };

    await PostExercise.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostExercise.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const counterPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostExercise.findById(id);

    const updatedPost = await PostExercise.findByIdAndUpdate(id, { setCount: post.setCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;