import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { Post } from '../../api'

export enum PostActionType {
  FetchAllPosts         = 'post/fetchAll',
  FetchAllPostsSuccess  = 'post/fetchAll/success',
  FetchAllPostsFailure  = 'post/fetchAll/failure',
  FetchPost             = 'post/fetch',
  FetchPostSuccess      = 'post/fetch/success',
  FetchPostFailure      = 'post/fetch/failure',
}

const {
  FetchAllPosts,
  FetchAllPostsSuccess,
  FetchAllPostsFailure,
  FetchPost,
  FetchPostSuccess,
  FetchPostFailure
} = PostActionType

export const fetchAllPosts = () =>
  createAction(FetchAllPosts, {})

export const fetchAllPostsSuccess = (posts: Array<Post>) =>
  createAction(FetchAllPostsSuccess, { posts })

export const fetchAllPostsFailure = (error: string) =>
  createAction(FetchAllPostsFailure, { error })

export const fetchPost = (id: number) =>
  createAction(FetchPost, { id })

export const fetchPostSuccess = (post: Post) =>
  createAction(FetchPostSuccess, { post })

export const fetchPostFailure = (error: string) =>
  createAction(FetchPostFailure, { error })

export const postActions = {
  fetchAllPosts,
  fetchAllPostsSuccess,
  fetchAllPostsFailure,
  fetchPost,
  fetchPostSuccess,
  fetchPostFailure,
}

export type PostAction = ActionsUnion<typeof postActions>
