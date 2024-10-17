//let name = "hello there"
//name = "haha"

//const pi = 3.14159;
//const length = 45;

//areaS = length*length;

//function add(){}

//const person = {
  //  name: "Lerato",
    //surname: "Mitchell",

    //printName: () =>{
      //  console.log(this)
    //}
//}

//const printval = person.printName()

//console.log(printval)

//const myFunc = (otherFunc) =>{
 //   otherFunc();
//}

//myFunc(()=> {
  //  console.log("The other function is called")
//})

//console.log(document.get)
let Count = 0;
setInterval(() => {
  console.log(Count);
  //Count++;
}, 1)

const url = "https://restcountries.com/v3.1/all";

const changepic = (data) =>{
    const SA = FindSA(data)
    document.getElementById("image").src = SA.flags.png
    //SA.flags.png


}

const getSA = (arr) => arr.find(e => e.cca2 === "ZA");

const FindSA = (array) =>{
  array.find(e => e.cca2 === "ZA")
  const ans = array.filter(e => e.region === "Africa")
  for(let index=0; index < array.length; index ++)
  {
    const element = array[index]
    if(element.cca2 === "ZA")
    {
      return element;
    }
  }
}

fetch(url).then((response)=>{
  console.log(response);
  response.json().then(data => {
    console.log(data);
    changepic(data);
  });
});
//console.log(data);

const payload = {
  "userId": 1,
  "id" : 1,
  "title": "delectus aut autem",
  "cpmleted" : false
}

const requestOption = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  
  body: JSON.stringify(payload)
}

const send = (task) =>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        console.log(response)
        response.json()})
      .then(json => console.log(json))
}



//let title = document.getElementById("test");
//title.style.color = "red";
//title.style.backgroundColor ="orange";
//console.log(title);

//let OldTitle = title.innerText;

//let newTitle = "BBD is great";

//let image = document.getElementById("image");
//let body = document.getElementById("body");

//function sayHello(){
  //title.innerText = "BBD is great"
  //console.log(title.innerText);

  //if(title.innerText == OldTitle)
  //{
    //title.innerText = newTitle;
  //}
  //else
  //{
    //title.innerText = OldTitle;
  //}
//}

//let OtherImage = image.cloneNode();
//function SomeFunc(){

  //body.appendChild(OtherImage);
//}

