function domReady(fn){
    //对于现代浏览器，对DOMContentLoaded事件的处理采用标准的事件绑定方式
    if( document.addEventListener ){
        document.addEventListener("DOMContentLoaded",fn,false);
    }else{
        IEContentLoaded();
    }
    //IE模拟DOMContentLoaded
    function IEContentLoaded(){
        let d = window.document,
            done = false;

        //只执行一次用户的回掉函数init()
        let init = function(){
            if(!done){
                done = true;
                fn();
            }
        };

        (function(){
            try {
                // DOM树未创建完之前调用doScroll会抛出错误
                d.documentElement.doScroll('left');
            } catch (e) {
                //延迟再试一次~
                setTimeout(arguments.callee, 50);
                return;
            }
            // 没有错误就表示DOM树创建完毕，然后立马执行用户回调
            init();
        })();

        // 如果用户是在domReady之后绑定的函数，就立马执行
        d.onreadystatechange = function() {
            if (d.readyState === 'complete') {
                d.onreadystatechange = null;
                init();
            }
        }
    }
}

