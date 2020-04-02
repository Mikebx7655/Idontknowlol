let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let otherButton = document.querySelector("#other")
let submitButton = document.querySelector("#submit")


let students = [
  {
   profileImage: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Fitness/Benefits+of+Weight+Training/Carousel.jpg",
    name: "Oumorou, Farid",
    quote: "Every disappointment is a blessing MY FAULT",
    superlative: "The Simp"
  },
  {
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/0/08/Romeo_Santos_y_Juan_Luis_Guerra_%28cropped%29.jpg",
    name: "Ynoa, Steven",
    quote: "No matter who criticizes you, keep singing your own song its your world not theirs.",
    superlative: "The Singer"    
  },
  {
    profileImage: "https://cdn.britannica.com/02/162002-050-02512608/Tupac-Shakur-1993.jpg",
    name: "Purdie, Kayla",
    quote: "Opinions are like mixtapes, i don't want to hear yours",
    superlative: "The money lover"
  },
  {
    profileImage: "data:image/jpeg;base64,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",
    name: "Bello, Anthony",
    quote: "Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; You put water into a bottle it becomes the bottle; You put it in a teapot it becomes the teapot. Now water can flow or it can crash.",
    superlative: "The Poet"
  },
  {
    profileImage: "https://cdn.theatlantic.com/thumbor/rw3VIckWO6T6y_xYc-Q12U0tNAQ=/68x29:1211x672/720x405/media/img/upload/wire/2014/05/19/shrek1/original.jpg",
    name: "De Los Santos, Wesley",
    quote: "If high school was a book, I heard the intro, skimmed the reading, and took away from the blurb ",
    superlative: "The Loudmouth"
  },
  {
    profileImage: "https://staticr1.blastingcdn.com/p/4/2019/11/28/v_1200x680/34d4b971-f055-49d3-8ab6-3fb006478d16.jpg",
    name: "De Jesus, Michael",
    quote: "I hate school, always have, always will, and that feeling will never change.",
    superlative: "The Gamer"
  },
  {
    profileImage: "https://i.pinimg.com/236x/6e/fd/ea/6efdeaa49d85f0783b3436eb1a7f2680--shrek-dreamworks-animation.jpg",
    name: "Velazquez, Lisandro",
    quote: "It takes time to achieve a goal, it doesn't happen over night. Don't give up on your goal.",
    superlative: "The Shrimp"
  },
  {
    profileImage: "https://cdn.vox-cdn.com/thumbor/8eK5q3Jb6ZUWNmNkZq1yg952MQs=/0x0:2072x1398/1200x800/filters:focal(871x534:1201x864)/cdn.vox-cdn.com/uploads/chorus_image/image/66223286/Screen_Shot_2020_01_30_at_4.37.59_PM.0.png",
    name: "Carrillo, Yadira",
    quote: "Achievement Unlocked: Escaped place of Confinement ",
    superlative: "Short Fury"
  },
  
]



let count = 0

  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  if(count > students.length - 1){
    count = 0
  }
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
  if(count == students.length - 1){
    count = -1
  }
})

backButton.addEventListener("click",()=>{
  console.log('back')
  
  count--
    if(count == -1){
    count = students.length - 1
  }
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
if(count > students.length - 1){
    count = -1
  }

})

otherButton.addEventListener("click",()=>{
  console.log('other')
  let count = Math.floor(Math.random()*students.length)
  let countTwo = Math.floor(Math.random()*students.length)
  let countThree = Math.floor(Math.random()*students.length)
  let countFour = Math.floor(Math.random()*students.length)
  
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[countTwo].name
  document.querySelector("#quote").innerHTML = students[countThree].quote
  document.querySelector("#superlative").innerHTML = students[countFour].superlative
    console.log(count)
    console.log(countTwo)
    console.log(countThree)
    console.log(countFour)
})

console.log(students.length - 1)

submitButton.addEventListener("click", ()=>{

console.log('submit')

let imageInput = document.querySelector("#imageInput").value
let nameInput = document.querySelector("#nameInput").value
let quoteInput = document.querySelector("#quoteInput").value
let superlativeInput = document.querySelector("#superlativeInput").value

let pictureValue = document.querySelector("#pic").src = imageInput
let nameValue = document.querySelector("#name").innerHTML = nameInput
let quoteValue = document.querySelector("#quote").innerHTML = quoteInput
let superlativeValue = document.querySelector("#superlative").innerHTML = superlativeInput

  
let profileImage2 = pictureValue
let name2 = nameValue
let quote2 = quoteValue
let superlative2 = superlativeValue


var newstudents = {
ProfileImage: profileImage2,
name: name2,
quote: quote2,
superlative: superlative2,
  }



students.push(newstudents)


  
console.log(pictureValue)
  
console.log(students)

  
})