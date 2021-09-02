function generateSlidesFromSpreadsheet() {

  //連絡会対応報告フォーム回答のリンク
  var sheet_beforemtg = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1QCtu8Fk7nqEejlrBqxCvVkUh0U8RkpNCGZ0qSZgkkZs/edit?usp=sharing').getSheetByName('回答');
  var datarange_beforemtg = sheet_beforemtg.getDataRange().getValues();
  
   
  //試料作製報告フォーム回答のリンク
  var sheet_sample = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/122fA4UchGkzRJPhSYv_Cdxxw9FINJC0RIXpzw_BT2nk/edit?usp=sharing').getSheetByName('回答');
  var datarange_sample = sheet_sample.getDataRange().getValues();

  //スライドの読み込み
  var slide = SlidesApp.openByUrl('https://docs.google.com/presentation/d/1C05FKpm1yZJboT1_gAC9HDtEPeRd0ndUHuwgecLp5mE/edit?usp=sharing');

  /*
    スライド番号が配列になっているので，[0,1,2...]で指定する．
    0枚目：タイトル
    1枚目：前回の連絡を受けた対応スライドテンプレート
    2枚目：試料作製報告スライドテンプレート
  */
  var template_beforemtg = slide.getSlides()[1];
  var template_sample = slide.getSlides()[2];

  //前回の連絡会対応に関するfor文
  for(var i=1;i<datarange_beforemtg.length;i++)
  {
    var newpage = slide.appendSlide(template_beforemtg);
    for(var j=0;j<datarange_beforemtg[0].length;j++)
    {
      newpage.replaceAllText('{'+datarange_beforemtg[0][j]+'}', datarange_beforemtg[i][j]);
    }
  }

  //試料作製報告に関するfor文
  for(var i=1;i<datarange_sample.length;i++)
  {
    var newpage = slide.appendSlide(template_sample);
    for(var j=0;j<datarange_sample[0].length;j++)
    {
      newpage.replaceAllText('{'+datarange_sample[0][j]+'}', datarange_sample[i][j]);
    }
  }


}
