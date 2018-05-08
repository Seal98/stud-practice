var photoPosts = [];
var userName;
var mainBlockOfFunc = (function () {
getAllPostFromLocalStorage();
    function getAllPostFromLocalStorage(){
        var values = [];
        var keys = Object.keys(localStorage);
        var i = keys.length;
        var counter = i;
        while (counter>0) {
            photoPosts[i-counter] = JSON.parse(localStorage.getItem(keys[i-counter]));
            counter--;
        }
        for(var k=0;k<photoPosts.length;k++){
            domBlockOfFunc.addPhotoPostDom(photoPosts[k]);
        }
    }

    function getPhotoPosts(postStart, number, filterConfig) {
        if (postStart + number > photoPosts.length || postStart < 0) {
            console.log("Нельзя вывести столько постов. Промежуток вывода не совпадает с количеством постов");
            return null;
        }
        else {
            var sortedArrOfPosts = photoPosts;
            if(typeof filterConfig !== 'undefined'){
                if (filterConfig.author) {
                    sortedArrOfPosts = sortedArrOfPosts.filter(function (post) {
                        return post.author === filterConfig.author;
                    });
                }
                if (filterConfig.createdAt) {
                    sortedArrOfPosts = sortedArrOfPosts.filter(function (post) {
                        return post.createdAt === filterConfig.createdAt;
                    });
                }
                if (filterConfig.hashTags) {
                    sortedArrOfPosts = sortedArrOfPosts.filter(function (post) {
                        for (let hashTagsOfPost of post.hashTags) {
                            for (let hashTagsOfFilter of [].concat(filterConfig.hashTags)) {
                                if (hashTagsOfPost.search(hashTagsOfFilter) !== -1) {
                                    return true;
                                }
                            }
                        }
                    });
                }
            }
            sortedArrOfPosts = sortedArrOfPosts.sort(dateComparator).slice(postStart, number + postStart);

            return sortedArrOfPosts;
        }
    }

    function dateComparator(post1, post2) {
        return post1.createdAt - post2.createdAt;
    }

    function getPhotoPost(idOfPost) {
        return photoPosts.find(function findPost(post) {
            return post.id === idOfPost;
        });
    }

    function validatePhotoPost(postForCheck) {
        if (typeof postForCheck.id !== "string" || postForCheck.id === "") {
            console.log("Пустое поле id");
            return false;
        }

        if (photoPosts.some(function checkUniqueness(post) {
                return postForCheck.id === post.id;
            })) {
            console.log("id не уникальный");
            return false;
        }

        if (typeof postForCheck.description !== "string" || postForCheck.description.length > 200 || postForCheck.description === "") {
            console.log("Неверный description");
            return false;
        }
        if (typeof postForCheck.author !== "string" || postForCheck.author === "") {
            console.log("Поле author пустое");
            return false;
        }
        if (!(postForCheck.createdAt instanceof Date) || ((postForCheck.createdAt).toString() === 'Invalid Date')) {
            console.log("Поле даты создания не введено, либо имеет неправильную структуру");
            return false;
        }
        if (typeof postForCheck.photoLink !== "string" || postForCheck.photoLink === "") {
            console.log("Поле photoLink пустое");
            return false;
        }
        if (!(postForCheck.hashTags instanceof Array)) {
            console.log("Структура поля hashTags не верна");
            return false;
        }
        return true;
    }

    function validateForEditing(postForCheck) {
        if (typeof postForCheck.description !== "string" || postForCheck.description.length > 200 || postForCheck.description === "") {
            console.log("Неверный description");

            return false;
        }
        if (typeof postForCheck.author !== "string" || postForCheck.author === "") {
            console.log("Поле author пустое");
            return false;
        }
        if (!(postForCheck.createdAt instanceof Date) || ((postForCheck.createdAt).toString() === 'Invalid Date')) {
            console.log("Поле даты создания не введено, либо имеет неправильную структуру");
            return false;
        }
        if (typeof postForCheck.photoLink !== "string" || postForCheck.photoLink === "") {
            console.log("Поле photoLink пустое");
            return false;
        }
        if (!(postForCheck.hashTags instanceof Array)) {
            console.log("Структура поля hashTags не верна");
            return false;
        }
        return true;
    }

    function addPhotoPost(newPost) {
        if (!validatePhotoPost(newPost)) {
            return false;
        }
        else {
            photoPosts.push(newPost);
            domBlockOfFunc.addNewPhotoPostDom(newPost);
            return true;
        }
    }

    function editPhotoPost(idForEd, postForEd) {
        var postOfId = getPhotoPost(idForEd);
        if (!postOfId) {
            return false;
        }
        var postCopy = JSON.parse(JSON.stringify(postOfId));
        postCopy.createdAt = postOfId.createdAt;
        if (postForEd.description) {
            postCopy.description = postForEd.description;
        }
        if (postForEd.author) {
            postCopy.author = postForEd.author;
        }
        if (postForEd.createdAt) {
            postCopy.createdAt = postForEd.createdAt;
        }
        if (postForEd.photoLink) {
            postCopy.photoLink = postForEd.photoLink;
        }
        if (postForEd.hashTags) {
            postCopy.hashTags = postForEd.hashTags;
        }
        if (validateForEditing(postCopy)) {
            changePostData(postOfId, postCopy);
            domBlockOfFunc.editPhotoPostDom(idForEd, postCopy);
            return true;
        }
        return false;
    }

    function changePostData(post1, post2) {
        post1.description = post2.description;

        post1.author = post2.author;

        post1.createdAt = post2.createdAt;

        post1.photoLink = post2.photoLink;

        post1.hashTags = post2.hashTags;
    }

    function removePhotoPost(idForRem) {
        var postOfId = getPhotoPost(idForRem);
        if (postOfId == null) {
            console.log("Пост для удаления не найден");
            return false;
        }
        else {
            postOfId.postVisibility = false;
            domBlockOfFunc.removePhotoPostDom(idForRem);
            return true;
        }
    }

    return {
        addPhotoPost,
        removePhotoPost,
        getPhotoPosts,
        editPhotoPost,
        getPhotoPost
    }
}());

