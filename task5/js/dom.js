var domBlockOfFunc = (function () {

    function addPhotoPostDom(post) {
        if(post.postVisibility) {
            let cards = document.getElementById("posts");
            let photoPost = document.createElement("div");
            photoPost.className = "cards-content";
            photoPost.id = post.id;
            photoPost.innerHTML = createDomHTML(post);

            cards.appendChild(photoPost);
        }
    }

    function removePhotoPostDom(idOfPost) {
        let photoPost = document.getElementById(idOfPost);
        let cards = document.getElementById("posts");
        cards.removeChild(photoPost);
    }

    function createDomHTML(post) {
        return `<div class="post-header">
            <a href="#" class="delete-button"><img src="img/cross.png" alt="Delete" title="Delete post" class="del-add-post-image"></a>
            <div class="post-hashtags">${post.hashTags}</div>
            <a href="#" class="edit-button"> <img src="img/brush.png" alt="Edit" title="Edit post" class="del-add-post-image"> </a>
            </div>
            <div class="post-body">
            <img src=${post.photoLink} class="image-post">
            </div>
            <div class="like-and-comment">
            <div class="comments">${post.description}</div>
            <div><a href="#" class="like-button"> <img src="img/like.svg" alt="like" title="Like post" class="like-post-image"></a></div>
            </div>
            <div class="post-data">${post.createdAt.getDate()}.${post.createdAt.getMonth()}.${post.createdAt.getFullYear()}</div>
            <div class="post-name">${post.author}</div>
            </div>`;
    }

    function editPhotoPostDom(idOfPost, editedPost) {
        let photoPost = document.getElementById(idOfPost);
        let cards = document.getElementById("posts");
        photoPost.innerHTML = createDomHTML(editedPost);
    }
    return{
        addPhotoPostDom,
        removePhotoPostDom,
        editPhotoPostDom
    }
}());
