import { tokenVerifier } from "../helpers/jwt";

const authentication = (req, res, next) => {
    console.log(`Authentication`);
    const access_token = req.header.access_token;

    if (access_token) {
        console.log("Token exists");
        try {
            const verifyToken = tokenVerifier(access_token);
            req.userData = verifyToken;
        }
        catch (err) {
            res.status(403).json({message: "Access token is not authenticated",});
        }
        next();
    } else {
        res.status(404).json({message: "Access token is not found",});
    }
};

export default authentication