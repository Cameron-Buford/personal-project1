UPDATE scores 
SET (partime, score) = ($2, $3)
WHERE score_id = $1;

SELECT * FROM scores;