UPDATE scores 
SET (score) = ($2)
WHERE mydrill_id = $1;

SELECT * FROM scores;