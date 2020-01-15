#
create table class(id int auto_increment primary key,
name text not null,
begins datetime,ends datetime);

insert into class(id,name,begins,ends)values(1,'locale1', '2020-02-27 15:17:08', '2020-05-08 17:31:16');
 #
 create table student(id int(10) ,name text not null,
 email varchar(320),phone varchar(20),class_id int ,
 CONSTRAINT FK_class FOREIGN KEY (class_id)
     REFERENCES class(id) on delete cascade );

#
alter table student add index (name);
#
alter table class add column status ENUM(' not-started','ongoing','finished') not null;
