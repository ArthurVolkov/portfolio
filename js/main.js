console.log('Starting up');


$(document).ready(function () {
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
                    <img class="img-fluid" src="img/portfolio/${idx + 1}-thumbnail.jpg" alt="">
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
    var strHTML = `<h2>${project.name}</h2>
                   <p class="item-intro text-muted">${project.title}.</p>
                   <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
                   <p>${project.desc}</p>
                   <ul class="list-inline">
                     <li>Hashtags: ${project.labels.join(', ')}</li>
                     <li>Date: ${project.publishedAt}</li>
                     <!-- <li>Client Threads</li>> -->
                     <li class="m-2" >Category: ${project.category}</li
                   </ul>
                   <a class="btn btn-primary" href="${project.url}" target="_blank">Open The Project</a>
                   <button class="btn btn-primary" data-dismiss="modal" type="button">
                       <i class="fa fa-times"></i>
                       Close details</button>`
    $('.modal-body').html(strHTML)
}


function onSend() {
    var emailAdress = $('#input1').val();
    var emailSubject = $('#textarea1').val();
    var emailTxt = $('#textarea2').val();
    if (!ValidateEmail(emailAdress) || !emailSubject || !emailTxt) return
    var link = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAdress}&su=${emailSubject}&body=${emailTxt}`;
    window.open(link)
}


function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}
