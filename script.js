let createCard = (title, cName, views, monthsOld, duration, thumbNail) => {
    let viewStr = views / 1000 + "K";
    if (views < 1000) {
        viewStr = views;
    } else if (views >= 1000000) {
        viewStr = views / 1000000 + "M";
    } else {
        viewStr = views / 1000 + "K";
    }


    let html = `<div class="card">
    <div class="image">
        <img src="${thumbNail}" alt="img">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

createCard("Introduction to Programming | Web Development Bootcamp 2023", "CodeWithFaizan", "211", "1" , "15:30", "https://www.careergirls.org/wp-content/uploads/2015/06/Computer_Programmer1920X10180.jpg");

createCard("Introduction to Programming | Web Development Bootcamp 2023", "CodeWithFaizan", "1000", "1" , "1:25:00", "https://www.careergirls.org/wp-content/uploads/2015/06/Computer_Programmer1920X10180.jpg");

createCard("Introduction to Programming | Web Development Bootcamp 2023", "CodeWithFaizan", "1080000", "1" , "7:17", "https://www.careergirls.org/wp-content/uploads/2015/06/Computer_Programmer1920X10180.jpg");