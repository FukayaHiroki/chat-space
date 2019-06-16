class Api::MessagesController < ApplicationController
  def index
    @new_messages = @messages.where("id > ?", params[:id])
  end
end