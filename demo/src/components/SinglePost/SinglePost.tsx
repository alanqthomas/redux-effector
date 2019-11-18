import React, { useState } from 'react'

import { Typography, CircularProgress, Button, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPost } from '../../state/actions'
import { getPost, getPostIsFetching } from '../../state/selectors'
import { Post } from '../Post'
import { CommentsSection } from '../CommentsSection'

const SinglePost = () => {
  const [postId, setPostId] = useState('')
  const post = useSelector(getPost(parseInt(postId, 10)))
  const postIsFetching = useSelector(getPostIsFetching)
  const dispatch = useDispatch()

  return (
    <>
      <Typography variant="h4">Single</Typography>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(fetchPost(parseInt(postId, 10)))
      }}>
        <TextField
          onChange={e => {
            e.preventDefault()
            setPostId(e.target.value)
          }}
          value={postId}
        />
        {postIsFetching
          ? <CircularProgress />
          : post
            ? (
              <>
                <Post post={post} />
                <CommentsSection postId={post.id} />
              </>
            )
            : postId && <Button type="submit">Fetch Post</Button>
        }
      </form>
    </>
  )
}

export default SinglePost
