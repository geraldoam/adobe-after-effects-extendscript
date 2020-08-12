app.beginUndoGroup("My Script in Action"); // recomendate to all big actions in your script

var selected = app.project.activeItem.selectedProperties; // return array with actual element select informations
if (selected.length == 0){
    alert("Please select a property.");
} else {
    selected[0].setValue(50);
    // for(var i = 0; i < selected.length; i++){
    //     selected[i].setValue(50);
    // }
}

app.endUndoGroup(); // end big actions
