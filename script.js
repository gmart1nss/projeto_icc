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
        let generos = (disco.dataset.genero || "").toLowerCase().split(",").map(function (genero) {
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

function iniciarCatalogo() {
    if (!campoPesquisa || !botaoPesquisar || !filtroGenero || !ordenacao || !grid) {
        return;
    }

    botaoPesquisar.addEventListener("click", aplicarFiltros);
    campoPesquisa.addEventListener("input", aplicarFiltros);
    filtroGenero.addEventListener("change", aplicarFiltros);
    ordenacao.addEventListener("change", ordenarDiscos);

    ordenarDiscos();
}

const albunsRecomendador = [
    {
        titulo: "Death - Symbolic",
        preco: "R$ 189,90",
        genero: "Death metal",
        imagem: "imagens/Symbolic_Album.jpg",
        pagina: "pagina_albuns/psymbolic.html",
        tags: ["death", "tecnico", "anos90", "extremo", "sombrio", "internacional"],
        motivo: "Uma escolha técnica, pesada e sombria para quem quer death metal com riffs elaborados."
    },
    {
        titulo: "Mayhem - De Mysteriis dom Sathanas",
        preco: "R$ 219,90",
        genero: "Black metal",
        imagem: "imagens/demysteriis.jpg",
        pagina: "pagina_albuns/pmayhem.html",
        tags: ["black", "anos90", "extremo", "sombrio", "internacional"],
        motivo: "Black metal cru, frio e extremo, direto para uma experiência mais obscura."
    },
    {
        titulo: "Sepultura - Beneath the Remains",
        preco: "R$ 179,90",
        genero: "Thrash metal nacional",
        imagem: "imagens/beneaththeremains.jpg",
        pagina: "pagina_albuns/pbeneathremains.html",
        tags: ["thrash", "anos80", "rapido", "extremo", "nacional", "classico"],
        motivo: "Thrash nacional veloz, agressivo e obrigatório para quem quer pancada clássica."
    },
    {
        titulo: "Black Sabbath - Master of Reality",
        preco: "R$ 179,90",
        genero: "Doom metal",
        imagem: "imagens/masterofreality.jpg",
        pagina: "pagina_albuns/pmasterofreality.html",
        tags: ["doom", "anos70", "arrastado", "pesado", "classico", "internacional"],
        motivo: "Riffs lentos, graves e clássicos: a raiz pesada do doom em forma de disco."
    },
    {
        titulo: "Sepultura - Roots",
        preco: "R$ 169,90",
        genero: "Groove/Nu metal nacional",
        imagem: "imagens/roots.jpg",
        pagina: "pagina_albuns/proots.html",
        tags: ["groove", "nu", "anos90", "pesado", "energia", "nacional", "moderno"],
        motivo: "Groove brasileiro com peso tribal, energia e identidade própria."
    },
    {
        titulo: "System of a Down - Toxicity",
        preco: "R$ 169,90",
        genero: "Nu metal",
        imagem: "imagens/toxicity.jpg",
        pagina: "pagina_albuns/ptoxicity.html",
        tags: ["nu", "anos2000", "moderno", "energia", "melodico", "internacional"],
        motivo: "Um disco explosivo, moderno e cheio de mudanças de clima."
    },
    {
        titulo: "Iron Maiden - The Number of the Beast",
        preco: "R$ 189,90",
        genero: "Heavy metal",
        imagem: "imagens/Iron_Maiden_-_The_Number_Of_The_Beast.jpg",
        pagina: "pagina_albuns/p666.html",
        tags: ["heavy", "anos80", "classico", "melodico", "internacional"],
        motivo: "Heavy metal clássico, melódico e grandioso, com cara de coleção essencial."
    },
    {
        titulo: "Electric Wizard - Dopethrone",
        preco: "R$ 189,90",
        genero: "Doom metal",
        imagem: "imagens/dopethorne.jpg",
        pagina: "pagina_albuns/pdopethorne.html",
        tags: ["doom", "anos2000", "arrastado", "sombrio", "pesado", "internacional"],
        motivo: "Doom arrastado e sufocante, perfeito para quem quer peso lento e atmosfera densa."
    },
    {
        titulo: "Linkin Park - Hybrid Theory",
        preco: "R$ 179,90",
        genero: "Nu metal",
        imagem: "imagens/hybridtheory.jpg",
        pagina: "pagina_albuns/phybridtheory.html",
        tags: ["nu", "anos2000", "moderno", "melodico", "energia", "internacional"],
        motivo: "Nu metal acessível, emocional e cheio de refrões fortes."
    },
    {
        titulo: "Venom - Black Metal",
        preco: "R$ 189,90",
        genero: "Black/Heavy metal",
        imagem: "imagens/blackmetal.jpg",
        pagina: "pagina_albuns/pblackmetal.html",
        tags: ["black", "heavy", "anos80", "rapido", "classico", "internacional"],
        motivo: "Cru, clássico e veloz, uma base histórica para o metal extremo."
    },
    {
        titulo: "Angra - Angels Cry",
        preco: "R$ 149,90",
        genero: "Heavy metal nacional",
        imagem: "imagens/angelscry.jpg",
        pagina: "pagina_albuns/pangelscry.html",
        tags: ["heavy", "anos90", "melodico", "classico", "nacional"],
        motivo: "Metal nacional melódico e refinado, com arranjos épicos e muita personalidade."
    },
    {
        titulo: "Alice in Chains - Dirt",
        preco: "R$ 169,90",
        genero: "Alternative metal",
        imagem: "imagens/dirt.jpg",
        pagina: "pagina_albuns/pdirt.html",
        tags: ["outros", "anos90", "melancolico", "sombrio", "pesado", "internacional"],
        motivo: "Pesado, melancólico e sombrio, ideal para sair um pouco do metal extremo tradicional."
    },
    {
        titulo: "Crypta - Echoes of the Soul",
        preco: "R$ 149,90",
        genero: "Death metal nacional",
        imagem: "imagens/cryta.jpg",
        pagina: "pagina_albuns/pechoesofthesoul.html",
        tags: ["death", "atual", "extremo", "rapido", "nacional", "moderno"],
        motivo: "Death metal brasileiro recente, direto e agressivo."
    }
];

function salvarAlbumSelecionado(album) {
    try {
        localStorage.setItem("albumSelecionadoHellfena", JSON.stringify({
            titulo: album.titulo,
            preco: album.preco
        }));
    } catch (erro) {
        return;
    }
}

function recomendarAlbum(respostas) {
    let melhorAlbum = albunsRecomendador[0];
    let melhorPontuacao = -1;

    albunsRecomendador.forEach(function (album) {
        let pontuacao = respostas.reduce(function (total, resposta) {
            if (album.tags.includes(resposta)) {
                return total + 1;
            }

            return total;
        }, 0);

        if (pontuacao > melhorPontuacao) {
            melhorPontuacao = pontuacao;
            melhorAlbum = album;
        }
    });

    return melhorAlbum;
}

function montarResultadoRecomendacao(album) {
    let resultado = document.getElementById("resultadoRecomendacao");
    let albumContato = encodeURIComponent(album.titulo + " | " + album.preco);

    resultado.innerHTML = `
        <div class="album-recomendado">
            <img src="${album.imagem}" alt="${album.titulo}">
            <div class="album-recomendado-info">
                <span>${album.genero}</span>
                <h3>${album.titulo}</h3>
                <strong>${album.preco}</strong>
                <p>${album.motivo}</p>
                <div class="acoes-recomendacao">
                    <a class="comprar botao-link" href="${album.pagina}">Ver detalhes</a>
                    <a class="comprar botao-link" href="contato.html?album=${albumContato}">Reservar</a>
                </div>
            </div>
        </div>
    `;
}

function iniciarRecomendador() {
    let formulario = document.getElementById("formRecomendador");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        let respostas = Array.from(formulario.querySelectorAll("select"))
            .map(function (campo) {
                return campo.value;
            })
            .filter(function (resposta) {
                return resposta && resposta !== "qualquer";
            });

        let album = recomendarAlbum(respostas);

        salvarAlbumSelecionado(album);
        montarResultadoRecomendacao(album);
    });
}

