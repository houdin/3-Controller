var proj = app.project;


//////////////////////////////////////////////////////
///// FILE IMPORTER
function fileImporter() {
    openClass = proj.importFileWithDialog();

    if (openClass.length === 1) {
        fileClass = openClass[0];
    }
    return fileClass;
}


//--- FIND FOLDER FUNCTION /////////////////////////
function findFolder(foldName, switcher, parent) {
    var folder;
    for (var i = 1; i <= proj.numItems; i++) {
        if (proj.item(i).name == foldName && proj.item(i) instanceof FolderItem) {
            folder = proj.item(i)
            if (parent != undefined) {
                folder.parentFolder = parent;
                break;
            } else {
                break;
            }
        } else if (i == proj.numItems && switcher != undefined && switcher == true) {
            folder = proj.items.addFolder(foldName)
            if (parent != undefined) {
                folder.parentFolder = parent;
                break;
            } else {
                break;
            }
        } else if (i == proj.numItems) {
            alert('le dossier "' + foldName + '" est absent !')


        }
    }

    return folder;
}


////////////////////////////////////////////////
///// FILE IMPORT SETTER

//-----------------------------------
function fileImportedSet(compName, folderName) {

    var fileClass = fileImporter();

    var comp = findComp(compName)

    fileClass.parentFolder = findFolder(folderName);

    addFileToComp(fileClass, comp);

    fileClass = new Array;
}
//------------------------------------------------------
//////////////////////////////////////////
/// FIND COMP FUNCTION ////////////////////////////

function findComp(compNom, widthComp, heightComp, timeComp, fpsComp, parent) {
    var compItm;
    for (var i = 1; i <= proj.numItems; i++) {
        if (proj.item(i).name == compNom && proj.item(i) instanceof CompItem) {
            compItm = proj.item(i);
            break
            // compItm.motionBlur = true;
        } else if (i === proj.numItems && widthComp != undefined) {
            compItm = proj.items.addComp(name, widthComp, heightComp, 1, timeComp, fpsComp);
            if (parent != undefined) {
                compItm.parentFolder = parent;
                break;
            } else {
                break;
            }
        } else if (i === proj.numItems) {
            alert('la compostion "' + compNom + '" est absente')
        };
    }

    return compItm;
};

////////////////////////////////////////
//// OPEN COMP
function openComp(compName) {
    comp = findComp(compName)

    comp.openInViewer();

}
////////////////////////////////////////////////////

//////////////////////
//// FIT TO COMP

function ratioToComp(fileImported, widthComp, heightComp) {
    var compare = numCompare(fileImported.width, fileImported.height)

    var ratio

    if (fileImported.width == widthComp && fileImported.height == heightComp) {
        return ratio = 1
    } else if (fileImported.width < widthComp && fileImported.height < heightComp) {
        ratio = widthComp / fileImported.width

    } else if (fileImported.width > widthComp && fileImported.height > heightComp) {
        ratio = widthComp / fileImported.width


    } else if (!compare) {
        ratio = widthComp / fileImported.width
    }

    if (compare && ((fileImported.height * ratio) < heightComp)) {
        ratio = heightComp / fileImported.height

    }

    return ratio

}



///////////////////////////////////////////////////////
////// ADD FILE TO COMP

//-----------------------------------------------------
function addFileToComp(fileImported, comp) {

    var ratio = ratioToComp(fileImported, comp.width, comp.height)

    var codePos =
        'var x = (thisComp.width /2)  + effect("Position X")(1);\
var y = (thisComp.height /2) + effect("Position Y")(1);\
[x, y]';
    var codeSc =
        'var x = ' + (100 * ratio) + ' + effect("Scale")(1);\
[x, x]';


    layerDeleter(comp)

    comp.layers.add(fileImported);

    addControler(comp, 1, 'Slider', 'Position X', 0)
    addControler(comp, 1, 'Slider', 'Position Y', 0)
    addControler(comp, 1, 'Slider', 'Scale', 0)

    layerSetParam(comp, 1, 'scale', codeSc);
    layerSetParam(comp, 1, 'position', codePos);

    //comp.layers[1].inPoint = 3;


}

////////////////////////////////////////////////////////
////////// LAYER PARAMETERS SETTINGS
function layerSetParam(comp, layerName, param, valeur) {
    comp = comp instanceof CompItem ? comp : findComp(comp)
    layeur = comp.layer(layerName) != null ? comp.layer(layerName) : null;

    if (layeur != null) {
        if (param != null) {
            switch (param) {
                case "scale":
                    val = valeur != null ? valeur : 100

                    if (valeur) {
                        layeur.transform.scale.expression = val.toString();
                    }
                    break;
                case "position":
                    val = valeur != null ? valeur : [comp.width / 2, comp.height / 2]

                    if (valeur) {
                        layeur.transform.position.expression = val.toString();
                    }
                    break;
                case "opacity":
                    val = valeur != null ? valeur : 100

                    if (valeur) {
                        layeur.transform.opacity.expression = val;
                    }
                    break;
                case "sourceText":
                    val = valeur != null ? valeur : "Vide"

                    if (valeur) {
                        layeur.text.sourceText.expression = '"' + val.toString() + '"';
                    }
                    break;

            }
        }

    }

}

