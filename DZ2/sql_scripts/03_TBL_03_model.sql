CREATE TABLE model (
	id SERIAL PRIMARY KEY
	, ime VARCHAR(30)
	, tip_vozila_id INT
);

ALTER TABLE model ADD CONSTRAINT model_fk_tip_vozila 
FOREIGN KEY (tip_vozila_id) REFERENCES tip_vozila (id);