function converterPreco(precoTexto) {
    let precoEncontrado = precoTexto.match(/R\$\s*([\d.]+,\d{2})/);

    if (!precoEncontrado) {
        return 0;
    }

    return Number(precoEncontrado[1].replace(/\./g, "").replace(",", "."));
}

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function obterAlbumSalvo() {
    let albumSalvo = "";

    try {
        albumSalvo = localStorage.getItem("albumSelecionadoHellfena");
    } catch (erro) {
        return "";
    }

    if (!albumSalvo) {
        return "";
    }

    try {
        let album = JSON.parse(albumSalvo);

        if (album.titulo && album.preco) {
            return album.titulo + " | " + album.preco;
        }
    } catch (erro) {
        return "";
    }

    return "";
}

function selecionarAlbumInicial(albumSelect) {
    let parametros = new URLSearchParams(window.location.search);
    let albumRecebido = parametros.get("album") || obterAlbumSalvo();

    if (!albumRecebido) {
        return;
    }

    let albumNormalizado = normalizarTexto(albumRecebido);
    let opcoes = Array.from(albumSelect.options);
    let opcaoEncontrada = opcoes.find(function (opcao) {
        return normalizarTexto(opcao.textContent) === albumNormalizado;
    });

    if (opcaoEncontrada) {
        albumSelect.value = opcaoEncontrada.value;
    }
}

