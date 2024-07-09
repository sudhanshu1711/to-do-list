
    let heading = document.getElementById('heading');
    let box = document.getElementById('box');
    let lists = document.getElementById('lists');
    let main = document.querySelector('.main');

    box.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            addGoal();
        }
    });

    function addGoal() {
        let goal = box.value.trim(); 
        if (goal !== "") {
            let mission = document.createElement('li');
            mission.textContent = goal;
            lists.appendChild(mission);
            box.value = ""; 
        }
    }

    lists.addEventListener('dblclick', function(e) {
        if (e.target.tagName === 'LI') 
            e.target.remove();
            if(lists.childElementCount==0){
            main.innerHTML='<h1>YAY!<br> ALL WORK DONE';
        }
    });





