$(function(){
    $('#usernameInput').keyup(function(){
        $('#greet').text(`Hello ${$('#usernameInput').val()}`);
    })

    chrome.storage.sync.get('username', function(options){
        if(options.username){
            $('#usernameDisplay').text(options.username);
            $('#usernameInput').val(options.username);

        }
    })

    chrome.storage.sync.get('wordsInput', function(options){
        if(options.wordsInput){
            $('#wordsInput').val(options.wordsInput);
        }
    })

    $('#submit').click(function(){
        chrome.storage.sync.get('username', function(options){
            var newUsername = '';
            if(options.username){
                newUsername = options.username;
            }

            var inputUsername = $('#usernameInput').val();
            if(inputUsername){
                newUsername = inputUsername;
            }

            chrome.storage.sync.set({'username': newUsername});

            $('#usernameDisplay').text(newUsername);
            $('#usernameInput').val('');

            // Send a notification
            var notifOptions = {
                type: 'basic',
                iconUrl: 'img/notif-48.png',
                title: 'Username was changed!',
                message: `Hello, ${newUsername}!`
            }
            chrome.notifications.create('usernameNotif', notifOptions);
            close();
        });

        chrome.storage.sync.get('wordsInput', function(options){
            var newWordsInput = '';
            if(options.wordsInput){
                newWordsInput = options.wordsInput;
            }

            var inputNewWords = $('#wordsInput').val();
            if(inputNewWords){
                newWordsInput = inputNewWords;
            }

            chrome.storage.sync.set({'wordsInput': newWordsInput});

            // Send a notification
            var notifOptions = {
                type: 'basic',
                iconUrl: 'img/notif-48.png',
                title: 'Word list was updated!',
                message: `Word list was updated!`
            }
            chrome.notifications.create('usernameNotif', notifOptions);
            close();
        });
    })
});