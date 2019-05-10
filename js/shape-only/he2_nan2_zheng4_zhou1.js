(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('郑州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"郑州"},"geometry":{"type":"MultiPolygon","coordinates":[["@@H@KlCN@BJ@PDH@BBJBDBHBD@BBJBFBB@HDD@HDHBHBLDDBD@RFD@DBFBJBBFDHBBBDHLFHFFBDBDDDDDBDB@BDHDBBNDFDNDDBFBFBB@PFD@BBFBDBJBFBHBJDF@BBB@LBJBBBJBLDD@HDDBB@FBTDB@PDD@RBH@J@VBH@TBD@L@H@l@J@H@N@BAF@JAJ@PANCFAD@DAFCHCLADAL@FAH@F@JAFADAHAFAHCFADANIDCFAfODERKHEB@B@D@JCHAD@JAH@B@D@B@DABAB@FCDADABAD@J@F@NAR@D@B@D@HCB@DAD@D@D@F@JAD@NCDAD@BADABAJGDCB@DABAB@HAREH@DAHAD@F@PCFAB@F@LAFAHAD@D@D@DAF@B@LAN@FAD@NADAB@D@F@FARAHAR@JATAB_@CEACGACCEC@ACACAAACCKAAACACAA@CAC@ABA@C@AHABDHA@AD@BA@AB@AIABACCBA@AA@AC@ACAAEI@AAAB@B@DAB@@AAAACLECKHA@AB@@AAAA@@AA@@G@A@AAAC@@A@G@AB@BAH@BA@A@ABB@AAG@E@AA@@CAE@A@A@AA@@ACK@C@AGAD@AAAA@AF@B@BA@AB@AA@ABC@ABBD@BA@A@AB@F@BA\\CFAGQAOC@AIAECIQA]BAE@GNIBGGGAAAGACBI@E@KAWWCELI@BGCCGBEBCAHIGAABSTAC@AA@A@@A@AAAA@@E@AA@AA@A@A@AAC@ABC@C@C@CBAAI@AB@DAB@BBB@@ABAB@@A@AB@D@@A@AB@@BBB@BB@F@B@B@@AB@BAR@DAH@FABVL@BBB@BANA@E@M@ABCCG@GB@B@B@JAAGEE@EL@JBFEDGFCA@G@BCAAA@A@AA@ABABA@BBBB@B@@A@AA@BA@AD@B@@AA@A@@A@AA@A@A@@AA@CB@A@A@AB@D@B@@A@EAAA@C@AAA@@B@B@BA@A@A@A@AA@AAA@A@AA@@AAA@AAA@A@ABAB@@A@AAE@ABA@AACB@@BB@B@@AB@B@@EBAB@@AD@DAB@FDDAJABB@DLELEDEBC@CB@@A@A@ADCBAB@DA@A@AAA@ABA@A@AAA@A@ABABAA@AAAA@A@A@CB@AAA@@AA@@AAC@AB@B@B@AC@AAE@C@C@A@A@AAA@CCC@ACC@AA@@DA@@C@AA@@ABA@AB@@A@A@AD@@A@AAABG@AF@@A@AB@B@B@@AB@B@FA@BBBB@@CB@D@BAB@F@BA@A@A@CA@EB@BB@@BCB@GB@DA@CEB@AFAE@@AAAAC@A@AAC@A@EC@@EA@@DC@@AC@@EA@A@@A@AD@AA@AC@A@BAA@@AC@ACF@@CE@ACA@AKB@ACD@@AAAA@CIC@AGDAAG@AB@@BBD@C@EB@@AA@@AB@@CA@@BACD@@AC@A@BGACE@E@@EJA@DB@@CH@@AB@@AB@@C@ED@@AD@@C@CA@@AACCB@AA@@ACBACAEBA@C@EFAFAAGJAACLAACIBAKACB@@EB@B@@A@AAEAAC@@AA@A@C@@DC@K@A@A@@AC@A@A@A@EBAC@AA@A@C@@AM@@BA@A@@ABAA@AD@C@A@ECBC@@BB@@D@B@BA@A@AAA@A@@CC@@BA@C@E@C@@BA@@BA@AB@AA@ABA@CB@AABBBA@AA@AC@@BC@@BA@A@@B@B@BA@@BC@@BBDG@@BC@@AE@@AABE@@AI@A@@A@AA@CA@DAA@AA@@CBA@AB@@A@A@AAEC@EAA@@CC@@AA@@AE@@AG@BEA@M@C@@CC@A@@DA@C@@AC@A@@BA@A@G@@BA@@BKA@DC@@B@DGA@AC@EBAAB@@AC@@A@A@A@CD@@AE@EA@AC@A@@CB@@CDA@AE@@DC@C@C@@AE@@EC@EA@AD@@A@C@AC@@AD@@C@A@CCB@AA@@BC@C@K@@BA@@A@CC@AAB@@A@AB@D@B@B@BCAAAAA@@GA@A@@CA@C@@BE@@B@B@BE@@ADABA@AA@@AA@@B@DE@AB@BA@@BC@@BABA@I@A@BAA@AB@EE@@CA@@AA@@ACAE@CAA@C@ABC@ABA@C@@BA@@B@DA@ABC@AA@BA@ABAB@B@DA@@BABA@ABAAAB@BA@A@AA@BABA@@BA@A@@BA@BDA@C@@BA@@BE@@B@DA@AD@DCBA@ADABABABC@ABA@EBAB@BA@A@A@C@A@A@A@CBA@A@@BABA@CDA@A@CBA@A@A@@BA@AAA@A@EBCBA@A@GAAAA@A@A@C@A@AAA@CAA@A@AAAAAA@A@A@AA@A@C@ABA@ABC@ABA@AAA@A@ABA@ABA@A@A@A@ADA@A@C@ABA@A@@BABA@ABADA@ABCBAB@BADA@@B@B@BB@@B@B@BABABA@ABADABCFGCA@AA@AA@EAC@C@ABA@A@ABA@ABCDA@A@C@C@AAAACAAACA@AA@@ABA@A@ACACCABC@CBA@ABABGBA@C@C@ABA@@B@BABA@A@AAAAAAC@@BA@@B@B@BA@C@@BA@@DA@CDABC@EBABABABA@A@CACAA@C@ABA@A@E@A@A@@BA@@B@BCBABA@ABA@@BFFCF@BB@B@@BDF@BBD@D@BDB@BA@CBA@@BA@ABA@AAABA@G@A@A@AAAAA@ABA@A@A@AAC@A@ADABCBABA@A@AAAC@AA@A@A@A@A@CBCBA@ABA@@B@F@BFBBB@B@BB@@BA@@BCBA@C@A@@BABA@ABA@ABABA@@BA@A@C@A@A@@BAB@DA@@BCBABABEDA@A@A@A@A@AAAAA@AB@BA@@AA@@AA@A@ABA@AAA@ABA@A@@A@CAA@AA@@C@ACAC@A@ACAAAA@A@ABABCB@@ABCB@BA@AACAAAA@AAAACCAAAAA@ABAB@@AAAAA@A@A@A@C@C@CBABADE@A@AABA@@AA@CAAAABG@ABA@AAA@AAGBG@EBABC@C@A@ACA@A@C@CB@AA@@A@A@ABA@ABADA@A@A@AA@CBA@AACAA@ACA@AAYAA@A@E@C@E@CBGBA@A@C@E@C@EAAACACACA@A@A@AAEBAB@@CEAA@AAAA@AAABA@AA@A@AACCCC@CA@A@A@A@AAA@A@ABEB@AAAA@ABABA@AAAAAA@AAA@AAAAAAACAA@BA@C@CA@A@@AA@AAA@@AB@DC@AA@@AAACA@AA@@A@AA@C@A@ABA@AA@ABCBCAAA@CAAACB@A@A@AA@ABA@A@@AA@@C@A@A@ACAA@A@A@@A@AECA@A@ABCDA@A@A@A@ABA@AD@BA@C@E@C@A@ECCAA@IAA@AA@AAAA@ABC@A@AAA@@AA@AAA@@AAAEBA@A@CAA@A@ABA@ABE@E@C@A@@BC@A@A@ABABAAABADABAB@BA@@BABA@@B@BABA@C@A@A@A@ABA@ABBBB@BB@B@B@BA@ABA@@B@BA@ACA@BAA@@AC@KCA@AAC@C@CAA@A@EBA@AAA@ABA@CBABEDAB@BADA@@BABA@CAAAA@A@@DA@CDCDA@@B@BAHABC@A@C@A@A@A@CA@AA@EAC@A@C@CACAA@CBA@C@@BC@AAABA@E@AAC@A@EBA@A@C@C@C@ABA@C@EBCDA@A@A@A@CAGCEAA@AAC@EAA@G@C@CBA@A@A@A@CAA@@A@AA@A@A@A@A@A@A@A@A@@BA@A@CBA@A@C@ABA@C@A@A@CDABA@A@@BABABA@AACAA@ABA@C@AAC@@AA@@AA@C@CAA@ABABC@@BA@A@@AABA@EAA@@BCDA@A@AAA@EBA@CAC@AAAAA@A@CAAAABAB@BB@AB@B@BB@@BB@@BBD@DAB@BDBD@HB@BBBB@DBD@BBABABA@A@CBA@CDED@B@H@B@D@BAB@BA@A@A@A@C@@AC@CAE@A@A@A@A@A@ABCBABEDEBEBC@A@CAA@CA@A@AA@@AA@AAE@EAA@C@C@A@A@A@@B@B@B@BAB@BBBABBB@BABADA@E@A@G@AAABC@EBABA@CAAAA@CBED@B@D@DAF@BA@IAE@GAIACAKCA@@B@JABCDABB@BF@B@B@D@BBF@F@D@BABA@CBC@EBAB@BBD@B@B@BB@@BBBB@HBDBBBBB@BBBABAD@BBBB@@B@BBD@BCBA@CB@B@DA@@BA@@B@B@D@B@BBDF@BDB@@HFABB@FBB@BBFBDBBBJ@B@DBJADABAD@B@BBBBF@BFABB@DA@CAABBB@BABBB@B@BBB@B@BABABCB@BAD@DBD@B@B@D@BAB@D@BABA@A@BDB@D@B@BA@AB@B@DBDDB@BBB@B@D@BABBD@D@D@HBHBDBDD@BBBB@BAB@FCB@DCFCLEBAFAB@BADCDABAB@@ABAB@@AAABAB@BBBAF@D@DAB@B@DBBBB@B@BABAB@B@D@D@F@B@B@B@HAB@BBB@BBL@F@B@F@B@@ABCBADAF@BAB@DBDBBBDAD@BAFBFBB@H@BAB@B@DBB@B@DADABAB@B@@ABADCDA@AB@B@BBDB@BB@BDBBDBFBHDBBABCD@B@D@FB@@BBDBD@B@B@BBD@BBBDB@BBBAD@DAFABBD@BDB@B@B@B@D@BA@@BBB@DB@@F@BB@BBB@BBB@B@B@BBFADBB@D@B@DABB@BB@DBB@DAB@DABADBB@FBD@F@D@LBB@B@BDBBABAB@BA@CAAH@BCAA@CHABA@C@@AGBE@A@A@C@GAOAE@CDE@ABADCBEAAAA@A@AAAAA@@BA@A@A@A@@AA@A@A@AAABAAABA@C@C@A@ABC@ABA@A@C@A@A@A@EBGFABCBAB@BA@EBEFA@AN@DAD@BA@A@@B@BC@A@@BA@ADAB@BAB@BA@A@@BA@BBABA@AB@BBBA@AB@BA@@BB@BBB@@BA@A@A@K@A@@CB@@CAAA@ABC@ADA@C@A@@B@BE@@DA@@BG@FPBFFA@B@B@B@BBBTA@DCB@BBBB@@DA@BDIDBBC@@BC@@F@BE@@AC@@BI@@BUB@D@BHBB@D@@BD@D@@ABAJ@D@@BBBB@@BB@@BC@AB@BBFA@@BB@BBB@@BED@BBB@BB@AB@BCAA@ABCBA@@B@BA@A@@BA@@BABA@ADA@A@@BB@BBB@BDBBBJ@B@DGB@B@BAFGA@LABH@@DI@@AA@BH@ABD@N@BBBB@DBDBB@RDD@DBDBB@DBDDB@DDND@BFBB@BBB@B@D@B@DCFADAFAFA@ADABC@ADAB@BABAB@B@BAB@DA@AB@B@B@LJDB@BBBBDBF@BDDBDDBDBB@D@N@D@D@BB@BDHFFBDA@ABABA@EBIDGDKFCBEBEDI@A@AAAAA@@DA@A@@BB@D@B@@BB@@B@BD@BDB@@BB@B@ABA@CBCB@BH@B@ABB@@B@BA@AAA@A@A@@BA@A@@BD@ABE@DBD@F@B@@BBB@DB@@AB@B@BBB@B@BB@BC@CBA@A@A@ABC@A@@B@BB@BAHAD@B@BAB@ABABB@B@B@@B@BG@@BA@@BF@AB@B@BA@@BA@@AABCAA@@BBB@BA@G@@AA@C@A@@B@BD@@BA@ABCBB@D@DABAB@@BB@@BA@CBA@ABA@@D@BA@A@A@AAA@A@@BBBBBABC@CAA@GD@A@A@AA@A@@C@ADAGAA@A@ABB@@BA@A@ABIFABABABG@@A@AD@AA@ABAA@GEA@BB@BDBCBCAA@BBA@A@A@@BF@BBA@C@A@AB@AA@@AA@A@A@BB@BA@E@@AA@@AAAB@AA@A@AA@@AAA@AA@A@C@A@A@BAAA@AB@B@LA@AC@GBC@A@DC@AA@ABA@A@A@A@@BA@@AA@A@C@ABDBA@ABABAB@BCAC@@BA@@AC@ABA@ABA@ABA@ABAB@BA@C@A@@BB@BBAD@BA@@BB@@B@D@D@DBJ@BATJ@@FCjB@BADABANEBAJGDADCDCDADCB@D@DAB@F@D@FBBBBBDDDDDDFFBDBB@D@DBBHJHHDBDDBBDBBBF@BBD@D@B@B@F@L@BAB@DADCDABCBABCHIBADABAB@JABAD@B@B@F@B@LDDBFBDBDBZPLHLFBBDBDBNFB@RHB@PDDBBAD@B@D@HAF@DAD@LAHAF@HAF@D@D@B@N@D@FBFBD@BBBBB@DBDBD@DBB@D@FBFDB@HBHDFBDBFBF@HM@ABGBEB@F@B@BABBHBBA@CRBBAJ@LBF@"],["@@A@BFB@AE"],["@@@CA@BD"],["@@C@@BD@@A"],["@@@@@A@B"],["@@@AA@BB"],["@@B@AAA@BB"],["@@@BB@BAACC@BD"],["@@B@AA@B"],["@@ABB@@A"],["@@B@@BB@@AB@@A@AE@@D"],["@@@AC@A@@DB@@AD@"],["@@@EA@BF"],["@@A@A@@BB@BA"],["@@@CA@@DB@"],["@@@AAABD"],["@@@DB@@AB@@AC@"]],"encodeOffsets":[[[115860,35693]],[[116716,35260]],[[116714,35266]],[[116869,35638]],[[116893,35626]],[[116901,35595]],[[116879,35561]],[[116909,35543]],[[116898,35518]],[[116843,35358]],[[116838,35308]],[[116788,35335]],[[116760,35331]],[[115554,35471]],[[116892,35456]],[[116872,35437]],[[116766,35330]]]}}],"UTF8Encoding":true});}));