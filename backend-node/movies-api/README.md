# Desplegado en

https://fleetingvideo-api.now.sh/api/movies

## Construir la imagen de docker

```bash
docker build -t movies-api .
```

```bash
docker run --rm -d  -p 3000:3000/tcp movies-api:latest
```

## Alias en now.sh

```bash
now alias https://movies-api.cristianorinconb.vercel.app/ fleetingvideo-api.now.sh
```

## Documentación de la API en:

https://documenter.getpostman.com/view/12728234/TVYAg1d5
