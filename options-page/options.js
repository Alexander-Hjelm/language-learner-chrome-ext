$(function(){
    $('#name').keyup(function(){
        $('#greet').text(`Hello ${$('#name').val()}`);
    })

    chrome.storage.sync.get('username', function(options){
        if(options.username){
            $('#usernameDisplay').text(options.username);
        }
    })

    $('#submit').click(function(){
        chrome.storage.sync.get('username', function(options){
            var newUsername = '';
            if(options.username){
                newUsername = `${newUsername}${options.username}`;
            }

            var inputUsername = $('#name').val();
            if(inputUsername){
                newUsername = `${newUsername}${inputUsername}`;
            }

            chrome.storage.sync.set({'username': newUsername});

            $('#usernameDisplay').text(newUsername);
            $('#name').val('');
        });
    })
});