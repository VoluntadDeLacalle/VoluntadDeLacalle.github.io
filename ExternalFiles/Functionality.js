var baseURL = "https://voluntaddelacalle.github.io/";

function switchPage(evt, pageName) {
    if(pageName == "index") {
        location.replace(baseURL + pageName + ".html");
    }
    else {
        window.location.replace(baseURL + "WebsitePages/" + pageName + ".html");
    }
}

function OpenPopup(overlayNumber) {
    let element = document.getElementById('overlay' + overlayNumber)
    element.style.display = 'block'

    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
    };
}

function ClosePopup(overlayNumber) {
    let element = document.getElementById('overlay' + overlayNumber)
    element.style.display = 'none'

    window.onscroll = function() {};
}

/*const DontHideGallery = new Viewer(document.getElementById('dontHideViewerImages'), {
    inline: true,
    viewed() {
      viewer.zoomTo(1);
    },
  });*/