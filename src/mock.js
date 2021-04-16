import fetchMock from 'fetch-mock'

fetchMock.mock('/admin/login', () => {
  return {
    "msg": "成功",
    "code": 1,
    "data": {
      "workCode": "024017",
      "name": "面条君"
    }
  }
})



