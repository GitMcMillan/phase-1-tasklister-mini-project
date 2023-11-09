// document.addEventListener("DOMContentLoaded", (event) => {
//   // your code here
//   const form = document.querySelector(`form`)
//   form.preventDefault()

//   // DOMContentLoaded.preventDefault()
// });
const taskForm = document.querySelector(`#create-task-form`)
const taskUl = document.querySelector(`#tasks`)

function addTask(e) {
  //block page refreshers
  e.preventDefault()
  //! determine what the user typed
  const input = e.target["new-task-description"].value
  // Create  new li with user input 
  const newLi = document.createElement(`li`) //returns a new node
  newLi.textContent = input
  //create a new button with X aas text
  const btn = document.createElement(`button`)
  btn.addEventListener(`click`, (e) => newLi.remove())
  btn.textContent = "X"
  //append button within the Li
  newLi.appendChild(btn)

  //append the li as child of ul
  taskUl.appendChild(newLi)
  // Empty the form
  e.target.reset()

};


function attachListeners() {
  //! attach all listeners thatv we might need
  taskForm.addEventListener(`submit`, addTask)
}


attachListeners()