//////////////////////////////////////////////////////////

///  DELETE LAYER FUNCTION ////////////////////////////////
function layerDeleter(compo, charLen, filter) {
    compo = compo instanceof CompItem ? compo : findComp(compo)

    if (compo.layers.length > 0) {
        for (var i = compo.layers.length; i >= 1; i--) {
            var layr = compo.layer(i);
            if (charLen != undefined && layr.name.length == charLen) {
                layr.remove();
            }
            if (filter != undefined) {
                for (var i in filter) {
                    if (layr.name.indexOf(filter[i]) != -1) {
                        layr.remove();
                    }
                };

            }
            if (charLen == undefined && filter == undefined) {
                layr.remove();
            }

        }
    } else {

        return false
    }
}

///////////////////////////////////////////////////////////////

/// ADD CONTROLER FUNCTION ///////////////////////////////
function addControler(comp, layerName, controler, nom, valeur) {
    var effet
    comp = comp instanceof CompItem ? comp : findComp(comp)
    layeur = comp.layer(layerName) != null ? comp.layer(layerName) : null;

    nom = nom != null ? nom : controler
    if (layeur != null) {
        if (layeur.effect(nom) == null) {
            layeur.Effects.addProperty("ADBE " + controler + " Control").name = nom;
            if (valeur != null) {
                if (typeof valeur == "number") {

                    layeur.effect(nom)(1).setValue(valeur);
                } else if (typeof valeur == "string") {
                    layeur.effect(nom)(1).expression = valeur;
                }
            }

        } else if (layeur.effect(nom) != null && valeur != null) {
            layeur.effect(nom)(1).setValue(valeur);
        };
        return layeur.effect(nom)(1);
    } else {
        alert('Le calque "' + layerName + '" est introuvable')
    }
}


/// -- RENDER FUNCTION //////////////////////////
function openXport() {
    var renderSet = "J2M_export";

    var projPathData = proj.file.fsName.split(proj.file.name)[0];
    var projPath;
    if (projPathData.indexOf(":") >= 0) {
        var lowD = projPathData.split(":")[0].toLowerCase();
        var RestPath = projPathData.split(":")[1];
        projPath = "/" + lowD + "/" + RestPath.replace(/\\/g, "/").replace("////g", "");
    } else {
        projPath = "/" + projPathData.replace(/\\/g, "/").replace("////g", "");
    };

    var folderRender = new Folder(projPath + "Rendu_J2M");
    if (!folderRender.exists) {
        folderRender.create()
    };

    if (COMP != null && COMP.layers.length > 0) {
        var rq_item = proj.renderQueue.items.add(COMP);
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
            rq_item.outputModule(1).file = File(folderRender.absoluteURI + "/" + nomInvite.split(' ')[0] + "_AvantAprès.mov");
            rq_item.render = true;
            proj.renderQueue.render();

        } else {
            alert('Le module d\'exportation \"J2M_export" est absent !');
        }

    } else {
        alert("Aucun calque dans la compositon \"AVANT-APRES\" !");
    };

}


/////////////////////////////////////////////////////
///////// ELEMENTS ////////////////////////
//////////////////////////////////////////

// -------  DATE FUNCTION
function dateWrite() {
    var month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]
    var today = new Date();
    var dd = today.getDate();
    var mm = month[today.getMonth()]

    var date = {
        'day': dd,
        'month': mm
    }

    return date
}

// // TRIM FUNCTION-////////////////////////
function trim(str) {
    if (str != null) {
        return str.replace(/^\s+/, '').replace(/\s+$/, '');
    } else {
        return false;
    }
}
////////////////
//// COMPARE NUMBER
function numCompare(a, b) {
    return a >= b ? true : false
}


// -- URL //////////////////////////
var winBrowserCmd = "C:/Program Files/Internet Explorer/iexplore.exe";
var macBrowserCmdStart = "osascript -e 'open location \"";
var macBrowserCmdEnd = "\"'";

function LinkToURL() {
    var URL = "http://www.fxinstitut.com/"; // your web page

    if ($.os.indexOf("Windows") != -1) {
        system.callSystem(winBrowserCmd + " " + URL);
    } else {
        system.callSystem(macBrowserCmdStart + URL + macBrowserCmdEnd);
    }
}