import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    email: {type: String, required: true},
    name: {type: String, required: true},
    profile_picture: {type: String, default: ''},
    age: Number,
    address: {type: String, required: true},
    truck_pic:  {type: String, default: ''},
    rate: {type: Number, required: true},
    truck_number:{type: Number, required: true},
    truck_type:{type: String, required: true},
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User