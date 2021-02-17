import styled from 'styled-components'

const PostContainer = styled.div`
  background-color: #242526;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  width: 100%;
  margin: 1rem  0;
`

const PostHeader = styled.header`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding:0 1rem;

  .MuiSvgIcon-root{
    color:#999CA0;
    cursor:pointer;
  }
`

const UserName = styled.h3`
  color: white;
  font-size:1rem;
  font-weight: 500;
  margin-left: 0.5rem;
  cursor:pointer;
`

const PostUser = styled.div`
  display:flex;
  align-items: center;
`

const PostDesc = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  color:white;
`

const Desc = styled.p`
  color:white;
  font-size:1.2rem;
  font-weight:500;
`

const PostImage = styled.img`
  width:100%;
  height:100%;
  display:block;
`

const PostOptions = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  cursor:pointer;
  padding: 0.5rem 0.5rem 0 0.5rem;
  border-top:1px solid #3E4042;
`

const Option = styled.div`
  border-radius: 0.2rem;
  flex:1;
  height:40px;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #B0B3B8;

  &:hover {
    background-color: #3A3B3C;
  }
`

const OptionText = styled.p`
  margin-left:0.5rem;
  font-weight: 500;
  font-size:1.1rem;
`

const PostParagraph = styled.p`
  color:#B0B3B8;
  font-size:0.9rem;
  font-weight: 500;
  margin-right:1rem;
`

export {
  PostContainer,
  PostHeader,
  PostDesc,
  Desc,
  PostUser,
  UserName,
  PostImage,
  PostOptions,
  Option,
  OptionText,
  PostParagraph,
}