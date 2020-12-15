\c reviews;

ALTER TABLE reviews
  ADD CONSTRAINT fkey_users
      FOREIGN KEY(userId)
      REFERENCES users(id),
  ADD CONSTRAINT fkey_products
      FOREIGN KEY(productId)
      REFERENCES products(id);

CREATE INDEX ON reviews(productId, userId);