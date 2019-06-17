$(function(){
  // 追加ユーザーリスト
  var user_list = $(".user-search-result");

  // 検索結果のHTML
  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    user_list.append(html);
  };
  // 検索していなかった時
  function appendNoUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">一致するユーザーはいません</p>
               </div>`
    user_list.append(html);
  };
  // ユーザーを削除するボタン付きHTML
  function appendDelete(id,name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    $('#chat-group-users').append(html)
  };

  // ユーザーインクリメンタルサーチ
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name : input },
      dataType: 'json'
    })
    // 正常な処理
    .done(function(users) {
      user_list.empty();
      if (users.length !== 0 && input.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        });
      } else if (input.length == 0){
        user_list.empty();
      } else {
        appendNoUser();
      }
    })
    // 情報が上手く送られてこなかった時
    .fail(function() {
      alert('ユーザー検索に失敗しました')
    });
  });
  // 追加ボタンを押された時
  $(document).on("click",'.user-search-add', function(){
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    appendDelete(id, name);
    $(this).parent().remove();
  });
  // 削除ボタン押した時
  $(document).on("click", '.user-search-remove', function() {
    var user_data = $(this).parent().remove();
  });

});