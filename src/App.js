import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import './App.scss'

function App() {
  return (
    <div className='app' >
    <Header />
    <Form />
    <Footer />
   </div>
  )
  
}

export default App;
