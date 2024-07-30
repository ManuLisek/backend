'use strict';

/**
 * spec controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::spec.spec', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const specId = parseInt(id, 10);
    if (isNaN(specId)) {
      return ctx.badRequest('Invalid ID');
    }

    const entity = await strapi.db.query('api::spec.spec').findOne({ where: { id: specId } });
    if (!entity) {
      return ctx.notFound('Spec not found');
    }

    ctx.send(entity);
  },
}));