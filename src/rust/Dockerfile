# Usa la imagen base oficial de Rust
FROM rust:latest

# Crea un directorio para tu aplicación
WORKDIR /app

# Copia el archivo de código fuente a la imagen
COPY . .

# Compila el proyecto con Cargo
RUN cargo build --release

# Comando para ejecutar el binario
CMD ["./target/release/benchmarking_langs"]