import { budget } from "../models";

class BudgetController {
    static async create (req, res) {
        try {
            const { percentage, amount, } = req.body;
            const result = await budget.create({
                percentage,
                amount,
        });
            res.status(201).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async update (req, res) {
        try {
            const id = +req.params.id;
            const { amount } = req.body;
            const result = await budget.update({
                amount,
            },
            { where: { id }, });
            result[0] === 1
            ? res.status(201).json({message: `Budget Balance has been update`})
            : res.status(400).json({message: `Budget Balance has not been updated`});
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

export default BudgetController;