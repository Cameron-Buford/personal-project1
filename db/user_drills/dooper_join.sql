select * from scores s 
join mydrills md on (
    s.mydrill_id = md.mydrill_id
)
join users u on (
    u.user_id = md.user_id 
)
join drills d on (
    u.user_id = md.user_id
)

where s.score_id = $1;