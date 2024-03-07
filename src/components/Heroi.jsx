import React, { useState } from 'react';

const Heroi = ({item, handleDelete, handleEdicao, indice}) => {

    const [heroi, setHeroi] = useState(item.heroi)
    const [nome, setNome] = useState(item.nome)
    const [editando, setEditando] = useState(false)
    const [detalhes, setDetalhes] = useState(false)

    const handleClick = () => {
      handleEdicao(indice, nome, heroi)
      setEditando(false)
    }

  return (
    <div>
        {editando ? <div><input onChange={(event) => setHeroi(event.target.value)} value={heroi} /></div> : <h1>{heroi}</h1>}      
        {editando ? <div><input onChange={(event) => setNome(event.target.value)} value={nome} /></div> : <h2>{nome}</h2>}
        <div>{detalhes ? item.descricao : `${item.descricao.substring(0, 40)}...`}<span style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setDetalhes(!detalhes)}>{detalhes ? 'Ver menos' : 'Ver mais'}</span></div>
        {editando ? 
          <div>
            <button onClick={handleClick}>Confirmar edição</button>
            <button onClick={() => setEditando(!editando)}>Cancelar edição</button>
          </div> 
          : <button onClick={() => setEditando(!editando)}>Editar</button>}
        <button onClick={(event) => handleDelete(heroi)}>
            Apagar {heroi}
        </button>
    </div>
  );
};

export default Heroi;