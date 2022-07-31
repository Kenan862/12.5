import { main_application } from "../app/main_application.js";

function bootConfig() {
   let osV = "https://raw.githubusercontent.com/Kenan862/System-Assets/main/logo2.png";
   let osL = "https://raw.githubusercontent.com/Kenan862/System-Assets/main/loader.gif";

   $("main").css({
    "background":"black",
    "cursor":"none"
   }).empty().append(`
       <img id="osLogo" style="height:400px; transform:translateY(-150px); margin:150px" src="${osV}"/>
       <img id="osLoader" style="height:70px; margin:15px;" src="${osL}"/>
       <p class="textLoader" style="color:#fff; font-size:30px;">Starting Services</p>
   `);

   setTimeout(() => {
    $(".textLoader").text("Installing drivers");
    setTimeout(() => {
        $("main").addClass("active_main").empty().append(`<div class="desktop"></div>
        <div class="taskbar_area">
            <div class="taskbar_1 shadow-lg">
                <div class="taskbar_btn" id="start_btn"></div>
                <div class="taskbar_btn" id="search_btn"></div>
                <div class="taskbar_btn" id="task_view_btn"></div>
            </div>
            <div class="taskbar_2 shadow-lg">
                <div class="taskbar_btn" id="file_explorer_btn"></div>
                <div class="taskbar_btn" id="microsoft_edge_btn"></div>
                <div class="taskbar_btn" id="microsoft_store_btn"></div>
                <div class="taskbar_btn" id="microsoft_defender_btn"></div>
                <div class="taskbar_btn" id="microsoft_settings_btn"></div>
            </div>
            <div class="taskbar_3 shadow-lg">
                <div class="taskbar_btn" id="more_options_btn"><i class="fal fa-angle-up"></i></div>
                <div class="taskbar_btn" id="control_panel_btn"><i class="fal fa-sliders-h"></i></div>
                <div class="taskbar_btn" id="windows_peek_btn"><i class="fal fa-bell"></i></div>
            </div>
        </div>`).css({
            "background":"url('https://raw.githubusercontent.com/Kenan862/System-Assets/main/background-light.png') center / cover no-repeat",
            "cursor":"default",
        });
        main_application();
    }, 2000);
   }, 2000);

}

export{bootConfig}