import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: wheat;
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--black);
  font-weight: 600;
  text-align: center;
  position: relative;
  width: 100%;
  margin-bottom: 0px !important;

  

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
