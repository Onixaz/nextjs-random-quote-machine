import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 50vh;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 3rem;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem 0;
`

export const Input = styled.input`
  margin: 0.1rem 1rem;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  border: 1px solid #898989;

  &:focus {
    border: 1px solid ${({ theme }) => theme.orange};
  }
`

export const Label = styled.label`
  font-weight: 700;
  margin: 0.2rem 1rem;

  padding-left: 2rem;
  font-size: 1rem;
`

export const Error = styled.span`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  color: red;
`
export const SubmitBtn = styled.button`
  margin: 3rem auto;
  //min-width: 150px;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  font-size: calc(1rem + 0.1vw);
  background-color: ${({ theme }) => theme.orange};
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 6em;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
`

export const TextArea = styled.textarea`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  font-size: 1rem;

  outline: none;
  border: 1px solid #898989;
  min-height: 200px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.orange};
  }
`
