import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Avatar } from '@material-ui/core'
import {
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
  PostParagraph
} from './PostElements'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'


const Post = ({ post }) => {
  const [like, setLike] = useState(false)
  const [likes,] = useState(post.likes)
  const [comments,] = useState(post.comments)
  const [shares,] = useState(post.shares)

  return (
    <PostContainer key={post.id}>
      <PostHeader>
        <PostUser>
          <Avatar src={post.avatar} />
          <UserName>{post.username}</UserName>
        </PostUser>

        <MoreHorizOutlinedIcon />
      </PostHeader>

      <PostDesc>
        <Desc>{post.desc}</Desc>
      </PostDesc>

      <PostImage src={post.images} />

      {/* <PostDesc>
        {likes > 0 && <PostParagraph>{likes} likes</PostParagraph>}
        {comments > 0 && <PostParagraph>{comments} shares</PostParagraph>}
        {shares > 0 && <PostParagraph>{shares} comments</PostParagraph>}
      </PostDesc> */}

      <PostOptions>
        <Option onClick={() => { setLike(like => !like) }}>
          <FontAwesomeIcon icon={faThumbsUp} color={like ? "#2D88FF" : "#B0B3B8"} />
          <OptionText style={{ color: like ? "#2D88FF" : "#B0B3B8" }}>Like</OptionText>
        </Option>

        <Option>
          <FontAwesomeIcon icon={faComment} color="#B0B3B8" />
          <OptionText>Comment</OptionText>
        </Option>

        <Option>
          <FontAwesomeIcon icon={faShare} color="#B0B3B8" />
          <OptionText>Share</OptionText>
        </Option>
      </PostOptions>
    </PostContainer>
  )
}

export default Post