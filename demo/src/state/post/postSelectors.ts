import { Post } from '../../api'
import { TMap } from '../../util'
import { AppState } from '../reducer'
import { PostState } from './postReducer'

export const getPostState = (state: AppState): PostState =>
  state.post

export const getAllPosts = (state: AppState): TMap<Post> =>
  getPostState(state).posts

export const getPost = (id: number) => (state: AppState): Post | null =>
  getPostState(state).posts[id] || null

export const getPostIsFetching = (state: AppState): boolean =>
  getPostState(state).isFetching

export const getPostError = (state: AppState): string | null =>
  getPostState(state).error
