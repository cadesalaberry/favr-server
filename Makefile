# The program used as the shell is taken from the variable `SHELL'. 
# By default, `/bin/sh' is used as the shell.
SHELL=/bin/bash

all: run-db run-api

#TODO: Make 5432 inaccessible from the netword (take off `-p 5432:5432`) 
run-db:
	@PG_ID=$$(docker run --name favr-db -p 5432:5432 -d jpetazzo/pglite) &&	\
	while ! docker logs $${PG_ID} 2>/dev/null | grep -q ^PG_PASSWORD= ; do sleep 1 ; done &&	\
	eval $$(docker logs $${PG_ID} 2>/dev/null) &&	\
	PG_PORT=$$(docker port $${PG_ID} 5432) &&	\
	echo "PostgreSQL : $${PG_PORT}" &&	\
	echo "postgres:$${PG_PASSWORD}" #&&	\
	# docker kill $${PG_ID} && echo "PostgreSQL test container has been killed."

#TODO: Maybe 6969 should be dinamically chosen ?
run-api:
	@NODE_ID=$$(docker run --name favr-api --link favr-db:db -p 6969:6969 -d -v /favr/api:/home/default/favr-api jprjr/tinynode ./favr-api/app.js) &&	\
	NODE_PORT=$$(docker port $${NODE_ID} 6969) &&	\
	echo "Node.JS : $${NODE_PORT}." #&& \
	# docker kill $${NODE_ID} && echo "Node.JS test container has been killed."
	