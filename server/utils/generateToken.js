import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_PASSWORD, {
    expiresIn: '10d',
  });
};

export default generateToken;
