type User = {
  id: number
  name: string
}
type UserResponse = {
  "message": string
  "data": Array<User>
}

export type Methods = {
  get: {
    resBody: UserResponse
  }
}