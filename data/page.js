const PAGES_LINKING = { 
	
	/*'3': [{
	    x: 81, y: 5, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/book-1_ch1.mp4',
		type: 'video',		size: '1280x720'
	}],
		
	'8': [{
		x: 63, y: 4, title: 'Interactivity', icon: 'img/icons/interactivites.png',
		link: 'resources/interactivities/Page_8_MTF/index.html',		type: 'iframe',	'size': '1024x768'
	}],

	'9': [{
		x: 63, y: 4, title: 'Interactivity', icon: 'img/icons/interactivites.png',
		link: 'resources/interactivities/Page_9_MCQ/index.html',		type: 'iframe',	'size': '1024x768'
	}],
	
	'10': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_8.ogg',		type: 'audio',	'size': '800x600'
	}],

	'11': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p09-ch1_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_9.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'12': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p10-ch1_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'14': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch2.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_12.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'15': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_13.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'16': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_14.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'17': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p15-ch2_2/index.html',		type: 'iframe',		'size': '1024x768'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_15.ogg',		type: 'audio',	'size': '800x600'
	}],

	'19': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p17-ch2_1/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'21': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch3.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_19.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'22': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_20.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'23': [{
        x: 90, y: 20, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p21-ch3_1/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'26': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch4.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_24.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'27': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_25.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'28': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_26.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'29': [{
        x: 90, y: 20, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p27-ch4_1/index.html',		type: 'iframe',		'size': '1024x768'
	}, {
        x: 90, y: 75, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p27-ch4_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'32': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch5.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_27.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'33': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p30-ch5_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_28.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'34': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p31-ch5_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'37': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch6.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_35.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'38': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_36.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'39': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_37.ogg',		type: 'audio',	'size': '800x600'
	}],

	'40': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p38-ch6_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'42': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch7.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_40.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'43': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_41.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'44': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_42.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'45': [{
        x: 90, y: 40, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p43-ch7_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p43-ch7_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'47': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch8.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_45.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'48': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_46.ogg',		type: 'audio',	'size': '800x600'
	}],
		
	'49': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_47.ogg',		type: 'audio',	'size': '800x600'
	}],

	'50': [{
        x: 90, y: 40, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p48-ch8_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p48-ch8_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'53': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch9.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_51.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'54': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_52.ogg',		type: 'audio',	'size': '800x600'
	}],

	'55': [{
        x: 90, y: 40, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p53-ch9_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p53-ch9_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'57': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch10.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_55.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'58': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_56.ogg',		type: 'audio',	'size': '800x600'
	}],

	'59': [{
        x: 90, y: 20, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p57-ch10_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p57-ch10_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'61': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch11.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_59.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'62': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_60.ogg',		type: 'audio',	'size': '800x600'
	}],

	'63': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p61-ch11_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'64': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p62-ch11_1/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'66': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch12.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_64.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'67': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_65.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'69': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p67-ch12_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p67-ch12_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],

	'71': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch13.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_69.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'72': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_70.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'73': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_71.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'74': [{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p72-ch13_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 50, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p72-ch13_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
	
	'75': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/Gaao_Gaao.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_73.ogg',		type: 'audio',	'size': '800x600'
	}],

	'76': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch14.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_74.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'77': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_75.ogg',		type: 'audio',	'size': '800x600'
	}],

	'78': [{
        x: 90, y: 65, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p76-ch14_1/index.html',		type: 'iframe',		'size': '1024x768'
	},{
        x: 90, y: 15, title: 'Interactivity', icon: 'img/icons/interactivites.png',
        link: 'resources/interactivities/p76-ch14_2/index.html',		type: 'iframe',		'size': '1024x768'
	}],
 
	'79': [{
	    x: 90, y: 15, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch15_01.ogv',
		type: 'video',		size: '1280x720'
	}],
	
	'80': [{
	    x: 90, y: 70, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch15_01.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 60, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_78.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'81': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_79.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'83': [{
	    x: 80, y: 70, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch15_02.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 70, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_81.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'84': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_82.ogg',		type: 'audio',	'size': '800x600'
	}],
	
	'85': [{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_83.ogg',		type: 'audio',	'size': '800x600'
	}],

	'89': [{
	    x: 90, y: 20, title: 'Animation',        icon: 'img/icons/animation.png',
        link: 'resources/animations/ch15_03.ogv',
		type: 'video',		size: '1280x720'
	},{
		x: 90, y: 10, title: 'ऑडियो', icon: 'img/icons/audio.png',
		link: 'resources/audio/pg_87.ogg',		type: 'audio',	'size': '800x600'
	}] */
}
