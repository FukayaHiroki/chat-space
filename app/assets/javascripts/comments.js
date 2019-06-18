$(function(){
  function buildMessage(message){
    var image = (message.image)? `<image class="lower-message__image" src="${message.image}">`:"";
    var html = `<div class="message" data-group-id="${message.group_id}" data-message-id="${message.id}">
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
  });

  //自動更新
  var reloadMessages = function() {
    var last_message_id = $('.message:last').data('message-id');
    var group_id = $('.message:last').data('group-id');
    $.ajax({
      url:`/groups/${group_id}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML = buildMessage(message);
        $('.messages').append(insertHTML);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function() {
      alert("自動更新に失敗しました");
    });
  };
  if (location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 5000);
  }
});

// i-036cc6b9ae475924a
// 3.113.75.14
// 8d7cfd866cb512d20e868a1f24e6d0801d8a1e9905cc08cb171ce9f57e57a258af01817e5e8d4d758879f551f0cee20c7bc82bc73337ec7196358a636b739833