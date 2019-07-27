#!/bin/bash

echo 'Seeding the test database'

psql -d productsTEST -c "INSERT INTO productsTest (prodid, name, price, category, img1_url) VALUES ('abc123xyz', 'Delicious Frozen Carpet', 16.99, 'Home Goods', 'picturesoffrozencarpet.com/pic1');"
psql -d productsTEST -c "INSERT INTO productsTest (prodid, name, price, category, img1_url) VALUES ('gha583kax', 'Fresh Cool Potatoes', 59.31, 'Jewelry', 'coolpotatoes.net/pics');"
psql -d productsTEST -c "INSERT INTO productsTest (prodid, name, price, category, img1_url) VALUES ('wjq831xol', 'Neat Rusty Spoons', 18.79, 'Automotive', 'spoons.gov/pics');"
psql -d productsTEST -c "INSERT INTO productsTest (prodid, name, price, category, img1_url) VALUES ('qox839utj', 'Flaky Retired Meat', 82.14, 'Lighting', 'meatmeatmeat.com/meat');"

psql -d productsTEST -c "INSERT INTO cartItems (prodid, name, price, category, img1_url, quantity) VALUES ('abc123xyz', 'Delicious Frozen Carpet', 16.99, 'Home Goods', 'picturesoffrozencarpet.com/pic1', 6);"
psql -d productsTEST -c "INSERT INTO cartItems (prodid, name, price, category, img1_url, quantity) VALUES ('gha583kax', 'Fresh Cool Potatoes', 59.31, 'Jewelry', 'coolpotatoes.net/pics', 4);"