function getCheckedValues() {
 crse1 = document.getElementById('crse1').checked,//INT-1010
 crse2 = document.getElementById('crse2').checked,
 crse3 = document.getElementById('crse3').checked,
 crse4 = document.getElementById('crse4').checked,
 crse5 = document.getElementById('crse5').checked,
 crse6 = document.getElementById('crse6').checked,//INT-1540
 crse7 = document.getElementById('crse7').checked,
 crse8 = document.getElementById('crse8').checked,
 crse9 = document.getElementById('crse9').checked,
 crse10 = document.getElementById('crse10').checked,//INT-1700
 crse11 = document.getElementById('crse11').checked,
 crse12 = document.getElementById('crse12').checked,
 crse13 = document.getElementById('crse13').checked,
 crse14 = document.getElementById('crse14').checked, 
 crse15 = document.getElementById('crse15').checked,
 crse16 = document.getElementById('crse16').checked, 
 crse17 = document.getElementById('crse17').checked, 
 crse18 = document.getElementById('crse18').checked,
 crse19 = document.getElementById('crse19').checked, 
 crse20 = document.getElementById('crse20').checked,
 crse21 = document.getElementById('crse21').checked, 
 //crse22 = document.getElementById('crse22').checked 
 crse22 = document.getElementById('crse22').checked, 
 crse23 = document.getElementById('crse23').checked, 
 crse24 = document.getElementById('crse24').checked, 
 crse25 = document.getElementById('crse25').checked, 
 crse26 = document.getElementById('crse26').checked, 
 crse27 = document.getElementById('crse27').checked, 
 crse28 = document.getElementById('crse28').checked, 
 crse29 = document.getElementById('crse29').checked,//INT-2540
 crse30 = document.getElementById('crse30').checked, 
 crse31 = document.getElementById('crse31').checked, 
 crse32 = document.getElementById('crse32').checked, 
 crse33 = document.getElementById('crse33').checked, 
 crse34 = document.getElementById('crse34').checked, 
 crse35 = document.getElementById('crse35').checked, 
 crse36 = document.getElementById('crse36').checked, 
 crse37 = document.getElementById('crse37').checked, 
 crse38 = document.getElementById('crse38').checked, 
 crse39 = document.getElementById('crse39').checked,
 crse40 = document.getElementById('crse40').checked, 
 crse41 = document.getElementById('crse41').checked, 
 crse42 = document.getElementById('crse42').checked, 
 crse43 = document.getElementById('crse43').checked, 
 crse44 = document.getElementById('crse44').checked, 
 crse45 = document.getElementById('crse45').checked, 
 crse46 = document.getElementById('crse46').checked, 
 crse47 = document.getElementById('crse47').checked, 
 crse48 = document.getElementById('crse48').checked, 
 crse49 = document.getElementById('crse49').checked,
 crse50 = document.getElementById('crse50').checked, 
 crse51 = document.getElementById('crse51').checked, 
 crse52 = document.getElementById('crse52').checked,
 crse53 = document.getElementById('crse53').checked,
 crse54 = document.getElementById('crse54').checked, 
 crse55 = document.getElementById('crse55').checked, 
 crse56 = document.getElementById('crse56').checked, 
 crse57 = document.getElementById('crse57').checked,
 crse58 = document.getElementById('crse58').checked;
}


