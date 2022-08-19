let imagesItems = [...document.querySelectorAll(".img-wrap")];

let titles = [...document.querySelectorAll("h2")];   //複数をリストにまとめる

let titleMessage = document.querySelector(".title");


let setItemActive = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
        else{
            entry.target.classList.remove("active");
        }
    });
};
/*entries = 交差時の情報をまとめたIntersectionObserverEntry
というものが入る*/
/*isIntersecting = 交差しているかの真偽値*/


let options = {
    rootMargin:"0px", /*初期値のまま */
    threshold:0.5, /*いき値  要素のどこまでtarget来たら表示するか（
    １＝全部見えてから）*/

};


//スクロールで動く(target)と画面固定要素（root）の交差を監視するライブラリを用いたオブジェクトの生成
let observer = new IntersectionObserver(setItemActive,options);
/*第一引数＝callback関数,第二引数＝交差に関する条件設定を行うオブジェクト*/


observer.observe(titleMessage);/*カッコ内がtarget*/


//img-wrap偶奇で出現場所変える
/*map関数は引数に関数を取る→配列の各要素に対してその関数を
実行する→返り値に新たな配列　　
関数の引数にはvalue,index,array(今処理している配列)を取れる*/
imagesItems.map((item,index)=>{
    item.children[0].style.backgroundImage = `url(./images/menu${index+1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%"):item.style.left="5%";
    observer.observe(item);
});

/*shift+@でバッククォート　その中に${}で変数使える
childrenで子要素=<img>*/



titles.map((title,index)=>{
    index % 2 ==0 ? title.style.left = "45%": title.style.left="35%";
    observer.observe(title);
});