const { where } = require('sequelize');
const db = require('../models/index');
const AppError = require('../errors/appError');

const sellShare = async (postData) => {
    const portfolio = await db.Portfolio.findOne({
        where: {id: postData.portfolioId}
    })
    if (!portfolio) throw new AppError('Bad Request: Portfolio not found', 400);
    const share = await db.Share.findOne({
        where: {symbol: postData.symbol}
    })
    if (!share) throw new AppError('Bad Request: Share not found', 400);
    const lastTransaction = await db.Transaction.findOne({
        order: [['createdAt', 'DESC']],
    })
    const transactionList = await db.Transaction.findAll({
        where: {portfolioId: postData.portfolioId, shareId: share.id}
    })

    let totalBuyQuantity = 0;
    let totalSellQuantity = 0;

    transactionList.forEach(transaction => {
        const quantity = parseFloat(transaction.quantity);
        if (transaction.status === 'BUY') {
            totalBuyQuantity += quantity;
        } else if (transaction.status === 'SELL') {
            totalSellQuantity += quantity;
        }
    });
    if (totalBuyQuantity - totalSellQuantity < postData.quantity) {
        throw new AppError('Bad Request: Portfolio quantity not enough', 400);
    }

    return await db.Transaction.create({portfolioId: postData.portfolioId, shareId: share.id, value: lastTransaction.value, quantity: postData.quantity, status: 'SELL'});
};

const buyShare = async (postData) => {
    const portfolio = await db.Portfolio.findOne({
        where: {id: postData.portfolioId}
    })
    if (!portfolio) throw new AppError('Bad Request: Portfolio not found', 400);
    const share = await db.Share.findOne({
        where: {symbol: postData.symbol}
    })
    if (!share) throw new AppError('Bad Request: Share not found', 400);
    const lastTransaction = await db.Transaction.findOne({
        order: [['createdAt', 'DESC']],
    })
    return await db.Transaction.create({portfolioId: postData.portfolioId, shareId: share.id, value: lastTransaction.value, quantity: postData.quantity, status: 'BUY'});
};
module.exports = {
    sellShare,
    buyShare
};