import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const SALT = await bcrypt.genSalt(10);

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, password, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const hashedPassword = await bcrypt.hash(password , SALT);

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      password:hashedPassword,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Succesfully" });
  } catch (error) {
    next();
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not Registered");
      error.statusCode = 404;
      return next(error);
    }

    const isverified = await bcrypt.compare(password , existingUser.password)
    if (!isverified) {
      const error = new Error("Incorrect Password");
      error.statusCode = 401;
      return next(error);
    }

    res
      .status(200)
      .json({
        message: "User Login Sucessfully | Welcome Back !!",
        data: existingUser,
      });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Sucessfull from Controller" });
};
