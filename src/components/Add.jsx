import React, { useState } from 'react'

const Add = ({herois, setHerois}) => {
    const [novoHeroi, setNovoHeroi] = useState({
        nome: '',
        heroi: ''
    })

    const handleChange = (event) => {
        setNovoHeroi({
            ...novoHeroi,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setHerois([
            ...herois,
            novoHeroi
        ])
        setNovoHeroi ({
            nome: '',
            heroi: ''
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={novoHeroi.nome} name="nome" />
                    <input type="text" onChange={handleChange} value={novoHeroi.heroi} name="heroi" />
                    <button>Incluir novo heroi</button>
                </form>
            </div>
        </div>
    )
}

export default Add