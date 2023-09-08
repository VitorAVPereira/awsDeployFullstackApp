const { User } = require('../models/user');
const connectDB = require('../config/database/database');

const UserService = {
    register: async (data) => {
        try {
            await connectDB();
            const registerUser = await User.create(data);
            return registerUser;
        } catch (err) {
            throw err;
        }
    },
    findByEmail: async (email) => {
        try {
            await connectDB();
            const user = await User.findOne({ email });
            return user;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = UserService;