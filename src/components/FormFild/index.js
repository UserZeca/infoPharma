import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label``;

Label.Text = styled.span`
  color: var(--black);
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;

`;




const Input = styled.input`
  background: wheat;
  display: block;
  height: 57px;
  font-size: 18px;
 
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--primary);

  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
 
  &:not([type='checkbox']){
    width: 100%;
    
  }
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']){
    &:focus:not([type='checkbox'])+ ${Label.Text} {
            transform: scale(.6) translateY(-10px);
            
    }
  } 

  ${function({ hasValue}) {

      return hasValue && css`
        
         &:not([type='color']) + ${Label.Text} {
            transform: scale(.6) translateY(-10px);
         }
        `  
    }}

 `;

const WrapperFormField = styled.div`
    position: relative;

    textarea {
        min-height: 150px;
    }

    input[type="color"] {
        padding-left: 56px;
    }


`;

function FormField({label, value, name , type, onChange , suggestions}){

    const fieldID = `id${name}` ; 
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input' ; 
    const hasValue = Boolean(value.length);
    const hasSuggestions = Boolean(suggestions.length);

    return(
    <WrapperFormField>
      
      <Label
        htmlFor={ name }
      >
        <Input
            as= { tag }
            id={ name }
            hasValue={ hasValue }
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            autoComplete= {hasSuggestions ? 'off' : 'on'}
            list={hasSuggestions ? `suggestionFor_${name}` : undefined}
            /> 

        <Label.Text
            htmlFor={fieldID}
        >
            { label }
        </Label.Text>
        <datalist id={`suggestionFor_${name}`}>
            {
                hasSuggestions &&
                    suggestions.map((suggestions) => (

                        <option value={suggestions} key={`suggestionFor_${name}_option${suggestions}`} >
                            {suggestions}
                        </option>

                    ))

            }

        </datalist>

      </Label>  
    
    </WrapperFormField>

    );

};


FormField.defaultProps = {
    type: 'text',
    value: '' ,
    onChange: () => {},
    suggestions: []
}


FormField.propType = {
    label: PropTypes.string.isRequired, // Uma string obrigatória
    type: PropTypes.string, 
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    suggestions: PropTypes.arrayOf(PropTypes.string),
}

export default FormField;