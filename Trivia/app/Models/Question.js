export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    // Adapter Pattern
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers

  }


  // if !alive add grayscale class to img tag


  // get Template() {
  //   return `
  //   <div class="col-3 p-3">
  //     <div class="bg-white rounded">
  //       <img class="w-100 ${!this.alive ? 'grayscale' : ''}" src="${this.imgUrl}" alt="${this.name}">
  //       <div class="p-relative d-flex justify-content-center">
  //         <div class="p-absolute p-2 bg-primary title-tag text-light">
  //           <p class="m-0">${this.name}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   `
  // }

}