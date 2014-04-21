/* ==============
 *  TeX Controll
 * ============== */
var texCtrl = function($scope) {
  // Initialize tex
  $scope.tex = "";

  $scope.updateTex = function(tex) {
    // Get MathJax element
    var preview = MathJax.Hub.getAllJax("preview")[0];

    // Push tex to pel
    MathJax.Hub.Queue(["Text", preview, tex])();
  };
};