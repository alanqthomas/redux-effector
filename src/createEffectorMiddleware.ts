import { Dispatch, Action, Middleware, MiddlewareAPI } from 'redux'

import { Effect } from './effector'

export const createEffectorMiddleware = <T, A extends Action<T>, S>(
  effector: Effect<T, A, S>
): Middleware<{}, S, Dispatch> => {
  return (api: MiddlewareAPI<Dispatch, S>) => (next: Dispatch) => (action: A): void => {
    next(action)
    effector(action, api.dispatch, api.getState())
  }
}
