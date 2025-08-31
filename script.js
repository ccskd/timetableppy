function mapShow(venue){
    show = document.getElementById("show");
    if (venue == 'kklg'){
        show.innerText = 'See map: 21';
    }
    else if (venue == 'cpd') {
        show.innerText = 'See map: 35b';
    }
    else if (venue == 'wlgh') {
        show.innerText = 'See map: 4b';
    }
    else if (venue == 'mwt') {
        show.innerText = 'See map: 10';
    }

}