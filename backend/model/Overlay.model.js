import mongoose, { Schema } from "mongoose";

const OverlaySchema = new Schema({
    height: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    top: {
        type: Number,
        required: true,
    },
    bottom: {
        type: Number,
        required: true,
    },
    left: {
        type: Number,
        required: true,
    },
    right: {
        type: Number,
        required: true,
    },
});

export const Overlay = mongoose.model('Overlay', OverlaySchema);
