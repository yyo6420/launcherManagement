import jwt from "jsonwebtoken";

export const createToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3h" })
}