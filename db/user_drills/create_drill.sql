insert into drills (
     name, distance, shots, setup, partime, score, actions, drill_admin 
    
)
VALUES (
    $1, $2, $3, $4, $5, $6, $7, false
) returning drill_id;




