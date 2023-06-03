# RUNNING BACKEND

### Prerequisites
- docker && docker-compose

To download docker && docker-compose use this command:
```bash
sudo <package-manager/apt-get> install docker docker-compose
```

------------------------------
### DOCKER AND DATABASE SETUP

***DOCKER***

Navigate to `backend` folder and run following command:
```bash
sudo docker-compose up -d
```
this will create 2 containers - `web` for rails with 3001 port, `db` for postgresql database with 5432 port

***DATABASE SETUP***

To create development & test databases, you have to run this command inside `backend` folder:
```bash
sudo docker-compose run web rails db:create
```
this will create both databases, or show errors with connection if there are any

------------------------------
### POSSIBLE PROBLEMS

1. You have postgres client/server running on your local machine, you can check if its active, by running `sudo service postgresql status`
and to turn off this service run `sudo service postgresql stop`

2. Older docker-compose version. To fix this you can change the version in the `backend/docker-compose.yml` file to a version that works for you
