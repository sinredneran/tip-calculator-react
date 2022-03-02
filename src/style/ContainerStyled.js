import styled from 'styled-components';

const ContainerStyled = styled.form`
  width: 100%;

padding: 2rem;

background: white;
border-radius: 0.75em 0.75em 0 0;

display: grid;
grid-template-columns: repeat(auto-fill, 50%);

@media screen and (max-width: 800px) { 
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    gap: 2.5em;

    padding: 1.5em;
}
  `;

export default ContainerStyled;