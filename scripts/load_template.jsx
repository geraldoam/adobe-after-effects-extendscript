var path = 'C:/Users/geral/Desktop/VideoProject/automatic.aep';

function loadTemplate(){
    importOptions.file = new File(path)
    var item = app.project.importFile(importOptions);
}

function main(path){
    loadTemplate(path);
}

main(path);