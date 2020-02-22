INSERT INTO users (
    username, 
    password,
    profile_pic
)
VALUES(
    ${username},
    ${hash},
    'https://robohash.org/Best%20tablet'
)
RETURNING user_id, password, profile_pic;