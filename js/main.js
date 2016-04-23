

// $(function() {
// 	$('a[href*=#]').on('click', function(e) {
// 		e.preventDefault();
// 		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
// 	});
// });
// This function will be executed when the user scrolls the page.
$(window).scroll(function(e) {
    // Get the position of the location where the scroller starts.
  var graphicsStartOffset = $(".scroller_anchor_graphics").offset().top;  
  var filmstripStartOffset = $(".scroller_anchor_filmstrip").offset().top;

  scrollControlComponent('.scroller_graphics', graphicsStartOffset, filmstripStartOffset);
  scrollControlComponent('.scroller_filmstrip_container', filmstripStartOffset, Number.MAX_SAFE_INTEGER);
});

function scrollControlComponent(component, startOffset, endOffset) {
  // console.log('scrollTop: ' + $(this).scrollTop());
  // console.log('component: ' + component);
  // console.log('startOffset: ' + startOffset);
  // console.log('endOffset: ' + endOffset);

    // Check if the user has scrolled and the current position is after the scroller start location and if its not already fixed at the top 
    if ($(this).scrollTop() >= startOffset 
        && $(this).scrollTop() <= endOffset
        && $(component).css('position') != 'fixed') { 
      // Change the CSS of the scroller to hilight it and fix it at the top of the screen.
      $(component).css({
          // 'background': '#CCC',
          // 'border': '1px solid #000',
          'position': 'fixed',
          'width':'100%',
          'z-index':99,
          'top': '0px',
          'visibility': 'visible'
      });
    } else if (($(this).scrollTop() < startOffset
                || $(this).scrollTop() > endOffset)
               && $(component).css('position') != 'relative') {
       
      // Change the CSS and put it back to its original position.
      $(component).css({
          'position': 'relative',
          'visibility': 'hidden'
      });
    }  
}

$(document).ready(function(){
  // First should not be visible.
  $('#filmstrip').css('visibility', 'hidden');

  var subtitles_for_video_1 = [
    {time:0, caption:"In physics, “like charges repel each other while opposite charges attract,” right?"},
    {time:5.05, caption:" So why would anyone want to engage in homosexual activity?"},
    {time:6.19, caption:"Are they out of their minds? Are they psycho? "},
    {time:9.12, caption:" Isn’t homosexuality inherited? "},
    {time:12.27, caption:" It’s not an acquired characteristic but an innate trait."},
    {time:15.09, caption:" I think this is just a normal sexual orientation."},
    {time:18.24, caption:" I don’t have any issue with homosexuality. "},
    {time:20.06, caption:" It’s just like, ‘I like drinking beer’ and he likes drinking some <span class=\"highlight\">other beverage.</span> "},
    {time:23.06, caption:" It’s just like that, very simple."},
    {time:25.04, caption:" I think it’s okay."},
    {time:26.09, caption:" If they are good-looking, they will be pleasing to me. "},
    {time:29.01, caption:" But if they don’t, they nauseate me. "},
    {time:33.24, caption:" From the perspective of human relationships,"},
    {time:38.02, caption:" It’s okay if they live together. "},
    {time:42.16, caption:" But from the perspective of human reproduction,"},
    {time:46.08, caption:" it’s not gonna work. "},
    {time:47.07, caption:" It’s absolutely bad!"},
    {time:48.25, caption:" Homosexuality won’t do any good for society. "},
    {time:50.07, caption:" Two men living together? "},
    {time:51.21, caption:" Who does the housework? "},
    {time:53.07, caption:" Men certainly can’t do housework."},
    {time:54.19, caption:" Women should do the housework. "},
    {time:56.08, caption:" Then why would two men bother to get married? "},
    {time:57.48, caption:" The purpose for getting married is to make a family."},
    {time:59.27, caption:" Families with one man are already terrible. "},
    {time:63.01, caption:" Not to mention a family which is has two men."},
    {time:64, caption:"If it exists, it has a reason."},
    {time:65.24, caption:" I don’t discriminate them"},
    {time:66.25, caption:" But I won’t try to be gay myself. "},
    {time:69.16, caption:" I can’t stand two men being together. "},
    {time:73.03, caption:" Two dudes making out? "},
    {time:76.13, caption:" I don’t think it’s appropriate. "},
    {time:78.21, caption:" Everyone has his own morals and ethics. "},
    {time:82.04, caption:" I think it’s his own choice. "},
  ];

 

  var subtitles_for_video_2 = [
    {time:4.3, caption:"Something here what they are saying."},
    {time:5.1, caption:"Something here what they are saying."},
    {time:8.3, caption:"Something here what they are saying."},
    {time:41.4, caption:"Something here what they are saying."}
  ];

  var questions = [
  "what do you think of homosexuality?",
  "what do you think of homosexuality?"
  ];
  
   $("#video1")
      .on("playProgress", function(e, data){
        for(var i=0; i < subtitles_for_video_1.length; i++){
          if(data.seconds > subtitles_for_video_1[subtitles_for_video_1.length - 1].time){
            $("#subtitles").html(subtitles_for_video_1[subtitles_for_video_1.length - 1].caption);
          } else {
            if(data.seconds > subtitles_for_video_1[i].time && data.seconds < subtitles_for_video_1[i + 1].time){
              $("#subtitles").html(subtitles_for_video_1[i].caption);
            }
          }
        }
      });
  
  $("#question1").on("click", function(){
    $("#filmstrip").stop().animate({"left":0}, {queue:false, duration:600});
    /* Needs vimeo plugin to work */

    $("#question_title").text(questions[0])

    $("#video1")
      .vimeo("play");

  });

  $("#question2").on("click", function(){
    $("#filmstrip").stop().animate({"left":-400}, {queue:false, duration:600});
    /* Needs vimeo plugin to work */
    $("#video2")
      .vimeo("play")
      .on("playProgress", function(e, data){
        for(var i=0; i < subtitles_for_video_2.length; i++){
          if(data.seconds > subtitles_for_video_2[subtitles_for_video_2.length - 1].time){
            $("#subtitles").html(subtitles_for_video_2[subtitles_for_video_2.length - 1].caption);
          } else {
            if(data.seconds > subtitles_for_video_2[i].time && data.seconds < subtitles_for_video_2[i + 1].time){
              $("#subtitles").html(subtitles_for_video_2[i].caption);
            }
          }
        }
      });
  });

})
