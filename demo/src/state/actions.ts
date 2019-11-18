import { CommentActionType, CommentAction } from './comment/commentActions'
import { PostActionType, PostAction } from './post/postActions'

export * from './comment/commentActions'
export * from './post/postActions'

export type AppActionType =
  | PostActionType
  | CommentActionType

export type AppAction =
  | PostAction
  | CommentAction
