import mongoose from 'mongoose';

//schema for each post that will make it uniform what each posts need to have
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    //image will be converted into string using base64
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
