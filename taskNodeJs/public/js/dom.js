var domBlockOfFunc = (function () {

    function createAuthWindow() {
        let windowForAuth = document.createElement('div');
        let authButton = document.getElementById('a-button');
        authButton.style.pointerEvents = 'none';
        authButton.style.cursor = 'default';
        let posts = document.getElementById('anime-header');
        windowForAuth.className = 'auth-window';
        windowForAuth.id = 'auth-window'
        windowForAuth.innerHTML = `<p align='center'>Авторизация</p>
            <p class="login-password-font-style">Логин : &nbsp&nbsp<input type='text' id='login-field'></p>
            <br>
            <p class="login-password-font-style">Пароль : <input type='text' id='password-field'></p>
            <button class='submit-auth-button' onclick='domBlockOfFunc.finishAuth();return false;'>OK</button>
            <button class='cancel-auth-button' onclick='domBlockOfFunc.cancelAuth();return false;'>Отмена</button>`;
        posts.appendChild(windowForAuth);
    }

    function cancelEditing() {
        let edWindow = document.getElementById('ed-window');
        let posts = document.getElementById('anime-header');
        posts.removeChild(edWindow);
    }

    function cancelAdding() {
        let adWindow = document.getElementById('add-window');
        let posts = document.getElementById('anime-header');
        posts.removeChild(adWindow);
    }

    function createEditPostDomWindow(edButtonId) {
        let windowForEditing = document.createElement('div');
        let posts = document.getElementById('anime-header');
        windowForEditing.className = 'ed-window';
        windowForEditing.id = 'ed-window';
        var submitButtonId = edButtonId.replace('e', '');
        submitButtonId = 's' + submitButtonId;
        windowForEditing.innerHTML = `<div class='edit-header'><p class='user-name-edit'>${userName}</p>
        <button class='back-button-edit' onclick='domBlockOfFunc.cancelEditing();return false;'>Вернуться</button></div>
        <div class='edit-main'>
        <p class='font-image-edit'>Путь к изображению: <input type='text' id='image-for-editing' class='input-text-image-edit'></p>
        <p class='user-name-edit'>Описание: </p>
        </div>
        <div class='edit-footer'>
        <input type='text' id='description-for-editing' class='description-edit'>
        <button class='submit-button-edit' id=${submitButtonId} onclick='domBlockOfFunc.finishEditing(this.id);return false;'>OK</button>
        </div>`;

        posts.appendChild(windowForEditing);
    }

    function createAddPostWindow() {
        let windowForEditing = document.createElement('div');
        let posts = document.getElementById('anime-header');
        windowForEditing.className = 'ed-window';
        windowForEditing.id = 'add-window'

        windowForEditing.innerHTML = `<div class='edit-header'><p class='user-name-edit'>${userName}</p>
        <button class='back-button-edit' onclick='domBlockOfFunc.cancelAdding();return false;'>Вернуться</button></div>
        <div class='edit-main'>
        <p class='font-image-edit'>Путь к изображению: <input type='text' id='image-for-adding' class='input-text-image-edit'></p>
        <p class='user-name-edit'>Описание: </p>
        </div>
        <div class='edit-footer'>
        <input type='text' id='description-for-adding' class='description-edit'>
        <button class='submit-button-edit' onclick='domBlockOfFunc.finishAdding();return false;'>OK</button>
        </div>`;

        posts.appendChild(windowForEditing);
    }

    function finishAdding() {
        let descriptionEd = document.getElementById('description-for-adding').value;
        let imageEd = document.getElementById('image-for-adding').value;
        var idOfPost = '' + (photoPosts.length + 1);
        var newPhotoPost = {
            id: idOfPost,
            description: descriptionEd,
            createdAt: new Date(),
            author: userName,
            photoLink: imageEd,
            postVisibility: true,
            hashTags: [''],
            likes: ['']
        };
        mainBlockOfFunc.addPhotoPost(newPhotoPost);
        var addWindow = document.getElementById('add-window');
        let posts = document.getElementById('anime-header');
        posts.removeChild(addWindow);
    }

    function finishEditing(idOfPost) {
        let descriptionEd = document.getElementById('description-for-editing').value;
        let imageEd = document.getElementById('image-for-editing').value;
        var post = {description: descriptionEd, photoLink: imageEd};
        mainBlockOfFunc.editPhotoPost(idOfPost.replace('s', ''), post);
        var edWindow = document.getElementById('ed-window');
        let posts = document.getElementById('anime-header');
        posts.removeChild(edWindow);
    }

    function finishAuth() {
        let authWindow = document.getElementById('auth-window');
        let posts = document.getElementById('anime-header');
        let authBlock = document.getElementById('auth-block');
        let loginValue = document.getElementById('login-field').value;
        posts.removeChild(authWindow);
        posts.removeChild(authBlock);
        let loggedUser = document.createElement('div');
        loggedUser.className = 'logged-user';
        loggedUser.innerHTML = `<div class='user-avatar'></div><div class='user-name'>${loginValue}</div>`;
        posts.appendChild(loggedUser);
        var allPhotoPosts = mainBlockOfFunc.getPhotoPosts(0, photoPosts.length);
        userName = loginValue;
       //addCurrentUserToLocalStorage(userName);
        if(userName){
            let addPostButton = document.getElementById('add-post-button');
            addPostButton.style.visibility = 'visible';
        }
        for (var i = 0; i < photoPosts.length; i++) {
            activateButtons(allPhotoPosts[i].id);
        }

    }

    function activateButtons(idOfPost) {
        if(userName){
            let likeButton = document.getElementById('l' + idOfPost);
            likeButton.style.visibility = 'visible';
        }
        if (document.getElementById(idOfPost) && mainBlockOfFunc.getPhotoPost(idOfPost).author===userName) {
            let deleteButton = document.getElementById('del' + idOfPost);
            let editButton = document.getElementById('e' + idOfPost);

            deleteButton.style.visibility = 'visible';
            editButton.style.visibility = 'visible';
        }
    }

    function cancelAuth() {
        let authWindow = document.getElementById('auth-window');
        let posts = document.getElementById('anime-header');
        posts.removeChild(authWindow);
        let authButton = document.getElementById('a-button');
        authButton.style.pointerEvents = '';
        authButton.style.cursor = '';
    }

    function deletePostDom(idOfButton) {
        var idOfPost = idOfButton.replace('del', '');
        mainBlockOfFunc.removePhotoPost(idOfPost);
        removePostFromLocalStorage(idOfPost);

    }

    function addPhotoPostDom(post) {
        if (post.postVisibility) {
            let cards = document.getElementById('posts');
            let photoPost = document.createElement('div');
            photoPost.className = 'cards-content';
            photoPost.id = post.id;
            photoPost.innerHTML = createDomHTML(post);

            cards.appendChild(photoPost);
            localStorage.setItem(post.id, JSON.stringify(post));
        }
    }

    function addNewPhotoPostDom(post) {
        addPhotoPostDom(post)
        activateButtons(post.id);
    }

    function removePhotoPostDom(idOfPost) {
        let photoPost = document.getElementById(idOfPost);
        let cards = document.getElementById('posts');
        cards.removeChild(photoPost);
    }

    function createDomHTML(post) {

        var idOfDeleteButton = 'del';
        var idOfLikeButton = 'l';
        var idOfEditButton = 'e';
        var imageId = 'im';
        idOfDeleteButton += post.id;
        idOfLikeButton += post.id;
        idOfEditButton += post.id;
        imageId += post.id;
        var dateOfCreation = new Date(post.createdAt);
        return `<div class='post-header'>
            <a href='#' class='delete-button' onclick='domBlockOfFunc.deletePostDom(this.id);return false;' id=${idOfDeleteButton} ><img src='img/cross.png' alt='Delete' title='Delete post' class='del-add-post-image'></a>
            <div class='post-hashtags'>${post.hashTags}</div>
            <a href='#' class='edit-button' onclick='domBlockOfFunc.createEditPostDomWindow(this.id);return false;' id=${idOfEditButton}> <img src='img/brush.png' alt='Edit' title='Edit post' class='del-add-post-image'> </a>
            </div>
            <div class='post-body'>
            <img src=${post.photoLink} class='image-post'>  
            </div>
            <div class='like-and-comment'>
            <div class='comments'>${post.description}</div>
            <div><a href='#' class='like-button' id=${idOfLikeButton} onclick='domBlockOfFunc.likePostDom(this.id);return false;'> <img src='img/like.svg' alt='like' id=${imageId} title='Like post' class='like-post-image'></a></div>
            </div>
            <div class='post-data'>${dateOfCreation.getDate()}.${dateOfCreation.getMonth()}.${dateOfCreation.getFullYear()}</div>
            <div class='post-name'>${post.author}</div>
            </div>`;
    }

    function likePostDom(idOfPost){
        var imageLike = document.getElementById('im'+idOfPost.replace('l',''));
        if(imageLike.src === 'img/like.svg'){
            imageLike.src = 'img/liked.svg';
        }
        else{
            imageLike.src = 'img/like.svg';
        }
    }

    function editPhotoPostDom(idOfPost, editedPost) {
        let photoPost = document.getElementById(idOfPost);
        let cards = document.getElementById('posts');
        photoPost.innerHTML = createDomHTML(editedPost);
        localStorage.setItem(editedPost.id, JSON.stringify(editedPost));
        activateButtons(idOfPost);
    }

    function filterWindow() {
        var filterParam = {createdAt: '', author: '',  hashTags: ['']};
        var checkBoxAuthor = document.getElementById('cb-author').checked;
        if (checkBoxAuthor) {
            var valueOfAuthorFilter = document.getElementById('text-field-filter-author').value;
            filterParam.author = valueOfAuthorFilter;
        }
        var checkBoxDate = document.getElementById('cb-date').checked;
        if (checkBoxDate) {
            var valueOfDateFilter = document.getElementById('text-field-filter-date').value;
            filterParam.createdAt = new Date(valueOfDateFilter);
        }
        var checkBoxHashTags = document.getElementById('cb-hashtag').checked;
        if (checkBoxHashTags) {
            var valueOfHashTagsFilter = document.getElementById('text-field-filter-hashtags').value;
            filterParam.hashTags[0] = valueOfHashTagsFilter;
        }
        var sortedArrOfPosts = mainBlockOfFunc.getPhotoPosts(0,photoPosts.length,filterParam);
        var posts = document.getElementById('posts');
        while(posts.firstChild){
            posts.removeChild(posts.firstChild);
        }
        for(var i=0;i<sortedArrOfPosts.length;i++){
            if(userName){
                addNewPhotoPostDom(sortedArrOfPosts[i]);
            }
            else{
                addPhotoPostDom(sortedArrOfPosts[i]);
            }
        }
    }

    return {
        addPhotoPostDom,
        removePhotoPostDom,
        editPhotoPostDom,
        deletePostDom,
        createAuthWindow,
        finishAuth,
        cancelAuth,
        createEditPostDomWindow,
        cancelEditing,
        finishEditing,
        createAddPostWindow,
        cancelAdding,
        finishAdding,
        addNewPhotoPostDom,
        filterWindow,
        likePostDom
    }
}());
