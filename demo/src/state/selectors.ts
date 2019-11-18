import { AppState } from './reducer'

export * from './comment/commentSelectors'
export * from './post/postSelectors'

export const getAppState = (state: AppState) => state
