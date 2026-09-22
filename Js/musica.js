const musicaFlores = document.getElementById("musicaFlores");

if (musicaFlores) {
    let iniciada = false;
    musicaFlores.currentTime = 0;

    const iniciarMusica = () => {
        if (iniciada) {
            return;
        }

        iniciada = true;
        musicaFlores.currentTime = 0;
        musicaFlores.play().catch(() => {
            iniciada = false;
        });
    };

    musicaFlores.play().catch(() => {});
    document.addEventListener("pointerdown", iniciarMusica, { once: true });
    document.addEventListener("keydown", iniciarMusica, { once: true });
}
