const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html, charset=utf-8');
  res.end(
  	'<html xmlns="http://www.w3.org/1999/xhtml">'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+
	'<title>Bài tập nhóm CTH 626</title>'+
	'</head>'+
	
	'<body>'+
	'<h1 style="width: 100%; height: 25px; text-align: center;">NHÓM HP CTH626</h1>' +
	'<table style="border-collapse: collapse; width: 100%; height: 110px;" border="1">'+
	'<tbody>'+
	'<tr style="height: 18px;">'+
	'<td style="width: 17.73%; height: 18px; text-align: center;"><strong>MSHV</strong></td>'+
	'<td style="width: 22.7745%; height: 18px; text-align: center;"><strong>Họ và tên</strong></td>'+
	'<td style="width: 37.6112%; height: 18px; text-align: center;"><strong>Địa chỉ</strong></td>'+
	'<td style="width: 21.8843%; height: 18px; text-align: center;"><strong>Photo</strong></td>'+
	'</tr>'+
	'<tr style="height: 38px;">'+
	'<td style="width: 17.73%; height: 38px;">M2522005</td>'+
	'<td style="width: 22.7745%; height: 38px;">Đào Trọng Lanh</td>'+
	'<td style="width: 37.6112%; height: 38px;">Đầm Dơi - Cà Mau</td>'+
	'<td style="width: 21.8843%; height: 38px; text-align: center;"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHEMMc5g00ecZr2-5B6gz39WfJ1QFczgBFrzvdW4iafx9GkXZal6lmUHHzp6P9nAFrQVGGWgIOFol6mzfKK1DEUb4PfoiCMN7gokxu7glg6n0psFMnRqGbkfZnfUHSacZ-HwHO_yQc3R0mclGXZsoE9jwzbTrgpJV_E2Pz2Q5Fx2qSmriq0qNU1Wt1/s320/72f1c67d2ec4f39aaad5.jpg" alt="" width="100" height="100" /></td>'+
	'</tr>'+
	'<tr style="height: 18px;">'+
	'<td style="width: 17.73%; height: 18px;">M2522007</td>'+
	'<td style="width: 22.7745%; height: 18px;">Đỗ Thị Minh Mẫn</td>'+
	'<td style="width: 37.6112%; height: 18px;">Ninh Kiều - Cần Thơ</td>'+
	'<td style="width: 21.8843%; height: 18px; text-align: center;"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvWyZCx99ge9ilCE7M1LwdewWlllhtI0r8T1yEMcmFyJtdJigQdLPLR9hnVeglNw2mQMKI0QGSdw58WAO0bBDdnUVl1Rwo9OYp2WCrWNIT_5ugBdYskYqDI_l6VxlSWjul8lvRJKOIJi0bT3updqJpozA2_VI0C4gdBEKCmNLgoEd5WeR2BvyR_XJa/s1600/f9dc880277bbaae5f3aa.jpg" alt="" width="100" height="100" /></td>'+
	'</tr>'+
	'<tr style="height: 18px;">'+
	'<td style="width: 17.73%; height: 18px;">M2522011</td>'+
	'<td style="width: 22.7745%; height: 18px;">Phạm Thanh Sơn</td>'+
	'<td style="width: 37.6112%; height: 18px;">Trà Ôn - Vĩnh Long</td>'+
	'<td style="width: 21.8843%; height: 18px; text-align: center;"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_TXMJ0RM9OQP1jR8E8FvZZuIMq4WCgnDEVU1qRWLfeDRIF8cp8c4DjI18DRajIyPzIHQuejZZaxe-tGvlPg8PqgIG8mf9Eze709bhsnCUuv1FzNyPWeSL_vd6z-DwtVa--_szAgEPH8cBcF19KU3ddGqA9XZAt_pkbSE8FmjS0e3fRem3IJ7MjmPn/s320/16d21803e7ba3ae463ab.jpg" alt="" width="100" height="100" /></td>'+
	'</tr>'+
	'<tr style="height: 18px;">'+
	'<td style="width: 17.73%; height: 18px;">M2522013</td>'+
	'<td style="width: 22.7745%; height: 18px;">Vũ Tấn Tài</td>'+
	'<td style="width: 37.6112%; height: 18px;">Thới Bình - Cà Mau</td>'+
	'<td style="width: 21.8843%; height: 18px; text-align: center;"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgycjWGhPKnRXydz7MO2iShxXv8sN2VU0FdvqoPp-nutQU0lz7Ow-i_eGr9zall2pyLKYOqrQr2Vi-gkei-6zbzxwCRINk2Iu4xj70s7BfWwwRbuVujgRtPzGpR0-7VuRiFYO8h9MWrYITpftHYhXKXXu6LxcGdeXynGkYcEFv1MJozOv1cy6FArAaw/s320/1106fcda0363de3d8772.jpg" alt="" width="100" height="100" /></td>'+
	'</tr>'+
	'</tbody>'+
	'</table>'+
	'</body>'+
	'</html>'
  );
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
