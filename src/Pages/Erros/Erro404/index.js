import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';


const Container = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    

`;


const List = styled.ul`
    margin: 0;
    padding: 0;

`;

const ListItem = styled.li`
    display: inline-block;
    list-style: none;
    color: red;
    font-size: 100px;
    margin: 0 5px;
    transform: opacity .6;
    animation-name: changeColor;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;


    @keyframes changeColor  {
        0%   {color: red;}
        50%  {color: blue;}
        75%  {color: black;} 
    }

    &:hover{

        opacity: 0.6;

    }

    @media (max-width: 800px) and (orientation: portrait){
        font-size: 60px;
    } 

    @media (max-width: 360px) and (orientation: portrait){
        font-size: 40px;
    }

   

`;


const ListSubItem = styled.li`
    display: flex;
    justify-content: center;
    list-style: none;
    font-size: 28px;
    color: var(--white);
    

    @media(max-width: 800px){
        font-size: 16px;
    }  

    @media (max-width: 360px){
        font-size: 14px;
    }

`;


function Erro404(){

    return (
       
       <PageDefault>
       
        <Container>
                <List>
                    
                    <ListItem>
                    E
                    </ListItem>
                    
                    <ListItem>
                    R
                    </ListItem>

                    <ListItem>
                    R
                    </ListItem>
                    
                    <ListItem>
                    O
                    </ListItem>
                    
                    <ListItem>
                    
                    </ListItem>
                    
                    <ListItem>
                    4
                    </ListItem>
                    
                    <ListItem>
                    0
                    </ListItem>
                    
                    <ListItem>
                    4
                    </ListItem>

                    <ListSubItem>
                        Página não encontrada!
                    </ListSubItem>
                    

                </List>


            </Container>

        </PageDefault>


    );

}

export default Erro404;

