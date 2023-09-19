CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    sessionDescription text
);

INSERT INTO sessions (title, sessionDescription)
VALUES 
('Session 1', 'Description 1'),
('Session 2', 'Description 2');