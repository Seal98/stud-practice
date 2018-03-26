(function () {
    var photoPosts = [
        {
            id: '1',
            description: 'NARUTO best anime',
            createdAt: new Date('2014-12-12T12:12:12'),
            author: 'Misha',
            photoLink: 'img/naruto.png',
            postVisibility: true,
            hashTags: ["#NARUTOBESTANIME"],
            likes: ["Alex"]
        },

        {
            id: '2',
            description: 'AVATAR best anime',
            createdAt: new Date('2015-12-12T12:12:12'),
            author: 'Misha',
            photoLink: 'img/avatar.png',
            postVisibility: true,
            hashTags: ["#AVATARBESTANIME"],
            likes: ["Egor"]
        }, {
            id: '3',
            description: 'SHAMAN-KING best anime',
            createdAt: new Date('2012-12-12T12:12:12'),
            author: 'Misha2019',
            photoLink: 'img/sham.png',
            postVisibility: true,
            hashTags: ["#SHAMANKINGBESTANIME"],
            likes: ["Pomeedorka"]
        },
        {
            id: '4',
            description: 'NARURO best anime',
            createdAt: new Date('2013-12-12T12:12:12'),
            author: 'Misha20',
            photoLink: 'img/naruto.png',
            postVisibility: true,
            hashTags: ["#NARUTOBESTANIME"],
            likes: ["Jora"]
        },
        {
            id: '5',
            description: 'AVATAR best anime',
            createdAt: new Date('2018-12-12T12:12:12'),
            author: 'Misha',
            photoLink: 'img/avatar.png',
            postVisibility: true,
            hashTags: ["#AVATARBESTANIME"],
            likes: ["Jaga"]
        },
        {
            id: '6',
            description: 'SHAMAN-KING best anime',
            createdAt: new Date('2017-12-12T12:12:12'),
            author: 'Misha22',
            photoLink: 'img/sham.png',
            postVisibility: true,
            hashTags: ["#SHAMANKINGBESTANIME"],
            likes: ["Jaguar"]
        },
        {
            id: '7',
            description: 'NARUTO best anime',
            createdAt: new Date('2016-12-12T12:12:12'),
            author: 'Misha23',
            photoLink: 'img/naruto.png',
            postVisibility: true,
            hashTags: ["#NARUTOBESTANIME"],
            likes: ["Jagorka"]
        },
        {
            id: '8',
            description: 'AVATAR best anime',
            createdAt: new Date('2091-12-12T12:12:12'),
            author: 'Misha',
            photoLink: 'img/avatar.png',
            postVisibility: true,
            hashTags: ["#AVATARBESTANIME"],
            likes: ["Igor"]
        },
        {
            id: '9',
            description: 'SHAMAN-KING best anime',
            createdAt: new Date('2020-12-12T12:12:12'),
            author: 'Misha',
            photoLink: 'img/sham.png',
            postVisibility: true,
            hashTags: ["#SHAMANKINGBESTANIME"],
            likes: ["Egr"]
        },

    ];
    var postForFilter = {
        author: 'Misha',
        hashTags: ["#AVATARBESTANIME"]
    };
    console.log("\n\nСортировка и фильтрация постов. id найденных: \n");
    var sortedArrOfPosts = getPhotoPosts(1, 2, postForFilter);
    for (var i = 0; i < sortedArrOfPosts.length; i++) {
        console.log("id: " + sortedArrOfPosts[i].id);
    }
    var postOfId = getPhotoPost("5");
    console.log("Пост по id:  " + postOfId.createdAt);
    var postForVal = {
        id: '15',
        description: 'NARUTO best anime (one more post)',
        createdAt: new Date('2012-12-12T12:12:12'),
        author: 'Misha2018',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ["#JUSTNARUTO"],
        likes: ["Maladec"]
    };
    console.log("Проверка поста на валидность: " + validatePhotoPost(postForVal));
    var newPost = {
        id: '10',
        description: 'NARUTO best anime (one more post)',
        createdAt: new Date('2012-12-12T12:12:12'),
        author: 'Misha2018',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ["#JUSTNARUTO"],
        likes: ["Maladec"]
    };
    console.log("Добавление нового поста с предварительной проверкой: " + addPhotoPost(newPost));
    var postForEditing = {
        description: 'NARUTO best anime (one more Naruto)',
        createdAt: new Date('2007-12-12T12:12:12')
    }
    console.log("Изменение поста по id: " + editPhotoPost("1", postForEditing));

    for (var i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].postVisibility) {
            console.log("id: " + photoPosts[i].id + "\n");
            console.log("description: " + photoPosts[i].description + "\n");
            console.log("createdAt: " + photoPosts[i].createdAt + "\n");
            console.log("author: " + photoPosts[i].author + "\n");
            console.log("photoLink: " + photoPosts[i].photoLink + "\n");
            console.log("hashTags:\n");
            for (var j = 0; j < photoPosts[i].hashTags.length; j++) {
                console.log("           " + photoPosts[i].hashTags[j] + "\n");
            }
            console.log("likes:\n");
            for (var j = 0; j < photoPosts[i].likes.length; j++) {
                console.log("           " + photoPosts[i].likes[j] + "\n");
            }
            console.log("\n");
        }
    }
    console.log("--------------------------------\n\n");
    console.log("Удаление поста по id: " + removePhotoPost("5"));

    for (var i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].postVisibility) {
            console.log("id: " + photoPosts[i].id + "\n");
            console.log("description: " + photoPosts[i].description + "\n");
            console.log("createdAt: " + photoPosts[i].createdAt + "\n");
            console.log("author: " + photoPosts[i].author + "\n");
            console.log("photoLink: " + photoPosts[i].photoLink + "\n");
            console.log("hashTags:\n");
            for (var j = 0; j < photoPosts[i].hashTags.length; j++) {
                console.log("           " + photoPosts[i].hashTags[j] + "\n");
            }
            console.log("likes:\n");
            for (var j = 0; j < photoPosts[i].likes.length; j++) {
                console.log("           " + photoPosts[i].likes[j] + "\n");
            }
            console.log("\n");
        }
    }

    function getPhotoPosts(postStart, number, filterConfig) {
        if (postStart + number > photoPosts.length || postStart < 0) {
            console.log("Нельзя вывести столько постов. Промежуток вывода не совпадает с количеством постов");
            return null;
        }
        else {
            var sortedArrOfPosts = photoPosts;
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
                            if (hashTagsOfPost === hashTagsOfFilter) {
                                return true;
                            }
                        }
                    }
                });
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
            return true;
        }
    }

    function editPhotoPost(idForEd, postForEd) {
        var postOfId = getPhotoPost(idForEd);
        if (!postOfId) {
            return false;
        }
        var postCopy = JSON.parse(JSON.stringify(postOfId));
        if (postForEd.description != null) {
            postCopy.description = postForEd.description;
        }
        if (postForEd.author != null) {
            postCopy.author = postForEd.author;
        }
        if (postForEd.createdAt != null) {
            postCopy.createdAt = postForEd.createdAt;
        }
        if (postForEd.photoLink != null) {
            postCopy.photoLink = postForEd.photoLink;
        }
        if (postForEd.hashTags != null) {
            postCopy.hashTags = postForEd.hashTags;
        }

        if (validateForEditing(postCopy)) {
            changePostData(postOfId, postCopy);
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
            return true;
        }
    }
}());
