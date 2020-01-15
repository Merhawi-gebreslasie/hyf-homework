
#total task
SELECT count(*) FROM task;

#invalid due date
select *FROM task WHERE due_date is null;

#tasks marked as  done
SELECT * FROM task WHERE status_id=3;

#tasks not marked as done
SELECT * FROM task WHERE status_id!=3;

#most recently created
SELECT * FROM task ORDER BY created DESC;


#the single most recently created task
SELECT * FROM task  ORDER BY created DESC LIMIT 0,1; 

#
SELECT title,due_date FROM task WHERE title like '%database%' OR description like '%database%';

#Getting title and status 
SELECT title,S.name 
FROM task AS T
JOIN status AS S on T.status_id=S.id;

#count status
SELECT name,count(*) AS occurrence  
FROM status
INNER JOIN task ON task.status_id=status.id
GROUP BY status.id;

# sorting status with most tasks
SELECT name ,count(*) AS occurrence 
FROM status 
INNER JOIN task  ON task.status_id=status.id 
GROUP BY status.id 
ORDER BY occurrence DESC; 