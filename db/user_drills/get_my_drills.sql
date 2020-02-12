select * from drills d 
join mydrills md on (
    d.drill_id = md.drill_id 
) 
join users u on (
    u.user_id = md.user_id
)
where u.user_id = $1;