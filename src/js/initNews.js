/* ajax 请求*/
(function() {
    /*data 是假数据*/
    var data = {
        schoolNews: [{
            title: '夹江外国语实验学校2016年招生简章',
            date: '2017-11-22',
            url: '#'
        }, {
            title: '夹江外国语实验学校2016年招生简章',
            date: '2017-11-22',
            url: '#'
        }, {
            title: '夹江外国语实验学校2016年招生简章',
            date: '2017-11-22',
            url: '#'
        }, {
            title: '夹江外国语实验学校2016年招生简章',
            date: '2017-11-22',
            url: '#'
        }, {
            title: '夹江外国语实验学校2016年招生简章',
            date: '2017-11-22',
            url: '#'
        }]
    };
    initScholl(data.schoolNews);
    initAbuot(data.schoolNews);
    initschoolMaster(data.schoolNews);
    initpartyBuilding(data.schoolNews);
    initschoolFood(data.schoolNews);
    initparentsSchool(data.schoolNews)
    initzhaosheng(data.schoolNews)
})();

//招生招聘
function initzhaosheng(data) {
    var zhao = '';
    for (var i = 0; i < data.length; i++) {
        zhao = zhao + '<li><div class="newsTitle"><a>' + data[i].title + '</a></div></li>';
    }
    $('#zhaosheng').html(zhao);
}
//家长学校
function initparentsSchool(data) {
    var parentsSchool = '';
    for (var i = 0; i < data.length; i++) {
        parentsSchool = parentsSchool + '<li>\
           <div class="newsTitle"><i class="am-icon-chevron-circle-right icon-color" aria-hidden="true"></i>\
            <a>' + data[i].title + '</a></div>\
            </li>'
    };
    $('#parents').html(parentsSchool)
}
//膳食服务
function initschoolFood(data) {
    var schoolFood = '';
    for (var i = 0; i < data.length; i++) {
        schoolFood = schoolFood + '<li>\
            <div class="newsTitle"><i class="am-icon-hand-o-right icon-color" aria-hidden="true"></i>\
            <a>' + data[i].title + '</a></div>\
            </li>'
    };
    $('#food').html(schoolFood)
}
//党建工作
function initpartyBuilding(data) {
    var partyBuilding = '';
    for (var i = 0; i < data.length; i++) {
        partyBuilding = partyBuilding + '<li>\
            <div class="newsTitle"><i class="am-icon-chevron-circle-right icon-color" aria-hidden = "true" ></i>\
            <a>' + data[i].title + '</a></div>\
        </li >';
    };
    $('#partyBuild').html(partyBuilding)
}

// 校长专栏
function initschoolMaster(data) {
    var master = '';
    for (var i = 0; i < data.length; i++) {
        master = master + '<li>\
            <div class="newsTitle"><i class="am-icon-hand-o-right icon-color" aria-hidden="true"></i>\
            <a>' + data[i].title + '</a></div>\
            <em>' + data[i].date + '</em>\
            </li>'
    };
    $('#schoolMaster').html(master)
}

/* 校园资讯列表*/
function initScholl(data) {
    var news = '';
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].title)
        news = news + '<li>\
            <div class="newsTitle"><i class="am-icon-chevron-circle-right icon-color" aria-hidden = "true" ></i>\
            <a>' + data[i].title + '</a></div>\
            <em>' + data[i].date + '</em>\
        </li >';
    };
    $('#schoolNews').html(news);
}
/*学部概况*/
function initAbuot(data) {
    var dom = '';
    for (var i = 0; i < data.length; i++) {
        dom = dom + '<li><div class="newsTitle"><a>' + data[i].title + '</a></div></li>';
    }
    $('#about').html(dom);
}


//学校喜报数据
(function() {
    /*data 是假数据*/
    var imgData = {
        goodNews: [{
            title: '#',
            date: '#',
            url: 'img/1.jpg'
        }, {
            title: '#',
            date: '#',
            url: 'img/2.jpg'
        }, {
            title: '#',
            date: '#',
            url: 'img/3.jpg'
        }, {
            title: '#',
            date: '#',
            url: 'img/2.jpg'
        }]
    };
    initgoodNews(imgData.goodNews)
})();
//学校喜报
function initgoodNews(imgData) {
    var imgD = '';
    for (var i = 0; i < imgData.length; i++) {
        imgD = imgD + '<li><img src="' + imgData[i].url + '" /></li>'
    }
    $('#schoolgoodNews').html(imgD);
}