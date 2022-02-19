USE hyf_lesson3;
SELECT *
FROM meal;
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
    3,
    30,
    '2022-02-12',
    Now(),
    'Dutch Pancake',
    NULL,
    'Dutch'
  );
SELECT *
from meal
WHERE id = 1;
UPDATE meal
SET description = NULL,
  title = 'Trivial Game'
WHERE id = 1;
DELETE FROM meal
WHERE id = 1;
-- reservations
SELECT *
FROM reservation;
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
    6,
    'Abrham',
    'ab@gmail.com',
    '31445677',
    '2022-02-16'
  );
SELECT *
FROM reservation
WHERE id = 1;
UPDATE reservation
SET contact_name = 'Aron',
  contact_email = 'ar@gmail.com'
WHERE id = 1;
DELETE FROM reservation
WHERE id = 1;
-- reviews
SELECT *
FROM review;
INSERT INTO `review`(
    `meal_id`,
    `stars`,
    `title`,
    `description`,
    `created_date`
  )
VALUES(3, 4, 'Dutch Pancake', 'Delicious', Now());
SELECT *
FROM review
WHERE id = 2;
UPDATE review
SET title = 'Indian Tasty',
  description = 'delicious food',
  stars = 5
WHERE id = 2;
DELETE FROM review
WHERE id = 2;