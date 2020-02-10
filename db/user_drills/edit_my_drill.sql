UPDATE mydrills 
SET (partime, score) = ($2, $3)
WHERE drill_id = $1;

SELECT * FROM mydrills;