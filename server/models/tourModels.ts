import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        date_start: {
            type: String,
            required: true,
        },
        date_end: {
            type: String,
            required: true,
        },
        avgReview: {
            type: Number,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }

)

export const Tour = mongoose.model('Tour', tourSchema);