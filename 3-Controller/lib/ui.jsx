//---------------------UI -----------------------------------------

function createUI(thisObj) {
    //var sourcePic = File('./AvantApres/splash/splash.jpg');
    var myPic = new File('./3-Controller/3Core');
    var myBin;
    myPic.encoding = "BINARY";
    myPic.open("r", "", "");

    myBin = myPic.read().replace("(new String(", "").replace(/\)\)$/, "");

    var add_pic = File('./3-Controller/map/add_btn.jpg');
    var minus_pic = File('./3-Controller/map/trash.jpg');
    var add_image = File('./3-Controller/map/add_image.jpg');


    var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, ["", "", 300, 600], {
        resizeable: true
    });
    pal.orientation = "column"
    pal.alignChildren = ['center', 'top']


    pal.picL = pal.add('iconButton', ["", "", 450, 90], myPic, {
        style: "toolbutton"
    })
    pal.myTabbedPanel = pal.add('tabbedpanel')
    pal.myTabbedPanel.preferredSize = [450, 300]

    var tab1 = pal.myTabbedPanel.add('tab', undefined, 'PROGRAMME JOUR')
    tab1.myDate = tab1.add("panel")
    tab1.myDate.orientation = 'column'
    tab1.myDate.margins = [10, 20, 10, 10]
    tab1.myDate.contain = tab1.myDate.add('group')
    tab1.myDate.contain.orientation = 'row'
    tab1.myDate.contain.alignment = ['left', 'center']
    tab1.myDate.contain.section1 = tab1.myDate.contain.add('group')
    tab1.myDate.contain.section1.switcher = tab1.myDate.contain.section1.add('checkbox', undefined, "Aujourd'hui")
    tab1.myDate.contain.section1.switcher.value = true
    tab1.myDate.contain.section2 = tab1.myDate.contain.add('group')
    tab1.myDate.contain.section2.editDate = tab1.myDate.contain.section2.add('edittext', [0, 0, 230, 25], "Entrer la date")
    tab1.myDate.contain.section2.editDate.enabled = false
    tab1.myDate.slide = tab1.myDate.add('group')
    tab1.myDate.slide.margins = [0, 15, 0, 0]
    tab1.myDate.slide.globalScale = tab1.myDate.slide.add('slider{minvalue:0, maxvalue:100, value:100}')
    tab1.myDate.slide.dateSpacement = tab1.myDate.slide.add('slider{minvalue:-100, maxvalue:100, value:0}')
    tab1.myDate.slide.aujourduiScale = tab1.myDate.slide.add('slider{minvalue:0, maxvalue:100, value:100}')
    tab1.myDate.slide.aujourduiPosy = tab1.myDate.slide.add('slider{minvalue:-100, maxvalue:100, value:0}')

    tab1.programField = tab1.add('group')
    tab1.programField.orientation = 'column'
    tab1.programField.alignment = ['left', 'fill']
    tab1.programField.margins = [0, 20, 0, 25]

    tab1.endBtn = tab1.add('group')
    tab1.endBtn.alignment = ['fill', 'fill']
    tab1.endBtn.alignChildren = 'right'
    tab1.endBtn.btnCompOpen = tab1.endBtn.add('button', [0, 0, 60, 30], 'Ouvrir')
    tab1.endBtn.btnCompOpen.margins = [0, 0, 0, 0]
    tab1.endBtn.btnCompOpen.alignment = 'right'
    tab1.endBtn.btnApply = tab1.endBtn.add('button', [0, 0, 150, 25], 'Appliquer')
    tab1.endBtn.btnApply.justify = 'center'
    tab1.endBtn.renderBox = tab1.endBtn.add('group')
    tab1.endBtn.renderBox.alignChildren = ['right', 'center']
    tab1.endBtn.renderBox.alignment = ['fill', 'fill']
    tab1.endBtn.renderBox.renderBtn = tab1.endBtn.renderBox.add('button', [0, 0, 120, 30], 'Rendu')
    tab1.endBtn.renderBox.renderBtn.justify = 'right'



    var tab2 = pal.myTabbedPanel.add('tab', undefined, 'TOUT DE SUITE')
    tab2.grp = tab2.add('group')
    tab2.grp.orientation = 'column'
    tab2.grp.alignChildren = ['center', 'top']
    // tab2.grp.margins = [50, 0, 0, 0]

    tab2.grp.editField = tab2.grp.add('group')
    tab2.grp.margins = [0, 30, 0, 0]
    tab2.grp.alignChildren = ['center', 'center']
    tab2.grp.editField.textStatic = tab2.grp.editField.add('statictext', undefined, 'Titre')
    tab2.grp.editField.title = tab2.grp.editField.add('edittext', ["", "", 270, 30], "Entrer le titre")

    tab2.grp.btnField = tab2.grp.add("group")
    tab2.grp.btnField.margins = [0, 20, 0, 25]

    tab2.grp.endBtn = tab2.grp.add('group')
    tab2.grp.endBtn.margins = [0, 40, 0, 0]
    tab2.grp.endBtn.alignment = ['fill', 'fill']
    tab2.grp.endBtn.alignChildren = 'right'
    tab2.grp.endBtn.btnCompOpen = tab2.grp.endBtn.add('button', [0, 0, 60, 30], 'Ouvrir')
    tab2.grp.endBtn.btnCompOpen.alignment = 'right'
    tab2.grp.endBtn.btnCompOpen.margins = [0, 0, 0, 0]
    tab2.grp.endBtn.renderBox = tab2.grp.endBtn.add('group')
    tab2.grp.endBtn.renderBox.alignChildren = ['right', 'center']
    tab2.grp.endBtn.renderBox.alignment = ['right', 'top']
    tab2.grp.endBtn.renderBox.renderBtn = tab2.grp.endBtn.renderBox.add('button', [0, 0, 120, 30], 'Rendu')
    tab2.grp.endBtn.renderBox.renderBtn.justify = 'right'



    var tab3 = pal.myTabbedPanel.add('tab', ["", "", 450, 600], 'ANNONCE')
    tab3.grp = tab3.add('group')
    tab3.grp.orientation = 'column'
    tab3.grp.margins = [0, 30, 0, 0]
    tab3.grp.alignChildren = ['center', 'top']

    tab3.grp.editField = tab3.grp.add('group')
    tab3.grp.editField.margins = [0, 0, 0, 0]
    tab3.grp.editField.alignChildren = ['center', 'center']
    tab3.grp.editField.textStatic = tab3.grp.editField.add('statictext', undefined, 'Titre')
    tab3.grp.editField.title = tab3.grp.editField.add('edittext', ["", "", 270, 30], "Entrer le titre")

    tab3.grp.detailField = tab3.grp.add('group')
    tab3.grp.detailField.margins = [0, 0, 0, 0]
    tab3.grp.detailField.alignChildren = ['center', 'center']
    tab3.grp.detailField.textStatic = tab3.grp.detailField.add('statictext', undefined, 'Detail')
    tab3.grp.detailField.title = tab3.grp.detailField.add('edittext', ["", "", 270, 30], "Entrer detail")

    tab3.grp.dateField = tab3.grp.add('group')
    tab3.grp.dateField.margins = [0, 10, 0, 10]
    tab3.grp.dateField.alignChildren = ['center', 'center']
    tab3.grp.dateField.textStatic = tab3.grp.dateField.add('statictext', undefined, 'Date')
    tab3.grp.dateField.title = tab3.grp.dateField.add('edittext', ["", "", 180, 30], "Entrer la date")

    tab3.grp.btnField = tab3.grp.add("group")
    tab3.grp.btnField.margins = [0, 0, 0, 10]

    tab3.grp.endBtn = tab3.grp.add('group')
    tab3.grp.endBtn.margins = [0, 40, 0, 0]
    tab3.grp.endBtn.alignChildren = ['fill', 'fill']
    tab3.grp.endBtn.btnCompOpen = tab3.grp.endBtn.add('button', [0, 0, 60, 30], 'Ouvrir')
    tab3.grp.endBtn.btnCompOpen.alignment = 'left'
    tab3.grp.endBtn.btnCompOpen.margins = [0, 0, 0, 0]
    tab3.grp.endBtn.renderBox = tab3.grp.endBtn.add('group')
    tab3.grp.endBtn.renderBox.alignChildren = ['right', 'center']
    tab3.grp.endBtn.renderBox.alignment = ['right', 'top']
    tab3.grp.endBtn.renderBox.renderBtn = tab3.grp.endBtn.renderBox.add('button', [0, 0, 120, 30], 'Rendu')
    tab3.grp.endBtn.renderBox.renderBtn.justify = 'right'


    var tab4 = pal.myTabbedPanel.add('tab', undefined, 'SPORT')

    //////////////////////////////////////////////////////

    //pal.grp.icon.image = myBin;

    //pal.size = [660, 72];

    //var pic = pal.add("image", {x:10, y:10, width:360, height:72}, myBin);


    var maingroup1 = tab1.programField;
    var maingroup2 = tab2;

    add_element()

    date_switcher()

    function date_switcher() {

    }

    function add_element() {
        var group = pal.myTabbedPanel
        var btnField2 = tab2.grp.btnField
        var btnField3 = tab3.grp.btnField
        /// TAB 2
        btnField2.ipImage = btnField2.add('iconbutton', undefined, add_image, {
            style: 'toolbutton'
        });
        btnField2.list = btnField2.add("dropdownlist", ["", "", 100, 23], ["Sport", "Music"]);
        btnField2.list.selection = 0
        btnField2.direct = btnField2.add('checkbox', undefined, "Direct");
        btnField2.direct.value = true
        //// TAB 3

        tab3.grp.dateField.heure = tab3.grp.dateField.add("edittext", ["", "", 35, 23], "12");
        // group.myTab3.tab3.dateField.heure.onChanging = takeWord;
        tab3.grp.dateField.minute = tab3.grp.dateField.add("edittext", ["", "", 35, 23], "00");
        // group.myTab3.tab3.dateField.minute.onChanging = takeWord;
        btnField3.ipImage = btnField3.add('iconbutton', undefined, add_image, {
            style: 'toolbutton'
        });
        btnField3.list = btnField3.add("dropdownlist", ["", "", 100, 23], ["Sport", "Music"]);
        btnField3.list.selection = 0
        btnField3.direct = btnField3.add('checkbox', undefined, "Direct");
        btnField3.direct.value = true

    }


    add_row(maingroup1);


    // pal.grp.myTabbedPanel.myTab1.myDate.today.addEventListener("click", function() {
    //     alert("Houdini")
    //     if (pal.grp.myTabbedPanel.myTab1.myDate.today.value == true) {
    //         custom_date()
    //     }
    // });
    tab1.myDate.contain.section1.switcher.onClick = custom_date


    function custom_date() {
        var group = tab1.myDate

        if (group.contain.section1.switcher.value == false) {
            // group.editDate = group.add("edittext", ["", "", 230, 23], "Entrer la date");
            // group.editDate.onChanging = writter;
            // group.remove(this.parent.children[1])
            group.contain.section2.editDate.enabled = true
            layerDateCustom()
            pal.layout.layout(true);
        } else {
            // group.remove(this.parent.children[1])
            group.contain.section2.editDate.enabled = false
            layerDate()
            pal.layout.layout(true);
        }

    }
    //////////////////////////////////////////
    ////// PROG ROW EDIT COMP FUNCTION

    function progRowEdit() {

        var index = this.parent.parent.parent.index
        alert(index)
    }

    ///////////////////////////////////

    //// PROGRAMME COMP FUNCTION
    var progJourComp = findComp("PROGRAMME JOUR");


    function layerDateCustom() {
        // alert(trim(this.text))
        var tabText = tab1.myDate.contain.section2.editDate.text
        var text = this.text ? trim(this.text).split(' ') : (tabText == "Entrer la date" || tabText == "" ? "14 Avril".split(' ') : trim(tabText).split(' '))
        var day = text[0]
        var month = text[1]

        layerSetParam(progJourComp, 'Day', 'sourceText', day)
        layerSetParam(progJourComp, 'Month', 'sourceText', month)
    }

    layerDate()

    function layerDate() {
        // alert(trim(this.text))

        var day = dateWrite()['day']
        var month = dateWrite()['month']


        layerSetParam(progJourComp, 'Day', 'sourceText', day)
        layerSetParam(progJourComp, 'Month', 'sourceText', month)
    }


    ///// ADD ROW PROGRAMME TAB
    /////////////////////
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
        group.n1.n2_tx.title.onChanging = progRowEdit;
        group.n1.n2_tx.detail = group.n1.n2_tx.add("edittext", ["", "", 250, 27], "Detail");
        group.n1.n2_tx.detail.onChanging = writter;
        //------ N3
        group.n1.n2_tx.n3 = group.n1.n2_tx.add('group', [0, "", 230, 23]);
        group.n1.n2_tx.n3.alignChildren = ['fill', 'center']
        group.n1.n2_tx.n3.heure = group.n1.n2_tx.n3.add("edittext", ["", "", 35, 23], "12");
        group.n1.n2_tx.n3.heure.onChanging = writter;
        group.n1.n2_tx.n3.minute = group.n1.n2_tx.n3.add("edittext", ["", "", 35, 23], "00");
        group.n1.n2_tx.n3.minute.onChanging = writter;
        group.n1.n2_tx.n3.list = group.n1.n2_tx.n3.add("dropdownlist", ["", "", 100, 23], ["Sport", "Music"]);
        group.n1.n2_tx.n3.list.selection = 0
        group.n1.n2_tx.n3.list.onChanging = writter;
        group.n1.n2_tx.n3.direct = group.n1.n2_tx.n3.add("checkbox", ["", "", 50, 23], "Direct");
        group.n1.n2_tx.n3.direct.onChanging = writter;
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
        pal.layout.layout(true);
    }

    function add_btn() {
        add_row(maingroup1);
    }


    function minus_btn() {

        if (this.parent.parent.children.length > 1) {
            // this.parent.edit.text = "";
            maingroup1.remove(this.parent);
            pal.layout.layout(true);
        } else {
            // this.parent.edit.text = "";
            return false;
        }
    }

    //--------------TAB 1 ---------------

    pal.myTabbedPanel.margins = [0, 10, 5, 10];
    tab1.margins = [10, 20, 0, 5];
    tab1.endBtn.margins = [17, 0, 0, 0];
    tab1.endBtn.renderBox.margins = [60, 0, 0, 0];

    //Defaults
    // pal.grp.myTabbedPanel.myTab1.myDate.today.value.onChanging = custom_date;
    tab1.myDate.contain.section2.editDate.onChanging = layerDateCustom;
    tab1.endBtn.btnApply.onClick = readTxt;

    // pal.grp.myTabbedPanel.myTab1.programField.picInvite.btnApres.onClick = toFileImport;
    tab1.endBtn.btnCompOpen.onClick = openXport;
    tab1.endBtn.renderBox.renderBtn.onClick = openXport;

    //--------------TAB 2 ---------------


    //--------------TAB 3 ---------------


    pal.layout.layout(true);

    return pal;

}

var w = createUI(this);
w instanceof Window ? w.show() : w.layout.layout(true)




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