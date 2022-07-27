import { configuration } from "./configuration.js";
import { powerOff } from "./powerOff.js";
import { recovery } from "./recovery.js";
import { system } from "./system.js";

function bootloader(){

    $("main").append(`
    <h1 class="boot_text">SysBoot v1.0</h1>
    <p class="boot_paragraph">Choose a boot option</p>

    <div id="boot">
        <ul class="options">
            <li class="option option-default" id="Win12"><img src="https://kenan862.github.io/12.5/sys_assets/home.png"/>&nbsp;&nbsp;Windows Installer</li>
            <li class="option" id="recovery"><img src="https://kenan862.github.io/12.5/sys_assets/recovery.png"/>&nbsp;&nbsp;Recovery Mode</li>
            <li class="option" id="config"><img src="https://kenan862.github.io/12.5/sys_assets/recovery.png"/>&nbsp;&nbsp;Boot Config</li>
            <li class="option" id="power_off"><img src="https://kenan862.github.io/12.5/sys_assets/poweroff.png"/>&nbsp;&nbsp;Shut Down</li>
        </ul>
    </div>`);

    let keycode = 0;
    document.onkeydown = function (event) {
        switch (event.keyCode) {
           case 38:
              if($(".options").children().eq(keycode).hasClass("option-default")){
                $(".options").children().eq(keycode).removeClass("option-default")      
                keycode--;
                $(".options").children().eq(keycode).addClass("option-default");  
            }else{
                keycode--;
                $(".options").children().eq(keycode).addClass("option-default");
            }
              break;
           case 40:
            if($(".options").children().eq(keycode).hasClass("option-default")){
                $(".options").children().eq(keycode).removeClass("option-default")      
                keycode++;
                $(".options").children().eq(keycode).addClass("option-default");  
            }else{
                keycode++;
                $(".options").children().eq(keycode).addClass("option-default");
            }
              break;
            case 13:
                if($(".options").children().eq(keycode).attr("id") == "Win12"){
                    system();
                }
                if($(".options").children().eq(keycode).attr("id") == "recovery"){
                    recovery();
                }
                if($(".options").children().eq(keycode).attr("id") == "config"){
                    configuration();
                }
                if($(".options").children().eq(keycode).attr("id") == "power_off"){
                    powerOff();
                }
            break;    
        }
        if(keycode > 3){
            keycode = -1;
        }else if(keycode < 0){
            keycode = 4;
        }
    } 

}
export{bootloader}