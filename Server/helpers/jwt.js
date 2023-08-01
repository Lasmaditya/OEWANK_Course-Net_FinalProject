import jwt from "jsonwebtoken";
const secretCode = process.env.SECRET_CODE || "Code is wrong";

const tokenGenerator = (data) => {
    const { id, name, email, image, address, handphone, budgetId, savingId } = data;
    const access_token = jwt.sign(
        {
            id,
            name,
            email,
            image,
            address,
            handphone,
            budgetId,
            savingId,
        },
        secretCode
    );
    return access_token;
};

const tokenVerifier = (data) => {
    const verify = jwt.verify(data, secretCode);
    return verify;
};

export { tokenGenerator, tokenVerifier };