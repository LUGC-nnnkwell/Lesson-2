/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
    

    /* STEP 2: Initialize variables
	Don't confuse a variable with no value with one that doesn't exist at all */
    var myVariable = "Hello World!";
    console.log(myVariable + " is of type " + typeof myVariable);
    myAge = 18;
    console.log(myAge + " is of type " + typeof myAge);

    /* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
    myAge = 80;
    myAge = "Eighty";

    // STEP 4: Variable types
    // Numbers
    var num1 = 20;
    console.log(num1 + " is of type " + typeof num1);
    var num2 = 19.9999;
    console.log(num2 + " is of type " + typeof num1);

    // Strings (use '' or "")
    var String1 = "Hello";
    console.log(String1 + " is of type " + typeof String1);
    var String2 = 'World';
    console.log(String2 + " is of type " + typeof String2);

    // Booleans
    var bool1 = true;
    console.log(bool1 + " is of type " + typeof bool1);
    var bool2 = false;
    console.log(bool2 + " is of type " + typeof bool2);

    // Arrays
    var array1 = [1, 2, 3];
    console.log(array1 + " is of type " + typeof array1);
    var array2 = ["one", 20, "three"];
    console.log(array2 + " is of type " + typeof array2);

    // Objects
    var obj1 = {
        name: "Nk Ntuungwe",
        age: 18,
        isMarried: false,
        Tall:{
            height: 6.2,
            weight: 200
        
        }
    };
    console.log(obj1 + " is of type " + typeof obj1);


    // STEP 5: Typing (JavaScript is a loosely-typed language)