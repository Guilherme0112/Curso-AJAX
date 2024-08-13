document.addEventListener('DOMContentLoaded', function(){

    // Vendo dados

    const btn = this.querySelector("#btn");
    btn.addEventListener('click', function(){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "class/show-class.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
        xhr.onload = function(){
            if(xhr.status === 200){
                // Ele recebe os dados dentro de uma array que está dentro da outra
                var dados = JSON.parse(xhr.responseText);
                // A var dados recebe a array que tem os produtos
                dados = dados.dados
                // console.log(dados);
                let html = "";
                if(Array.isArray(dados)){
                    dados.forEach(dado => {
                        let preco = dado.preco;
                        preco = preco.toString().replace(/\./g, ',');
                        html += ` <div class="card m-3" style="width: 18rem;">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Nome: ${dado.nome}</li>
                                        <li class="list-group-item">Preço: R$${preco}</li>
                                        <li class="list-group-item">Categoria: ${dado.categoria}</li>
                                    </ul>
                                    </div>`;
                    });
                    document.querySelector("#produtos").innerHTML = html;
                } else {
                    document.querySelector("#produtos").innerHTML = dados;
                }
            } else {
                console.error("Erro", xhr.statusText);
            }
        };
        xhr.send();
    });
    document.querySelector('#btn-form').addEventListener('click', function(evento){
        evento.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "class/create-class.php", true);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.error('Erro na requisição:', xhr.statusText);
                }
            }
        }
        const formData = new FormData(document.querySelector('#form'));
        xhr.send(formData);
        // console.log(nome, preco, categoria);
    });
});