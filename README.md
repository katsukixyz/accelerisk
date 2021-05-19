# AcceleRisk

Accelerating cancer risk analysis.

## Local installation

On initial clone:

```bash
docker-compose up -d
```

Upon modifying node_modules/package.json/npm packages:

```bash
docker-compose up -d --build
```

To terminate running containers:

```bash
docker-compose down
```

To remove containers/images:

```bash
docker rm $(docker ps -aq)
```

```bash
docker rmi $(docker images -aq)
```

## Frontend (React)

```bash
https://localhost:3000
```

## Backend (Express)

```bash
https://localhost:5000
```

## Database (PostgreSQL)

```bash
https://localhost:5432
```

## pgAdmin

Upon starting the docker containers, navigate to http://localhost:8080 and use credentials admin@admin.com:root to log in.

Click "Add New Server" and enter a generic server name. Navigate to the connection tab and enter the PostgreSQL container name "db" as the host name/address. Enter user:pass root:root and save.
