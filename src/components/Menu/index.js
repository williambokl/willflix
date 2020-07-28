import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink';


function Menu() {
    return (
        <nav  className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="Willflix logo" /> 
            </a>

            <Button as="a" href="/">
                Novo Vídeos
            </Button>
        </nav>
    );
}

export default Menu;