CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    [description] text
);

INSERT INTO sessions (title, [description])
VALUES 
('Session 1', 'Description 1'),
('Session 2', 'Description 2');