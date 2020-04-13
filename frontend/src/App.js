import React from 'react'

import Header from './components/Header'

/**
 * Componente
 * Propriedade
 * Estado
 */

function App(){
    return (
        <>
            <Header title="Home page"/>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Logi</li>
                </ul>
            <Header/>
            <Header title="Projects"/>
        </>
    )
}

export default App