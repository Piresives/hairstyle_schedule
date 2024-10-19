import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    //Limpa lista de horários
    hours.innerHTML = ""

    const opening = openingHours.map((hour) => {
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na date e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        // console.log(scheduleHour, isHourPast)

        return{
            hour,
            available: isHourPast
        }
    })
    // console.log(opening)

    //Renderizar os horários
    opening.forEach(({ hour, available}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-unavailable" : "hour-available")

        li.textContent = hour
        
        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }


        hours.append(li)
    })

    //Evento de clicks em horários disponíveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}