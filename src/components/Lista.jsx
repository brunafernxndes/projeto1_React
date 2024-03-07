import React from 'react';
import Heroi from './Heroi';

const Lista = ({herois, setHerois}) => {

    const handleDelete = (heroi) => {
        setHerois(herois.filter(item => item.heroi != heroi))
    }

    const handleEdicao = (indice, nome, heroi) => {
        console.log(`${indice} ${nome} ${heroi}`)
        const novoHeroi = {...herois[indice], nome, heroi}
        const novosHerois = [...herois.slice(0, indice), novoHeroi ,...herois.slice(indice+1, herois.length)]
        setHerois(novosHerois)
    }

  return (
    <div>
        {herois.map((item, indice) => {
            return (
                <Heroi key={item.nome} indice={indice} handleEdicao={handleEdicao} item={item} handleDelete={handleDelete} />
            );
        })}
    </div>
  )
}

export default Lista;