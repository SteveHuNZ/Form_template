$(function() {
    // the function of get lists from newspaper
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news',
            function(res) {
                if (res.status !== 200) {
                    return alert('failed to get data')
                }
                console.log(res.data);
            }


        )
    }
    getNewsList()

})