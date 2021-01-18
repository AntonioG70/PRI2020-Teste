var express = require('express');
var router = express.Router();
var axios = require('axios')
var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMDk4NzM4MSwiZXhwIjoxNjExMDE2MTgxfQ.a5nlMlX7h3g4_thFlDHZNrEtdZYHloHlua0dGwzwfcqZ2NbdvgL5Bq8hk029jaB8fPSnsMHQJOyuD-jHarnvNMz45eFxETuo37XNrciM5E72161FSDbmqF1rXyzwoU4bgenECnVvwYg2YXJDAvgl1AA2z1mgxKSzh4rkJdudAQlBNyvB_kUFQnrHx5e-FH9L39x3jPj2m65envWB3XWGUvGhat1a-71YlJwELHSVxMqKdBZy6VMganCLJwOr4KV9ZhEg_vTHUMh_oojG95Z2SdYe87QTvB40dZZ-xT7ZNm7r6YaGARNd325qWxpwiz3EGQbryrsdIJD1Zagvh4hEGA"

router.get('/classes', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then(dados =>{
      res.render('index', {dados: dados.data})
    })
})

router.get('/classes/:cod', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.cod + '?token=' + token)
    .then(dados =>{
      res.render('classe', {dados: dados.data})
  })
})

module.exports = router;
