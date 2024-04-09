CREATE TABLE oprema (
	id SERIAL PRIMARY KEY
	, opis VARCHAR(50) NOT NULL
);

-- PODACI
INSERT INTO oprema (opis) VALUES ('Klima uređaj');
INSERT INTO oprema (opis) VALUES ('Tempomat');
INSERT INTO oprema (opis) VALUES ('Servo volan');
INSERT INTO oprema (opis) VALUES ('Električni podizači stakala');
INSERT INTO oprema (opis) VALUES ('Centralno zaključavanje');
INSERT INTO oprema (opis) VALUES ('Radio s CD/MP3 playerom');
INSERT INTO oprema (opis) VALUES ('Zvučnici');
INSERT INTO oprema (opis) VALUES ('Aluminijske felge');

-- Dodatna oprema
INSERT INTO oprema (opis) VALUES ('Grijana sjedala');
INSERT INTO oprema (opis) VALUES ('Kožna unutrašnjost');
INSERT INTO oprema (opis) VALUES ('Panoramski krov');
INSERT INTO oprema (opis) VALUES ('Navigacijski sustav');
INSERT INTO oprema (opis) VALUES ('Bluetooth veza');
INSERT INTO oprema (opis) VALUES ('USB priključak');

-- Sigurnosna oprema
INSERT INTO oprema (opis) VALUES ('Airbag (vozač, suputnik, bočni)');
INSERT INTO oprema (opis) VALUES ('ABS sustav');
INSERT INTO oprema (opis) VALUES ('ESP sustav');
INSERT INTO oprema (opis) VALUES ('Traction control');
INSERT INTO oprema (opis) VALUES ('Isofix pronađači za dječja sjedala');
INSERT INTO oprema (opis) VALUES ('Alarm');
INSERT INTO oprema (opis) VALUES ('Imobilizator');

