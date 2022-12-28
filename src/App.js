import React from 'react'
import { Header,Footer,Possiblity,Features,WhatGPT,Blog} from './containers'
import {Cta,Navbar,Brand} from './components'
import './App.css'
 const App = () => {
    return (
        <div className='app'>   
            <div className='gradient_bg'>
             <Navbar></Navbar>
             <Header></Header>
             </div>
             <Brand></Brand>
             <WhatGPT/>
             <Features></Features>
             <Possiblity></Possiblity>
             <Cta/>
             <Blog/>
             <Footer/>
        </div>
    )
}

export default App