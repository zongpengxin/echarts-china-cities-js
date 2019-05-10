(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('抚顺', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"抚顺"},"geometry":{"type":"MultiPolygon","coordinates":[["@@@DA@CBC@AB@BED@BABCAABCBAACBA@A@CB@BAB@BAD@DAB@B@BCBAAC@EBAB@D@BA@@B@BABA@A@@DB@@BAB@B@B@BC@AFC@DDBD@DBBBBD@BBB@BBF@D@BBBD@D@BABBBDDBBBBBABADAFBBBDDBBB@BB@BD@@B@BABBBBBBFB@B@BDB@BB@BBB@BDB@CBD@B@B@BBB@BA@EAA@A@BF@BADDB@DB@@BB@@BD@BDB@BAB@B@BBLH@BBDAB@DABBBBDBB@BB@BB@BA@@B@BA@@BAB@BA@AACD@BGDABBB@FA@@BBBBDA@@BA@A@A@AAAB@B@BBBABAB@BA@ABCBCD@BADABAB@B@BA@@B@F@BC@A@ADBBBDBBBBB@@BA@ADBBB@B@@BB@@B@BABBB@B@B@B@BAA@AA@A@AB@BA@A@AAC@A@CBCDABAB@BFBD@BBBBB@@B@BA@BBA@@B@BB@BBB@B@BBB@@AB@@B@BADA@@BAB@BAD@BAB@BABA@C@AAA@@B@BA@@AA@A@@BA@A@A@@BABA@A@A@AAAAAAA@A@@BA@A@A@A@A@@AAA@ADBB@B@AA@AA@@AB@AAB@@AB@BABAB@AA@A@A@A@A@AB@@AB@@A@AA@AAA@@BA@@BABABAAAAA@@AA@ABDB@BA@AAA@ABA@@AA@@BA@@BA@A@@BABA@AAAAAAA@AAA@AAA@CAAAA@AAA@C@A@AAA@A@AAC@A@A@A@A@@AA@@BA@@BA@@B@BA@A@A@AB@AA@@AA@@BA@A@A@ABA@A@@AAA@B@BA@A@A@AAA@C@CA@BA@A@@BBB@B@B@BA@A@A@A@A@A@BBA@ABAAA@@A@AA@@AA@ABA@@BE@A@ABA@A@@B@BA@@AA@A@A@AB@BA@@BA@ABB@B@@B@B@B@B@B@BA@@BA@@AA@@B@B@BB@D@B@@B@B@B@BB@@BB@B@B@@BB@B@B@B@B@B@@BB@B@B@@BAB@BB@B@@BB@@B@BF@AF@B@B@DA@A@AB@BA@@BA@BBD@@BAD@BA@AAAB@BA@@BA@A@@B@B@BA@@BABB@B@BB@B@FHBFBLBF@P@FBHBFDDDB@HDDBB@DBFDHFFHBBBBFBDBDB@B@B@B@BD@BBB@@BA@AAA@A@@B@BBB@BABB@@BA@@B@B@B@B@BABA@@BA@C@A@A@A@ABA@@BA@@BA@A@ABA@ABC@CBABABA@@B@BA@ABB@BBBBB@@BB@@BB@B@B@@BB@B@B@B@@BB@B@@B@B@B@BB@@BABBBA@@B@BA@BBBBB@B@@BB@BD@BAB@B@BB@@BB@@BB@B@@BB@BBB@D@@BB@@B@BABA@@BA@AAAAAA@B@B@BA@@AAAA@@BABA@@AA@@BBB@B@BC@AA@B@BB@B@B@@B@BB@@B@BA@@B@BABAB@BA@@B@BA@@BA@@BABA@AB@BAB@B@BB@BBBBBBBBB@@BBBBBB@@BB@ABA@ABA@ABA@@B@B@BB@@B@BB@@BB@BBBB@BB@BBB@B@D@B@BAB@@BB@B@@BB@B@@BD@BB@BB@B@@BB@@A@AB@B@B@@BB@B@@AB@B@BBB@@BB@B@BABAB@@BA@ABB@B@B@B@B@B@B@B@BABA@AB@B@B@@BBB@BA@@BB@@BB@B@B@@B@BB@B@@BB@@BDBBB@B@B@B@B@B@BB@@BB@B@@BB@BBB@PHFBHHDDDHJHJHBBHDFBB@JFVJRBNBB@DBFBVDBBDDB@BBDBDABBF@BAB@@AD@BBB@BABAB@D@D@@ABAB@@BDBB@B@BAB@BABABABAD@@AB@BAB@B@DABABA@AB@BAD@HBLDHDH@H@DCBEEGGEACBCVEN@LAB@PBT@XFNFFBF@PAL@JFJJFRBNBHBH@FHDJJNJZNXDTHLHJAH@H@TCVCZAVGHCFCLELCHBRBRDNALCFAJ@F@LBZDVJLFFBD@NCD@DKDI@IBED@@ADABAB@B@@A@A@A@A@A@A@ABA@AD@BA@ABABAB@B@@ABAB@@AAAAAAA@AAA@C@A@A@A@A@AB@@AB@@A@A@AAA@ACA@AAAB@LAD@B@B@F@B@B@BBB@BBB@B@D@DBB@DB@BBBB@BB@BB@BBB@D@DBD@B@D@B@B@B@B@B@D@BBB@DAD@BBD@@A@ABABABABCBA@BFBD@BBB@B@B@BBBBDBB@B@@BB@B@BBB@DBDBBBB@FB@BA@ABABA@A@@B@BBD@B@BBB@B@BB@B@@ABBDABBDBD@D@DBB@D@@AB@BBBBDBFBBBB@D@BBBBBBD@DBFBD@DBB@BB@B@BB@@BB@@BDBB@B@B@B@DBD@BBDBDDPJFFHDLFTDXFXFTFNBZJH@LFNNJJRTHFFFFHCHEFGLDLHLJFFFJLBJ@HEFKHONINERCDADKLEPANCFEREPDHHHLHRTTNFFHDFJJPDV@FBHLNFJFHDJAFELCJCNDB@B@B@B@B@B@BB@@BBB@BB@B@DABAB@B@BBBBBAD@B@D@B@DBD@B@DAB@@ABAB@DAB@BADAB@BBD@B@B@B@B@D@B@D@B@DBB@@BB@B@DAB@@BB@B@DAB@B@B@BA@CA@BAAA@AAAAAC@A@@AACAAAA@AB@@C@A@AACDAB@BAB@B@BAB@BAB@B@B@BA@C@AF@F@B@BABA@ABABBB@BAB@B@BBB@B@DAB@D@B@BBD@D@B@FBB@D@B@DBB@BBB@H@@AB@@AB@JAB@B@D@B@B@DBFDBBDBBBDBB@B@B@DBB@B@B@B@D@BBB@B@B@B@B@B@BAB@BB@BB@BB@BB@@B@B@B@BDB@B@BB@BBDBB@@BB@B@B@B@D@B@B@B@BBD@DAB@B@B@@BD@BBB@DBB@@B@BB@B@B@B@BAB@@ADCB@DADAD@@AB@BBH@DBB@B@BBB@BB@D@BBBB@BBBDABBB@BBB@B@B@B@BBBBBBBBBBBCBABEB@BABC@ABDF@BA@A@BB@LADA@@BBBA@@BABC@CACAA@A@ABEDB@B@BB@BC@ADABAD@B@BBBBB@B@BBB@BBD@BB@B@B@B@@B@BBBDBBBB@@BB@@B@B@BB@BBB@FDNFB@B@B@B@B@BBBABBB@@ABAB@B@BAB@B@B@B@B@DABA@AB@BB@B@B@BBB@FB@JCH@BATCD@DAH@F@DAHAJEFBBBF@D@LBD@F@BADB@A@AB@BADC@A@AA@BCA@@AB@B@BABADAB@DBDAD@BBBAB@B@BBB@@ABAD@B@FBB@@AB@D@B@B@B@B@B@B@B@@BB@@DD@@BB@B@@BBBB@B@B@D@B@BAB@B@B@B@BAD@@ABABAB@@AB@B@@A@ABC@AB@@A@ABAF@@AD@@AB@BADC@AA@AC@AA@@EAAA@@AA@BAAAB@@A@AB@B@@AD@DAB@BBB@BAB@BBBAB@B@B@@AB@BABB@BBB@B@BB@@BDDF@DBBD@BHAFA@A@A@A@AA@@ADBDBB@BBFBB@@AD@BABBB@@B@B@BABAD@BAB@B@BAB@BA@@BA@@BABBBABA@@BBBBB@B@B@BB@@BB@BBBBBBB@BAB@BBB@B@BBD@B@BBD@BAB@B@B@BAD@BBDDD@@BB@D@B@B@B@D@BBBBB@@B@B@BBBB@@B@B@BADA@@BADA@AB@DAB@BB@ABBBA@@BBBABBBAB@B@BAD@BB@BD@BD@B@BA@BDB@BBB@BB@B@B@BABBLDHBDB@BDB@BB@@BD@B@B@BBF@FBDBBD@BB@DB@D@B@B@BAD@BFDLHDBBBBBB@B@BB@BB@B@@BBBD@B@@AB@B@BBB@B@B@BBB@@AB@@AB@B@@AB@B@B@B@B@B@B@B@BAB@B@B@BAB@B@B@B@B@B@BAB@B@B@DABAB@@AB@@A@A@ABABABAB@BCBAB@BAB@BAB@B@@A@A@AA@@A@A@C@AA@AAA@A@CCAAA@AA@A@AB@BAB@B@B@DAB@B@BADAB@DAB@B@@AB@BAB@B@B@@AB@B@B@B@DABAB@BAB@B@B@B@B@B@B@B@BAB@B@@ABAB@@AB@@ABAB@@AB@@A@A@A@A@AB@@A@AB@@AA@@A@AA@@A@A@ABABAB@B@@AB@B@BAB@B@B@@A@ABA@AA@@AAA@AAAB@@A@AA@@AA@@A@AAA@AA@A@A@AAAA@AA@@AA@@A@ABAB@@A@A@AAAAA@A@A@AB@DAB@BADAB@B@D@BAB@B@BA@A@ABABABA@A@A@A@A@AA@@ACAA@CAAAAA@AA@A@@AA@A@EBA@A@A@AAA@@AA@A@A@AAA@A@AAA@A@A@AAA@@AA@A@@BA@A@@BA@@A@A@A@A@AB@BAB@B@@A@ABAB@B@BAB@B@@A@A@A@A@A@A@A@A@AA@@ABA@ABA@ABABAB@@A@AB@@A@AA@AAA@AABAA@AC@ACAAAAA@A@A@C@ABC@A@A@ABAB@B@B@B@B@B@B@B@@AB@@AB@BBB@B@B@BAB@B@B@B@@AF@D@@AB@BABAB@B@D@B@B@B@BAD@BAB@B@@BB@@BBB@AB@BAB@@AB@B@B@BBB@B@@BBB@DB@@BDBB@B@B@DBB@BBB@DDDBBBBAB@BABAF@BADAB@B@F@B@@BB@BB@BB@@BBBB@B@B@@A@A@EBA@AB@@AB@B@BABAB@@BB@@A@AB@@BB@B@BA@CBABABCB@DAB@BAD@BAB@B@B@B@@BB@BAB@@AB@@AA@@A@AB@B@B@D@B@@A@CAAA@A@AAAB@AAA@AAA@A@AA@@AA@@ACAA@AAAAACA@@AA@A@A@A@A@A@@AA@@AAA@A@A@AB@@A@AB@@A@AB@B@B@@A@A@AB@@A@AB@BABAB@B@@AB@@A@A@A@A@A@AB@@A@C@C@AA@A@@CAAAC@A@AAAA@C@A@AAAA@AA@AAB@B@B@B@B@B@BAB@B@BAB@B@@AB@B@B@@AB@B@@AB@BAB@BAB@DABAB@B@B@B@B@BADBB@@A@AB@B@B@B@@AA@@AA@A@@AA@@AA@@A@AA@A@@AA@@AA@A@A@@AA@A@A@AAA@A@AA@AB@B@B@DBB@BBB@B@B@B@BA@A@A@A@ABA@A@AA@A@A@@AA@AAA@A@A@A@AABA@AB@@A@AA@@AA@A@A@A@A@AAA@@A@A@AA@BA@ABAAAAAA@A@@A@AB@BA@AA@A@AAA@AAAA@AA@@A@A@AA@A@A@A@@ABAB@@A@AB@B@B@B@BBBB@BB@B@B@B@BBBAB@B@B@BBBBBB@DDBBDDB@BBD@DB@@BB@@BBBBB@B@BB@B@@B@BBB@BB@@BB@@BB@@AAA@ABAB@BA@A@AAA@A@A@AAAAAA@A@@AA@@AAC@A@ABC@ABA@A@A@AA@@AAAA@@A@AB@B@@AB@@AB@@ABA@A@AA@@AA@AAAA@AA@A@@AA@@AAA@AB@@A@AAA@A@AA@@A@AA@@AB@@A@A@AB@BAB@@BB@BA@AB@@AB@@BBB@AB@BABAB@B@B@B@B@B@D@B@B@B@B@B@B@B@BBB@B@@BB@@B@BB@BAB@B@B@BAB@BAB@B@B@B@@BB@B@B@B@B@@BD@B@B@BBB@@BBB@D@BBBA@A@A@A@A@ABA@A@@B@B@BBBBB@BBB@B@BBB@B@B@BB@@B@B@B@B@B@BAB@B@B@BA@@BA@@B@B@BB@@AB@@BB@B@B@B@@BB@B@@BB@B@B@BBB@B@BBBABAB@BAB@BAB@B@@AB@B@B@B@B@BAB@B@BABA@AB@BA@A@ABA@A@AB@BAB@BAB@B@B@B@B@@AB@@ABA@AB@BAB@B@BAB@@A@AB@B@B@B@DAB@@AB@BAB@B@B@BAB@B@B@B@BAB@B@B@B@B@B@@AB@BAB@B@BBB@B@B@B@B@B@B@B@B@BAB@B@@BB@BBB@B@DBB@@BB@@BBBBBBBB@@BB@@AB@B@B@B@@A@AB@B@BAB@@ABADABA@ABAB@B@BABA@AAA@AB@B@B@B@B@B@@ABAB@@AB@BA@A@A@ABAB@BAB@B@BA@AA@@A@A@AAAAAA@@AA@A@A@AAA@@AA@AAA@A@@AAAB@@ABA@A@AA@A@A@@BA@AAA@AAA@@AA@A@A@@AA@@A@AAA@A@A@AA@A@A@A@A@ABA@ABA@@ABA@A@A@AA@@AA@@A@A@A@A@AA@AAA@A@A@@A@AA@A@@AA@A@AAA@@BA@A@A@ABAAA@@BA@@BA@A@AB@BAAA@A@@AA@A@A@A@A@A@A@A@AAABABA@A@A@A@A@A@A@A@AAA@@A@AB@@AB@BA@A@A@A@AB@@A@AB@FAB@DA@ABAA@@ABC@A@A@AA@@ABA@A@AA@AAA@@AA@@A@AAA@ABA@AAA@AA@@A@A@AA@AAA@A@A@AAA@A@AA@A@AAA@AA@A@AAAA@AB@@AAA@AAAAAAAA@@AA@@AA@@AA@AAA@@AAACCA@AA@AA@AAA@@AACAAA@A@AAA@AAA@@AAA@AA@@AA@@AA@@AA@AAAAAA@AAAA@AAA@AAAACA@A@AB@B@@AB@@C@A@A@ABA@A@A@A@A@ABAB@@AA@C@CAA@EAA@IACACAA@ABCBABE@A@A@@AA@@C@A@C@CA@@AAAAC@AAAC@EACACAA@C@A@AACAAAAC@AAAC@CACBC@C@CCA@C@IAA@@AB@@AAA@C@A@AAACAA@AC@GAAF@B@HABADCB@DBB@D@B@BA@ADEBCBABABABAD@B@B@FAB@DAB@B@BADAB@FAJ@B@D@D@DAB@BCBA@AB@AA@A@A@ABABCA@A@E@I@@BE@E@ABAAA@A@CAA@CBA@A@A@A@A@AAC@A@@AA@AAA@A@A@@AA@A@A@A@EAAA@A@A@A@AAAB@@A@AA@@AA@@A@A@A@A@A@AB@@A@AB@@A@AA@@A@AA@@AAA@AB@@A@A@A@A@AAA@AA@@AA@AAA@AA@A@A@AA@@AA@@A@A@AB@@AA@@A@A@AA@@AB@@ABB@AAA@A@ABABAB@@A@AA@@ABAB@BAA@@AB@@AA@@AA@@AA@BAA@@AA@@A@AB@@AA@@A@A@AB@B@AAA@@AA@@AA@A@A@@AA@@AA@@AB@@A@A@AA@@A@A@ABAA@@AB@@AB@@AA@@A@AB@AADCB@@AAAA@@ABA@A@A@A@A@A@ABA@AA@@A@AB@@AB@@AB@@ABA@A@AB@@A@A@AB@@ABA@A@AB@@A@A@ABA@AB@@ABA@A@AB@B@@AB@B@B@B@BAB@@ABAB@@AB@@A@AB@@AB@@A@A@A@AA@@AB@@A@AA@@A@AB@BA@AB@@AB@AA@A@AB@@AA@@AAB@ABAB@@AA@BA@A@AB@B@@AB@B@@AB@B@@BB@@AB@B@B@B@B@BBB@@AB@@A@AB@@AB@BABB@ABAB@B@B@@AB@B@@AB@@A@AAAA@A@A@A@@AA@AAA@@AA@@AA@A@@AA@@AA@@AA@@A@AB@@AB@@A@A@AA@@AB@@A@AB@B@@AB@BA@A@AA@AAACAA@AA@CE@C@A@ADG@A@ABA@A@A@A@A@A@AAA@AA@@A@A@AECAECCACAA@A@AB@@A@C@AAA@A@AA@@A@AAAAAAAACAA@A@A@A@A@A@AA@@AA@@ABA@AB@@ABA@AB@@AB@B@B@BAB@BBB@@BB@BB@BB@B@D@@AB@B@B@B@B@B@B@B@BAB@B@BB@BBB@BBBBBB@B@BBBAB@BBB@B@B@B@B@B@B@BA@AB@B@@BB@DBB@BBB@@BB@@BB@@BB@B@BB@BB@@BB@@BB@B@B@BBB@B@B@B@BAD@B@D@B@B@B@@BB@B@@B@BB@B@B@DBB@@AB@B@B@BABBB@BBB@B@BBB@BA@AB@@AB@@AB@BABAB@@AB@@AB@BABA@AB@@AB@BAB@@AB@@AB@BAB@B@BA@AB@BBB@B@B@B@B@B@B@B@@AB@BBB@B@B@@BBAB@BAB@@A@AA@@A@A@ABA@A@A@ABAB@B@B@BABA@AAAAAA@AAAA@AB@@AB@@ABA@A@A@A@AB@@AB@@AB@@AB@@A@ABA@AB@@AB@D@B@B@DAB@B@BA@AB@AA@AAA@AAA@A@AA@@AA@A@@AA@@AA@@AAAA@@AA@@AA@AAAAC@@AA@@AA@@A@A@AB@@A@AAA@A@AAAA@@AA@@ABA@AB@@A@AA@@AA@@AA@@A@A@A@A@A@A@AB@@AB@@A@AB@@A@A@A@AB@@AB@@A@AB@B@@ABAB@@ABABADABA@AB@@AA@@AAA@AACAA@A@AB@@A@AB@@A@AA@@AAAAA@AAAA@@A@A@A@AA@@A@A@A@A@AAA@AA@@AA@AAA@A@ABA@A@@AA@C@A@A@A@@BA@EAOBGAIEGEE@]FMPKHCBGDEAAGGIAAAOGIICQIIKUSKCGE@CAIEICEWEQ@KAKBKBG@C@A@ABCBA@A@ABA@ABCAADGFA@CDA@ABC@@A@A@CCCA@AAAA@AA@BCA@@A@AAABAAGCBA@AA@AA@CAEAAAA@C@CBA@CAA@A@@ACAA@A@EAA@AB@B@BA@A@A@AAABA@AACBC@A@@B@B@BA@ABB@@BBB@BA@A@ABABAB@BBBADADA@@B@BABA@C@AAC@@A@A@AAAA@A@A@C@AAA@A@A@AAC@AAA@A@A@CAA@BCACACAAA@IBYDWLIHKFGBI@WEMGKCC@I@K@GBQ@KA@IBI@G@ECES@WJIDOHGDSFGFIDEBE@KDEAM@IBOFKBIJKJERAAGCGIGIGEQCI@AAE@AAA@@AAAA@A@AABA@CAA@ACACAA@AA@AAAEC@AAA@AAA@ABAAAAA@AC@@A@AEAA@A@A@A@C@AAA@E@A@A@A@A@GE@AB@@ADCBAB@BC@A@A@A@AB@@ABAB@@AA@AAAA@AA@@AACACAA@C@AA@A@A@AAA@ABC@A@A@ABABA@AAAAAAC@AA@C@A@AACAA@AAAB@BABAAADA@AAAA@@A@AA@A@AAEBA@AAAEACB@@ADCBAB@AC@C@A@ABABADE@A@ABA@ABA@AA@EEA@A@@A@C@A@CA@@A@ABABAD@@A@A@A@AAAAA@AAC@A@A@AACB@BAB@B@BAD@BAD@BADA@A@AA@@ACAA@@A@CAAB@BABCB@@A@ABABA@AB@B@DBB@@AB@@AAA@CA@AAA@@CAA@AAC@CAC@CAA@A@ABABCB@B@@ABCAAA@CAA@EAA@A@E@A@A@AAA@ABSCIACKGKKEWI[GUIOGOOMGMEICWA[EOCYIS@SBQDM@KSMKGEEEGGIAKJCBAFAF@HBLMHUBI@Q@M@MDCDQPOJSJQTEHEHGHCBGFIBMB[JQNOLYHWCIAMGIECMDCBCHIDE@CGCWAWDCBYNCDAJANCHIRQDMDGDCJEL@NAPEBOFQHONMPKPEP@XAFDNJLNNVPTLLLCFEHOL[CG@A@EBQBQD@BAB@B@B@BABB@@BABBB@B@B@BB@@BA@A@ABAA@BA@AB@BA@@BA@A@A@A@ABABA@A@@AA@A@@BA@A@A@A@A@@BA@ABA@@BABBBBBB@AB@BB@@B@BB@B@B@BBB@@BB@@BB@B@@BB@@BB@@BA@@BA@AB@BABA@A@A@@BA@A@A@AB@BA@@BA@@B@BAB@B@BA@AH@BAJEJMFEDOBWAA@YCSHEDMFO@ECOGGGKEOCK@QDE@KAAEGMGIK@aGKBOGIGYGOZETMN[CYESAQB[NGDA@QNYHQFQFQFWD_GGCGEICOCIBA@IPCHAHEHK@QAYAM@QCWEMQAC@O@ABIBKCOUIICSCQCWGMCOAABAAABC@A@CAAB@BA@C@KJFJFL@H@FFB@BAB@BCBADEHG@KCC@MEEAUKCEA@A@@BA@@BA@@BA@@B@BAB@BADA@@B@BA@@BAB@BA@AB@BABA@ABA@A@@A@AA@A@A@@B@BAB@B@B@BB@B@BBBBBB@BBBA@ABA@A@@BA@@BABA@EA@B@BAB@B@BADAB@B@D@B@BB@@BBBB@B@BBB@B@B@BADBB@BBBBBBBBB@BBB@B@BBB@BBB@BBB@BBB@B@B@B@B@B@BAB@B@BB@B@BBB@BB@B@B@@BB@@BB@B@@BB@D@B@B@BBB@B@B@BAB@B@BBB@B@BBBBABBBBBBBB@B@@B@BB@FBBBB@"],["@@BB@AA@"],["@@A@@BB@@A"],["@@AA@BB@"],["@@@B@BB@@AAA"],["@@@BBBB@@BA@@BA@A@@BBBBAB@@ABA@A@AA@AAA@"]],"encodeOffsets":[[[126763,42597]],[[126729,42795]],[[126689,42901]],[[126701,42938]],[[128324,43213]],[[128325,43215]]]}}],"UTF8Encoding":true});}));