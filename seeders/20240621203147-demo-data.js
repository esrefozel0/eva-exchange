'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shares', [
      { id: 1, symbol: 'AAA', name: "AAASYMBOL", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, symbol: 'BBB', name: "BBBSYMBOL", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, symbol: 'CCC', name: "CCCSYMBOL", createdAt: new Date(), updatedAt: new Date() },
      { id: 4, symbol: 'DDD', name: "DDDSYMBOL", createdAt: new Date(), updatedAt: new Date() },
      { id: 5, symbol: 'EEE', name: "EEESYMBOL", createdAt: new Date(), updatedAt: new Date() },
    ]);
    await queryInterface.bulkInsert('portfolios', [
      { id: 1, name: 'Portfolio 1', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Portfolio 2', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Portfolio 3', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Portfolio 4', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Portfolio 5', createdAt: new Date(), updatedAt: new Date() },
    ]);
    await queryInterface.bulkInsert('transactions', [
      { quantity: 10, value: 100, status: 'BUY', portfolioId: 1, shareId: 1, createdAt: new Date(), updatedAt: new Date() },
      { quantity: 10, value: 150, status: 'BUY', portfolioId: 2, shareId: 2, createdAt: new Date(), updatedAt: new Date() },
      { quantity: 10, value: 200, status: 'BUY', portfolioId: 3, shareId: 3, createdAt: new Date(), updatedAt: new Date() },
      { quantity: 10, value: 120, status: 'BUY', portfolioId: 4, shareId: 4, createdAt: new Date(), updatedAt: new Date() },
      { quantity: 10, value: 140, status: 'BUY', portfolioId: 5, shareId: 5, createdAt: new Date(), updatedAt: new Date() },
      { quantity: 5, value: 140, status: 'SELL', portfolioId: 1, shareId: 1, createdAt: new Date(), updatedAt: new Date() },
      { quantity: 10, value: 140, status: 'SELL', portfolioId: 2, shareId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shares', null, {});
    await queryInterface.bulkDelete('Portfolios', null, {});

  }
};
