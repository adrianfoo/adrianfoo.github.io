function navigate_watchTutorial(){
    window.location = "player_tutorial.html"; // Redirecting to tutorial page.
}

function navigate_selectLevel(){
    window.location = "player_level.html"; // Redirecting to select page.
}

function navigate_viewScore(){
    window.location = "player_score.html"; // Redirecting to score page.
}

function navigate_Setting(){
    window.location = "player_setting.html"; // Redirecting to setting page.
}

function navigate_home(){
    window.location = "player_menu.html"; // Redirecting to home
}

function navigate_game(){
    var level_select_html = document.getElementById("player_level_Selected");
    var level_selected = level_select_html.options[level_select_html.selectedIndex].value;
    var veh_number = sessionStorage.getItem("modified_vehicle_no");
    if (level_selected=="level1"){
        if(veh_number <= 100){
           window.location = "scene1.html"; // Redirecting to scene 1
        }
        else{
           window.location = "scene1_admin.html"; // Redirecting to edited scene 1
        }
        
    } else if(level_selected=="level2"){
        window.location = "scene2.html"; // Redirecting to scene 2
    } else if(level_selected=="level3"){
        window.location = "scene3.html"; // Redirecting to scene 3
    }
}

function navigate_index(){
    window.location ="index.html"; //Redirecting to login page
}



