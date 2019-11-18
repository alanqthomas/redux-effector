interface ApiResponseSuccess<T> {
  type: 'success'
  data: T
}

interface ApiResponseFailure {
  type: 'failure'
  err: string
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseFailure

export function isError<T>(apiResponse: ApiResponse<T>): apiResponse is ApiResponseFailure {
  return apiResponse.type === 'failure'
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}
