INSERT INTO users (
    username, 
    password,
    profile_pic
)
VALUES(
    ${username},
    ${hash},
    ${profile_pic}
)
RETURNING username, password, profile_pic, user_id;