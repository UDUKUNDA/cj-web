#!/usr/bin/env bash
# docker-run.sh — Build and run cj-web in Docker (Linux / macOS / WSL)
set -euo pipefail

IMAGE="cj-web"
CONTAINER="cj-web-app"
PORT=3000

echo "==> Building Docker image '${IMAGE}'..."
docker build -t "${IMAGE}" .

echo "==> Stopping existing container (if any)..."
docker stop  "${CONTAINER}" 2>/dev/null || true
docker rm    "${CONTAINER}" 2>/dev/null || true

echo "==> Starting container '${CONTAINER}' on port ${PORT}..."
docker run -d \
  --name "${CONTAINER}" \
  -p "${PORT}:3000" \
  --restart unless-stopped \
  "${IMAGE}"

echo ""
echo "  App is running at http://localhost:${PORT}"
echo ""
echo "Useful commands:"
echo "  docker logs -f ${CONTAINER}   # stream logs"
echo "  docker stop  ${CONTAINER}     # stop the app"
echo "  docker rm    ${CONTAINER}     # remove the container"
echo "  docker rmi   ${IMAGE}         # remove the image"
