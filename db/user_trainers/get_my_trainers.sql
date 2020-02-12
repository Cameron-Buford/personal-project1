select * from trainers t
join mytrainers mt on (
    t.trainer_id = mt.trainer_id
)
join users u on (
    u.user_id = mt.user_id
)
where u.user_id = $1;