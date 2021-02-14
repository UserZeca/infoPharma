import React from 'react';
import Menu from './components/Menu';
import { Main } from './styles'
import Footer from './components/Footer';

/* Obs: <> </> ou React.Fragment, são similares. Ambos permitem o agrupamento
    de componentes quando fazem a função de um elemento pai.
*/
function PageDefault({children,menuWithButtonLink}){

   
    return (
        <>
                <Menu menuWithButtonLink = {menuWithButtonLink} />
                <Main> 
                    {children}
                </Main>
                <Footer />
        </>

    );



}


export default PageDefault;