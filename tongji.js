$(document).ready(function () {
    $.get("http://localhost:8000/dig",
        {
            "time":gettime(),
            "url":geturl(),
            "refer":getrefer(),
            "ua":getuser_agent()
        }
    )
    function gettime(){
        var nowDate = new Date();
        return nowDate.toLocaleString();
    }
    function geturl(){
        return window.location.href;
    }
    function getip(){
        return returnCitySN["cip"]+','+returnCitySN["cname"];
    }
    function getrefer(){
        return document.referrer;
    }
    function getcookie(){
        return document.cookie;
    }
    function getuser_agent(){
        return navigator.userAgent;
    }
})
