let postsContainer = document.getElementById("posts");
let membersContainer = document.getElementById("members");

/* Sidebar Toggle */
function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("active");
}

/* Create Post */
function createPost(){
    let text = document.getElementById("postText").value;
    if(text.trim()==="") return;

    let post = document.createElement("div");
    post.className="post";

    post.innerHTML=`
        <div class="post-top">
            <div class="post-user">
                <img src="https://api.dicebear.com/7.x/lorelei/svg?seed=User${Math.random()}&backgroundColor=b6e3f4,c0aede,d1d4f9">
                <strong>You</strong>
            </div>
            <i class="fa-solid fa-ellipsis delete-btn" onclick="deletePost(this)"></i>
        </div>
        <p>${text}</p>
        <div class="post-actions">
            <button onclick="likePost(this)">❤️ Like (<span>0</span>)</button>
        </div>
    `;

    postsContainer.prepend(post);
    document.getElementById("postText").value="";
}


function deletePost(icon){
    icon.closest(".post").remove();
}


function likePost(btn){
    let span=btn.querySelector("span");
    span.innerText=parseInt(span.innerText)+1;
}


let names=["Ayesha","Ali","Sara","Ahmed","Zara","Usman","Maya","Bilal","Noor","Hassan","Iqra"];

names.forEach(name=>{
    let member=document.createElement("div");
    member.className="member";
    member.innerHTML=`
        <img src="https://api.dicebear.com/7.x/lorelei/svg?seed=${name}&backgroundColor=b6e3f4,c0aede,d1d4f9">
        <span>${name}</span>
        <button class="add-btn">Add</button>
    `;
    membersContainer.appendChild(member);
});
