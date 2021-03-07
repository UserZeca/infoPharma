import React from 'react';
import Logo from '../../../../assets/img/logo.png';
import {LogoImg, MenuWrapper} from './styles';
import Button from '../../../Button';
import { Link } from 'react-router-dom';




function Menu({menuWithButtonLink}){
    console.log('botão valor:',menuWithButtonLink);
    return (
        <MenuWrapper>
            <Link to="/">    
                <LogoImg src={Logo} alt="zecaflix logo" />
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