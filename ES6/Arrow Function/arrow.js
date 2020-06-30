//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// Lecture : Arrows Functions Basics
/*

const years = [1990,1998,1983,1936,1999];

//ES5

var ages5 = years.map(function(el){

    return 2020 -el;

});
console.log(ages5);

//ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6  = years.map((el, index) => `Age element ${index + 1} : ${2020-el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index +1} : ${age}.`
});
console.log(ages6);

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture : Arrow Functions 2, Lexical 'this' keyword

/*

//ES5

var box5 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is '  + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

//ES6

var box6 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '  + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

var box66 = {
    color : 'green',
    position : 1,
    clickMe : () => {
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '  + this.color;
            alert(str);
        });
    }
}
box66.clickMe();

*/

function Person(name){
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


//ES6

Person.prototype.myFriends6 = function(friends){

    var arr  = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Sayam', 'Minhaj','Gautam'];
new Person('Anuj').myFriends6(friends)