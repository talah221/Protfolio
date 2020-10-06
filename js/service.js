var portData = [{
  id: "sokoban",
  name: "Sokoban",
  title: "Minesweeper",
  desc: "the great old childhoold game MineSweeper built with Vanilla JS.",
  url: "https://talah221.github.io/MineSweeper/",
  publishedAt: 1448693940000,
  labels: ["a", "b"],
},
{
  id: "b",
  name: "b",
  title: "Bookshop ERP",
  desc: "Books inventory management system, Includes CRUD, sorting and language support",
  url: "https://talah221.github.io/BooksManager/",
  publishedAt: 1448693940000,
  labels: ["", ""],
},
{
  id: "c",
  name: "c",
  title: "Responsive Design",
  desc: "An example for a 100% responsive website built from scratch",
  url: "proj/misterBlogger/index.html",
  publishedAt: 1448693940000,
  labels: ["", ""],
},
{
  id: "d",
  name: "d",
  title: "Meme Generator",
  desc: "image maker that allows you to add custom resizable text to images. ",
  url: "https://talah221.github.io/Meme-Generator/",
  publishedAt: 0,
  labels: ["", ""],
},
{
  id: "e",
  name: "e",
  title: "Notes&Books Apps",
  desc: "React app: an interactive Notes&Mails App",
  url: "https://talah221.github.io/Appsus/#/email",
  publishedAt: 0,
  labels: ["", ""],
},
{
  id: "f",
  name: "f",
  title: "Quiz-Up!",
  desc: "Marketplace of Quizs. a Place where you can create, play alone or PlayerVSPlayer!",
  url: "https://quiz-upp.herokuapp.com/#/",
  publishedAt: 0,
  labels: ["", ""],
}
]

function renderPortGrid(portData) {
  var HTMLstr = '<div class="row">';

  portData.map(function (obj, iDx) {

    HTMLstr += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${iDx + 1}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${iDx + 1}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${obj.title}</h4>
            <p class="text-muted">${obj.desc}</p>
          </div>
        </div>`;
  });


  HTMLstr += `</div>`
  document.querySelector('.port-grid').innerHTML = HTMLstr;
}

function renderModals(portData) {
  var HTMLstr = '';

  portData.map(function (obj, iDx) {

    HTMLstr += `<div class="portfolio-modal modal fade" id="portfolioModal${iDx + 1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${obj.title}</h2>
                <p class="item-intro text-muted">${obj.desc}</p>
                <a href="${obj.url}" target=_blank"><img class="img-fluid d-block mx-auto" src="img/portfolio/0${iDx + 1}-full.jpg" alt="${obj.title}"></a>
                <p></p>
                
                <form action="${obj.url}" target="_blank">
                <input class="btn btn-primary" type="submit" value="< Visit Website >" />
              </form>

              <p></p><p></p>



                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close</button>

                   
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  });

  document.querySelector('.modal-load').innerHTML = HTMLstr;

}

function sendMail() {

  subEl = document.querySelector('#input-subject').value;
  messEl = document.querySelector('#input-message').value;

  var hrefStr = `https://mail.google.com/mail/?view=cm&fs=1&to=talni250@gmail.com&su=${subEl}&body=${messEl}`;
  window.open(hrefStr, '_blank');

}