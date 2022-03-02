import styled from 'styled-components';

const OutputStyle = styled.div`
color: white;
  background: hsl(183, 100%, 15%);
  border-radius: 0.75em;
  @media screen and (max-width: 800px){
    padding: 2em 1em 1.5em;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;

  & .reset-btn button{
    width: 100%;
  padding: 0.5em;

  background: hsl(172, 67%, 45%);
  border: none;
  border-radius: 5px;

  color: hsl(183, 100%, 15%);
  font-size: 1.5em;
  font-weight: 700;

  cursor: pointer;
  }
 & .out-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px){
      margin-bottom: 2em;
    }
  & .txt{
    font-weight: 700;
    @media screen and (max-width: 800px){
  }
    & span{
      color: hsl(184, 14%, 56%);
    }
  }
  & .num{
    color: hsl(172, 67%, 45%);
  font-weight: 700;
  font-size: 2.5rem;
  }
}
`;

export default OutputStyle;