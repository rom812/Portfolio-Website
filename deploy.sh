#!/usr/bin/env bash
set -euo pipefail

preview=false
if [[ "${1-}" == "--preview" ]]; then
  preview=true
  shift || true
fi

npm install
npm run build

echo "Build completed. Upload the contents of the dist/ directory to your hosting provider or configure automated deployment."

if [[ "$preview" == true ]]; then
  echo "Starting a local preview server for the production build..."
  npx serve -s dist
fi
