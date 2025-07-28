import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken } from '../utils/generateTokens.js';


// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, 'All fields are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, 'User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userObj = {
        name,
        email,
        password: hashedPassword
    };

    const files = req.files;

    if (files?.avatar?.[0]) {
        userObj.avatar = {
            public_id: files.avatar[0].filename,
            url: files.avatar[0].path
        };
    }

    if (files?.profileImage?.[0]) {
        userObj.profileImage = {
            public_id: files.profileImage[0].filename,
            url: files.profileImage[0].path
        };
    }

    if (files?.otherImage?.[0]) {
        userObj.otherImage = {
            public_id: files.otherImage[0].filename,
            url: files.otherImage[0].path
        };
    }

    const user = await User.create(userObj);

    res.status(201).json(new ApiResponse(201, {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        profileImage: user.profileImage,
        otherImage: user.otherImage
    }, 'User registered successfully'));
});


// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // 1. Validate
    if (!email || !password) {
        throw new ApiError(400, 'Email and password are required');
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new ApiError(401, 'Invalid password');
    }

    // 4. Generate tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // 5. Set refresh token in cookie
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // 6. Send response
    res.status(200).json(
        new ApiResponse(200, {
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            accessToken,
        }, 'Login successful ✅')
    );
});

// Logout 
const logoutUser = asyncHandler(async (req, res) => {
    // Clear refreshToken from cookie
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });

    return res.status(200).json(
        new ApiResponse(200, null, 'User logged out successfully 🔒')
    );
});


export { registerUser, loginUser, logoutUser };