-- part4

CREATE DATABASE hyf_lesson2_part4;
USE hyf_lesson2_part4;
SET NAMES utf8mb4;
CREATE TABLE card(
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  date_of_birth DATETIME NOT NULL,
  PRIMARY KEY(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE ´ member ´(
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  ´ Surname ´ VARCHAR(255) NOT NULL,
  ´ First Name ´ VARCHAR(255) NOT NULL,
  ´ Adress ´ VARCHAR(255) NOT NULL,
  ´ Phone ´ VARCHAR(255) NOT NULL,
  ´ Email ´ VARCHAR(255) NOT NULL,
  ´ card_id ´ INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (´ id ´),
  CONSTRAINT ´ fk_card ´ FOREIGN KEY (´ card_id ´) REFERENCES ´ card ´(´ id ´) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE ´ rent ´(
  ´ id ´ int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  ´ rent_date ´ DATETIME NOT NULL,
  ´ expire_date ´ DATETIME NOT NULL,
  ´ total_cost ´ INT NOT NULL member_id INT(10) NOT NULL,
  ´ memeber_id ´ INT(10) UNSIGNED,
  PRIMARY KEY(´ id ´),
  CONSTRAINT ´ fk_member ´ FOREIGN KEY (´ member_id ´) REFERENCES ´ member ´(´ id ´) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE ´ bike ´(
  ´ id ´ int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  ´ made_in ´ VARCHAR(255) NOT NULL,
  ´ quality ´ VARCHAR(255),
  ´ date_of_manufacture ´ DATETIME,
  PRIMARY KEY(´ id ´),
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE ´ bike_rent ´(
  ´ rent_id ´ INT(10) UNSIGNED,
  ´ bike_id ´ INT(10) UNSIGNED,
  CONSTRAINT ´ fk_bike ´ FOREIGN KEY (´ bike_id ´) REFERENCES ´ bike ´(´ id ´) ON DELETE CASCADE,
  CONSTRAINT ´ fk_rent ´ FOREIGN KEY (´ rent_id ´) REFERENCES ´ rent ´(´ id ´) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;