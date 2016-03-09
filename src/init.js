$(document).ready(function() {
  window.dancers = [];
  var songLookup = {
    'TribalDancer': 'music/example1.mp3',
    'BollywoodDancer': 'music/example2.mp3',
    'BalletDancer': 'music/example3.mp3',
    'BlinkyDancer': 'music/example4.mp3'
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var song = songLookup[dancerMakerFunctionName];
    $('audio').attr('src', song);
    console.log('start playing ' + song); 


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * 0.63,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('.foreground').append(dancer.$node);
    dancers.push(dancer);
  });

  // var throttlePerspective = _.debounce(function(event) {
  //   var perspective = (1900 / event.screenX) * 10;
  //   // $(this).velocity({'perspective-origin': perspective + '%'}, 50);
  //   $(this).css({'perspective-origin': perspective + '%'});
  // }, 1, true);

  $('.container').on('mousemove', function(event) {
    var perspective = (event.screenX / 1919) * 100;
    $(this).css({'perspective-origin': perspective + '%'});

    // throttlePerspective.call(this, event);
    console.log('MOUSE MOVED!' + ' X: ' + event.screenX + ' Y: ' + event.screenY);
  });

  $('.lineUpButton').on('click', function(event) {
    // event.preventDefaults();
    _(dancers).each(function(el, ind) {
      el.lineUp(ind + 1, dancers.length);
    });
  });
});