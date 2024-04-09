const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarEnderecoClientes(request, response) {
        try {
            const sql = `SELECT 
            end_id, usu_id, end_logradouro, end_num, end_bairro, 
            end_complemento, end_pincipal, cid_id = 1 AS usu_id  
            FROM  Endereços 
            WHERE usu_ativo = 1;`;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de endereço de cliente.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async cadastrarEnderecoClientes(request, response) {
        try {

             // parâmetros recebidos no corpo da requisição
             const { end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, end_principal, cid_id } = request.body;

            const sql = `INSERT INTO usuarios 
            (end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, end_principal, cid_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        // definição dos dados a serem inseridos em um array

        const values = [end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, end_principal,cid_id];


        const execSql = await db.query(sql, values);
            // identificação do ID do registro inserido
            
        const nItens = Endereços [0].length;         

        

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de endereço de cliente.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async editarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar endereço de cliente.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async apagarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar endereço de cliente.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
}

