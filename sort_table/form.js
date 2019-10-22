// Take every parameter from sortable class
var tbls = document.querySelectorAll(".sortable");
 //iterate function
 for (var i = 0; i < tbls.length; i++)
    preProcessSortableTbl(tbls[i]);
    
//Functions

function preProcessSortableTbl(tbl){
    var col = document.createElement("input");
	var dir = document.createElement("input");
	col.type = "hidden";
	dir.type = "hidden";
	col.value = "-1";
	dir.value = "";
	tbl.parentNode.insertBefore(col, tbl);
    tbl.parentNode.insertBefore(dir, tbl);
    
    var hcells= tbl.rows[0].cells;
    for(var i = 0 ; i < hcells.length ; i ++){
        if (hcells[i].classList.contain("sortcol")){
            hcells[i].innerHTML += '<span class = "arrow></span>';
            hcells[i].onclick = function(){
                var d = this.parentNode.parentNode.parentNode.previousSibling;
                var c = d.previousSibling;
                var j;
				for (j = 0; j < this.parentNode.cells.length; j++) {
					this.parentNode.cells[j].classList.remove("asc");
					this.parentNode.cells[j].classList.remove("desc");
                }
                for (j = 0; j < this.parentNode.cells.length; j++)
					if (this.parentNode.cells[j] == this) break;
                if (c.value == j.toString()){
                    d.value = (d.value == "desc" ? "asc" : "desc");
                }else {
					c.value = j.toString();
					d.value = "asc";
                }
                this.classList.add(d.value);
                sortTbl(this.parentNode.parentNode.parentNode);
            };
        }
    }
    
    function sortTbl(tbl){
        var dir = tbl.previousSibling.value;
        var col = parseInt(tbl.previousSibling.previousSibling.value);
        for (var i = 1; i < tbl.rows.length; i++)
		for (var j = i+1; j < tbl.rows.length; j++) 
			if ((dir == "asc" && tbl.rows[i].cells[col].innerHTML.toLowerCase() > 
				tbl.rows[j].cells[col].innerHTML.toLowerCase()) || 
				(dir == "desc" && tbl.rows[i].cells[col].innerHTML.toLowerCase() <
				tbl.rows[j].cells[col].innerHTML.toLowerCase())){
                    for (var t = 1; t < tbl.rows[i].cells.length; t++){
                        tmp = tbl.rows[i].cells[t].innerHTML;
                        tbl.rows[i].cells[t].innerHTML = tbl.rows[j].cells[t].innerHTML;
                        tbl.rows[j].cells[t].innerHTML = tmp;
                    }
                }

    }

}