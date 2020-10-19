const moviesMock = [
    {
        id: '43290aec-37ff-4c55-bcc6-50d7c7a0a65c',
        title: 'Rebirth of Mothra',
        year: 1993,
        cover: 'http://dummyimage.com/183x121.jpg/dddddd/000000',
        description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        duration: 1993,
        contentRating: 'PG-13',
        source: 'https://freewebs.com/vestibulum/ante.xml',
        tags: [
            'Documentary',
            'Comedy|Drama|Romance',
            'Drama|Romance',
            'Comedy|Romance',
            'Drama|Romance',
        ],
    },
    {
        id: 'c5b32139-0f53-45ac-8ff4-bfdfd1ad1a9f',
        title: 'Never Make It Home',
        year: 1998,
        cover: 'http://dummyimage.com/237x137.png/cc0000/ffffff',
        description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        duration: 2022,
        contentRating: 'NC-17',
        source: 'https://angelfire.com/nulla/pede/ullamcorper/augue/a.json',
        tags: ['Horror|Sci-Fi|Thriller', 'Drama', 'Drama', 'Comedy'],
    },
    {
        id: 'f26e907b-3787-4702-907a-daf3ab383e63',
        title:
            "I'm Gonna Explode (a.k.a. I'm Going to Explode) (Voy a explotar)",
        year: 2008,
        cover: 'http://dummyimage.com/168x232.png/dddddd/000000',
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        duration: 1926,
        contentRating: 'R',
        source: 'http://marketwatch.com/donec.xml',
        tags: ['Action|Adventure|Sci-Fi|Thriller'],
    },
    {
        id: 'efba4502-df3f-4420-b05c-2315b7e31ab0',
        title: 'Three Brothers (Tre fratelli)',
        year: 2013,
        cover: 'http://dummyimage.com/109x131.jpg/5fa2dd/ffffff',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        duration: 1930,
        contentRating: 'PG',
        source: 'https://linkedin.com/ut/ultrices/vel/augue.jsp',
        tags: ['Crime|Drama', 'Drama'],
    },
    {
        id: 'f376735d-11fa-488c-b8ca-452b24bae62b',
        title: 'Toy Story That Time Forgot',
        year: 2007,
        cover: 'http://dummyimage.com/241x109.bmp/5fa2dd/ffffff',
        description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        duration: 1988,
        contentRating: 'PG-13',
        source: 'http://behance.net/lorem.xml',
        tags: ['Action|Thriller', 'Drama|Romance', 'Drama'],
    },
    {
        id: 'b2a92c3a-591e-408c-986a-23a5cf69de5a',
        title: 'Howl',
        year: 1997,
        cover: 'http://dummyimage.com/182x171.bmp/5fa2dd/ffffff',
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        duration: 2065,
        contentRating: 'G',
        source: 'http://nytimes.com/nulla/pede/ullamcorper/augue.xml',
        tags: [
            'Drama',
            'Comedy|Drama',
            'Crime|Drama|Mystery',
            'Animation|Comedy',
            'Drama|Western',
        ],
    },
    {
        id: '6ead07f0-922a-4c01-b697-4483ab7c37c9',
        title: 'American Pop',
        year: 1995,
        cover: 'http://dummyimage.com/109x157.bmp/5fa2dd/ffffff',
        description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        duration: 1914,
        contentRating: 'PG',
        source: 'http://nytimes.com/id/mauris/vulputate/elementum/nullam.jpg',
        tags: [
            'Comedy|Drama',
            'Action|Crime|Mystery|Thriller',
            'Action|Sci-Fi',
            'Romance|Thriller',
            'Comedy',
        ],
    },
    {
        id: '31dac42a-9cc4-4a4e-96da-588cf7a7463d',
        title: 'At Play in the Fields of the Lord',
        year: 1995,
        cover: 'http://dummyimage.com/242x206.jpg/5fa2dd/ffffff',
        description:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        duration: 1967,
        contentRating: 'G',
        source: 'https://yellowbook.com/nullam/orci/pede/venenatis.jpg',
        tags: [
            'Comedy|Drama|Romance',
            'Drama',
            'Action|Sci-Fi',
            'Comedy|Drama|Romance',
            '(no genres listed)',
        ],
    },
    {
        id: '00f243eb-697f-4f19-aa53-5ffc4a1fc7a3',
        title: 'Last Polka, The',
        year: 2007,
        cover: 'http://dummyimage.com/234x184.bmp/ff4444/ffffff',
        description:
            'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        duration: 2020,
        contentRating: 'NC-17',
        source:
            'https://wikispaces.com/vulputate/nonummy/maecenas/tincidunt/lacus/at.jsp',
        tags: [
            'Drama',
            'Documentary',
            'Action|Adventure|Animation|Fantasy',
            'Action|Drama',
            'Documentary',
        ],
    },
    {
        id: '48753c57-56ea-4f36-b121-5e7630f388b2',
        title: 'Pop Redemption',
        year: 1994,
        cover: 'http://dummyimage.com/226x221.jpg/5fa2dd/ffffff',
        description:
            'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        duration: 1930,
        contentRating: 'PG-13',
        source:
            'https://instagram.com/tempus/sit/amet/sem/fusce/consequat/nulla.xml',
        tags: ['Horror|Western', 'Comedy|Romance'],
    },
    {
        id: '0e220ba1-9c29-4764-89e1-90608d1c1e33',
        title: 'Earth Dies Screaming, The',
        year: 1995,
        cover: 'http://dummyimage.com/136x157.jpg/ff4444/ffffff',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        duration: 2021,
        contentRating: 'PG-13',
        source: 'http://dropbox.com/praesent.html',
        tags: ['Drama'],
    },
    {
        id: '9ff39801-afd4-4c2f-99f8-5dce28572c70',
        title: 'Katyn',
        year: 1993,
        cover: 'http://dummyimage.com/236x159.jpg/dddddd/000000',
        description:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        duration: 2056,
        contentRating: 'G',
        source:
            'http://columbia.edu/quisque/arcu/libero/rutrum/ac/lobortis.png',
        tags: ['Adventure', 'Action'],
    },
    {
        id: '2e0b5b89-26ed-47d7-954c-0dc8b6afceda',
        title: 'Stroszek',
        year: 1998,
        cover: 'http://dummyimage.com/225x120.jpg/ff4444/ffffff',
        description:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        duration: 2017,
        contentRating: 'NC-17',
        source: 'https://prlog.org/consequat/lectus/in/est/risus/auctor.jsp',
        tags: [
            'Comedy',
            'Comedy|Romance',
            'Action|Fantasy|Thriller|IMAX',
            'Action|Comedy|Crime',
            'Action|Adventure|Comedy|Crime|Drama|Film-Noir|Horror|Mystery|Thriller|Western',
        ],
    },
    {
        id: 'a2f5ef87-01f7-4ac9-85b4-bd384a8b39d8',
        title: 'Music Room, The (Jalsaghar)',
        year: 2004,
        cover: 'http://dummyimage.com/148x103.png/ff4444/ffffff',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        duration: 1966,
        contentRating: 'PG',
        source:
            'http://twitter.com/at/ipsum/ac/tellus/semper/interdum/mauris.jsp',
        tags: ['Documentary', 'Drama', 'Drama', 'Sci-Fi|Thriller'],
    },
    {
        id: '2e0453c4-c8b1-46f1-b04d-84fe0effd9fa',
        title: 'Last Exit to Brooklyn',
        year: 2008,
        cover: 'http://dummyimage.com/167x130.png/dddddd/000000',
        description:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        duration: 1962,
        contentRating: 'R',
        source: 'https://xinhuanet.com/ipsum/ac/tellus/semper/interdum.html',
        tags: ['Drama'],
    },
    {
        id: '20f777b4-55ff-4397-a6e1-f23d20aa01da',
        title: 'Gloria',
        year: 2009,
        cover: 'http://dummyimage.com/169x206.bmp/ff4444/ffffff',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        duration: 2051,
        contentRating: 'PG-13',
        source:
            'https://blogspot.com/ultrices/posuere/cubilia/curae/mauris.jsp',
        tags: ['Crime|Drama|Thriller', 'Documentary|Drama', 'Action|War'],
    },
    {
        id: '78ddccdf-a64c-4f8c-bb6b-058cedc4b5ec',
        title: 'Falling (a.k.a. Fallen)',
        year: 1985,
        cover: 'http://dummyimage.com/148x105.jpg/ff4444/ffffff',
        description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
        duration: 1977,
        contentRating: 'G',
        source: 'http://dion.ne.jp/montes/nascetur/ridiculus/mus/etiam.jsp',
        tags: ['Drama'],
    },
    {
        id: '84a20845-eeed-4ad8-b5b1-c3af63953675',
        title: 'Two Weeks in Another Town',
        year: 2005,
        cover: 'http://dummyimage.com/219x168.jpg/dddddd/000000',
        description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
        duration: 1986,
        contentRating: 'R',
        source: 'https://spotify.com/quis/augue.xml',
        tags: ['Horror', 'Documentary'],
    },
    {
        id: '2c6d480a-4756-4f41-a1a5-fee1330a2a4f',
        title:
            'Halloween: The Curse of Michael Myers (Halloween 6: The Curse of Michael Myers)',
        year: 2009,
        cover: 'http://dummyimage.com/107x109.png/cc0000/ffffff',
        description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        duration: 1935,
        contentRating: 'G',
        source: 'http://answers.com/nulla.aspx',
        tags: [
            'Documentary',
            'Thriller',
            'Comedy|Horror',
            'Crime|Drama|Thriller',
            'Comedy|Drama|Romance',
        ],
    },
    {
        id: '81cacd8f-6afb-4ac7-841d-c8db19240e16',
        title: 'Alice in Wonderland',
        year: 1999,
        cover: 'http://dummyimage.com/177x190.png/ff4444/ffffff',
        description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        duration: 2062,
        contentRating: 'NC-17',
        source: 'https://nhs.uk/augue/a/suscipit.js',
        tags: [
            'Action|Adventure|Children|Comedy|Fantasy|Sci-Fi',
            'Comedy|Drama|Romance',
            'Drama|War',
            'Drama|Horror|Thriller|War',
        ],
    },
    {
        id: '5276d34c-5927-4514-8e9a-100205d8a8b8',
        title: 'Animal Factory',
        year: 2002,
        cover: 'http://dummyimage.com/212x178.bmp/cc0000/ffffff',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        duration: 2034,
        contentRating: 'G',
        source: 'https://sun.com/hac/habitasse/platea/dictumst.jpg',
        tags: ['Action|Thriller', 'Animation|Children|Fantasy|Musical|Romance'],
    },
    {
        id: '8b0fdc49-2c74-4a75-83ea-cc9939725eed',
        title: 'Englishman in New York, An',
        year: 1993,
        cover: 'http://dummyimage.com/166x119.png/ff4444/ffffff',
        description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        duration: 2037,
        contentRating: 'PG-13',
        source: 'https://pcworld.com/vel/enim.png',
        tags: [
            'Comedy|Drama|Romance',
            'Action|Comedy|Crime|Drama',
            'Action',
            'Documentary',
            'Drama',
        ],
    },
];

function filteredMoviesMock(tag) {
    return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock,
};
