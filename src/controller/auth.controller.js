const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {

    try {

        const { username, email, password } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // data verification and validation
        if (!username || !username.trim()) {
            return res.status(400).json({ message: "Username is required" });
        }
        if (!email || !email.trim()) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (!password || password.trim().length < 4) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const isUserExists = await userModel.findOne({email})

        console.log()

        if(isUserExists)
        {
            return res.status(409).json({
                message:"User Already Exsits"
            })
        }

        // 1. Create user
        const user = await userModel.create({
            username,
            email,
            password
        });

        // 2. Generate token
        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.cookie("token",token)

        // 3. Send response
        res.status(201).json({
            message: "User Register Successfully",
            user,
        });

    } catch (error) {

        console.error("Registration Error:", error);

        res.status(500).json({
            message: "User registration failed"
        });
    }
}

async function test(req,res)
{
    console.log("done")
    
}

module.exports = { registerUser };

