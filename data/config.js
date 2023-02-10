const appdb = {
	
	'config': {
		'subject': '',
		'class': 'Start Smart',
		'id': 'riz_569_1',
		'totalPages': 62,
		'bookWidth': 2570,
		'bookHeight': 3300
	},
	
	'ebook': {
		'toc': {
		'icon': "fa-book",
		'menu': "Content",
		'link': 'content',
		'data': [
			/* {'page': 1,	'title': 'Where is My Bone?'		}, 
			{	'page': 3,	'title': 'The Lamb and the Wolf'		} ,
			{	'page': 8,	'title': 'The Hippo is Asleep'		},
			{	'page': 8,	'title': 'Let us Hop and Swim!'		},
			{	'page': 8,	'title': 'Mini Plays Hide-and-seek'		},
			{	'page': 8,	'title': 'The Donkey and His Shadow'		} */
		]},

	'Animations': {
		'icon': "fa-video-camera",
		'menu': "Animation",
		'link': 'video',
		'data': [{
			'path': 'resources/animations/book-1_ch1.mp4',
			'title': 'The Lamb and the Wolf',			'size': '1280x720',			'page': 3
			}
		]},

	'Interactivities.': {
		'icon': "fa-users",
		'menu': "Activities",
		'link': 'iframe',
		'data': [{
			'path': 'resources/interactivities/Page_8_MTF/index.html',
			'title': 'I Feel',			'size': '1024x740',			'page': 8
			},
			{
			'path': 'resources/interactivities/Page_9_MCQ/index.html',
			'title': 'I Can',			'size': '1024x740',			'page': 9
			}
		]},
	
	
	
		
		
		'zother': [/* {
			'icon': 'fa-question',
			'title': 'मदद',
			'path': 'resources/help/index.html',
			'size': '1000x625',
			'link': 'iframe'
		}	 */
		
		]
		
	}
}