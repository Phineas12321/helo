INSERT INTO users (
    username, 
    password,
    profile_pic
)
VALUES(
    ${username},
    ${hash},
    'https://robohash.org/fgh'
)
RETURNING username, password, profile_pic, user_id;