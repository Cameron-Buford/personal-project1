select * from scores s 
join mydrills md on (
    md.mydrill_id = s.mydrill_id
)
where md.mydrill_id = $1;