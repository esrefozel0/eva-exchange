const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post('/BUY', [
    body('portfolioId').isInt().withMessage('Portfolio ID must be an integer'),
    body('symbol').isLength({ min: 3, max: 3 }).withMessage('Symbol must be 3 characters long').isUppercase().withMessage('Symbol must be uppercase'),
    body('quantity').isFloat({ min: 1.0 }).withMessage('Quantity must be a positive decimal'),
], validateRequest, tradeController.BuyShare);

router.post('/SELL', [
    body('portfolioId').isInt().withMessage('Portfolio ID must be an integer'),
    body('symbol').isLength({ min: 3, max: 3 }).withMessage('Symbol must be 3 characters long').isUppercase().withMessage('Symbol must be uppercase'),
    body('quantity').isFloat({ min: 1.0 }).withMessage('Quantity must be a positive decimal'),
], validateRequest, tradeController.SellShare);

module.exports = router;
