create database music;
use music;

create table usuario(
id_usuario int(4) primary key auto_increment,
nome_usuario varchar(30) not null,
email_usuario varchar(90) not null,
senha_usuario varchar(40) not null,
foto varchar (20),
imagem blob
);

select * from usuario;
