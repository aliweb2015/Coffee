
/*!
 * Gastronomyweb - Coffee Bootstrap theme  (http://gastronomyweb.aliaitomar.de)

 */


$(document).ready(function(){

$('#Amenu').hide();
$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $('#Amenu').fadeIn("slow");
        $('#Bmenu').fadeOut("fast");

    }

});

$(window).scroll(function(){
    if($(window).scrollTop()<100){
        $('#Amenu').fadeOut("slow");
        $('#Bmenu').fadeIn("slow");

    }

});
   

    // jQuery for page scrolling feature
function goToByScroll(id){

    $('html,body').animate({
        scrollTop: $(id).offset().top},'slow');
}
$(document).ready(function(){
    $('.navbar a ').click(function(){
        goToByScroll($(this).attr('href'));

        return false;
    });
 $('body').scrollspy({ target: '#Amenu' })
});

    $('.scroll-top').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $('.scroll-top').fadeIn("slow");


        }else{
            $('.scroll-top').fadeOut("slow");
        }

    });

    $('.scroll-top').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    })

$(".navbar a").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});


  /* form validation plugin */
    $.fn.goValidate = function() {
        var $form = this,
            $inputs = $form.find('input:text');

        var validators = {
            name: {
                regex: /^[A-Za-z]{3,}$/
            },
            pass: {
                regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
            },
            email: {
                regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
            },
            phone: {
                regex: /^[2-9]\d{2}-\d{3}-\d{4}$/
            }
        };
        var validate = function(klass, value) {
            var isValid = true,
                error = '';

            if (!value && /required/.test(klass)) {
                error = 'This field is required';
                isValid = false;
            } else {
                klass = klass.split(/\s/);
                $.each(klass, function(i, k){
                    if (validators[k]) {
                        if (value && !validators[k].regex.test(value)) {
                            isValid = false;
                            error = validators[k].error;
                        }
                    }
                });
            }
            return {
                isValid: isValid,
                error: error
            }
        };
        var showError = function($input) {
            var klass = $input.attr('class'),
                value = $input.val(),
                test = validate(klass, value);

            $input.removeClass('invalid');
            $('#form-error').addClass('hide');

            if (!test.isValid) {
                $input.addClass('invalid');

                if(typeof $input.data("shown") == "undefined" || $input.data("shown") == false){
                    $input.popover('show');
                }

            }
            else {
                $input.popover('hide');
            }
        };

        $inputs.keyup(function() {
            showError($(this));
        });

        $inputs.on('shown.bs.popover', function () {
            $(this).data("shown",true);
        });

        $inputs.on('hidden.bs.popover', function () {
            $(this).data("shown",false);
        });

        $form.submit(function(e) {

            $inputs.each(function() { /* test each input */
                if ($(this).is('.required') || $(this).hasClass('invalid')) {
                    showError($(this));
                }
            });
            if ($form.find('input.invalid').length) { /* form is not valid */
                e.preventDefault();
                $('#form-error').toggleClass('hide');
            }
        });
        return this;
    };
    $('form').goValidate();






});