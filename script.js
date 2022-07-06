// removes the join button 
function login(element){
    element.remove();
}

function find(element){
    alert("You are searching for " + element.value);
}

var likeCount = [68, 212, 33];
var currentLike = [ 
        document.querySelector("#heart1"),
        document.querySelector("#heart2"),
        document.querySelector("#heart3"),
];
function addLike(id){
    var newLike = likeCount[id]++;
    currentLike[id].innerText = newLike;
} 