/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding is the default pointer returned for 'this' when it is called in a non-strict global scope
* 2. Implicit binding is the process where this points to the object on the left of a method
* 3. New binding is when this points to the new object being created by a constructor
* 4. Explicit binding is when this points at an object attached to the "call/apply" methods
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let genericObject = {
    type: "generic",
    size: "unknown",
    genMethod: function(){
        return this.size;
    }
}
console.log(genericObject.genMethod());//this is pointing at genericObject 

// Principle 3
// code example for New Binding
function Constrocter(stuff) {
    this.trait1 = stuff;//this is pointing towards the object being created
}

let constr = new Constrocter('this is where trait goes');//in this case this is being pointed towards "constr" 


// Principle 4
// code example for Explicit Binding
function GenericObject2(props){
    this.trait1 = props.trait1,
    this.trait2 = props.trait2
}

function GenericObject2Child(props){
    GenericObject2.call(this, props);//in this case "this" is pointing at Generic Object 2 to pull out all of the properties and drop them into the child constructor function
}