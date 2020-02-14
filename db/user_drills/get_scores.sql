select * from scores s 
join mydrills md on (
    md.mydrill_id = s.mydrill_id
)
where md.user_id = $1;