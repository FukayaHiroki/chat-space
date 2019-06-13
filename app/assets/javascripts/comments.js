$(function(){
  function buildMessage(message){
    var html = `<div class="massage">
                  <div class="massage__infomation">
                    <div class="massage__infomation__name">
                    深谷裕貴
                    </div>
                    <div class="massage__infomation__date">
                    2019/06/12 10:51
                    </div>
                    </div>
                    <div class="massage__text">
                    <p class="lower-message__content">
                    こんにちは
                    </p>
                  
                  </div>
                </div>`
    return html
  }
})
  $(function(){
    $('#new_message').on('submit',function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(message){
        console.log(message.text);
      })
      .fail(function(message){
        console.log(message.text);
      })
    })
  });