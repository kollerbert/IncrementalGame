	//set the marquee parameters
	function init() { rtl_marquee.start(); }
	var rtl_marquee_Text = 'You are wasting your time!';
	var rtl_marquee_Direction = 'left';
	var rtl_marquee_Contents='<span style="font-family:Comic Sans MS;font-size:12pt;white-space:nowrap;">' + rtl_marquee_Text + '</span>';
	rtl_marquee = new xbMarquee('rtl_marquee', '29px', '100%', 6, 100, rtl_marquee_Direction, 'scroll', rtl_marquee_Contents);
	window.setTimeout( init, 200);