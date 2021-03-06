var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
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
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
  //chooseItem();
  
});


// function which prompts the user for which item they would like to buy
function start() {
//List all of the items available for sale.
var query = "SELECT id,product_name,price FROM products";
connection.query(query, function(err, res) {
  if (err) throw err;
  for (var i = 0; i < res.length; i++) {
      inquirer
      .prompt([
          {
              name: "chooseProduct",
              type: "userInput",
              message: "Which item would you like to purchase?",
              choices: [res[i].id]
          }
      ])
    console.log(
      "Item No. " +
        res[i].id + ": " +
        res[i].product_name +
        ". $" +
        res[i].price
    );
    chooseItem()
  }
  
}); 
} 

