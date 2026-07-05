// ===============================
// LOADING SCREEN
// ===============================

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loading").style.display = "none";

        }, 1500);

    }, 2500);

};

// ===============================
// BIRTHDAY MESSAGE
// ===============================

const message = `Happy Birthday My Princess ❤️

Today is all about you.

I thank God for bringing such a beautiful, caring and amazing person into my life.

Your smile gives me peace.
Your laughter makes my days brighter.
Your love makes me a better person.

On your special day, I pray that God blesses you with long life, happiness, success, peace and everything your heart desires.

Always remember...

No matter what happens...

No matter where life takes us...

You will always have a special place in my heart.

Thank you for being you.

Happy Birthday once again, Princess.

Forever Yours,

Victor ❤️`;

let index = 0;

// ===============================
// OPEN GIFT
// ===============================

function openGift() {

    const lid = document.querySelector(".giftLid");
    const music = document.getElementById("bgMusic");

    lid.style.transform = "rotateX(-150deg) translateY(-40px)";

    music.play().catch(() => {});

    setTimeout(() => {

        document.getElementById("page1").classList.remove("active");
        document.getElementById("page2").classList.add("active");

        typeMessage();

    }, 1800);

}

// ===============================
// TYPEWRITER EFFECT
// ===============================

function typeMessage() {

    const box = document.getElementById("message");

    box.innerHTML = "";

    index = 0;

    const timer = setInterval(() => {

        if (index < message.length) {

            box.innerHTML += message.charAt(index);

            index++;

        } else {

            clearInterval(timer);

            document.querySelector("#page2 button").style.display = "inline-block";

        }

    }, 35);

}

// ===============================
// SHOW GALLERY
// ===============================

function showGallery() {

    document.getElementById("page2").classList.remove("active");

    document.getElementById("page3").classList.add("active");

}

// ===============================
// SHOW FINAL PAGE
// ===============================

function showFinal() {

    document.getElementById("page3").classList.remove("active");

    document.getElementById("page4").classList.add("active");

}

// ===============================
// PHOTO CLICK EFFECT
// ===============================

const photos = document.querySelectorAll(".carousel img");

photos.forEach(photo => {

    photo.addEventListener("click", function () {

        photos.forEach(img => img.style.transform = "");

        this.style.transform += " scale(1.15)";

    });

});