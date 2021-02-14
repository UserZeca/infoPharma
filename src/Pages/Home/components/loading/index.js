import React from 'react';
import styled , { css } from 'styled-components';

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
    font-size: 100px;
    margin: 0;

    @media (max-width: 800px) and (orientation: portrait){
        font-size: 60px;
    } 

    @media (max-width: 360px) and (orientation: portrait){
        font-size: 40px;
    }

`;

const ListItemwithAnimation = styled.li`

    display: inline-block;
    list-style: none;
    color: var(--black);
    font-size: 100px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;

    ${function({ order }) {

        const name = `TurnOff${order}`;

        switch(order){
        
            case '1':
       
                return css`
                    animation-name: ${name};
                    

                    @keyframes ${name} {
                        0% {
                            color: red;
                        }
                    }       
            `
           
            
            case '2':
                return css `
                    animation-name: ${name};

                     @keyframes ${name} {
                        50% {
                            color: blue;
                        }
                    }    
                
                `;
            
        

            case '3':
                return css `
                    animation-name: ${name};

                     @keyframes ${name} {
                        75% {
                            color: green;
                        }
                    }    
                
                `;
            
          
         

            default:
              return css`

                animation: none;
              `;

        }
      
    }}

    @media (max-width: 800px) and (orientation: portrait){
        font-size: 60px;
    } 

    @media (max-width: 360px) and (orientation: portrait){
        font-size: 40px;
    }



`;




function Loading(){

    return (
        <>
            <Container>
                <List>
                    <ListItem>
                        Carregando
                    </ListItem>
                    
                    <ListItemwithAnimation order='1' >
                        .
                    </ListItemwithAnimation>

                    <ListItemwithAnimation order='2' >
                        .
                    </ListItemwithAnimation>

                    <ListItemwithAnimation order='3'>
                        .
                    </ListItemwithAnimation>

                </List>



            </Container>


        </>

    );



}


export default Loading;