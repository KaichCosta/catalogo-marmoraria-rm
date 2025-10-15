document.addEventListener('DOMContentLoaded', () => {
    // --- BANCO DE DADOS SIMULADO ---
    const rochas = [
        //{ id: 1, nome: 'Branco Prime', categoria: 'Quartzo', imagem: 'https://placehold.co/400x400/f5f5f5/333?text=Branco+Prime', descricao: 'Superfície de quartzo branca e uniforme, perfeita para ambientes modernos e minimalistas. Alta resistência a manchas e riscos.' },
        //{ id: 2, nome: 'Branco Siena', categoria: 'Granito', imagem: 'https://placehold.co/400x400/e0e0e0/333?text=Branco+Siena', descricao: 'Granito de fundo claro com pigmentação em tons de cinza e bege. Versátil e elegante para bancadas e pisos.' },
        //{ id: 5, nome: 'Calacatta Gold', categoria: 'Mármore', imagem: 'https://placehold.co/400x400/fcf6e8/8B5A2B?text=Calacatta+Gold', descricao: 'Mármore nobre com fundo branco e veios marcantes em tons de cinza e dourado. Sinônimo de luxo e exclusividade.' },
        //{ id: 10, nome: 'Quartzito Taj Mahal', categoria: 'Quartzito', imagem: 'https://placehold.co/400x400/fdf6e3/a1887f?text=Taj+Mahal', descricao: 'Quartzito de beleza exuberante, com fundo off-white e suaves veios dourados, que remete à elegância do mármore com a resistência do granito.' },
        { id: 1, nome: 'Amarelo Ornamental', categoria: 'Granito', imagem: 'assets/amarelo-ornamental.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 2, nome: 'Bege Bahia', categoria: 'Mármore', imagem: 'assets/bege-bahia.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 3, nome: 'Bege Crema Marfil', categoria: 'Mármore', imagem: 'assets/bege-crema.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 4, nome: 'Branco Alasca', categoria: 'Granito', imagem: 'assets/branco-alasca.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 5, nome: 'Branco Ceará', categoria: 'Granito', imagem: 'assets/branco-ceara.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 6, nome: 'Branco Dallas', categoria: 'Granito', imagem: 'assets/branco-dallas.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 7, nome: 'Branco Itaúnas', categoria: 'Granito', imagem: 'assets/branco-itaunas.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 8, nome: 'Branco Pitaya', categoria: 'Granito', imagem: 'assets/branco-pitaya.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 9, nome: 'Cinza Ocre Itabira', categoria: 'Granito', imagem: 'assets/cinza-ocre.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 10, nome: 'Dakar', categoria: 'Quartzito', imagem: 'assets/dakar-quartzito.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 11, nome: 'Marrom Café', categoria: 'Granito', imagem: 'assets/marrom-cafe.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 12, nome: 'Preto São Gabriel', categoria: 'Granito', imagem: 'assets/preto-sao-gabriel.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 13, nome: 'Preto Via Láctea', categoria: 'Granito', imagem: 'assets/preto-via-lactea.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 14, nome: 'Taj Mahal', categoria: 'Quartzito', imagem: 'assets/taj-mahal.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        { id: 15, nome: 'Verde Ubatuba', categoria: 'Granito', imagem: 'assets/verde-ubatuba.jpg', descricao: 'escrever observações detalhadas sobre o material.' },
        
    
    ];
    
    const gradeRochas = document.getElementById('grade-rochas');
    const caixaBusca = document.getElementById('caixa-busca');
    const filtrosCategoria = document.getElementById('filtros-categoria');
    const tituloGaleria = document.getElementById('titulo-galeria');
    const modal = document.getElementById('modal');
    const modalConteudo = document.getElementById('modal-conteudo');
    const botaoAbrirFiltros = document.getElementById('botao-abrir-filtros');
    const botaoFecharFiltros = document.getElementById('botao-fechar-filtros');
    const barraLateralFiltros = document.getElementById('barra-lateral-filtros');
    const sobreposicaoFiltros = document.getElementById('sobreposicao-filtros');



    
    // Função para criar e mostrar os cards na tela
    const exibirRochas = (listaDeRochas) => {
        gradeRochas.innerHTML = ''; // Limpa a galeria para exibir os novos resultados
        if (listaDeRochas.length === 0) {
            gradeRochas.innerHTML = `<p>Nenhum material encontrado com os filtros aplicados.</p>`;
            return;
        }
        listaDeRochas.forEach(rocha => {
            const cartaoRocha = document.createElement('div');
            cartaoRocha.className = 'item-galeria';
            cartaoRocha.innerHTML = `
                <img src="${rocha.imagem}" alt="Imagem de ${rocha.nome}">
                <div class="sobreposicao">
                    <h3>${rocha.nome}</h3>
                </div>
            `;
            cartaoRocha.addEventListener('click', () => abrirModal(rocha.id));
            gradeRochas.appendChild(cartaoRocha);
        });
    };

    // Função para abrir a janela de detalhes de um produto
    const abrirModal = (idDaRocha) => {
        const rochaEncontrada = rochas.find(rocha => rocha.id === idDaRocha);
        if (!rochaEncontrada) return; // Se não achar a rocha, não faz nada

        modalConteudo.innerHTML = `
            <div class="modal-imagem">
                <img src="${rochaEncontrada.imagem}" alt="Imagem de ${rochaEncontrada.nome}">
            </div>
            <div class="modal-info">
                <div>
                    <span class="categoria">${rochaEncontrada.categoria}</span>
                    <h2>${rochaEncontrada.nome}</h2>
                    <p>${rochaEncontrada.descricao}</p>
                </div>
                <button class="botao-solicitar">Solicitar Orçamento</button>
            </div>
            <button id="botao-fechar-modal" class="botao-fechar-modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        `;
        
        modal.classList.add('visivel');
        document.getElementById('botao-fechar-modal').addEventListener('click', fecharModal);
    };

    const fecharModal = () => {
        modal.classList.remove('visivel');
    };

    const abrirFiltros = () => {
        barraLateralFiltros.classList.add('visivel');
        sobreposicaoFiltros.classList.add('visivel');
        document.body.style.overflow = 'hidden'; // Impede a rolagem da página principal
    };

    const fecharFiltros = () => {
        barraLateralFiltros.classList.remove('visivel');
        sobreposicaoFiltros.classList.remove('visivel');
        document.body.style.overflow = ''; // Libera a rolagem da página principal
    };

    // Função principal que aplica a busca e os filtros
    const filtrarProdutos = () => {
        const termoDeBusca = caixaBusca.value.toLowerCase();
        const categoriaAtiva = document.querySelector('.botao-filtro.ativo').dataset.categoria;

        let rochasFiltradas = rochas;

        if (categoriaAtiva !== 'all') {
            rochasFiltradas = rochasFiltradas.filter(rocha => rocha.categoria === categoriaAtiva);
            tituloGaleria.textContent = categoriaAtiva + 's';
        } else {
            tituloGaleria.textContent = 'Todos os Materiais';
        }

        if (termoDeBusca) {
            rochasFiltradas = rochasFiltradas.filter(rocha => rocha.nome.toLowerCase().includes(termoDeBusca));
        }

        exibirRochas(rochasFiltradas);
    };

    let temporizadorDeBusca;
    caixaBusca.addEventListener('input', () => {
        clearTimeout(temporizadorDeBusca);
        temporizadorDeBusca = setTimeout(filtrarProdutos, 300);
    });
    
    filtrosCategoria.addEventListener('click', (evento) => {
        // Verifica se o clique foi realmente em um botão de filtro
        if (evento.target.classList.contains('botao-filtro')) {
            // Remove o destaque do botão que estava ativo
            document.querySelector('.botao-filtro.ativo').classList.remove('ativo');
            // Adiciona o destaque no botão que foi clicado
            evento.target.classList.add('ativo');
            filtrarProdutos(); // Roda a filtragem novamente
        }
    });

    // Listener para fechar a janela de detalhes (modal)
    modal.addEventListener('click', (evento) => {
        if (evento.target.id === 'modal') fecharModal();
    });
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && modal.classList.contains('visivel')) fecharModal();
    });

    botaoAbrirFiltros.addEventListener('click', abrirFiltros);
    botaoFecharFiltros.addEventListener('click', fecharFiltros);
    sobreposicaoFiltros.addEventListener('click', fecharFiltros);

    const botaoMenuMobile = document.getElementById('botao-menu-mobile');
    const menuMobile = document.getElementById('menu-mobile');
    botaoMenuMobile.addEventListener('click', () => {
        const estaVisivel = menuMobile.style.display === 'block';
        menuMobile.style.display = estaVisivel ? 'none' : 'block';
    });

    filtrarProdutos();
});