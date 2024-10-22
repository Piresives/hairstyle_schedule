import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load"

// Seleciona o unput de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay ({ date })


    // Renderiniza horários disponíveis
    hoursLoad({date})
}