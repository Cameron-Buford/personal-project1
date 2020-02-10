SELECT * FROM users
JOIN users ON users.user_id = drills.drill_id
WHERE users.user_id = $1;

SELECT * FROM users
JOIN users ON users.user_id = trainers.trainer_id
WHERE user.user_id = $1;