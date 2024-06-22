const tradeService = require('../services/tradeServices');
const SellShare = async (req, res) => {
    try {
        const post = await tradeService.sellShare(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(error.statusCode).json({ error: error.message });
    }
};
const BuyShare = async (req, res) => {
    try {
        const post = await tradeService.buyShare(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(error.statusCode).json({ error: error.message });
    }
};

module.exports = {
    SellShare,
    BuyShare
};