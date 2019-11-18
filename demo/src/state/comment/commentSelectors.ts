import { Comment } from '../../api'
import { AppState } from '../reducer'
import { CommentState } from './commentReducer'

export const getCommentState = (state: AppState): CommentState =>
  state.comment

export const getComments = (postId: number) => (state: AppState): Array<Comment> | null =>
  getCommentState(state).comments[postId] || null

export const getCommentsIsFetching = (state: AppState): boolean =>
  getCommentState(state).isFetching

export const getCommentsError = (state: AppState): string | null =>
  getCommentState(state).error
