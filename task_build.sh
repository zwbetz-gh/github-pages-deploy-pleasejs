#!/usr/bin/env bash

OUTPUT=output

mkdir -p ${OUTPUT}

cp -r -v src/* ${OUTPUT}

echo "Completed build in ${SECONDS}s"
