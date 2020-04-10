const express = require('express')

const app = express()

/**
 * Métodos HTTP
 * GET: buscar informação
 * POST: criar informação
 * PUT: atualizar informação
 * PATCH: atualizar informação especifica
 * DELETE: deletar informação
 */

 /**
  * Nomeclatura
  * server.metodo('/recurso')
  */

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
})

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 3'
    ])
})

app.listen(3333, () => {
    console.info('🚀 Back-end started')
})