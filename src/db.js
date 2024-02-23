create database if not exist userlogin;

USE usuariologin;

create table users (
    id int primary key,
    nameuser varchar(255) not null,
    pasword varchar(255) not null,
);

describe users;