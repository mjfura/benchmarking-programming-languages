import time
from base import hola_mundo
start_time = time.time()
hola_mundo.init()
end_time = time.time()
execution_time = (end_time - start_time)*1000

print(f"Tiempo de ejecución: {execution_time} ms")