import { hoursLoad } from "../form/hours-load"

// Seleciona o unput de data
const selectedDate = document.getElementById("date")

export function schedulesDay() {
    //Obtém a data do input
    const date = selectedDate.value

    hoursLoad({date})
}