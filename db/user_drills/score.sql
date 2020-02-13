insert into scores (user_id, mydrill_id)
values($1, $2)
and
UPDATE scores 
SET (partime, score) = ($2, $3)
WHERE score_id = $1;

SELECT * FROM scores;