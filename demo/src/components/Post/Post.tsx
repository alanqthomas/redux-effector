import React from 'react'

import { Box, Card, Typography } from '@material-ui/core'

import { Post as PostType } from '../../api'

interface Props {
  post: PostType
}

const Post = ({ post }: Props) => {
  return (
    <Box m={2}>
      <Card>
        <Box p={3}>
          <Typography variant="h6">
            (&num;{post.id}) - {post.title}
          </Typography>
          <Typography variant="body2">
            {post.body}
          </Typography>
          <Typography variant="subtitle2">
            User {post.userId}
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default Post
