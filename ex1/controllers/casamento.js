var Casamento = require('../models/casamento')

module.exports.listar = () => {
    return Casamento
        .find()
        .exec()
}

module.exports.consultar = id => {
    return Casamento
        .findOne({_id: id})
        .exec()
}

module.exports.inserir = c => {
    var novo = new Casamento(c)
    return novo.save()
}

module.exports.remover = function(id){
    return Casamento.deleteOne({_id: id})
}

module.exports.alterar = function(u){
    return Casamento.findByIdAndUpdate({_id: u._id}, u, {new: true})
}
