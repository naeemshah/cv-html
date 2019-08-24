var portfolioItemJson = [
    { 
      "name":"Visualize-ROI",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "nodejs", "reactjs", "php", "python", "yii"',
      "image":"images/portfolio/vroi.png",
      "tech":"PHP/Reacjs/Nodejs/Yii/Python"

    },
    { 
      "name":"Easy Jackets",
      "ajax_link":"https://naeemshah.me.me/portfolio/ej.html",
      "groups":'"all", "wordpress", "reactjs", "php"',
      "image":"images/portfolio/custom_jackets.png",
      "tech":"PHP/Reacjs/Wordpress"

    },
    { 
      "name":"Service Buddy",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "laravel", "php"',
      "image":"images/portfolio/service_buddy.png",
      "tech":"PHP/Laravel/Javascript/Mobile/Stripe"

    }
    ,
    { 
      "name":"Rapid Soft",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "codeigniter", "php"',
      "image":"images/portfolio/rapidsoft.png",
      "tech":"PHP/codeigniter/HTML/CSS"

    }
    ,
    { 
      "name":"Livly",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "magento", "php"',
      "image":"images/portfolio/livly.png",
      "tech":"PHP/Magento/Ecommerce"

    }
    ,
    { 
      "name":"GetWell3",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "codeigniter", "php"',
      "image":"images/portfolio/getwell3.png",
      "tech":"PHP/Codeigniter/Ecommerce/Stripe"

    }
    ,
    { 
      "name":"StyleFinder",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "wordpress", "php"',
      "image":"images/portfolio/stylefinder.png",
      "tech":"PHP/Wordpress/Ecommerce/Stripe"

    }
    ,
    { 
      "name":"FroalSupply",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "magento", "php"',
      "image":"images/portfolio/floralsupply.png",
      "tech":"PHP/Magento/Ecommerce"

    },
    { 
      "name":"Hipity",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "php"',
      "image":"images/portfolio/hipity.png",
      "tech":"React Native/Nodejs/Wordpress/Joomla"

    }
    ,
    { 
      "name":"Royal Dental Clinic",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "php"',
      "image":"images/portfolio/royaldentalclinic.png",
      "tech":"PHP/Wordpress/Ecommerce"

    }
    ,
    { 
      "name":"JK Instruments",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "php"',
      "image":"images/portfolio/jkinstruments.png",
      "tech":"PHP/OpenCart/Ecommerce"

    }
    ,
    { 
      "name":"London Luggage",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "php"',
      "image":"images/portfolio/londonluggage.png",
      "tech":"PHP/Wordpress/Ecommerce"

    }
    ,
    { 
      "name":"Solar Energy",
      "ajax_link":"https://naeemshah.me.me/portfolio/vroi.html",
      "groups":'"all", "php"',
      "image":"images/portfolio/solarenergy.png",
      "tech":"PHP/Wordpress/Ecommerce"

    }

    


      ]

var portfolioItemHtml   = document.getElementById("portfolio-item").innerHTML;
var portfolioItemTemplate = Handlebars.compile(portfolioItemHtml);

portfolioItemJson.map(function(item){
var portfolioItem    = portfolioItemTemplate(item);
$("#portfolio_grid").append(portfolioItem); 
})