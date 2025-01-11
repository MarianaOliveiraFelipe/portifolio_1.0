const cabecalho = document.querySelector('.cabecalho');
const redes = document.querySelectorAll('.redes__elemento'); 

const corOriginalTela = getComputedStyle(document.body).backgroundColor; 
const corAlteradaTela = "#131313"; 
const corTextoOriginal = getComputedStyle(document.body).color; 
const corTextoAlterada = "#ffffff"; 
const corBorderBottomOriginal = getComputedStyle(cabecalho).borderBottomColor; 
const corBorderBottomAlterada = "#ffffff"; 
const corBorderOriginal = getComputedStyle(redes[0]).borderColor; 
const corBorderAlterada = "#ffffff"; 

const itensCabecalho = document.querySelectorAll('.navegacao__elemento');
const contatoLink = document.querySelector('#contato-link'); // ID para o item "Contato"
const contatoSection = document.querySelector('#contato'); // ID para a seção "Contato"

// Função para redefinir as cores para o estado original
function resetarCorOriginal() {
    document.body.style.backgroundColor = corOriginalTela;
    document.body.style.color = corTextoOriginal;
    cabecalho.style.borderBottomColor = corBorderBottomOriginal; 

    redes.forEach(item => {
        item.style.borderColor = corBorderOriginal;
    });

    itensCabecalho.forEach(item => {
        item.classList.remove('scroll-hover');
        item.classList.remove('click-hover');
    });
}

// Função para alterar as cores durante o scroll
function mudarCorScroll() {
    const distanciaContato = contatoSection.getBoundingClientRect().top;

    if (window.scrollY > 200 && distanciaContato > 200) {  
        document.body.style.backgroundColor = corAlteradaTela;  
        document.body.style.color = corTextoAlterada;
        cabecalho.style.borderBottomColor = corBorderBottomAlterada;  

        redes.forEach(item => {
            item.style.borderColor = corBorderAlterada;
        });

        itensCabecalho.forEach(item => {
            item.classList.add('scroll-hover');
        });
    } else {
        resetarCorOriginal();
    }
}

// Prevent default click behavior for all links to avoid scroll-to-top
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento de retorno ao topo da página
    });
});

// Evento de clique no item "Contato" para aplicar as mudanças de cor e rolar suavemente até a seção
contatoLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do clique
    resetarCorOriginal();

    // Rola suavemente para a seção de contato
    contatoSection.scrollIntoView({ behavior: 'smooth' });
});

// Detecta se a seção de contato está próxima e redefine as cores
window.addEventListener('scroll', mudarCorScroll);
