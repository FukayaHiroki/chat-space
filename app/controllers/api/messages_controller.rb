# class Api::MessagesController < ApplicationController
#   def index
#     @message = Message.find(params[:group_id])
#     @messages = @group.messages.includes(:user)
#     respond_to do |format|
#       format.html
#       format.json{@s = @messages.where('id > ?', params[:id])}
#     end
# end

class Api::MessagesController < ApplicationController
  def index
    @new_message = Message.where('id > ?', params[:id])
    respond_to do |format|
      format.html
      format.json
    end
  end
end