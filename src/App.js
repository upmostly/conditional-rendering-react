import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [currentInput, setCurrentInput] = useState(null);
  const [allAges, setAllAges] = useState([]);
  const [errorText, setErrorText] = useState(null);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setCurrentInput(value);

  }
  const submitHandler = () => {
    if (currentInput < 0) {
      setErrorText("Invalid age, negative ages are not accepted")
    }
    else if (currentInput > 120) {
      setErrorText("Invalid age, maximum accepted age is 120")
    }
    else {
      const newAgesState = [...allAges, currentInput]
      setAllAges(newAgesState)
    }
  }

  return <AppWrapper>
    <InputWrapper>
      <label htmlFor="ageInput">Age</label>
      <input name="ageInput" type="number" onChange={inputChangeHandler} />
      {errorText !== null ? <Error>{errorText}</Error> : null}
      <button onClick={submitHandler}>Submit Age</button>
    </InputWrapper>
    <AgesColumn>
      <AgesTitle>Ages</AgesTitle>
      {allAges.map((age, index) => {
        return <div key={index}>{age}</div>
      })}
    </AgesColumn>

  </AppWrapper>;
};
const AppWrapper = styled.div`
display:flex;
flex-flow:row nowrap;
width:60%;
justify-content:space-evenly;
align-items:start;
border:4px solid yellow;
border-radius:0.5rem;
margin:2rem;
`

const InputWrapper = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:space-evenly;
width:20rem;
height:20rem;
border:2px solid black;

& input{
  padding:0.25rem;
  border-radius:0.5rem;
  font-size:1.25rem;
}

& button{
  background-color:blue;
  color:white;
  font-size:1.25rem;
  padding:0.25rem;
  border:none;
  border-radius:0.5rem;

}

`
const AgesColumn = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:space-evenly;
`
const AgesTitle = styled.div`
font-size:1.5rem;
font-weight:bold;
`
const Error = styled.div`
border:2px solid red;
width:auto;
color:red;
padding:0.5rem;
margin:0 1rem 0 1rem;
border-radius:0.5rem;
`

export default App;
