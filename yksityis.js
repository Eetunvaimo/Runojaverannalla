document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const packageGalleryContainer = document.getElementById("package-gallery-container");
    const totalImages = 40;
    const imagePath = "Yksityiskuvat/";
    let imageCounter = 1;


    const imageTexts = {
        1: "EAN 6430082011290",
        2: "EAN 6430082011467",
        3: "EAN 6430082011375",
        4: "EAN 6430082011474",
        5: "EAN 6430082011436",
        6: "EAN 6430082011511",
        7: "EAN 6430082011276",
        8: "EAN 6430082010385",
        9: "EAN 6430082010354",
        10: "EAN 6430082010378",
        11: "EAN 6430082010422",
        12: "EAN 643008201446",
        13: "EAN 6430082010545",
        14: "EAN 6430082010729",
        15: "EAN 6430082010163",
        16: "EAN 6430082010064",
        17: "EAN 6430082010170",
        18: "EAN 6430082010149",
        19: "EAN 6430082010736",
        20: "EAN 6430082010071",
        21: "EAN 430082010217",
        22: "EAN 6430082010774",
        23: "EAN 6430082010088",
        24: "EAN 6430082010750",
        25: "EAN 6430082010033",
        26: "EAN 6430082010026",
        27: "EAN 6430082010125",
        28: "EAN 6430082010569",
        29: "EAN 6430082010491",
        30: "EAN 6430082010361",
        31: "EAN 6430082010187",
        32: "EAN 6430082010132",
        33: "EAN 6430082010934",
        34: "EAN 6430082011283",
        35: "EAN 6430082011337",
        36: "EAN 6430082010095",
        37: "EAN 6430082011498",
        38: "EAN 6430082010040",
        39: "EAN 6430082010200",
        40: "EAN 6430082011085",
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

