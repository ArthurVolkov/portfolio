console.log('Starting up');


$(document).ready(function() {
    renderProjects()
})


function renderProjects() {
    var projects = getProjects();
    var strHTML = projects.map(function (project, idx) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                  <a onclick="renderModal(${idx})" class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${idx+1}-thumbnail.jpg" alt="">
                  </a>
                  <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.title}</p>
                  </div>
                </div>`
    }).join('');
    $('.inject-projects').html(strHTML);
}


function renderModal(idx) {
    var project = getProjects()[idx];
    var strHTML = `<h2>${project.name }</h2>
                   <p class="item-intro text-muted">${project.title}.</p>
                   <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
                   <p>${project.desc}</p>
                   <ul class="list-inline">
                     <li>Date: January 2017</li>
                     <li>Client: Threads</li>
                     <li>Category: Illustration</li>
                   </ul>
                   <a class="btn btn-primary" href="${project.url}" target="_blank">Open The Project</a>
                   <button class="btn btn-primary" data-dismiss="modal" type="button">
                       <i class="fa fa-times"></i>
                       Close details</button>`
    $('.modal-body').html(strHTML)
}