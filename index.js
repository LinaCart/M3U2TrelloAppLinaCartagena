let url = "https://my-json-server.typicode.com/LinaCart/M3U2TrelloAppLinaCartagena/tasks"

axios
    .get(url)
    .then(function (response) {
        response.data.forEach(task => {
            newTask(task)
        });
    })
    .catch(function (error) {
        console.error(error)
    })

function newTask (task){
    let h5 = document.createElement("h5")
    h5.classList.add("card-title");
    h5.innerText = task.title + " (" + task.owner + ")";

    let p = document.createElement("p")
    p.classList.add("card-text");
    p.innerText = task.details;

    let date = document.createElement("div")
    date.classList.add("card-footer");
    date.classList.add("text-muted");
    date.innerText = moment(task.created).fromNow();

    let a = document.createElement("a")
    a.classList.add("btn");
    a.classList.add("text-white");
    a.classList.add("bg-success");
    a.classList.add("bg-opacity-50");
    a.classList.add("mb-3");
    a.innerText = "Ver";

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body");
    cardBody.appendChild(h5)
    cardBody.appendChild(p)
    cardBody.appendChild(a)
    cardBody.appendChild(date)


    let card = document.createElement("div")
    card.classList.add("card");
    card.appendChild(cardBody)

    let colum = document.createElement("div")
    colum.classList.add("col-sm-12");
    colum.classList.add("mb-3");
    colum.appendChild(card)

    let row = document.createElement("article")
    row.classList.add("row");
    row.appendChild(colum)

    let columnToDo = document.querySelector("#todo-container");
    let columnInProgress = document.querySelector("#in-progres-container");
    let columnDone = document.querySelector("#done-container");

    if (task.state == "todo") {
        columnToDo.appendChild(row);
    }

    if (task.state == "inProgres") {
        columnInProgress.appendChild(row);
    }

    if (task.state == "done") {
        columnDone.appendChild(row);
    }
}

const sor = new Sortable.default(
    document.querySelectorAll('.container-tasks'),
    { draggable: 'article' }
);

let save = document.getElementById('save')
save.addEventListener('click', function () {

    let title = document.getElementById('title')
    let owner = document.getElementById('owner')
    let details = document.getElementById('details')
    let endDay = document.getElementById('endDay')

    let task = {
        id: Math.floor(Math.random() * 1000),
        title: title.value,
        owner: owner.value,
        details: details.value,
        endDay: endDay.value,
        state: 'todo',
        create: new Date()
    }
    axios
        .post(url, task)
        .then(function (response) {
            newTask(response.data)
        })
        .catch(function () {
            console.error(error)
        })
})