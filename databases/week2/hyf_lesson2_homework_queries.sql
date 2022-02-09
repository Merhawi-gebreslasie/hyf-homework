USE hyf_lesson1;
--1 add new task
insert into task(title, description, created, updated, due_date, status_id, user_id)
values('Practice database','must prictice many hours than expected','2022-02-07 19:39:16',NOW(),'2022-4-06 19:39:16',3,2);
-- 2 change title of a task
UPDATE task
SET title='Develop a website'
WHERE  id=1;
--3 change a task due_date
UPDATE task
SET due_date='2022-05-06 19:39:16'
WHERE  id=1;
--4 Change a task status
UPDATE task
SET status_id=1
WHERE id=1;
--5 Mark a task as complete
UPDATE task 
SET status_id=3
WHERE id=1;
--6 Delete from task
DELETE FROM task
WHERE id=1;