var express = require('express');
var router = express.Router();
var Casamento = require('../controllers/casamento')

router.get('/casamentos', function(req, res, next) {
  if(req.query['ano'] != undefined){
    Casamento.listar()
      .then(dados => {
        var casamentos = []
        dados.forEach(c => {
          if(c.date.includes(req.query['ano'])){
            casamentos.push(c)
          }
        })
        res.status(200).jsonp({casamentos})
      })
      .catch(e => res.status(500).jsonp({error: e}))
  }
  else if(req.query['nome'] != undefined){
    Casamento.listar()
      .then(dados => {
        var casamentos = []
        dados.forEach(c => {
          if(c.title.includes(req.query['nome'])){
            casamentos.push(c)
          }
        })
        res.status(200).jsonp({casamentos})
      })
      .catch(e => res.status(500).jsonp({error: e}))
  }
  else{
  Casamento.listar()
    .then(dados => {
      var casamentos = []
      dados.forEach(c => {
        var cas = {
          date: c.date,
          title: c.title,
          _id: c._id
        }
        casamentos.push(cas)
      })
      res.status(200).jsonp({casamentos})
    })
    .catch(e => res.status(500).jsonp({error: e}))
  }
});

router.get('/casamentos/noivos', function(req, res, next) {
  Casamento.listar()
    .then(dados => {
      var noivos = []
      dados.forEach(c => {
        var noivo = c.title.split(':')[1].split('c.c.')[0]
        if(!noivos.includes(noivo)){
          noivos.push({noivo: noivo, _id: c._id})
        }
      })
      noivos.sort((n1, n2) => (n1.noivo > n2.noivo) ? 1 : -1)
      res.status(200).jsonp({noivos})
    })
    .catch(e => res.status(500).jsonp({error: e}))
}) 

router.get('/casamentos/:id', function(req, res, next) {
  Casamento.consultar(req.params.id)
    .then(dados => {
      res.status(200).jsonp({casamento: dados})
    })
    .catch(e => res.status(500).jsonp({error: e}))
})  



/*
router.get('/filmes', function(req, res, next) {
  Film.listar()
    .then(dados => {
      var filmes = []
      dados.forEach(d => {
        var filme = {
          title: d.title,
          year: d.year
        }
        filmes.push(filme)
      })
      res.status(200).jsonp({filmes})
    })
    .catch(e => res.status(500).jsonp({error: e}))
});

if(req.query['autor'] != undefined){
    axios.get('http://localhost:3000/publicacoes')
      .then(dados => {
        var lista = []
        var autor = req.query['autor']
        dados.data.forEach(pub => {
          if(pub.authors.includes(autor)){
            lista.push(pub)
          }
        })
        res.status(200).jsonp({lista})
      })
      .catch(e => res.status(500).jsonp({error: e}))
  }

*/
module.exports = router;
