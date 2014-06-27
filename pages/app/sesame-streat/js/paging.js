/* =============
 *   Book Page
 * ============== */
var BookPage = function(templateBaseID, outputID, currentNum, maxNum) {

  this.templateBaseID = templateBaseID;
  this.digitNum       = 2;
  this.pageArea       = $(outputID);

  this.currentNum     = currentNum;
  this.minNum         = 0;
  this.maxNum         = maxNum;

  // console.debug("[Template]: ", this.getTemplateElement());
  // console.debug("[PageArea]: ", this.pageArea);
  // console.debug("[Current]: ", this.currentNum);
  // console.debug("[Min - Max]: ", this.minNum, this.maxNum);

};

/* Display the Page by Rendering the HTML Template */
BookPage.prototype.displayPage = function() {

  var template = Handlebars.compile(this.getTemplateElement().html());
  this.pageArea.html(template);

};

/* Start Animation and Set Event */
BookPage.prototype.settingEvent = function() {



};

/* Get Template ID */
BookPage.prototype.getTemplateElement = function() {

  var pageNum = ("000" + String(this.currentNum)).slice(-this.digitNum);
  return $(this.templateBaseID + pageNum);

};

/* Next Page */
BookPage.prototype.nextPage = function() {

  if(this.currentNum < this.maxNum)
    this.currentNum += 1;
  else
    this.currentNum = this.minNum;

  this.displayPage();

};

/* Previous Page */
BookPage.prototype.prevPage = function() {

  if(this.currentNum > this.minNum)
    this.currentNum -= 1;
  else
    this.currentNum = this.minNum;

  this.displayPage();

};


$(function() {

  var maxPageNum = 10;
  var book = new BookPage("#page", "#pageMain", 0, maxPageNum);
  book.displayPage();
  book.settingEvent();

  $("#prevButton").bind("mouseup tap", function() { book.prevPage(); });
  $("#nextButton").bind("mouseup tap", function() { book.nextPage(); });

});
