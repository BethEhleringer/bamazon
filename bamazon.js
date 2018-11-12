//Require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
var rightItemNo
var userTotal
//Create connection to MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    showItems();

});

//Show user items
function showItems() {
    var query = "SELECT id,product_name,price,stock_quantity FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item No. " +
                (res[i].id - 1) + ": " +
                res[i].product_name +
                ". $" +
                res[i].price +
                "Available: " + res[i].stock_quantity
            );
            var quantityAvailable = res[i].stock_quantity;
        }
        //Prompt user to choose an item
        inquirer
            .prompt([
                {
                    name: "chosenProduct",
                    type: "userInput",
                    message: "Which item would you like to purchase? Please enter the item number.",
                },
                {
                    name: "chosenQ",
                    type: "userInput",
                    message: "How many do you want to order?",
                }

            ])
            .then(function (getItem) {
                console.log(getItem.chosenQ);
                console.log(getItem.chosenProduct);
                console.log(res[getItem.chosenProduct].price);
                console.log(getItem.chosenProduct)
                //Save user's response as a variable
                var chosenItemNo = getItem.chosenProduct;
                console.log(res[chosenItemNo]);
                console.log("You have chosen " + res[chosenItemNo].product_name + ". ")
                userTotal = getItem.chosenQ * (res[getItem.chosenProduct].price)
                console.log("Your total is: $" + userTotal)
                //  console.log("Available: " + res[chosenItemNo].quantityAvailable)
                //Check quantity available and store as variable qAvail
                function checkQuantity() {
                    console.log("Available: " + res[chosenItemNo].stock_quantity);
                    if (res[chosenItemNo].stock_quantity < getItem.chosenQ) {
                        console.log("Insufficient supply")

                    } else {
                        
                        console.log("")
                        updateProduct();
                        var newQuantity = res[chosenItemNo].stock_quantity - getItem.chosenQ;
                        newQuantity = newQuantity.toString();
                        rightItemNo = chosenItemNo + 1;
                        rightItemNo = rightItemNo.toString();
                        
                        console.log("New Quantity: " + newQuantity)
                        var query = connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [{ stock_quantity: newQuantity },
                            { id: rightItemNo }

                            ])
                        //updateQuantity();
                    }
                }
                //  d
                checkQuantity();
                function updateProduct() {


                }

            });


    });
}
//Prompt user to choose an item

//Store user's choice as a variable

//update Quantity
/*function updateQuantity(){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {stock_quantity: }
        ]
    )
}*/
//Ask user how many of item he/she wants to order

//Store chosenQ as variable

//Check to see if chosenQ is greater or equal to qAvail

//If qAvail < chosenQ, let user know
//"We're sorry, we only have qAvail available. Please choose another quantity."

//Store new chosenQ as variable and check ...

//IF chosenQ < or = to qAvail, then

//Let user know their total charge.
//price * chosenQ = userTotal
//update userTotal
//update qAvail. Subtract chosenQ from qAvail.
//update database.



