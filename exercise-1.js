// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        
        function tekCamp(nums) {
            for(var i = 1; i <=nums; i++){
                if(i % 3 == 0 && i % 5 == 0){
                    console.log("TEKcamp");
                } else if (i % 5 == 0){
                    console.log("camp");
                } else if (i % 3 == 0){
                    console.log("TEK");
                }else{
                    console.log(i);
                }
            }
        }
        tekCamp(100);



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        function farenheitCelsius(far) {
            let cel = Math.round(((far - 32) * 5/9)*10)/10;
            return cel;
        }
        console.log(farenheitCelsius(98));




        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(cel) {
            let far = Math.round(cel * 9/5 + 32);
            return far;
        }
        console.log(celsiusFarenheit(36.7))





        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if(age >= 18){
                return true;
            }
            return false;
        }
        console.log(canVote(18));







        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr(str) {
            var arr = str.split()
            return arr;
        }
        console.log(strToArr("This is a string"));

        function strToArr1(str) {
            var arr = [...str];
            return arr;
        }
        console.log(strToArr1("This is a string"));

        function strToArr2(str) {
            var arr = Array.from(str);
            return arr;
        }
        console.log(strToArr2("This is a string"));

        function strToArr3(str){
            var arr = Object.assign([], str);
            return arr;
        }
        console.log(strToArr3("This is a string"));





        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            let revNum = number.toString().split('').reverse().join('');
            return revNum;
        }
        console.log(reversePhone(4109221098));




        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...
        function myCar(make, model, year, color){
            var car = {make: make, model: model, color: color};
            return car; 
        }
        console.log(myCar("Audi", "A3", "2015", "black"));






        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        function evenOdd(arr){
            var evenOddObj = {};
            for(var i = 0; i < arr.length; i ++){
              
                if (arr[i] % 2 == 0){
                    //console.log(arr[i] + " = " + "even");
                    evenOddObj[arr[i]] = "even";
                }else{
                    //console.log(arr[i] + " = " + "odd");
                    evenOddObj[arr[i]] = "odd";
                }
            }
            return evenOddObj;
        }
        console.log(evenOdd([10,23,3,4]));







        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.
        for( let i = 0; i < numbers.length; i= i+3){
            console.log(numbers[i]);          
        }
        



        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
     

        foodArray[foodArray.length-1] = {program: 'school'};
        console.log(Object.values(foodArray[foodArray.length-1]));
        //console.log(foodArray);

        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
        

        foodArray.forEach(( num1, index) =>{
            const num2 = adjectiveArray[index];
            if(typeof num1 === 'object'){
                console.log(`${num1.program} is ${num2}`);
            } else if(num1.endsWith('s')){
                console.log(`${num1} are ${num2}`);
            }else{
                console.log(`${num1} is ${num2}`);
            }
        });


        /************************************************************* */
        // Refactor the for() loop to be a while loop.


        for(let i=0; i<10; i++) {
            console.log(" the value of i in the loop is : " + i);
        }


        //your code...
        let i = 0;
        while( i < 10){
            console.log(" the value of i in the loop is : " + i);
            i++;
        }



        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
     
        const d = Math.pow(10,2)
        
        const add = function(a, b){
            return a + b;
        }
        const sum = add(30,2);
        console.log(sum);

        const multiply = function(c,d){
            return c * d;
        }
        const product = multiply(sum, 20);
        console.log(product);

        const divide = function(e,f){
            return e/f;
        }
        const result = divide(product,Math.pow(10,2));
        console.log(result);

        

        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        console.log(`The value is truthy, because 20 is a number, and numbers are type coerced as ${Boolean(20)} when performing logical (boolean) operations`);
        
        // 0
        console.log(`The value is falsy, because zero is type coerced as ${Boolean(0)} when performing logical (boolean) operations`);

        // "zero";
        console.log(`The value is truthy, because "zero" is a string, and strings are type coerced as ${Boolean("zero")} when performing logical (boolean) operations`);

        const zero = 20;
        console.log(`The value is truthy, because zero variable contains 20, which is a number, and numbers are type coerced as ${Boolean(zero)} when performing logical (boolean) operations`);

        // null
        console.log(`The value is falsy, because null is type coerced as ${Boolean(null)} when performing logical (boolean) operations`);
        // "0"
        console.log(`The value is truthy, because "0" is a string and strings are type coerced as ${Boolean("0")} when performing logical (boolean) operations`);
        // !""
        console.log(`The value is truthy, because !"" means not an empty string, and because an empty string is falsy then !"" is truthy, so it is going to be as ${Boolean(!"")} when performing logical (boolean) operations`);
        // {}
        console.log(`The {} are truthy, because objects are always ${Boolean({})}`);
        // () => console.log("hello TEKcamp!");
        console.log(`The value is truthy, because it is a function, and functions are type coerced as ${Boolean(() => console.log("hello TEKcamp!"))} when performing logical (boolean) operations`);
        // 125
        console.log(`The value is truthy, because 125 is a number, and numbers are type coerced as ${Boolean(125)} when performing logical (boolean) operations`);
        // undefined
        console.log(`The value is falsy, because undefined is type coerced as ${Boolean(undefined)} when performing logical (boolean) operations`);
        // ""
        console.log(`The value is falsy, because "" is an empty string, and they are type coerced as ${Boolean("")} when performing logical (boolean) operations`);




        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "saturday";

        switch(day){
            case 'monday':
                console.log("we got a long week ahead of us...");
                break;
            case 'tuesday':
                console.log("tuesday's are still better than mondays, but LONG way to go still");
                break;
            case 'wednesday':
                console.log("We are smack dab in the middle of the week");
                break;
            case 'thursday':
                console.log("Thursday night... the mood is right");
                break;
            case 'friday':
                console.log("TGIF.  Friday truly is the best day of the week!");
                break;
            case 'saturday':
            case 'sunday':
                console.log("It's a weekend!")
                break;              
        }

        if(day === "monday") {
            console.log("we got a long week ahead of us...");
        } else if(day === "tuesday") {
            console.log("tuesday's are still better than mondays, but LONG way to go still");
        } else if (day === "wednesday") {
            console.log("We are smack dab in the middle of the week");
        } else if (day === "thursday") {
            console.log("Thursday night... the mood is right");
        } else if (day === "friday") {
            console.log("TGIF.  Friday truly is the best day of the week!")
        } else {
            console.log("It's a weekend!")
        }



        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 66;
        
        age > 21 ? console.log("adult") : console.log("minor");

        age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");

        age > 65 ? console.log("retired") : console.log("still working...");

        
        
        if (age > 21) console.log("adult"); else {
            console.log("minor");
        }

        if (age > 13 && age < 19) console.log('teen'); else {
            console.log("not a teenager");
        }

        if (age > 65) console.log("retired"); else {
            console.log("still working...");
        }


        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education
        

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your object using the 'this' keyword.
        */

        //your code...
    
        let myInfo = {
            name: 'Irina',
            age: 17,
            gender: 'female',
            healthy: 'yes',
            hobbies: 'yoga',
            profession: 'manager',
            education: 'Management Information Systems',
            learn: function(){
                console.log(this.name + " is learning JavaScript");
            },
            likes: function(){
                console.log(this.name + " likes " + this.hobbies);
            }

        };

        myInfo.learn();
        myInfo.likes();



        /************************************************************* */

        
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            //const doubled = [];
            

            //Refactor the following statements into expressions


            // 1.
            // if(year > 2000 && year < 2100) {
            //     console.log("welcome to the 21st century");
            // }
            
            year > 2000 && year < 2100 && console.log("welcome to the 21st century");

            // 2.
            sum = nums.reduce(function(accumulator, val){
                return accumulator + val;
            });
            console.log(sum);
            // for(let i=0; i<nums.length; i++) {
            //     sum += nums[i];
            // }
            // console.log(sum);
            const array1 = [1, 2, 3, 4];

            
            // 3.   
            const doubled = nums.map(x => x*2);
            console.log(doubled); 
            

            // while(i < nums.length) {
            //     doubled.push(nums[i]*2);
            //     i++;
            // }
            
            // console.log(doubled);
        


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.
        
        //your code...
        const squares = nums.map(x => x*x);
        console.log(squares);




        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.
        
        //your code...
        const isBelowFive = fivePlus.filter(num => num < 5);
        console.log(isBelowFive);







        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.
        
        //your code...

        const arrayLength = 20;
        const nums = Array.from(Array(arrayLength)).map(x=>Math.floor(Math.random() * (9) + 1));
        console.log(nums);
        const sum = nums.reduce(function(accumulator, val){
            return accumulator + val;
        });
        console.log(sum);



        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        showNums.forEach(x => console.log(x/2));


        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
        let totalPieces = 0;
        function chessCalc(pieces) {
            //your code here
            for( let i = 0; i < pieces.length; i++){
                if(pieces[i] == 'pawn'){
                    totalPieces += 1;
                } else if(pieces[i] == 'rook'){
                    totalPieces += 5;
                } else if(pieces[i] == 'bishop'){
                    totalPieces += 3;
                } else if(pieces[i] == 'knight'){
                    totalPieces += 3;
                } else if(pieces[i] == 'queen'){
                    totalPieces += 9;
                } else if(pieces[i] == 'king'){
                    totalPieces += 0;
                //}if (pieces.length == 1 && pieces[i] != 'pawn' && pieces[i] != 'rook' && pieces[i] != 'bishop' && pieces[i] != 'knight' && pieces[i] != 'queen' && pieces[i] != 'king') {
                }else if (pieces.length == 1 && pieces[i] != 'pawn'&& 'rook' && 'bishop' && 'knight' && 'queen' && 'king') {
                    return null;
                }
            }
            return totalPieces;
        }
        console.log(chessCalc(['king','queen','pawn','pawn','pawn','bishop', 'kkk', 'xxx']));
        console.log(chessCalc(['kkk']));





        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
        console.log(ones.reverse());



        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        function performer(cb) {
            //code goes here
            //console.log("function performer");
            cb();
        }
        performer(function(){
            console.log("Callback!")
        });


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];
        
        
        
        

        /************************** */  
        // Find all devs older than 24
       
        
        //your code here...
        let olderThan = devs.filter(person => person.age > 24);
        console.log(olderThan);


        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)
        
        //your code here...
        let notDevs = devs.filter(person => person.tech_stack !== null);
        console.log(notDevs);


        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        
        let totalAge = devs.reduce((accumulator, val) => accumulator + current.age, 0);
        console.log(totalAge);


        /************************** */  
        // Find all female devs

        //your code here...
        let females = devs.filter(person => person.gender == 'f' || person.gender == 'F');
        console.log(females);

        /************************** */  
        // lowercase the genders of every dev

        //your code here...

        let lowerCase = devs.filter(person => person.gender = person.gender.toLowerCase());
        console.log(lowerCase);

        /************************** */  
        // Sort the developers by name

        //your code here
        let sortedByName = devs.sort((a, b) => (a.name > b.name) ? 1: -1);
        console.log(sortedByName)

        /************************** */  
        // Sort the devs by age in descending order

        //your code here
        let sortedByAge = devs.sort((a, b) => (a.age < b.age) ? 1: -1);
        console.log(sortedByAge);


        /************************** */  
        // Sort the male coders by age

        //your code here
        console.log(devs.sort((a, b) => b.age - a.age).filter(person => person.gender === 'm' || person.gender === 'M'));

        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */
       

        //your code here
        devs.forEach((person) => {
            let sentence = "";
            sentence += person.name;
            if(person.tech_stack !== null){
                sentence += " specializes in " + person.tech_stack.join(", ") + ".";
            }else{
                sentence += " is not a developer.";
            }
            console.log(sentence);
        })
        
        

        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];
        let max = 0;
        const arrNum = [];
        function maxNumber(numbers) {
            for(let i = 0; i < numbers.length; i++){
                if(typeof numbers[i] == "string"){
                    if(numbers[i] == "one"){
                        arrNum.push(1);
                    } else if(numbers[i] == "two"){
                        arrNum.push(2);
                    } else if(numbers[i] == "three"){
                        arrNum.push(3);
                    } else if(numbers[i] === '3'){
                        arrNum.push(Number(numbers[i]));
                    }
                }
                if(typeof numbers[i] == "number"){
                    arrNum.push(numbers[i]);
                }   
            }
            for(let x = 0; x < arrNum.length; x++){
                if(arrNum[x] > max){
                    max = arrNum[x];
                }
            }
            console.log(`The maximum numerical number in the array is ${max}`);
            return arrNum;
        }
        console.log(maxNumber(numbersMixed))


        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            numbers.sort(function(a,b){return b-a});
            return numbers;
        };
        const sortedArray = sortNums(arrNum);
        console.log(sortedArray);



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

            //Answer: One of the new features of ES7 is includes(). This method determines whether an array includes a certain value among its entries, returning true or false.
        console.log(sortedArray.includes(20000, 0));



        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set({company : "TEKsystems"},"object");
        mapObj.set("number", 1);
        mapObj.set("string", "Some string");
        mapObj.set("boolean", true);
        mapObj.set("array", [1,2,3,"TEKcamp", false]);
        mapObj.set("undefined", undefined);
        
        
        console.log(mapObj.has({company : "TEKsystems"}));



        //The above console.log() statement returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...
        const mapObj1 = new Map();
        mapObj1.set("object", {company : "TEKsystems"});
        console.log(mapObj1.has("object")); 
        console.log("It wasn't set right before. First one should be a key, and second one is the value.");

        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
        const mapObj2 = new Map();
        mapObj2.set("object", {company : "TEKsystems"});
        mapObj2.set("number", 1);
        mapObj2.set("string", "Some string");
        mapObj2.set("boolean", true);
        mapObj2.set("array", [1,2,3,"TEKcamp", false]);
        mapObj2.set("undefined", undefined);
        let arr = [];
        const iterator = mapObj2.keys();
        for(let i = 0; i < mapObj2.size; i++){
            arr.push(iterator.next().value);
        }
        console.log(arr);


        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathematical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        const operations = [
            function(x,y){return x+y},
            function(x,y){return x-y},
            function(x,y){return x*y},
            function(x,y){return x/y}
        ];
       
        
        function doMath(x,y){
            return operations[Math.floor(Math.random() * operations.length)](x,y);
        }
        console.log(doMath(6,3));

        //your code...



        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        function multiple(x){
            return function(y){
                return x*y;
            }
        }
        const mults = multiple(2);
        const product = mults(5);
        const triples = product * 3;
        console.log(triples);



        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds "is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.
        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  
        
        
        //compound interest formula: A = basis(1 + r)^t
        
        
        function stockGain(basis){
            const message = "is how much the stock has increased."
            return function(yrs){
                const r = 0.05;
                const compIntAmount = (basis*Math.pow((1 + r),yrs)).toFixed(2)
                console.log(`$${compIntAmount} ${message}`);
                return compIntAmount;
            }
        }
        const futureValue = stockGain(5000);
        const compInterestAmount = futureValue(5);
        console.log(compInterestAmount);



// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */

