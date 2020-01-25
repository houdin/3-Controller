var proj = app.project;
var renderSet = "av_export";

var file;
var dossier;
var exportComp;

//var widthCompExport= 1920;
//var heightCompExport= 1080;
//var timeCompExport = 12;

var compTxt;

var openClass;
var fileClass;
var nomComp;


var widthComp = 1920;
var heightComp = 1080;
var fpsComp = 25;

//----------- NEW FILE ------------------------


#include "3-Controller/lib/func.jsx"



//--------------------------------------------



//--------------------------------------------

function writter() {
    // if (fileOpn!=null) {
    //   fileOpn.open("e","","");
    //   fileOpn.encoding= 'UTF8';
    //   fileOpn.writeln(this.text);
    //   fileOpn.close();
    // } else {
    //   alert("aucun fichier");
    // }
    nomInvite = this.text;
};
// function writter() {
//     var nomText = "";
//     nomText = this.text.toLowerCase();
//     nomInvite = trim(nomText);
//     numNom = nomInvite.split(' ');
// }


function readTxt() {
    //  $.evalFile("/c/Program Files/Adobe/Adobe After Effects CC 2017/Support Files/Scripts/ScriptUI Panels/AvantApres/AV_App.txt");
    //var fileEval= eval("text2");
    //eval("text2");

    //setRead();


    var code1 =
        "var nom = \"" + nomInvite + "\";\
eval(\"@JSXBIN@ES@2.0@MyBbyBn0ABJAnAXzBhQBfEXzFjTjQjMjJjUCfjzDjOjPjNDfRBFeBhAff0DzAEByB\")";
    //nom.split(\" \")[0];
    var code2 =
        "var nom = \"" + nomInvite + "\";\
eval(\"@JSXBIN@ES@2.0@MyBbyBn0ACJAnASzEjEjBjUjBByBEXzFjTjQjMjJjUCfjzDjOjPjNDfRBFeBhAffnftOBbyCn0ABJCnAFe0ACzChdhdEXzGjMjFjOjHjUjIFfVBfyBnndBODbyEn0ABJEnAXzBhRGfVBfyBACEXFfVBfyBnndCOFbyGn0ABJGnACzBhLHCHXGfVBfyBnneBhAXzBhSIfVBfyBnnACEXFfVBfyBnndDOHbyIn0ABJInACHCHCHCHXGfVBfyBnneBhAXIfVBfyBnnnneBhAXzBhTJfVBfyBnnACEXFfVBfyBnndEnABB40BiAABAzAKByB\")";

    for (var i = 1; i <= proj.numItems; i++) {
        if (proj.item(i).name === "NOM_invite" && proj.item(i) instanceof CompItem) {
            compTxt = proj.item(i);
            compTxt.openInViewer();
            compTxt.layer(2).text.sourceText.expression = code1;
            compTxt.layer(3).text.sourceText.expression = code2;
            break;
        } else if (i == proj.numItems) {
            alert("La compositon \"NOM_invite\" n'esiste pas !");
        }
    }

};

//--------------------------------------
function toFileImport() {
    var numBtn = this.parent.parent.index + 1;

    var nom = "PROG_row_pic_" + numBtn;

    fileImportedSet(nom, "IMPORT IMAGE");
}
//-----------------------------


//------------------------------------------------------------


function openXport() {


    var projPathData = proj.file.fsName.split(proj.file.name)[0];
    var projPath;
    if (projPathData.indexOf(":") >= 0) {
        var lowD = projPathData.split(":")[0].toLowerCase();
        var RestPath = projPathData.split(":")[1];
        projPath = "/" + lowD + "/" + RestPath.replace(/\\/g, "/").replace("////g", "");
    } else {
        projPath = "/" + projPathData.replace(/\\/g, "/").replace("////g", "");
    };

    var folderRender = new Folder(projPath + "Rendu_AV");
    if (!folderRender.exists) {
        folderRender.create()
    };


    if (this.text == "Rendu") {


        //alert(folderRender.absoluteURI+"/"+nomInvite.split(' ')[0]+"_AvantAprès.mov");
        if (exportComp != null && exportComp.layers.length > 0) {
            if (nomInvite != "Entrer nom" && nomInvite != "") {
                var rq_item = proj.renderQueue.items.add(exportComp);
                var myRSTemplates = rq_item.outputModule(1).templates;
                var foundTemplate = false;

                for (var i = 0; i <= myRSTemplates.length; i++) {
                    if (myRSTemplates[i] == renderSet) {
                        foundTemplate = true;
                        break;
                    }
                }
                if (foundTemplate) {
                    rq_item.outputModule(1).applyTemplate(renderSet);
                    var nomB = "BAMBA HAMED"
                    rq_item.outputModule(1).file = File(folderRender.absoluteURI + "/" + nomInvite.split(' ')[0] + "_AvantAprès.mov");
                    rq_item.render = true;
                    proj.renderQueue.render();

                } else {
                    alert('Le module d\'exportation \"av_export" est absent !');
                }

            } else {
                alert('Appliquer le nom de l\'INVITE');
            }
        } else {
            alert("Aucun calque dans la compositon \"AVANT-APRES\" !");
        };
    }

}
//---------------------------------------------------

//-----------------------------------------------------

#include "3-Controller/lib/ui.jsx"





//
// function selectFold(){
//   var myFolder = Folder.selectDialog ("Select a folder");
//   if(myFolder != null){
//     if(myFolder instanceof Folder){// <-- This is not really needed
//     alert("path: " + myFolder.path);
//     alert("fsName: " + myFolder.fsName);
//     alert("fullName: " + myFolder.fullName);
//     alert("name: " + myFolder.name);
//     }
// }
// }