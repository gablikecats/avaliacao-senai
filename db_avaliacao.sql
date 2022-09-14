drop database db_avaliacao;
create database db_avaliacao;
use db_avaliacao;

create table acompanhamento(
id_acompanhamento int primary key auto_increment,
id_instituicao int not null,
data_acompanhamento date,
id_pedagogo int not null,
id_supervisor int not null,
id_instrutor int not null,
id_turma int not null,
id_ambiente int not null,
id_curso int not null
);

create table usuario(
id int primary key auto_increment,
nome varchar(200) not null,
email_institucional varchar(200) not null,
registro varchar(200) not null,
senha varchar(200) not null,
funcao varchar(200) not null
);

create table turma(
id_turma int primary key auto_increment,
id_curso int not null,
id_instrutor int not null,
turma varchar(200) not null
);

create table instituicao(
id_instituicao int primary key auto_increment,
instituicao varchar(200) not null
);

create table ambiente(
id_ambiente int primary key auto_increment,
ambiente varchar(200)
);

create table curso(
id_curso int primary key auto_increment,
curso varchar(200) not null
);

create table aspecto(
id_aspecto int primary key auto_increment,
nome_aspecto varchar(200) unique
);

create table pergunta(
id_pergunta int primary key auto_increment,
id_aspecto int not null,
pergunta varchar(200) not null unique,
observacao varchar(200) not null,
createdAt date not null,
updatedAt date not null
);

create table pergunta_acompanhamento(
id_pergunta_acompanhamento int primary key auto_increment,
id_pergunta int not null,
id_acompanhamento int not null,
nota varchar(200) not null,
observacao varchar(200) not null
);

alter table acompanhamento
add constraint fk_acompanhamento_instituicao
foreign key acompanhamento(id_instituicao) references instituicao(id_instituicao);

alter table acompanhamento
add constraint fk_acompanhamento_pedagogo
foreign key acompanhamento(id_pedagogo) references usuario(id);

alter table acompanhamento
add constraint fk_acompanhamento_supervisor
foreign key acompanhamento(id_supervisor) references usuario(id);

alter table acompanhamento
add constraint fk_acompanhamento_instrutor
foreign key acompanhamento(id_instrutor) references usuario(id);

alter table acompanhamento
add constraint fk_acompanhamento_turma
foreign key acompanhamento(id_turma) references turma(id_turma);

alter table acompanhamento
add constraint fk_acompanhamento_ambiente
foreign key acompanhamento(id_ambiente) references ambiente(id_ambiente);

alter table acompanhamento
add constraint fk_acompanhamento_curso
foreign key acompanhamento(id_curso) references curso(id_curso);

alter table turma
add constraint fk_turma_curso
foreign key turma(id_curso) references curso(id_curso);

alter table turma
add constraint fk_turma_instrutor
foreign key turma(id_instrutor) references usuario(id);

alter table pergunta
add constraint fk_pergunta_aspecto
foreign key pergunta(id_aspecto) references aspecto(id_aspecto);

alter table pergunta_acompanhamento
add constraint fk_perguntaA_pergunta
foreign key pergunta_acompanhamento(id_pergunta) references pergunta(id_pergunta);

alter table pergunta_acompanhamento
add constraint fk_perguntaA_acompanhamento
foreign key pergunta_acompanhamento(id_acompanhamento) references acompanhamento(id_acompanhamento);

select * from usuarios;
select * from turmas;
select * from instituicaos;
select * from cursos;
select * from aspectos;
select * from pergunta;

desc aspecto;
desc pergunta;