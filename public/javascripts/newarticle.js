$(function(){
    var txtId = 1;
    $(document).on('click','#btnAddArticle',function(e) {
        e.preventDefault();
            $("#showBlock").append('<div class = "panel panel-default" id="perArticle'+txtId+'" ><div class = "panel panel-heading"><div class="row"><div class="col-md-3">文章標題</div><div class="col-md-3">文章作者</div><div class="col-md-3 col-md-offset-3"><button class = "btn btn-default pull-right"><span class="glyphicon glyphicon-pencil" aria-hidden ="true"></span>編輯</button><button class = "btn btn-default pull-right"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>刪除</button></div></div><div class = "panel panel-body">...</div></div></div>');
            txtId++;

    });
});
