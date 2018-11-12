//Require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
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
    var query = "SELECT id,product_name,price FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item No. " +
                res[i].id + ": " +
                res[i].product_name +
                ". $" +
                res[i].price
            );
        } chooseItem();
        console.log(chosenItemNo);
    });
}
//Prompt user to choose an item
function chooseItem() {
    inquirer
        .prompt([
            {
                //name: "chooseProduct"
                name: "chosenProduct",
                type: "userInput",
                message: "Which item would you like to purchase? Please enter the item number.",
                
            }
        ])
        .then(function(getItem) {

            console.log(getItem.chosenProduct)
            var chosenItemNo = getItem.chosenProduct;
            
        });
}
//Store user's choice as a variable

//Check quantity available and store as variable qAvail

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



