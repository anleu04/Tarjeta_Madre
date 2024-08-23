let tarjeta = document.querySelector("#root");

tarjeta.innerHTML = `
    <div class="padre">
        <div class="grid">
            <div class="header"><p>Placa Madre</p></div>
            <div class="foto">
                <div class="comlumna1"></div>
                <div class="comlumna2">
                    <div class="gridcolum2">
                        <div class="btn1">
                            <button class="open-modal boton1">RAM</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>Ranuras De RAM</h1>
                                    <p>Una ranura de RAM, también conocida como ranura de memoria o zócalo de memoria, es un conector físico en una computadora tarjeta madre Diseñado para contener y conectar módulos de memoria de acceso aleatorio (RAM). Estas ranuras permiten a los usuarios ampliar la capacidad de memoria del sistema agregando módulos RAM adicionales, lo que mejora el rendimiento y las capacidades multitarea. Existen diferentes tipos de ranuras de RAM, como DDR4 y DDR5, cada una compatible con módulos de RAM específicos. Las placas base modernas suelen venir con entre 2 y 4 ranuras de memoria, lo que también determina qué tipo de RAM utiliza la computadora.</p>
                                    <div class="ram">
                                        <img src="/img/RanurasRam1.jpg" alt="">
                                        <img src="/img/RanurasRam2.jpg" alt="">
                                        <img src="/img/RanurasRam3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn2">
                            <button class="open-modal boton2">SOCKET</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>SOCKET</h1>
                                    <p>El socket o zócalo es la zona de la placa base donde se instala la CPU, posicionada al costado de los slots de memoria RAM y justo encima de las ranuras PCI-Express. Intel y AMD han ido desarrollando varios sockets conforme iban lanzando familias de procesadores.
                                        Como es de esperar, el socket y el procesador deben ser compatibles, pero puede darse el caso que sean incompatibles. ¿Cómo? Por cuestiones del chipset, que ya abordamos en un post separado en su ocasión.
                                        Normalmente, se lanza el socket junto con una generación de procesadores; un año después, Intel o AMD lanzan nuevos procesadores que suelen ser compatibles con el socket que ya está en el mercado.</p>
                                    <div class="Socket">
                                        <img src="/img/Socket1.jpg" alt="">
                                        <img src="/img/Socket2.jpg" alt="">
                                        <img src="/img/Socket3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn3">
                            <button class="open-modal boton3">BIOS</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>BIOS</h1>
                                    <p>El BIOS (sistema básico de entrada y salida) es el programa que utiliza el microprocesador de una computadora para iniciar el sistema informático después de encenderlo. También administra el flujo de datos entre el sistema operativo (OS) de la computadora y los dispositivos conectados, como el disco duro, el adaptador de video, el teclado, el mouse y la impresora.</p>
                                    <div class="bios">
                                        <img src="/img/Bios1.jpg" alt="">
                                        <img src="/img/Bios2.jpg" alt="">
                                        <img src="/img/Bios3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn4">
                            <button class="open-modal boton4">24 PINES</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>24 PINES</h1>
                                    <p>Este es el conector de alimentación principal para la placa base. Actualmente, este conector ya suele ser un conector único de 24 pines, pero en algunos casos tenemos un conector de 20 pines y un extra de 4 pines. El motivo de este segundo tipo de conector es que algunas placas base antiguas usaban un conector de 20 pines, pero está en desuso y por este motivo ya casi siempre es un conector único de 24 pines y ya está.</p>
                                    <div class="pines">
                                      <img src="/img/24 pines1.png" alt="">
                                      <img src="/img/24 pines2.jpg" alt="">
                                      <img src="/img/24 pines3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn5">
                            <button class="open-modal boton5">RANURA PCI</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>RANURA PCI</h1>
                                    <p>Una ranura PCI, por lo tanto, es un espacio abierto en una placa madre (también conocida como placa base, tarjeta madre, motherboard o mainboard) que se usa para conectar tarjetas de expansión. Antes de avanzar, es importante aclarar varios conceptos.

                                        Un bus es un sistema compuesto por cables, circuitos integrados, condensadores, resistores y otros elementos que posibilitan la transferencia de datos entre las partes de una computadora. Una tarjeta de expansión, por otra parte, es un dispositivo con chips y controladores que se utiliza para incrementar las capacidades de un equipo.
                                    
                                        Tipos de ranuras PCI:
                                        Como casi todos los conceptos pertenecientes al ámbito de la tecnología informática, PCI tiene un cierto grado de complejidad que nos impide definirlo simplemente explicando el significado de su sigla. Por lo pronto, una primera clasificación nos arroja al menos tres tipos de ranuras PCI: de 64 bits, de 32 bits y PCI-X.</p>
                                    <div class="pci">
                                        <img src="/img/Pci1.jpg" alt="">
                                        <img src="/img/Pci2.jpg" alt="">
                                        <img src="/img/Pci3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn6">
                            <button class="open-modal boton6">CONECTOR PROCESADOR</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>CONECTOR PROCESADOR</h1>
                                    <p>Un conector de alimentación de CPU de 4 pines es el conector estándar para la mayoría de las CPU. Tiene dos cables amarillos y dos cables negros, y se conecta a un zócalo de 4 pinos en la placa base . Un conector de 4 pines puede entregar hasta 192 vatios de potencia, que es suficiente para la mayoría de las CPU.</p>
                                    <div class="conector">
                                        <img src="/img/ConectorProce1.jpg" alt="">
                                        <img src="/img/ConectorProce2.jpg" alt="">
                                        <img src="/img/ConectorProce3.jpg" alt="">
                                        <img src="/img/ConectorProce4.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn7">
                            <button class="open-modal boton7">PUERTOS</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">Descargar JPG</button>
                                    <span class="close">&times;</span>
                                    <h1>PUERTOS</h1>
                                    <p>Los puertos de la placa madre son puntos de conexión externos e internos que permiten la comunicación entre la computadora y diversos dispositivos periféricos. Estos puertos son esenciales para la conectividad y funcionalidad del sistema. Algunos puertos son visibles en la parte trasera de la carcasa, como los USB, HDMI y Ethernet, mientras que otros, como los SATA y PCIe, están en el interior. Los puertos modernos han evolucionado para ofrecer mayores velocidades de transferencia de datos y mejor compatibilidad con una amplia gama de dispositivos, asegurando una integración perfecta con la tecnología actual.</p>
                                    <div class="puertos">
                                        <img src="/img/puertos1.jpg" alt="">
                                        <img src="/img/puertos2.jpg" alt="">
                                        <img src="/img/puertos3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/img/Placa.jpg" alt="">
                </div>
                <div class="comlumna3"></div>
            </div>
        </div>
    </div>`;

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.nextElementSibling;
        modal.style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', () => {
        const modal = span.closest('.modal');
        modal.style.display = 'none';
    });
});

// Función para descargar el contenido del modal como una imagen JPG
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalContent = button.parentElement;
        html2canvas(modalContent).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg', 1.0);
            link.download = 'modal-content.jpg';
            link.click();
        });
    });
});
