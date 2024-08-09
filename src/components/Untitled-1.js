// const person ={
//     firstName: "Shavi",
//     lastName: "Rajput",
//     age: 22,
//     };

// // // let info ={
// // //     age: 23,
// // //     contact: 8218144974,    
// // // };

// // // {person},{info}

// // // const like = { 


// // // const fruits = [ 'apple', 'banana','mango'];
// // // fruit.splice(2, 2

// // const person = {
// //     fullnName: function() {
// //         return this.firstName + "" + 
// //         this.lastName;
// //     }
// // }

// // const person1 = {
// //     firstName: "shavi",
// //     lastname: "rajput"
// // }

// // function person ( first, last, age){
// //     this.firstName = first;

// //     }

// const person0 = {
//     firstName:"shavi",
//     lastName: "rajput",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }


//   const person2 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "shavi",
//     lastName: "rajput"
//   }

function fullName(country, city) {
    return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
  }  

  const person1 = {
    firstName: "Shavi",
    lastName: "Rajput"
  };  


  
  console.log(fullName.call(person1, "India", "Delhi"));
    
  console.log(fullName.apply(person1, ["India", "Delhi"]));