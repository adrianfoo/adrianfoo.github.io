function modify_Game_environment(){
    var noOfPed = document.getElementById("mod_ped");
    var noOfPedvalue = noOfPed.options[noOfPed.selectedIndex].value;
    if (noOfPedvalue=="100"){
        noOfPed.selectedIndex=0;
    }else if(noOfPedvalue=="150"){
        noOfPed.selectedIndex=1;
    }else if(noOfPedvalue=="200"){
        noOfPed.selectedIndex=2;
    }
    var noOfVeh = document.getElementById("mod_veh");
    var noOfVehvalue = noOfVeh.options[noOfVeh.selectedIndex].value;
    if (noOfVehvalue=="100"){
        noOfVeh.selectedIndex=0;
    }else if(noOfVehvalue=="150"){
        noOfVeh.selectedIndex=1;
    }else if(noOfVehvalue=="200"){
        noOfVeh.selectedIndex=2;
    }
    var environment = document.getElementById("mod_env");
    var environmentvalue = environment.options[environment.selectedIndex].value;
    if (environmentvalue=="day_time"){
        environment.selectedIndex=0;
    }else if(environmentvalue=="night_time"){
        environment.selectedIndex=1;
    }
    sessionStorage.setItem("modified_pedestrian_no", noOfPedvalue);
    sessionStorage.setItem("modified_vehicle_no", noOfVehvalue);
    sessionStorage.setItem("modified_environment", environmentvalue);
    alert("Game State Saved!\n");
}
