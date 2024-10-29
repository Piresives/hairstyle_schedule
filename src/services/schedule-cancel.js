import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
        try {
            await fetch (`${apiConfig.baseURL}/schedules/${ id }`, {
                method: "DELETE",
            })

            alert("Agendamento deletado com sucesso!")
        } catch (error) {
            console.log(error)
            alert("Não é possível cancelar agendamento.")
        }
}