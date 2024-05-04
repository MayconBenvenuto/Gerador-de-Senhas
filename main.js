// Função para gerar a senha
function gerarSenha() {
    // Obtém as opções selecionadas pelo usuário
    var incluirMaiusculas = document.getElementById("uppercase").checked;
    var incluirMinusculas = document.getElementById("lowercase").checked;
    var incluirNumeros = document.getElementById("numbers").checked;
    var incluirSimbolos = document.getElementById("symbols").checked;

    // Define os conjuntos de caracteres com base nas opções selecionadas
    var caracteres = '';
    if (incluirMaiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (incluirNumeros) caracteres += '0123456789';
    if (incluirSimbolos) caracteres += '!@#$%^&*()-_+=<>?';

    // Verifica se pelo menos uma opção foi selecionada
    if (caracteres === '') {
        alert("Selecione pelo menos uma opção para incluir na senha.");
        return;
    }

    // Gera a senha
    var tamanhoSenha = 10; // Tamanho padrão da senha
    var senha = '';
    for (var i = 0; i < tamanhoSenha; i++) {
        var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }

    // Exibe a senha gerada na página
    document.getElementById("senhagerada").innerText = senha;
}
