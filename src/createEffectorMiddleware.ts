import { Dispatch, Action, Middleware, MiddlewareAPI } from 'redux'

import { Effect } from './effect'

export const createEffectorMiddleware = <T, A extends Action<T>, S>(
  effect: Effect<T, A, S>
): Middleware<{}, S, Dispatch> => {
  return (api: MiddlewareAPI<Dispatch, S>) => (next: Dispatch) => (action: A): void => {
    next(action)
    effect(action, api.dispatch, api.getState())
  }
}
