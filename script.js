$(function(){

  $('.modal-out').hide();
  $('#modal').click(
    function(){
      $('body').find('.modal-out').show();
    }
  )
  $('#close').click(function(){
    $('.modal-out').hide();
  })

  $('.icon').hover(
    function(){
      $(this).css('opacity','0.7');
    },
    function(){
      $(this).css('opacity','1');
    }
  )
});
