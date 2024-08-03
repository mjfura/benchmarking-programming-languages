#include <stdio.h>
#include <time.h>
#include "base/hola_mundo.c"
int main() {
    printf("----\n");
    printf("C\n");
    printf("----\n");
    clock_t start_time, end_time;
    double execution_time;

    // Start measuring time
    start_time = clock();

    init();

    // End measuring time
    end_time = clock();

    // Calculate execution time in seconds
    execution_time = (double)(end_time - start_time) / (CLOCKS_PER_SEC / 1000);

    printf("Execution time: %f ms\n", execution_time);

    return 0;
}