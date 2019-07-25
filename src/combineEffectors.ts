import { Dispatch, Action, AnyAction } from 'redux'

import { Effect } from './effector'

export function combineEffectors<T, A extends Action<T> = AnyAction, S = {}>(effectors: {
  [name: string]: Effect<T, A, S>
}): Effect<T, A, S> {
  return (action: A, dispatch: Dispatch, state: S) => {
    Object.keys(effectors).forEach(k => effectors[k](action, dispatch, state))
  }
}
