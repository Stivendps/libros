/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    Nombre: { type: 'string', required: true, },
    Precio: { type: 'string', required: true, },
    Autor: { type: 'string', required: true, },
    Descripcion: { type: 'string', }
  },

};
