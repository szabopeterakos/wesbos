console.log("array day");

const data = {
    segments: 0,
    tracklist: [
        {
            id: "71",
            position: 1,
            image: "https://www.abc.net.au/cm/rimage/11079128-1x1-large.jpg",
            composer: "Ludwig van Beethoven",
            dates: "1770–1827",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/beethoven-ludwig-van/11084822"
        },
        {
            id: "59",
            position: 2,
            image: "https://www.abc.net.au/cm/rimage/11079250-1x1-large.jpg",
            composer: "Johann Sebastian Bach",
            dates: "1685–1750",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/bach-johann-sebastian/11168662"
        },
        {
            id: "100",
            position: 3,
            image: "https://www.abc.net.au/cm/rimage/11156210-1x1-large.jpg",
            composer: "Wolfgang Amadeus Mozart",
            dates: "1756–1791",
            nationality: "Austrian",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/mozart-wolfgang-amadeus/11168496"
        },
        {
            id: "86",
            position: 4,
            image: "https://www.abc.net.au/cm/rimage/11156240-1x1-large.jpg",
            composer: "Pyotr Ilyich Tchaikovsky",
            dates: "1840–1893",
            nationality: "Russian",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/tchaikovsky-pyotr-ilyich/11168694"
        },
        {
            id: "37",
            position: 5,
            image: "https://www.abc.net.au/cm/rimage/11079224-1x1-large.jpg",
            composer: "George Frideric Handel",
            dates: "1685–1759",
            nationality: "British",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/handel-george-frideric/11139490"
        },
        {
            id: "5",
            position: 6,
            image: "https://www.abc.net.au/cm/rimage/11156270-1x1-large.jpg",
            composer: "Antonio Vivaldi",
            dates: "1678–1741",
            nationality: "Italian",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/vivaldi-antonio/11168728"
        },
        {
            id: "34",
            position: 7,
            image: "https://www.abc.net.au/cm/rimage/11079186-1x1-large.jpg",
            composer: "Frédéric Chopin",
            dates: "1810–1849",
            nationality: "Polish",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/chopin-frederic/11168650"
        },
        {
            id: "33",
            position: 8,
            image: "https://www.abc.net.au/cm/rimage/11156282-1x1-large.jpg",
            composer: "Franz Schubert",
            dates: "1797–1828",
            nationality: "Austrian",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/schubert-franz/11168742"
        },
        {
            id: "95",
            position: 9,
            image: "https://www.abc.net.au/cm/rimage/11156308-1x1-large.jpg",
            composer: "Sergei Rachmaninov",
            dates: "1873–1943",
            nationality: "Russian",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/rachmaninov-sergei/11168754"
        },
        {
            id: "24",
            position: 10,
            image: "https://www.abc.net.au/cm/rimage/11079212-1x1-large.jpg",
            composer: "Edward Elgar",
            dates: "1857–1934",
            nationality: "British",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/elgar-edward/11156160"
        },
        {
            id: "87",
            position: 11,
            image: "https://www.abc.net.au/cm/rimage/11156330-1x1-large.jpg",
            composer: "Ralph Vaughan Williams",
            dates: "1872–1958",
            nationality: "British",
            pageurl:
                "https://www.abc.net.au/classic/features/classically-curious-ralph-vaughan-williams/10352508"
        },
        {
            id: "30",
            position: 12,
            image: "https://www.abc.net.au/cm/rimage/11079266-1x1-large.jpg",
            composer: "Felix Mendelssohn",
            dates: "1809–1847",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-mendelssohn/10776908"
        },
        {
            id: "4",
            position: 13,
            image: "https://www.abc.net.au/cm/rimage/11079102-1x1-large.jpg",
            composer: "Antonín Dvořák",
            dates: "1841–1904",
            nationality: "Czech",
            pageurl: ""
        },
        {
            id: "62",
            position: 14,
            image: "https://www.abc.net.au/cm/rimage/11079178-1x1-large.jpg",
            composer: "Johannes Brahms",
            dates: "1833–1897",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-when-brahms-met-mahler/10732264"
        },
        {
            id: "65",
            position: 15,
            image: "https://www.abc.net.au/cm/rimage/11156344-1x1-large.jpg",
            composer: "John Williams",
            dates: "1932–",
            nationality: "American",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/the-music-of-star-wars/10795480"
        },
        {
            id: "25",
            position: 16,
            image: "https://www.abc.net.au/cm/rimage/11079260-1x1-large.jpg",
            composer: "Elena Kats-Chernin",
            dates: "1957–",
            nationality: "Australian",
            pageurl:
                "https://www.abc.net.au/classic/features/elena-kats-chernin-at-60/9259208"
        },
        {
            id: "55",
            position: 17,
            image: "https://www.abc.net.au/cm/rimage/11156348-1x1-large.jpg",
            composer: "Jean Sibelius",
            dates: "1865–1957",
            nationality: "Finnish",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/listening-guide/1000-years-of-classical-music-sibelius-symphonies-2-7-finlandia/10698854"
        },
        {
            id: "84",
            position: 18,
            image: "https://www.abc.net.au/cm/rimage/11156358-1x1-large.jpg",
            composer: "Peter Sculthorpe",
            dates: "1929–2014",
            nationality: "Australian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/videos/peter-sculthorpe-at-50-abc-four-corners-profile-1979/11064716"
        },
        {
            id: "40",
            position: 19,
            image: "https://www.abc.net.au/cm/rimage/11156366-1x1-large.jpg",
            composer: "Giacomo Puccini",
            dates: "1858–1924",
            nationality: "Italian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/instant-opera-expert-what-operas-to-see-first/10544768"
        },
        {
            id: "47",
            position: 20,
            image: "https://www.abc.net.au/cm/rimage/11138124-1x1-large.jpg",
            composer: "Gustav Mahler",
            dates: "1860–1911",
            nationality: "Austro-Bohemian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/listening-guide/mahlers-fifth-symphony/10506072"
        },
        {
            id: "43",
            position: 21,
            image: "https://www.abc.net.au/cm/rimage/11156368-1x1-large.jpg",
            composer: "Giuseppe Verdi",
            dates: "1813–1901",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "19",
            position: 22,
            image: "https://www.abc.net.au/cm/rimage/11079206-1x1-large.jpg",
            composer: "Claude Debussy",
            dates: "1862–1918",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/listening-guide/1000-years-of-classical-music-debussy-prelude/10028810"
        },
        {
            id: "14",
            position: 23,
            image: "https://www.abc.net.au/cm/rimage/11156390-1x1-large.jpg",
            composer: "Camille Saint-Saëns",
            dates: "1835–1921",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-saint-saens/10714128"
        },
        {
            id: "21",
            position: 24,
            image: "https://www.abc.net.au/cm/rimage/11156416-1x1-large.jpg",
            composer: "Dmitri Shostakovich",
            dates: "1906–1975",
            nationality: "Russian",
            pageurl:
                "https://www.abc.net.au/classic/features/deep-listen:-shostakovichs-first-cello-concerto/9931746"
        },
        {
            id: "66",
            position: 25,
            image: "https://www.abc.net.au/cm/rimage/11079244-1x1-large.jpg",
            composer: "Joseph Haydn",
            dates: "1732–1809",
            nationality: "Austrian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-musical-families/10511410"
        },
        {
            id: "9",
            position: 26,
            image: "https://www.abc.net.au/cm/rimage/11147856-1x1-large.jpg",
            composer: "Arvo Pärt",
            dates: "1935–",
            nationality: "Estonian",
            pageurl: ""
        },
        {
            id: "38",
            position: 27,
            image: "https://www.abc.net.au/cm/rimage/11147826-1x1-large.jpg",
            composer: "George Gershwin",
            dates: "1898–1937",
            nationality: "American",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-gershwin-schoenberg/10915460"
        },
        {
            id: "73",
            position: 28,
            image: "https://www.abc.net.au/cm/rimage/11147778-1x1-large.jpg",
            composer: "Maurice Ravel",
            dates: "1875–1937",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/features/paul-wittgenstein-and-ravel-piano-concerto-for-left-hand/10419662"
        },
        {
            id: "23",
            position: 29,
            image: "https://www.abc.net.au/cm/rimage/11147754-1x1-large.jpg",
            composer: "Edvard Grieg",
            dates: "1843–1907",
            nationality: "Norwegian",
            pageurl: ""
        },
        {
            id: "91",
            position: 30,
            image: "https://www.abc.net.au/cm/rimage/11160720-1x1-large.jpg",
            composer: "Ross Edwards",
            dates: "1943–",
            nationality: "Australian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-ross-edwards/10627710"
        },
        {
            id: "79",
            position: 31,
            image: "https://www.abc.net.au/cm/rimage/11147702-1x1-large.jpg",
            composer: "Nigel Westlake",
            dates: "1958–",
            nationality: "Australian",
            pageurl:
                "https://www.abc.net.au/classic/features/classically-curious-composer-nigel-westlake/10196466"
        },
        {
            id: "94",
            position: 32,
            image: "https://www.abc.net.au/cm/rimage/11147686-1x1-large.jpg",
            composer: "Sergei Prokofiev",
            dates: "1891–1953",
            nationality: "Russian",
            pageurl:
                "https://www.abc.net.au/classic/features/deep-listen-prokofiev-romeo-and-juliet/9763180"
        },
        {
            id: "52",
            position: 33,
            image: "https://www.abc.net.au/cm/rimage/11160752-1x1-large.jpg",
            composer: "Hildegard von Bingen",
            dates: "1098–1179",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/hildegard-von-bingen/10847192"
        },
        {
            id: "39",
            position: 34,
            image: "https://www.abc.net.au/cm/rimage/11160766-1x1-large.jpg",
            composer: "Georges Bizet",
            dates: "1838–1875",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-bizet/10981716"
        },
        {
            id: "89",
            position: 35,
            image: "https://www.abc.net.au/cm/rimage/11147588-1x1-large.jpg",
            composer: "Richard Wagner",
            dates: "1813–1883",
            nationality: "German",
            pageurl: ""
        },
        {
            id: "85",
            position: 36,
            image: "https://www.abc.net.au/cm/rimage/11147570-1x1-large.jpg",
            composer: "Philip Glass",
            dates: "1937–",
            nationality: "American",
            pageurl: ""
        },
        {
            id: "28",
            position: 37,
            image: "https://www.abc.net.au/cm/rimage/11146362-1x1-large.jpg",
            composer: "Erik Satie",
            dates: "1866–1925",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/features/satie-vexations/10156186"
        },
        {
            id: "69",
            position: 38,
            image: "https://www.abc.net.au/cm/rimage/11079160-1x1-large.jpg",
            composer: "Leonard Bernstein",
            dates: "1922–2004",
            nationality: "American",
            pageurl:
                "https://www.abc.net.au/classic/features/classically-curious-why-was-bernstein-a-genius/10148912"
        },
        {
            id: "35",
            position: 39,
            image: "https://www.abc.net.au/cm/rimage/11147354-1x1-large.jpg",
            composer: "Gabriel Fauré",
            dates: "1845–1924",
            nationality: "French",
            pageurl: ""
        },
        {
            id: "26",
            position: 40,
            image: "https://www.abc.net.au/cm/rimage/11147336-1x1-large.jpg",
            composer: "Ennio Morricone",
            dates: "1928–",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "88",
            position: 41,
            image: "https://www.abc.net.au/cm/rimage/11143194-1x1-large.jpg",
            composer: "Richard Strauss",
            dates: "1864–1949",
            nationality: "German",
            pageurl: ""
        },
        {
            id: "46",
            position: 42,
            image: "https://www.abc.net.au/cm/rimage/11147322-1x1-large.jpg",
            composer: "Gustav Holst",
            dates: "1874–1934",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "1",
            position: 43,
            image: "https://www.abc.net.au/cm/rimage/11147260-1x1-large.jpg",
            composer: "Aaron Copland",
            dates: "1900–1990",
            nationality: "American",
            pageurl: ""
        },
        {
            id: "20",
            position: 44,
            image: "https://www.abc.net.au/cm/rimage/11147246-1x1-large.jpg",
            composer: "Claudio Monteverdi",
            dates: "1567–1643",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "50",
            position: 45,
            image: "https://www.abc.net.au/cm/rimage/11147218-1x1-large.jpg",
            composer: "Henry Purcell",
            dates: "1659–1695",
            nationality: "British",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-purcell/10936706"
        },
        {
            id: "54",
            position: 46,
            image: "https://www.abc.net.au/cm/rimage/11147192-1x1-large.jpg",
            composer: "Igor Stravinsky",
            dates: "1882–1971",
            nationality: "Russian",
            pageurl: ""
        },
        {
            id: "90",
            position: 47,
            image: "https://www.abc.net.au/cm/rimage/11147178-1x1-large.jpg",
            composer: "Robert Schumann",
            dates: "1810–1856",
            nationality: "German",
            pageurl: ""
        },
        {
            id: "36",
            position: 48,
            image: "https://www.abc.net.au/cm/rimage/11147160-1x1-large.jpg",
            composer: "Georg Philipp Telemann",
            dates: "1681–1767",
            nationality: "German",
            pageurl: ""
        },
        {
            id: "74",
            position: 49,
            image: "https://www.abc.net.au/cm/rimage/11146576-1x1-large.jpg",
            composer: "Max Bruch",
            dates: "1838–1920",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/features/bruch-violin-concerto/10285828"
        },
        {
            id: "13",
            position: 50,
            image: "https://www.abc.net.au/cm/rimage/11146558-1x1-large.jpg",
            composer: "Benjamin Britten",
            dates: "1913–1976",
            nationality: "British",
            pageurl:
                "https://www.abc.net.au/classic/features/young-persons-guide-to-the-orchestra/9890968"
        },
        {
            id: "2",
            position: 51,
            image: "https://www.abc.net.au/cm/rimage/11146540-1x1-large.jpg",
            composer: "Alexander Borodin",
            dates: "1833–1887",
            nationality: "Russian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-borodin/10847118"
        },
        {
            id: "96",
            position: 52,
            image: "https://www.abc.net.au/cm/rimage/11146514-1x1-large.jpg",
            composer: "Thomas Tallis",
            dates: "1505–1585",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "32",
            position: 53,
            image: "https://www.abc.net.au/cm/rimage/11079256-1x1-large.jpg",
            composer: "Franz Liszt",
            dates: "1811–1886",
            nationality: "Hungarian",
            pageurl: ""
        },
        {
            id: "57",
            position: 54,
            image: "https://www.abc.net.au/cm/rimage/11146478-1x1-large.jpg",
            composer: "Joaquín Rodrigo",
            dates: "1901–1999",
            nationality: "Spanish",
            pageurl: ""
        },
        {
            id: "41",
            position: 55,
            image: "https://www.abc.net.au/cm/rimage/11146452-1x1-large.jpg",
            composer: "Gioachino Rossini",
            dates: "1792–1868",
            nationality: "Italian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-gioachino-rossini/10693518"
        },
        {
            id: "80",
            position: 56,
            image: "https://www.abc.net.au/cm/rimage/11146412-1x1-large.jpg",
            composer: "Nikolai Rimsky-Korsakov",
            dates: "1844–1908",
            nationality: "Russian",
            pageurl: ""
        },
        {
            id: "49",
            position: 57,
            image: "https://www.abc.net.au/cm/rimage/11146380-1x1-large.jpg",
            composer: "Hector Berlioz",
            dates: "1803–1869",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-berlioz/10891826"
        },
        {
            id: "83",
            position: 58,
            image: "https://www.abc.net.au/cm/rimage/11143664-1x1-large.jpg",
            composer: "Percy Grainger",
            dates: "1882–1961",
            nationality: "Australian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-percy-grainger/10434560"
        },
        {
            id: "48",
            position: 59,
            image: "https://www.abc.net.au/cm/rimage/11143644-1x1-large.jpg",
            composer: "Hans Zimmer",
            dates: "1957–",
            nationality: "German",
            pageurl: ""
        },
        {
            id: "16",
            position: 60,
            image: "https://www.abc.net.au/cm/rimage/11143630-1x1-large.jpg",
            composer: "Carl Philipp Emanuel Bach",
            dates: "1714–1788",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-musical-families/10511410"
        },
        {
            id: "93",
            position: 61,
            image: "https://www.abc.net.au/cm/rimage/11143622-1x1-large.jpg",
            composer: "Samuel Barber",
            dates: "1910–1981",
            nationality: "American",
            pageurl: ""
        },
        {
            id: "18",
            position: 62,
            image: "https://www.abc.net.au/cm/rimage/11143448-1x1-large.jpg",
            composer: "Clara Schumann",
            dates: "1819–1896",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/featured-music/composers/schumann-clara/10858416"
        },
        {
            id: "6",
            position: 63,
            image: "https://www.abc.net.au/cm/rimage/11156794-1x1-large.jpg",
            composer: "Aram Khachaturian",
            dates: "1903–1978",
            nationality: "Armenian",
            pageurl: ""
        },
        {
            id: "10",
            position: 64,
            image: "https://www.abc.net.au/cm/rimage/11143408-1x1-large.jpg",
            composer: "Astor Piazzolla",
            dates: "1921–1992",
            nationality: "Argentinian",
            pageurl: ""
        },
        {
            id: "70",
            position: 65,
            image: "https://www.abc.net.au/cm/rimage/11156826-1x1-large.jpg",
            composer: "Ludovico Einaudi",
            dates: "1955–",
            nationality: "Italian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/news/ludovico-einaudi-album-breaks-classical-music-streaming-records/10960430"
        },
        {
            id: "61",
            position: 66,
            image: "https://www.abc.net.au/cm/rimage/11156846-1x1-large.jpg",
            composer: "Johann Strauss II",
            dates: "1825–1899",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-musical-families/10511410"
        },
        {
            id: "68",
            position: 67,
            image: "https://www.abc.net.au/cm/rimage/11143392-1x1-large.jpg",
            composer: "Karl Jenkins",
            dates: "1944–",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "64",
            position: 68,
            image: "https://www.abc.net.au/cm/rimage/11156858-1x1-large.jpg",
            composer: "John Rutter",
            dates: "1945–",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "3",
            position: 69,
            image: "https://www.abc.net.au/cm/rimage/11156870-1x1-large.jpg",
            composer: "Anton Bruckner",
            dates: "1824–1896",
            nationality: "Austrian",
            pageurl: ""
        },
        {
            id: "72",
            position: 70,
            image: "https://www.abc.net.au/cm/rimage/11156878-1x1-large.jpg",
            composer: "Luigi Boccherini",
            dates: "1743–1805",
            nationality: "Italian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-boccherini/10600682"
        },
        {
            id: "11",
            position: 71,
            image: "https://www.abc.net.au/cm/rimage/11156940-1x1-large.jpg",
            composer: "Bedřich Smetana",
            dates: "1824–1884",
            nationality: "Czech",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-smetana/11108460"
        },
        {
            id: "8",
            position: 72,
            image: "https://www.abc.net.au/cm/rimage/11156952-1x1-large.jpg",
            composer: "Arthur Sullivan",
            dates: "1842–1900",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "97",
            position: 73,
            image: "https://www.abc.net.au/cm/rimage/11160800-1x1-large.jpg",
            composer: "Tomaso Albinoni",
            dates: "1671–1751",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "77",
            position: 74,
            image: "https://www.abc.net.au/cm/rimage/11156974-1x1-large.jpg",
            composer: "Modest Mussorgsky",
            dates: "1839–1881",
            nationality: "Russian",
            pageurl:
                "https://www.abc.net.au/classic/features/deep-listen:-mussorgskys-pictures-at-an-exhibition/10002460"
        },
        {
            id: "60",
            position: 75,
            image: "https://www.abc.net.au/cm/rimage/11160816-1x1-large.jpg",
            composer: "Johann Strauss I",
            dates: "1804–1849",
            nationality: "Austrian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-musical-families/10511410"
        },
        {
            id: "99",
            position: 76,
            image: "https://www.abc.net.au/cm/rimage/11143176-1x1-large.jpg",
            composer: "William Byrd",
            dates: "1539–1623",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "12",
            position: 77,
            image: "https://www.abc.net.au/cm/rimage/11143170-1x1-large.jpg",
            composer: "Béla Bartók",
            dates: "1881–1945",
            nationality: "Hungarian",
            pageurl: ""
        },
        {
            id: "58",
            position: 78,
            image: "https://www.abc.net.au/cm/rimage/11143158-1x1-large.jpg",
            composer: "Johann Pachelbel",
            dates: "1653–1706",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/features/pachelbels-canon/10044954"
        },
        {
            id: "7",
            position: 79,
            image: "https://www.abc.net.au/cm/rimage/11143146-1x1-large.jpg",
            composer: "Arcangelo Corelli",
            dates: "1653–1713",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "75",
            position: 80,
            image: "https://www.abc.net.au/cm/rimage/11143120-1x1-large.jpg",
            composer: "Max Richter",
            dates: "1966–",
            nationality: "German/British",
            pageurl: ""
        },
        {
            id: "53",
            position: 81,
            image: "https://www.abc.net.au/cm/rimage/11142032-1x1-large.jpg",
            composer: "Howard Shore",
            dates: "1946–",
            nationality: "Canadian",
            pageurl: ""
        },
        {
            id: "42",
            position: 82,
            image: "https://www.abc.net.au/cm/rimage/11142018-1x1-large.jpg",
            composer: "Giovanni Pierluigi da Palestrina",
            dates: "1525–1594",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "29",
            position: 83,
            image: "https://www.abc.net.au/cm/rimage/11141986-1x1-large.jpg",
            composer: "Fanny Mendelssohn",
            dates: "1805–1847",
            nationality: "German",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/a-guide-to-female-composers/10867364"
        },
        {
            id: "81",
            position: 84,
            image: "https://www.abc.net.au/cm/rimage/11141952-1x1-large.jpg",
            composer: "Ottorino Respighi",
            dates: "1879–1936",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "63",
            position: 85,
            image: "https://www.abc.net.au/cm/rimage/11141978-1x1-large.jpg",
            composer: "John Barry",
            dates: "1933–2011",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "45",
            position: 86,
            image: "https://www.abc.net.au/cm/rimage/11141932-1x1-large.jpg",
            composer: "Gregorio Allegri",
            dates: "1582–1652",
            nationality: "Italian",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/listening-guide/sacred-renaissance-music/10702656"
        },
        {
            id: "98",
            position: 87,
            image: "https://www.abc.net.au/cm/rimage/11141922-1x1-large.jpg",
            composer: "William Barton",
            dates: "1981–",
            nationality: "Australian",
            pageurl:
                "https://www.abc.net.au/classic/features/featured-composer-william-barton/9951270"
        },
        {
            id: "78",
            position: 88,
            image: "https://www.abc.net.au/cm/rimage/11141820-1x1-large.jpg",
            composer: "Niccolò Paganini",
            dates: "1782–1840",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "67",
            position: 89,
            image: "https://www.abc.net.au/cm/rimage/11141814-1x1-large.jpg",
            composer: "Jules Massenet",
            dates: "1842–1912",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/love-and-desire/10784514"
        },
        {
            id: "82",
            position: 90,
            image: "https://www.abc.net.au/cm/rimage/11141786-1x1-large.jpg",
            composer: "Peggy Glanville-Hicks",
            dates: "1912–1990",
            nationality: "Australian",
            pageurl: ""
        },
        {
            id: "76",
            position: 91,
            image: "https://www.abc.net.au/cm/rimage/11141750-1x1-large.jpg",
            composer: "Michael Nyman",
            dates: "1944–",
            nationality: "British",
            pageurl: ""
        },
        {
            id: "27",
            position: 92,
            image: "https://www.abc.net.au/cm/rimage/11141724-1x1-large.jpg",
            composer: "Erich Korngold",
            dates: "1897–1957",
            nationality: "American",
            pageurl: ""
        },
        {
            id: "44",
            position: 93,
            image: "https://www.abc.net.au/cm/rimage/11141704-1x1-large.jpg",
            composer: "Graeme Koehne",
            dates: "1956–",
            nationality: "Australian",
            pageurl: ""
        },
        {
            id: "56",
            position: 94,
            image: "https://www.abc.net.au/cm/rimage/11141680-1x1-large.jpg",
            composer: "Jean-Philippe Rameau",
            dates: "1683–1764",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-jean-philippe-rameau/10799830"
        },
        {
            id: "51",
            position: 95,
            image: "https://www.abc.net.au/cm/rimage/11141572-1x1-large.jpg",
            composer: "Henryk Górecki",
            dates: "1933–2010",
            nationality: "Polish",
            pageurl: ""
        },
        {
            id: "92",
            position: 96,
            image: "https://www.abc.net.au/cm/rimage/11141554-1x1-large.jpg",
            composer: "Sally Whitwell",
            dates: "1974–",
            nationality: "Australian",
            pageurl: ""
        },
        {
            id: "22",
            position: 97,
            image: "https://www.abc.net.au/cm/rimage/11141538-1x1-large.jpg",
            composer: "Domenico Scarlatti",
            dates: "1685–1757",
            nationality: "Italian",
            pageurl: ""
        },
        {
            id: "17",
            position: 98,
            image: "https://www.abc.net.au/cm/rimage/11141524-1x1-large.jpg",
            composer: "Carl Vine",
            dates: "1954–",
            nationality: "Australian",
            pageurl: ""
        },
        {
            id: "15",
            position: 99,
            image: "https://www.abc.net.au/cm/rimage/11141506-1x1-large.jpg",
            composer: "Carl Orff",
            dates: "1895–1982",
            nationality: "German",
            pageurl: ""
        },
        {
            id: "31",
            position: 100,
            image: "https://www.abc.net.au/cm/rimage/11141472-1x1-large.jpg",
            composer: "Francis Poulenc",
            dates: "1899–1963",
            nationality: "French",
            pageurl:
                "https://www.abc.net.au/classic/read-and-watch/music-reads/classically-curious-poulenc/10750182"
        }
    ]
};

