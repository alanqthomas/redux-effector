import { Comment } from '../../api'
import { CommentAction, CommentActionType } from './commentActions'
import { TMap } from '../../util'

const {
  FetchComments,
  FetchCommentsSuccess,
  FetchCommentsFailure,
} = CommentActionType

export interface CommentState {
  comments: TMap<Array<Comment>>
  isFetching: boolean
  error: string | null
}

const initialState: CommentState = {
  comments: {},
  isFetching: false,
  error: null,
}

export const commentReducer = (
  state: CommentState = initialState,
  action: CommentAction
): CommentState => {
  switch (action.type) {
    case FetchComments:
      return {
        ...state,
        isFetching: true,
      }
    case FetchCommentsSuccess:
      return {
        isFetching: false,
        comments: {
          ...state.comments,
          [action.payload.postId.toString()]: action.payload.comments
        },
        error: null,
      }
    case FetchCommentsFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default: return state
  }
}
