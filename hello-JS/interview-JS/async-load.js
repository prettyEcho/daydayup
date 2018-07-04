function loadScript(url, callback){
    let script = document.createElement("script");
    script.type = "text/javascript";
    if(script.readyState){
        script.onreadystatechange = function(){
            if(script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback && callback();
            }
        }
    }else{
        script.onload = function(){
            callback && callback();
        }
    }
    script.src = url;
    document.querySelector('head').appendChild(script);
}
