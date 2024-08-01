let clock = document.getElementById("clock")

function clocks()
{
    let now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

    if(hours > 12)
    {
        hours = hours - 12;
    }

    if(hours < 10)
    {
        hours = "0" + hours;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(minutes == 0)
    {
        minutes = "00";
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }

    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`
}

window.onload = function()
{
    setInterval(clocks, 500)
}