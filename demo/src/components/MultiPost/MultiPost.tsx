import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { Post } from '../../components/Post'
import { fetchAllPosts } from '../../state/actions'
import { getAllPosts } from '../../state/selectors'

const MultiPost = () => {
  const posts = useSelector(getAllPosts)
  const dispatch = useDispatch()

  return (
    <>
      <Typography variant="h4">All</Typography>
      <Button onClick={e => {
        e.preventDefault()
        dispatch(fetchAllPosts())
      }}>
        Fetch All
      </Button>
      {Object.values(posts).map(post => <Post post={post} />)}
    </>
  )
}

export default MultiPost
