const avanca = document. querySelectorAll(".btn-proximo")

avanca.forEach(button => {
    button.addEventListener("clik", function(){
     const atual = document,querySelector("ativo");
     const proximoPasso = "passo"+ this.getAttribute("data-proximo");
     atual.classList.reove("ativo");
     document.getElementById(proximoPasso).classList.add("ativo")
   })
})