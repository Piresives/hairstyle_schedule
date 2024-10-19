import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Variavél como a data atual do input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar dia atual
selectedDate.value = inputToday 
// Define data minima como a data atual
selectedDate.min = inputToday 

form.onsubmit = (event) => {
    event.preventDefault()

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim()
        
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        //Recuperando horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            return alert("Selecione a hora!")
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //Inserir a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //Gera um ID
        const id = new Date().getTime()
        console.log({
            id,
            name,
            when,
        })

    } catch (error) {
        alert("Não foi possível realizar o agedamento!")
        console.log(error)
    }
}