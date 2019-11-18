import { combineEffects } from '@alanqthomas/redux-effector'

import { AppActionType, AppAction } from './actions'
import { AppState } from './reducer'
import commentEffects from './comment/commentEffects'
import postEffects from './post/postEffects'
import logEffects from './log/logEffects'

export default combineEffects<AppActionType, AppAction, AppState>({
  commentEffects,
  postEffects,
  logEffects,
})
