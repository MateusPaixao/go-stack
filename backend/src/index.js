const express = require('express')
const { uuid } = require('uuidv4')

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


const projects = []

app.get('/projects', (request, response) => {
    
    const { title } = request.query

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects

    return response.json(results)
})

app.post('/projects', (request, response) => {

    const { title, owner } = request.body
    
    const project = { id: uuid(),title, owner }
    projects.push(project)

    return response.json(project)
})

app.put('/projects/:id', (request, response) => {

    const { id } = request.params
    const { title, owner } = request.body 

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project

    return response.json(project)
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }

    projects.splice(projectIndex, 1)

    return response.status(204).send()
})

app.listen(3333, () => {
    console.info('🚀 Back-end started')
})