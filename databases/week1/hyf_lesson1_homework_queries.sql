USE hyf_lesson1;
-- 1
SELECT COUNT(*) AS 'count task '
 FROM task;
 -- 2
SELECT  COUNT(*) AS 'count task '
 FROM task
 WHERE due_date IS NULL;
 -- 3
 SELECT * FROM task t 
 JOIN status s ON t.status_id=s.id
 WHERE s.name ='Done';
 -- 4
 SELECT * FROM task t 
 JOIN status s ON t.status_id=s.id
 WHERE s.name !='Done';
 -- 5
 SELECT * FROM task 
 ORDER BY due_date DESC;
 -- 6
 SELECT * FROM task 
 ORDER BY due_date DESC
 LIMIT 1;
 -- 7
 SELECT title,due_date 
 FROM task 
 WHERE title REGEXP 'database'
       OR description REGEXP 'detabase';
--8

SELECT task.title,status.name AS text 
FROM task 
JOIN status; 
-- 9
SELECT status.name,COUNT(id) AS frequency 
FROM task 
JOIN status ON task.status_id=status.id
GROUP BY status.name;
-- 10
SELECT status.name,COUNT(*) AS frequency 
FROM task 
JOIN status ON task.status_id=status.id
GROUP BY status.name
ORDER BY frequency DESC;
