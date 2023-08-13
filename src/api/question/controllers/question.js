"use strict";

/**
 * question controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::question.question",
  ({ strapi }) => ({
    correctAnswer: async (ctx, next) => {
      const { id } = ctx.request.params;
      const { answer } = ctx.query;

      const question = await strapi.entityService.findOne(
        "api::question.question",
        id
      );
      console.log(question);
      if (answer === question.correctAnswer) {
        return true;
      } else {
        return false;
      }
    },
  })
);