function iniciarResumoContato() {
    let albumSelect = document.getElementById("album");
    let quantidadeInput = document.getElementById("quantidade");
    let resumoAlbum = document.getElementById("resumoAlbum");
    let resumoQuantidade = document.getElementById("resumoQuantidade");
    let resumoPrecoUnitario = document.getElementById("resumoPrecoUnitario");
    let totalDiscos = document.getElementById("totalDiscos");
    let totalPedido = document.getElementById("totalPedido");

    if (!albumSelect || !quantidadeInput || !resumoAlbum || !resumoQuantidade || !resumoPrecoUnitario || !totalDiscos) {
        return;
    }

    function atualizarResumo() {
        let opcaoSelecionada = albumSelect.options[albumSelect.selectedIndex];
        let albumEscolhido = albumSelect.value ? opcaoSelecionada.textContent.split("|")[0].trim() : "Nenhum selecionado";
        let quantidade = parseInt(quantidadeInput.value, 10);

        if (Number.isNaN(quantidade) || quantidade < 1) {
            quantidade = 1;
        }

        let quantidadeMaxima = parseInt(quantidadeInput.max, 10);

        if (!Number.isNaN(quantidadeMaxima) && quantidade > quantidadeMaxima) {
            quantidade = quantidadeMaxima;
        }

        let precoUnitario = albumSelect.value ? converterPreco(opcaoSelecionada.textContent) : 0;
        let total = precoUnitario * quantidade;
        let totalFormatado = formatarPreco(total);

        resumoAlbum.textContent = albumEscolhido;
        resumoQuantidade.textContent = quantidade;
        resumoPrecoUnitario.textContent = formatarPreco(precoUnitario);
        totalDiscos.textContent = totalFormatado;
        quantidadeInput.value = quantidade;

        if (totalPedido) {
            totalPedido.value = totalFormatado;
        }
    }

    selecionarAlbumInicial(albumSelect);
    atualizarResumo();

    albumSelect.addEventListener("change", atualizarResumo);
    quantidadeInput.addEventListener("input", atualizarResumo);

    if (quantidadeInput.closest("form")) {
        quantidadeInput.closest("form").addEventListener("submit", atualizarResumo);
    }
}

iniciarCatalogo();
iniciarRecomendador();
iniciarResumoContato();
