document.addEventListener("DOMContentLoaded", () => {

    const packages = [
        { name: "Rakkaus", ean: "6430082010347", images: ["Rakkaus1.jpg", "Rakkaus2.jpg"] },
        { name: "Sanoja Sinulle", ean: "6430082010330", images: ["Sanojasinulle1.jpg", "Sanojasinulle2.jpg"] },
        { name: "Lohtu", ean: "6430082010323", images: ["Lohtu1.jpg", "Lohtu2.jpg"] },
        { name: "Unelmat", ean: "6430082010316", images: ["Unelmat1.jpg", "Unelmat2.jpg"] },
        { name: "Kirjo", ean: "6430082010309", images: ["Kirjo1.jpg", "Kirjo2.jpg"] },
        { name: "Elämän taika", ean: "6430082010293", images: ["Etaika1.jpg", "Etaika2.jpg"] },
        { name: "Suosikit", ean: "06430082010286", images: ["Suosikit1.jpg", "Suosikit2.jpg"] },
        { name: "Toivotukset", ean: "06430082010279", images: ["Toivotukset1.jpg", "Toivotukset2.jpg"] },
        { name: "Rauha", ean: "06430082010262", images: ["Rauha1.jpg", "Rauha2.jpg"] },
    ];
    
    const container = document.getElementById("package-gallery-container");
    
    packages.forEach(pkg => {
        const card = document.createElement("div");
        card.classList.add("card");
    
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = pkg.name;
    
        const cardEan = document.createElement("p");
        cardEan.textContent = `EAN: ${pkg.ean}`;
    
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
    
        pkg.images.forEach(image => {
            const img = document.createElement("img");
            img.src = `Korttipaketit/${image}`;  
            img.alt = `${pkg.name} image`;
            imageContainer.appendChild(img);
        });
    
        card.appendChild(cardTitle);
        card.appendChild(cardEan);
        card.appendChild(imageContainer);
    
        container.appendChild(card);
    });
    const categories = [
        {
            id: "family-section",
            title: "Perhe, Parisuhde, Lapset",
            images: [
                { src: "Yrityskuvat/7.jpg", ean: "6430082011535" }, // 7
                { src: "Yrityskuvat/8.jpg", ean: "6430082011535" }, // 8
                { src: "Yrityskuvat/14.jpg", ean: "6430082011535" }, // 14
                { src: "Yrityskuvat/17.jpg", ean: "6430082011535" }, // 17
                { src: "Yrityskuvat/23.jpg", ean: "6430082011535" }, // 23
                { src: "Yrityskuvat/27.jpg", ean: "6430082011535" }, // 27
                { src: "Yrityskuvat/30.jpg", ean: "6430082011535" }, // 30
                { src: "Yrityskuvat/44.jpg", ean: "6430082011535" }, // 44
                { src: "Yrityskuvat/47.jpg", ean: "6430082011535" }, // 47
                { src: "Yrityskuvat/48.jpg", ean: "6430082011535" }, // 48
                { src: "Yrityskuvat/57.jpg", ean: "6430082011535" }, // 57
                { src: "Yrityskuvat/58.jpg", ean: "6430082011535" }, // 58
                { src: "Yrityskuvat/63.jpg", ean: "6430082011535" }, // 63
                { src: "Yrityskuvat/79.jpg", ean: "6430082011535" }, // 79
                { src: "Yrityskuvat/84.jpg", ean: "6430082011535" }, // 84
                { src: "Yrityskuvat/85.jpg", ean: "6430082011535" }, // 85
                { src: "Yrityskuvat/206.jpg", ean: "6430082011535" }, // 106
                { src: "Yrityskuvat/207.jpg", ean: "6430082011535" }, // 107
                { src: "Yrityskuvat/212.jpg", ean: "6430082011535" }, // 112
                { src: "Yrityskuvat/213.jpg", ean: "6430082011535" }, // 113
                { src: "Yrityskuvat/214.jpg", ean: "6430082011535" }, // 114
                { src: "Yrityskuvat/219.jpg", ean: "6430082011535" }, // 119
                { src: "Yrityskuvat/234.jpg", ean: "6430082011535" }, // 134
                { src: "Yrityskuvat/236.jpg", ean: "6430082011535" }, // 136
                { src: "Yrityskuvat/238.jpg", ean: "6430082011535" }, // 138
                { src: "Yrityskuvat/241.jpg", ean: "6430082011535" }, // 141
                { src: "Yrityskuvat/242.jpg", ean: "6430082011535" }  // 142
            ],
        },
        {
            id: "life-aforism-section",
            title: "Elämä ja Aforismi",
            images: [
                { src: "Yrityskuvat/3.jpg", ean: "6430082011535" }, // 3
                { src: "Yrityskuvat/5.jpg", ean: "6430082011535" }, // 5
                { src: "Yrityskuvat/9.jpg", ean: "6430082011535" }, // 9
                { src: "Yrityskuvat/10.jpg", ean: "6430082011535" }, // 10
                { src: "Yrityskuvat/11.jpg", ean: "6430082011535" }, // 11
                { src: "Yrityskuvat/14.jpg", ean: "6430082011535" }, // 14
                { src: "Yrityskuvat/16.jpg", ean: "6430082011535" }, // 16
                { src: "Yrityskuvat/17.jpg", ean: "6430082011535" }, // 17
                { src: "Yrityskuvat/18.jpg", ean: "6430082011535" }, // 18
                { src: "Yrityskuvat/21.jpg", ean: "6430082011535" }, // 21
                { src: "Yrityskuvat/22.jpg", ean: "6430082011535" }, // 22
                { src: "Yrityskuvat/23.jpg", ean: "6430082011535" }, // 23
                { src: "Yrityskuvat/24.jpg", ean: "6430082011535" }, // 24
                { src: "Yrityskuvat/25.jpg", ean: "6430082011535" }, // 25
                { src: "Yrityskuvat/26.jpg", ean: "6430082011535" }, // 26
                { src: "Yrityskuvat/28.jpg", ean: "6430082011535" }, // 28
                { src: "Yrityskuvat/29.jpg", ean: "6430082011535" }, // 29
                { src: "Yrityskuvat/30.jpg", ean: "6430082011535" }, // 30
                { src: "Yrityskuvat/31.jpg", ean: "6430082011535" }, // 31
                { src: "Yrityskuvat/32.jpg", ean: "6430082011535" }, // 32
                { src: "Yrityskuvat/33.jpg", ean: "6430082011535" }, // 33
                { src: "Yrityskuvat/34.jpg", ean: "6430082011535" }, // 34
                { src: "Yrityskuvat/43.jpg", ean: "6430082011535" }, // 43
                { src: "Yrityskuvat/44.jpg", ean: "6430082011535" }, // 44
                { src: "Yrityskuvat/46.jpg", ean: "6430082011535" }, // 46
                { src: "Yrityskuvat/47.jpg", ean: "6430082011535" }, // 47
                { src: "Yrityskuvat/52.jpg", ean: "6430082011535" }, // 52
                { src: "Yrityskuvat/54.jpg", ean: "6430082011535" }, // 54
                { src: "Yrityskuvat/55.jpg", ean: "6430082011535" }, // 55
                { src: "Yrityskuvat/57.jpg", ean: "6430082011535" }, // 57
                { src: "Yrityskuvat/58.jpg", ean: "6430082011535" }, // 58
                { src: "Yrityskuvat/64.jpg", ean: "6430082011535" }, // 64
                { src: "Yrityskuvat/66.jpg", ean: "6430082011535" }, // 66
                { src: "Yrityskuvat/69.jpg", ean: "6430082011535" }, // 69
                { src: "Yrityskuvat/70.jpg", ean: "6430082011535" }, // 70
                { src: "Yrityskuvat/74.jpg", ean: "6430082011535" }, // 74
                { src: "Yrityskuvat/75.jpg", ean: "6430082011535" }, // 75
                { src: "Yrityskuvat/78.jpg", ean: "6430082011535" }, // 78
                { src: "Yrityskuvat/88.jpg", ean: "6430082011535" }, // 88
                { src: "Yrityskuvat/90.jpg", ean: "6430082011535" }, // 90
                { src: "Yrityskuvat/93.jpg", ean: "6430082011535" }, // 93
                { src: "Yrityskuvat/94.jpg", ean: "6430082011535" }, // 94
                { src: "Yrityskuvat/95.jpg", ean: "6430082011535" }, // 95
                { src: "Yrityskuvat/96.jpg", ean: "6430082011535" }, // 96
                { src: "Yrityskuvat/97.jpg", ean: "6430082011535" }, // 97
                { src: "Yrityskuvat/200.jpg", ean: "6430082011535" }, // 100
                { src: "Yrityskuvat/202.jpg", ean: "6430082011535" }, // 102
                { src: "Yrityskuvat/205.jpg", ean: "6430082011535" }, // 105
                { src: "Yrityskuvat/206.jpg", ean: "6430082011535" }, // 106
                { src: "Yrityskuvat/207.jpg", ean: "6430082011535" }, // 107
                { src: "Yrityskuvat/215.jpg", ean: "6430082011535" }, // 115
                { src: "Yrityskuvat/216.jpg", ean: "6430082011535" }, // 116
                { src: "Yrityskuvat/217.jpg", ean: "6430082011535" }, // 117
                { src: "Yrityskuvat/223.jpg", ean: "6430082011535" }, // 123
                { src: "Yrityskuvat/228.jpg", ean: "6430082011535" }, // 128
                { src: "Yrityskuvat/230.jpg", ean: "6430082011535" }, // 130
                { src: "Yrityskuvat/232.jpg", ean: "6430082011535" }, // 132
                { src: "Yrityskuvat/240.jpg", ean: "6430082011535" }, // 140
                { src: "Yrityskuvat/241.jpg", ean: "6430082011535" }, // 141
                { src: "Yrityskuvat/243.jpg", ean: "6430082011535" }  // 143
                
            ],
        },
        {
            id: "nature-spirituality-section",
            title: "Luonto ja Henkisyys",
            images: [
                { src: "Yrityskuvat/3.jpg", ean: "6430082011535" }, // 3
                { src: "Yrityskuvat/4.jpg", ean: "6430082010163" }, // 4
                { src: "Yrityskuvat/6.jpg", ean: "6430082010965" }, // 6
                { src: "Yrityskuvat/10.jpg", ean: "6430082010057" }, // 10
                { src: "Yrityskuvat/11.jpg", ean: "6430082010118" }, // 11
                { src: "Yrityskuvat/12.jpg", ean: "6430082010224" }, // 12
                { src: "Yrityskuvat/14.jpg", ean: "6430082010170" }, // 14
                { src: "Yrityskuvat/15.jpg", ean: "6430082010064" }, // 15
                { src: "Yrityskuvat/16.jpg", ean: "6430082010880" }, // 16
                { src: "Yrityskuvat/18.jpg", ean: "6430082010859" }, // 18
                { src: "Yrityskuvat/24.jpg", ean: "6430082010842" }, // 24
                { src: "Yrityskuvat/28.jpg", ean: "6430082010873" }, // 28
                { src: "Yrityskuvat/29.jpg", ean: "6430082010903" }, // 29
                { src: "Yrityskuvat/36.jpg", ean: "6430082010149" }, // 36
                { src: "Yrityskuvat/37.jpg", ean: "6430082010866" }, // 37
                { src: "Yrityskuvat/40.jpg", ean: "6430082010736" }, // 40
                { src: "Yrityskuvat/41.jpg", ean: "6430082010071" }, // 41
                { src: "Yrityskuvat/42.jpg", ean: "6430082010811" }, // 42
                { src: "Yrityskuvat/45.jpg", ean: "6430082010767" }, // 45
                { src: "Yrityskuvat/49.jpg", ean: "6430082010781" }, // 49
                { src: "Yrityskuvat/51.jpg", ean: "6430082010828" }, // 51
                { src: "Yrityskuvat/52.jpg", ean: "6430082010774" }, // 52
                { src: "Yrityskuvat/53.jpg", ean: "6430082010798" }, // 53
                { src: "Yrityskuvat/54.jpg", ean: "6430082010804" }, // 54
                { src: "Yrityskuvat/55.jpg", ean: "6430082010835" }, // 55
                { src: "Yrityskuvat/56.jpg", ean: "6430082010088" }, // 56
                { src: "Yrityskuvat/57.jpg", ean: "6430082010729" }, // 57
                { src: "Yrityskuvat/58.jpg", ean: "6430082010637" }, // 58
                { src: "Yrityskuvat/59.jpg", ean: "6430082010705" }, // 59
                { src: "Yrityskuvat/60.jpg", ean: "6430082010644" }, // 60
                { src: "Yrityskuvat/61.jpg", ean: "6430082010651" }, // 61
                { src: "Yrityskuvat/63.jpg", ean: "6430082010750" }, // 63
                { src: "Yrityskuvat/66.jpg", ean: "6430082010675" }, // 66
                { src: "Yrityskuvat/67.jpg", ean: "6430082010699" }, // 67
                { src: "Yrityskuvat/69.jpg", ean: "6430082010620" }, // 69
                { src: "Yrityskuvat/70.jpg", ean: "6430082010743" }, // 70
                { src: "Yrityskuvat/71.jpg", ean: "6430082010668" }, // 71
                { src: "Yrityskuvat/73.jpg", ean: "6430082011542" }, // 73
                { src: "Yrityskuvat/76.jpg", ean: "6430082010231" }, // 76
                { src: "Yrityskuvat/77.jpg", ean: "6430082010538" }, // 77
                { src: "Yrityskuvat/79.jpg", ean: "6430082010033" }, // 79
                { src: "Yrityskuvat/80.jpg", ean: "6430082010248" }, // 80
                { src: "Yrityskuvat/82.jpg", ean: "6430082010606" }, // 82
                { src: "Yrityskuvat/83.jpg", ean: "6430082010682" }, // 83
                { src: "Yrityskuvat/84.jpg", ean: "6430082010613" }, // 84
                { src: "Yrityskuvat/91.jpg", ean: "6430082010026" }, // 91
                { src: "Yrityskuvat/92.jpg", ean: "6430082010101" }, // 92
                { src: "Yrityskuvat/94.jpg", ean: "6430082010156" }, // 94
                { src: "Yrityskuvat/99.jpg", ean: "6430082010897" }, // 99
                { src: "Yrityskuvat/204.jpg", ean: "6430082010477" }, // 104
                { src: "Yrityskuvat/206.jpg", ean: "6430082010125" }, // 106
                { src: "Yrityskuvat/209.jpg", ean: "6430082010521" }, // 109
                { src: "Yrityskuvat/215.jpg", ean: "6430082010576" }, // 115
                { src: "Yrityskuvat/218.jpg", ean: "6430082010545" }, // 118
                { src: "Yrityskuvat/221.jpg", ean: "6430082010552" }, // 121
                { src: "Yrityskuvat/225.jpg", ean: "6430082010569" }, // 125
                { src: "Yrityskuvat/229.jpg", ean: "6430082010491" }, // 129
                { src: "Yrityskuvat/231.jpg", ean: "6430082010590" }, // 131
                { src: "Yrityskuvat/232.jpg", ean: "6430082010507" }, // 132
                { src: "Yrityskuvat/233.jpg", ean: "6430082010712" }, // 133
                { src: "Yrityskuvat/237.jpg", ean: "6430082010583" }, // 137
                { src: "Yrityskuvat/239.jpg", ean: "6430082010361" }, // 139
                { src: "Yrityskuvat/240.jpg", ean: "6430082010439" }, // 140
                { src: "Yrityskuvat/243.jpg", ean: "6430082010415" }  // 143
            ],
        },
        {
            id: "greetings-section",
            title: "Toivotukset ja Onnittelut",
            images: [
                { src: "Yrityskuvat/2.jpg", ean: "6430082010163" },   // 2
                { src: "Yrityskuvat/5.jpg", ean: "6430082010118" },   // 5
                { src: "Yrityskuvat/7.jpg", ean: "6430082010170" },   // 7
                { src: "Yrityskuvat/8.jpg", ean: "6430082010064" },   // 8
                { src: "Yrityskuvat/10.jpg", ean: "6430082010859" },  // 10
                { src: "Yrityskuvat/14.jpg", ean: "6430082010149" },  // 14
                { src: "Yrityskuvat/15.jpg", ean: "6430082010866" },  // 15
                { src: "Yrityskuvat/18.jpg", ean: "6430082010811" },  // 18
                { src: "Yrityskuvat/21.jpg", ean: "6430082010828" },  // 21
                { src: "Yrityskuvat/25.jpg", ean: "6430082010804" },  // 25
                { src: "Yrityskuvat/27.jpg", ean: "6430082010088" },  // 27
                { src: "Yrityskuvat/31.jpg", ean: "6430082010729" },  // 31
                { src: "Yrityskuvat/37.jpg", ean: "6430082010743" },  // 37
                { src: "Yrityskuvat/38.jpg", ean: "6430082010767" },  // 38
                { src: "Yrityskuvat/42.jpg", ean: "6430082010231" },  // 42
                { src: "Yrityskuvat/43.jpg", ean: "6430082010248" },  // 43
                { src: "Yrityskuvat/45.jpg", ean: "6430082010682" },  // 45
                { src: "Yrityskuvat/47.jpg", ean: "6430082010101" },  // 47
                { src: "Yrityskuvat/48.jpg", ean: "6430082010026" },  // 48
                { src: "Yrityskuvat/49.jpg", ean: "6430082010156" },  // 49
                { src: "Yrityskuvat/52.jpg", ean: "6430082010521" },  // 52
                { src: "Yrityskuvat/54.jpg", ean: "6430082010576" },  // 54
                { src: "Yrityskuvat/55.jpg", ean: "6430082010545" },  // 55
                { src: "Yrityskuvat/57.jpg", ean: "6430082010569" },  // 57
                { src: "Yrityskuvat/60.jpg", ean: "6430082010590" },  // 60
                { src: "Yrityskuvat/62.jpg", ean: "6430082010583" },  // 62
                { src: "Yrityskuvat/63.jpg", ean: "6430082010361" },  // 63
                { src: "Yrityskuvat/64.jpg", ean: "6430082010439" },  // 64
                { src: "Yrityskuvat/65.jpg", ean: "6430082010415" },  // 65
                { src: "Yrityskuvat/68.jpg", ean: "6430082010484" },  // 68
                { src: "Yrityskuvat/69.jpg", ean: "643008201446" },   // 69
                { src: "Yrityskuvat/70.jpg", ean: "6430082010422" },  // 70
                { src: "Yrityskuvat/71.jpg", ean: "6430082010408" },  // 71
                { src: "Yrityskuvat/72.jpg", ean: "6430082010187" },  // 72
                { src: "Yrityskuvat/73.jpg", ean: "6430082010392" },  // 73
                { src: "Yrityskuvat/74.jpg", ean: "6430082010378" },  // 74
                { src: "Yrityskuvat/76.jpg", ean: "6430082010750" },  // 76
                { src: "Yrityskuvat/78.jpg", ean: "6430082010385" },  // 78
                { src: "Yrityskuvat/84.jpg", ean: "6430082010972" },  // 84
                { src: "Yrityskuvat/85.jpg", ean: "6430082010996" },  // 85
                { src: "Yrityskuvat/86.jpg", ean: "6430082010927" },  // 86
                { src: "Yrityskuvat/87.jpg", ean: "6430082011047" },  // 87
                { src: "Yrityskuvat/88.jpg", ean: "6430082010934" },  // 88
                { src: "Yrityskuvat/92.jpg", ean: "6430082011177" },  // 92
                { src: "Yrityskuvat/95.jpg", ean: "6430082011146" },  // 95
                { src: "Yrityskuvat/96.jpg", ean: "6430082011115" },  // 96
                { src: "Yrityskuvat/97.jpg", ean: "6430082011184" },  // 97
                { src: "Yrityskuvat/200.jpg", ean: "6430082011276" }, // 100
                { src: "Yrityskuvat/202.jpg", ean: "6430082011559" }, // 102
                { src: "Yrityskuvat/204.jpg", ean: "6430082011191" }, // 104
                { src: "Yrityskuvat/210.jpg", ean: "6430082010941" }, // 110
                { src: "Yrityskuvat/212.jpg", ean: "6430082011252" }, // 112
                { src: "Yrityskuvat/213.jpg", ean: "6430082011238" }, // 113
                { src: "Yrityskuvat/214.jpg", ean: "6430082011511" }, // 114
                { src: "Yrityskuvat/215.jpg", ean: "6430082011337" }, // 115
                { src: "Yrityskuvat/219.jpg", ean: "6430082010958" }, // 119
                { src: "Yrityskuvat/220.jpg", ean: "6430082011382" }, // 120
                { src: "Yrityskuvat/221.jpg", ean: "6430082011320" }, // 121
                { src: "Yrityskuvat/222.jpg", ean: "6430082011375" }, // 122
                { src: "Yrityskuvat/226.jpg", ean: "6430082010095" }, // 126
                { src: "Yrityskuvat/227.jpg", ean: "6430082011436" }, // 127
                { src: "Yrityskuvat/229.jpg", ean: "6430082011474" }, // 129
                { src: "Yrityskuvat/230.jpg", ean: "6430082011443" }, // 130
                { src: "Yrityskuvat/233.jpg", ean: "6430082011481" }, // 133
                { src: "Yrityskuvat/234.jpg", ean: "7430082011504" }, // 134
                { src: "Yrityskuvat/235.jpg", ean: "6430082011498" }, // 135
                { src: "Yrityskuvat/242.jpg", ean: "6430082011467" }  // 142
            ],
        },
        {
            id: "condolences-section",
            title: "Osanotto",
            images: [
                { src: "Yrityskuvat/35.jpg", ean: "6430082010699" },  // 35
                { src: "Yrityskuvat/41.jpg", ean: "6430082010538" },  // 41
                { src: "Yrityskuvat/49.jpg", ean: "6430082010156" },  // 49
                { src: "Yrityskuvat/89.jpg", ean: "6430082011115" },  // 89
                { src: "Yrityskuvat/201.jpg", ean: "6430082011320" }, // 101
                { src: "Yrityskuvat/203.jpg", ean: "6430082011375" }, // 103
                { src: "Yrityskuvat/224.jpg", ean: "6430082011139" }, // 124
                { src: "Yrityskuvat/225.jpg", ean: "6430082011153" }, // 125
                { src: "Yrityskuvat/68.jpg", ean: "6430082010484" }   // 68

            ],
        },
        {
            id: "winter-christmas-section",
            title: "Talvi ja Joulu",
            images: [
                { src: "Yrityskuvat/1.jpg", ean: "6430082011535" },   // 1
                { src: "Yrityskuvat/13.jpg", ean: "6430082010903" },   // 13
                { src: "Yrityskuvat/19.jpg", ean: "6430082010767" },   // 19
                { src: "Yrityskuvat/20.jpg", ean: "6430082010781" },   // 20
                { src: "Yrityskuvat/34.jpg", ean: "6430082010675" },   // 34
                { src: "Yrityskuvat/39.jpg", ean: "6430082011542" },   // 39
                { src: "Yrityskuvat/50.jpg", ean: "6430082010897" },   // 50
                { src: "Yrityskuvat/81.jpg", ean: "6430082010972" },   // 81
                { src: "Yrityskuvat/82.jpg", ean: "6430082010996" },   // 82
                { src: "Yrityskuvat/83.jpg", ean: "6430082010927" },   // 83
                { src: "Yrityskuvat/91.jpg", ean: "6430082011276" },   // 91
                { src: "Yrityskuvat/97.jpg", ean: "6430082011511" },   // 97
                { src: "Yrityskuvat/208.jpg", ean: "6430082011498" },  // 108
                { src: "Yrityskuvat/211.jpg", ean: "6430082011528" },  // 111
                { src: "Yrityskuvat/217.jpg", ean: "6430082011030" }   // 117
            ],
        },
    ];

    categories.forEach(category => {
        const section = document.getElementById(category.id);
        const gallery = document.createElement("div");
        gallery.classList.add("gallery");

        category.images.forEach(image => {
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.caption;
            img.loading = "lazy";
            img.onclick = () => {
                const imageUrl = image.src;
                const eanText = encodeURIComponent(image.ean || "");
                const url = `popup.html?image=${imageUrl}&ean=${eanText}`;
                window.open(url, "_blank");
            };

            const caption = document.createElement("div");
            caption.classList.add("caption");
            caption.textContent = image.caption;

            const customText = document.createElement("div");
            customText.classList.add("custom-text");
            customText.textContent = `EAN: ${image.ean}`;

            galleryItem.appendChild(img);
            galleryItem.appendChild(caption);
            galleryItem.appendChild(customText);
            gallery.appendChild(galleryItem);
        });

        section.appendChild(gallery);
    });

    document.getElementById("Valikko").addEventListener("click", function () {
        const menu = document.getElementById("sideMenu");
        const currentTop = menu.style.top || "-400px";

        if (currentTop === "-400px") {
            menu.style.top = "0";
        } else {
            menu.style.top = "-400px";
        }
    });
});
