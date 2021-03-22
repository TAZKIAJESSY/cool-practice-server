"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Sequelize y Tho?",
          content: "db:create, db:migrate, db:seed",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQiQ9xGWSP4bdy_r4U8RheicE7ZYHNcbtsQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Express?",
          content: "express require import",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQiQ9xGWSP4bdy_r4U8RheicE7ZYHNcbtsQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "redux",
          content: "store:action, reudcer, selector",
          imageUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "react",
          content: "pages, components, props",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQiQ9xGWSP4bdy_r4U8RheicE7ZYHNcbtsQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
