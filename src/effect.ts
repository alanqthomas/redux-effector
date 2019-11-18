import { Dispatch, Action, AnyAction } from 'redux'

export type SyncEffectType = void
export type AsyncEffectType = Promise<void>
export type EffectType = SyncEffectType | AsyncEffectType

export type EffectImpl<E extends EffectType, T, A extends Action<T> = AnyAction, S = {}> = (
  action: A,
  dispatch: Dispatch,
  state: S
) => E

export type SyncEffect<T, A extends Action<T> = AnyAction, S = {}> = EffectImpl<SyncEffectType, T, A, S>
export type AsyncEffect<T, A extends Action<T> = AnyAction, S = {}> = EffectImpl<AsyncEffectType, T, A, S>
export type Effect<T, A extends Action<T> = AnyAction, S = {}> = SyncEffect<T, A, S> | AsyncEffect<T, A, S>
