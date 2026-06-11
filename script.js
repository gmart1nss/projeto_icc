let campoPesquisa = document.getElementById("pesquisa");
let botaoPesquisar = document.getElementById("btnPesquisar");
let filtroGenero = document.getElementById("filtro");
let ordenacao = document.getElementById("ordenacao");
let grid = document.querySelector(".grid-discos-ctlg");

function pegarItemDoDisco(disco) {
    return disco.closest(".link-album") || disco;
}

function pegarPreco(disco) {
    return parseFloat(
        disco.querySelector(".preco p")
            .textContent
            .replace("R$", "")
            .replace(",", ".")
    );
}

function pegarNome(disco) {
    return disco.querySelector("h3").textContent.toLowerCase();
}

function aplicarFiltros() {
    let texto = campoPesquisa.value.toLowerCase();
    let generoSelecionado = filtroGenero.value;
    let discos = document.querySelectorAll(".disco");

    discos.forEach(function (disco) {
        let nome = pegarNome(disco);
        let generos = disco.dataset.genero.toLowerCase().split(",").map(function (genero) {
            return genero.trim();
        });
        let item = pegarItemDoDisco(disco);

        let pesquisaCombina = nome.includes(texto);
        let generoCombina = generoSelecionado === "todos" || generos.includes(generoSelecionado);

        if (pesquisaCombina && generoCombina) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

function ordenarDiscos() {
    let opcao = ordenacao.value;
    let discos = Array.from(document.querySelectorAll(".disco"));

    discos.sort(function (a, b) {
        if (opcao === "preco_crescente") {
            return pegarPreco(a) - pegarPreco(b);
        }

        if (opcao === "preco_decrescente") {
            return pegarPreco(b) - pegarPreco(a);
        }

        if (opcao === "nome_az") {
            return pegarNome(a).localeCompare(pegarNome(b));
        }

        if (opcao === "nome_za") {
            return pegarNome(b).localeCompare(pegarNome(a));
        }

        return 0;
    });

    discos.forEach(function (disco) {
        grid.appendChild(pegarItemDoDisco(disco));
    });

    aplicarFiltros();
}

botaoPesquisar.addEventListener("click", aplicarFiltros);
campoPesquisa.addEventListener("input", aplicarFiltros);
filtroGenero.addEventListener("change", aplicarFiltros);
ordenacao.addEventListener("change", ordenarDiscos);

ordenarDiscos();
