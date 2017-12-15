/* ajax 请求*/
(function() {
    /*data 是假数据*/
    const data = {
        schoolNews: [{
            title: '夹江外国语实验学校2016年招生简章',
            date: '2017-11-22',
            url: 'img/15.jpg'
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
    initzhaosheng(data.schoolNews);
    initteacher(data.schoolNews)
    initstudent(data.schoolNews)
})();

//招生招聘
function initzhaosheng(data) {
    let zhao = '';
    for (let i = 0; i < data.length; i++) {
        zhao = zhao + '<li><div class="newsTitle"><a>' + data[i].title + '</a></div></li>';
    }
    $('#zhaosheng').html(zhao);
}
//家长学校
function initparentsSchool(data) {
    let parentsSchool = '';
    for (let i = 0; i < data.length; i++) {
        parentsSchool = parentsSchool + '<li>\
           <div class="newsTitle"><i class="am-icon-chevron-circle-right icon-color" aria-hidden="true"></i>\
            <a>' + data[i].title + '</a></div>\
            </li>'
    };
    $('#parents').html(parentsSchool)
}
//膳食服务
function initschoolFood(data) {
    let schoolFood = '';
    for (let i = 0; i < data.length; i++) {
        schoolFood = schoolFood + '<li>\
            <div class="newsTitle"><i class="am-icon-hand-o-right icon-color" aria-hidden="true"></i>\
            <a>' + data[i].title + '</a></div>\
            </li>'
    };
    $('#food').html(schoolFood)
}
//党建工作
function initpartyBuilding(data) {
    let partyBuilding = '';
    for (let i = 0; i < data.length; i++) {
        partyBuilding = partyBuilding + '<li>\
            <div class="newsTitle"><i class="am-icon-chevron-circle-right icon-color" aria-hidden = "true" ></i>\
            <a>' + data[i].title + '</a></div>\
        </li >';
    };
    $('#partyBuild').html(partyBuilding)
}

// 校长专栏
function initschoolMaster(data) {
    let master = '';
    for (let i = 0; i < data.length; i++) {
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
    let news = '';
    for (let i = 0; i < data.length; i++) {
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
    let dom = '';
    for (let i = 0; i < data.length; i++) {
        dom = dom + '<li><div class="newsTitle"><a>' + data[i].title + '</a></div></li>';
    }
    $('#about').html(dom);
}
//教师
function initteacher(data) {
    let teacherDom = '';
    for (let i = 0; i < data.length; i++) {
        if (i == 0) {
            teacherDom = teacherDom + ' <div class="newsImg am-u-sm-12 am-u-md-12 am-u-lg-5"><h6>' + data[i].title + '</h6>\
            <img src="' + data[i].url + '" alt="运动会"></div>\
            <div class="artical articalNews am-u-sm-12 am-u-md-12 am-u-lg-7">\
            <ul>'

        } else {
            teacherDom = teacherDom + '<li><div class="newsTitle"><span>' + data[i].title + '</span></div></li>'
                // $('#otherNews').html(teacherDom)
        }

    }
    teacherDom = teacherDom + '</ul></div>'
    $('#teacher').html(teacherDom);
}


function initstudent(data) {
    let studentDom = '';
    for (let i = 0; i < data.length; i++) {
        if (i == 0) {
            studentDom = studentDom + ' <div class="newsImg am-u-sm-12 am-u-md-12 am-u-lg-5"><h6>' + data[i].title + '</h6>\
            <img src="' + data[i].url + '" alt="运动会"></div>\
            <div class="artical articalNews am-u-sm-12 am-u-md-12 am-u-lg-7">\
            <ul>'

        } else {
            studentDom = studentDom + '<li><div class="newsTitle"><span>' + data[i].title + '</span></div></li>'
                // $('#otherNews').html(teacherDom)
        }

    }
    studentDom = studentDom + '</ul></div>'
    $('#student').html(studentDom);
}


//学校喜报数据
(function() {
    /*data 是假数据*/

    const imgData = {
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
    let imgD = '';
    for (let i = 0; i < imgData.length; i++) {
        imgD = imgD + '<li><img src="' + imgData[i].url + '" /></li>'
    }
    $('#schoolgoodNews').html(imgD);
}