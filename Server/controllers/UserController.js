import { user } from "../models";
import { encryptPwd, decryptPwd } from "../helpers/bcrypt";
import { tokenGenerator, tokenVerifier } from "../helpers/jwt";

class UserController {
    static async register (req, res) {
        try {
            const { name, email, image, address, handphone, password, } = req.body;
            const hashPwd = encryptPwd(password);
            const result = await user.create({
                name,
                email,
                image,
                address,
                handphone,
                password: hashPwd,
        });
            res.status(201).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async login (req, res) {
        try {
            const { email, password } = req.body;
            const userFound = await user.findOne({
            where: { email },
        });
            if (userFound) {
                const decryptedPwd = decryptPwd(password, userFound.password);
                const access_token = tokenGenerator(userFound);
                decryptedPwd
                ? res.status(200).json({access_token})
                : res.status(400).json({message: `Invalid password`});
            } else {
                res.status(404).json({message: `User not found`});
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllUsers (req, res) {
        try {
            const result = await user.findAll({order: [["id", "asc"]],});
            res.status(200).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async findById (req, res) {
        try {
            const id = +req.params.id;
            const result = await user.findOne({
            where: { id },
        });
            res.status(200).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete (req, res) {
        try {
           const id = +req.params.id;
           const result = await user.destroy({
            where: { id },
           });
           result === 1
           ? res.status(200).json({message: `User ${id} has been deleted`})
           : res.status(400).json({message: `User ${id} has not been deleted`});
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async update (req, res) {
        try {
            const id = +req.params.id;
            const { name, image, address, handphone } = req.body;
            const result = await user.update({
                name,
                image,
                address,
                handphone,
            },
            { where: { id }, });
            result[0] === 1
            ? res.status(201).json({message: `User ${id} has been updated`})
            : res.status(400).json({message: `User ${id} has not been updated`});
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

export default UserController;