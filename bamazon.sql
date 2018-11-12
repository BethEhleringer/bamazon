DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department VARCHAR(15) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("GE electric range", "appliances", 449, 5), ("Samsung electric range", "appliances", 599, 4),
("Samsung Kitchen Package", "appliances", 1699, 3), ("Frigidaire Kitchen Package", "appliances", 1539, 2),
("3/4 ct diamond ring", "fine jewelry", 1399, 2), ("1/2 ct diamond earrings", "fine jewelry", 599, 3),
("10k gold necklace", "fine jewelry", 130, 6), ("10k gold hoops", "fine jewelry", 100, 10),
("d'Orsay pumps", "women's shoes", 70, 2), ("work boots", "men's shoes", 60, 4);


