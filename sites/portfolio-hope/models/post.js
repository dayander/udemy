import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name:String,
    title:String,
    content:String,
    slug: String,

    dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('Post', postSchema);
