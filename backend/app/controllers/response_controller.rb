class ResponseController < ApplicationController
  def text_response
    questionText = params[:question]
    path = "#{Rails.root}/app/scripts/temp/input.txt"
    
    File.open(path, "w") do |f|
      f.write(questionText)
    end
    system("cd app/scripts && python3 textToText.py")
    
    path = "#{Rails.root}/app/scripts/temp/output.txt"
    
    response = "Failed!"
    File.open(path) do |f|
      response = f.read
    end
    File.delete(path)

    render json: { answer: response, question: questionText }
  end

  def audio_response
    render json: { answer: "In development..." }
  end

  def video_response
    render json: { answer: "In development..." }
  end
end