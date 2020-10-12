#!/usr/bin/env bash

# See https://docs.python.org/3/library/http.server.html

USAGE="Usage:

  $0 [PORT] [HOST] [DIR]

All arguments are optional.

PORT    The port to serve from. Defaults to 8000
HOST    The host to bind to. Defaults to 127.0.0.1
DIR     The dir to serve. Defaults to output/"

HELP_ARGS=(
  "-h"
  "--help"
  "help"
)

for arg in ${HELP_ARGS[@]}; do
  if [[ ${arg} = ${1} ]]; then
    echo "${USAGE}"
    exit 0
  fi
done

REQUIRED_TOOLS=(
  python
)

for tool in ${REQUIRED_TOOLS[@]}; do
  if ! command -v ${tool} >/dev/null; then
    echo "Tool ${tool} is required"
    exit 1
  fi
done

PORT=${1:-"8000"}
HOST=${2:-"127.0.0.1"}
DIR=${3:-"output"}

CMD="python -m http.server ${PORT} --bind ${HOST} --directory ${DIR}"
MSG="Serving dir ${DIR} at url http://${HOST}:${PORT}"

echo ${CMD}
echo ${MSG}

exec ${CMD}
