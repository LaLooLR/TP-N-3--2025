  // Obtener elemento <ul>
    const lista = $("lista-tareas");

    
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(tareas => {
        
        const completadas = tareas.filter(t => t.completed === true);

       
        completadas.forEach(tarea => {
          const li = document.createElement("li");
          li.textContent = tarea.title;
          lista.appendChild(li);
        });
      })
      .catch(error => {
        lista.innerHTML = `<li>Error al cargar tareas: ${error.message}</li>`;
      });

          function $(elemento) {
      return document.getElementById(elemento);
    }
