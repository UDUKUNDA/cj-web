# How to run
Option A — PowerShell (Windows, recommended for you)


.\docker-run.ps1
Option B — Docker Compose (simplest)

docker compose build --no-cache --progress=plain 2>&1

docker compose up --build -d
Option C — Manual commands


docker build -t cj-web .
docker run -d --name cj-web-app -p 3000:3000 cj-web
Then open http://localhost:3000.

How the Dockerfile works (3 stages)
deps — installs node_modules via npm ci (locked, reproducible)
builder — copies deps + source, runs next build (produces .next/standalone)
runner — Alpine image with only the compiled server files; runs as a non-root nextjs user
The output: "standalone" setting in next.config.ts is what enables the third stage — it bundles only the files Next.js actually needs to serve, resulting in a much smaller final image (typically ~150 MB instead of 1+ GB).