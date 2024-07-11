document.addEventListener("DOMContentLoaded", function() {
    // Esconde todo o conteúdo inicialmente
    const generos = document.querySelectorAll(".genero");
    const conteudos = document.querySelectorAll(".conteudo");

    conteudos.forEach(conteudo => {
        conteudo.style.display = "none";
    });

    // Adiciona um evento de clique a cada título de gênero
    generos.forEach((genero, index) => {
        genero.addEventListener("click", function() {
            const conteudo = conteudos[index];
            if (conteudo.style.display === "none" || conteudo.style.display === "") {
                conteudo.style.display = "block";
            } else {
                conteudo.style.display = "none";
            }
        });
    });
});
