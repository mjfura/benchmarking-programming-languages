<?php
include 'base/hola_mundo.php';
echo "------\n";
echo "PHP\n";
echo "------\n";
$start = microtime(true);

init();

$end = microtime(true);
$executionTime = ($end - $start)*1000;

echo "\n";
echo "Tiempo de Ejecución: " . $executionTime . " ms";
echo "\n";
?>