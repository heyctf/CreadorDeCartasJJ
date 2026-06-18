window.exportarCarta = async (nombreCarta) => {
    const nodo = document.getElementById("carta");

    domtoimage
        .toPng(nodo)
        .then(function (dataUrl) {

            const a = document.createElement("a");

            a.href = dataUrl;
            nombreCarta = (nombreCarta || "cartaJJ").replace(/[\\/:*?"<>| ]/g, "_");
            a.download = nombreCarta+".png";

            a.click();
        });
    /*
    let carta =
        document.getElementById("carta");

    let base =
        carta.querySelector(".base");

    // Guardar imagen original
    let srcOriginal =
        base.src;

    // Obtener el filtro actual
    let filtro =
        getComputedStyle(base).filter;

    // Crear una imagen temporal
    let img =
        new Image();

    img.src =
        srcOriginal;
    console.log("srcOriginal =", srcOriginal);
    console.log("base =", base);
    await img.decode();

    // Canvas temporal
    let canvasTemp =
        document.createElement(
            "canvas"
        );

    canvasTemp.width =
        img.naturalWidth;

    canvasTemp.height =
        img.naturalHeight;

    let ctx =
        canvasTemp.getContext(
            "2d"
        );

    // Aplicar filtros reales
    ctx.filter =
        filtro;

    ctx.drawImage(
        img,
        0,
        0
    );

    // Reemplazar temporalmente base.png
    base.src =
        canvasTemp.toDataURL(
            "image/png"
        );

    // Esperar que cambie visualmente
    await new Promise(
        r => setTimeout(r, 100)
    );

    // Esperar fuentes
    await document.fonts.ready;
    console.log("FUENTES LISTAS");
    await new Promise(r => requestAnimationFrame(r));
    await new Promise(r => requestAnimationFrame(r));
    await new Promise(r => requestAnimationFrame(r));

    // Capturar
    const canvas =
        await html2canvas(
            carta,
            {
                width: 1376,
                height: 2072,
                scale: 1,
                backgroundColor: null
            }
        );

    // Restaurar original
    base.src =
        srcOriginal;

    let enlace =
        document.createElement(
            "a"
        );

    nombreCarta = (nombreCarta || "cartaJJ").replace(/[\\/:*?"<>| ]/g, "_");

    enlace.download = nombreCarta+".png";

    enlace.href =
        canvas.toDataURL(
            "image/png"
        );

    enlace.click();*/
};

window.exportarCartaNuevo = async (nombreCarta) => {

    let carta =
        document.getElementById("carta");

    const canvas =
        await html2canvas(
            carta,
            {
                width: 1376,
                height: 2072,
                scale: 1,
                backgroundColor: null
            }
        );

    let enlace =
        document.createElement("a");

    nombreCarta =
        (nombreCarta || "cartaJJ")
            .replace(/[\\/:*?"<>| ]/g, "_");

    enlace.download =
        nombreCarta + ".png";

    enlace.href =
        canvas.toDataURL("image/png");

    enlace.click();
};

window.guardarProyecto = (json,nombreCarta) => {

    let blob =
        new Blob(
            [json],
            {
                type: "application/json"
            });

    let url =
        URL.createObjectURL(
            blob
        );

    let a =
        document.createElement(
            "a"
        );

    a.href = url;

    nombreCarta = (nombreCarta || "cartaJJ").replace(/[\\/:*?"<>| ]/g, "_");

    a.download = nombreCarta +".json";

    a.click();

    URL.revokeObjectURL(
        url
    );

};

window.audioPlayer = {
    play: function (element, volume) {
        element.volume = volume;
        element.play();
    },
    pause: function (element) {
        element.pause();
    }
};