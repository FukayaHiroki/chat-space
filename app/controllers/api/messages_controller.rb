class Api::MessagesController < ApplicationController
  def index
    # メッセージに入っているgroup_id == 今表示されている、グループのIDって条件
    # @group = Group.find(params[:group_id])
    # @messages = @group.messages.includes(:user).where('id > ?', params[:id])
    # @new_message = Message.where('id > ?', params[:id] and 'group_id == ?', params[:group_id])
    @new_message = Message.where('id > ?', params[:id]).where(group_id: params[:group_id])
    respond_to do |format|
      format.html
      format.json
    end
  end
end