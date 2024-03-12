const { json } = require ('express')
const db = require ('../database/connection');

module.exports = {
    async listarusuarios (request, response) {
        try{
            return response.status(200).json ({confirma: 'listar usuarios'});

        } catch (error) {
            return response.status(500).json ({ confrima: 'erro', message: error});
        }
    } 
}