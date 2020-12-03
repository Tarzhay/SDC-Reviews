DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name varchar(30)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  productName varchar(60)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  productId int NOT NULL,
  user_name varchar(30),
  productName varchar(60),
  reviewTitle varchar(40),
  reviewText varchar(256),
  reviewDate varchar(30),
  broadAgeAppeal smallint NOT NULL,
  lengthOfPlay smallint NOT NULL,
  quality smallint NOT NULL,
  value smallint NOT NULL,
  average numeric(3, 2),
  wouldRecommend smallint NOT NULL,
  verified smallint NOT NULL,
  userId int NOT NULL,
  CONSTRAINT fkey_users
    FOREIGN KEY(userId)
      REFERENCES users(id),
  CONSTRAINT fkey_products
    FOREIGN KEY(productId)
      REFERENCES products(id)
);