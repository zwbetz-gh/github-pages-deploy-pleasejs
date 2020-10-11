#!/usr/bin/env bash

REQUIRED_TOOLS=(
  git
  ghp-import
)

for tool in ${REQUIRED_TOOLS[@]}; do
  if ! command -v ${tool} >/dev/null; then
    echo "Tool [${tool}] is required"
    exit 1
  fi
done

OUTPUT=output
HASH=$(git rev-parse --short HEAD)
COMMIT_MSG="Deploying git hash ${HASH}"

if [[ ! -d ${OUTPUT} ]]; then
  echo "${OUTPUT} dir must exist before deploying. Exiting"
  exit 1
fi

echo ${COMMIT_MSG}
ghp-import -n -m "${COMMIT_MSG}" -p -f ${OUTPUT}

echo "Completed deploy in ${SECONDS}s"
