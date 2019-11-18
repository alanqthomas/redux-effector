import { AsyncEffect } from '@alanqthomas/redux-effector'
import { Dispatch } from 'redux'

import { getPosts, getPost, isError } from '../../api'
import {
  PostActionType,
  fetchAllPostsSuccess,
  fetchAllPostsFailure,
  fetchPostSuccess,
  fetchPostFailure,
  AppActionType,
  AppAction,
} from '../actions'
import { AppState } from '../reducer'

const { FetchAllPosts, FetchPost } = PostActionType

const postEffects: AsyncEffect<AppActionType, AppAction, AppState> = async (
  action: AppAction,
  dispatch: Dispatch,
  _: AppState
): Promise<void> => {
  switch (action.type) {
    case FetchAllPosts: {
      const res = await getPosts()
      if (isError(res))
        dispatch(fetchAllPostsFailure(res.err))
      else
        dispatch(fetchAllPostsSuccess(res.data))
      return
    }
    case FetchPost:
      const res = await getPost(action.payload.id)
      if (isError(res))
        dispatch(fetchPostFailure(res.err))
      else
        dispatch(fetchPostSuccess(res.data))
      return
    default: return
  }
}

export default postEffects
