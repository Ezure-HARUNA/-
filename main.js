//DOM復習
//DOMのイベント基本この３つ！！！！！！！
//addEventListener() => 要素にイベントを追加
//setInterval() => 一定の時間間隔で関数を呼び出す。繰り返し。
//setTimeout() => 一定時間後に関数を一回だけ呼び出す。

//透明度
//setInterval(関数, 時間) for文の間隔が2000msというイメージ

let i = 0
setInterval(() => {
    //1. 要素の取得
    const pigImg = document.querySelectorAll('.pig-img')
    //pig = [pig1, pig2, pig3]のイメージ

    
    //2. classの付け替え  
    if(i === 2) {
        pigImg[i].classList.remove('appear')
        pigImg[i].classList.remove('scale')
        i = 0
        pigImg[i].classList.add('appear')
        pigImg[i].classList.add('scale')
    } else {
        pigImg[i].classList.remove('appear')
        pigImg[i].classList.remove('scale')
        i++
        pigImg[i].classList.add('appear')
        pigImg[i].classList.add('scale')
    }

}, 3000);  //ms省略可

//スムーススクロール
//クリックされた場所を特定する→（）の中にeを入れる



document.addEventListener('click', (e) => {
    //e.targetでイベントの発生の発生元を特定できる！
    const　element =e.target
    console.log(element.hash);
    
    //aタグのデフォルトの挙動をストップする
    e.preventDefault()

    //ジャンプ先の要素を取得する
    //docment.querySelector('#first')
    const jumpToSection = document.querySelector(element.hash)
    //console.log(element, 'がクリックされた！')　

    //const targetSection =

    //scrollIntoView関数を用いて特定の要素までスムーススクロールする
    //ジャンプ先の要素.scrollIntoView()

    jumpToSection.scrollIntoView({
        //スムーズにスクロールする
    　　behavior: "smooth",
    　　//先頭までスクロール
        block: "start"
    })
    
})


