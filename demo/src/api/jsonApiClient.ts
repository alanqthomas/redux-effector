import Axios, { Method, AxiosError } from 'axios'
import { Post, Comment, ApiResponse } from './model'

function request<T, U = undefined>(method: Method, path: string, data?: U): Promise<ApiResponse<T>> {
  return Axios.request<T>({
    method,
    url: `https://jsonplaceholder.typicode.com/${path}`,
    data,
  })
  .then(res => ({
    type: 'success' as 'success',
    data: res.data,
  }))
  .catch((err: AxiosError) => ({
    type: 'failure',
    err: err.message,
  }))
}

export const getPosts = () => request<Array<Post>>('GET', 'posts')

export const getPost = (id: number) => request<Post>('GET', `posts/${id}`)

export const getPostComments = (id: number) =>
  request<Array<Comment>>('GET', `posts/${id}/comments`)
