
USE hyf_lesson1;
-- 1
SELECT name,phone FROM user;
-- 2
SELECT name FROM user 
WHERE id=10
;
-- 3
SELECT COUNT(*) FROM user;
-- 4
SELECT name FROM user
LIMIT 5;
-- 5
SELECT name FROM user
LIMIT 9,3;
-- 6
SELECT SUM(id) FROM user;
-- 7
SELECT * FROM user
ORDER BY name ;
-- 8
SELECT * FROM task
WHERE description like  '%SQL%'
OR title LIKE '%SQL%';
-- 9
SELECT task.title FROM user 
JOIN task ON task.user_id=user.id 
   AND user.name REGEXP 'Maryrose';
-- 10
SELECT user.name, COUNT(id) AS count 
FROM user 
JOIN task ON   task.user_id=user.id
GROUP BY user.name;
-- 11
SELECT user.name, COUNT(id) AS count_done 
FROM user 
JOIN task ON   task.user_id=user.id
JOIN status ON task.status_id=status.id
WHERE status.name='Done'
GROUP BY user.name;
