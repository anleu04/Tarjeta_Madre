let tarjeta = document.querySelector("#root");

tarjeta.innerHTML = `
    <div class="padre">
        <div class="grid">
            <div class="header"><p>Placa Madre</p></div>
            <div class="foto">
                <div class="comlumna1"></div>
                <div class="comlumna2">
                    <div class="gridcolum2">
                        <div class="btn1" >
                            <button class="open-modal boton1">RAM</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <h1>Ranuras De RAM</h1>
                                    <div class="ram">
                                        <img src="https://raw.githubusercontent.com/anleu04/img/main/RanurasRam1.jpg" alt="">
                                        <img src="https://raw.githubusercontent.com/anleu04/img/main/RanurasRam2.jpg" alt="">
                                        <img src="https://raw.githubusercontent.com/anleu04/img/main/RanurasRam3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn2">
                            <button class="open-modal boton2">SOCKET</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <p>Contenido de la ventana modal 2.</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn3">
                            <button class="open-modal boton3">BIOS</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <p>Contenido de la ventana modal 3.</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn4">
                            <button class="open-modal boton4">24 PINES</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <p>Contenido de la ventana modal 4.</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn5">
                            <button class="open-modal boton5">RANURA PCI</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <p>Contenido de la ventana modal 5.</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn6">
                            <button class="open-modal boton6">CONECTOR PROCESADOR</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <p>Contenido de la ventana modal 6.</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn7">
                            <button class="open-modal boton7">PUERTOS</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <p>Contenido de la ventana modal 7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="https://raw.githubusercontent.com/anleu04/img/main/Placa.jpg" alt="">
                </div>
                <div class="comlumna3"></div>
            </div>
        </div>
    </div>
`;

// Agregar funcionalidad de las ventanas modales
const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll(".open-modal");
const closes = document.querySelectorAll(".close");

buttons.forEach((btn, index) => {
    btn.onclick = function() {
        modals[index].style.display = "block";
    }
});

closes.forEach((span, index) => {
    span.onclick = function() {
        modals[index].style.display = "none";
    }
});

window.onclick = function(event) {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
