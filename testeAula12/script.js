function adicionarAluno() {
    // Obter os valores do input
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    
    // Validar se os campos não estão vazios
    if (nome === '' || idade === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Adicionar aluno à tabela
    var tabela = document.getElementById('tabela');
    var newRow = tabela.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = nome;
    cell2.innerHTML = idade;
    
    // Limpar os campos do formulário após adicionar o aluno
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}
