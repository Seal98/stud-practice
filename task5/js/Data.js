var basicPosts = [
    {
        id: '1',
        description: 'NARUTO best anime',
        createdAt: new Date('2014-12-12'),
        author: 'Misha',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ['#NARUTOBESTANIME'],
        likes: ['Alex']
    },

    {
        id: '2',
        description: 'AVATAR best anime',
        createdAt: new Date('2015-12-12'),
        author: 'Misha',
        photoLink: 'img/avatar.png',
        postVisibility: true,
        hashTags: ['#AVATARBESTANIME'],
        likes: ['Egor']
    }, {
        id: '3',
        description: 'SHAMAN-KING best anime',
        createdAt: new Date('2012-12-12'),
        author: 'Misha2019',
        photoLink: 'img/sham.png',
        postVisibility: true,
        hashTags: ['#SHAMANKINGBESTANIME'],
        likes: ['Pomeedorka']
    },
    {
        id: '4',
        description: 'NARURO best anime',
        createdAt: new Date('2013-12-12'),
        author: 'Misha20',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ['#NARUTOBESTANIME'],
        likes: ['Jora']
    },
    {
        id: '5',
        description: 'AVATAR best anime',
        createdAt: new Date('2018-12-12'),
        author: 'Misha',
        photoLink: 'img/avatar.png',
        postVisibility: true,
        hashTags: ['#AVATARBESTANIME'],
        likes: ['Jaga']
    },
    {
        id: '6',
        description: 'SHAMAN-KING best anime',
        createdAt: new Date('2017-12-12'),
        author: 'Misha22',
        photoLink: 'img/sham.png',
        postVisibility: true,
        hashTags: ['#SHAMANKINGBESTANIME'],
        likes: ['Jaguar']
    },
    {
        id: '7',
        description: 'NARUTO best anime',
        createdAt: new Date('2016-12-12'),
        author: 'Misha23',
        photoLink: 'img/naruto.png',
        postVisibility: true,
        hashTags: ['#NARUTOBESTANIME'],
        likes: ['Jagorka']
    },
    {
        id: '8',
        description: 'AVATAR best anime',
        createdAt: new Date('2091-12-12'),
        author: 'Misha',
        photoLink: 'img/avatar.png',
        postVisibility: true,
        hashTags: ['#AVATARBESTANIME'],
        likes: ['Igor']
    },
    {
        id: '9',
        description: 'SHAMAN-KING best anime',
        createdAt: new Date('2020-12-12'),
        author: 'Misha',
        photoLink: 'img/sham.png',
        postVisibility: true,
        hashTags: ['#SHAMANKINGBESTANIME'],
        likes: ['Egr']
    },
];

for (var i = 0; i < basicPosts.length; i++) {
    addPostToLocalStorage(basicPosts[i]);
}

function addPostToLocalStorage(post) {
    localStorage.setItem(post.id, JSON.stringify(post));
}

function getPostFromLocalStorage(keyOfPost){
    return localStorage.getItem(keyOfPost);
}

function removePostFromLocalStorage(keyOfPost){
    localStorage.removeItem(keyOfPost);
}
