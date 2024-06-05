const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    repliedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studdatas'
    },
    likes: {
        count: {
            type: Number,
            default: 0
        },
        likedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'studdatas'
            }
        ]
    },
    replies: [this]
},
    { timestamps: true }
);

const DiscussionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studdatas'
    },

    answers: [ReplySchema],
},
    { timestamps: true }
);


const Discussion = mongoose.model('Discussion', DiscussionSchema);

module.exports = Discussion;
