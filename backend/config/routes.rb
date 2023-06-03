Rails.application.routes.draw do
  root "ping#test"
  post '/response/text', to: "response#text_response"
  post '/response/audio', to: "response#audio_response"
  post '/response/video', to: "response#video_response"
end
