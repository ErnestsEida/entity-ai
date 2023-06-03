import axios from 'axios'

interface IRequestParams {
  url: string
  params: Record<string, any>
  successCallback: Function | null
  errorCallback: Function | null
}

interface IFetch extends IRequestParams {
  method: string
}

function FETCH({
  method,
  url,
  params = {},
  successCallback = null,
  errorCallback = null,
}: IFetch) {
  axios
    .request({
      method,
      url,
      params,
    })
    .then((response) => {
      successCallback && successCallback(response.data)
    })
    .catch((response) => {
      errorCallback && errorCallback(response)
    })
}

function POST({
  url,
  params = {},
  successCallback = null,
  errorCallback = null,
}: IRequestParams) {
  FETCH({ method: 'post', url, params, successCallback, errorCallback })
}

function GET({
  url,
  params = {},
  successCallback = null,
  errorCallback = null,
}: IRequestParams) {
  FETCH({ method: 'get', url, params, successCallback, errorCallback })
}

export { GET, POST }
