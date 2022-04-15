/////　即時関数　
(() => {
        // テンプレ
            class Accordion {
                // 初期化
                // インスタンスし、オブジェクトのkey: valueでオリジナル作る
                constructor(obj){
        
                    // console.log('obj', obj.hookName);
        
        
                    //　html文書内の要素を変数$elmに代入
                    // const $elm = document.querySelector(obj.hookName);
                    // const $trigger = $elm.getElementsByTagName(obj.tagName);
                    
                    const question = [
                                        'アウディ画像',
                                        'ポルシェ　画像',
                                        'マクラーレン　画像'
                                    ];
    
                    const gazou = 
                                        [
                                            'image0.jpg',
                                            'image1.jpg',
                                            'image2.jpg'
                                        ];
    
                    const URL = [
                                    'file:///C:/Users/admin-pc/Desktop/hiarakawa/%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%A8%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%20%E8%AA%B2%E9%A1%8C%20%20%E3%82%84%E3%82%8A%E7%9B%B4%E3%81%97/index2.html?0',
                                    'file:///C:/Users/admin-pc/Desktop/hiarakawa/%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%A8%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%20%E8%AA%B2%E9%A1%8C%20%20%E3%82%84%E3%82%8A%E7%9B%B4%E3%81%97/index2.html?1', 
                                    'file:///C:/Users/admin-pc/Desktop/hiarakawa/%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%A8%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%20%E8%AA%B2%E9%A1%8C%20%20%E3%82%84%E3%82%8A%E7%9B%B4%E3%81%97/index2.html?2', 
                                ];  
                    
                        //////////////////////////   htmlに画像出力　　///////////////////////////////////
                        let imgIndex = 0;
                        while(imgIndex < gazou.length){
                            // img要素のsrcに画像ファイル名を設定する
                            // document.getElementById([imgIndex]).src = gazou[imgIndex].img;
                            document.getElementById([imgIndex]).src = this.src;
                            imgIndex++;
                        }
                        
                        ///////////////////////////   ボタン+文字貼る　　//////////////////////////////////
                        const $button = document.getElementsByTagName('button');
                        let index = 0;
                        while(index < $button.length){
                            $button[index].textContent = question[index];
                            index++;
                        }
    
                        ///////////////////////////   画像作る　　//////////////////////////////////
                        const $ClassName = document.getElementsByClassName("accordion-contents");
                        let gazouIndex = 0;
                        while(gazouIndex < gazou.length){
                            $ClassName[gazouIndex].innerHTML = gazou[gazouIndex];
                                gazouIndex++;
                        }
    
                        //////////////////////  画像クリア関数　/////////////////////////
                        function clear(){
                        for(let i = 0 ; i < $ClassName.length ; i++){
                            $ClassName[i].style.display = "none";
                            }
                        }
                        clear();
                        
                        /////////////////////　画像表示関数 ////////////////////////////
                        let aa = 0;
                        while(aa < $button.length){
                            $button[aa].addEventListener('click' , (e) => {
                                // 実行したイベントがキャンセル可能である場合、イベントをキャンセルするためのメソッド
                                e.preventDefault();
                                clear();
                                const $this = e.target;
                                const targetVal = $this.dataset.nav;
                                $ClassName[targetVal].style.display = "block";
                            });
                            aa++;
                        }
    
                        /////////////////////　動画表示関数 ////////////////////////////
                        let aaa=0;
                        while(aaa < document.querySelectorAll("img").length){
                            document.querySelectorAll("img")[aaa].addEventListener('click' , (e) => {
                                e.preventDefault();
                                const $this = e.target;
                                console.log('$this', $this)
                                const targetVal = $this.dataset.content;
                                console.log('targetVal' , targetVal)
                                window.open(URL[targetVal]);
                            });
                            aaa++;
                        }
                    };
                }
                        
            const dummyAccordion = new Accordion({
                // オブジェクトのkey: value　変更したい名前書く
                hookName: '#js-accordion',
                tagName: ''
            });
        
        })();
    