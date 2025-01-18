document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const packageGalleryContainer = document.getElementById("package-gallery-container");
    const totalImages = 243;
    const imagePath = "Yrityskuvat/";
    let imageCounter = 1;

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

    const imageTexts = {
        1: "EAN 6430082011535 ",
        2: "EAN 6430082010163",
        3: "EAN 6430082010965",
        4: "EAN 6430082010057",
        5: "EAN 6430082010118",
        6: "EAN 6430082010224",
        7: "EAN 6430082010170",
        8: "EAN 6430082010064",
        9: "EAN 6430082010880",
        10: "EAN 6430082010859",
        11: "EAN 6430082010842",
        12: "EAN 6430082010873",
        13: "EAN 6430082010903",
        14: "EAN 6430082010149",
        15: "EAN 6430082010866",
        16: "EAN 6430082010736",
        17: "EAN 6430082010071",
        18: "EAN 6430082010811",
        19: "EAN 6430082010767",
        20: "EAN 6430082010781",
        21: "EAN 430082010217",
        22: "EAN 6430082010828",
        23: "EAN 6430082010774",
        24: "EAN 6430082010798",
        25: "EAN 6430082010804",
        26: "EAN 6430082010835",
        27: "EAN 6430082010088",
        28: "EAN 6430082010729",
        29: "EAN 6430082010637",
        30: "EAN 6430082010705",
        31: "EAN 6430082010644",
        32: "EAN 6430082010651",
        33: "EAN 6430082010750",
        34: "EAN 6430082010675",
        35: "EAN 6430082010699",
        36: "EAN 6430082010620",
        37: "EAN 6430082010743",
        38: "EAN 6430082010668",
        39: "EAN 6430082010910",
        40: "EAN 6430082010231",
        41: "EAN 6430082010538",
        42: "EAN 6430082010033",
        43: "EAN 6430082010248",
        44: "EAN 6430082010606",
        45: "EAN 6430082010682",
        46: "EAN 6430082010613",
        47: "EAN 6430082010026",
        48: "EAN 6430082010101",
        49: "EAN 6430082010156",
        50: "EAN 6430082010897",
        51: "EAN 6430082010477",
        52: "EAN 6430082010125",
        53: "EAN 6430082010521",
        54: "EAN 6430082010576",
        55: "EAN 6430082010545",
        56: "EAN 6430082010552",
        57: "EAN 6430082010569",
        58: "EAN 6430082010491",
        59: "EAN 6430082010590",
        60: "EAN 6430082010507",
        61: "EAN 6430082010712",
        62: "EAN 6430082010583",
        63: "EAN 6430082010361",
        64: "EAN 6430082010439",
        65: "EAN 6430082010415",
        66: "EAN 6430082010453",
        67: "EAN 6430082010460",
        68: "EAN 6430082010484",
        69: "EAN 643008201446",
        70: "EAN 6430082010422",
        71: "EAN 6430082010408",
        72: "EAN 6430082010187",
        73: "EAN 6430082010392",
        74: "EAN 6430082010378",
        75: "EAN 6430082010354",
        76: "EAN 6430082010385",
        77: "EAN 6430082010910",
        78: "EAN 6430082011016",
        79: "EAN 643008201109",
        80: "EAN 6430082011054",
        81: "EAN 6430082010972",
        82: "EAN 6430082010996",
        83: "EAN 6430082010927",
        84: "EAN 6430082011047",
        85: "EAN 6430082010132",
        86: "EAN 6430082010934",
        87: "EAN 6430082011177",
        88: "EAN 6430082011146",
        89: "EAN 6430082011115",
        90: "EAN 6430082011184",
        91: "EAN 6430082011276",
        92: "EAN 6430082011283",
        93: "EAN 6430082011191",
        94: "EAN 6430082010941",
        95: "EAN 6430082011252",
        96: "EAN 6430082011238",
        97: "EAN 6430082011511",
        98: "EAN 6430082011337",
        99: "EAN 6430082010958",
        100: "EAN 6430082011382",
        101: "EAN 6430082011320",
        102: "EAN 6430082011375",
        103: "EAN 6430082010095",
        104: "EAN 6430082011436",
        105: "EAN 6430082011474",
        106: "EAN 6430082011443",
        107: "EAN 6430082011481",
        108: "EAN 7430082011504",
        109: "EAN 6430082011498",
        110: "EAN 6430082010989",
        111: "EAN 6430082011528",
        112: "EAN 6430082010194",
        113: "EAN 6430082010040",
        114: "EAN 6430082010200",
        115: "EAN 6430082010019",
        116: "EAN 6430082011027",
        117: "EAN 6430082011030",
        118: "EAN 6430082011061",
        119: "EAN 6430082011078",
        120: "EAN 6430082011085",
        121: "EAN 6430082011092",
        122: "EAN 6430082011108",
        123: "EAN 6430082011122",
        124: "EAN 6430082011139",
        125: "EAN 6430082011153",
        126: "EAN 6430082011160",      
        127: "EAN 6430082011207",     
        128: "EAN 6430082011221",
        129: "EAN 6430082011245",
        130: "EAN 6430082011269",
        131: "EAN 6430082011283",
        132: "EAN 6430082011290",
        133: "EAN 6430082011306",
        134: "EAN 6430082011313",
        135: "EAN 6430082011344",
        136: "EAN 6430082011351",
        137: "EAN 6430082011368",
        138: "EAN 6430082011399",
        139: "EAN 6430082011405",
        140: "EAN 6430082011412",
        141: "EAN 6430082011429",
        142: "EAN 6430082011450",
        143: "EAN 6430082011467",
    };
    for (let i = 1; i <= totalImages; i++) {
        if (i >= 100 && i <= 199) {
            continue;
        }

        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = `${imagePath}${i}.jpg`;
        img.alt = `Kuva ${i}`;
        img.loading = "lazy";
        img.onclick = () => {
            const imageUrl = `${imagePath}${i}.jpg`;
            const eanText = encodeURIComponent(imageTexts[imageCounter] || "");
            const url = `popup.html?image=${imageUrl}&ean=${eanText}`; 
            window.open(url, "_blank");
        };

        const caption = document.createElement("div");
        caption.classList.add("caption");
        caption.textContent = `Kuva ${imageCounter}`;

        const customText = document.createElement("div");
        customText.classList.add("custom-text");
        customText.textContent = imageTexts[imageCounter] || "";

        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        galleryItem.appendChild(customText);
        gallery.appendChild(galleryItem);

        imageCounter++;
    }

    packages.forEach(pkg => {
        const packageGallery = document.createElement("div");
        packageGallery.classList.add("package-gallery");

        pkg.images.forEach(image => {
            const packageItem = document.createElement("div");
            packageItem.classList.add("package-item");

            const img = document.createElement("img");
            img.src = `Korttipaketit/${image}`;
            img.alt = `${pkg.name} - ${image}`;
            img.loading = "lazy";
            img.onclick = () => {
                const imageUrl = `Korttipaketit/${image}`;
                const eanText = encodeURIComponent(pkg.ean);
                const url = `popup.html?image=${imageUrl}&ean=${eanText}`;
                window.open(url, "_blank");
            };

            packageItem.appendChild(img);
            packageGallery.appendChild(packageItem);
        });

        const title = document.createElement("h3");
        title.textContent = pkg.name;

        const eanCode = document.createElement("p");
        eanCode.classList.add("ean-code");
        eanCode.textContent = `EAN ${pkg.ean}`;

        packageGalleryContainer.appendChild(packageGallery);
        packageGalleryContainer.appendChild(title);
        packageGalleryContainer.appendChild(eanCode);
    });
});


document.getElementById("Valikko").addEventListener("click", function() {
    var menu = document.getElementById("sideMenu");
    var currentTop = menu.style.top || "-400px";

    if (currentTop === "-400px") {
        menu.style.top = "0"; 
    } else {
        menu.style.top = "-400px"; 
    }
});



