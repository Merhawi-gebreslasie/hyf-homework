USE hyf_lesson3;
INSERT INTO ´ meal ´(
    ´ id ´,
    ´ max_reservations ´,
    ´ price ´,
    ´
    when ´,
    ´ created_date ´,
    ´ title ´,
    ´ description ´,
    ´ location ´
  )
VALUES(
    9,
    1,
    50,
    '2022-02-15',
    '2022-02-01',
    'Rød grød med fløde',
    NULL,
    'DK'
  );
INSERT INTO ´ reservation ´(
    ´ meal_id ´,
    ´ number_of_guests ´,
    ´ contact_name ´,
    ´ contact_email ´,
    ´ contact_phonenumber ´,
    ´ created_date ´
  )
values(
    3,
    3,
    'Luwam',
    'lm@gmail.com',
    '71632453',
    '2022,02,14'
  );
INSERT INTO ´ review ´(
    ´ meal_id ´,
    ´ stars ´,
    ´ title ´,
    ´ description ´,
    ´ created_date ´
  )
VALUES(5, 4, 'Fun Greek food', NULL, Now());
SELECT *
FROM ´ meal ´
WHERE ´ price ´ < 40;
SELECT *
FROM ´ meal ´
WHERE ´ max_reservations ´ >= 1;
SELECT *
FROM ´ meal ´
WHERE ´ title ´ LIKE 'Rød grød med%';
SELECT *
FROM ´ meal ´
WHERE ´ created_date ´ BETWEEN '2022-02-05' AND NOW();
SELECT *
FROM ´ meal ´
LIMIT 5;
SELECT ´ meal ´.´ id ´,
  ´ meal ´.´ title ´,
  ´ meal ´.´ description ´,
  ´ meal ´.´ location ´,
  ´ meal ´.´
  when ´,
  ´ meal ´.´ max_reservations ´,
  ´ meal ´.´ price ´,
  ´ meal ´.´ created_date ´
FROM ´ meal ´
  JOIN ´ review ´ ON ´ meal ´.´ id ´ = ´ review ´.´ meal_id ´
WHERE ´ review ´.´ stars ´ > 4;
SELECT ´ reservation ´.´ id ´,
  ´ reservation ´.´ contact_name ´,
  ´ reservation ´.´ contact_email ´,
  ´ reservation ´.´ contact_phonenumber ´,
  ´ reservation ´.´ created_date ´,
  ´ reservation ´.´ number_of_guests ´,
  ´ reservation ´.´ meal_id ´
FROM ´ reservation ´
  JOIN ´ meal ´ ON ´ reservation ´.´ meal_id ´ = ´ meal ´.´ id ´
WHERE ´ meal ´.´ id ´ = 3
ORDER BY ´ reservation ´.´ created_date ´;
SELECT ´ meal ´.´ id ´,
  ´ meal ´.´ title ´,
  ´ meal ´.´ description ´,
  ´ meal ´.´ location ´,
  ´ meal ´.´
  when ´,
  ´ meal ´.´ max_reservations ´,
  ´ meal ´.´ price ´,
  ´ meal ´.´ created_date ´,
  AVG(´ review ´.´ stars ´) AS ave_stars
FROM ´ meal ´
  JOIN ´ review ´ ON ´ meal ´.´ id ´ = ´ review ´.´ meal_id ´
GROUP BY ´ meal ´.´ id ´
ORDER BY ave_stars DESC;