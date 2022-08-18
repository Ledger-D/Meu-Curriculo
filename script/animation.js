(function () {
    var $div = document.querySelectorAll('.efeito')
    var posição = 500
    addEventListener('scroll', function () {
        scroll()
    })

    function scroll() {
        for (x = 0; x < $div.length; x++) {
            
            if ($div[x].getBoundingClientRect().top <= posição) {
                $div[x].style.animation = 'visual 3s forwards'
            }
            if($div[x].getBoundingClientRect().top >= posição){
                $div[x].style.animation =" visual-reverse 3s forwards"
            }
        }
    }







})()