import mongoose from "mongoose";

const musicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: "string",
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Music", musicSchema);
