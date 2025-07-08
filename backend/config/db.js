import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://freyameriyl8:resume123@cluster0.lutqzqp.mongodb.net/RESUME')
        .then(() => console.log('DB CONNECTED'))
}

