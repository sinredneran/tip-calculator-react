import styled from 'styled-components';

const InputStyle = styled.div`
  @media screen and (max-width: 800px) {
    padding: 0;
  }
  
  position: relative;
  padding: 0 2rem 0 0;

  display: grid;
  gap: 2em;

  & input{
    -webkit-appearance: none;
  -moz-appearance: textfield;
  text-align: right;
  border: none;

  font-weight: 700;

  font-size: 1.5rem;

  width: 100%;
  border-radius: 5px;
  background: hsl(189, 41%, 97%);
  color: hsl(183, 100%, 15%);
  font-weight: 700;

  padding: 0.5em;

  caret-color: hsl(172, 67%, 45%);

  &:focus{
      outline: 2px solid hsl(172, 67%, 45%);
  }
  }

    & p{
        display: block;
  margin-bottom: 0.5em;

  color: hsl(186, 14%, 43%);
  font-weight: 700;
    }

   & .percentage {
       & input{
&::placeholder{
    text-align: center;
}
       }
   & .btn-container{
    width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 0.75em;
@media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 48%);
}  
& button{
        background: hsl(183, 100%, 15%);
  border: none;
  border-radius: 5px;
  padding: 0.25em 0;

  font-size: 1.5rem;
  font-weight: 700;
  color: white;

  cursor: pointer;
    }
    }
}
& .nop {
    & .nopTxt{
        display: flex;
        justify-content: space-between;
        & span{
            font-weight: 700;
            color: rgb(226, 58, 39);
        }
    }
}
`;

export default InputStyle;