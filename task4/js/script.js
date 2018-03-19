    (function() {
var photoPosts = [
    {
        id: '1',
        description: 'NARUTO best anime',
        createdAt: new Date('2012-12-12T12:12:12'),
        author: 'Misha2018',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ["#NARUTOBESTANIME"],
        likes: ["Alex"]
    },

    {
        id: '2',
        description: 'AVATAR best anime',
        createdAt: new Date('2013-12-12T12:12:12'),
        author: 'Misha2019',
        photoLink: 'img/avatar.png',
        postVisibility: true,
        hashTags: ["#AVATARBESTANIME"],
        likes: ["Egor"]
    },        {
        id: '3',
        description: 'SHAMAN-KING best anime',
        createdAt: new Date('2014-12-12T12:12:12'),
        author: 'Misha2019',
        photoLink: 'img/sham.png',
        postVisibility: true,
        hashTags: ["#SHAMANKINGBESTANIME"],
        likes: ["Pomeedorka"]
    },
    {
        id: '4',
        description: 'NARURO best anime',
        createdAt: new Date('2015-12-12T12:12:12'),
        author: 'Misha20',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ["#NARUTOBESTANIME"],
        likes: ["Jora"]
    },
    {
        id: '5',
        description: 'AVATAR best anime',
        createdAt: new Date('2016-12-12T12:12:12'),
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
        createdAt: new Date('2018-12-12T12:12:12'),
        author: 'Misha23',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ["#NARUTOBESTANIME"],
        likes: ["Jagorka"]
    },
    {
        id: '8',
        description: 'AVATAR best anime',
        createdAt: new Date('2019-12-12T12:12:12'),
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



    var sortedArrOfPosts = getPhotoPosts(0, 9, "Misha");
    var postOfId = getPhotoPost(5);
    console.log("Пост по id:  "+postOfId.createdAt);
    console.log("Проверка этого поста на валидность: "+validatePhotoPost(postOfId));
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
    console.log("Добавление нового поста с предварительной проверкой: "+addPhotoPost(newPost));
    var postForEditing = {
        description: 'NARUTO. Just Naruto',
        createdAt: new Date('2007-12-12T12:12:12')
    }
    console.log("Изменение поста по id: " + editPhotoPost("1",postForEditing));

    for(var i=0;i<photoPosts.length;i++){
        console.log("id: "+photoPosts[i].id+"\n");
        console.log("description: "+photoPosts[i].description+"\n");
        console.log("createdAt: "+photoPosts[i].createdAt+"\n");
        console.log("author: "+photoPosts[i].author+"\n");
        console.log("photoLink: "+photoPosts[i].photoLink+"\n");
        console.log("hashTags:\n");
        for(var j=0;j<photoPosts[i].hashTags.length;j++){
            console.log("           "+photoPosts[i].hashTags[j]+"\n");
        }
        console.log("likes:\n");
        for(var j=0;j<photoPosts[i].likes.length;j++){
            console.log("           "+photoPosts[i].likes[j]+"\n");
        }
        console.log("\n");
    }
    console.log("--------------------------------\n\n");
    console.log("Удаление поста по id: " + removePhotoPost("5"));


    function getPhotoPosts(postStart, number, filterConfig){
    if(postStart+number > photoPosts.length || postStart<0){
        console.log("Нельзя вывести столько постов. Промежуток вывода не совпадает с количеством постов");
    }
    else{
        var sortedArrOfPosts = [];
        var count=0;
        for(var i=postStart; i<postStart+number;i++){
            if(filterConfig == null){
                sortedArrOfPosts[count] = photoPosts[i];
                count++;
            }
            else if(filterConfig == photoPosts[i].author){
                sortedArrOfPosts[count] = photoPosts[i];
                count++;
            }
        }
        if(count == 0) return sortedArrOfPosts;
        else{
            var cont;
            for(var i=0;i<count-1;i++){
                for(var j=i+1;j<count;j++){
                    if(sortedArrOfPosts[i].createdAt > sortedArrOfPosts[j].createdAt){
                        cont = sortedArrOfPosts[i];
                        sortedArrOfPosts[i]=sortedArrOfPosts[j];
                        sortedArrOfPosts[j]=cont;
                    }
                }
            }
        }
        return sortedArrOfPosts;
    }
    }

    function getPhotoPost(idOfPost){
        for(var i=0;i<photoPosts.length;i++){
            if(photoPosts[i].id == idOfPost) return photoPosts[i];
        }
        return "Пост не найден";
    }

    function validatePhotoPost(postForCheck){
        if(postForCheck.id == null) {
            console.log("Пустое поле id");
            return false;}

        for(var i=0;i < photoPosts.length;i++){
            if(postForCheck.id == photoPosts[i].id){
                console.log("id не уникальный");
                return false;
            }
        }
        if(postForCheck.description == null || postForCheck.description.length>200) {
            console.log("Неверный description");
            return false;
        }
        if(postForCheck.author == null || postForCheck.author == "") {
            console.log("Поле author пустое");
            return false;
        }
        if(postForCheck.createdAt == null || (new Date(postForCheck.createdAt) == 'Invalid Date')) {
            console.log("Поле даты создания не введено, либо имеет неправильную структуру");
            return false;
        }
        if(postForCheck.photoLink == null || postForCheck == "") {
            console.log("Поле photoLink пустое");
            return false;
        }
        return true;
    }

    function addPhotoPost(newPost){
        if(validatePhotoPost(newPost) == false) return false;
        else{
            photoPosts[photoPosts.length] = newPost;
            return true;
        }
    }

    function editPhotoPost(idForEd, postForEd){
        for(var i=0; i<photoPosts.length;i++){
            if(idForEd == photoPosts[i].id){
                if(postForEd.description != null && postForEd.description.length<200) {
                    photoPosts[i].description = postForEd.description;
                    console.log("Поле description изменено");
                }
                if(postForEd.author != null) {
                    photoPosts[i].author = postForEd.author;
                    console.log("Поле author изменено");
                }
                if(postForEd.createdAt != null && (new Date(postForEd.createdAt) != 'Invalid Date')) {
                        photoPosts[i].createdAt = postForEd.createdAt;
                    console.log("Поле даты создания изменено");
                }
                if(postForEd.photoLink != null) {
                    photoPosts[i].photoLink = postForEd.photoLink;
                    console.log("Поле photoLink изменено");
                }
                if(postForEd.hashTags != null) {
                    photoPosts[i].hashTags = postForEd.hashTags;
                    console.log("Поле hashTags изменено");
                }
                return true;
            }
        }
        console.log("Пост с таким id не найден");
        return false;
    }

    function removePhotoPost(idForRem){
        for(var i=0;i<photoPosts.length;i++){
            if(photoPosts[i].id == idForRem){
                //photoPosts.splice(i, 1);
                photoPosts[i].postVisibility = false;
                return true;
            }
        }
        console.log("Пост для удаления не найден");
        return false;
    }
  }());
