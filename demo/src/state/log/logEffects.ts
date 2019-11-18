import { SyncEffect } from '@alanqthomas/redux-effector'
import {
  AppActionType,
  AppAction,
  PostActionType,
  CommentActionType,
} from '../actions'
import { AppState } from '../reducer'

const {
  FetchComments
} = CommentActionType
const {
  FetchAllPosts,
  FetchPost,
} = PostActionType

const logEffects: SyncEffect<AppActionType, AppAction, AppState> = (
  action: AppAction,
): void => {
  switch (action.type) {
    case FetchComments:
    case FetchAllPosts:
    case FetchPost:
      console.log('Starting network request')
      return
    default: return
  }
}

export default logEffects
