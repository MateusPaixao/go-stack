import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/moto.jfif'

import Header from './components/Header'

/**
 * Componente
 * Propriedade
 * Estado
 */

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

    // useState retorna um array com duas posições
    //
    // 1. Variável com o seu valor inicial
    // 2. Função para atualizarmos esse valor
    
    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    }

    return (
        <>
            <Header title="Projects"/>

            <img width={300} src={backgroundImage} alt="Moto"/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App