// Array para almacenar los nombres
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar nombre al array
    actualizarListaAmigos(); // Actualizar la lista en pantalla
    input.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista de nombres en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de renderizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agrega al menos un nombre.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[randomIndex];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}
