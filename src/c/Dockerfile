# Usa la imagen base oficial de GCC
FROM gcc:latest

# Crea un directorio para tu aplicación
WORKDIR /app

# Copia los archivos de código fuente al contenedor
COPY . .

# Compila el programa en C
RUN gcc src/main.c -o main

# Comando para ejecutar el programa
CMD ["./main"]