function submitDynamicForm(e, form) {
  e.preventDefault();
  getCheckedValues();
 
  //var url = 'default.html';
  var urls = [];
  
 if (crse1 === true && crse6 === true && crse30 === true && crse10 === true){
    url = 'a+prep.html';
    urls.push(url);
  }//for all a+prep
  if (crse1 === true && crse6 === true && crse10 === true){
  	url = 'a+prep1.html';
  	urls.push(url);
  }//for INT-1010, INT-1540, INT-1700
  if (crse1 === true && crse6 === true && crse30 === true){
  	url = 'a+prep2.html';
  	urls.push(url);
  }//for INT-1010, INT-1540, INT-2540


  if (crse1 === true && crse39 === true && crse40 === true && crse45 ===true){
    url = 'comp_aided.html';
    urls.push(url);
  }//all courses
  if (crse1 === true && crse39 === true && crse40 === true){
    url = 'comp_aided1.html';
    urls.push(url);
  }//for INT-1010, INT-1600, ENT-1680
  

  if (crse4 === true && crse5 === true && crse27 === true && crse28 === true){
    url = 'ccna.html';
    urls.push(url);
  }//all courses
  if (crse4 === true && crse5 === true && crse27 === true){
    url = 'ccna1.html';
    urls.push(url);
  }//for INT-1450, INT-1460, INT-2450


  if (crse1 === true && crse10 === true && crse8 === true && crse9 === true && crse31 === true || crse57 === true || crse38 === true || crse23 === true){
	url = 'cybersecurity.html';
    urls.push(url);
  }//all courses
  if (crse1 === true && crse10 === true && crse8 === true && crse9 === true || crse57 === true || crse38 === true || crse23 === true){
	url = 'cybersecurity1.html';
    urls.push(url);
  }//for INT-1010, 1700, 1620, 1680
  //collides with Network systems admin.
  

  if (crse1 === true && crse10 === true && crse8 === true && crse33 === true && crse54 === true || crse55 === true){
	url = 'cybersercurity_manage.html';
    urls.push(url);
  }//all courses
  if (crse1 === true && crse10 === true && crse8 === true){
	url = 'cybersercurity_manage1.html';
    urls.push(url);
  }//for INT-1010, 1700, 1620


  if (crse41 === true && crse44 === true && crse56 === true && crse42 === true && crse46 === true && crse47 === true && crse43 === true){
	url = 'electronic_repair.html';
    urls.push(url);
  }//all courses
  if (crse41 === true && crse56 === true && crse42 === true && crse43 === true){
	url = 'electronic_repair1.html';
    urls.push(url);
  }//for ENT-1710, MAT-1340, ENT-1720, 1850

  
  if (crse1 === true && crse11 === true && crse48 === true && crse49 === true && crse12 === true || crse50 ===true || crse51 === true || crse52 === true){
	url = 'computergraphics.html';
    urls.push(url);
  }//all courses
  if (crse1 === true && crse11 === true && crse48 === true && crse49 === true){
	url = 'computergraphics1.html';
    urls.push(url);
  }//for INT-1010, 1800, ART-1510, 1570

  
  if (crse1 === true && crse2 === true && crse22 === true || crse14 === true || crse17 === true || crse20 === true || crse15 === true || crse16 === true || crse21 === true){
	url = 'programdatabase.html';//below are collision certs
    urls.push(url);
  }//all course
  if (crse1 === true && crse2 === true && crse22 === true){
	url = 'programdatabase1.html';
    urls.push(url);
  }//for INT-1010, 1111, 2150

  
  if (crse57 === true && crse1 === true && crse2 === true && crse11 === true && crse13 === true && crse12 === true && crse33 === true && crse20 === true || crse21 === true){
  	url = 'webtech.html';//collides with Programming and Database in electives
    urls.push(url);
  }//all courses
  if (crse57 === true && crse1 === true && crse2 === true && crse11 === true && crse13 === true && crse12 === true){
  	url = 'webtech1.html';//collides with both Cybersecurity files
    urls.push(url);
  }//for PAS-1000, INT-1010, 1111, 1800, 1901, 1850
  
  
  if (crse1 === true && crse10 === true && crse3 === true && crse6 === true && crse52 === true && crse29 === true && crse18 === true || crse19 === true){
	url = 'techsupport.html';//collides with A+prep with or without (or)electives
    urls.push(url);
  }//all courses
  if (crse1 === true && crse10 === true && crse3 === true && crse6 === true && crse52 === true){
	url = 'techsupport1.html';//collides with A+prep with or without (or)electives
    urls.push(url);
  }//for INT-1010, 1700, 1370, 1540, BMT-1650


  if (crse1 === true && crse2 === true && crse7 === true && crse10 === true && crse22 === true && crse23 === true || crse8 === true || crse24 === true || crse25 === true || crse21 === true){
	url = 'networkadmin.html';//collides with CyberSecurity with or without electives
    urls.push(url);
  }//all courses
  if (crse1 === true && crse2 === true && crse7 === true && crse10 === true || crse8 === true){
	url = 'networkadmin1.html';//collides with CyberSecurity with or without electives
    urls.push(url);
  }//for INT-1010, 1111, 1550, 1700, 1620


  if (crse1 === true && crse6 === true && crse30 === true && crse7 === true && crse10 === true && crse8 === true){
	url = 'servicetech.html';//collides with A+prep with or with out
    urls.push(url);
  }//all courses
  if (crse1 === true && crse6 === true && crse7 === true && crse10 === true && crse8 === true){
	url = 'servicetech1.html';//collides with A+prep with or with out
    urls.push(url);
  }//for INT-1010, 1540, 1550, 1700, 1620
  
  
  if(urls.length >= 1) {
    var firstUrl = urls[0];
    fullUrl = 'pgcc_cert_finder' + firstUrl;
    //alert("New url 1: " + fullUrl);
    document.getElementById('iframe-1').src = fullUrl;
    //alert("Url 1 was set: " + fullUrl);
  }
  
  if(urls.length >= 2) {
    var secondUrl = urls[1];
    fullUrl = 'pgcc_cert_finder' + secondUrl;
    //alert("New url 2: " + fullUrl);
    document.getElementById('iframe-2').src = fullUrl;
    //alert("Url 2 was set: " + fullUrl);
  }
  
  if (urls.length >= 3) {
    var thirdUrl = urls[2];
    fullUrl = 'pgcc_cert_finder' + thirdUrl;
    document.getElementById('iframe-3').src = fullUrl;
    //alert("Url 3 was set: " + fullUrl);
  }
  
  if (urls.length >= 4) {
  	var fourthUrl = urls[3];
  	fullUrl = 'pgcc_cert_finder' + fourthUrl;
  	document.getElementById('iframe-4').src = fullUrl;
  	//alert("Url 4 was set: " + fullUrl);
  }
  return false;
}
