$.ajax({
    type: 'post',
    url: '这块是地址',
    data: { name: '跟他那边有关' },
    dataType: 'json',
    success: function(data) {},
    error: function(xhr, type) {
        alert('请求失败')
    }
})