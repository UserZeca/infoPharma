import React from 'react';

import {LogoImg, MenuWrapper} from './styles';
import Button from '../../../Button';
import { Link } from 'react-router-dom';

const Logo = `${process.env.PUBLIC_URL}/img/logoinfoPharm.png`;

function Menu({menuWithButtonLink}){
    console.log('botão valor:',menuWithButtonLink);
    return (
        <MenuWrapper>
            <Link to="/">    
                <LogoImg src={Logo} alt="infoPhama logo" />
            </Link>
            {menuWithButtonLink === true && (
               <Link to="/cadastro/produto">
                    <Button>
                        Novo produto
                    </Button>
                </Link>
            )}
        </MenuWrapper>



    );

}


export default Menu;