// Style your components here

import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`

export const InnerContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`

export const MemeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 20px;
  color: #35469c;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: 50%;
    font-size: 43px;
    text-align: center;
    margin-bottom: 25px;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  order: 2;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const ResultContainer = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 280px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 46%;
    order: 2;
    margin-left: 10px;
  }
`

export const ResultTopText = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: ${props => props.fontSize}px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const ResultBottomText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Roboto';
  font-weight: 400;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const GeneratorButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  height: 35px;
  width: 95px;
  cursor: pointer;
  border-radius: 5px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
  font-weight: 420;
  margin-bottom: 8px;
`

export const Input = styled.input`
  outline: none;
  border: 1.5px solid #d7dfe9;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  font-size: 16px;
  color: #5a7184;

  &::placeholder {
    font-size: 14px;
    color: #;
  }
`

export const SelectInput = styled.select`
  border: 1.5px solid #d7dfe9;
  height: 40px;
  padding-left: 10px;
  font-size: 14px;
  color: #1e293b;
  border-radius: 3px;
  outline: none;
`

export const FormResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    height: 80%;
  }
`
