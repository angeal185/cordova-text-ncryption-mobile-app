$('.modal').modal({
      dismissible: true,
      opacity: .8,
      inDuration: 400,
      outDuration: 200, 
      startingTop: '4%',
      endingTop: '10%'
    }
  );
  
document.getElementById('to-top').onclick = function () {
    scrollTo(document.body, 0, 100);
}

    function scrollTo(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 2;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 2);
    }, 10);
}