
import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"

function _drawQuestions() {
  let question = ProxyState.question
  //let template = ''
  question.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
}

export class QuestionsController {
  constructor() {
    ProxyState.on('question', _drawQuestions)

    questionsService.getAllQuestions()
    console.error(error)
  }
}