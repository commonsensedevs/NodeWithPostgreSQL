# Use the official PostgreSQL image
FROM postgres:latest

# Set environment variables (customize as necessary)
ENV POSTGRES_DB=PostgresSQLDemoDb
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=Forpostgresdev1

#copy the init script to the docker-entrypoint-initdb.d directory
COPY src/data/databaseScripts/dbscripts.sql /docker-entrypoint-initdb.d/