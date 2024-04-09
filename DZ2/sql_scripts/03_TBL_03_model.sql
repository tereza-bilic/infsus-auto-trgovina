CREATE TABLE model (
	id SERIAL PRIMARY KEY
	, ime VARCHAR(30) NOT NULL
	, tip_vozila_id INT NOT NULL
	, marka_id INT NOT NULL
);

ALTER TABLE model ADD CONSTRAINT model_fk_tip_vozila 
FOREIGN KEY (tip_vozila_id) REFERENCES tip_vozila (id);

ALTER TABLE model ADD CONSTRAINT model_fk_marka
FOREIGN KEY (marka_id) REFERENCES marka (id);

-- PODACI
-- Audi
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A1', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A3', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A4', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A5', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A6', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A7', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A8', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('R8', 1, 1); -- Osobni automobil

-- Alfa Romeo
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('33', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('146', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('147', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('155', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('156', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('159', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('166', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Brera', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Giulia', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Giulietta', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('GT', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('GTV', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Spyder', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Stelvio', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Tonale', 1, 2); -- Osobni automobil

-- BMW
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 1', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 2', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 3', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 4', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 5', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 6', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 7', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 8', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X1', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X2', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X3', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X4', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X5', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X6', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X7', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Z3', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Z4', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Z8', 1, 3); -- Osobni automobil

-- Citroen
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('C3', 1, 4); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('C4', 1, 4); -- Osobni automobil

-- Fiat
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('500', 1, 5); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Brava', 1, 5); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Bravo', 1, 5); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Punto', 1, 5); -- Osobni automobil

-- Ford
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Fiesta', 1, 6); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Focus', 1, 6); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Mondeo', 1, 6); -- Osobni automobil

-- Honda
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Civic', 1, 7); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Accord', 1, 7); -- Osobni automobil

-- Hyundai
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('i30', 1, 8); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('i40', 1, 8); -- Osobni automobil

-- Kia
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Ceed', 1, 9); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Sportage', 1, 9); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Rio', 1, 9); -- Osobni automobil

-- Mercedes-Benz
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('B klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('C klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('E klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('S klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('G klasa', 1, 10); -- Osobni automobil

-- Nissan
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Micra', 1, 11); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Qashqai', 1, 11); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Juke', 1, 11); -- Osobni automobil

-- Opel
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Astra', 1, 12); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Corsa', 1, 12); -- Osobni automobil

-- Peugeot
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('206', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('207', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('208', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('307', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('308', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('406', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('407', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('508', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('2008', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('3008', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('5008', 1, 13); -- Osobni automobil

-- Renault
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Clio', 1, 14); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Megane', 1, 14); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Talisman', 1, 14); -- Osobni automobil

-- Seat
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Cordoba', 1, 15); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Ibiza', 1, 15); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Leon', 1, 15); -- Osobni automobil

-- Skoda
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Fabia', 1, 16); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Octavia', 1, 16); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Superb', 1, 16); -- Osobni automobil

-- Toyota
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Yaris', 1, 17); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Corolla', 1, 17); -- Osobni automobil

-- Volkswagen
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Golf', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Passat', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Tiguan', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Touareg', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Arteon', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('T-Roc', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Up!', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Polo', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('T-Cross', 1, 18); -- Osobni automobil
