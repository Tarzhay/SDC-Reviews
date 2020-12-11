\c reviews;

\COPY users(userName) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/users.csv' DELIMITER ',' CSV HEADER;

\COPY products(productName) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/products.csv' DELIMITER ',' CSV HEADER;

\COPY reviews(reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/reviews.csv' DELIMITER ',' CSV HEADER;