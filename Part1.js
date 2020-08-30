//Number 1
var data = this;
console.log(data);//The value of the keyword this is the window object.

//Number 2
function logThis(){
    return this;
}
logThis();//This function returns the window object because the keyword this has a default binding to the window object.


//Number 3
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}
instructor.sayHi() //This function returns ~ Hello! Tim ~ because the value of the keyword this has been impilcitly set to firstName


//Number 4
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}
instructor.displayInfo() //This function returns undefined because the instructor object which the this keyword refers to in this instance does not have a catOwner key.


//Number 5
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() //This function will return Oakland because this.data.location refers to instructor.data.location. 


//Number 6
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}
    instructor.info.data.logLocation() // We get an error here because the displayLocation method was not defined within the data object. To use this method we would need to borrow it from the info object using the call() method.
