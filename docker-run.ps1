# docker-run.ps1 — Build and run cj-web in Docker (Windows / PowerShell)

$IMAGE     = "cj-web"
$CONTAINER = "cj-web-app"
$PORT      = 3000

Write-Host "==> Building Docker image '$IMAGE'..." -ForegroundColor Cyan
docker build -t $IMAGE .

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Exiting." -ForegroundColor Red
    exit 1
}

# Stop and remove any previous run
$existing = docker ps -aq --filter "name=$CONTAINER"
if ($existing) {
    Write-Host "==> Stopping existing container '$CONTAINER'..." -ForegroundColor Yellow
    docker stop $CONTAINER | Out-Null
    docker rm   $CONTAINER | Out-Null
}

Write-Host "==> Starting container '$CONTAINER' on port $PORT..." -ForegroundColor Cyan
docker run -d `
    --name $CONTAINER `
    -p "${PORT}:3000" `
    --restart unless-stopped `
    $IMAGE

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to start container." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "  App is running at http://localhost:$PORT" -ForegroundColor Green
Write-Host ""
Write-Host "Useful commands:"
Write-Host "  docker logs -f $CONTAINER      # stream logs"
Write-Host "  docker stop  $CONTAINER        # stop the app"
Write-Host "  docker rm    $CONTAINER        # remove the container"
Write-Host "  docker rmi   $IMAGE            # remove the image"
