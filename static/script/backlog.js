$("modalMoveTask").hide();

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev, idTask, is_in_sprint) {
    ev.dataTransfer.setData('Text/html', ev.target.id);
}
  
function drop_on_backlog(ev) {
    ev.preventDefault();
    var id_task_to_move = ev.dataTransfer.getData("text/html");//retrieves dropped images data.
    currentPosition = document.getElementById(id_task_to_move).parentNode.id; // Current sprint or backlog

    if (currentPosition == "backlog") {
        // è già presente in backlog
        console.log('Task già presente in sprint');
        return;
    }
    else {
        console.log('Da spostare');
        //document.getElementById('modalMoveTask').style.display("block");
        var modal = document.getElementById("modalMoveTask");
        document.getElementById("idTaskToMove").value = id_task_to_move;
        document.getElementById("in_sprint").value = 1; // Muovere da sprint a backlog
        //$(".modal-move-task-form #on_sprint").val(1);
        modal.classList.remove('hidden');
    }
}

function drop_on_sprint(ev) {
    ev.preventDefault();
    var id_task_to_move = ev.dataTransfer.getData("text/html");//retrieves dropped images data.
    var currentPosition = document.getElementById(id_task_to_move).parentNode.parentNode.id; // Current sprint or backlog

    if (currentPosition == "currentSprint") {
        // è già presente in sprint
        console.log('Task già presente in sprint');
        return;
    }
    else {
        console.log('Da spostare');
        var modal = document.getElementById("modalMoveTask");
        document.getElementById("idTaskToMove").value = id_task_to_move;
        document.getElementById("in_sprint").value = 0; // Muovere da backlog a sprint
        modal.classList.remove('hidden');
    }
} 

function closeModal() {
    var modal = document.getElementById("modalMoveTask");
    modal.classList.add('hidden');
}