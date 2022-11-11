function navbar(){


    return `
    <div id="logo">
            <img src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png" alt="" id="icon">
        </div>
        <ul id="navArea">
            <li><a href="diary.html" style="text-decoration:none;color:rgb(225, 95, 44)">Diary</a></li>
            <li>Trends</li>
            <li>Foods</li>
            <li>Settings</li>
            <li><a href="plans.html" style="text-decoration:none;color:rgb(225, 95, 44)">Plans</a></li>
            <li><a href="help.html" style="text-decoration:none;color:rgb(225, 95, 44)">Help</a></li>
        </ul>
    `
}

export { navbar }