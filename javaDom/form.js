var chks = document.getElementsByName("chk");
for (var i  = 0 ; i < chks.length ; i ++){
    chks[i].onchange = function(){
        if(this.checked){
            this.parentNode.parentNode.style.backgroundColor = "yellow";
            var c = document.getElementsByName("chk");
            var j = 0;
            for (;j < c.length ; j ++){
                if(!c[j].checked){
                    document.getElementById("chkall").checked = false;
                    break;
                }
            }
            if (j == c.length) document.getElementById("chkall").checked = true;
        } else{
            document.getElementById("chkall").checked = false;
            if (this.parentNode.parentNode.className == "oddr"){
                this.parentNode.parentNode.style.backgroundColor = "bisque";
            }
            else if (this.parentNode.parentNode.className == "evenr")
            {
                this.parentNode.parentNode.style.backgroundColor = "aquamarine";
            } 
        }
    }
}

document.getElementById("chkall").onchange = function(){
    var c = document.getElementsByName("chk");
        for (var j = 0 ; j < c.length; j ++){
            c[j].checked = this.checked; //this here is "chkall"
            if (c[j].checked) {
                c[j].parentNode.parentNode.style.backgroundColor = "yellow";
            }

            else if (c[j].parentNode.parentNode.className == "oddr"){
                c[j].parentNode.parentNode.style.backgroundColor = "bisque";
            }
            else if (c[j].parentNode.parentNode.className == "evenr") 
            c[j].parentNode.parentNode.style.backgroundColor = "aquamarine";
        }
};
