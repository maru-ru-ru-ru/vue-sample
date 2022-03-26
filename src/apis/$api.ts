/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './api/names'
// prettier-ignore
import { Methods as Methods1 } from './api/names/_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:8000/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/names'
  const GET = 'GET'

  return {
    api: {
      names: {
        _id: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
