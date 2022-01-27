ALTER TABLE books ALTER COLUMN title TYPE text;

INSERT INTO books (title, author) VALUES ('Sally Ride: America''s First Woman in Space', 'Lynn Sherr');
INSERT INTO books_categories VALUES (4, 1);
INSERT INTO books_categories VALUES (4, 5);
INSERT INTO categories (name) VALUES ('Space Exploration');
INSERT INTO books_categories VALUES (4, 7);

INSERT INTO books (title, author) VALUES ('Jane Eyre', 'Charlotte Brontë');
INSERT INTO books_categories VALUES (5, 2);
INSERT INTO books_categories VALUES (5, 4);

INSERT INTO books (title, author) VALUES ('Vij''s: Elegant and Inspired Indian Cuisine', 'Meeru Dhalwala and Vikram Vij');
INSERT INTO categories (name) VALUES ('Cookbook');
INSERT INTO categories (name) VALUES ('South Asia');
INSERT INTO books_categories VALUES (6, 1);
INSERT INTO books_categories VALUES (6, 8);
INSERT INTO books_categories VALUES (6, 9);