const app = new Vue({

    el: "#app",
    data: {

        frutas: [

            {nombre: "Manzana", img: './img/manzaa.jpeg' ,cantidad: 20, compras: 0, precio: 2000},
            {nombre: "Pera", img: './img/pera.jpeg' ,cantidad: 20, compras: 0, precio: 2500},
            {nombre: "Sandia", img: './img/sandia.jpeg' ,cantidad: 15, compras: 0, precio: 5000},
            {nombre: "Melon", img: './img/melon.jpeg' ,cantidad: 15, compras: 0, precio: 3000},
            {nombre: "Banano", img: './img/banano.jpeg' ,cantidad: 40, compras: 0, precio: 600},
            {nombre: "Papaya", img: './img/papaya.jpeg', cantidad: 20, compras: 0, precio: 3500},
            {nombre: "Naranja", img: './img/naranja.jpeg', cantidad: 20, compras: 0, precio: 2000},
            {nombre: "Mandarina", img: './img/mandarina.jpeg', cantidad: 20, compras: 0, precio: 2000},
            {nombre: "Uva", img: './img/Uva.jpeg', cantidad: 20, compras: 0, precio: 200},
            {nombre: "Limon", img: './img/limon.jpeg', cantidad: 20, compras: 0, precio: 500},
            {nombre: "Durazno", img: './img/durazno.jpeg', cantidad: 20, compras: 0, precio: 5000},
            {nombre: "Borojo", img: './img/borojo.jpeg', cantidad: 20, compras: 0, precio: 3500},
            
        ],
        
        datoUno: Math.round(Math.random()* 4 + 1),
        datoDos: Math.round(Math.random()* 4 + 1),
        comprasTotales: [],
        tuCompra: [],
        tusPedidos: [],

    },

    methods: {

        cargaImagen: function(index){

            let imgs = document.querySelectorAll(".divImagenFruta")

            if (imgs[index].innerHTML == `<img class="imagenFruta" src="${this.frutas[index].img}" alt="${this.frutas[index].nombre}">`){

                imgs[index].innerHTML = `<i style="color: #01f"> Ver fruta </i>`

            }else{

                imgs[index].innerHTML = `<img class="imagenFruta" src="${this.frutas[index].img}" alt="${this.frutas[index].nombre}">`

            }

        },

        compra: function(index){

            let Menupedidos = document.getElementById("pedidos")
            let totalFrutas = document.getElementById("frutasTotales")

            let compraRealizada = document.querySelector(".compraRealizada")
            let botonConfirmarCompra = document.querySelector(".botonConfirmarCompra")
            let textoCompra = document.querySelector(".textoCompra")
            let botonCancelar = document.querySelector(".cancelarCompra")

            let nombreFruta = this.frutas[index].nombre
            nombreFruta = nombreFruta.toLowerCase()

            let precioCompra = this.frutas[index].compras * this.frutas[index].precio

            Menupedidos.style.pointerEvents = "none"
            totalFrutas.style.pointerEvents = "none"

            compraRealizada.removeAttribute("hidden")

            if (this.frutas[index].compras == 1){

                textoCompra.textContent = `¿Deseas comprar ${this.frutas[index].compras} ${nombreFruta} por un precio de ${precioCompra}?`

            }else{

                textoCompra.textContent = `¿Deseas comprar ${this.frutas[index].compras} ${nombreFruta}s por un precio de ${precioCompra}?`

            }
        
            textoCompra.removeAttribute("hidden")
            botonConfirmarCompra.removeAttribute("hidden")
            botonCancelar.removeAttribute("hidden")
            compraRealizada.style.padding = "50px"
            compraRealizada.style.outline = "5px solid #000"
            compraRealizada.style.width = "550px"

            this.tuCompra = [this.frutas[index].nombre, this.frutas[index].compras, precioCompra]
            
        },

        compraConfirmada: function(){

            let Menupedidos = document.getElementById("pedidos")
            let totalFrutas = document.getElementById("frutasTotales")

            let compraRealizada = document.querySelector(".compraRealizada")
            let botonConfirmarCompra = document.querySelector(".botonConfirmarCompra")
            let textoCompra = document.querySelector(".textoCompra")
            let botonCancelar = document.querySelector(".cancelarCompra")

            Menupedidos.style.pointerEvents = "all"
            totalFrutas.style.pointerEvents = "all"

            textoCompra.setAttribute("hidden", "true")
            botonConfirmarCompra.setAttribute("hidden", "true")
            botonCancelar.setAttribute("hidden", "true")
            compraRealizada.setAttribute("hidden", "true")
            compraRealizada.style.padding = ""
            compraRealizada.style.outline = ""

            this.comprasTotales.push({

                fruta: this.tuCompra[0],
                cantidad: this.tuCompra[1],
                valor: this.tuCompra[2],

            })

            localStorage.setItem("Compras", JSON.stringify(this.comprasTotales))

            for (i = 0; i < this.frutas.length; i++){

                this.frutas[i].compras = 0

            }
       
            localStorage.setItem("Frutas", JSON.stringify(this.frutas))

        },

        cancelarCompra: function(){

            let Menupedidos = document.getElementById("pedidos")
            let totalFrutas = document.getElementById("frutasTotales")
            
            let compraRealizada = document.querySelector(".compraRealizada")
            let botonConfirmarCompra = document.querySelector(".botonConfirmarCompra")
            let pedidoRealizado = document.querySelector(".pedidoRealizado")
            let textoCompra = document.querySelector(".textoCompra")
            let botonCancelar = document.querySelector(".cancelarCompra")

            Menupedidos.style.pointerEvents = "all"
            totalFrutas.style.pointerEvents = "all"

            textoCompra.setAttribute("hidden", "true")
            pedidoRealizado.setAttribute("hidden", "true")
            botonConfirmarCompra.setAttribute("hidden", "true")
            botonCancelar.setAttribute("hidden", "true")
            compraRealizada.setAttribute("hidden", "true")
            compraRealizada.style.padding = ""
            compraRealizada.style.outline = ""

        },

        realizarPedido: function(){

            let Menupedidos = document.getElementById("pedidos")
            let totalFrutas = document.getElementById("frutasTotales")

            let pedido = document.querySelector(".textoPedido")
            let compraRealizada = document.querySelector(".compraRealizada")
            let pedidoRealizado = document.querySelector(".pedidoRealizado")
            let textoCompra = document.querySelector(".textoCompra")

            if (pedido.value != ""){

                Menupedidos.style.pointerEvents = "none"
                totalFrutas.style.pointerEvents = "none"

                compraRealizada.removeAttribute("hidden")
    
                textoCompra.textContent = "Tu pedido se ha realizado exitosamente"
            
                textoCompra.removeAttribute("hidden")
                pedidoRealizado.removeAttribute("hidden")
                compraRealizada.style.padding = "50px"
                compraRealizada.style.outline = "5px solid #000"
                compraRealizada.style.width = "550px"

            }else{

                Menupedidos.style.pointerEvents = "none"
                totalFrutas.style.pointerEvents = "none"

                compraRealizada.removeAttribute("hidden")
    
                textoCompra.textContent = "Por favor ingresa el nombre de una fruta"
            
                textoCompra.removeAttribute("hidden")
                pedidoRealizado.removeAttribute("hidden")
                compraRealizada.style.padding = "50px"
                compraRealizada.style.outline = "5px solid #000"
                compraRealizada.style.width = "550px"

            }

        },

        pedidoRealizado: function(){

            let Menupedidos = document.getElementById("pedidos")
            let totalFrutas = document.getElementById("frutasTotales")

            let pedido = document.querySelector(".textoPedido")
            let compraRealizada = document.querySelector(".compraRealizada")
            let pedidoRealizado = document.querySelector(".pedidoRealizado")
            let textoCompra = document.querySelector(".textoCompra")

            Menupedidos.style.pointerEvents = "all"
            totalFrutas.style.pointerEvents = "all"

            textoCompra.setAttribute("hidden", "true")
            pedidoRealizado.setAttribute("hidden", "true")
            compraRealizada.setAttribute("hidden", "true")
            compraRealizada.style.padding = ""
            compraRealizada.style.outline = ""

            this.tusPedidos.push({

                pedido: pedido.value

            })

            localStorage.setItem("Pedidos", JSON.stringify(this.tusPedidos))
            pedido.value = ""

        },

        restablecerPagina: function(){

            localStorage.removeItem("Compras")
            localStorage.removeItem("Frutas")
            localStorage.removeItem("Pedidos")
            location.reload()

        },
        
    },

    computed: {

        recaudoTotal: function(){

            let dineroTotal = 0

            for (compra of this.comprasTotales){
    
                dineroTotal += compra.valor
    
            }

            return dineroTotal

        }

    },

    created: function(){

        let frutasDB = JSON.parse(localStorage.getItem('Frutas'))

        let comprasDB = JSON.parse(localStorage.getItem('Compras'))

        let pedidosDB = JSON.parse(localStorage.getItem('Pedidos'))
        
        if (frutasDB === null || comprasDB === null){

            localStorage.setItem("Frutas", JSON.stringify(this.frutas))
            this.comprasTotales = []

        }
        else{

            this.frutas = frutasDB
            this.comprasTotales = comprasDB

        }

        if (pedidosDB === null) this.tusPedidos = []
        else this.tusPedidos = pedidosDB

    },

})