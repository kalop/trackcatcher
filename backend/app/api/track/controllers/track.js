'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {


    async find(ctx) {
        console.log('FIND');
        
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.track.search(ctx.query);
        } else {
            entities = await strapi.services.track.find(ctx.query);
        }
        console.log('ENTITIES');

        console.log(entities);
        
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.track }));
    },
    /**
     * Create a record.
     *
     * @return {Object}
     */

    async create(ctx) {
        console.log('CREATE');
        
        console.log(ctx);

        
        let entity;
        if (ctx.is('multipart')) {
        console.log('1');

            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.track.create(data, { files });
        } else {
        console.log('2');

            entity = await strapi.services.track.create(ctx.request.body);
        }
        console.log('ENTITY');
        console.log(entity);
        console.log(strapi.models.track);
        
        return sanitizeEntity(entity, { model: strapi.models.track });
    },
};