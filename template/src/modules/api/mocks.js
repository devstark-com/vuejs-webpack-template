/**
* @see: https://www.npmjs.com/package/vue-api-service#mocks
*/
const mocks = {
  signIn: request => Promise.resolve({
    data: {
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjA1MTY0ODAsImV4cCI6MTU1MjA1MjQ3OCwiYXVkIjoiIiwic3ViIjoiIn0.FrAiYiRB4EqpXiN8WF8HcAYxnkZJxN_PKCOrUMLhrRY',
      refreshToken: 'dummyRefreshToken'
    }
  }),

  refresh: request => Promise.resolve({
    data: {
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjA1MTY0ODAsImV4cCI6MTU1MjA1MjQ3OCwiYXVkIjoiIiwic3ViIjoiIn0.FrAiYiRB4EqpXiN8WF8HcAYxnkZJxN_PKCOrUMLhrRY',
      refreshToken: 'dummyRefreshToken'
    }
  }),

  userData: request => Promise.resolve({
    data: {
      id: 1,
      name: 'JohnDoe'
    }
  })
}

export default mocks
