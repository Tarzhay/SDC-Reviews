DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName varchar(30)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  productName varchar(60)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
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
  userId int NOT NULL
);