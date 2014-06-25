/* =====================
 *   Set the Page Size
 * ===================== */
$(function() {

  // Constant
  var footerHeight  = $(".siteFooter").height();

  var xPaddingScale = 0.02;
  var yPaddingScale = 0.01;
  var xyPageScale   = 1.0;

  var paddingValue  = String(yPaddingScale * 100) + "% " + String(xPaddingScale * 100) + "%";
  var widthValue    = String((1 - xPaddingScale * 2) * 100) + "%";

  // Initialize
  $(".siteFooter").css({ "padding": paddingValue, "width": widthValue });
  $(".main      ").css({ "padding": paddingValue, "width": widthValue });


  /* Resize '.main' and '#page' Size */
  var resizePage = function() {
    // Get window size
    var windowWidth   = $(window).width();
    var windowHeight  = $(window).height();

    // Set main and page size
    var mainWidth     = windowWidth  - (windowWidth * xPaddingScale * 2);
    var mainHeight    = windowHeight - (footerHeight + windowWidth * yPaddingScale * 4);
    var pageWidth     = Math.min(mainHeight, mainWidth);
    var pageHeight    = pageWidth * xyPageScale;

    // Resize
    $(".main").height(mainHeight);
    $("#page").width(pageWidth);
    $("#page").height(pageHeight);

    // console.debug("[WindowSize]: ", windowWidth, windowHeight);
    // console.debug("[FooterHeight]: ", footerHeight);
    // console.debug("[MainSize]: ", mainWidth, mainHeight);
    // console.debug("[PageSize]: ", pageWidth, pageHeight);
  };


  // Resize the page when the window size is changed
  window.onresize = resizePage;

  // Initialize
  resizePage();

});
