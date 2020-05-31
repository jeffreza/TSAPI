import mongoose from 'mongoose';

const ICommentsShema = new mongoose.Schema(
    {
        CommentText: { type: String, required: true },
        displayingId: { type: String, required: true },
        CommetingPersonId: { type: String, required: true },
        rating_value:{type:String},
        type:{type:String}
    },
    { timestamps: true }
);
export const ICommentsSchema = mongoose.model<IComments>('IComments', ICommentsShema);
