const express = require('express')

const app = express()

app.use(express.json())

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


  /**
   * Tipos de Parametro
   * 
   * Query param: Filtros e paginação -> url?name=mateus&old=23
   * Route param: Identificar -> url/1
   * Request body: conteúdo, criar ou editar -> url (JSON)
   */

app.get('/projects', (request, response) => {
    
    const { title, owner } = request.query
    console.log(title, owner)

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
})

app.post('/projects', (request, response) => {

    const { title, owner } = request.body
    console.log(title, owner)

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/projects/:id', (request, response) => {

    const { id } = request.params
    console.log(id)

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