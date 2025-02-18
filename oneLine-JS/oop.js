
function User(name){
    this.name = name;
    // never create function inside constructor function
    this.printName = function(){
        console.log(this.name);
    }
    console.log(this);
}
let kedar = new User("kedar")


// function User(name){
//     this.name = name;
//     console.log(this);
// }
// User.prototype.printName = function(){
//     console.log(this.name)
// }

// let kedar1 = new User("kedar1")