class PingController < ApplicationController
  def test
    render json: { success: true }
  end
end
