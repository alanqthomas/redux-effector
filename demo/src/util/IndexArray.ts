import { TMap } from './TMap'

export function indexArray<T>(ts: Array<T>, getKey: (t: T) => string | number | Symbol): TMap<T> {
  return ts.reduce<TMap<T>>((acc, t) => {
    const key = getKey(t).toString()
    acc[key] = t
    return acc
  }, {})
}
