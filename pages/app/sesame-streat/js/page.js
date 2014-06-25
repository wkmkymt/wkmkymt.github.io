/* =============
 *   Book Page
 * ============== */
var BookPage = function(templateBaseID, outputID, currentNum, minNum, maxNum) {

  this.templateBaseID = templateBaseID;
  this.digitNum       = 2;
  this.pageArea       = $(outputID);

  this.currentNum     = currentNum;
  this.minNum         = minNum;
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

  var book = new BookPage("#page", "#pageMain", 0, 0, 1);
  book.displayPage();

  $("#prevButton").on("mouseup touchend", function() { book.prevPage(); });
  $("#nextButton").on("mouseup touchend", function() { book.nextPage(); });
});
