

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener
    ('click', function () {
        if (btnHam.className !== "") {
            btnHam.style.display =
                "none";
            btnTimes.style.display = "block";
            navBar.classList.add
                ("show-nav");
        }
    })

btntimes.addEventListener
    ('click', function ({
        if(btnHam.className !== ""
        {
                this.style.display =
                    "none";
                btnHam.style.display =
                    "block";
                navBar.classList.remove
                    ("show-nav");
            }
    }))
const banner = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
document.querySelectorAll("banner-main-contain")[0].style.color = colors[0];

document.querySelectorAll("banner-main-contain")[1].style.color = colors[1];

document.querySelectorAll("banner-main-contain")[2].style.color = colors[2];

document.querySelectorAll("banner-main-contain")[3].style.color = colors[3];

document.querySelectorAll("banner-main-contain")[4].style.color = colors[4];

document.querySelectorAll("banner-main-contain")[5].style.color = colors[5];

document.querySelectorAll("banner-main-contain")[6].style.color = colors[6];

