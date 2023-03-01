function miFuction() {
    document.getElementById("demo").innerHTML = "Celular: 2354-4567"
    console.log("asd")
}
function Enviarmail(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio MAL! Mail no enviado',
        footer: '<a href="">Enviar Informe</a>'
      })
}