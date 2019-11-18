import React from 'react'

import { Box, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { SinglePost } from './components/SinglePost'
import { MultiPost } from './components/MultiPost'
import { getPostError } from './state/selectors'

const App = () => {
  const postError = useSelector(getPostError)

  return (
    <Box p={7}>
      <Typography variant="h5">{postError && <span>Error: {postError}</span>}</Typography>
      <SinglePost />
      <MultiPost />
    </Box>
  )
}

export default App
