class AccountsController < ApplicationController
  # http_basic_authenticate_with name: "me", password: "pass"

  before_action :authenticate_user!

  def index
    accounts = current_user.accounts
      render :json => accounts
  end

end