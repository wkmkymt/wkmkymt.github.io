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

  this.prevNum        = (this.currentNum > this.minNum) ? this.currentNum - 1 : false;
  this.nextNum        = (this.currentNum < this.maxNum) ? this.currentNum + 1 : false;

  // console.debug("[Template]: ", this.getTemplateElement());
  // console.debug("[PageArea]: ", this.pageArea);
  // console.debug("[Current]: ", this.currentNum);
  // console.debug("[Min - Max]: ", this.minNum, this.maxNum);
  // console.debug("[Prev - Next]: ", this.prevNum, this.nextNum);

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

  this.currentNum = this.nextNum;
  if(this.currentNum == false)
    this.currentNum = this.minNum;

  this.setNextPrevNum();

};

/* Previous Page */
BookPage.prototype.prevPage = function() {

  this.currentNum = this.prevNum;
  if(this.currentNum == false)
    this.currentNum = this.minNum;

  this.setNextPrevNum();

};

/* Set Next and Previous Number */
BookPage.prototype.setNextPrevNum = function() {

  this.prevNum = (this.currentNum > this.minNum) ? this.currentNum - 1 : false;
  this.nextNum = (this.currentNum < this.maxNum) ? this.currentNum + 1 : false;

};


$(function() {

  var book = new BookPage("#page", "#pageMain", 0, 0, 10);
  book.displayPage();

});
