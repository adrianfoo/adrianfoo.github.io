function admin_page_load(){
    if (localStorage !== null) {
        var selectPed = document.getElementById("mod_ped");
        var selectVeh = document.getElementById("mod_veh");
        var selectEnv = document.getElementById("mod_env");
        
        var pedvalue = localStorage.getItem("modified_pedestrian_no");
        var vehvalue = localStorage.getItem("modified_vehicle_no");
        var envvalue = localStorage.getItem("modified_environment");
        if (pedvalue=="100"){
            selectPed.selectedIndex=0;
        }else if(pedvalue=="150"){
            selectPed.selectedIndex=1;
        }else if(pedvalue=="200"){
            selectPed.selectedIndex=2;
        }
        if (vehvalue=="100"){
            selectVeh.selectedIndex=0;
        }else if(vehvalue=="150"){
            selectVeh.selectedIndex=1;
        }else if(vehvalue=="200"){
            selectVeh.selectedIndex=2;
        }
        if (envvalue=="day_time"){
            selectEnv.selectedIndex=0;
        }else if(envvalue=="night_time"){
            selectEnv.selectedIndex=1;
        }
    }
}

