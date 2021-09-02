function generateSlidesFromSpreadsheet() {
  var sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1wn7xA76uXXXsMN9f2R0QGpakx9MviUXDesTDOf4dmyM/edit?usp=sharing').getSheetByName('回答');
  var slide = SlidesApp.openByUrl('https://docs.google.com/presentation/d/1ZusFV-fY6s8yyxvkMppToJT0l7ObvkCa3o--ZhKubVM/edit?usp=sharing');
 
  var datarange = sheet.getDataRange().getValues();
  var template = slide.getSlides()[1];
  var template2 = slide.getSlides()[2];

 
  for(var i=1;i<datarange.length;i++){
    var newpage = slide.appendSlide(template);
    for(var j=0;j<datarange[0].length;j++){
      newpage.replaceAllText('{'+datarange[0][j]+'}', datarange[i][j]);
    }
 
    var image = datarange[i][3].replace("open?","uc?export=view&");
    try{
      newpage.getImages()[0].replace(image);
    }catch(e){
      Logger.log(image);
    }
  }

    for(var i=1;i<datarange.length;i++){
    var newpage = slide.appendSlide(template2);
    for(var j=0;j<datarange[0].length;j++){
      newpage.replaceAllText('{'+datarange[0][j]+'}', datarange[i][j]);
    }
 
    var image = datarange[i][3].replace("open?","uc?export=view&");
    try{
      newpage.getImages()[0].replace(image);
    }catch(e){
      Logger.log(image);
    }
  }
}
