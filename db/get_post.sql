-- SELECT p.title, p.img, p.content, u.username, u.profile_pic
-- FROM posts p
-- JOIN users u ON p.author_id = u.user_id
-- WHERE u.user_id = $1
-- ORDER BY post_id DESC;

SELECT * 
FROM posts
ORDER BY post_id DESC;