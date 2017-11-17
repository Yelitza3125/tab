window.addEventListener('load', function(event){
    var elementosTab = document.getElementsByClassName('tab');
    for(var i = 0; i<elementosTab.length; i++) {
        elementosTab[i].addEventListener('click', function showTabs(event){
            var tabSelection = event.target.dataset.tabSelection;
            if(tabSelection === 'salchow') {
                console.log('salchow');
            } else if(tabSelection === 'toe-loop') {
                console.log('toe-loop');
            }else if(tabSelection === 'flip') {
                console.log('flip');
            } else if(tabSelection === 'axel') {
                console.log('axel');

            }
        })
    };
    

});