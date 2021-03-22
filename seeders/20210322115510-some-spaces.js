"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "How i become a programmer",
          description: "How i learned to stop worrying and love the typos",
          backgroundColor: "#ffffff",
          color: "#000000",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How i become an artist",
          description:
            "How i learned to inspire from nature and implemented so",
          backgroundColor: "#ffffff",
          color: "#000000",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
