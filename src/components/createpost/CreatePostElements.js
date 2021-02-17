import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 680px;
  border-radius:0.5rem;
  background-color: #242526;
  padding: 0.5rem 1rem;
  margin:1rem auto;
`

const TopContent = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

const PostButton = styled.button`
  outline: none;
  background-color:transparent;
  border-radius:999px;
  border:1px solid #263951;
  height:40px;
  padding:0 1rem;
  cursor:pointer;
  color:rgb(68,148,246);

  &:hover {
    background-color:#3A3B3C;
  }
`

const BottomContent = styled.div`
  display:flex;
  align-items: center;
  padding-top:0.5rem;
  border-top:1px solid #3A3B3C;
`

const Input = styled.input`
  border:none;
  outline:none;
  flex:1;
  width:100%;
  margin: 0 1rem;
  height:40px;
  padding: 0 0.5rem;
  color:white;
  background-color: #3A3B3C;
  border-radius:999px;
`

const Option = styled.label`
  flex:1;
  height:40px;
  border-radius:0.5rem;
  cursor:pointer;
  background-color:transparent;

  &:hover {
    background-color:#4E4F50;
  }
`

const OptionContent = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
`

const OptionText = styled.p`
  color: #B0B3AB;
  margin-left: 0.3rem;
  font-size:0.8rem;
  font-weight:500;
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
`

export {
  Container,
  TopContent,
  BottomContent,
  Input,
  Option,
  OptionText,
  PostButton,
  Form,
  OptionContent
}