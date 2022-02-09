CREATE database hyf_lesson2;
USE hyf_lesson2;
SET NAMES utf8mb4;


     CREATE TABLE  class(
       id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       begins DATETIME NOT NULL,
       ends DATETIME ,
       PRIMARY KEY(id)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

     

     CREATE TABLE  student(
       id int UNSIGNED NOT NULL AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       phone VARCHAR(255),
       class_id INT UNSIGNED,
        PRIMARY KEY(id),
        CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
       )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
     
CREATE INDEX index_name ON student(name);
ALTER TABLE class 
ADD status ENUM( 'not-started', 'ongoing', 'finished' ) NOT NULL;

