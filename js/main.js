let tarjeta = document.querySelector("#root");

tarjeta.innerHTML = `
    <div class="padre">
        <div class="grid">
            <div class="header">
            <p>TechMap</p>

            <a href="https://github.com/anleu04/Tarjeta_Madre"></a>
            </div>
            <div class="foto">
                <div class="comlumna1">
                    <div class="checkbox-group" style="position: absolute; top: 10px; left: 10px;">
                        <label class="checkbox-container">
                            <input type="checkbox" id="show-all" />
                            <span class="checkmark"></span>
                            PC
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="RAM">
                            <span class="checkmark"></span>
                            Placa madre  
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="SOCKET">
                            <span class="checkmark"></span>
                            CPU
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="BIOS">
                            <span class="checkmark"></span>
                            BIOS
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="24 PINES">
                            <span class="checkmark"></span>
                            24 Pines
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="PCI">
                            <span class="checkmark"></span>
                            GPU
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="CONECTOR PROCESADOR">
                            <span class="checkmark"></span>
                            Fuente de poder
                        </label>
                        <label class="checkbox-container">
                            <input type="checkbox" name="category" value="PUERTOS">
                            <span class="checkmark"></span>
                            Puertos
                        </label>
                    </div>
                </div>
                <div class="comlumna2">
                    <div class="gridcolum2">
                        <div class="btn1">
                            <button class="open-modal boton1">RAM</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">⏬</button>
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
                            <button class="open-modal boton2">Socket</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">⏬</button>
                                    <span class="close">&times;</span>
                                    <h1>SOCKET</h1>
                                    <p>El socket o zócalo es la zona de la placa base donde se instala la CPU, posicionada al costado de los slots de memoria RAM y justo encima de las ranuras PCI-Express. Intel y AMD han ido desarrollando varios sockets conforme iban lanzando familias de procesadores. Como es de esperar, el socket y el procesador deben ser compatibles, pero puede darse el caso que sean incompatibles. ¿Cómo? Por cuestiones del chipset, que ya abordamos en un post separado en su ocasión. Normalmente, se lanza el socket junto con una generación de procesadores; un año después, Intel o AMD lanzan nuevos procesadores que suelen ser compatibles con el socket que ya está en el mercado.</p>
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
                                    <button class="download-btn">⏬</button>
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
                                    <button class="download-btn">⏬  </button>
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
                            <button class="open-modal boton5">PCI</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">⏬</button>
                                    <span class="close">&times;</span>
                                    <h1>RANURA PCI</h1>
                                    <p>Una ranura PCI, por lo tanto, es un espacio abierto en una placa madre (también conocida como placa base, tarjeta madre, motherboard o mainboard) que se usa para conectar tarjetas de expansión. Antes de avanzar, es importante aclarar varios conceptos. Un bus es un sistema compuesto por cables, circuitos integrados, condensadores, resistores y otros elementos que posibilitan la transferencia de datos entre las partes de una computadora. Una tarjeta de expansión, por otra parte, es un dispositivo con chips y controladores que se utiliza para incrementar las capacidades de un equipo. Tipos de ranuras PCI: Como casi todos los conceptos pertenecientes al ámbito de la tecnología informática, PCI tiene un cierto grado de complejidad que nos impide definirlo simplemente explicando el significado de su sigla. Por lo pronto, una primera clasificación nos arroja al menos tres tipos de ranuras PCI: de 64 bits, de 32 bits y PCI-X.</p>
                                    <div class="pci">
                                        <img src="/img/Pci1.jpg" alt="">
                                        <img src="/img/Pci2.jpg" alt="">
                                        <img src="/img/Pci3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn6">
                            <button class="open-modal boton6">Conector Procesador</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">⏬</button>
                                    <span class="close">&times;</span>
                                    <h1>CONECTOR PROCESADOR</h1>
                                    <p>Un conector de alimentación de CPU de 4 pines es el conector estándar para la mayoría de las CPU. Tiene dos cables amarillos y dos cables negros, y se conecta a un zócalo de 4 pinos en la placa base . Un conector de 4 pines puede entregar hasta 192 vatios de potencia, que es suficiente para la mayoría de las CPU.</p>
                                    <div class="conector">
                                        <img src="/img/ConectorProce1.jpg" alt="">
                                        <img src="/img/ConectorProce2.jpg" alt="">
                                        <img src="/img/ConectorProce3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn7">
                            <button class="open-modal boton7">Puertos</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <button class="download-btn">⏬</button>
                                    <span class="close">&times;</span>
                                    <h1>PUERTOS</h1>
                                    <p>Estos puertos nos permiten conectar dispositivos, o periféricos, a la computadora. Tenemos el puerto paralelo, el puerto de impresora. También tenemos el puerto serial, utilizado también para impresoras, pero mucho más utilizado para conectar un ratón (mouse). El puerto que actualmente utilizamos para el ratón es el puerto PS/2, que tiene dos conectores, uno verde para el ratón y uno púrpura para el teclado. El puerto VGA, que es el puerto del monitor. Por último, el puerto USB, actualmente muy utilizado por ratones y teclados en general.</p>
                                    <div class="puertos">
                                        <img src="/img/Puertos1.jpg" alt="">
                                        <img src="/img/Puertos2.jpg" alt="">
                                        <img src="/img/Puertos3.jpg" alt="">
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
    </div>
`;


function convertirAMayusculas(texto) {
    const conversion = {
        'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 
        'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N',
        'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 
        'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
    };

    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (conversion[caracter] !== undefined) {
            resultado += conversion[caracter];
        } else {
            resultado += caracter;
        }
    }
    return resultado;
}


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

document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalContent = button.parentElement;
        html2canvas(modalContent).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg', 1.0);
            link.download = 'Contenido.jpg';
            link.click();
        });
    });
});

document.querySelectorAll('input[name="category"], #show-all').forEach(checkbox => {
    checkbox.addEventListener('change', () => {

        const showAllChecked = document.querySelector('#show-all').checked;
        const checkboxes = document.querySelectorAll('input[name="category"]:checked');
        let selectedCategories = [];
        checkboxes.forEach(checkedBox => {
            selectedCategories = selectedCategories.concat(convertirAMayusculas(checkedBox.value));
        });

        const buttons = document.querySelectorAll('.btn1, .btn2, .btn3, .btn4, .btn5, .btn6, .btn7');

        buttons.forEach(button => {
            const buttonCategory = convertirAMayusculas(button.querySelector('.open-modal').textContent);

           
            if (selectedCategories.includes("SOCKET")) {
                if (["SOCKET", "CONECTOR PROCESADOR"].includes(buttonCategory)) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
            
            else if (selectedCategories.includes("RAM")) {
                if (["RAM", "SOCKET", "PCI", "PUERTOS", "BIOS"].includes(buttonCategory)) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
            
            else if (selectedCategories.includes("FUENTE DE PODER")) {
                if (["24 PINES", "CONECTOR PROCESADOR"].includes(buttonCategory)) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
            
            else {
                if (showAllChecked || selectedCategories.includes(buttonCategory)) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
        });
    });
});
