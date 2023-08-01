import { saving } from "../models";

class SavingController {
    static async create (req, res) {
        try {
            const { percentage, amount, } = req.body;
            const result = await saving.create({
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
            const result = await saving.update({
                amount,
            },
            { where: { id }, });
            result[0] === 1
            ? res.status(201).json({message: `Saving Balance has been update`})
            : res.status(400).json({message: `Saving Balance has not been updated`});
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

export default SavingController;