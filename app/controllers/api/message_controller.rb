class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    # 最後のメッセージ指定は？
    @new_messages = @messages.where("id > ?", params[:id])
  end
end