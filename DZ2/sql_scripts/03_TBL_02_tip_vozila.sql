CREATE TABLE tip_vozila (
	id SERIAL PRIMARY KEY
	, ime VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO tip_vozila (ime) VALUES ('Osobni automobil');
INSERT INTO tip_vozila (ime) VALUES ('Teretni automobil');
INSERT INTO tip_vozila (ime) VALUES ('Autobus');
INSERT INTO tip_vozila (ime) VALUES ('Motocikl');
INSERT INTO tip_vozila (ime) VALUES ('Kamion');
INSERT INTO tip_vozila (ime) VALUES ('Traktor');
INSERT INTO tip_vozila (ime) VALUES ('Bicikl');
INSERT INTO tip_vozila (ime) VALUES ('Moped');
