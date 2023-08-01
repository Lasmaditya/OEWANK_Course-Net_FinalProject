import { transaction } from "../models";

class TransactionController {
    static async create (req, res) {
        try {
            const { name, amount, type, } = req.body;
            const result = await transaction.create({
                name,
                amount,
                type,
        });
            res.status(201).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllTransactions (req, res) {
        try {
            const result = await transaction.findAll({order: [["updatedAt", "asc"]],});
            res.status(200).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete (req, res) {
        try {
           const id = +req.params.id;
           const result = await transaction.destroy({
            where: { id },
           });
           result === 1
           ? res.status(200).json({message: `Transaction ${id} has been deleted`})
           : res.status(400).json({message: `Transaction ${id} has not been deleted`});
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async update (req, res) {
        try {
            const id = +req.params.id;
            const { name, amount, type, } = req.body;
            const result = await transaction.update({
                name,
                amount,
                type,
            },
            { where: { id }, });
            result[0] === 1
            ? res.status(201).json({message: `Transaction ${id} has been updated`})
            : res.status(400).json({message: `Transaction ${id} has not been updated`});
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

export default TransactionController;