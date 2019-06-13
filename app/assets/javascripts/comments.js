$(function(){
  function buildMessage(message){
    var html = `<div class="massage">
                  <div class="massage__infomation">
                    <div class="massage__infomation__name">
                    ${message.user.name}
                    </div>
                    <div class="massage__infomation__date">
                    ${message.created_at}
                    </div>
                    </div>
                    <div class="massage__text">
                    <p class="lower-message__content">
                    ${message.text}
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
      .done(function(data){
        console.log("test");
        $('.messages') = buildMessage;
        $('.message__text').var('');
      })
      .fail(function(data){
        alert("エラー");
      })
    })
  });