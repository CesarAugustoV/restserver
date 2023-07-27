const {
    response
} = require('express')


const usuariosGet = (req, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q, nombre, apikey
    })
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    
    res.json({
        msg: 'post API - Controller',
        nombre, edad
    })
}

const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - Controller',
        id
})
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
})
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
})
}







module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}