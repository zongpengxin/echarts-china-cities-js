(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宜昌', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"宜昌"},"geometry":{"type":"MultiPolygon","coordinates":[["@@DAD@D@F@D@JGD@B@DBBBBF@FBBDHBDBDDBHFDDBBDBBBD@F@DABADCB@BAB@DBDAB@BBFDHDFBDBBBBDFHDDDDB@B@DADA@ADEBEBAD@DBBB@DDBFADCDADABCBADAD@D@FBDFFLBFBHDDBDBBBBFDD@FBJ@LAFANETENCJAFEFCDCBCDGBGAEAKEKCAICAAACBGDEDA@CAG@IJQFEDAJAFBF@J@NAD@BADCDADAD@H@B@BA@C@AACAC@C@ABA@ABCBAD@BAB@FEDEHAFAHADADAJADADAFAD@JBH@D@DDLJJHHBLBB@DAD@DBJDD@B@DBFDBDDDD@DABABAFAD@FBFAD@HA@ADCAEAG@IBIDMBA@C@CAIAODEFIPENAPCN@FAT@F@RATCF@FAJ@N@THPHFBDDPFBBJFRDLFHHPHJFJDDBHDHHJLLLLJDJFHDFD@B@B@B@TKRIJCHEJCJ@LANBJBNDLDLBJ@HBR@PFNFLFNC@CCGACAGBCBEDAB@DCDICEEGECCE@ADEB@H@JAFA@EC@CAAAACAECEGCGEAC@C@EFEFEDEFGDGFCDAB@B@F@HDDADEDMFGDADBFFDHF@DEFCBCBC@ABCBADCBC@A@AHADCLCF@F@FCFCFCDCHIHIFADADAH@D@B@B@BAFEB@BBBBAD@FB@B@D@B@BABA@C@EAA@CBABABAJ@D@BABA@C@AAAAAAA@C@ABAD@HBB@F@DABA@ABA@AAAEGCIAA@A@A@ABAFCDCBABC@CACACBE@CBADBFBFD@BFDDBBBBDBLBDFBDCBCBEAC@CACAACCAEDEDAFABBBBDDDFFFDBDADIFCD@FBFABA@C@CCG@C@C@AAI@AAGAEAAACAC@CDCD@DBD@DABABC@ABCBCBE@CDCD@H@D@FCBABAFABABABC@CCCEACAACAC@CCAAAA@ACK@AAAAAACGACEEAEAE@ACEAACCAACAABC@EBCBCDCDCDC@CAACAA@ADEBADCDKBCDGFIBGDAFAF@L@B@B@LLJDL@T@F@DABCBABCBEAC@CAEEGAC@ADCDCHABC@C@GBEDAAABAF@NAD@B@CG@A@ABAB@@ABABAB@B@F@B@@AB@BBB@@CBB@A@AB@BBB@B@@AAAA@C@@A@ABA@A@A@AB@@AB@B@B@D@B@@A@E@AB@@AB@BABA@AB@B@BBBAD@B@B@B@@A@AACAACAA@AEAACGAEAE@C@ACE@C@A@ADK@E@CHIBE@A@CAEAC@CBCDCDAB@D@@B@DADAB@B@DDBBBD@D@B@@ADADA@A@CACACACDKBC@E@CACAG@A@CBA@CAC@CAK@C@GAICEA@C@A@@A@CAA@A@AA@A@A@AAAABADEPQDEBADCFKDELKBADA@AB@B@@ABC@A@AB@AA@A@ABABA@AAAAAA@A@BCB@@AB@@A@A@AB@@A@A@AAAAA@AB@@A@A@AB@B@@CB@BA@A@AB@@AA@A@A@A@A@A@A@@AA@@A@AB@@AA@@A@A@AB@B@@AB@@AA@@AB@BA@AAA@A@A@A@A@A@A@AAABA@AAA@A@A@AAA@AB@@AB@@BB@B@@AB@@ABA@A@AB@@AB@BBB@BAB@B@B@BAD@BABA@A@AA@@A@A@AB@@AB@@A@AB@@AA@@A@AB@@AB@@AAA@A@AB@@ABA@A@C@AAA@A@AAA@A@AAAAAA@CAAAAC@AACA@A@A@A@BCBEBAFCDEDCBEDCHIBABA@A@ABCBABABABCBE@E@A@A@C@ABAB@D@BCBE@ABC@CA@C@@AAC@GACAACAG@G@@AACCCAAC@C@ABA@@BB@BB@B@BA@EAA@A@IEAB@BBDADC@A@AAACA@@CAAA@A@E@A@CAAAAAAAA@CAA@A@A@GCA@AAA@@ADC@A@AEEAQACCCCCAABEACA@AAAAA@A@C@ACCAAACCAA@AA@ECMECAAABABCBGBCACEMIGGCCAAAB@@ADAD@B@F@FEBAB@FBF@DABABABA@ADCDI@IACCCSYIM@AAACGCUEOCCCBOAI@A@GBE@C@WBCBE@G@G@C@CAAA@CAC@C@AAE@CAAAC@CAE@ACACA@A@AB@HCDAHAFAB@BA@AAAC@ACCCCC@A@ABCDEBAAAA@A@C@CBAB@BABABABAACAAAAA@CBA@ADADCBADADEDCBAB@BAD@D@DBB@B@DAJEDAFAH@F@D@BB@BEBCBCB@BABBBB@B@DADCFAB@B@BBABABABA@@BB@D@F@@AD@DCBAHEHIFMBABGBABEDYAMCO@K@O@A@ABKAGAE@CDEHGDGFINSDCNMBCNKDCBARKJGJCJEPAFEB@@ABAAC@C@CAEAAAAA@EAAA@A@A@ABA@A@CBAUCE@O@O@G@CBODCBMHKLCDCBGHEFORCDILCDIPCJEJAFGJ@BGJEBIHCBGCE@KAAACACCAG@EAEBE@E@CBCGKEKCGAIBE@A@E@GAGEGEGCICEIBKHMBIBMFG@C@IBOBMAGAGCGBEBCH@HBD@DABCDEAE@CAAAE@EFAF@B@BGHCFEFCFEHEFAFCDAHAB@DAFAFAFAF@F@FCJCF@BCDCBCBEBEBA@GBEBGDG@E@A@A@CBGAA@EAICA@ECIEGCEEGEAACCGECAIIAAKEGEGCGCGCGCIEMEICGAKEGCGCCCCCGGACACACCGEICEEECGECAG@AACCEAAA@AEORWEA@OAJeI@@C@CDO@CBA@ABABAB@D@DBD@FABABA@ABAB@D@BB@B@DAFBBBAD@BAD@BAJE@ABA@AAAAACA@A@ECGAA@AACA@AAAACAEA@KBC@C@A@AAAACAA@A@C@AAAAAAAA@C@C@AAC@BI@A@CACCM@A@CBAB@BADABA@CBA@A@A@AAAAAGACCAA@AACAA@A@C@CBABK@EAC@AAA@A@G@A@A@C@CCACAA@IA@ACAGCKGIGIGEAGCMECAGHGFGFGFGBG@IEKEGAIEABC@K@IBIHCBEDEDGBC@E@KAEAG@EBCDEDGDGAA@IBG@GJEDI@G@I@C@IIEGCGAEACECKCKGECGEEEMCMCMCGECECGAGAKAKCIAAAEGCMCE@E@G@I@M@K@SAGAG@GAA@ABCAC@C@A@CAEEABE@E@IAI@E@GBGBE@C@C@CAC@G@C@GBC@EBE@CBEBC@A@AC@A@AA@E@CBEBC@EBC@C@E@CAC@CBC@A@EBE@E@G@GBG@G@CAC@EBGBG@EBA@GBA@C@C@C@E@EBC@C@E@C@E@CAAAC@C@C@CBC@C@E@C@G@G@E@G@C@EBI@C@A@C@EBGBGBEBE@I@ABC@ADADCBE@C@GAG@G@C@EBC@G@E@EBABGBG@GAGAE@GBG@EDCBE@E@@AABCBABAD@B@B@B@DABADADB@@F@BBJBJ@F@FADADBF@BAFBD@BADC@E@I@E@GAE@EAEAG@ABEBCBGBK@I@E@EBCBEDG@ABABAFCDABCBE@ECEACAE@A@IDCBE@GBE@E@E@AA@CACCCECCAAAAAC@A@CBEDGBEBGBG@GAG@EBGAEAGAEAGCEAEAAEDCJEBGEICG@GFEFCDA@AAC@GAO@GBE@CBC@A@CAAEGGGGCECEAEAEBCBE@EAA@CAECECGEE@CBCBGDEDEDCBEHA@ABAB@BABABABA@ABAB@BBBBBB@BB@DABCDABE@EBC@GDKFGDA@ADAFCBEBC@CAEAGCEAECCCEAAAAAECCAG@CAECCAIACAECEAG@EBCBC@EBC@C@EBA@A@CBE@A@A@AAAAACAAE@ABABABCBAAE@CACAA@EBEBCBEBEBG@CBC@EACAC@C@AC@CECEAKCC@ABABCDABG@AA@AFE@CGOBGDEBCBA@CACCCEAACCCGEA@EAEAACAAAACAAAMCA@AAAAA@KIKIIIKMGKEMEGAEACEEGCIAA@UBQCM@Q@KDKDSCKCMMEECAAACACBG@GB_LOHEFABAHFHFHFHDH@HENGLAH@FDH@BDFHFHJ@P@H@JBHFFFHBFAB@BADAB@JALHLJFVNFFBHAHCHKBUJKDBDFFLJNJFDHDFHFHAFEFCDEBEDQFIFKBOFCBCFAD@H@JANWJMDIDCDCDAFBJBB@BBBFDJDNBD@FBFBBBBDADCHCHCBA@GB@BKHABG@ABEAC@EBE@CBC@ABCBADCHCFADBBFBDDFBNFJBR@J@R@JBDBLDHBRDFAPED@PCLABDBN@LDJ@BDHDLHNDJFHFJFPBDAHCFABCFIHGFIJEJDDF@J@LFABEFGDKJ@P@JDNDDBDBDDFFLBDDBFFDBDBDDBBDF@D@HMDABABCB@DAFBLBDBB@BB@HDBB@F@FALAF@FBDFF@BADCFMZ@D@D@DDDFDB@HCJED@F@FDFDTHHBDBB@@BABABCBIH@B@DB@HCFC@ADADABBBBD@B@F@D@D@F@BBBBDBDBD@D@FBBB@B@BAB@BBBBBBDBD@HBD@B@B@D@BBBDDDBBBBB@D@DFBD@DAB@F@DBDBHTHR@F@BCBAD@DBBDBDBB@@BB@FBB@LABB@DENABA@CCEAI@MBA@@B@FBB@BB@DDB@@B@B@DBFABAB@B@HAB@DABAFAFIHEDIFGBA@A@CACBCDCHA@ADCDCBAB@D@BBDHDLFDFBDBBAB@DBDBD@JBFAHF@F@F@D@FBB@FADAB@@FCFCHAFAH@BM@ABEDAF@BBD@DFD@F@D@HBH@H@JBDBBB@DBBFDDBHAFEDAF@FBNE@G@CDCDCHEDEFCBAFCHAJAHAH@D@DAHKNKFUBW@G@I@KAAACCAECECEAAAAAACAEAAAA@AACCEEAAICEAGASAI@EBKBEDCDCDADH^FNHJDDDDDDBDFLBHGFCFABBD@DAD@DBBB@BBDBADABPDL@FBDBDBBDDHFHBBFDD@F@DBD@DDBDBDDBDDDDD@BBBDDD@BFFJHHFFBJDFBB@HCHED@@BD@DBB@B@BBB@BBB@B@JFBBBBB@BB@BB@@B@DCD@BA@@B@D@DABGJCDAD@D@B@B@BADADA@A@E@A@AB@BB@BBBDBB@B@B@FBB@BBB@BBDBLDJDJHJBD@DAHHXBD@D@BBL@JALCV@BBJ@N@XBDBHBBH@RBNBHBPFALCNCHITCLCL@HDFFBJBJBB@H@F@B@FBP@FFHDDBJLBB@FDFBBBFB@BBBBFBB@BBBBDDDBBDJFDDBDBN@BA@CDCBQFIDEDA@CDCDBD@BCJGHABC@ABE@ABAB@B@FAN@B@DBDBDBDADCBEBG@IBE@C@E@E@BF@BADCDABFF@DADADBBF@HAFBB@BBBDBF@B@B@BCFADAHAH@J@BBBDFFDJFDDDFDBFDDB@BCDEBCBKACAA@ABGBABA@ICCAA@A@@BCBADABCDEDABA@A@A@KAAAA@ABA@@BAD@FAFCDEBEDC@ABADCFCD@B@BBBFB@DB@@BEF@D@J@B@DCDGFCDAB@B@B@BJFD@HBD@DBDD@BDDBHBFHARBD@FAD@DBFBFDJHDBDD@DBHBHBD@DBBDDB@@B@F@B@BAFBJBBFDFB@ABADADABABCBCB@BAB@B@@AB@BA@ADE@EAA@AA@@CAAAA@ADEDCBCB@HADABCBA@ABC@AAE@ABC@ADABAB@HAB@BABCBABABAD@B@D@DFDBDBD@F@FBD@HBDBFBJFDDBD@DADBDDH@DADCHCDGJCH@F@BBBBFJDFHFHDF@J@HCH@H@DBDHFDDDDBB@B@D@F@B@B@BLNDHBDBJ@DDDBDDBDDBDBFAH@D@FDDHHDF@JAHAD@H@BBBBBBBD@D@DALADAHED@F@D@F@D@DBHBDBD@F@F@LAJ@H@H@FBFBDDB@DADADEFEFAD@J@D@BBBB@HFHBDR\\DBHHDDDHBF@D@BAHAD@DBDBDFDHDDFDBLAH@FDHFD@HAD@B@DBJHJFHDJDD@J@DCHGFGB@DABADABE@AB@DBB@D@BBBBB@FDBBB@BADABC@E@O@IBCJELIBCDEDKDEDAH@DBDDHFJHDDPFBBHDBBDDDH@FFDFBH@D@J@FBBBDDB@@DBH@DFL@B@B@BBDBBFBBBHBFDFDDBDBF@H@DBDBDBDD@BDAD@P@LBJDLBJARED@DBFBB@FBB@DADCBABAJ@N@JBF@HAFBLBD@FABABIBI@C@EACGEIECA@C@AFCJGDCDALCDC@A@OBEBEDADABC@CEEMGGGKOCG@I@OCK@CBEBEJOFEB@BCDABAF@HCDAF@HBFFD@D@B@DCHIB@FCBADADEBEAA@ACCAC@A","@@C@ABAAAA@CAAACECAACEAC@A@AB@BAB@BAD@BBB@FFFDBBB@DBDBBBB@AB@BEDEFAB","@@ADA@A@CAACACACCCA@BCBAB@F@F@BDBH@D@D"],["@@B@BG@A@A@C@AACA@A@AB@BABABCD@BABA@CDA@@B@D@D@BB@F@D@BAB@DA@ABA@A"]],"encodeOffsets":[[[113755,32173],[113719,32193],[114761,31432]],[[114278,30889]]]}}],"UTF8Encoding":true});}));