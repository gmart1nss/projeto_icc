const albuns = {
    tsop: {
        titulo: "Death - The Sound of Perseverance",
        preco: "R$ 210,90",
        imagem: "tsop.jpg",
        ano: "1998",
        genero: "Death Metal",
        descricao: "The Sound of Perseverance é o sétimo e último álbum de estúdio do Death. O disco apresenta uma fase mais técnica e progressiva da banda, com composições longas, riffs complexos e uma performance intensa de Chuck Schuldiner.",
        pagina: "ptsop.html",
        similares: ["symbolic", "spiritualhealing", "nonesovile", "tombofthemutilated", "grotesque"]
    },
    thelawsofscourge: {
        titulo: "Sarcófago - The Laws of Scourge",
        preco: "R$ 99,90",
        imagem: "thelawssarcofago.jpg",
        ano: "1991",
        genero: "Black/Death Metal",
        descricao: "The Laws of Scourge marcou uma fase mais técnica e sombria do Sarcófago, mantendo a agressividade extrema da banda brasileira enquanto explorava uma produção mais limpa e riffs cortantes.",
        pagina: "pthelawsofscourge.html",
        similares: ["mayhem", "bloodfiredeath", "transilvanianhunger", "blackmetal", "beneathremains"]
    },
    grotesque: {
        titulo: "Dying Fetus - Grotesque Impalement",
        preco: "R$ 179,90",
        imagem: "grotesque.jpg",
        ano: "2000",
        genero: "Death Metal",
        descricao: "Grotesque Impalement reúne a brutalidade técnica do Dying Fetus em faixas pesadas, diretas e cheias de mudanças rítmicas. É uma peça forte para fãs de death metal extremo e riffs esmagadores.",
        pagina: "pgrotesque.html",
        similares: ["nonesovile", "tombofthemutilated", "tsop", "symbolic", "spiritualhealing"]
    },
    tombofthemutilated: {
        titulo: "Cannibal Corpse - Tomb of the Mutilated",
        preco: "R$ 199,90",
        imagem: "tombofthemutilated.jpg",
        ano: "1992",
        genero: "Death Metal",
        descricao: "Tomb of the Mutilated é um dos álbuns mais conhecidos do Cannibal Corpse, famoso pela brutalidade dos riffs, vocais extremos e atmosfera gráfica que virou marca registrada da banda.",
        pagina: "ptombofthemutilated.html",
        similares: ["grotesque", "nonesovile", "tsop", "symbolic", "spiritualhealing"]
    },
    angelscry: {
        titulo: "Angra - Angels Cry",
        preco: "R$ 129,90",
        imagem: "angelscry.jpg",
        ano: "1993",
        genero: "Power Metal",
        descricao: "Angels Cry é o álbum de estreia do Angra e combina heavy metal melódico, elementos sinfônicos e influências brasileiras. O disco projetou a banda internacionalmente dentro do metal melódico.",
        pagina: "pangelscry.html",
        similares: ["numberofthebeast", "pieceofmind", "masterofpuppets", "blackmetal", "blacksabbath"]
    },
    bloodfiredeath: {
        titulo: "Bathory - Blood Fire Death",
        preco: "R$ 169,90",
        imagem: "bloodfiredeath.jpg",
        ano: "1988",
        genero: "Black Metal",
        descricao: "Blood Fire Death é uma obra de transição do Bathory, unindo a ferocidade do black metal com atmosferas épicas que ajudariam a formar a base do viking metal.",
        pagina: "pbloodfiredeath.html",
        similares: ["mayhem", "transilvanianhunger", "blackmetal", "thelawsofscourge", "blacksabbath"]
    },
    transilvanianhunger: {
        titulo: "Darkthrone - Transilvanian Hunger",
        preco: "R$ 129,90",
        imagem: "transilvanian.jpg",
        ano: "1994",
        genero: "Black Metal",
        descricao: "Transilvanian Hunger é um clássico do black metal norueguês, marcado por produção crua, repetição hipnótica e uma atmosfera gelada e minimalista.",
        pagina: "ptransilvanianhunger.html",
        similares: ["mayhem", "bloodfiredeath", "blackmetal", "thelawsofscourge", "blacksabbath"]
    },
    echoesofthesoul: {
        titulo: "Crypta - Echoes of the Soul",
        preco: "R$ 95,00",
        imagem: "cryta.jpg",
        ano: "2021",
        genero: "Death Metal",
        descricao: "Echoes of the Soul é o álbum de estreia da Crypta, trazendo death metal brasileiro com riffs agressivos, bateria precisa e uma sonoridade moderna sem perder a aspereza do gênero.",
        pagina: "pechoesofthesoul.html",
        similares: ["beneathremains", "arise", "thelawsofscourge", "nonesovile", "symbolic"]
    },
    repentless: {
        titulo: "Slayer - Repentless",
        preco: "R$ 149,00",
        imagem: "repentless.jpg",
        ano: "2015",
        genero: "Thrash Metal",
        descricao: "Repentless é o décimo segundo álbum do Slayer e mantém a proposta veloz e agressiva da banda, com riffs diretos e a energia clássica do thrash metal.",
        pagina: "prepentless.html",
        similares: ["reigninblood", "masterofpuppets", "ridethelightning", "beneathremains", "arise"]
    },
    rumours: {
        titulo: "Fleetwood Mac - Rumours",
        preco: "R$ 199,90",
        imagem: "rummors.jpg",
        ano: "1977",
        genero: "Rock",
        descricao: "Rumours é um clássico do rock dos anos 1970, conhecido por melodias marcantes, harmonias vocais e composições carregadas de tensão emocional.",
        pagina: "prumours.html",
        similares: ["dirt", "lavotanovo", "blackmage", "graygrey", "hybridtheory"]
    },
    ridethelightning: {
        titulo: "Metallica - Ride the Lightning",
        preco: "R$ 290,00",
        imagem: "Ride_the_Lightning.jpg",
        ano: "1984",
        genero: "Thrash Metal",
        descricao: "Ride the Lightning consolidou o Metallica como força central do thrash metal, misturando velocidade, peso e composições mais ambiciosas.",
        pagina: "pridethelightning.html",
        similares: ["masterofpuppets", "reigninblood", "repentless", "beneathremains", "arise"]
    },
    issues: {
        titulo: "Korn - Issues",
        preco: "R$ 149,00",
        imagem: "issues.jpg",
        ano: "1999",
        genero: "Nu Metal",
        descricao: "Issues mostra o Korn em uma fase sombria e introspectiva, com grooves pesados, baixo pulsante e letras carregadas de tensão psicológica.",
        pagina: "pissues.html",
        similares: ["toxicity", "hybridtheory", "limp", "spit", "roots"]
    },
    toxicity: {
        titulo: "System of a Down - Toxicity",
        preco: "R$ 189,90",
        imagem: "toxicity.jpg",
        ano: "2001",
        genero: "Nu Metal",
        descricao: "Toxicity mistura metal alternativo, passagens frenéticas, melodias marcantes e crítica social, tornando-se um dos discos mais reconhecidos do System of a Down.",
        pagina: "ptoxicity.html",
        similares: ["issues", "hybridtheory", "limp", "spit", "roots"]
    },
    masterofreality: {
        titulo: "Black Sabbath - Master of Reality",
        preco: "R$ 129,90",
        imagem: "masterofreality.jpg",
        ano: "1971",
        genero: "Doom Metal",
        descricao: "Master of Reality aprofundou o peso do Black Sabbath com riffs mais graves e arrastados. O disco é uma referência direta para o doom, stoner e sludge metal.",
        pagina: "pmasterofreality.html",
        similares: ["blacksabbath", "vol4", "dopethrone", "sonicexcess", "blackmetal"]
    },
    blackmage: {
        titulo: "Ghostemane - Black Mage",
        preco: "R$ 129,90",
        imagem: "blackmage.jpeg",
        ano: "2016",
        genero: "Trap Metal",
        descricao: "Black Mage mistura rap sombrio, estética industrial e influências do metal extremo, refletindo a sonoridade pesada e obscura associada ao Ghostemane.",
        pagina: "pblackmage.html",
        similares: ["graygrey", "dirt", "hybridtheory", "issues", "toxicity"]
    },
    blackmetal: {
        titulo: "Venom - Black Metal",
        preco: "R$ 179,90",
        imagem: "blackmetal.jpg",
        ano: "1982",
        genero: "Black/Heavy Metal",
        descricao: "Black Metal é um álbum seminal do Venom e ajudou a batizar e inspirar toda uma vertente extrema, com atitude crua, riffs sujos e estética demoníaca.",
        pagina: "pblackmetal.html",
        similares: ["bloodfiredeath", "mayhem", "transilvanianhunger", "blacksabbath", "numberofthebeast"]
    },
    chaosad: {
        titulo: "Sepultura - Chaos A.D.",
        preco: "R$ 109,90",
        imagem: "chaosad.jpg",
        ano: "1993",
        genero: "Groove Metal",
        descricao: "Chaos A.D. marca a entrada do Sepultura em uma sonoridade mais grooveada e direta, mantendo peso e crítica social em faixas marcantes.",
        pagina: "pchaosad.html",
        similares: ["roots", "arise", "beneathremains", "cowboys", "vulgardisplay"]
    },
    arise: {
        titulo: "Sepultura - Arise",
        preco: "R$ 100,00",
        imagem: "arise.jpg",
        ano: "1991",
        genero: "Thrash Metal",
        descricao: "Arise consolidou o Sepultura no cenário internacional com thrash metal técnico, agressivo e uma produção mais robusta.",
        pagina: "parise.html",
        similares: ["beneathremains", "chaosad", "roots", "reigninblood", "masterofpuppets"]
    },
    graygrey: {
        titulo: "$uicideboy$ - Gray/Grey",
        preco: "R$ 219,90",
        imagem: "graygrey.jpg",
        ano: "2015",
        genero: "Cloud Rap",
        descricao: "Gray/Grey apresenta a atmosfera obscura e melancólica do $uicideboy$, com beats densos, vozes graves e letras sombrias.",
        pagina: "pgraygrey.html",
        similares: ["blackmage", "dirt", "hybridtheory", "rumours", "issues"]
    },
    hybridtheory: {
        titulo: "Linkin Park - Hybrid Theory",
        preco: "R$ 329,90",
        imagem: "hybridtheory.jpg",
        ano: "2000",
        genero: "Nu Metal",
        descricao: "Hybrid Theory combina riffs de metal, rap, eletrônica e refrões melódicos. O álbum se tornou um dos grandes marcos populares do nu metal.",
        pagina: "phybridtheory.html",
        similares: ["toxicity", "issues", "limp", "spit", "blackmage"]
    },
    sonicexcess: {
        titulo: "Crowbar - Sonic Excess in Its Purest Form",
        preco: "R$ 185,90",
        imagem: "sonic.jpg",
        ano: "2001",
        genero: "Sludge/Doom Metal",
        descricao: "Sonic Excess in Its Purest Form traz o peso arrastado do Crowbar, riffs densos e uma atmosfera melancólica típica do sludge metal.",
        pagina: "psonicexcess.html",
        similares: ["dopethrone", "masterofreality", "vol4", "blacksabbath", "dirt"]
    },
    spiritualhealing: {
        titulo: "Death - Spiritual Healing",
        preco: "R$ 159,90",
        imagem: "spiritualhealing.jpg",
        ano: "1990",
        genero: "Death Metal",
        descricao: "Spiritual Healing mostra o Death em transição para composições mais técnicas e letras mais críticas, mantendo a agressividade do death metal clássico.",
        pagina: "pspiritualhealing.html",
        similares: ["symbolic", "tsop", "nonesovile", "tombofthemutilated", "grotesque"]
    },
    spit: {
        titulo: "Kittie - Spit",
        preco: "R$ 149,90",
        imagem: "spit.jpg",
        ano: "1999",
        genero: "Nu/Groove Metal",
        descricao: "Spit é o álbum de estreia do Kittie, combinando raiva, riffs pesados e uma energia crua que marcou o nu metal do fim dos anos 1990.",
        pagina: "pspit.html",
        similares: ["issues", "toxicity", "hybridtheory", "limp", "vulgardisplay"]
    },
    vulgardisplay: {
        titulo: "Pantera - Vulgar Display of Power",
        preco: "R$ 139,90",
        imagem: "vulgardisplay.jpg",
        ano: "1992",
        genero: "Groove Metal",
        descricao: "Vulgar Display of Power levou o groove metal do Pantera a um novo nível de agressividade, com riffs secos, bateria poderosa e vocais ferozes.",
        pagina: "pvulgardisplay.html",
        similares: ["cowboys", "chaosad", "roots", "spit", "sonicexcess"]
    },
    vol4: {
        titulo: "Black Sabbath - Vol. 4",
        preco: "R$ 129,90",
        imagem: "vol4.jpg",
        ano: "1972",
        genero: "Doom/Heavy Metal",
        descricao: "Vol. 4 expande o peso do Black Sabbath com momentos experimentais, riffs densos e a atmosfera sombria que ajudou a definir o heavy metal.",
        pagina: "pvol4.html",
        similares: ["blacksabbath", "masterofreality", "dopethrone", "sonicexcess", "blackmetal"]
    },
    dirt: {
        titulo: "Alice in Chains - Dirt",
        preco: "R$ 129,90",
        imagem: "dirt.jpg",
        ano: "1992",
        genero: "Grunge/Alternative Metal",
        descricao: "Dirt é o segundo álbum do Alice in Chains, sombrio, pesado e emocionalmente intenso, com harmonias vocais marcantes e riffs densos.",
        pagina: "pdirt.html",
        similares: ["rumours", "blackmage", "graygrey", "hybridtheory", "sonicexcess"]
    },
    pieceofmind: {
        titulo: "Iron Maiden - Piece of Mind",
        preco: "R$ 129,90",
        imagem: "piece.jpg",
        ano: "1983",
        genero: "Heavy Metal",
        descricao: "Piece of Mind é um clássico do Iron Maiden, com composições épicas, baixo galopante e a voz marcante de Bruce Dickinson em grande fase.",
        pagina: "ppieceofmind.html",
        similares: ["numberofthebeast", "angelscry", "blackmetal", "masterofpuppets", "blacksabbath"]
    },
    limp: {
        titulo: "Limp Bizkit - Significant Other",
        preco: "R$ 429,90",
        imagem: "limp.jpg",
        ano: "1999",
        genero: "Nu Metal",
        descricao: "Significant Other levou o Limp Bizkit ao auge do nu metal, misturando rap, riffs pesados, atitude explosiva e produção voltada para grandes refrões.",
        pagina: "plimp.html",
        similares: ["hybridtheory", "issues", "toxicity", "spit", "blackmage"]
    },
    symbolic: {
        titulo: "Death - Symbolic",
        preco: "R$ 169,90",
        imagem: "Symbolic_Album.jpg",
        pagina: "psymbolic.html"
    },
    beneathremains: {
        titulo: "Sepultura - Beneath the Remains",
        preco: "R$ 90,00",
        imagem: "beneaththeremains.jpg",
        pagina: "pbeneathremains.html"
    },
    reigninblood: {
        titulo: "Slayer - Reign in Blood",
        preco: "R$ 199,90",
        imagem: "reigninblood.jpg",
        pagina: "preigninblood.html",
        similares: ["repentless", "masterofpuppets", "ridethelightning", "beneathremains", "arise"]
    },
    mayhem: {
        titulo: "Mayhem - De Mysteriis dom Sathanas",
        preco: "R$ 189,90",
        imagem: "demysteriis.jpg",
        pagina: "pmayhem.html"
    },
    cowboys: {
        titulo: "Pantera - Cowboys from Hell",
        preco: "R$ 129,90",
        imagem: "cowboysfromhell.jpg",
        pagina: "pcowboys.html",
        similares: ["vulgardisplay", "chaosad", "roots", "spit", "sonicexcess"]
    },
    nonesovile: {
        titulo: "Cryptopsy - None So Vile",
        preco: "R$ 156,90",
        imagem: "nonesovile.jpg",
        pagina: "pnonesovile.html",
        similares: ["grotesque", "tombofthemutilated", "tsop", "symbolic", "spiritualhealing"]
    },
    dopethrone: {
        titulo: "Electric Wizard - Dopethrone",
        preco: "R$ 129,90",
        imagem: "dopethorne.jpg",
        pagina: "pdopethorne.html",
        similares: ["masterofreality", "vol4", "sonicexcess", "blacksabbath", "dirt"]
    },
    roots: {
        titulo: "Sepultura - Roots",
        preco: "R$ 149,90",
        imagem: "roots.jpg",
        pagina: "proots.html"
    },
    numberofthebeast: {
        titulo: "Iron Maiden - The Number of the Beast",
        preco: "R$ 250,00",
        imagem: "Iron_Maiden_-_The_Number_Of_The_Beast.jpg",
        pagina: "p666.html"
    },
    lavotanovo: {
        titulo: "Raimundos - Lavô Tá Novo",
        preco: "R$ 89,90",
        imagem: "lavotanovo.jpg",
        pagina: "plavotanovo.html",
        similares: ["angelscry", "roots", "chaosad", "rumours", "dirt"]
    },
    masterofpuppets: {
        titulo: "Metallica - Master of Puppets",
        preco: "R$ 189,90",
        imagem: "masterofpuppets.jpg",
        pagina: "pmasterofpuppets.html"
    },
    blacksabbath: {
        titulo: "Black Sabbath - Black Sabbath",
        preco: "R$ 129,90",
        imagem: "blacksabbath.jpg",
        pagina: "pblacksabbath.html"
    }
};

