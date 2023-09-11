const detail = {
    fname: "Dharmendra",
    lname: "Kumar",
    age: 23,
    fullname: function() {
        return this.fname + " " + this.lname;
    }
};
console.log(this)
console.log(detail.fullname());
console.log(detail.fname);
console.log(detail.lname);
console.log(detail.age);