import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Removes extra spaces
    },
    description: {
        type: String,
        trim: true,
    },
    markdown: {
        type: String,
        required: true,
    },
    photo: {
        type: String, // Stores an image URL
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Dynamic date generation
    }
}, { timestamps: true }); // Enables `createdAt` and `updatedAt`

const Articles = mongoose.model("Articles", articleSchema);

export default Articles;
