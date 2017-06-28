scrollTo = (element, to, duration) ->
  if duration < 0
    return
  difference = to - (element.scrollTop)
  perTick = difference / duration * 2
  setTimeout (->
    element.scrollTop = element.scrollTop + perTick
    scrollTo element, to, duration - 2
    return
  ), 10
  return

$('.modal').modal
  dismissible: true
  opacity: .8
  inDuration: 400
  outDuration: 200
  startingTop: '4%'
  endingTop: '10%'

document.getElementById('to-top').onclick = ->
  scrollTo document.body, 0, 100
  return