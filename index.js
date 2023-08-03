fetch("data.json")
    .then((response) => response.json())
    .then(data => showData(data));

function showData(data){
    console.table(data.user)
}