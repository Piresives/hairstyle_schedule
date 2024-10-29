import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")
// Gerar evento de clickpara cada lista
periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //obtém a li pai do elemento clicado.
            const item = event.target.closest("li")

            // Pega o id do agendamento para remover
            const { id } = item.dataset

            // Confirma que o id foi selecionado
            if(id){
                // Confirma se o úsuario quer cancelar
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                )
                if(isConfirm) {
                    // Faz a requisição na API para cancelar
                    await scheduleCancel ({ id })

                    // Recarrega a lista com os agendametos
                    schedulesDay()
                }
            }
        }
    })
})

