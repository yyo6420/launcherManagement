import jwt from "jsonwebtoken";

export const authorization = (usetTypes) => (request, response, next) => {
    try {
        const header = request.headers.authorization;
        if (!header || !header.startWith("Bearer ")) {
            return response.status(401).send({ message: "Oh no, there is no header :(" });
        }

        const token = header.split(" ")[1];

        const decoded = jwt.verify(token, process.env.SECRET_KKY);

        if (!usetTypes.includes(decoded.userType)) {
            return response.status(403).send({ message: "Sorry, you have no permission :(" });
        }

        request.userId = decoded.id;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return response.status(401).send({ message: "Token expired, you need to login again" });
        } else if (error.name === "JsonWebTokenError") {
            return response.status(401).send({ message: "Your Token is invalid" });
        }
        return response.status(500).send({ message: "Authorization error :(", error: error.message });
    }
}