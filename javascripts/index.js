var i;
var seemore = document.getElementsByClassName("seemore");
var txtp = document.getElementsByClassName("txtp");
var con = document.getElementsByClassName('content')[0];
var sy = [];
for (i = 0; i < seemore.length; i++) {
    (function(i) {
        var tip;

        seemore[i].addEventListener("click", function() {
            if (!tip) {
                sy[i] = con.scrollTop;
                this.parentNode.childNodes[3].style.whiteSpace = "normal";
                this.parentNode.childNodes[3].style.height = "auto";
                this.innerHTML = "收起";

                // topPosition = this.parentNode.childNodes[3].offsetTop;

                tip = 1;
            } else {
                con.scrollTop = sy[i];
                this.parentNode.childNodes[3].style.whiteSpace = "nowrap";
                this.parentNode.childNodes[3].style.height = "20px";
                this.innerHTML = "查看全部";

                tip = 0;
                // this.parentNode.childNodes[3].offsetTop = topPosition + "px";
            }

        })
    })(i)

}
// 此次js编写问题:使用for循环,为组件的每一个链接添加监听事件,直接执行会发现,一组展开收起点击表现正常;但是,不是一组
// 展开收起的点击时,即连续点击展开,或连续点击收起,第二次点击是没有作用的,必须点击三次才会有两个展开或收起.
//以上原因是tip设置在全局下,第一次点击导致tip值改变,所以相同功能点击时,无效,但是重置了tip,所以第三次点击有效了.
//问题是:怎样让每一个监听事件都有自己独自的tip,这样就可以解决以上问题
//解决方法:将绑定监听的事件封装在一个函数里,并让它立即执行,同时将tip设置在封装函数的全局下.这样;
//每一个监听事件都有了自己独自的tip标示.互不影响,点击功能正常!
