class ResponseController < ApplicationController
  def text_response
    questionText = params[:question]
    path = "#{Rails.root}/app/scripts/temp/input.txt"
    
    File.open(path, "w") do |f|
      f.write(questionText)
    end

    render json: { answer: "In development...", question: questionText }
  end

  def audio_response
    render json: { answer: "In development..." }
  end

  def video_response
    render json: { answer: "In development..." }
  end
end