function criarCardAlbum(id) {
    const album = albuns[id];

    if (!album) {
        return "";
    }

    return `
        <a href="../pagina_albuns/${album.pagina}" class="link-album">
            <div class="disco">
                <img src="../imagens/${album.imagem}" alt="${album.titulo}">
                <div class="disco-info">
                    <h3>${album.titulo}</h3>
                </div>
                <div class="preco">
                    <p>${album.preco}</p>
                </div>
            </div>
        </a>
    `;
}

function paginaJaTemRecomendacoes() {
    return Array.from(document.querySelectorAll("h2")).some(function (titulo) {
        return titulo.textContent.trim().toLowerCase() === "mais como esse";
    });
}

function montarAlbum(album) {
    const container = document.querySelector(".album_container");

    if (!container || container.children.length > 0) {
        return;
    }

    container.innerHTML = `
        <img src="../imagens/${album.imagem}" alt="${album.titulo}">
        <div class="info_album">
            <h2>${album.titulo}</h2>
            <h3>${album.preco}</h3>
            <p><strong>Ano de Lançamento:</strong> ${album.ano}</p>
            <p><strong>Gênero:</strong> ${album.genero}</p>
            <p><strong>Descrição:</strong> ${album.descricao}</p>
        </div>
    `;
}

function montarRecomendacoes(album) {
    const main = document.querySelector("main");

    if (!main || paginaJaTemRecomendacoes() || !album.similares) {
        return;
    }

    main.insertAdjacentHTML("beforeend", `
        <section class="titulo-secao">
            <div class="linha"></div>
            <h2>Mais como esse</h2>
            <div class="linha"></div>
        </section>

        <div class="grid-discos">
            ${album.similares.map(criarCardAlbum).join("")}
        </div>
    `);
}

function montarRodape() {
    if (document.querySelector("footer")) {
        return;
    }

    document.body.insertAdjacentHTML("beforeend", `
        <footer>
            <p>&copy; 2026 Hellfena Records. Todos os direitos reservados.</p>
        </footer>
    `);
}

const albumAtual = albuns[document.body.dataset.album];

if (albumAtual) {
    montarAlbum(albumAtual);
    montarRecomendacoes(albumAtual);
    montarRodape();
}
