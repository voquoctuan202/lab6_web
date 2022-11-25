function getLang(){
    return localStorage.getItem(lang);
}

function mutiLanguage(){
    var labels={
        //menu
        "MENU_HOME":{
            "vi-VN":"Trang Chủ",
            "en-US":"Home",
            },
        "MENU_ABOUT_US":{
            "vi-VN":"Giới Thiệu",
            "en-US":"About Us",
            },
        "MENU_COURSES":{
            "vi-VN":"Các Khóa Học",
            "en-US":"Courses",
            },
        "MENU_CONTACT":{
            "vi-VN":"Liên hệ",
            "en-US":"Contact",
            },
        //heading-tiêu đề
        "HEAD_SOLAR_SYSTEM":{
            "vi-VN":"Các Hành Tinh Trong Hệ Mặt Trời",
            "en-US":"Planets of Solar System"
        },
        "HEAD_UPCOMING_COURSES":{
            "vi-VN":"Các khóa học khai giảng (Quý khách vui lòng liên hệ <button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Văn phòng công ty</button>để đăng kí)",
            "en-US":"Upcoming courses (please contact <button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>The company office</button> for registration)",
        },
        "COPYRIGHT":{
            "vi-VN":"Copyright 2021 Bản quyền thuộc về Công ty Astronomia.",
            "en-US":"Copyright 2021 Astronomia All Rights Reserved.",
        },
        //modal box
        "MODAL_HEAD":{
            "vi-VN":"Địa Chỉ Đăng Ký Khóa Học",
            "en-US":"Registration Address"
        },
        "MODAL_CONTENT":{
            "vi-VN":"Văn phòng: Tầng 8. Tòa Nhà Universal. Số 900A đường Quang Trung, Cần Thơ",
            "en-US":"Office: 8<sup>th</sup> floor. Universal Building. 900A Quang Trung Street, Can Tho"		
        },
        //các khóa học sắp khai giảng
        "UP_COURSES_CB001":{
            "vi-VN":{"name":"Thiên văn học cơ bản Khóa 1",
                    "startDate":"30/11/2021"
                    },
            "en-US":{"name":"Introduction to Astronomy, 1<sup>st</sup> Course",
                    "startDate":"11/30/2021"
                    }		
        },
        "UP_COURSES_VT002":{
            "vi-VN":{"name":"Vũ Trụ Học Cơ Bản Khóa 2",
                    "startDate":"01/12/2021"
                    },
            "en-US":{"name":"Introduction to Cosmology, 2<sup>nd</sup> Course",
                    "startDate":"12/01/2021"					
                    }		
        },
        "UP_COURSES_QS001":{
            "vi-VN":{"name":"Học Máy Và Thiên Văn Học Khóa 1",
                    "startDate":"15/12/2021"
                    },
            "en-US":{"name":"Machine Learning and Astronomy, 1<sup>st</sup> Course",
                    "startDate":"12/15/2021"					
                    }
        },
        //trang chủ
        "CONTENTS_HEAD_JUPITER":{
            "vi-VN":"Sao Mộc - Jupiter",
            "en-US":"Jupiter",
            },
        "CONTENTS_DETAIL_JUPITER":{
            "vi-VN":"Sao Mộc được đặt theo tên của thần Zeus trong tiếng Hy Lạp; Trong tiếng La Mã, Zeus nghĩa là Jupiter.",
            "en-US":"It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its observed size."
        },
        "CONTENTS_HEAD_SATURN":{
            "vi-VN":"Sao Thổ - Saturn",
            "en-US":"Saturn",
            },
        "CONTENTS_DETAIL_SATURN":{
            "vi-VN":"Sao Thổ được đặt theo tên của thần Thời gian Cronus trong tiếng Hy Lạp; Trong tiếng La Mã, Cronus nghĩa là Saturn.",
            "en-US":"Saturn is named after the Roman god of wealth and agriculture."
        },
        "CONTENTS_HEAD_URANUS":{
            "vi-VN":"Sao Thiên Vương - Uranus",
            "en-US":"Uranus",
            },
        "CONTENTS_DETAIL_URANUS":{
            "vi-VN":"Sao Thiên Vương được đặt theo tên của thần đảm trách bầu trời Uranus trong tiếng Hy Lạp.",
            "en-US":"Its name is a reference to the Greek god of the sky, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus"
        },
        "CONTENTS_TITLE_MERCURY":{
            "vi-VN":"Sao Thủy - Mercury",
            "en-US":"Mercury",
            },
        "CONTENTS_TITLE_VENUS":{
            "vi-VN":"Sao Kim - Venus",
            "en-US":"Venus"
        },
        "CONTENTS_TITLE_NEPTUNE":{
            "vi-VN":"Sao Hải Vương - Neptune",
            "en-US":"Neptune",
            },
        "CONTENTS_TITLE_MARS":{
            "vi-VN":"Sao Hỏa - Mars",
            "en-US":"Mars"
        },
        //các khóa học
        "COURSES_COURSES":{
            "vi-VN":"Các Khóa Học",
            "en-US":"Courses",
            },
        "COURSES_CODE":{
            "vi-VN":"Mã Khóa Học",
            "en-US":"Course Code"
        },
        "COURSES_NAME":{
            "vi-VN":"Khóa Học",
            "en-US":"Course"
        },
        "COURSES_STARTDATE":{
            "vi-VN":"Ngày Khai Giảng",
            "en-US":"Start Date"
        },
        "COURSES_ENDDATE":{
            "vi-VN":"Ngày Bế Giảng",
            "en-US":"End Date"
        },
        "COURSES_FEE":{
            "vi-VN":"Học Phí (VNĐ)",
            "en-US":"Tuition Fee ($)"
        },
        "COURSES_OVERLAP":{
            "vi-VN":"Thời gian khóa học trùng với các khóa học đã đăng ký",
            "en-US":"The course time coincides with the registered courses"
        },
    };
    
    $("#MENU_HOME").html(labels["MENU_HOME"][getLang()]).attr("title",labels["MENU_HOME"][getLang()]);
    $("#MENU_ABOUT_US").html(labels["MENU_ABOUT_US"][getLang()]).attr("title",labels["MENU_ABOUT_US"][getLang()]);
    $("#MENU_COURSES").html(labels["MENU_COURSES"][getLang()]).attr("title",labels["MENU_COURSES"][getLang()]);
    $("#MENU_CONTACT").html(labels["MENU_CONTACT"][getLang()]).attr("title",labels["MENU_CONTACT"][getLang()]);

    $("#COURSES_COURSES").html(labels["COURSES_COURSES"][getLang()]).attr("title",labels["COURSES_COURSES"][getLang()]);
    $("#COURSES_CODE").html(labels["COURSES_CODE"][getLang()]).attr("title",labels["COURSES_CODE"][getLang()]);
    $("#COURSES_STARTDATE").html(labels["COURSES_STARTDATE"][getLang()]).attr("title",labels["COURSES_STARTDATE"][getLang()]);
    $("#COURSES_ENDDATE").html(labels["COURSES_ENDDATE"][getLang()]).attr("title",labels["COURSES_ENDDATE"][getLang()]);
    $("#COURSES_FEE").html(labels["COURSES_FEE"][getLang()]).attr("title",labels["COURSES_FEE"][getLang()]);
    $("#COURSES_OVERLAP").html(labels["COURSES_OVERLAP"][getLang()]).attr("title",labels["COURSES_OVERLAP"][getLang()]);

    $("#HEAD_SOLAR_SYSTEM").html(labels["HEAD_SOLAR_SYSTEM"][getLang()]).attr("title",labels["HEAD_SOLAR_SYSTEM"][getLang()]);

    $("#HEAD_UPCOMING_COURSES").html(labels["HEAD_UPCOMING_COURSES"][getLang()]).attr("title",labels["HEAD_UPCOMING_COURSES"][getLang()]);

    $("#COPYRIGHT").html(labels["COPYRIGHT"][getLang()]).attr("title",labels["COPYRIGHT"][getLang()]);

    $("#MODAL_HEAD").html(labels["MODAL_HEAD"][getLang()]).attr("title",labels["MODAL_HEAD"][getLang()]);
    $("#MODAL_CONTENT").html(labels["MODAL_CONTENT"][getLang()]).attr("title",labels["MODAL_CONTENT"][getLang()]);
}
function langVN(){
    localStorage.setItem(lang, "vi-VN");
    console.log(localStorage.getItem(lang));
    showCourseList();
    mutiLanguage();
}
function langUS(){
    localStorage.setItem(lang, "en-US");
    console.log(localStorage.getItem(lang));
    showCourseList();
    mutiLanguage();
}  