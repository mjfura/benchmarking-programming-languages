import base.HolaMundo;

public class Main {
    public static void main(String[] args) {
        // Inicio del tiempo de ejecución
        System.out.println("--------------------");
        System.out.println("JAVA");
        System.out.println("--------------------");
        long startTime = System.currentTimeMillis();

        HolaMundo holaMundo = new HolaMundo();
        holaMundo.init();

        // Fin del tiempo de ejecución
        long endTime = System.currentTimeMillis();

        // Cálculo del tiempo transcurrido
        long executionTime = endTime - startTime;

        System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
    }
}