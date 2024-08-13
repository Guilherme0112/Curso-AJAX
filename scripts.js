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
                        html += ` <div class="box">
                                    <p class="nome">${dado.nome}</p>
                                    <p class="preco">${dado.preco}</p>
                                    <p class='categoria'>${dado.categoria}</p>
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
});