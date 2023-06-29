import styled from "@emotion/styled"


export const LabelSearch = styled.label`
margin-top: 20px;
margin-left: 20px;
display: block;
  font-weight: bold;
  margin-bottom: 10px;
`

export const InputSearch = styled.input`
padding: 5px;
  padding-left: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`

export const FormSearch = styled.form`
margin-top: 20px;
`

export const SearchButton = styled.button`
  margin: 12px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00d4ff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #b7b7bb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px black;
  }
`;