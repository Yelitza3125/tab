window.addEventListener('load', function(event){
    var elementosTab = document.getElementsByClassName('tab');
    var salchow = document.getElementById('salchow');
    var toeLoop = document.getElementById('toe-loop');
    var flip = document.getElementById('flip');
    var axel = document.getElementById('axel');
    for(var i = 0; i<elementosTab.length; i++) {
        elementosTab[i].addEventListener('click', function showTabs(event){
            var tabSelection = event.target.dataset.tabSelection;
            if(tabSelection === 'salchow') {
               // console.log('salchow');
               toeLoop.classList.add('hide');
               flip.classList.add('hide');
               axel.classList.add('hide');
               salchow.classList.add('show');
            } else if(tabSelection === 'toe-loop') {
                // console.log('toe-loop');
                salchow.classList.add('hide');
                flip.classList.add('hide');
                axel.classList.add('hide');
                toeLoop.classList.add('show');
            }else if(tabSelection === 'flip') {
               // console.log('flip');
               toeLoop.classList.add('hide');
               salchow.classList.add('hide');
               axel.classList.add('hide');
               flip.classList.add('show');
            } else if(tabSelection === 'axel') {
                //console.log('axel');
                toeLoop.classList.add('hide');
                flip.classList.add('hide');
                salchow.classList.add('hide');
                axel.classList.add('show');

            }
        })
    };
    

});