const people = data.tracklist.map(x => {
    const dates = x.dates.split("–");
    const numberDates = dates.map(x => Number(x));
    return {
        year: numberDates[0],
        passed: numberDates[1],
        ...x
    };
});
// console.log("TCL: people", people[13]);

function youngFilter(p, treshold) {
    const difference = p.passed - p.year;
    if (difference > 0 && difference < treshold) return true;
    return false;
}

const peopleNames = people.map(x => {
    const [first, ...rest] = x.composer.split(" ");
    return {
        name: x.composer,
        first: first,
        rest: rest
    };
});
// console.log("TCL: peopleNames", peopleNames);
const filteredComposers = people.filter(p => p.year > 1900);
// console.log("TCL: filteredComposers", filteredComposers);
const filteredComposers18 = people.filter(p => p.year > 1800 && p.year < 1900);
// console.log("TCL: filteredComposers18", filteredComposers18);
const earlyDies = people.filter(p => youngFilter(p, 39));
// console.log("TCL: earlyDies", earlyDies);

const filterandmap = people
    .filter(p => p.position % 10 === 0)
    .map(p => ({ name: p.composer, order: p.id, nationality: p.nationality }));
// console.table(filterandmap);

const sorted = people.sort((p, n) => p.year - n.year);
// console.table("TCL: sorted", sorted);
// console.table([1, 2, 344]);

