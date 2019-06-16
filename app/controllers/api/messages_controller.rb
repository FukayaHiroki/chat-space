class Api::MessagesController < ApplicationController
  def index
    @new_message = Message.where('id > ?', params[:id])
    respond_to do |format|
      format.html
      format.json
    end
  end
end