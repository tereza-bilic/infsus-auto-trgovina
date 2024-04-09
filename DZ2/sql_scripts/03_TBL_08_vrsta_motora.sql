CREATE TABLE vrsta_mjenjaca (
  id SERIAL PRIMARY KEY
  , ime VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO vrsta_motora (ime) VALUES ('Benzinski');
INSERT INTO vrsta_motora (ime) VALUES ('Dizelski');
INSERT INTO vrsta_motora (ime) VALUES ('Hibridni');
INSERT INTO vrsta_motora (ime) VALUES ('Električni');
INSERT INTO vrsta_motora (ime) VALUES ('Plin (CNG/LPG)');
INSERT INTO vrsta_motora (ime) VALUES ('Vodik');
INSERT INTO vrsta_motora (ime) VALUES ('Benzinski Wankel');
