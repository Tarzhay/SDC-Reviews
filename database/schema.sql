DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  userId INT,
  username VARCHAR(25),
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT,
  productId INT,
  productName VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT,
  userId INT,
  productId INT,
  reviewText VARCHAR(255),
  reviewDate DATE DEFAULT (CURRENT_DATE),
  broadAgeAppeal INT,
  lengthOfPlay INT,
  quality INT,
  value INT,
  average INT,
  FOREIGN KEY (userId)
    REFERENCES users(id),
  FOREIGN KEY (productId)
    REFERENCES products(id),
  PRIMARY KEY (id)
);

INSERT INTO users (userId, username) values (10001, 'maxeinhorn');
INSERT INTO users (userId, username) values (10002, 'maximus');
INSERT INTO users (userId, username) values (10003, 'maximillius');
INSERT INTO users (userId, username) values (10004, 'maximillian');
INSERT INTO users (userId, username) values (10005, 'maxwell');
INSERT INTO users (userId, username) values (10006, 'maximusprime');
INSERT INTO users (userId, username) values (10007, 'max');


INSERT INTO products (productID, productName) values (100001, 'Settlers of Catan');
INSERT INTO products (productID, productName) values (100002, 'Settlers of Bhutan');
INSERT INTO products (productID, productName) values (100003, 'Settlers of Gadol');
INSERT INTO products (productID, productName) values (100004, 'Settlers of Mars');
INSERT INTO products (productID, productName) values (100005, 'Settlers of Antarctica');
INSERT INTO products (productID, productName) values (100006, 'Settlers of Catalan');

-- INSERT INTO reviews (reviewText, reviewdate, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Such a fun game!', '2020-12-1', 5, 4, 5, 4, 4);
-- INSERT INTO reviews (reviewText, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Came in empty box', 1, 1, 2, 1, 1.2);
-- INSERT INTO reviews (reviewText, broadAgeAppeal, lengthOfPlay, quality, value, average) values ('Meh', 3, 4, 2, 3, 3);

INSERT INTO reviews (userId, productId, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values (1,  1,  'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',  '2019-09-05',  3,  5,  2,  1,  2.75);
INSERT INTO reviews (userId, productId, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values (2,  2,  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',  '2019-10-19',  4,  5,  1,  3,  3.25);
INSERT INTO reviews (userId, productId, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values (3,  3,  'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',  '2020-04-26',  1,  1,  1,  4,  1.75);
INSERT INTO reviews (userId, productId, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average) values (4,  4,  'Vivamus vel nulla eget eros elementum pellentesque.',  '2020-04-20',  2,  5,  2,  5,  3.5);





-- mysql -u root -p < database/schema.sql
