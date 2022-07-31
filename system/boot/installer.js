import { bootConfig } from "./bootConfig.js";

function installer() {
  let main = $("main");

  main.empty().append(`<div id="installer"></div>`).css("cursor", "default");

  let installer = $("#installer");

  installer.hide();

  setTimeout(() => {
    installer
      .fadeIn()
      .append(
        `<p id="installerText" style="display:inline;" class="text-light display-6 m-0 mb-5"><img style="height="35px" src="https://kenan862.github.io/12.5/sys_assets/home.png"/>&nbsp;Windows</p><button type="button" class="btn btn-outline-light text-light installerButton">Next</button>`
      );

    let installerText = $("#installerText").hide();
    let installerButton = $(".installerButton").hide();

    setTimeout(() => {
      installerText.fadeIn();
      installerButton.fadeIn();
      $(document).on("click", ".installerButton", () => {
        installerText.fadeOut();
        installerButton.fadeOut(() => {
          installer
            .addClass("bg-light")
            .css({
              height: "75%",
              width: "75%",
              transition: "0.5s",
            })
            .empty().append(`
                    <div class="installer_main">
                        <section class="panel_1"><img class="h-50 animation" src="https://raw.githubusercontent.com/Kenan862/System-Assets/main/earth.gif"/></section>
                        <section class="panel_2 flex-column">
                            <p class="display-6 header_text">Choose your region</p>    
                            <div class="d-grid gap-1 card region_block overflow-auto m-3 rounded-lg h-50 w-75 p-2 shadow">
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Afghanistan</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Albania</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Algeria</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Andorra</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Angola</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Argentina</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Australia</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Austria</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Azerbaijan</div>

                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Bahamas</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Bahrain</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Bangladesh</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Belarus</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Belgium</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Bolivia</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Brazil</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Brunei</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Bulgaria</div>
                                
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Cambodia</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Cameroon</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Canada</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">China</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Colombia</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Costa Rica</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Croatia</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Cuba</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">Czechia (Czech Republic)</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">United States</div>
                                <div class="card shadow rounded-lg w-100 opt option" style="height:50px">United Kingdom</div>




                                
                            </div>
                            <button type="button" class="btn m-3 btn-success regionBtn">Next</button>
                        </section>
                    </div> 
                `);

          $(document).on("click", ".opt", (e) => {
            $(".opt").removeClass("bg-success text-white");
            $(e.target).addClass("bg-success text-white");
          });

          $(document).on("click", ".option", (e) => {
            $(document).one("click", ".regionBtn", () => {
              let regionItem = $(e.target).text();
              localStorage.setItem("region", regionItem);
              let src =
                "https://raw.githubusercontent.com/Kenan862/System-Assets/main/language.gif";
              $(".regionBtn").remove();
              $(".header_text").hide("slow");
              $(".animation").hide("fast");
              $(".panel_2").empty().fadeOut();
              setTimeout(() => {
                $(".panel_2").fadeIn(() => {
                  $(".panel_2").empty()
                    .append(`<p class="display-6 header_text">Choose your language</p>    
                                <div class="d-grid gap-1 overflow-auto card language_block m-3 rounded-lg h-50 w-75 p-2 shadow">
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Albanian</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Amharic</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Arabic</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Assamese</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Azerbaijani (Latin)</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Bangla (India)</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Basque</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Belarusian</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Bosnian (Latin)</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Bulgarian</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Catalan</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Chinese Simplified</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Chinese Traditional</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Czech</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Danish</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Dutch</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">English</div>
                                  <div class="card shadow rounded-lg w-100 opt option2" style="height:50px">Estonian</div>
                                </div>
                                <button type="button" class="btn m-3 btn-success languageBtn">Next</button>`);

                  $(".header_text").show("slow");
                  $(".animation").show("slow");
                  $(".animation").attr("src", src);
                });
              }, 1000);
            });
          });

          $(document).on("click", ".option2", (e) => {
            $(document).one("click", ".languageBtn", () => {
              let languageItem = $(e.target).text();
              localStorage.setItem("language", languageItem);
              let src =
                "https://raw.githubusercontent.com/Kenan862/System-Assets/main/document.gif";
              $(".languageBtn").remove();
              $(".header_text").hide("slow");
              $(".animation").hide("fast");
              $(".panel_2").empty().fadeOut();

              setTimeout(() => {
                $(".panel_2").fadeIn(() => {
                  $(".panel_2").empty()
                    .append(`<p class="display-6 header_text">License Terms</p>    
                                <div class="card agree_block overflow-auto m-3 rounded-lg h-50 w-75 p-2 shadow">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel mollis sem, vitae suscipit diam. Nam vitae maximus ante. Sed interdum ante mi, sit amet mattis quam mollis nec. Aenean libero mauris, efficitur ac est et, pharetra molestie ipsum. Pellentesque lobortis lobortis lorem. Sed ornare vestibulum odio ac efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id gravida turpis, vitae consectetur lacus.

                                    Pellentesque nec cursus mi. Aliquam posuere, magna eget iaculis consequat, urna augue molestie nisi, quis porttitor massa lorem ac nisi. Pellentesque euismod venenatis viverra. Fusce sed nisl eget velit dapibus congue vel non ligula. Donec imperdiet iaculis velit, quis dictum purus eleifend eget. Sed maximus, nibh quis viverra posuere, risus eros ornare tellus, vel scelerisque tellus enim et tellus. Vivamus mi nulla, pellentesque non dolor id, pretium consectetur mauris. </p>
                                </div>
                                <button type="button" class="btn m-3 btn-success agreementBtn">Agree</button>`);

                  $(".header_text").show("slow");
                  $(".animation").show("slow");
                  $(".animation").attr("src", src);
                });
              }, 1000);
            });
          });
          $(document).one("click", ".agreementBtn", () => {
            let src =
              "https://raw.githubusercontent.com/Kenan862/System-Assets/main/upgrade.png";
            let src2 =
              "https://raw.githubusercontent.com/Kenan862/System-Assets/main/advanced.png";
            $(".agreementBtn").remove();
            $(".header_text").hide("slow");
            $(".animation").hide("fast");
            $(".panel_2").empty().fadeOut();
            setTimeout(() => {
              $(".panel_2").fadeIn(() => {
                $(".panel_1").hide();
                $(".panel_2").empty()
                  .append(`<p class="display-6 header_text">Select Windows Installation</p>    
                           <p class="win_text"></p>
                    <div class="d-flex justify-content-center align-items-center h-25 w-50 m-5 gap-2 p-3">
                        <button id="btn_1" class="btn btn-outline-success outline-0" type="button"><img src="${src}" alt="Upgrade to Windows 12" style="height:150px;"/></button>
                        <button id="btn_2" class="btn btn-outline-success outline-0" type="button"><img src="${src2}" alt="Custom Installation" style="height:150px;"/></button>
                      </div>

                      
                    `);

                    let win_text = $(".win_text");

                    $(document).on("mouseenter", "#btn_1", ()=>{
                      win_text.text("Upgrade Windows");
                    });
                    
                    $(document).on("mouseenter", "#btn_2", ()=>{
                      win_text.text("Custom Installation");
                    });

                    $(document).on("click", "#btn_1", ()=>{
                      let src="https://raw.githubusercontent.com/Kenan862/System-Assets/main/loader.gif";
                      $(".header_text").hide("slow");
                      $(".animation").hide("fast");
                      $(".panel_2").empty().fadeOut();
                      setTimeout(() => {
                        $(".header_text").show("slow");
                        $(".animation").show("slow");
                        $(".animation").removeClass("h-50").addClass("h-25").attr("src", src);
                        $(".panel_1").show("slow");
                        $(".panel_2").fadeIn(()=>{
                          $(".panel_2").empty().append(`
                            <p class="display-6 header_text">Upgrading Windows</p>    
                        `);

                          returnV();

                          let text = "Installing Windows";

                          setTimeout(() => {
                            text = "Almost There";
                            $("#installer").fadeOut(()=>{
                                setTimeout(() => {
                                  bootConfig();
                                }, 2000);
                            });
                          }, 10000);

                          function returnV() {
                            setTimeout(() => {
                              $(".header_text").text(`${text}`);
                                setTimeout(() => {
                                  $(".header_text").text(`${text}.`);
                                    setTimeout(() => {
                                      $(".header_text").text(`${text}..`);
                                        setTimeout(() => {
                                          $(".header_text").text(`${text}...`);
                                          setTimeout(() => {
                                            returnV();
                                          }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                          }
                        
                        });
                      }, 1000);
                    });
                    
                    $(document).on("click", "#btn_2", ()=>{
                      alert("Coming Soon")
                    });

                $(".header_text").show("slow");
                $(".animation").show("slow");
                $(".animation").attr("src", src);
              });
            }, 1000);
          });
        });
      });
    }, 2000);
  }, 2000);
}

export { installer };
