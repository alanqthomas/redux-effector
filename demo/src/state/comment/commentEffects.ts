import { AsyncEffect } from '@alanqthomas/redux-effector'
import { Dispatch } from 'redux'

import { getPostComments, isError } from '../../api'
import {
  CommentActionType,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  AppActionType,
  AppAction,
} from '../actions'
import { AppState } from '../reducer'

const { FetchComments } = CommentActionType

const postEffects: AsyncEffect<AppActionType, AppAction, AppState> = async (
  action: AppAction,
  dispatch: Dispatch,
  _: AppState
): Promise<void> => {
  switch (action.type) {
    case FetchComments: {
      const res = await getPostComments(action.payload.postId)
      if (isError(res))
        dispatch(fetchCommentsFailure(res.err))
      else
        dispatch(fetchCommentsSuccess(action.payload.postId, res.data))
      return
    }
    default: return
  }
}

export default postEffects
