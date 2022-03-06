CREATE DATABASE hyf_lesson3;
    DEFAULT CHARACTER SET = 'utf8mb4'; 
  USE hyf_lesson3;
 
CREATE TABLE `meal`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10) UNSIGNED NOT NULL,
    `price` DECIMAL(6,2) NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
   `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    `contact_phonenumber` VARCHAR(255) NULL,
    `created_date` DATE NOT NULL,
     `number_of_guests` INT(10) UNSIGNED NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `review`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `created_date` DATE NOT NULL,
     `stars` INT(10) UNSIGNED NULL,
     `meal_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
INSERT INTO `meal`(
        `max_reservations`,
        `price`,
        `when`,
        `created_date`,
        `title`,
        `description`,
        `location`
    )
VALUES(
        13,
        599.33,
         '2021/08/25',
        Now(),
        'Fun Greek food Trivia Game',
        'Enjoy 7 rounds of a fun Greek food trivia game',
        'Greek'
    );
        
      
INSERT INTO `meal`(
        `max_reservations`,
        `price`,
        `when`,
        `created_date`,
        `title`,
        `description`,
        `location`
    )
VALUES(
        15,
        300,
        '2022-02-01',
        Now(),
        'Cocpnut Rice and Stew',
        NULL,
        'India'
    );
       
        
INSERT INTO `meal`(
        `max_reservations`,
        `price`,
        `when`,
        `created_date`,
        `title`,
        `description`,
    `location`
    )
VALUES(
        19,
        1000.99,
        '2022-02-15',
        '2022-02-01',
        'Cocpnut Rice and Stew',
        'Homemade Tagliatelle in a Pesto Sauce',
        'US'
    );
       
        
INSERT INTO `reservation`(
        `meal_id`,
        `number_of_guests`,
        `contact_name`,
       `contact_email`,
        `contact_phonenumber`,
        `created_date`
    )
values(3, 5, 'John', 'jo@gmail.com', Null, '2022,02,14');
       
INSERT INTO `reservation`(
        `meal_id`,
        `number_of_guests`,
        `contact_name`,
        `contact_email`,
        `contact_phonenumber`,
        `created_date`
    )
        
values(
        1,
        3,
        'Daniel',
        'dan@gmail.com',
        '25231232',
        '2022,02,11'
    );
      
INSERT INTO `reservation`(
        `meal_id`,
        `number_of_guests`,
        `contact_name`,
        `contact_email`,
        `contact_phonenumber`,
        `created_date`
    )
values(2, 6, 'Eyob', 'ey@gmail.com', Null, '2022,02,13');
        
INSERT INTO `reservation`(
        `meal_id`,
        `number_of_guests`,
        `contact_name`,
       `contact_email`,
        `contact_phonenumber`,
        `created_date`
    )
values(
        3,
        8,
        'Yohanna',
        'yh@gmail.com',
        '71232453',
        '2022,02,14'
    );
        
        
INSERT INTO `reservation`(
        `meal_id`,
        `number_of_guests`,
        `contact_name`,
       `contact_email`,
        `contact_phonenumber`,
        `created_date`
    )
        
values(
        2,
        12,
        'Simon',
        'sm@gmail.com',
        '62833949',
        '2022,02,15'
    );
      
INSERT INTO `review`(
        `meal_id`,
        `stars`,
        `title`,
        `description`,
        `created_date`
    )
VALUES(1, 3, 'Fun Greek food', NULL, Now());
INSERT INTO `review`(
        `meal_id`,
        `stars`,
        `title`,
        `description`,
        `created_date`
    )
VALUES(2, 4, 'Fun Indian food', NULL, Now());
INSERT INTO `review`(
        `meal_id`,
        `stars`,
        `title`,
        `description`,
        `created_date`
    )
VALUES(3, 5, ' Italian  food', 'healthy food', Now());