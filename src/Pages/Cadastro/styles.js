import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
`;


const Button = styled.a`
    color: var(--white);
    text-decoration: none;
`;

const ContainerBox = styled.div`
    
    width: 100%;
    border: 0;
    display: flex;
    justify-content: space-between;
 
`;


const ItenBox = styled.div`
    display: block;
`;




const WrapperButton = styled.div`
    
    box-sizing: content-box;
    border: 0px;
    border-radius: 4px ;
    background-color: var(--green);
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    margin-bottom: 5%;
    margin-left: 5px;
    padding: 10px;   
    transition: opacity .3s;

    &:hover, &:focus{
        opacity: 0.6;
    }

`;


function ButtonLink(props){

    console.log('Props',props);

    return (

        <>        
            <WrapperButton>
                <Button as={Link} to={props.to} >
                    {props.children}
                </Button>
            
            </WrapperButton>

        </>
    );   
}

const ContainerList = styled.section`
    box-sizing: content-box;
    margin-top: 5%;

    display: flex;
    flex-wrap: wrap;
`;


const ItemList = styled.div`

    padding: 10px;
    margin: 5px;
    background-color: ${({ backgroundColor }) => `${backgroundColor}`}

`;




export {
    Container,
    ContainerBox,
    ItenBox,
    ButtonLink,
    ContainerList,
    ItemList,

}