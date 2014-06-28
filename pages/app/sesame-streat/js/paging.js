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

};

/* Previous Page */
BookPage.prototype.prevPage = function() {

  if(this.currentNum > this.minNum)
    this.currentNum -= 1;
  else
    this.currentNum = this.minNum;

};


/* Show / Hide Element */
var toggleElement = function(num, min, max) {
  $("#prevButton").show();
  $("#nextButton").show();
  if(num == min)
    $("#prevButton").hide();
  if(num == max)
    $("#nextButton").hide();
};


$(function() {

  var currentNum = 3;
  var maxPageNum = 3;

  var book = new BookPage("#PageTemplate-", "#pageMain", currentNum, maxPageNum);
  book.displayPage();
  toggleElement(book.currentNum, book.minNum, book.maxNum);
  book.settingEvent();

  // The event when prev or next button was pushed
  $("#prevButton").on("mouseup tap", function() {
    book.prevPage();
    book.displayPage();
    toggleElement(book.currentNum, book.minNum, book.maxNum);
  });
  $("#nextButton").on("mouseup tap", function() {
    book.nextPage();
    book.displayPage();
    toggleElement(book.currentNum, book.minNum, book.maxNum);
  });

});
