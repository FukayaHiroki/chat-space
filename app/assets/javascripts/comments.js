$(function(){
  function buildMessage(message){
    var image = (message.image)? `<image class="lower-message__image" src="${message.image}">`:"";
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="message__infomation">
                    <div class="message__infomation__name">
                    ${message.user_name}
                    </div>
                    <div class="message__infomation__date">
                    ${message.created_at}
                    </div>
                    </div>
                  <div class="message__text">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    ${image}
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
      $('#send').attr('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert("エラー");
    })
  })

  //自動更新
  var reloadMessages = function() {
    var last_message_id = $('.message:last').data('message-id');
    console.log(last_message_id)
    $.ajax({
      url: "/groups/:group_id/api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML = buildMessage(message);
        $('.messages').append(insertHTML);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});

  