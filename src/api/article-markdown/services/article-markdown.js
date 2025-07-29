'use strict';

/**
 * article-markdown service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-markdown.article-markdown');
