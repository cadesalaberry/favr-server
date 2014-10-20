`favr-db`

Here is a list of guidelines to help you install the favr-db based on postgreSQL.

We used a busybox [base image](https://registry.hub.docker.com/u/jpetazzo/pglite/) from docker.

We added the `-p 5432` to the running parameters for it was not getting forwarded properly.

# How to run

```
favr-laptop:~/Apps/favr$ make
PostgreSQL : 0.0.0.0:5432
postgres:1b0b63f9ff
docker kill 23a4463bec143bbb32bbf58d28484604170e24c326171aa97fff831be53335bd
Node.JS : 0.0.0.0:6969.

favr-laptop:~/Apps/favr$
```