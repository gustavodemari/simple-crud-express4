simple-crud-express4
====================

Just a simple CRUD with express 4.x

====================

Example to check the API using cURL:

Method | Code
--- | --- | ---
GET | ```curl http://localhost:3000/api/users```
POST | ```curl -X POST -d user[id]=1 -d user[name]="Gustavo" http://localhost:3000/api/users```
PUT | ```curl -X PUT -d user[id]=1 -d user[name]="Gustavo De Mari" http://localhost:3000/api/users```
DELETE | ```curl -X DELETE -d user[id]=1 http://localhost:3000/api/users```
