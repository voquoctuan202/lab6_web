function showCourseList(){ 
	var courseList=[
		{
			"code":"CB001",
			"startDate":1638205200000,
			"endDate":1640797200000,//in milisecond
			"type":1,//thứ 3-5-7
			"name":{"vi-VN":"Thiên văn học cơ bản Khóa 1",
					"en-US":"Introduction to Astronomy, 1<sup>st</sup> Course"
					},
			"fee":{"vi-VN":1750000,
					"en-US":78
				}
		},
		{
			"code":"VT002",
			"startDate":1638291600000,
			"endDate":1643562000000,
			"type":0,//thứ 2-4-6
			"name":{"vi-VN":"Vũ Trụ Học Cơ Bản Khóa 2",
					"en-US":"Introduction to Cosmology, 2<sup>nd</sup> Course"
				},
			"fee":{"vi-VN":1050000,
					"en-US":47				
				}			
		},
		{
			"code":"QS001",
			"startDate":1639501200000,
			"endDate":1640710800000,
			"type":0,//thứ 2-4-6
			"name":{"vi-VN":"Học Máy Và Thiên Văn Học Khóa 1",
				"en-US":"Machine Learning and Astronomy, 1<sup>st</sup> Course"
			},
			"fee":{"vi-VN":750000,
				"en-US":34
			}
		},		
		{
			"code":"CB002",
			"startDate":1638291600000,
			"endDate":1640883600000,
			"type":0,//2-4-6
			"name":{"vi-VN":"Thiên văn học cơ bản Khóa 2",
					"en-US":"Introduction to Astronomy, 2<sup>nd</sup> Course"
			},
			"fee":{"vi-VN":1750000,
					"en-US":78
				}
		},				
		{	"code":"CB003",
			"startDate":1638550800000,
			"endDate":1641229200000,
			"type":1,//thứ 3-5-7
			"name":{"vi-VN":"Thiên văn học cơ bản Khóa 3",
					"en-US":"Introduction to Astronomy, 3<sup>rd</sup> Course"
			},		
			"fee":{"vi-VN":1750000,
					"en-US":78
				}
		},
		{
			"code":"VT003",
			"startDate":1638291600000,
			"endDate":1643562000000,
			"type":0,//thứ 2-4-6
			"name":{"vi-VN":"Vũ Trụ Học Cơ Bản Khóa 3",
				"en-US":"Introduction to Cosmology, 3<sup>rd</sup> Course"
			},
			"fee":{"vi-VN":1050000,
					"en-US":47
			}
		},
		{
			"code":"QS002",
			"startDate":1639587600000,
			"endDate":1640797200000,
			"type":1,//thứ 3-5-7	
			"name":{"vi-VN":"Học Máy Và Thiên Văn Học Khóa 2",
				"en-US":"Machine Learning and Astronomy, 2<sup>nd</sup> Course"
			},			
			"fee":{"vi-VN":750000,
					"en-US":34
			}		
		}
	];
	var nameList=[
		{
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
        }
	}
	];
	var lang= getLang();
    $("#course_list").empty();
	$("#course_list2").empty();
    $("#course_listTC").empty();
	$("#course_listTC2").empty();
	$.each(courseList,function(i, obj) {
		btn="<td><div class='d-grid gap-2'> <button class='btn btn-success btn-lg'onclick='regCourse(\""+i+"\")'><i class='far fa-check-square'></i></button></div></td>";
		$("#course_list").append("<tr style='text-align:center;'><td>"+obj.code+"</td><td style='text-align:left;'>"+obj.name[lang]+"</td></td><td class='text-end'>"+(new Date(obj.startDate)).toLocaleDateString(lang)+"</td><td class='text-end'>"+(new Date(obj.endDate)).toLocaleDateString(lang)+"</td><td class='text-end'>"+(new Intl.NumberFormat(lang,{ style: 'decimal'}).format(obj.fee[lang]))+"</td>"+btn+"</tr>");
		$("#course_list2").append("<tr><td style='font-weight: bold;'>"+nameList[0].COURSES_CODE[lang]+"<br>"+nameList[0].COURSES_COURSES[lang]+"<br>"+nameList[0].COURSES_STARTDATE[lang]+"<br>"+nameList[0].COURSES_ENDDATE[lang]+"<br>"+nameList[0].COURSES_FEE[lang]+ "</td> <td>"+obj.code+"<br>"+obj.name[lang]+"<br>"+(new Date(obj.startDate)).toLocaleDateString(lang)+"<br>"+(new Date(obj.endDate)).toLocaleDateString(lang)+"<br>"+(new Intl.NumberFormat(lang,{ style: 'decimal'}).format(obj.fee[lang]))+"<br>"+btn+"</td> </tr>");

		$("#course_listTC").append("<tr><td>"+obj.code+"</td><td style='text-align:left';>"+obj.name[lang]+"</td></td><td class='text-end'>"+(new Date(obj.startDate)).toLocaleDateString(lang));
		$("#course_listTC2").append("<tr><td style='font-weight: bold;'>"+nameList[0].COURSES_CODE[lang]+"<br>"+nameList[0].COURSES_COURSES[lang]+"<br>"+nameList[0].COURSES_STARTDATE[lang]+"</td> <td>"+obj.code+"<br>"+obj.name[lang]+"<br>"+(new Date(obj.startDate)).toLocaleDateString(lang)+"</td> </tr>");
    
	});

}