const allLivedYearsTogether = people
    .map(p => (p.passed - p.year > 0 ? p.passed - p.year : 0))
    .reduce((acc, livedYears) => acc + livedYears, 0);
// console.log("TCL: allLivedYearsTogether", allLivedYearsTogether);

function livedYears(end, start) {
    return end - start > 0 ? end - start : new Date().getFullYear();
}

const orderedByLivedYears = people
    .filter(p => p.passed > 0)
    .sort((p, c) => {
        const diffP = livedYears(p.passed, p.year);
        const diffC = livedYears(c.passed, c.year);
        return diffC - diffP;
    });
// console.log("TCL: orderedByLivedYears", orderedByLivedYears);
// console.log(new Date().getFullYear());

// A list of composers from the source site
// https://www.abc.net.au/classic/classic-100/composer/1-100/

const composersWithLongNames = [...document.querySelectorAll("ol li h2")]
    .map(c => c.innerText)
    .filter(n => {
        const names = n.split(" ");
        if (names.length > 2) return true;
    });

const orderedByFirstName = peopleNames.sort((p, c) => {
    return p.first > c.first ? 1 : -1;
});
// console.table(orderedByFirstName);

const reduceSource = ["A", "B", "C", "A", "B", "C", "A", "B", "A"];

const sum = reduceSource.reduce((acc, c) => {
    if (!acc[c]) {
        acc[c] = 0;
    }
    acc[c]++;
    return acc;
}, {});
console.log("TCL: sum", sum)

