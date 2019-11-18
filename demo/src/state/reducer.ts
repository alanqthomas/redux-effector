import { combineReducers } from 'redux'

import { CommentState, commentReducer } from './comment/commentReducer'
import { PostState, postReducer } from './post/postReducer'

export interface AppState {
  post: PostState
  comment: CommentState
}

export default combineReducers<AppState>({
  post: postReducer,
  comment: commentReducer,
})
