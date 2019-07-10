$(".header").append(`
        <img class="headerImg" src="../../img/kuaiji/logo.png" alt="">
        <div class="headerTitle">会计学院</div>
        <div class="headerNavs">
            <a href="#mubiaoBox" class="headerNavTxt">目标定位</a>
            <a href="#jiansheBox" class="headerNavTxt">专业建设</a>
            <a href="#gaigeBox" class="headerNavTxt">改革成效</a>
            <a href="#shiziBox" class="headerNavTxt">师资队伍</a>
            <a href="#rencaiBox" class="headerNavTxt">人才培养</a>
            <a href="#zhuanyeBox" class="headerNavTxt">专业特色</a>
            <a href="#guihuaBox" class="headerNavTxt">建设规划</a>
       </div>`)

$(".footer").append(`
        <div class="footerBox">
            <div class="footerL">Copyright©2015 兰州财经大学会计学院 版权所有 备案号：陇ICP备 05000593</div>
            <div class="footerR">地址：兰州市薇乐大道4号（和平校区） 兰州市城关区段家滩496号（段家滩校区）</div>
        </div>
`)

$(".content").css({"min-height":$(window).height()-$(".header").height()-$(".footer").height()-41+"px"})