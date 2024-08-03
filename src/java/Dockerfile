FROM openjdk:11-slim

# Instala findutils
RUN apt-get update && apt-get install -y findutils && apt-get clean

# Crea un directorio para tu aplicación
WORKDIR /app

# Copia el código fuente a la imagen
COPY . .



# Compila el código fuente
RUN javac -d /app/classes $(find src -name "*.java") src/Main.java

# Especifica el comando para ejecutar la aplicación
CMD ["java", "-cp", "/app/classes", "Main"]