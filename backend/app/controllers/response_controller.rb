class ResponseController < ApplicationController
  def text_response
    questionText = params[:question]

    path = "#{Rails.root}/app/scripts/temp/input.txt"  
    File.open(path, "w") do |f|
      f.write(questionText)
    end

    if params[:speech].present? && params[:speech] == "true"
      system("cd app/scripts && python3 textToSpeech.py")
      path = "#{Rails.root}/app/scripts/temp/output.mp3"
      
      response.headers["Content-Disposition"] = 'attachment; filename="output.mp3"'
      response.headers["Content-Type"] = "audio/mpeg"

      send_file path, disposition: 'attachment'
    else
      response = "Failed!"
      system("cd app/scripts && python3 textToText.py")
      path = "#{Rails.root}/app/scripts/temp/output.txt"
      
      File.open(path) do |f|
        response = f.read
      end
      File.delete(path)

      render json: { answer: response, question: questionText }
    end
  end

  def audio_response
    render json: { answer: "In development..." }
  end

  def video_response
    render json: { answer: "In development..." }
  end
end