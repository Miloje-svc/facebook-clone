/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
} from './PostsElements'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { db } from '../../firebase'
import Post from '../post'
import TYPES from '../../state/types'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    db.collection('posts')
      .onSnapshot(snapshot => dispatch({
        type: TYPES.POSTS,
        posts: snapshot.docs.map(doc => doc.data())
      }))
  }, [])

  return (
    <Container>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  )
}

export default Posts
