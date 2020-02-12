DELETE FROM mytrainers 
WHERE user_id = $1
AND trainer_id = $2;