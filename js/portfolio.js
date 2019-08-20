var portfolioItemJson = [
    { 
      "name":"Visualize-Roi",
      "ajax_link":"https://naeemshah.github.io/cv-html/portfolio/vroi.html",
      "groups":"'all','media'",
      "image":"images/portfolio/vroi.png",
      "tech":"PHP/Reacjs/Nodejs/Yii/Python"

    }
      ]

var portfolioItemHtml   = document.getElementById("portfolio-item").innerHTML;
var portfolioItemTemplate = Handlebars.compile(portfolioItemHtml);

portfolioItemJson.map(function(item){
var portfolioItem    = portfolioItemTemplate(item);
$("#portfolio_grid").append(portfolioItem); 
})