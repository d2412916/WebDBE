'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleid: DataTypes.STRING
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Dung',
      lastName: 'Nguyen',
      address: 'VietNam',
      gender: '1',
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
