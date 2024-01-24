import mongoose from 'mongoose';

const userSchemaCheck = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String || Number,
        required: true
    },

    // { timestamps: true }
});


export const UserSchema = mongoose.model("User", userSchemaCheck) 

// export { UserSchema }  