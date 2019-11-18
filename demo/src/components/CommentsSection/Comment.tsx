import React from 'react'

import { Box, Typography } from '@material-ui/core'

import { Comment as CommentType } from '../../api'

interface Props {
  comment: CommentType
}

const Comment = ({ comment }: Props) => {
  return (
    <Box>
      <Typography variant="subtitle1">{comment.name} ({comment.email})</Typography>
      <Typography variant="caption">{comment.body}</Typography>
    </Box>
  )
}

export default Comment
