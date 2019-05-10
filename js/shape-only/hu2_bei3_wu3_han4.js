(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('武汉', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"武汉"},"geometry":{"type":"MultiPolygon","coordinates":[["@@@BEJA@EAC@AAA@AAAAAAA@A@A@AB@BA@@BABEDAB@B@DADAB@B@BBB@BBBBB@B@BABABA@AAA@@AAAAA@AAAC@EAC@A@E@E@A@AB@B@B@BBD@DAB@B@BB@DBBB@BABA@CBAD@B@BB@DBD@DAD@BA@CBA@A@ADAD@D@FBBBBB@B@BCBABADADADBB@DBD@DBDBD@BDD@DBBBB@B@BAD@BC@G@G@AAAD@B@D@DBDDBDBD@@BDBDDDCBA@ABEDAB@DABBBBBD@BBDB@BBHBBBB@BD@BBBBBBBD@H@BBDDB@H@F@LCDABBDB@BDAB@B@@BBBHEB@BBBBFBB@BBB@DBDBDBDBDBF@D@D@DAF@B@DAFCHCD@DAD@@BB@@B@BBBHBFBNAL@PAR@D@B@`ARAB@BAB@B@D@PCB@HCHC@A@A@ABAFEDAB@BBB@BD@BBBB@B@B@D@JCDAD@B@L@H@D@D@B@FGFABCJEDCBABABBB@@B@B@BBBB@B@B@B@B@JCB@@B@BB@@HBH@FAHADENCPANBJDXBBBBBBBB@BABOTA@@B@H@F@HAF@H@DAF@F@BAF@B@BAD@B@B@B@B@BAD@B@BBDABA@EFA@@BADCF@B@BF@B@@B@BBBBBBB@BE@ABA@@B@B@B@BD@BB@BAB@BA@@B@B@B@BA@FD@B@BAB@BBB@BAB@BAB@B@BABAB@BB@@BBBBB@DA@@BBDA@A@@BBB@B@BA@A@@AA@@B@B@BB@@BB@BBBB@B@B@D@BABA@@B@BC@@BA@@BBB@B@B@F@BB@BBB@B@B@B@B@@B@BBBBBD@B@@BB@@B@B@BBD@BB@BBB@B@@BAB@BB@DB@BBB@B@BABAAABABAB@BB@D@BBBB@BABA@A@@B@BFBBB@BABA@A@CBBB@BAD@BCD@BAB@BA@ABABADAF@B@BBBBB@BD@@B@BABAB@BAD@BA@@BC@CBE@A@@BAD@BBBAB@B@BDFBDBBB@BBB@FD@BBB@D@BA@@BA@@B@B@B@B@BB@B@F@DAB@B@B@B@@BBB@B@B@BBB@BB@B@BAD@B@BBB@@BAB@D@B@BBBBBFB@BB@@D@BA@A@@B@B@B@B@BBBBBA@@BAB@B@BA@ABABA@AB@BABAB@BA@@BBDBBBB@DBF@B@D@B@BCBAB@B@BBB@BABABAB@B@B@B@BBBDDHDJDFFDBHDPLFFJJHHDBBF@DBFFDDBBB@DBBBFDDBBJFBBDDDJDFBFADCBADA@@H@FCFEFA@CDCFABEBCCEACAC@CDC@GEA@ABBH@DADEBCFCFCFEBEBC@EHIVELERAN@H@DDHBBFBD@D@JAH@DB@D@BCFAFCDFF@BAD@HDHDDBHBFDDH@HAJBB@DFDHFHFHHFJBBD@F@HAFBD@BBFJDHBHBDBDDHDH@FDHHDDFDFBDBDBFABABAFCHGFEBE@G@ABEDCH@FBHCBCBAFIBA@AHCB@D@D@FGDEB@FBFDHBJDHBD@F@DA@E@CFCDBB@BAAABEBAB@F@HBFBFAR@JAJ@DB@BB@B@@BB@B@B@B@BBB@BAB@B@B@B@@AB@B@B@@AB@F@D@J@B@F@D@FAB@@AB@B@@AB@@A@A@A@E@CAACAAACAACCC@G@CAACEECAACGCGAGCGCEACCCCAGECCCE@CBEBGBE@ABE@C@CBCDAHCDEDCDCDCBADEB@@AD@FABABCHCHBF@BBFAFABADAD@@CCCCCBAFAD@HAHALCFADC@CACAAEAE@E@C@C@AA@A@E@CBCBG@ABAF@DBFBD@DEFEB@FAHCFCDCDEBEDEB@BAF@@AH@D@D@HAJ@DAB@DADC@C@CBCFA@C@E@CBGBCDEFADC@AEECCAE@EBGHG@EEIAACECEACAAAKCGEGAAAACGAIBEBACCGCEACAAE@CCAAA@C@EDGDEFE@ADCBEBCACDAF@H@F@FAHAFCFEFEBADCDEBA@A@AAAB@@ABA@BB@@BB@@BB@@B@BB@B@B@BBB@B@BA@A@A@A@ADAHM@AJGBAHGB@FEDCB@@AB@BAHADAHAJADAD@HAB@B@@AB@@ABA@A@A@ABA@A@CBE@ABA@A@ABA@ABADCD@@ABA@A@A@A@A@C@AACBCBAB@B@D@D@F@B@B@DBFBDBDBHBFBB@BDDDDD@B@B@BBBB@BA@A@ABA@CDCBA@ABAB@B@DBBBDDDBBBB@D@B@B@D@B@B@@B@D@B@B@BB@BBDBBBB@BBDBB@B@B@DAD@D@D@B@@BB@@B@BBBB@B@@A@AAEAA@ABA@AFCFAD@F@FB@B@DCBA@ABA@A@@BAB@BAB@BC@@BAB@BB@B@@BB@@BBB@BABA@@B@BA@BFDD@DADABA@@B@BBDBBF@B@B@B@BBDD@B@B@BB@@ABABAB@BBB@DBB@D@B@B@B@B@B@F@DBDDD@DBB@@FFFDBBBB@DDD@FBD@B@D@D@BCBCAAAA@A@AD@BADBD@B@B@B@@A@A@AA@@AA@A@A@A@@AA@@A@A@ABA@ABA@CBA@A@AAA@AA@AAAA@ABCDC@A@AB@B@BBBBBBBB@DDH@BBDBDBBBD@DBD@F@DBBB@BBDBBDDBBB@BB@BBBBBBB@BBB@B@@BB@B@B@B@@A@AB@AAAAA@A@@A@AAA@AA@A@A@@ABABAB@B@@BB@BBBBBBDBBBB@B@B@@AB@@A@C@A@A@A@A@ABABABA@A@EAC@A@CA@@AA@AA@AA@@A@ABAB@B@DABAB@B@@A@A@AB@B@@ABGBABADAB@B@B@BBB@B@@AAA@A@ABA@EB@F@D@BB@BB@BAB@B@B@B@D@B@@ABA@CBAB@B@D@B@B@D@B@D@B@B@B@D@B@DBB@BBDDBFBDBBDJFBFDBF@BAFCBADCB@BA@@BBB@B@B@BA@@BABA@ABABC@A@E@CBC@A@ADABABBB@BBB@BB@FABBDAB@B@BBB@B@@BBB@BB@@BBB@BBBHBFDBBDBBBDDD@FBHBB@DAFAD@D@HABBDBBBB@FDDBDBDDDB@ABABA@ABA@C@ABABCBEBCBA@A@AB@B@@A@AB@@B@BB@@B@DDBBBBBBABA@ABCDA@A@ABAB@@B@BB@@AB@BB@B@BD@H@B@B@@BB@BBB@AA@AB@AAAC@A@CAA@ABA@ADAB@B@BAD@D@DBBB@BBBBBB@@BAB@B@BBBB@B@@BB@B@@BA@@DDDDFBDADAF@DAFCDADABBDDDBBFBFADEBCDE@GCE@IAGBIB@B@B@@BB@@ABABADAA@@A@ABA@A@AA@@AA@@A@AB@BA@ABAAAAACAAAA@A@C@AAAC@A@A@CBADABAB@BABA@AB@B@@BB@@BB@B@B@B@BABC@AA@A@C@@AA@@AA@A@@AA@@A@A@AAAA@@AA@@A@ABABCBE@AA@AA@A@AB@B@BADCBCBADE@AFA@ADADEDAB@B@BABA@AB@B@B@B@B@BBB@B@B@B@D@B@BAB@B@@B@BBBDBB@DAHCB@@A@AAAAAAA@ACAAAAAA@@A@ADCDCFCDAHCBBB@@BB@BB@BB@BAB@BCB@B@B@B@B@B@BAB@BABAB@@AB@@A@AAA@AA@A@C@A@@ABABA@AB@@AB@BAB@FAH@DADBB@DAD@B@BAB@BABCACBC@A@ADA@A@CAAEEEAIAAACAA@AAA@@AC@AAAAEACEA@C@A@@AAABCBAD@BA@ABAA@@AA@AAA@@AA@A@ABA@C@ECA@AAAAAAACE@C@C@CBCDBBBDBBBBA@@BABABA@A@AAA@A@GDGBKA@A@ABC@A@AA@AAABCBABCFC@E@EEGGB@@ABAACAA@A@CBABADA@AB@BABCBCBCBCACCCAAA@C@A@AACCAA@EAC@E@CBCAACAA@AAA@AB@D@F@D@BA@A@A@A@@A@AAE@A@AACA@CAC@A@A@@B@B@BADA@A@AACCCACACACAE@EAE@ACA@@E@ABABAB@B@B@B@@AB@BCBABADC@C@C@C@CCE@AAACAAACDCD@BCD@BCBABCBA@ADA@@BCFEDEBGACAIKAAAAA@C@CBC@CBA@CBC@CBA@AB@DAB@FABA@A@AAC@CDE@ABC@E@AAC@EA@A@C@C@A@ABE@E@E@EAG@E@ACICCCCCCEAEAGECCCCCCCEA@ACCAECEAECE@GAEAEACAEAGACAEECAIHEFC@EAACCG@A@AAAAAACAA@A@A@ABA@ABABC@AB@@CBAFGDC@CBABCBABA@A@AB@BA@ABAFA@ABA@AB@@A@A@A@AA@AAAAA@AAAA@C@AAA@A@A@A@AB@@AB@@ABA@A@ABA@ABABA@ADAB@B@@BB@@BB@BBB@BBB@B@BB@BB@@B@B@B@B@BB@B@BAB@BAB@BAB@@ABABABABAFEBA@ABEB@@ABCBABCDABC@C@A@C@AB@B@B@BBBB@BB@B@BAB@@ABA@ABA@ABA@AAA@AC@A@A@AAAA@ACCKAEAG@[ACAUAQCQEECM@CAmMCAKGCAAAIIGECAAAOEIEICA@KCMCIAQC@AC@YCIAEAGAMCOEOGIEQGQBDIBG@GBC@AFCFA@A@AAAAAE@A@AE@A@ABAB@BBB@@BD@@AB@BCBA@C@CBE@ABIBEBG@AACA@CC@EBCDCBE@C@A@A@CA@@CBADCBC@ABA@AACAAAAAAAAAAC@E@E@A@@AA@ACAAAG@A@CBGBCBAAAC@E@CBEBA@@B@BA@A@ABA@A@A@ABA@A@A@EAA@A@A@C@@BA@A@ABCAA@AAAC@C@CB@@AB@BA@A@A@A@AA@@AC@@AA@AAAAAAAA@A@A@CDCDEDCBEBG@E@AAIFC@IAA@GACAK@E@MAI@GEK@KFOHIHEBGBGAGAGAGAIAEAE@C@A@E@EBG@GBGAIAEEGECGCECEEG@GEAC@EAE@E@G@GCGECGEECGEIEEEAG@G@G@CBEAGAGAGAGCGGGGEE@GBA@C@@AAAAC@C@C@C@CBC@ECCEACA@C@CDCBGACACAA@AECACCCAA@A@ADC@A@C@A@A@A@A@AA@AAAAAA@AAABA@CBC@A@A@EDCDAFGBADCDCBC@AB@BCAA@A@CA@BABADCD@B@B@BADAHCBA@ABC@A@A@A@A@ABCBEDADADCB@BCBA@A@A@AAAAA@A@AA@BA@AB@BABCAC@E@C@C@ABCBEDEDGDEBAB@F@BABA@ABCBADABAB@@AAAAAA@ABA@ABABA@CAABA@ABA@ABA@AA@AA@@A@ABABA@A@AAA@A@AA@A@A@A@A@A@@BABCDCBABAB@AA@@AAA@A@A@A@AB@D@BABA@AAAAA@CBADCBABABABCBAAA@AA@A@A@A@A@@A@AA@@A@A@AAA@AA@@A@AA@@AA@@A@AB@B@B@BABA@AA@@A@AA@AAAAA@A@@AB@@AB@B@B@@ABA@AB@BABA@A@A@AA@EGECA@A@A@@BA@A@A@ABCHABA@C@A@A@A@A@A@AAA@A@ADABA@EDA@ABA@A@@B@B@BA@A@A@A@A@A@A@AB@D@BB@@BBB@B@BA@A@A@C@ABA@A@ABA@A@AAA@A@A@CAA@A@@ABABAA@@AA@A@@BABCBCB@BCBA@@BA@A@A@A@A@A@@BA@A@A@A@ABA@@BCBBDABABGBCBCBA@C@C@G@E@KDABEBA@EDABABABCBEBABGBGFGBGBCBA@EBE@E@G@GBABE@EBGDEBEDA@A@C@ACAAE@A@CCGCA@C@EBCBC@E@CCCCEEGGEAGCC@OCA@AAGCEEE@GACAA@E@A@CAA@EAA@CAG@EAGAGAA@E@E@CAA@CAC@E@IAA@A@A@ABA@ABkL@J@DBD@F@DBB@FADAHADEFCDEDEFADA@AFADAD@D@F@DBD@F@DBF@D@F@DAF@FAD@FADADABEBC@KBKBKBE@CDAD@DAF@F@HAHCDADA@IDEBBF@BBDBDBD@B@DAJ@B@DAHCFABCDAFCDADEBABABADCDEHCFCBAFA@CFEJCFCF@F@BELCDCBKJA@EBQ@EBA@CBEBGBCBA@C@GAE@EACAA@C@A@A@E@CCCAACACCACAGAC@CD@DAD@BAD@D@DBB@BBBB@D@FABBDF@DBB@DGBKHEBAFELAD@BABCLADKVMVIJEDKJABA@WRSLABE@IBQBKAqMKIGEKKCAIOGIGMCEOYAAACCC@AGKGIGIKQGS@C@A@EFGKC@AA@ICGCC@C@CFABA@EACACAKCI@CAGCADBF@JALCFCHADC@ABEAEAA@G@CBEDOFA@ABEBCBEBCBGBCBGD@BAD@BADADABABCBCBAD@B@B@BBDBDBBBBDBBDBBBDNDDBD@DBD@BBBBBD@F@F@DBFBHBDBDBDBDBBDDBD@FAFCBC@CACAC@AAC@CAC@CBG@ABA@ADCBAFAD@B@D@D@D@BBBB@@B@BADABADAF@B@BAD@D@DB@BDDB@DABCDCBCBABCDCBEBABCD@BAD@BCHCHBBBBFF@B@BAB@FBDFHFFDH@DCBMBIA@AAACAGBCBC@EBC@CACBC@IDG@EDAB@B@DBDFDBD@B@DEDC@C@AB@DBBHDBDBBDBHFDDBBADBDBD@D@B@FDBDBDBD@F@F@F@HBF@B@F@H@B@B@DDDDD@BBF@FDFBD@D@F@@BDFBLBDBJDDBDLDDD@BBBDFBBBBDFDBBDDBBD@DBDDDBBBDBBBBDDDDDDFFB@BDD@B@B@B@D@D@DBBB@DBJ@B@BBD@BBD@DB@@DDDDDB@DBDBBBBBB@BBBDBD@B@BDBBBDBB@B@@BFADCBA@C@CDC@ABCBCDAB@DBFDB@BBFDBBBB@BAFAD@DAF@DBH@B@B@B@D@FBD@B@BB@@BDDBFB@BHDFBFDBDBDC@ADCB@B@BB@B@FB@DAJAD@F@PDJF@BB@BBDDDDDDDBDDDDBDBDBD@BABABABCD@B@DDF@DBFAB@BABCDCBCBEBCBCD@DBB@BB@DBHFFBFFBD@BCDCBKBEBEBAD@FBD@BFFHFB@HFFFDFFHDHDDDFDDJLBBCBA@A@E@CBC@A@ABA@AB@BEF","@@EDAA@C@G@AFBDBAH","@@@BABA@ABAB@BABA@@AA@A@@A@A@A@A@AA@@A@ABABAB@B@D@B@BBBB@B@B"],["@@@A@AA@@B@B@BB@@A"],["@@@AB@B@@BB@B@B@@B@BB@@B@B@BBAB@@AB@B@@AB@B@@BB@B@B@@BB@B@B@B@AAB@@ABA@A@A@AAAA@@A@A@A@A@AB@BABAA@@AABA@A@@AA@A@A@@AAAA@AAAB@BA@@BB@@BA@A@AA@BA@@BA@@AA@@BAB@AA@@BA@@B@B@BABA@@B@B@B@BB@"]],"encodeOffsets":[[[116676,31429],[117646,31724],[117746,31738]],[[116492,31025]],[[117686,31778]]]}}],"UTF8Encoding":true});}));