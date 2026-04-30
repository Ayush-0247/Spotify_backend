import Music from "../models/music.js";

export const uploadMusic = async (req, res) => {
    try {
        const { title, artist, duration, releaseDate } = req.body;
        const newMusic = new Music({
            title,
            artist,
            duration,
            releaseDate,
        });
        await newMusic.save();
        res.status(201).json({ message: "Music uploaded successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};