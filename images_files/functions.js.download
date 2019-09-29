( function( window, document ) {
  
  const html = document.querySelector( 'html' )
  const videos = html.querySelectorAll( 
    `.format-video iframe, 
     .format-video object, 
     .format-video embed` 
  )
  const radioAndCheckbox = html.querySelectorAll(
    `.entry-content input[type="radio"], 
     .widget input[type="radio"], 
     .entry-content input[type="checkbox"], 
     .widget input[type="checkbox"]` 
  )
  const scrollToTop  = html.querySelector( '#scroll-to-top' )

  // Replace no-js class with js on html element
  html.classList.remove( 'no-js' )
  html.classList.add( 'js' )

  // Force videos 16:9 aspect ratio
  function sizeVideos() {
    videos.forEach( function(video) {
      video.style.height = Math.floor( video.offsetWidth / 16 * 9 ) + 'px'
    } )
  }

  sizeVideos()

  window.addEventListener( 'resize', function() {
    sizeVideos()
  } )

  // Add labels to radio buttons and check boxes
  radioAndCheckbox.forEach( ( input, i ) => {
    const label = document.createElement('label')

    if ( !input.id ) input.id = `ruffie-labeler-${i}`

    input.classList.add( 'ruffie-labeler' )
    label.setAttribute( 'for', input.id )

    input.parentNode.insertBefore(label, input.nextSibling)
  } )

  // Scroll to top
  window.addEventListener( 'scroll', function() {
    scrollToTop.style.bottom = window.scrollY > 500 ? '20px' : '-2000px'
  } )


  scrollToTop.addEventListener( 'click', function(event) {
    event.preventDefault()
    window.scrollTo( { top: 0, behavior: 'smooth' } )
  } )


} ) ( typeof window != 'undefined' ? window : this, document )