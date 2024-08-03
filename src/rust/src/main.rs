mod base; // Importa el módulo base

use base::hola_mundo::init;

fn main() {
    println!("----------------------");
    println!("RUST");
    println!("----------------------");
    let start_time = std::time::Instant::now();
    init();
    let end_time = std::time::Instant::now();
    let duration = end_time.duration_since(start_time);
    let duration_ms = duration.as_millis();
    println!("Tiempo de Ejecución: {:?} ms", duration_ms);
}