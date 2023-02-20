/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor. Designed and developed by Shashikanth C R
 */

//var script = document.createElement('script');
//script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
//script.type = 'text/javascript';

$(document).ready(function(){
          
    var loc = 'helper/checkUser';
    $(':submit').click(function(){
        var un = $('#lname').val();
        var ps = $('#pwd').val();
        checkUser(loc, un, ps);
    })
    
});


function checkUser(loc,un,ps){
    $.ajax({
        type: "GET",
        url: loc,
        data: "uname="+un+"&pwd="+ps,
        
        success: function(data) { 
            alert(data);
            document.getElementById('minfo').innerHTML = html;
        }
    });
}        
            
