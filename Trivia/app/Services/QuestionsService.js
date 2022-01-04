
import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { trivApi } from "./AxiosService.js"

class QuestionsService {
  async getAllQuestions() {
    // Axios makes the get request adding the provided string to the BaseURL
    let res = await trivApi.get('')
    // the axios response object includes the data from the server in the 'data' property
    // console.log(res.data)
    res.data = res.data.filter(q => q.question)
    // map itterates over the collection of pojos from the server and turns them into class objects that we defined
    let questions = res.data.results(c => new Question(q))
    console.log(questions)
    ProxyState.questions = questions
  }

}


export const questionsService = new QuestionsService()