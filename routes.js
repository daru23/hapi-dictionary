/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: routes.js
 * Json to handler Hapi routes
 */

var handler = require('./handler.js'),
    Joi     = require('joi');

/**
 * routes
 * @type Array
 */
var routes = [
    {   method   : 'GET',
        path     : '/word/{word}',
        config   : {
            handler  : handler.word,
            validate: {
                params: {word: Joi.string()}
            }
        }
    },
    {   method   : 'GET',
        path     : '/words',
        config   : {
            handler  : handler.getAllWords
        }
    },
    {   method   : 'GET',
        path     : '/labels',
        config   : {
            handler  : handler.getAllLabels
        }
    },
    {   method   : 'POST',
        path     : '/word',
        config   : {
            handler  : handler.addWords,
            validate: {
                payload: {
                    data: Joi.array().items(
                        Joi.object({
                            word: Joi.string().required(),
                            translation: Joi.string().required(),
                            label: Joi.boolean()
                        })
                    )
                }
            }
        }
    },
    {   method   : 'POST',
        path     : '/labels',
        config   : {
            handler  : handler.addLabels,
            validate: {
                payload: {
                    data : Joi.object({
                        filter: Joi.object({
                            word: Joi.string().required()
                        }),
                        update: Joi.object({
                            label: Joi.boolean().required()
                        })
                    })
                }
            }
        }
    }
];

/**
 * Export Hapi Routes
 */
module.exports = {
    "routes" : routes
};