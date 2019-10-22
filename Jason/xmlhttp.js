function getXmlHttpObject()  {
    var xmlhttp = null; 
  try { xmlhttp = new XMLHttpRequest(); }  
  catch (e) {
      try  { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } 
          catch (e) {
          try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
          catch (e)  { console.log("sth WRONG WITH AJAX!"); }
      }
  }
  return xmlhttp;
}