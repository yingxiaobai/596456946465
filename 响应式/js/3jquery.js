// JQ
	$(function(){
		const ajax = new XMLHttpRequest();
		let comment_remain = document.getElementsByClassName("comment_remain")[0];
		let comment_content = document.getElementsByClassName("comment_content")[0];
		ajax.open('get',"https://wd6721699132irplfh.wilddogio.com/comments.json")
		ajax.send();
		ajax.onreadystatechange = ()=>{
			if (ajax.readyState==4 &&ajax.status==200){
				// 拿到的是JSON 字符串，要转成JSON结构
				const comments= JSON.parse(ajax.responseText);
				console.log(comments);
				let data = comments.data;
				console.log(data);
				let str = '';
				for(let i in data){
					console.log(typeof str);
					str+=`<p>${data[i]}</p>`;
				}
				console.log(str);
				 comment_remain.onclick=()=>{
					    comment_content.innerHTML = str;
				
			}
		}
	}
		var span=$('span').eq(3),
		    a=$("a").eq(1);
		    
		var test = span.html().substring(0,10)+'...';
		var str=span.html();
		span.html(test);
	    a.html('展开');

		var isOn=false;
		a.click(function(){
			isOn=!isOn;
			
			if(isOn==true){
				span.html(str);
				a.html('收藏');
			}else{
				span.html(test);
				a.html('展开');
			}
		})
		var zan=$("span").eq(0);
		var sum=$("a").eq(0);
		var count = sum.html();
		// console.log(typeof count);
		// console.log(typeof sum)
		/*console.log(typeof zan.innerHTML);*/
		// 图片对象
		
		zan.click(function(){
			var img = $('#zan img');
			/*sum.innerHTML = ++count;*/
			var srcName = img.attr('src');
			console.log(srcName);
			var result = srcName.indexOf('like_init');
			console.log(result);
			if( result!==-1 ){
				img.attr('src','./resouce/like_after.png');
				count++;
			}else{
				img.attr('src','./resouce/like_init.png');
				count--;
			}
			sum.html(count);
		})
		var comment=$(".comment_container").eq(0);
		var textArea=$(".text6").eq(0);
		var report=$(".report").eq(0);
		comment.click(function(){
			// 对于非内联样式只能用  window.computedStyle(ele);获取
			// style方式只能获取和设置行内元素

			if(textArea.css('display') === 'none' && report.css('display') === 'none'){
				// 获取到的样式是字符串类型
				textArea.css('display','block');
				report.css('display','block');
			}else{
				textArea.css('display','none');
				report.css('display','none');
			}
         
		});
	})

