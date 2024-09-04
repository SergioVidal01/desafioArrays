//Datos entregados en excel
const radiologia = [
{ hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
{ hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
{ hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
{ hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
{ hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" }
];

const traumatologia = [
{ hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
{ hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
{ hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
{ hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
{ hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
{ hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
{ hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" }
];


const dental = [
{ hora: "08:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
{ hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
{ hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
{ hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
{ hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
{ hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE" }
];
//agregamos las horas al array
traumatologia.push(
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
  );
radiologia.shift(); // Elimina el primer elemento
radiologia.pop();   // Elimina el último elemento

// Mostrar la primera y ultima atención, (length - 1 porque el indexado empieza en 0, pero length cuenta todos los elementos dentro.)

document.write(`<p>Radiología - Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}  Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>`);

document.write(`<p>Traumatología - Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}  Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>`);

document.write(`<p>Dental - Primera atención: ${dental[0].paciente} - ${dental[0].prevision}  Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>`);


function generarTablaHTML(lista) {
let tablaHTML = '<table>';

tablaHTML += '<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';
for (let i = 0; i < lista.length; i++) {
tablaHTML += `<tr>
                <td>${lista[i].hora}</td>
                <td>${lista[i].especialista}</td>
                <td>${lista[i].paciente}</td>
                <td>${lista[i].rut}</td>
                <td>${lista[i].prevision}</td>
    </tr>`;
    }
    tablaHTML += '</table>';
    return tablaHTML;
}

// Insertar cada tabla en el contenedor correspondiente
document.getElementById('tabla-radiologia').innerHTML = '<h2>Consultas de Radiología</h2>' + generarTablaHTML(radiologia);
document.getElementById('tabla-traumatologia').innerHTML = '<h2>Consultas de Traumatología</h2>' + generarTablaHTML(traumatologia);
document.getElementById('tabla-dental').innerHTML = '<h2>Consultas de Dental</h2>' + generarTablaHTML(dental);

const todasLasCitas = radiologia.concat(traumatologia).concat(dental);

// Extrae los nombres de los pacientes
const todosLosPacientes = todasLasCitas.map(cita => cita.paciente);

console.log("Listado de todos los pacientes atendidos:");
todosLosPacientes.forEach(paciente => console.log(paciente));
let tablaHTML = "<table border='1'><tr><th>Paciente</th></tr>";

todasLasCitas.forEach(cita => {
    tablaHTML += `<tr>
        <td>${cita.paciente}</td>
    </tr>`;
});

tablaHTML += "</table>";

// Muestra la tabla en la página
document.write(tablaHTML);

const pacientesISAPRE = todasLasCitas.filter(cita => cita.prevision === "ISAPRE");
const pacientesFONASA = todasLasCitas.filter(cita => cita.prevision === "FONASA");

// Función para generar la tabla
function generarTabla(pacientes, titulo) {
    let tablaHTML = `<h3>${titulo}</h3>`;
    tablaHTML += "<table border='1'><tr><th>Paciente</th><th>Previsión</th></tr>";

    pacientes.forEach(cita => {
        tablaHTML += `<tr>
            <td>${cita.paciente}</td>
            <td>${cita.prevision}</td>
        </tr>`;
    });

    tablaHTML += "</table>";
    return tablaHTML;
}

// Genera las tablas para ISAPRE y FONASA
const tablaISAPRE = generarTabla(pacientesISAPRE, "Pacientes con ISAPRE");
const tablaFONASA = generarTabla(pacientesFONASA, "Pacientes con FONASA");

// Muestra las tablas en la página
document.write(tablaISAPRE);
document.write(tablaFONASA);