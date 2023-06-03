FROM ruby:3.0.2

RUN apt-get update -qq \
    && apt-get install -y nodejs postgresql-client python3-pip

COPY requirements.txt ./

RUN pip install --no-cache-dir --upgrade pip \
  && pip install --no-cache-dir -r ./requirements.txt

ADD . /backend
WORKDIR /backend
RUN bundle install

EXPOSE 3000

CMD ["bash"]