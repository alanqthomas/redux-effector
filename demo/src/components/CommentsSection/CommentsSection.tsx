import React from 'react'

import { Box, Typography, CircularProgress, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import Comment from './Comment'
import { fetchComments } from '../../state/actions'
import { getComments, getCommentsError, getCommentsIsFetching } from '../../state/selectors'

interface Props {
  postId: number
}

const CommentsSection = ({ postId }: Props) => {
  const dispatch = useDispatch()
  const comments = useSelector(getComments(postId))
  const error = useSelector(getCommentsError)
  const isFetching = useSelector(getCommentsIsFetching)

  return (
    <Box>
      <Typography variant="subtitle1">Comments</Typography>
      <Box p={2}>
        {error && <span>Error: {error}</span>}
        {isFetching
          ? <CircularProgress />
          : comments !== null
            ? comments.map(comment => <Comment comment={comment} />)
            : <Button onClick={e => {
                e.preventDefault()
                dispatch(fetchComments(postId))
              }}>
                Fetch Comments
              </Button>
        }
      </Box>
    </Box>
  )
}

export default CommentsSection
