/**************************************
 * developer: Mohamed Salah
 * email: sala7thedeveloper@gmail.com
 **************************************/



/* ******************************
 * Start of Navigation functions
 ****************************** */


/*  == Back to top button == */

/* If distance between scroll and top of the page is 500 .. 
 the '#features' section is shown then show the '.back-to-top' button */

$(window).scroll(function() {

    /* Show back to top at 500 */
    if ($(window).scrollTop() >= 500) {
        $('.back-to-top').removeClass('hidden');
    } else {
        $('.back-to-top').addClass('hidden');

    }

})

/*  XX Back to top button XX */


/*  == Mobile Navbar == */

$('#openMobileNavbar').click(function() {
    openMobileNavbar();
})

$('#closeMobileNavbar').click(function() {
    hideMobileNavbar();
})

/* Hide mobile navbar if any menu is clicked */
$('.go-to-content').click(function() {
    hideMobileNavbar();
})

/* == Show and hide mobile navbar functions == */

function openMobileNavbar() {

    $('.mobile-navbar').removeClass('hidden');
    /* Hide burger icon */
    $('#openMobileNavbar').addClass('hidden');
}


function hideMobileNavbar() {
    $('.mobile-navbar').addClass('hidden');
    /* Hide burger icon */
    $('#openMobileNavbar').removeClass('hidden');
}
/* XX Show and hide mobile navbar functions XX */

/*  XX Mobile Navbar XX */


/* ******************************
 * End of Navigation functions
 ****************************** */




/* **************************
 * Start of Features Section
 *************************** */

/* Change active feaature tab */
$('.tab-title').click(function() {
    unsetTabsActiveClass();
    /* Style selected tab with 'active' class */
    $(this).addClass('active');
    hideAllTabsContents();

    if ($(this).attr('id') == 'tab1Title') {
        showTab(1);
    } else if ($(this).attr('id') == 'tab2Title') {
        showTab(2);
    } else {
        showTab(3);
    }
})

/* Unset 'active' class from all tabs title */
function unsetTabsActiveClass() {
    $('.tab-title').each(function() {
        $(this).removeClass('active');
    })
}

/* Hide all tabs contents */
function hideAllTabsContents() {
    $('.tab-content').each(function() {
        $(this).addClass('hidden');
    })
}

/* Show the active tab */
function showTab(tabNumber) {

    switch (tabNumber) {
        case 1:
            $('#tab1Content').removeClass('hidden');
            break;
        case 2:
            $('#tab2Content').removeClass('hidden');

            break;
        case 3:
            $('#tab3Content').removeClass('hidden');

            break;
    }

}


/* ***********************
 * End of Features Section
 *********************** */





/* *********************
 * Start of FAQ Section
 ********************** */

/* Handling FAQ Question click */
$('.faq-question-button').click(function() {
    /* Check this question state */
    if (!$(this).closest('.faq-container').find('.faq-answer').hasClass('hidden')) {
        /* then this answer is opened */
        /* Hide all answers */
        hideAllAnswers();

    } else {
        /* then this answer is not opened */
        /* Hide all answers */
        hideAllAnswers();
        /* Open this answer */
        /* Show the current question answer */
        $(this).closest('.faq-container').find('.faq-answer').removeClass('hidden');
        /* Change arrow icon */
        $(this).parent().find('.arrow .icon-active').removeClass('hidden');
        $(this).parent().find('.arrow .icon').addClass('hidden');

    }


});
/* Hide all answers */
function hideAllAnswers() {
    /* Hide answers */
    $('.faq-answer').addClass('hidden');
    /* Change arrows icon */

    $('.arrow .icon-active').addClass('hidden');
    $('.arrow .icon').removeClass('hidden');
}


/* *********************
 * End of FAQ Section
 ********************** */





/* ************************
 * Start of Contact Section
 ************************* */


/* If use type in email input then check if it's a valid email or not
 * if not valid:
 * 1- add 'error' class to the '.contact-email'
 * 2- 'remove 'hidden' from '.error-icon' and '.email-error' 
 */

$('#contactUsButton').click(function() {
    if (!isEmail($('.contact-email').val())) {
        showEmailError();
    } else {
        hideEmailError();
        /* Prepare the email*/
        window.location.assign('mailto:sala7thedeveloper@gmail.com?subject=Email From Bookmark Landing Page!?body=From ' + $('.contact-email').val());

    }
})

/* Hide email error on typing */
$('.contact-email').keypress(function() {
    hideEmailError();
})

/* Email validation function */
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

/* == Show and hide email input error funtions == */
function showEmailError() {

    $('.contact-email').addClass('error');
    $('.error-icon').removeClass('hidden');
    $('.email-error').removeClass('hidden');
}


function hideEmailError() {

    $('.contact-email').removeClass('error');
    $('.error-icon').addClass('hidden');
    $('.email-error').addClass('hidden');
}

/* XX Show and hide email input error funtions XX */



/* **********************
 * End of Contact Section
 *********************** */