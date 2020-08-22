var path = './template.aep';
var jsonFile = File("./ranking.json");

function loadTemplate(){
    importOptions.file = new File(path)
    var item = app.project.importFile(importOptions);
}

function main(path){
    loadTemplate(path);
}

main(path);