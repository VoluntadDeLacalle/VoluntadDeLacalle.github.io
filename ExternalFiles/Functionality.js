var baseURL = "https://voluntaddelacalle.github.io/";

function switchPage(evt, pageName) {
    if(pageName == index) {
        location.replace(baseURL + pageName + ".html");
    }
    else {
        location.replace(baseURL + "WebsitePages/" + pageName + ".html");
    }
}