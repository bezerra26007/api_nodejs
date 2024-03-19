const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios');
const ProdutosController = require ('../controllers/produtos'); 


router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.CadastrarUsuarios);
router.patch('/usuarios', UsuariosController.EditarUsuarios);
router.delete('/usuarios', UsuariosController.ApagarUsuarios);

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.CadastrarProdutos);
router.patch('/produtos', ProdutosController.EditarProdutos);
router.delete('/produtos', ProdutosController.ApagarProdutos);

module.exports = router;