axios
    .get("https://my-json-server.typicode.com/LinaCart/M3U2TrelloAppLinaCartagena/tasks")
    .then(function (response){
        console.log(response.data)
    })
    .catch(function(error){
        console.error(error)
    })