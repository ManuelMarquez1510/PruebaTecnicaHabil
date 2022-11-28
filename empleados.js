const form = document.getElementById("formEmpleados");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let formData= new FormData(form);
    let datosJson = saveData(formData);
    datosTabla(datosJson)
    
})
function datosTabla(datosJson){
    let tablaRef= document.getElementById("tabla");
    let newRow = tablaRef.insertRow(-1);

    let newCell = newRow.insertCell(0);
    newCell.textContent = datosJson["nombre"];
    
    newCell = newRow.insertCell(1);
    newCell.textContent = datosJson["apellidoPaterno"];

    newCell = newRow.insertCell(2);
    newCell.textContent = datosJson["apellidoMaterno"];

    newCell = newRow.insertCell(3);
    let data = datosJson["fecha"];
    let dataText = data.toString();
    newCell.textContent = dataText;

    newCell = newRow.insertCell(4);
    newCell.textContent = datosJson["area"];

    let eliminarCell =  newRow.insertCell(5);
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent="Eliminar";
    eliminarCell.appendChild(botonEliminar)
    botonEliminar.addEventListener("click", (event)=>{
      event.target.parentNode.parentNode.remove()
    })
}
 function saveData(formData){

    let nombre= formData.get("nombre");
    let apellidoMaterno= formData.get("apellidoMaterno");
    let apellidoPaterno= formData.get("apellidoPaterno");
    let fecha = formData.get("fecha");
    let fechaText = fecha.toString();
    let area = formData.get("area");
    return{
        "nombre": nombre,
        "apellidoMaterno": apellidoMaterno,
        "apellidoPaterno": apellidoPaterno,
        "fecha": fechaText,
        "area": area
    }
 }

