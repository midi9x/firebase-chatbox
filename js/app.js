$(document).ready(function() {
    var fireBaseChat = new FireBaseChat();
    fireBaseChat.init();

    var ref = new Firebase("https://chatbox-23d3c.firebaseio.com");
    ref.createUser({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
    ref.authWithPassword({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });

});

function FireBaseChat() {

}

FireBaseChat.prototype.init = function() {
    this.checkLogin();
    this.processLoginRegister();

}

FireBaseChat.prototype.checkLogin = function() {
    $('#login').click();
    $('#loginModal').modal('show');   
}


/** for login and register */
FireBaseChat.prototype.processLoginRegister = function() {
    this.registerClick();
    this.loginClick();
    this.showLogin();
    this.showRegister();
}

FireBaseChat.prototype.registerClick = function() {
    $('#register').on('click', function(e) {
        e.preventDefault();
        $('#showRegister').click();
        setTimeout(function() {
            $('#loginModal').modal('show');    
        }, 230);
    });
};

FireBaseChat.prototype.loginClick = function() {
    $('#login').on('click', function(e) {
        e.preventDefault();
        $('#showLogin').click();
        setTimeout(function() {
            $('#loginModal').modal('show');    
        }, 230);
    });
};

FireBaseChat.prototype.showLogin = function() {
    $('#showLogin').on('click', function(e) {
        e.preventDefault();
        $('.registerBox').fadeOut('fast', function(e) {
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast', function() {
                $('.login-footer').fadeIn('fast');
            });
            $('.modal-title').html('Login');
            $('.with').html('Login with');
            
        }); 
    });
};

FireBaseChat.prototype.showRegister = function() {
    $('#showRegister').on('click', function(e) {
        e.preventDefault();
        $('.loginBox').fadeOut('fast', function(e) {
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast', function() {
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register');
            $('.with').html('Register with');
            
        }); 
    });
};


FireBaseChat.prototype.shakeModal = function() {
    $('#loginModal .modal-dialog').addClass('shake');
    setTimeout(function() { 
        $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000); 
}

/** end login and register */
