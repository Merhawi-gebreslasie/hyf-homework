-- Part 3
USE hfy_lesson21;
--1 Get all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM user 
WHERE email LIKE '%@spotify.com';
--2Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id,task.title,task.description,task.created,task.updated,task.due_date,task.status_id 
FROM task
JOIN status ON task.status_id=status.id 
JOIN user_task  ON user_task.task_id=task.id
JOIN user  ON user.id = user_task.user_id
WHERE status.name='Not started' AND user.name='Donald Duck';

--3 Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.id,task.title,task.description,task.created,task.updated,task.due_date,task.status_id 
FROM task
JOIN user_task ON user_task.task_id=task.id
JOIN user ON user.id=user_task.user_id
WHERE user.name='Maryrose Meadows' AND
month(created)=09;
--4 Find how many tasks where created in each month,
SELECT month(created) as month_number,COUNT(*) as total_task 
FROM task
GROUP BY  month(created);
