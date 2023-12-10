function copytel() {
    navigator.clipboard.writeText("12345678");
    alert("Telephone number is copied!");
}

function copyfex() {
    navigator.clipboard.writeText("12345678");
    alert("Fax number is copied!");
}

function copyemail() {
    navigator.clipboard.writeText("mail@abc.edu.hk");
    alert("Email address is copied!");
}
document.write(`

<a href="index.html" target="_self">主頁</a>
<p>ABC中學</p>
<p>ABC Secondary School</p>
<p>地址 : 屯門湖昌街3號</p>
<p onclick="copytel()"> 電話(Tel): 12345678<img src="source/svg/copy_icon.svg" width="22" height="20" alt="copy icon"/>  </p>
<p onclick="copyfex()">
傳真(Fax): 12345678<img src="source/svg/copy_icon.svg" width="22" height="20" alt="copy icon"/> </p>
<p onclick="copyemail()">
電郵(Email): mail@abc.edu.hk <img src="source/svg/copy_icon.svg" width="22" height="20" alt="copy icon"/>
</p>
<p>
<table style="width:20%">
	<tr>
		<td align="left"><a href="index.html" target="_self">主頁</a></td>
		<td align="left"><a href="schoollife.html" target="_self">學校活動</a></td>
	</tr>
	<tr>
		<td align="left"><a href="map.html" target="_self">地圖</a></td>
	    <td align="left"><a href="questionnaire.html" target="_self">問卷</a></td>
	</tr>
</table>
</p>

`);