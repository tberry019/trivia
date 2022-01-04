// @ts-ignore
export const trivApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple',
  timeout: 3000
})