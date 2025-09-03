function atualizarRelogio() {
  const agora new Date();

   let horas agora.getHours().toString().padStart (2, '0');
   let minutos agora.getMinutes().toString().padStart (2, '0'); let segundos agora.getSeconds().toString().padStart (2, '0');

   const horañtual $(horas):$(minutos):$(segundos);
 
   document.getElementById('clock').textContent horañtual;
}
// Atualiza imediatamente e depois a cada segundo atualizarRelogio();
set Interval (atualizarRelogio, 1000);
