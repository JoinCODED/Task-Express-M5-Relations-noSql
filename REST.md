GET /flowers -> 200 [flowers]
GET /potatos -> 200 [potatos]
POST /albums -> Create an album -> 201 The New Album
POST /teachers -> Create a teacher -> 201 the new teacher

GET /flowers/:flowerID -> 200 ONE flower
GET /albums/:albumName -> 200 ONE album

GET /alumbs/:albumID/songs -> 200 All the songs from THIS album
GET /albums/:albumID/songs/:songID -> 200 This specific song if its in this specific album (unusual)

# One to Many

POST /songs -> Create a song
GET /albums/:albumID
POST /albums/:albumID/songs -> Create a song in this specific album

# Many to Many

POST /courses -> create a new course
GET /courses/:courseID/teachers -> all the teachers in THIS course
POST /courses/:courseID/teachers/:teacherName -> Add this specific teacher to this specific course (and vice versa)
