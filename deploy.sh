#!/usr/bin/env bash
set -euo pipefail

npm install
npm run build

echo "Build completed. Upload the contents of the dist/ directory to your hosting provider."
