    const $ClassName = document.getElementsByClassName("accordion-contents");
    function clear(){
        for(let i = 0 ; i < $ClassName.length ; i++){
            $ClassName[i].style.display = "none";
            }
        }
        clear();

        //URLの?以降を取得
        let pageNumB = window.location.search;
        //一文字目の?を取り除く
        pageNumB = pageNumB.substring(1);
        //?x番のyoutube動画のみ表示
        document.getElementsByClassName("accordion-contents")[pageNumB].style.display = "block";