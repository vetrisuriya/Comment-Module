let likesUpParent = document.getElementsByClassName("comment-likes-up");
let likesDownParent = document.getElementsByClassName("comment-likes-down");

let likesEl = [];
for(let i = 0; i<likesUpParent.length; i++) {
    let likesUp = likesUpParent[i].getElementsByTagName("img")[0];
    let likesDown = likesDownParent[i].getElementsByTagName("img")[0];

    likesEl.push(likesUp, likesDown);
}

likesEl.forEach(el => {
    el.addEventListener("click", function() {
        let likesClosestCountEl = this.parentElement.getElementsByTagName("span")[0];
        let likesCount = likesClosestCountEl.innerText;

        if(likesCount.trim().length === 0) {
            let likesCount = 0;
        }

        likesClosestCountEl.innerText = +likesCount + +1;

    })
})