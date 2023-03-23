var http = require('http');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db')
var topic = require('./lib/topic')
var author = require('./lib/author')

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // home페이지
    if(pathname === '/'){
      // 쿼리의 id값 없는 기본페이지
      if(queryData.id === undefined){
        topic.home(response);
      } else {
        // 글 상세보기 페이지 - home페이지 쿼리의 id값 존재
        topic.page(request,response)
      }
    } else if(pathname === '/create'){ 
      // 글 생성 페이지 - 클라이언트 화면
      topic.create(request,response)
    } else if(pathname === '/create_process'){
      // 글 생성 페이지 - 서버 측 로직
      topic.create_process(request,response)
    } else if(pathname === '/update'){
      // 글 수정페이지 - 클라이언트측
     topic.update(request,response)
    } else if(pathname === '/update_process'){
      // 글 수정 페이지 - 서버측 
      topic.update_process(request,response)
    } else if(pathname === '/delete_process'){
      // 글 삭제 기능 - 서버측
      topic.delete_process(request,response)
    } else if(pathname==="/author"){
      author.home(request,response)
    } else if(pathname === '/author/create_process'){
      author.create_process(request, response);
    }else if(pathname === '/author/update'){
      author.update(request, response);
    }else if(pathname === '/author/update_process'){
      author.update_process(request, response);
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
