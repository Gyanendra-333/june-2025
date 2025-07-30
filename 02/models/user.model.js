import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            select: false, // never return by default
        },
        avatar: {
            public_id: String,
            url: String,
        },
        role: {
            type: String,
            enum: ['viewer', 'creator', 'admin'],
            default: 'viewer',
        },
        subscribersCount: {
            type: Number,
            default: 0,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;

