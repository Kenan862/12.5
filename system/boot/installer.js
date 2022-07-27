function installer() {
    let main = $("main");

    main.empty().append(`<div id="installer"></div>`).css("cursor", "default");

    let installer = $("#installer");

    installer.hide()


    setTimeout(() => {
        installer.fadeIn().append(`<p id="installerText" style="display:inline;" class="text-light display-6 m-0 mb-5"><img style="height="35px" src="https://kenan862.github.io/12.5/sys_assets/home.png"/>&nbsp;Windows</p><button type="button" class="btn btn-outline-light text-light installerButton">Next</button>`);

        let installerText = $("#installerText").hide();
        let installerButton = $(".installerButton").hide();

        setTimeout(() => {
            installerText.fadeIn();
            installerButton.fadeIn();
            $(document).on("click", ".installerButton", () => {
                installerText.fadeOut();
                installerButton.fadeOut(()=>{
                    installer.css({
                        "height":"90%",
                        "width":"90%",
                        "transition":"0.5s"
                    });
                });            
            });
        }, 2000);
    }, 2000);


}

export {
    installer
}