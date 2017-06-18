FROM centos:7 

RUN yum install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_6.x |  bash -
RUN yum install -y nodejs

RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "index.js"]
