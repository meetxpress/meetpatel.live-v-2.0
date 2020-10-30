var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/meetxpress/repos', true)
request.onload = function() {
    var data = JSON.parse(this.response);
    var statusHTML = '';
    console.log(data);
    
    $.each(data, function(i, status){
        statusHTML +='<div class="service-col">';
            statusHTML +='<div class="service-item content-box">';
                if(status.fork == true){
                    statusHTML +='<div><a href="'+status.html_url+'" target="_blank" style="text-decoration:none">';
                        statusHTML +='<img src="https://img.icons8.com/ios-glyphs/25/4bffa5/code-fork.png" style="vertical-align:middle;"/>';
                        statusHTML +='<span class="text" style="font-size:20px; vertical-align:top; font-weight: bold; color: #4bffa5; padding-left:3px">'+ status.name +'</span>';
                    statusHTML +='</a></div>';
                } else{
                    statusHTML +='<div><a href="'+status.html_url+'" target="_blank" style="text-decoration:none">';
                        statusHTML +='<img src="https://img.icons8.com/ios-filled/22/4bffa5/repository.png" style="vertical-align:middle;"/>';
                        statusHTML +='<span class="text" style="font-size:20px; vertical-align:top; font-weight: bold; color: #4bffa5; padding-left:3px">'+ status.name +'</span>';
                    statusHTML +='</a></div>'; 
                }                   
                statusHTML +='<div class="name">';
                    statusHTML +='<span style="margin-right: 15px;">';
                        statusHTML +='<img src="https://img.icons8.com/ios-filled/22/4bffa5/source-code.png" style="vertical-align:middle;"/>';
                        statusHTML +='<span class="text" style="font-size:18px; vertical-align:top; padding-left:3px">'+ status.language+'</span>';
                    statusHTML +='</span>';
                    statusHTML +='<span>';
                        statusHTML +='<img src="https://img.icons8.com/material-rounded/22/4bffa5/time-machine.png" style="vertical-align:middle;"/>';
                        statusHTML +='<span class="text" style="font-size:18px; vertical-align:top; padding-left:3px">'+ status.language+'</span>';
                    statusHTML +='</span>';                    
                statusHTML +='</div>';            
            statusHTML +='</div>';
        statusHTML +='</div>';
    });
    $('.service-items').html(statusHTML);
}
request.send();

//To find total commits
//request.open('GET', 'https://api.github.com/repos/meetxpress/meetpatel.live-v-2.0/commits', true)