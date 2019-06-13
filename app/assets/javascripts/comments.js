$(function(){
  function buildMessage(message){
    var html = `<div class="massage">
                  <div class="massage__infomation">
                    <div class="massage__infomation__name">
                    ${message.user_name}
                    </div>
                    <div class="massage__infomation__date">
                    ${message.created_at}
                    </div>
                    </div>
                    <div class="massage__text">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                  </div>
                </div>`
    return html;
  }

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
      var html = buildMessage(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert("エラー");
    })
  })
});