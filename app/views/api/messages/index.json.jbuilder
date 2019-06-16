json.array! @new_message do |message|
  json.id         message.id
  json.content    message.content
  json.image      message.image_url
  json.user_name  message.user.name
  json.created_at message.created_at
  json.group_id   message.group_id
end
