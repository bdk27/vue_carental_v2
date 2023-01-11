export default function() {
    // toTopArrow
    let topBtn = document.getElementById('topBtn');

    window.onscroll = function(){
        scrollFunc();
    }
    function scrollFunc(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            topBtn.style.display = 'block';
        }else {
            topBtn.style.display = 'none';
        }
    }
    topBtn.onclick = function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
