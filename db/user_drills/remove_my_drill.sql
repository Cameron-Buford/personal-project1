delete from scores
where mydrill_id = $1; 
delete from mydrills 
where mydrill_id = $1;