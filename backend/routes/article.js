import express from "express";
import mongoose from "mongoose";
import Articles from "../model/articlemodel.js"; 

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const articles = await Articles.find();
        if (!articles.length) {
            return res.status(200).json({ message: "No Articles" });
        }
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching articles", error: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const article = await Articles.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: "Error fetching article", error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        console.log("Route hit:", req.body);
        const { title, description, markdown, photo, author } = req.body;

        // ✅ Check required fields
        if (!title || !markdown || !author) {
            return res.status(400).json({ message: "Title, markdown, and author are required" });
        }

        const newArticle = new Articles({ title, description, markdown, photo, author });
        await newArticle.save();
        res.status(201).json({ message: "Article added successfully", article: newArticle });

    } catch (error) {
        console.error("Error adding article:", error);
        res.status(500).json({ message: "Error adding article", error: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deletedArticle = await Articles.findByIdAndDelete(req.params.id);
        if (!deletedArticle) return res.status(404).json({ message: "Article not found" });
        res.status(200).json({ message: "Article deleted successfully", deletedArticle });
    } catch (error) {
        res.status(500).json({ message: "Error deleting article", error: error.message });
    }
});

export default router;
