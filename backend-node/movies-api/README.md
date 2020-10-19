## Construir la imagen de docker

```bash
docker build -t movies-api .
```

```bash
docker run --rm -d  -p 3000:3000/tcp movies-api:latest
```
