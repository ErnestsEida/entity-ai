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
      mp3_data = File.read(path)
    
      answer_text = "This answer comes with audio"
    
      response.headers["Content-Type"] = "multipart/mixed; boundary=boundary123"
    
      mp3_part = [
        "--boundary123",
        "Content-Type: audio/mpeg",
        "Content-Disposition: attachment; filename=\"output.mp3\"",
        "",
        mp3_data.force_encoding("BINARY"),
        ""
      ].join("\r\n")
    
      text_part = [
        "--boundary123",
        "Content-Type: text/plain",
        "",
        answer_text,
        ""
      ].join("\r\n")
    
      render plain: "#{mp3_part}\r\n#{text_part}"
    else
      answerText = "Failed!"
      system("cd app/scripts && python3 textToText.py")
      path = "#{Rails.root}/app/scripts/temp/output.txt"
      
      File.open(path) do |f|
        answerText = f.read
      end
      File.delete(path)

      render json: { answer: answerText }
    end
  end

  def audio_response
    render json: { answer: "In development..." }
  end

  def video_response
    render json: { answer: "In development..." }
  end
end