DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar(30)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  productName varchar(60)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  userName varchar(30),
  productName varchar(60),
  reviewTitle varchar(120),
  reviewText varchar(256),
  reviewDate varchar(30),
  broadAgeAppeal smallint NOT NULL,
  lengthOfPlay smallint NOT NULL,
  quality smallint NOT NULL,
  value smallint NOT NULL,
  average numeric(3, 2) NOT NULL,
  wouldRecommend smallint NOT NULL,
  verified smallint NOT NULL,
  productId int NOT NULL,
  userId int NOT NULL,
  CONSTRAINT fkey_users
    FOREIGN KEY(userId)
      REFERENCES users(id),
  CONSTRAINT fkey_products
    FOREIGN KEY(productId)
      REFERENCES products(id)
);