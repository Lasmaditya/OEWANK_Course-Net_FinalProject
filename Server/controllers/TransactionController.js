const { Transaction, Saving, Budget } = require("../models");


class TransactionController {
    static createTopup(req, res) {
        
    }

    static createExpenditure(req, res) {
        res.json({
            message: "createExpenditure"
        });
    }
}

module.exports = TransactionController;