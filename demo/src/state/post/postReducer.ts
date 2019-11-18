import { Post } from '../../api'
import { PostAction, PostActionType } from './postActions'
import { TMap, indexArray } from '../../util'

const {
  FetchAllPosts,
  FetchAllPostsSuccess,
  FetchAllPostsFailure,
  FetchPost,
  FetchPostSuccess,
  FetchPostFailure,
} = PostActionType

export interface PostState {
  posts: TMap<Post>
  isFetching: boolean
  error: string | null
}

const initialState: PostState = {
  posts: {},
  isFetching: false,
  error: null,
}

export const postReducer = (
  state: PostState = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case FetchPost:
    case FetchAllPosts:
      return {
        ...state,
        isFetching: true,
      }
    case FetchPostSuccess:
      return {
        ...state,
        isFetching: false,
        error: null,
        posts: {
          ...state.posts,
          [action.payload.post.id]: action.payload.post,
        }
      }
    case FetchAllPostsSuccess:
      return {
        ...state,
        isFetching: false,
        error: null,
        posts: indexArray(action.payload.posts, post => post.id),
      }
    case FetchPostFailure:
    case FetchAllPostsFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default: return state
  }
}
