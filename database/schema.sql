-- mysql -u root -p < database/schema.sql

DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

-- CREATE TABLE users (
--   id INT AUTO_INCREMENT,
--   userId INT,
--   username VARCHAR(25),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE products (
--   id INT AUTO_INCREMENT,
--   productId INT,
--   productName VARCHAR(100),
--   PRIMARY KEY (id)
-- );

CREATE TABLE reviews (
  id INT AUTO_INCREMENT,
  -- userId INT,
  -- productId INT,
  username VARCHAR(255),
  productName VARCHAR(255),
  reviewText VARCHAR(1000),
  reviewDate DATE DEFAULT (CURRENT_DATE),
  broadAgeAppeal INT,
  lengthOfPlay INT,
  quality INT,
  value INT,
  average DECIMAL(3, 2),
  -- FOREIGN KEY (userId)
  --   REFERENCES users(id),
  -- FOREIGN KEY (productId)
  --   REFERENCES products(id),
  PRIMARY KEY (id)
);

-- INSERT INTO users (userId, username) values (10001, 'maxeinhorn');
-- INSERT INTO users (userId, username) values (10002, 'maximus');
-- INSERT INTO users (userId, username) values (10003, 'maximillius');
-- INSERT INTO users (userId, username) values (10004, 'maximillian');
-- INSERT INTO users (userId, username) values (10005, 'maxwell');
-- INSERT INTO users (userId, username) values (10006, 'maximusprime');
-- INSERT INTO users (userId, username) values (10007, 'max');


-- INSERT INTO products (productID, productName) values (100001, 'Settlers of Catan');
-- INSERT INTO products (productID, productName) values (100002, 'Settlers of Bhutan');
-- INSERT INTO products (productID, productName) values (100003, 'Settlers of Gadol');
-- INSERT INTO products (productID, productName) values (100004, 'Settlers of Mars');
-- INSERT INTO products (productID, productName) values (100005, 'Settlers of Antarctica');
-- INSERT INTO products (productID, productName) values (100006, 'Settlers of Catalan');

-- INSERT INTO reviews (reviewText, reviewdate, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Such a fun game!', '2020-12-1', 5, 4, 5, 4, 4);
-- INSERT INTO reviews (reviewText, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Came in empty box', 1, 1, 2, 1, 1.2);
-- INSERT INTO reviews (reviewText, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Meh', 3, 4, 2, 3, 3);

INSERT INTO reviews (username, productName, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Western lowland gorilla',  'Settlers of Catan',  'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',  '2020-04-29',  5,  2,  3,  4,  3.5);
INSERT INTO reviews (username, productName, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Flightless cormorant',  'Settlers of Catan',  'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',  '2020-09-20',  3,  4,  1,  3,  2.75);
INSERT INTO reviews (username, productName, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Roller, lilac-breasted',  'Settlers of Catan',  'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',  '2020-03-04',  3,  1,  2,  4,  2.5);
INSERT INTO reviews (username, productName, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Wallaby, river',  'Settlers of Catan',  'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',  '2020-07-09',  4,  5,  3,  1,  3.25);
