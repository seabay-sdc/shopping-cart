DROP DATABASE IF EXISTS sdctest;

CREATE DATABASE sdctest;

\c sdctest;

CREATE TABLE products (
  id SERIAL,
  prodid VARCHAR(45) PRIMARY KEY,
  name VARCHAR(45),
  price DECIMAL(7,2),
  category VARCHAR(45),
  img1_url VARCHAR(45)
);

CREATE TABLE cartItems (
  id SERIAL PRIMARY KEY,
  prodid VARCHAR(45),
  name VARCHAR(45),
  price DECIMAL(7,2),
  category VARCHAR(45),
  img1_url VARCHAR(45),
  quantity INT
);

-- \copy products (prodid, name, price, category, img1_url) FROM './seeding.csv' DELIMITER ',' CSV HEADER;
