#!/bin/bash

# Ejecutar Python Benchmark
echo "Running Python Benchmark..."
docker-compose run --rm python_benchmark

# Ejecutar Node.js Benchmark
echo "Running Node.js Benchmark..."
docker-compose run --rm nodejs_benchmark