`favr-server`

Here is a list of guidelines to help you install the favr-server based on postgreSQL and Node.js.

We used a busybox [postgres base image](https://registry.hub.docker.com/u/jpetazzo/pglite/) from docker.

We added the `-p 5432` to the running parameters for it was not getting forwarded properly.

# How to run

```bash
favr-laptop:~/$ git clone https://github.com/cadesalaberry/favr-server

favr-laptop:~/$ sudo ln -s /home/${whoami}/favr-server /favr

favr-laptop:~/$ cd favr-server

favr-laptop:~/favr-server$ make
PostgreSQL : 0.0.0.0:5432
postgres:1b0b63f9ff
Node.JS : 0.0.0.0:6969.

favr-laptop:~/favr-server$ make kill
favr-db
PostgreSQL test container has been killed.
favr-api
Node.JS test container has been killed.

favr-laptop:~/favr-server$ make reset
docker rm favr-db; docker rm favr-api
favr-db
favr-api
favr-laptop:~/favr-server$
```
