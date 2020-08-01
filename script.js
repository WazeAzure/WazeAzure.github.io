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
});
