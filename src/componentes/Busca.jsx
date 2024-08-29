import React from 'react'

const Busca = ({busca,setBusca}) => {
  return (
    <div className='busca'>
        <h2>Pesquisar</h2>
        <input type='text' 
        value={busca} 
        onChange={(e) => setBusca(e.target.value)}
        placeholder='Digite para pesquisar...'
        />
    </div>
  )
}

export default Busca
