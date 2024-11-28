// Selecteurs d'ID des éléments HTML
let tdWarning = document.getElementById("todoWarning");
let tdInput = document.getElementById("todoInput");
let tdAdd = document.getElementById("todoAdd");
let tdContainer = document.getElementById("todoContainer");
let tdDelete = document.getElementById("todoDelete");

// Déclaration variable tdConfirm
let tdConfirm;

// Écouteur d'évenement sur le bouton Ajouter
tdAdd.addEventListener("click", function() {
    // la valeur dans le champs de saisie est enregistrer dans la variable input
    let input = tdInput.value;
    
    // Si moins d'un caractère est saisie dans le champs, un message en haut apparait pour demader l'insertion d'un tâche
    if (input.length < 1) {
        tdWarning.innerHTML = "<h5>Veuillez insérer une nouvelle tâche!!!</h5>";
        tdWarning.classList.add("bg-danger")

    // Sinon, l'innerHTML pour l'avertissement devient vide et le code créer une section ainsi qu'un article et un bouton pour effacer dédié aux tâches créées
    } else {
        tdWarning.innerHTML = "";

        // Création d'une section avec pour class taskContainer
        let taskContainer = document.createElement("section");
        taskContainer.classList.add("taskContainer");
        
        // Création d'un article pour la tâche saisis
        let createTask = document.createElement("article");
        createTask.innerText = input;
        
        // Création du bouton Effacer
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Effacer";
        deleteButton.classList.add("btn")
        deleteButton.classList.add("btn-danger")

        // Insertion de la tâche et son bouton pour effacer
        taskContainer.appendChild(createTask);
        taskContainer.appendChild(deleteButton);

        // Insertion de taskContainer dans le tdContainer
        tdContainer.appendChild(taskContainer);
        
        // La champs de saisie devient vide pour l'aise d'utilisation
        tdInput.value = "";

        // Écoute d'évenement pour le bouton Effacer créer pour chaque tâche, permettant de supprimer individuellement chaque tâche.
        deleteButton.addEventListener("click", function() {
            tdConfirm = confirm("Voulez-vous vraiment effacer cette tâche?");
            if (tdConfirm) {
                tdContainer.removeChild(taskContainer);
            }
        });
    }
});

// Écoute d'évenement pour le bouton permettant d'effacer toutes les tâches en même temps avec avertissement.
tdDelete.addEventListener("click", function() {
    tdConfirm = confirm("Voulez-vous vraiment effacer toutes les tâches?");
    if (tdConfirm) {
        tdContainer.innerHTML = "";
    }
});