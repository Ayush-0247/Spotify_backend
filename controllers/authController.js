import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const generateToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET , { expiresIn : "1d"})

}
export const register = async (req, res) => {
    try {
        const { username, email, password , role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role : role,
        });

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = async (req,res) =>{
    try{
        const {email , password} = req.body;

        if(!email || !password){
            res.status(400).json({message : "All fields are required"});
        }
        
        const user = await User.findOne({email});

        if(!user){
            res.status(404).json({message : "User not found"});
        }

        const isMatched = await bcrypt.compare(password , user.password);

        if(!isMatched){
            res.status(400).json({message : "Invalid credentials"});
        }

        res.status(200).json({
            _id : user._id , username : user.username , email : user.email , role : user.role , token : generateToken(user._id)
        })
    
    }catch(error){
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}