import React, { useState } from 'react'
import styles from 'styled-components'
import Lista from './components/Lista';
import Add from './components/Add';
import './index.css';

const App = () => {

    const heroisIniciais = [
        {nome: 'Clark Kent', heroi: 'Superman', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae porttitor lorem. Ut eu lobortis dolor. In mi velit, interdum et fringilla nec, lacinia sed tortor.'},
        {nome: 'Bruce Wayne', heroi: 'Batman', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae porttitor lorem. Ut eu lobortis dolor. In mi velit, interdum et fringilla nec, lacinia sed tortor.'},
        {nome: 'Diana Prince', heroi: 'Wonder Woman', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae porttitor lorem. Ut eu lobortis dolor. In mi velit, interdum et fringilla nec, lacinia sed tortor.'},
    ]

    const [herois, setHerois] = useState(heroisIniciais);
    
    return (
        <Div>
            <Lista herois={herois} setHerois={setHerois} />
            <Add herois={herois} setHerois={setHerois} />
        </Div>
    );
};

const Div = styles.div`
    text-align: center;
`

export default App