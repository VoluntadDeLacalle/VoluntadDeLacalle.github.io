var baseURL = "https://voluntaddelacalle.github.io/";

function switchPage(evt, pageName) {
    if(pageName == "index") {
        location.replace(baseURL + pageName + ".html");
    }
    else {
        location.replace(baseURL + "WebsitePages/" + pageName + ".html");
    }
}

function OpenPopup() {
    let element = document.getElementById('overlay1')
    element.style.display = 'block'
  }

  function ClosePopup() {
    let element = document.getElementById('overlay1')
    element.style.display = 'none'
  }