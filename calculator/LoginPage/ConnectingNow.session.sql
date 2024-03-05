--@block
CREATE DATABASE CgtcLogin;
--@block
USE CgtcLogin;
CREATE TABLE IF NOT EXISTS loginuser(
    user_id INT NOT NULL primary key auto_increment,
    user_name varchar(255),
    user_pass varchar(255)
)
--@block
USE CgtcLogin;
insert into loginuser(user_name, user_pass)
values("ashishCgtc90","ash@9090")
--@block