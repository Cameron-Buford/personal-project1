create table users (
    user_id serial primary key,
    username varchar(200)
    password (200)
);

create table drills (
    drill_id serial primary key, 
    name varchar(200),
    distance decimal,
    shots varchar(500),
    setup varchar(1000),
    partime decimal,
    score decimal,
    actions text
);

create table trainers (
    trainer_id serial primary key,
    name varchar(200),
    training_skills varchar(1000),
    biography text,
    credentials varchar(1000)
);

create table mydrills (
    mydrill_id serial primary key,
    user_id int references users.user_id,
    drill_id int references drills.drill_id

);

create table mytrainers (
    mytrainer_id serial primary key, 
    user_id int references users.user_id,
    trainer_id int references trainers.trainer_id

);


select * from users;
select * from drills;
select * from trainers;
select * from mydrills;
select * from mytrainers;