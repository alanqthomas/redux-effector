import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { Comment } from '../../api'

export enum CommentActionType {
  FetchComments         = 'comment/fetch',
  FetchCommentsSuccess  = 'comment/fetch/success',
  FetchCommentsFailure  = 'comment/fetch/failure',
}

const {
  FetchComments,
  FetchCommentsSuccess,
  FetchCommentsFailure,
} = CommentActionType

export const fetchComments = (postId: number) =>
  createAction(FetchComments, { postId })

export const fetchCommentsSuccess = (postId: number, comments: Array<Comment>) =>
  createAction(FetchCommentsSuccess, { postId, comments })

export const fetchCommentsFailure = (error: string) =>
  createAction(FetchCommentsFailure, { error })

export const commentActions = {
  fetchComments,
  fetchCommentsSuccess,
  fetchCommentsFailure,
}

export type CommentAction = ActionsUnion<typeof commentActions>
