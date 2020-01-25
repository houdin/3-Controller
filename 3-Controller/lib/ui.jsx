//---------------------UI -----------------------------------------

function createUI(thisObj) {

    var myPanel = thisObj;


    res = "group{orientation:'column',alignChildren:['left','top'],\
picL: IconButton{type:'image',bounds:{x:10, y:10, width:450, height:90} },\
myTabbedPanel: Panel{type:'tabbedpanel', text:'',\
myTab1: Panel{type:'tab', text:'PROGRAMME JOUR',\
myDate: Panel{orientation:'row',margins:[10,10,10,10], borderStyle:'none',\
switcher: Checkbox {text:\"Aujourd'hui\", value:true },\
editDate: EditText {text: 'Entrer la date', enabled: false,bounds:{x:0, y:0, width:230, height:25}},\
},\
programField: Group{orientation: 'column', margins:[0,20,0,25], alignment:['left','fill'],\
},\
endBtn: Group{ alignChildren:'right', alignment:['fill','fill'],\
btnCompOpen: Button{text:'Ouvrir',alignment:'right', margins:[0,0,0,0],bounds:{x:0, y:0, width:60, height:30}},\
btnApply: Button{text :'Appliquer', justify:'center', bounds:{x:0, y:0, width:150, height:25}},\
RenderBox: Group{alignChildren:['right','center'], alignment:['fill','fill'],\
RenderBtn: Button{text:'Rendu',justify:'right',bounds:{x:100, y:0, width:120, height:30}}\
},\
},\
},\
myTab2: Panel{type:'tab', text:'TOUT DE SUITE',\
tab2 : Group{ orientation: 'column', alignChildren: ['center', 'top'],margins:[0,30,0,0],\
editField: Group{ margins:[0,0,0,0], alignChildren:['center','center'],\
textStatic: StaticText{ text:'Titre'},\
title : EditText{ text: 'Entrer le titre', bounds:{x:0, y:0, width:270, height:30}},\
},\
btnField: Group{ margins:[0,20,0,25],\
},\
endBtn: Group{ alignChildren:['center', 'center'],\
btnCompOpen: Button{text:'Ouvrir',alignment:'right', margins:[0,0,0,0],bounds:{x:0, y:0, width:60, height:30}},\
RenderBox: Group{alignChildren:['right','center'], alignment:['left','top'],\
RenderBtn: Button{text:'Rendu',justify:'right',bounds:{x:100, y:0, width:120, height:30}}\
},\
},\
},\
},\
myTab3: Panel{type:'tab', text:'ANNONCE',\
tab3 : Group{ orientation: 'column', alignChildren: ['center', 'top'],margins:[0,15,0,0],\
editField: Group{ margins:[0,0,0,0], alignChildren:['center','center'],\
textStatic: StaticText{ text:'Titre'},\
title : EditText{ text: 'Entrer le titre', bounds:{x:0, y:0, width:270, height:30}},\
},\
detailField: Group{ margins:[0,0,0,0], alignChildren:['center','center'],\
textStatic: StaticText{ text:'Detail'},\
detail : EditText{ text: 'Entrer detail', bounds:{x:0, y:0, width:270, height:30}},\
},\
dateField: Group{ margins:[0,10,0,10],\
staticDate: StaticText {text: 'Date'},\
editDate: EditText {text: 'Entrer la date', bounds:{x:0, y:0, width:180, height:25}},\
},\
btnField: Group{ margins:[0,0,0,10],\
},\
endBtn: Group{ alignChildren:['center', 'center'],\
btnCompOpen: Button{text:'Ouvrir',alignment:'right', margins:[0,0,0,0],bounds:{x:0, y:0, width:60, height:30}},\
RenderBox: Group{alignChildren:['right','center'], alignment:['left','top'],\
RenderBtn: Button{text:'Rendu',justify:'right',bounds:{x:100, y:0, width:120, height:30}}\
},\
},\
},\
},\
myTab4: Panel{type:'tab', text:'SPORT',\
},\
},\
}";
    //var sourcePic = File('./AvantApres/splash/splash.jpg');
    var myPic = new File('./3-Controller/3Core');
    var myBin;
    myPic.encoding = "BINARY";
    myPic.open("r", "", "");

    myBin = myPic.read().replace("(new String(", "").replace(/\)\)$/, "");

    var add_pic = File('./3-Controller/map/add_btn.jpg');
    var minus_pic = File('./3-Controller/map/trash.jpg');
    var add_image = File('./3-Controller/map/add_image.jpg');
    //myPanel.grp.icon.image = myBin;

    //myPanel.size = [660, 72];

    //var pic = myPanel.add("image", {x:10, y:10, width:360, height:72}, myBin);

    myPanel.grp = myPanel.add(res);
    myPanel.grp.picL.image = myBin;
    myPanel.grp.maximunSize = myPanel.grp.size;

    var maingroup1 = myPanel.grp.myTabbedPanel.myTab1.programField;
    var maingroup2 = myPanel.grp.myTabbedPanel.myTab2;

    add_element()

    date_switcher()

    function date_switcher() {

    }

    function add_element() {
        var group = myPanel.grp.myTabbedPanel
        var btnField2 = group.myTab2.tab2.btnField
        var btnField3 = group.myTab3.tab3.btnField
        /// TAB 2
        btnField2.ipImage = btnField2.add('iconbutton', undefined, add_image, {
            style: 'toolbutton'
        });
        btnField2.list = btnField2.add("dropdownlist", ["", "", 100, 23], ["Sport", "Music"]);
        btnField2.list.selection = 0
        btnField2.direct = btnField2.add('checkbox', undefined, "Direct");
        btnField2.direct.value = true
        //// TAB 3
        group.myTab3.tab3.dateField.heure = group.myTab3.tab3.dateField.add("edittext", ["", "", 35, 23], "12");
        group.myTab3.tab3.dateField.heure.onChanging = takeWord;
        group.myTab3.tab3.dateField.minute = group.myTab3.tab3.dateField.add("edittext", ["", "", 35, 23], "00");
        group.myTab3.tab3.dateField.minute.onChanging = takeWord;
        btnField3.ipImage = btnField3.add('iconbutton', undefined, add_image, {
            style: 'toolbutton'
        });
        btnField3.list = btnField3.add("dropdownlist", ["", "", 100, 23], ["Sport", "Music"]);
        btnField3.list.selection = 0
        btnField3.direct = btnField3.add('checkbox', undefined, "Direct");
        btnField3.direct.value = true

    }


    add_row(maingroup1);

    var month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]
    var today = new Date();
    var dd = today.getDate();
    var mm = month[today.getMonth()]


    today = dd + ' ' + mm


    function date_row() {
        var group = myPanel.grp.myTabbedPanel.myTab1.myDate
        group.today = group.add("checkbox", undefined, "Aujourd'hui");
        group.today.value = true
        // group.today.value.onChanging = custom_date
        myPanel.layout.layout(true);

    }

    // myPanel.grp.myTabbedPanel.myTab1.myDate.today.addEventListener("click", function() {
    //     alert("Houdini")
    //     if (myPanel.grp.myTabbedPanel.myTab1.myDate.today.value == true) {
    //         custom_date()
    //     }
    // });
    myPanel.grp.myTabbedPanel.myTab1.myDate.switcher.onClick = custom_date


    function custom_date() {
        var group = myPanel.grp.myTabbedPanel.myTab1.myDate

        if (group.switcher.value == false) {
            // group.editDate = group.add("edittext", ["", "", 230, 23], "Entrer la date");
            // group.editDate.onChanging = writter;
            // group.remove(this.parent.children[1])
            group.editDate.enabled = true
            myPanel.layout.layout(true);
        } else {
            // group.remove(this.parent.children[1])
            group.editDate.enabled = false
            myPanel.layout.layout(true);
        }

    }


    function add_row(maingroup1) {
        var group = maingroup1.add("group");
        group.alignChildren = "top"
        ///// PLUS
        group.plus = group.add("iconbutton", undefined, add_pic, {
            style: "toolbutton"
        });
        group.plus.margins = [0, 0, 0, 0]
        group.plus.onClick = add_btn;
        ////// N1
        group.n1 = group.add('group')
        group.n1.alignChildren = "top"
        group.n1.margins = [0, 0, 0, 0]
        ///// N1 -> N2_TX
        group.n1.n2_tx = group.n1.add("group");
        group.n1.n2_tx.orientation = "column";
        group.n1.n2_tx.margins = [0, 0, 0, 0]
        group.n1.n2_tx.title = group.n1.n2_tx.add("edittext", ["", "", 250, 27], "Titre");
        group.n1.n2_tx.title.onChanging = takeWord;
        group.n1.n2_tx.detail = group.n1.n2_tx.add("edittext", ["", "", 250, 27], "Detail");
        group.n1.n2_tx.detail.onChanging = takeWord;
        //------ N3
        group.n1.n2_tx.n3 = group.n1.n2_tx.add('group', [0, "", 230, 23]);
        group.n1.n2_tx.n3.alignChildren = ['fill', 'center']
        group.n1.n2_tx.n3.heure = group.n1.n2_tx.n3.add("edittext", ["", "", 35, 23], "12");
        group.n1.n2_tx.n3.heure.onChanging = takeWord;
        group.n1.n2_tx.n3.minute = group.n1.n2_tx.n3.add("edittext", ["", "", 35, 23], "00");
        group.n1.n2_tx.n3.minute.onChanging = takeWord;
        group.n1.n2_tx.n3.list = group.n1.n2_tx.n3.add("dropdownlist", ["", "", 100, 23], ["Sport", "Music"]);
        group.n1.n2_tx.n3.list.selection = 0
        group.n1.n2_tx.n3.list.onChanging = takeWord;
        group.n1.n2_tx.n3.direct = group.n1.n2_tx.n3.add("checkbox", ["", "", 50, 23], "Direct");
        group.n1.n2_tx.n3.direct.onChanging = takeWord;
        ///// N1 -> N2_IMG
        group.n1.n2_img = group.n1.add("group")
        group.n1.n2_img.orientation = "column";
        // group.n1.n2_img.alignChildren = ["left", "fill"]
        group.n1.n2_img.image = group.n1.add('iconbutton', undefined, add_image, {
            style: "toolbutton"
        })
        group.n1.n2_img.image.onClick = toFileImport
        //////// MINUS
        group.minus = group.add("iconbutton", undefined, minus_pic, {
            style: "toolbutton"
        });
        group.minus.onClick = minus_btn;
        group.index = maingroup1.children.length - 1;
        myPanel.layout.layout(true);
    }

    function add_btn() {
        add_row(maingroup1);
    }


    function minus_btn() {

        if (this.parent.parent.children.length > 1) {
            // this.parent.edit.text = "";
            maingroup1.remove(this.parent);
            myPanel.layout.layout(true);
        } else {
            // this.parent.edit.text = "";
            return false;
        }
    }


    myPanel.grp.myTabbedPanel.margins = [0, 10, 5, 10];
    myPanel.grp.myTabbedPanel.myTab1.margins = [10, 20, 0, 5];
    myPanel.grp.myTabbedPanel.myTab1.endBtn.margins = [17, 0, 0, 0];
    myPanel.grp.myTabbedPanel.myTab1.endBtn.RenderBox.margins = [60, 0, 0, 0];

    //Defaults
    // myPanel.grp.myTabbedPanel.myTab1.myDate.today.value.onChanging = custom_date;
    // myPanel.grp.myTabbedPanel.myTab1.myDate.editDate.onChanging = writter;
    myPanel.grp.myTabbedPanel.myTab1.endBtn.btnApply.onClick = readTxt;

    // myPanel.grp.myTabbedPanel.myTab1.programField.picInvite.btnApres.onClick = toFileImport;
    myPanel.grp.myTabbedPanel.myTab1.endBtn.btnCompOpen.onClick = openXport;
    myPanel.grp.myTabbedPanel.myTab1.endBtn.RenderBox.RenderBtn.onClick = openXport;

    //--------------TAB 2 ---------------
    // myPanel.grp.myTabbedPanel.myTab2.imageInvite.margins = [15, 10, 0, 20];
    // myPanel.grp.myTabbedPanel.myTab2.endBtn.margins = [17, 0, 0, 0];
    // myPanel.grp.myTabbedPanel.myTab2.endBtn.RenderBox.margins = [60, 0, 0, 0];

    //Defaults
    // myPanel.grp.myTabbedPanel.myTab2.myText.editName.onChanging = writter;
    // myPanel.grp.myTabbedPanel.myTab2.btnApply.onClick = readTxt;

    // myPanel.grp.myTabbedPanel.myTab2.imageInvite.picInvite.btnAvant.onClick = compName;
    // myPanel.grp.myTabbedPanel.myTab2.imageInvite.picInvite.btnApres.onClick = compName;

    //myPanel.grp.myTabbedPanel.myTab1.enBtn.picInvite.btnApres.onClick = compName;
    // myPanel.grp.myTabbedPanel.myTab2.endBtn.btnCompOpen.onClick = openXport;
    // myPanel.grp.myTabbedPanel.myTab2.endBtn.btnComp.onClick = openXport;
    // myPanel.grp.myTabbedPanel.myTab2.endBtn.RenderBox.RenderBtn.onClick = openXport;


    //--------------TAB 3 ---------------
    // myPanel.grp.myTabbedPanel.myTab3.SetGrp.widthUI.widthTxt.onChanging = setwriteA;
    // myPanel.grp.myTabbedPanel.myTab3.SetGrp.heightUI.heightTxt.onChanging = setwriteB;
    // myPanel.grp.myTabbedPanel.myTab3.SetGrp.fpsUI.fpsTxt.onChanging = setwriteC;
    // myPanel.grp.myTabbedPanel.myTab3.SetGrp.timeCompUI.timeCompTxt.onChanging = setwriteD;

    //--------------TAB 4 ---------------
    // myPanel.grp.myTabbedPanel.myTab4.SetGrp.widthUI.widthTxt.onChanging = setwriteA;
    // myPanel.grp.myTabbedPanel.myTab4.SetGrp.heightUI.heightTxt.onChanging = setwriteB;
    // myPanel.grp.myTabbedPanel.myTab4.SetGrp.fpsUI.fpsTxt.onChanging = setwriteC;
    // myPanel.grp.myTabbedPanel.myTab4.SetGrp.timeCompUI.timeCompTxt.onChanging = setwriteD;

    myPanel.layout.layout(true);

    return myPanel;

}
createUI(this);




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