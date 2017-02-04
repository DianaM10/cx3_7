DROP TABLE lightsabers;
DROP TABLE jedi;

CREATE TABLE jedi (
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255),
  darkside BOOLEAN,
  AGE INT2
);

CREATE TABLE lightsabers (
id SERIAL8 PRIMARY KEY,
hilt_metal VARCHAR(255) NOT NULL,
colour VARCHAR(255) NOT NULL,
owner_id INT8 REFERENCES jedi(id)
);

INSERT INTO jedi(name, darkside, age) VALUES ('Luke', false, 21);
INSERT INTO jedi(name, age, darkside) VALUES ('Vader', 100, true);
INSERT INTO jedi(name,age) VALUES ('Obiwan', 33);
INSERT INTO jedi(name, darkside, age) VALUES ('Anakin', false, 12);

-- SELECT name FROM jedi;

-- SELECT count(*) FROM jedi;

UPDATE jedi SET darkside = true;

UPDATE jedi SET darkside = false WHERE name = 'Luke';

UPDATE jedi SET darkside = false WHERE name = 'Obiwan' AND age = 33;

-- UPDATE jedi SET age = 22 WHERE name = 'Anakin';

-- UPDATE jedi SET darkside = true WHERE name = 'Anakin';

-- -- UPDATE jedi SET age = 22, darkside = true WHERE name = 'Anakin';

-- DELETE from jedi where name = 'Luke';

SELECT * FROM jedi;

INSERT INTO lightsabers(colour, owner_id, hilt_metal) VALUES ('green', 1, 'palladium');

INSERT INTO lightsabers(colour, owner_id, hilt_metal) VALUES ('green', 1, 'gold');

-- INSERT INTO lightsabers(colour) VALUES ('green');

-- UPDATE lightsabers SET id = 1;

SELECT * FROM lightsabers;

-- SELECT * FROM jedi, lightsabers;

-- SELECT * FROM jedi INNER JOIN lightsabers ON jedi.id = lightsabers.owner_id WHERE name = 'Luke';

-- SELECT * FROM lightsabers INNER JOIN jedi ON jedi.id = lightsabers.owner_id WHERE name = 'Luke';

SELECT * FROM jedi LEFT OUTER JOIN lightsabers on jedi.id =lightsabers.owner_id;
