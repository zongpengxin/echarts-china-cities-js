(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('延边朝鲜族自治州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"延边朝鲜族自治州"},"geometry":{"type":"Polygon","coordinates":["@@A@@AA@A@A@@BA@A@AAAAA@@AA@@BA@@BA@C@@BA@@BAB@BA@A@@BA@A@IAK@GAE@GAC@G@IAA@E@GBG@E@G@G@ABE@G@E@G@GBE@I@C@EBI@I@E@GBG@E@C@C@EBK@I@KBG@E@G@GBE@E@G@EAG@G@G@E@G@A@A@K@I@U@S@M@G@U@S@O@M@KAG@K@I@Q@A@A@A@EAA@GAMAA@AAA@A@A@G@OBE@K@M@C@GBE@C@CAICeQ[TABABABABEBEDCDADCFAD@D@B@B@BBBADCDAD@B@FAB@DADABABABAD@BADA@@BAD@B@B@DAFADCFCHEHCFEFEHCBEFABCHADADABA@@BAB@BA@ABA@@BADADADAD@DA@ABGDC@ABCB@BGFEDCBEFC@CD@BAB@B@BBBDFBB@B@B@D@D@DBBDDBB@B@B@BA@ABCBA@AB@BAB@B@BA@C@G@C@A@ABABABADCDABABABEBCBCBCBCBA@CBABA@CBADADCBAD@B@BADEFA@@B@BAD@DCD@BBD@B@B@BABCD@BBB@DBD@B@B@B@B@BAB@B@B@B@BA@@B@B@BA@@B@B@BA@@BB@@BA@A@A@@AA@AAA@A@@AA@AAA@A@ABA@A@A@A@A@A@A@A@A@ABA@@BC@@BCDAFABAB@D@D@BBB@BAD@BABADABBB@BA@@BABCBABA@A@@BAD@DCB@BICAAA@GJCFAB@BC@G@CAE@C@@AEAKAA@A@A@CBGFEFCDKJCBA@A@@BBB@BCJAD@D@BBDBDBDBDDDDDBB@BBBAB@BB@B@B@B@D@B@BABBD@BBD@DBBBDBD@BAB@B@BB@B@BBBB@B@B@B@DADCB@F@B@B@F@NBB@D@F@B@B@JBF@D@JB@BBDBD@FDDFFBB@BBBB@BBB@DBDB@B@FAD@BADAFBBBH@BB@H@B@F@D@D@B@FBDBB@B@B@B@HAB@P@F@D@B@B@BBFDBB@BDBBBDLBD@BDHBFBB@B@BDBBDHBFBLFFBJDFBDBFFDB@BBBDBFBBBD@F@D@B@BBB@@BBB@DBDBDBDBBB@@BB@@BBDADADAB@B@BBD@DBFBFBD@BBBDDFHHDDDDDFFDDBDBFDHBBBBBB@BABCDCFCB@B@D@BCFED@BBDDD@B@BAB@B@B@B@D@BA@@DB@@D@P@B@D@BBB@B@B@BA@A@C@A@C@A@ABC@@BA@BHBBDBBB@BBB@BABA@A@A@AAA@CBA@@B@B@BBFBB@B@DBB@B@B@B@BABBBB@@BB@@BDBB@@B@BA@ABCBCBA@@AC@AACA@AC@A@@BAB@BBBBDBBBB@B@BABABAB@BC@ABABABCBC@GBC@CBA@@BAB@BA@A@A@@B@BB@DB@BB@ABAD@BA@ABA@ABCDAB@B@BFBB@B@B@B@B@@BA@ABCBA@@BA@@BABA@A@@AA@AAAAA@ABA@@B@B@B@BBBB@@B@B@BA@C@A@A@A@C@A@AAA@A@A@A@A@@B@B@BB@@B@DB@@BB@BBBBBB@B@BA@A@AAA@A@C@C@C@A@AAA@ABA@@B@B@BBB@B@B@BBB@B@BA@ABA@A@@BABBB@BA@@BAB@D@B@BB@@BB@B@BBB@B@B@D@B@B@BBA@@B@B@B@B@DB@@B@BB@@BADCBA@CBC@EBC@ABABABC@ABA@E@E@C@CBEDGDAB@BABCBABCBC@CBC@A@C@AAC@AACAA@CAA@A@A@C@C@CBEBEBCBA@CBCBABAB@F@D@D@BBB@BBBD@B@B@FCFCDAB@D@B@BB@DABAD@BABABA@ABCBABC@A@CAA@A@CAA@A@A@A@ABA@ABA@CDABAB@BBBA@@BCHCDEH@B@BAB@BADABABA@ABABA@ABC@A@@BA@A@AB@BABABAB@D@B@BB@B@B@BBB@FDD@B@BAB@DCBADAB@DAB@BBB@B@BBBB@B@BABA@A@CBADA@AD@B@B@FBBDBBD@B@BABABA@A@CAC@C@A@C@ABABABADABA@CBEBA@C@A@A@AAC@A@@BCBAB@B@B@BBDAD@HAB@B@B@BBB@BBBBBDDBD@B@BABABB@@BB@@BBBB@@BB@BB@B@B@BBB@BBBB@@BBB@BA@@BABABA@@BB@B@B@B@@BB@B@@B@BB@@BB@B@@B@BA@ABABA@ABA@A@A@@BAB@BABA@A@A@A@A@A@A@@B@BA@@BA@@BA@@B@BA@@B@BA@@B@B@B@B@BAB@B@BA@A@A@@BA@A@A@A@@BA@ABABA@A@A@@BA@@B@B@B@BBB@BAB@BAB@BB@@BB@@BBBB@@B@BAB@B@BB@@B@BAB@BBB@BBBBBDBBBBB@B@BA@ABABA@@BAD@BA@A@A@A@A@ABA@CBA@ABA@A@A@A@AAAAA@@AAAA@A@C@A@C@A@A@AB@BABABA@ABABA@ABA@AB@BA@CBABABAD@B@D@BABA@@B@BA@ABA@A@ABA@A@A@@BABA@A@ABA@A@@BABABA@A@AAC@A@@AAAA@@AA@@AAA@AAAA@AAAA@A@AA@@AA@A@A@@AA@A@@BAB@BA@A@A@A@A@C@C@CBA@A@A@AAA@A@A@AAA@A@A@A@A@A@C@A@CBA@ABCB@BABABA@ABC@ABABA@A@CBCBA@A@A@A@CBA@C@A@A@A@AAA@A@ABA@A@ABABA@CBCBA@ADCBCDABABA@AB@BABABA@@BA@A@ABA@AB@BA@C@A@A@C@A@A@@BBB@B@B@BA@@BA@AB@BA@AB@BBBBB@DABABABA@ABC@@BA@ABABCBA@ABABA@A@A@A@A@A@ABA@CBAB@B@D@BABA@@BA@CBA@AAC@A@A@AB@BA@CBABC@A@A@CAC@AAA@A@A@A@@B@BABCBA@@BAB@B@BA@ABA@ABAB@B@BABAB@BAB@B@BA@A@AAA@A@A@A@@B@BA@A@ABA@ABCBABA@A@A@AAA@C@C@A@A@@BA@@BA@A@ABABCBABEBA@A@A@A@A@A@A@@BABCBABAB@DAB@B@BABABABCBA@@BA@@B@B@B@BA@@BA@@BA@@BA@ABA@ABABA@A@A@A@A@@B@B@BA@@B@BABABA@@BAB@B@BBB@BABA@A@A@A@CBAAA@C@C@A@A@A@@AA@A@A@A@A@A@ABABA@ABA@A@AB@BA@@BA@@BA@@B@B@B@BB@@BAB@B@BB@@B@BB@@BB@@BB@BBBBBBBBBBBBBB@B@BBBBBBB@B@B@B@B@B@DB@@B@BB@B@BBD@BBD@DBDBB@B@B@B@B@BB@B@B@B@B@B@BABA@@B@B@BAB@B@BAB@BA@AB@B@B@B@DBB@BA@ABA@A@AB@BB@BB@B@B@BB@@B@BBB@B@BB@@DBBBBBB@B@BAB@BAB@BB@DBB@B@@BABABBB@B@BBBBB@BAB@BABA@@BC@ABABC@CBABA@A@AB@B@B@BABCBA@ABCBA@AB@B@B@BDAF@B@B@DBB@B@B@B@B@B@B@D@B@B@B@B@D@D@BBB@B@B@B@D@BBB@B@BBB@D@B@B@@BB@B@B@B@B@BBB@@BB@B@B@B@B@@B@BBBB@@B@BBBB@B@B@BBB@BBB@BBD@BBB@@BB@@B@B@B@BA@@BB@@BB@@BB@B@BBB@B@@BB@@BBBB@BBB@B@B@BB@B@B@B@B@B@B@B@B@B@BB@@BBB@BB@@BB@BB@BBB@BB@D@BBB@D@B@B@B@B@BAB@BBB@BB@B@BBB@BBB@BB@@BB@BBB@B@B@B@B@B@B@BBBBB@BBB@B@@BB@BBB@BBBB@BB@B@BBD@B@@BB@@BBBABBBBBB@B@BBB@B@BBBBB@BBBBB@@BB@BBB@BB@BB@BBBBBBB@@BBB@B@BB@@B@D@B@B@B@B@B@B@BBB@BB@@BB@BB@BB@@B@B@BB@@BBBBB@BBBBB@BBBBBB@BBB@@BB@@BBBB@@BB@BBB@@B@BA@@BBBB@BB@B@BAB@B@B@B@BB@@BBB@BABABA@@BA@@BAB@BAB@B@B@BABA@@BA@@B@BA@@BC@ABABABABA@CBA@ABA@A@@BA@ABA@CBCBC@CBC@A@CBA@A@A@A@@B@BAB@BAB@BB@BBBBBBB@BBB@B@B@B@B@@BB@BBB@BB@BBBA@@BB@B@BBBB@B@B@B@B@B@BA@A@@BA@@BA@@BA@ABA@@BA@@BABA@@BA@A@@BA@ABA@@BA@A@@B@B@BB@B@B@BBB@BB@BBBB@DAD@B@B@F@B@D@D@B@BBBBDBBBBBBBB@D@B@D@B@D@D@BBB@B@B@D@DBD@BBB@B@B@BBB@@B@BB@@BB@D@BBD@B@B@@BB@@B@B@B@BABA@A@@B@B@BA@@B@BB@B@DBBBDBB@@BA@@BBB@B@BBB@B@BB@B@DBBBB@BBB@@BBB@B@BB@@B@B@BB@BB@BB@@B@BB@@B@BBD@BB@@B@BA@@B@BABABABA@@B@BDBBBBBBBBBBB@B@BBB@D@D@D@B@BB@@BBB@BB@@B@BBB@BBB@B@BABA@E@A@C@C@ABABABADAB@BAB@B@B@DBF@D@B@D@B@BB@@BB@@BBBBB@BB@@B@BBBBBBBBBBB@B@B@BAB@BB@@B@D@B@B@B@B@B@B@BAB@BA@@BCBCBABA@A@@BBBBBDBBB@BB@B@BB@BBBBB@BB@BBB@BBBBB@BB@B@BBBB@BBB@@B@BBB@B@D@BBBB@@A@AB@BAB@B@B@BAFAB@BAB@B@B@B@B@B@BAB@B@B@B@B@B@BBB@B@@BB@B@BBB@@BB@@B@B@B@B@B@BBBB@@B@B@BB@B@B@B@@B@BB@@BB@@BBB@BBBB@B@B@D@B@B@B@B@BBB@B@@BB@AB@BAB@BA@@BA@@BA@@B@B@B@B@BBBBBABABABB@BD@B@DBB@BAB@BBBB@@BB@@BB@BBBBB@B@B@B@B@BAB@@BB@B@BABAB@B@BBB@@B@B@B@D@B@B@FB@@BB@B@B@B@B@B@B@@B@B@B@B@B@BA@@B@B@BBB@BB@@BB@B@BAB@B@BBB@BBB@@BBB@BB@@BBAB@B@D@DBBBBB@B@B@B@BA@ABAB@B@BB@BBB@@BB@@BB@B@@B@BB@@BB@B@B@@BB@B@B@B@B@BAB@@AB@B@@AB@D@B@B@B@@B@B@BBBDBB@BBB@BB@BBD@B@BB@@BB@BBBB@B@BB@@B@B@B@BBBBBBBBBB@@B@BB@B@B@BBBB@BB@B@B@B@B@B@B@DAB@B@@AB@B@B@@AB@B@BAB@D@B@B@B@BBB@@BB@@BB@@BB@@AB@B@BBB@B@BB@BB@BBA@@B@BBB@B@BAAA@@B@B@B@B@BB@BBA@@BA@@BB@@B@B@BB@@B@B@BB@@BB@@BB@B@B@B@B@B@@BBBB@@BB@BBB@BBB@AB@BBBBBB@@BB@@BAB@BA@@BBBA@@BAB@B@B@BA@A@AB@BA@@BA@C@A@@B@BB@B@@B@B@BABAB@BBBB@@BA@@B@B@BBBBBB@ABA@@BA@@BA@@BABA@A@@BB@@BB@@BB@B@D@B@B@BBBBBB@B@BA@@BABA@@B@B@B@BC@BBB@B@BBBBB@B@B@DBBAD@B@BBB@@B@BA@@BA@@B@B@BABABCB@BA@@B@B@BB@BB@BB@@B@BA@A@A@AB@BB@@BB@@B@BABA@@BABA@A@A@ABA@ABA@A@A@@AAAAAAAA@ABA@@BA@A@ABA@AAAAA@A@ABA@@BCBCBA@ABAAEBE@A@A@ABA@ABABCBEDABC@@BABABC@CBA@@BA@@BBB@BBB@BAB@BAB@BCDABABABABAB@B@BBB@B@BA@ABABA@C@ABA@@B@BABADAD@BAB@B@B@B@B@D@B@B@BB@BBB@BB@BB@ABABABAB@B@BBB@BB@@BDBAB@BA@A@C@A@CAA@@B@BA@ABA@A@@BAB@BA@ABABABA@C@CBC@A@C@CBC@BBBBBB@B@BBBB@@B@B@B@BA@A@@BA@@B@B@BA@ABA@A@A@ABA@@BA@BBBBDBBBB@BBBBBBB@@BA@ABA@ABA@@B@BABB@BB@BB@@D@B@B@BBBBF@BBBDB@BBBB@BBDBDDB@@BB@B@BBDAD@B@B@BB@B@B@BB@@BB@BAB@D@DAD@BADADABABABA@ABB@B@DBB@BBB@BB@@BD@@BBBDB@B@BA@CBA@A@@BBB@B@B@B@BBB@B@BB@@B@B@BA@ABABA@A@A@A@A@ABA@@B@B@BB@@BBBAB@B@BABA@A@C@A@ABA@A@C@A@A@A@@BAB@BABABA@A@@BA@A@A@ABA@A@ABA@A@ABA@A@A@ABA@@BA@ABA@A@ABABA@@BA@A@A@A@A@ABA@ABA@A@ABA@A@ABA@@BA@A@AB@B@BB@@BA@ABA@A@ABA@ABABABA@@BA@A@AB@BA@@BABABA@A@A@A@@BA@A@A@ABA@A@@BA@ABCBC@ABBBD@D@F@DAB@B@B@@BBBBB@B@BB@@D@BAD@BBB@BBBBB@B@BB@@BB@BBB@B@BB@B@B@BA@@BABA@@BA@ADAB@B@BA@@B@BA@@BBB@BB@BBB@D@@BB@B@B@B@B@B@B@BAB@@BA@ABABABC@ABE@AB@B@B@B@B@BBBBB@B@BBB@B@B@B@BAB@BA@@B@BBBBBBBB@@BB@@B@BBBB@BBB@B@BBB@DBBBB@BBB@@BBBBB@B@BB@@BB@BBBB@BBBB@B@B@B@DBB@D@DBB@B@BBBBBBDBDB@BBB@BB@@BB@@BB@B@BBB@BB@B@BBD@BABB@B@B@@BD@BBB@B@DBB@DBB@B@BB@BBB@B@B@B@BB@@BB@B@B@BAB@DBB@BBBBBBB@BBB@BBB@B@BBABABABABAB@B@BFBB@DBDBB@B@B@B@B@B@@BD@D@BBBBB@BBB@@BB@B@B@BAB@B@@AB@B@B@@AB@B@B@B@DAB@BAB@B@B@B@B@B@B@B@B@BBB@@BB@@BBB@BB@@BB@BBB@B@B@BBB@BBB@@BB@B@BBB@B@BA@B@BBBBBB@BBBBB@@BB@BBBBBBB@B@@BB@B@@BDBBBB@DAD@B@B@B@B@B@B@B@B@BBB@@BB@@BB@@BB@DAB@B@B@B@B@B@B@B@B@B@D@B@B@B@BBB@B@B@B@B@BBB@@BB@B@B@B@B@B@B@B@BBB@B@@AB@BBB@B@B@DBB@BBFD@BB@@BBBBBBBBBBBBBB@BBB@BBB@B@B@BBBAD@B@B@DADAB@BADAB@B@B@B@BBB@BB@BB@B@B@B@B@BBBBB@@BB@B@D@B@@BBB@BBBBBBBBBDBBBB@BBB@B@@BB@BBBBBB@BB@BBFBBBB@BBB@BBDDDBBBD@DBF@FB@BA@CBC@EBABA@@BA@ABABABADAD@B@D@B@BB@@B@B@BBD@D@BABA@A@C@A@A@A@A@AAA@@AA@A@ABA@AB@BA@AB@DA@ABCBC@ABA@ABA@@B@BBB@BBB@BB@B@@BB@B@BBB@BBB@@BB@@B@B@B@BBAB@B@B@B@B@B@B@B@B@B@BAB@D@B@B@B@BBB@B@B@@B@B@B@B@B@D@BAF@B@B@BB@BBBBABABA@@B@B@B@B@B@B@B@B@B@BBB@BAB@BAB@B@BB@B@B@B@B@BAB@BAB@B@B@B@B@B@BB@B@B@B@B@B@B@BA@@B@B@B@B@F@B@BA@A@ABA@AB@BA@@BA@A@A@A@@BA@ABA@ADCBAB@BB@B@BBB@B@B@@AB@@BAB@BAB@B@B@B@BA@A@A@A@CAC@CAC@AAA@@BA@C@C@ABC@A@ABC@ABAB@BA@@D@B@B@D@B@B@B@B@BB@@BB@BBBBBBBBDBBBBBB@B@B@@BB@D@BBD@BBB@BBB@B@BBB@@BBBB@@B@BBDDDB@@BB@BBB@@BBBBB@BB@@B@BBB@B@BABABA@A@A@A@A@AAA@@AA@@AA@A@ABA@A@@BABA@AB@B@BABABADA@@B@B@B@B@BA@A@C@E@A@C@C@C@A@A@@BBBBB@B@BAB@BA@@BAD@B@B@B@B@BA@@B@BABABA@ABABABA@@B@BBB@BB@@BBBBDB@@BBB@BB@@BBBA@ABA@A@A@A@A@ABA@ABABCDAB@B@B@BB@BBB@FD@BB@B@B@B@B@@BB@B@@B@BBD@B@BB@BBBDBB@B@BA@@B@B@B@BB@BBBBBBB@B@B@B@@A@A@C@ABAB@B@BAB@B@B@BA@ABA@ABADA@AB@BABAB@BA@AB@BABAB@B@BAB@BBB@B@@BB@B@B@B@B@DBD@B@B@B@B@B@@AB@BAB@@AB@@AB@B@BAB@@A@A@AB@B@B@B@@BB@@BB@BBB@BBB@@BB@BBB@@BBBB@@BB@B@B@D@B@F@BAB@B@BAB@B@B@B@B@@AB@@AB@@ABABABA@ABA@ABABABAB@@AB@B@@BB@B@BBBBB@BBBBBBB@@BBBB@@BBB@BB@@BB@@BBBBBBBB@@BB@BBBDB@@BBB@BB@@B@BB@@B@BA@@B@B@B@BA@BB@BB@BB@BBB@B@B@BB@@BBD@B@BB@@B@BB@@B@BB@@BBB@B@BAB@B@B@BBB@DB@@DBB@BB@@B@B@BB@@B@B@B@BB@@DBB@BB@@B@BB@@BB@@BB@@BBB@B@BB@@B@B@B@B@B@BB@@D@BB@@BB@B@@BFBBB@BB@@B@B@BB@@BBBB@@BB@@BB@B@BBB@BBB@B@D@DAB@B@B@B@B@B@B@@BB@D@B@@BB@B@B@D@D@B@B@B@BB@B@B@BB@@B@B@B@BBB@BDBBB@BB@B@D@D@B@B@B@BBB@B@B@@BB@B@B@DBB@BBB@B@@BB@B@BBB@B@DBB@BBD@@BB@AB@BA@@BBB@BBB@B@B@BBB@BBB@BBBBBD@BBB@BBB@BBB@BBB@BBB@B@B@B@BBB@BBBBB@BBB@B@B@BBB@B@B@BBBBD@BBBBB@@BBBB@@BBBBD@BB@@BB@@BB@B@@BB@B@BBB@BBB@BBB@B@B@B@B@B@@BB@B@BBB@D@B@B@B@B@B@DBBBB@B@B@B@B@BBB@B@@ABA@A@AB@BA@AB@@AB@@AB@BAB@BA@AB@@A@A@A@A@AB@@AB@BABA@ABA@A@A@A@AB@@ABAB@BABAB@BAB@BAB@B@BAD@B@D@B@BAB@B@BAB@B@@AB@BAB@BAB@BABABAB@BAB@B@D@B@B@BABA@ABA@A@AB@@A@AB@@A@AB@@ABA@AB@@AB@B@@AB@B@@AA@@A@AAA@A@A@A@AB@BAB@@ABA@AB@@AB@B@B@B@B@@AB@@AB@@A@AB@BAB@@AB@@AB@@A@AB@BAB@B@B@@AB@BAB@BA@ABA@AAA@A@AAAAAA@@AAA@A@AA@@AAA@A@A@A@AB@@ABA@AAA@AAAB@@A@ABABA@A@AB@@A@AB@@A@A@A@ABAB@@A@AB@BA@AB@@AB@B@B@B@@AB@BABA@A@A@AB@BABABA@ABA@AB@@A@AB@@A@AB@@AB@@AA@@A@AA@@AA@@A@A@AA@@A@AA@@AAA@A@A@A@AA@@A@A@A@A@AB@AA@AB@@A@A@A@A@A@A@A@AAAAAA@AAA@A@@AA@A@A@A@A@A@A@@AA@A@A@ABA@A@A@A@A@A@A@AAA@AAA@A@@AA@@AD@BAB@BAB@BAB@@A@A@A@ABA@ABAB@BAB@B@BAB@@AB@@AB@BABABAB@BAB@BABABA@ABA@A@ABA@A@A@A@AAA@CA@@AAAAA@AA@@A@A@AA@@AA@@A@A@A@C@AB@@AB@@A@A@A@AAAA@@AA@AA@AAA@AAA@AA@@A@AAA@A@AA@@A@AA@@AA@@A@AAA@AA@AA@A@AAA@CAA@A@AAA@ABAB@@ABAB@BAB@D@B@B@D@B@@ABABAB@@AB@BA@ABAAA@A@AAA@A@AB@AA@AA@@ABAB@@A@AA@A@@AA@@AAA@AAA@AAAA@@AA@A@@AE@A@AA@ABABA@ABA@A@AA@@C@A@A@A@AAAAAA@@AA@AAAAA@@AAA@AA@@AAAB@B@B@B@B@BAD@B@D@BABABABA@AB@@A@AAAAA@A@A@AAA@C@A@AB@@C@ABA@AB@@ABA@A@ABABA@AB@@AAA@A@CBA@AB@@A@ABA@A@AB@@A@A@A@A@A@AB@B@BAB@B@B@@AB@BABAB@BA@AB@@AB@@A@AB@@ABABA@A@AB@@ABABA@CB@BA@AB@B@B@BAB@BABABA@AB@@A@AB@@A@AB@@AA@@AA@@A@AB@B@B@B@BBB@BAB@BAB@B@@AB@B@D@BAB@BAB@@ABC@ABAB@@AB@B@B@B@@AB@B@@ABA@A@AB@@A@C@A@ABA@AB@BAB@B@BAB@@A@A@AA@@AAA@AA@@A@AB@@AB@B@B@BAB@@AB@@AB@@ABA@AB@@AB@BAB@@A@ABABA@AB@@A@AB@BABA@AB@BA@AB@BABA@AB@@AB@@A@A@AAC@AB@@A@A@AB@@AB@BAB@@AB@B@@AB@@A@AAC@AB@@AB@B@@AB@B@B@B@B@BA@ABC@A@A@A@A@A@A@A@AB@@A@AB@@AA@AA@AA@@A@AB@@A@A@ABABA@AA@@A@A@AB@@A@A@A@A@A@A@ABABAB@BA@A@ABA@ABCBA@A@AB@@AAA@C@C@A@ABA@A@AA@@ABA@ABADCDABABAB@BAB@@A@A@AA@@ADAD@BA@ABABC@ABABCBAFEBA@AB@DCBADAFEBABAB@BAB@B@@ABAB@B@BAB@D@BAB@B@F@B@D@B@BA@ABA@A@A@ABAAAAABABAB@@AB@BA@AA@@AA@A@A@AAA@@AA@ACAAAAAAA@AAAAA@@A@A@AAAB@@ABA@AB@BABA@AA@@A@A@A@ABABAB@BAB@B@BAB@@AA@A@AAAAAAA@@AA@@A@A@AB@@ABA@A@AA@@A@CB@@A@AB@B@BBB@B@B@B@B@@BB@@BB@B@@BB@DAB@DA@A@AB@D@BAB@B@B@B@B@BBBBB@@BDBB@@BBBBBB@@AB@@AB@@AB@B@B@BAB@B@BAB@B@BBB@@BB@B@B@B@B@B@BBB@B@B@B@@BB@@B@B@B@B@BBB@BB@B@DABAB@B@BAB@@AB@BAB@BAB@B@BAB@B@B@B@B@B@B@B@B@B@BAB@BABAB@@AB@BAB@@AB@@ABABABADCBCB@@ABA@AB@@ABABABAB@BA@ABABABA@AB@B@@AB@BAB@@AB@B@B@BABAB@@A@AB@BA@ABA@ABAA@AAA@@AA@@AA@A@@AA@A@@AA@@AA@A@@AA@A@@AA@A@@AAAA@@AA@AAAAA@A@@A@AA@@AA@A@@A@AA@@A@AA@AAAAA@@AA@@AA@@AA@A@AAAA@A@AA@@AA@@AAAA@@AAAAAAA@AB@@AAA@AAAB@BA@AB@BA@AB@BABAB@B@B@B@B@@AB@BB@AB@@ABABAB@@AB@B@B@BA@AB@@A@AB@@AB@@AAAB@@AAAB@@C@C@ABAB@BA@AB@@A@A@AB@@ABA@AB@B@@A@AB@@A@ABC@ABA@ABEBCBEBC@ABA@ABCBA@AB@J@BACCEAC@IBIBGAAA@AA@A@A@CAA@A@A@AAA@@AA@AAAAAA@AA@A@@AA@@A@A@A@AA@@A@A@A@AB@@A@AB@B@B@@BB@@BB@D@B@B@B@B@B@BBB@B@BA@A@AA@AAAA@ABAB@BAB@BAD@@AB@BAB@BAB@B@B@B@B@BBBBBBB@B@B@B@B@B@@BB@B@B@DA@AB@@AB@@AA@@A@ABA@AB@AA@AAA@A@AB@B@B@@AB@B@B@BAB@BAB@B@B@BABA@A@AA@@AA@@A@A@A@ABAAA@A@A@AB@@AB@B@@A@AB@@AB@@A@AB@@A@AA@@A@AA@@A@A@A@A@A@A@AB@BAB@@AB@BAB@@A@AB@BAB@@AB@@A@AB@@AB@@AB@@AB@@A@AB@@AB@@AB@@ABABA@A@A@A@A@AB@B@@AB@@A@AB@@A@AA@@AAA@A@ABAB@@AB@BA@AB@@ABA@ABA@A@A@AA@@AA@@A@A@AB@BAB@BAB@B@B@B@@AB@@ABA@A@A@A@ABCBA@A@C@A@C@A@AB@@ABABA@A@A@A@ABA@A@A@A@ABA@A@A@A@AB@@ABA@A@ABA@ABA@CB@@A@A@C@A@A@AB@BA@ADEBAB@BABADAB@FADAB@@A@A@A@A@A@C@A@AA@@AB@@A@A@A@ABA@AB@@A@AB@@A@AB@B@B@D@B@B@B@B@BBB@B@B@BAB@@CBA@ABABA@ABABA@ADC@ABABC@AB@@ABBB@B@BBB@B@D@D@B@B@HAB@B@BBB@DBB@D@BBF@D@B@D@B@B@BBB@BBBBB@B@BBBB@BBBBBBBBBB@@BF@DBFBB@B@B@F@B@B@B@B@B@DADAB@BADE@AB@DC@ABA@A@AB@BAB@BAB@@AB@@AB@@AB@B@D@D@@AB@B@B@B@B@B@B@FAD@B@B@B@B@@ABAB@BAB@B@DAD@DAB@B@B@BABADABAB@BABA@ABAB@B@@AB@D@B@B@BBB@@BB@@BB@@BB@BBB@@BB@B@@BB@BBB@B@@BBB@BB@@BB@BBB@B@@BB@B@@BB@@BB@@BB@@BB@B@BBB@B@BBB@B@B@B@B@BBB@BBB@B@B@B@BBB@B@B@B@B@B@B@BAB@B@B@B@BBB@B@B@@BBBB@B@B@B@B@B@B@B@B@BBB@B@B@B@B@B@B@B@B@BAB@B@@BB@BB@BB@@BA@@B@BBB@BB@@BB@B@B@B@BBB@BBBBB@B@BBBAB@BAB@@AB@B@BAB@DAB@B@B@BBB@BBB@@BB@B@BBB@B@B@BBB@@BB@@BB@@BB@B@BBB@B@B@@BB@@BBB@BBB@BB@B@B@@BB@B@B@B@B@B@B@B@B@B@B@B@B@B@B@B@B@B@B@B@B@@A@ABA@A@A@ABA@A@AB@@BB@B@B@BBB@B@@BB@B@@BB@@BB@BBB@B@B@@BB@B@@B@BB@@BB@BB@BB@@BB@BBB@B@BAB@BAB@B@B@B@B@BBD@B@@B@B@B@BBB@B@BB@@BBBB@@BB@B@@BB@B@B@B@B@B@D@B@B@@BB@B@BBB@@BB@BB@BBBB@@BBB@B@B@B@B@B@B@B@BB@@B@B@B@B@B@BB@@BB@@B@B@BABA@@B@BBB@B@BA@@BB@BB@BA@@B@B@B@BBB@BA@@B@B@B@B@B@B@B@B@B@B@BA@@BA@AB@B@BA@@BB@@B@B@BA@@B@BA@@BA@@BA@@BA@A@A@A@A@A@AA@BA@@B@BB@@B@BAB@B@B@B@BAB@B@BAB@BA@@B@B@BAB@B@BBBDD@B@BB@@DBB@BABAB@BB@@B@BB@B@B@@BA@@BAB@B@B@B@BA@@DAB@BABAB@B@BB@@BB@@BB@B@DBB@B@@BB@BBB@B@@BB@@B@B@B@BBBB@BBB@B@@B@BAB@BA@BD@BA@@BA@ABABE@A@ABAB@B@BA@@BA@A@A@A@@B@B@BBBA@@D@BB@@BBB@B@B@BB@@B@BBB@B@B@BBB@BA@ABABA@ABA@A@A@@BA@AB@BB@@BB@B@BBDBB@BBAB@B@B@B@BAB@B@BADAB@D@BABAB@B@BA@@BB@@B@B@B@BADAB@B@B@B@B@B@B@BB@@BB@B@@BB@@BBB@BB@@BDBBBDB@BB@@B@BB@BB@BB@B@BBB@@BB@@BB@@BB@BBB@BBB@BBB@B@BBB@@BB@@BBD@BBB@BB@BBB@BBB@BBB@@BBBB@BBB@BBB@B@B@@AB@B@@AD@BAB@BABAB@B@B@DAB@D@B@B@B@B@B@@AB@@AB@@AB@@AB@@A@ABA@A@ABA@AB@@A@AB@@A@AB@B@@AB@@AB@B@B@B@B@B@B@B@BAB@B@B@B@B@BBB@B@B@@BB@BBBBBB@B@BA@@B@B@B@B@B@B@BAB@BB@B@B@B@@AB@B@B@B@B@B@B@B@B@@AB@@AB@@AB@@AB@B@B@D@B@B@B@@A@AB@@AB@B@@AB@@BB@B@@AB@BAB@@AB@@AB@BAB@B@BAB@B@B@BBB@B@B@B@B@@AB@B@@BB@B@@BB@D@D@B@B@B@BBB@B@B@@BB@@BB@@B@BA@@BB@@BB@@BB@B@B@B@B@B@B@B@B@B@BBB@B@@BB@@B@BBB@BAB@B@B@BB@B@B@@BB@B@B@B@B@D@B@B@B@B@B@F@B@@B@B@B@B@BBF@B@B@FBBBDB@@BDBFFBB@DB@@BB@B@H@D@B@D@FBBBFDJBBBB@F@B@BBD@B@BBBBHLDBBBBBBBFDB@FDB@@B@L@DB@B@B@B@B@B@B@DAF@F@D@B@HBD@BBB@@BBBBBBBBBB@D@DADAB@@AB@BA@AB@@AB@BAB@B@B@B@B@BAB@B@B@B@B@B@@AB@B@BAB@D@B@B@B@BBB@B@BBB@B@B@@BB@B@B@B@B@B@B@B@BBB@B@B@B@B@B@@AB@B@@AB@B@B@B@@AB@B@B@B@B@B@B@B@BAB@@BB@B@B@B@BBB@B@B@B@B@B@B@B@B@FBD@B@D@B@B@BBB@B@B@@BB@@B@BBBB@@BB@B@BBB@B@B@B@B@B@@BB@@BB@B@B@@AB@B@B@BAB@B@@AB@B@B@B@B@B@B@B@B@B@B@B@@AB@B@B@B@B@B@B@B@B@D@B@B@B@B@B@B@@BB@B@BBB@B@@AAA@A@A@AB@@A@AB@@AB@B@BAB@B@B@B@B@BBB@B@@BD@@BB@B@@BB@BBB@B@B@B@B@B@BBB@B@B@B@B@B@B@B@B@B@B@BBB@B@BBB@B@B@B@@BB@B@BBB@@BB@@BB@B@B@B@BAB@B@B@BAB@B@B@B@B@B@B@@AB@B@BAB@B@B@B@BAB@B@B@B@B@B@B@B@BBB@B@B@B@B@B@B@BAB@BAB@@AB@B@ABAB@B@BA@@B@B@BAB@B@B@B@B@B@B@B@B@B@B@BB@@BB@B@B@B@B@B@B@B@B@BBD@B@B@BAB@B@B@@AB@BAB@B@B@B@BAB@BABBDBB@B@B@B@B@B@B@B@B@BAB@B@@B@B@B@B@BBB@BBBB@B@B@@BB@AB@B@BB@@B@B@B@B@B@BA@@BA@A@@BA@@B@BB@@BB@B@@BB@@B@BABA@ABA@A@@BA@@BA@@BABAB@B@B@B@BBB@BBBBBB@BBB@B@BBBAB@B@B@@AB@BB@B@B@BBBBBBB@BA@@BA@@BA@ABBB@BA@@B@BA@A@A@A@@BA@@BABA@@B@BA@@BA@@B@B@BBBAB@BA@@BB@@B@BBBB@@BB@B@B@B@B@@AB@B@@AB@B@B@B@@B@BBB@BB@B@DAD@B@B@B@@BB@B@B@B@@BB@B@B@@BAB@BB@B@BBBBB@BBB@BB@BB@BBBB@BBBB@@B@B@B@BB@DBB@B@DBB@B@@BB@AB@B@BB@B@BBB@BBBBB@@BB@@B@BB@@B@BB@B@BA@BB@B@B@B@B@B@B@B@BBB@@B@BB@@B@B@B@BB@B@B@B@B@B@@BB@@B@BBB@BB@BBBBBBB@@BB@B@B@@AB@@AA@@A@A@A@AAAB@@AB@AA@ABAB@D@B@BAB@B@B@B@B@B@@BB@@B@BBBB@BB@BB@@BB@B@@BBB@BDBBBB@B@B@@BB@B@B@B@BAB@@ABB@BB@@BA@@B@BB@@BB@@BB@@B@BB@B@BB@B@B@BB@B@B@BBB@B@BAB@B@B@@AB@@AAA@ABABADABAB@@AB@@BB@BBB@@BB@@B@BBB@BB@@BBBB@@BB@BBBBBBB@B@B@B@B@B@BAB@B@B@B@B@B@B@B@B@B@B@BAB@@ABAB@BA@AB@@ABAB@B@B@B@B@B@FAB@BAB@B@BAB@BAB@B@BAB@BA@A@A@AAA@ABAB@B@BA@AB@@ABA@AA@@A@ABA@AA@@AB@B@B@B@@B@BBBB@B@B@B@B@B@B@BAB@B@@ABA@AA@@A@AA@@AA@AABA@AB@@AB@B@@AB@B@BAA@@AA@@AA@A@A@A@AAA@@AA@@AA@A@@BA@A@@AA@A@@A@AB@@AB@@A@AB@@A@AB@@BB@B@B@B@@AB@@AB@B@@AAA@AB@B@BAB@B@@AB@BAB@@AA@@A@AA@@A@AA@@AB@BAB@BBB@B@B@B@@A@AB@@AB@B@@BB@B@B@@AB@@A@AAA@AA@A@AA@AB@BAB@@AB@@A@AB@B@@AB@@ABAB@@AA@@ABAB@@AB@@AB@@AA@@AA@A@A@@A@AA@@AA@A@@A@AAAAAB@@AB@BAB@B@@A@A@ABA@A@ABAA@@AA@@A@A@ABA@A@A@A@AB@@AA@AAEAA@@AAACEBA@AA@AA@ADA@ADAF@@AA@A@AAA@A@C@A@@A@ACCA@@A@AACBA@AF@B@DB@AA@GCA@A@@ADC@A@C@AB@BC@AAABA@C@ABABADAB@@A@AAC@ABADCBCBABADABA@CBA@A@A@AB@DBB@D@BBDBDADAD@B@F@BADA@A@CBABEB@@A@AB@DABA@AB@BAB@D@B@BBB@BAB@BA@A@AB@B@B@@BBBD@D@D@@AB@@AB@B@@ABB@B@BBBB@@BBBB@B@@B@BB@BAB@B@B@BBB@B@B@@BB@BABBDBD@B@@DBBBBHBDBBBBB@BABCB@BABB@BBB@BB@BAB@B@BA@BB@BDDABADBBHBDD@B@BB@AB@B@BB@F@D@BAB@DA@BF@DBB@B@BBB@B@B@BAB@B@B@B@B@B@@BBB@BB@@B@B@B@BA@@B@BB@BBB@B@@BB@BBBBB@B@BB@B@BA@@B@B@BABB@@B@BA@@B@B@B@BA@@B@BBB@BB@@BA@@B@B@B@B@B@BB@@BB@@BB@@BB@B@B@BBB@B@B@@BB@BA@BB@@B@B@BB@B@@BB@@BB@@BBB@B@BB@B@B@B@@BB@@BB@@B@BB@B@B@B@BAB@B@B@B@B@@BB@@BB@@BB@B@@BAB@B@B@B@BBBB@BBB@B@B@B@@BB@B@B@B@B@B@B@@BB@B@@B@B@B@BB@BBB@B@@AB@B@BABAB@DAB@B@BABBB@B@@BBBBBB@B@@BB@B@B@B@B@B@@AB@B@BABABA@A@A@AB@@AB@B@B@B@B@BBB@B@@B@BBBB@B@B@B@B@@BB@@BB@B@BBB@B@B@B@B@BBB@BB@B@BABAB@B@B@B@BB@BBB@B@@B@BB@B@BBBBB@B@@B@BBB@BBBB@B@BB@B@B@B@BA@@B@BB@@B@BA@@BA@@BAB@DBBDBB@BBB@B@B@B@@B@BBBDBB@BDD@@BB@BBBBB@BDB@BDBBBBBBB@BBDBFBH@AB@B@B@B@B@B@B@B@B@BB@@BBBBB@BAB@BAB@B@B@B@BBB@BB@@BB@BBBB@BBB@BB@BB@B@BB@@B@BB@@B@BBB@BB@@BB@B@B@B@DAB@B@BBBB@BB@B@B@@BB@BAB@B@@B@BB@BB@BB@B@D@B@B@@B@BB@@B@B@BB@B@B@B@B@B@BAB@B@@ADAD@@ABAB@@AB@D@BAD@@ABAAAAAAA@A@A@ABA@A@AB@@AA@A@AAAAA@@A@AAA@AAA@AAAB@BAB@@A@A@A@AB@@ABABAB@@AB@B@BAAAAA@A@A@A@A@AA@A@@AA@@A@A@AA@@A@A@A@AA@A@@A@AB@@AB@BA@ABA@A@A@AA@A@@AA@@AAAA@@AA@A@@AB@@AAA@AA@@A@A@A@AA@A@AAA@AAAA@AA@@ABAA@@A@AA@@AA@@A@A@A@AA@AA@A@AA@A@ABA@A@A@A@@A@A@A@AAAA@@AB@B@@A@ABA@AB@@A@AAAAAAAB@@AAA@AB@BAB@D@B@B@BABADA@AB@@BB@B@B@B@BAB@@AB@@A@A@A@A@AB@B@@AB@@AB@@ADABA@A@A@AB@BABABCB@BCBA@A@AAA@A@A@A@AB@B@DAFAD@B@@AB@B@@AB@@ABA@ABA@AA@@AA@CAC@CAAA@A@A@A@A@AA@@AA@A@AAA@AAAAAA@AA@@A@A@AB@@A@A@A@AB@@ADABA@AB@@A@A@AB@@A@A@A@A@AAA@A@AB@BABAB@BAFA@AB@BA@AB@BAB@@ABA@A@AB@@A@A@A@AA@A@C@A@A@A@@AAA@AA@A@A@ABA@AAAAAAA@A@A@AAAAA@@AA@@AA@@A@A@ABABA@AB@@A@A@AB@@AB@@A@A@AB@B@B@B@BA@A@AB@@AB@B@BAB@@AB@BAAA@A@A@A@A@ABAB@BABA@AAA@A@A@AAABA@A@AA@BA@A@A@A@C@AB@@A@A@AAABA@A@A@AAABABA@AB@@AA@ACAA@AA@@A@AAABABA@AB@@A@AB@@AB@BAB@BA@ABABABAB@@A@AB@@ABAB@BAB@B@@AB@@AB@BAB@@AB@B@BAB@@AB@BAB@@AB@B@B@B@BAB@@ABABAB@@ABABABC@AB@BABABA@A@AA@@AB@@AAA@A@AA@A@AAA@A@A@A@@A@A@AA@@AA@@A@A@ABAAA@A@AA@A@@AA@AA@AAABA@A@A@AA@@AA@@AA@AAA@@AA@@AAAA@@AA@@AA@AAAAAAAA@AAAAA@A@A@ABA@ABA@AB@AA@A@A@A@A@ABAB@@A@A@A@A@ABA@A@A@AA@@A@AB@@A@A@ABCBAB@B@BABAB@B@BAB@B@@AB@@AAA@A@AAA@A@A@A@A@AB@B@@ABA@A@ABA@A@ABAB@B@B@@AB@B@BAB@B@@BB@B@B@B@B@B@@ABABAB@B@B@BBB@B@B@@A@AB@@AB@BBB@BBB@@B@BBDBB@AB@@AB@B@@A@ABA@AB@B@B@B@B@B@B@BBB@BDBBB@B@BBBBB@BBB@B@@BB@@BB@@BB@B@B@B@B@@BB@B@@AB@B@B@@AB@B@B@B@B@B@B@@AB@BBB@B@B@BA@C@ABAB@BAB@@CBA@AB@@AB@@AB@BA@AB@B@BAB@@A@AA@AC@AB@DBBAB@@BD@B@@AB@B@B@B@B@B@B@B@@AB@DA@A@AB@@BB@B@@AD@@BB@BABABBB@DAB@B@BAD@@AB@DAB@B@@A@AB@@ABAB@@AB@B@B@B@BB@BB@@AB@BA@B@B@BFDB@B@@BB@@BB@B@@AB@B@BAB@B@@ABA@AB@BBB@B@B@B@BA@ABABAAAB@@AB@B@B@B@B@B@@AB@B@@A@A@AB@BB@ADA@AB@@ABBBA@ABBB@@DB@B@BB@BB@BD@B@BB@B@DBD@B@@AB@B@@AB@@BBAB@B@B@@BD@B@DBB@B@B@@B@BB@D@BAB@@ABB@BB@BAB@@AAA@ABBBABBB@@BB@B@AA@A@A@ABAB@@A@ADAB@@A@AA@A@A@@AA@@AAC@AB@@A@AA@AA@A@A@A@AAA@AAAA@@A@A@AAC@AAAAA@ABABA@A@AB@B@B@@AB@BAB@B@B@B@BBB@B@B@BBB@B@B@BAB@B@BBBBB@@BB@@ABABA@AB@B@@AB@B@@AB@BAB@B@B@B@B@BBB@@BDBB@B@@A@ABA@AB@@AB@@A@A@A@CBC@ABC@A@AAA@AB@DBB@B@B@B@B@B@@B@BB@@BD@B@B@B@B@B@BBB@BAB@B@BAD@D@B@B@B@@AB@B@@AACAC@ABAB@B@B@B@B@DBB@D@B@D@F@D@B@D@D@FAB@BABABCBABA@A@A@A@ABA@ABABA@A@AB@@BB@B@D@B@BADAB@B@BAB@B@D@D@B@D@D@B@@A@C@A@AB@@A@ABAB@B@BAB@B@B@BAAA@AB@DAB@@AB@BABA@A@ABA@A@A@ABBBDB@BBB@DBDBD@D@BBB@B@B@B@@A@AA@@A@A@AB@@A@AB@@AB@BA@AB@AA@A@AB@@ABA@AB@@ABABAB@BABAB@BAB@BAB@B@D@B@B@DAB@BAB@D@B@B@B@BA@ABC@A@A@A@A@A@A@AA@BADCBA@AB@@A@ABA@A@ABA@A@A@ABABABADCBA@CBA@A@A@AB@@AB@@ABA@A@ABA@A@A@A@A@AAA@AB@DAB@BAD@BADA@AB@BABABA@AB@@ABA@AB@@ABABABAB@@AB@D@D@BAZABAF@D@FAB@F@D@D@B@DBB@DBD@BAD@BA@BB@@BBB@BBB@B@BB@@B@BBB@BB@@BB@@BB@@BB@@BB@@BBBBBBB@BBB@BB@@BB@B@B@BBB@@BB@@B@B@B@BB@@BB@@BB@BBB@@BB@BBB@@BB@@BB@@BB@@B@BB@@BB@BBB@B@@B@BB@@BB@D@BBB@B@B@B@B@@AB@@AB@@B@B@BBB@B@BBBBB@BBBB@BBB@B@B@B@B@B@BBB@B@BBB@@BB@BBB@B@B@BBD@DBB@DBB@BBBBBBB@BBBBB@BBB@BBDBBBB@@DABB@@BBBB@DBD@DAB@D@DBB@D@BAB@DBB@D@D@B@B@B@PKB@BAD@@ADCFCFEBCHCNEBAD@DAD@BADAB@BEDEDC@ABCFCDCLKFCFCBAD@@ADALEFADAB@B@D@B@B@B@FAHCB@@A@ABA@ADABA@CAC@A@ABCBADAJEBAB@B@BAB@@AB@B@B@B@B@@B@BBBB@BBB@B@DAB@BAB@B@@BBBB@B@B@B@@BB@BBBBB@BBBBDB@BBBB@BBBBB@BB@BB@@BBBBBB@BBB@D@B@DADAB@BAB@BABABA@AB@@BB@BBB@@BB@B@B@B@B@B@BB@B@BBBBB@DBB@BAB@B@B@BB@B@B@B@BBB@B@F@B@B@BBB@DBB@B@D@B@D@B@B@B@BBB@@BBBB@@BBBB@@BBBBB@BAB@BA@AD@BBB@B@B@B@BB@B@B@D@DBB@B@BBB@B@@AB@B@B@BAB@B@B@B@B@@ABABA@AB@BAB@B@DABAB@B@B@BAD@B@D@BBD@D@B@BAD@B@B@B@B@B@BBD@D@B@B@@BB@@B@BB@@BA@@BA@A@CBA@A@@BBBB@@BB@B@H@B@NBD@@B@B@F@FEFA@EFCB@B@BBB@BB@@BBBB@BBDB@BBAB@D@B@B@BAB@@AB@B@BBB@B@@AB@B@BABABC@A@C@AAA@AAAAAAA@AAAAAAABABCA@@AAAAA@A@C@ABA@A@AAA@AAAAAAABA@ABAB@@ABAA@@AAAA@@AA@@AA@A@A@A@AAA@A@A@@AAA@AAA@AAA@A@AAA@AA@A@AA@ABA@AA@@ABABABABA@AAA@A@C@A@A@A@AB@@ABABAA@@A@ABAB@@AB@BAB@@AB@B@B@BAB@B@BAB@BA@A@A@A@A@AAAA@@C@A@A@A@ADA@AB@@AB@@A@A@AB@@A@AC@A@@A@AA@@A@A@AA@A@@AA@A@AAA@C@A@A@A@@A@AAA@A@A@ABAA@AAAAA@A@A@A@ABA@ABA@AAA@ABA@CAAAA@AAA@AAA@@A@A@A@AAAAAAA@A@AA@AA@A@A@ABA@A@AAAA@@A@AA@@AA@@A@A@A@CB@AA@A@A@A@A@A@AA@@A@AAAAAA@@A@C@AAAA@@AAABA@A@AAAAA@A@A@ABABA@A@A@A@AA@@A@AB@B@B@BABA@A@A@AAAAAC@AAAA@ABABA@A@A@AB@@A@A@A@A@A@ABA@A@A@A@AA@AA@A@AA@@AA@AAA@A@AAA@AAA@AAAA@ABC@AAAA@AA@A@A@AB@@A@A@A@A@A@A@A@ABA@AA@@C@CA@AAA@A@A@A@@AA@AAA@A@A@@AA@AA@AA@AACAA@A@A@@AAAAAA@@A@A@A@A@A@A@AABA@A@ABA@AAA@AAACA@AAA@C@C@A@@AA@BAAAA@A@C@AAAAAAAAAAA@@ABAAA@AA@@A@A@AA@@AAA@AB@@AB@@A@A@AB@@A@AAAAA@AA@@AAC@AAA@CA@BA@A@A@C@ABA@A@AB@@ABAB@@AB@D@B@B@B@B@@ABA@AB@BAB@@ABA@AB@BABA@AA@@A@ABA@AB@@A@AB@@A@AA@@ACAAAAAAA@A@A@A@AAAAAAAA@@AA@AA@ABABA@A@AB@@A@A@ABABA@ABA@AB@@A@A@A@AB@BA@A@AA@BA@AA@@AA@A@A@@AA@@AAAA@@A@AAC@ACA@AAC@AB@@AAAAACAAAAA@AA@@AAAAAA@@AA@AAAA@A@AA@@AC@A@C@A@A@A@AAAAAAA@AAA@A@C@AAA@AAA@@AA@@AAA@A@A@AAA@AAAA@AAA@@AACAC@A@A@ABAB@B@BAB@@A@AAA@ABA@A@A@A@AB@@A@AA@@AB@@ABA@A@AA@BA@AAA@A@A@A@AA@ABC@@BABABA@ABA@ABA@C@A@A@AAA@CBA@AAA@A@A@@AABAAA@A@AAA@AAA@@AA@ABA@@AA@A@ABA@AB@AA@A@A@A@CAA@A@A@AAAAA@@A@A@A@A@A@A@A@AB@@AB@@ABA@AB@@A@A@A@ABAC@A@@AA@A@AA@AAAAA@A@AA@A@A@AAAA@A@AA@A@@AA@@A@AAA@A@A@A@A@A@AAAAA@AAAA@AA@AAA@CAA@AB@B@B@B@B@BAB@@AA@@AA@@A@AB@@AB@B@B@B@@BB@BABA@A@A@A@A@AB@BAB@BAA@@ABAB@@AAAA@@A@ABA@AA@@A@A@AA@@AA@A@@AA@@AA@@ABA@C@AA@@AB@B@B@B@BA@AAABAB@@A@AB@@A@A@AA@@AA@@AA@A@@AA@@AB@BAB@BAAAB@@AB@B@BAB@B@D@BAB@@ABABAB@BBB@B@B@B@B@@AB@B@@BB@BBB@B@B@D@B@BBB@BAB@B@BA@AA@CA@AA@@A@AAA@AAAAAAAA@@AB@@A@AAA@A@AB@@A@AA@@A@AA@@AB@B@B@B@B@@A@AAAAA@AAA@ABA@ABAAAABC@C@A@@AA@AAAAA@A@A@A@@AA@@AA@A@AA@A@A@AA@@AA@AA@AAA@AA@@AA@A@A@AAA@@AA@@A@A@AAA@AA@A@A@ABCBA@A@E@ABA@A@C@C@A@A@A@AAA@@AA@A@A@A@ABA@@BA@ABA@AB@BA@AB@BC@A@ABA@A@A@ABCBA@AAA@CAA@@A@AAC@AA@AAA@A@A@ABA@@BC@ABC@A@ABAB@BAB@BA@AAAAA@AAAAA@@BABABA@ABABAB@BA@A@A@AAA@@A@AA@AA@AA@@AA@AAAA@AA@A@@AA@A@@AA@AAA@AA@AA@AA@ABABA@AB@BAB@@ABA@AB@BA@AA@@A@ABAA@BA@ABAAA@A@CD@@AB@B@@A@A@AB@BA@AB@BAB@DABABA@A@A@AAAB@@A@A@CB@@ABAB@@AB@B@@ABA@AB@@A@A@A@AB@@A@A@AA@AA@AA@A@A@A@A@AAC@A@A@A@A@AB@AA@A@AAA@A@ABA@CBABA@A@A@@BA@AAC@@AA@A@EAA@A@@AA@@AA@@AA@A@A@ABA@A@ABA@A@AAA@A@@AA@AAA@A@CAA@A@A@A@A@A@ABA@@BAB@BABABABA@ABA@A@@BA@@BA@AAA@C@A@A@A@ABA@ABA@@BABA@@BA@A@ABAB@B@BA@ABA@@BA@@BAAA@AAA@A@AAA@A@A@@BA@C@A@A@A@A@A@A@A@A@AA@A@AA@A@AACA@AA@A@AAA@ABA@A@A@ABABA@AA@AAAAAAA@A@A@A@CAA@AA@@AA@A@CAA@A@@AAA@AA@@AA@AAA@A@A@A@C@A@A@A@ABABA@A@ABA@ABA@@BA@A@@BA@@BAB@B@BAB@BA@A@A@AAA@A@AAA@A@A@A@CAA@A@A@A@@BAB@BAB@B@B@B@BA@ABA@A@@B@BA@@BA@ABA@ABA@@B@BA@@BA@@B@BA@@BA@A@A@AAA@A@A@ABABA@A@A@A@C@A@A@C@A@AAA@C@A@CAA@@BA@A@ABAAA@A@@AA@A@A@AAA@A@C@A@A@A@@AA@@AA@@AA@@AAAA@AAAAA@A@A@A@@AA@@AA@AACA@AAA@ADABAB@B@@A@A@AA@AAA@@AA@@A@A@AAA@AC@@A@AA@@A@C@A@AB@BA@AAA@AB@@A@AA@A@AA@AA@AAA@CBA@A@C@CCA@ABC@ABA@ABA@A@ABA@A@AB@BA@AB@BA@@BA@AAC@AAA@A@A@C@A@A@AAA@A@A@@AAAAAAA@AACAA@AA@A@@AA@A@AAA@AAA@A@C@C@A@A@ABA@@B@DAB@B@BB@@B@BA@@BABABA@ABABA@ABA@A@C@A@A@A@A@A@A@A@A@A@ABA@@BA@A@A@@BA@ABC@A@A@A@CAA@A@C@C@A@CAA@A@AAC@ABA@A@A@@AAAAAA@A@A@@AA@@AABA@@AC@AAAAA@A@AAAAAAA@@A@AAAAAA@AAABA@A@A@A@C@A@CBA@CAA@AAAAAAA@A@A@A@@A@AAAA@C@A@A@@AAAC@A@AAA@EEEAACC@CAA@C@E@A@AAA@A@A@@AAAA@@ABAA@@AABA@A@ABA@A@AB@BA@ABA@A@A@A@@AA@CBA@@AA@A@@AABA@@AA@A@A@A@A@@AAA@AA@@A@AA@AAA@A@ACA@ABAAA@@A@AAAAA@AAAAAAA@A@AA@AAA@AAA@AAA@@AA@@A@AAAA@@AA@@AA@AAA@AAA@A@A@@AC@A@A@A@A@A@A@A@AAA@ABA@A@AAA@A@A@@AA@AAA@A@A@AAA@AAA@AAA@A@@AA@A@@A@A@AA@A@@AA@A@@AA@ABA@E@AACBA@A@AAA@A@A@A@@AA@A@A@@AAAA@C@A@ABA@A@@AA@@BA@@AAA@A@A@A@A@AA@@A@A@A@AA@AAA@A@A@A@@AA@A@A@@AA@@AA@AAA@A@A@A@A@AAEAA@@AA@A@AAAAC@A@AAA@@AAAAA@AA@AAA@A@A@@A@AAA@A@A@A@A@A@A@AB@@AB@@A@A@AB@@AAA@AA@ABA@@AA@A@ABA@A@A@A@A@CBA@A@A@A@A@A@A@A@AAA@AAA@CA@AA@@AB@B@B@B@B@B@B@BAB@@AB@@AB@@A@AB@@ABAB@@A@A@A@A@AB@@AB@B@@AB@BA@AB@@AB@@AB@@AB@B@BA@ABB@ABBB@B@@BB@B@B@B@BBB@BBB@B@@AB@B@@AB@@ABA@AB@DAB@B@B@BAB@B@B@B@B@BBBA@A@AB@@ABABA@A@A@A@AB@B@@AB@BA@AB@@A@AB@@ABAB@B@DBB@B@BBB@BBB@@BB@@BB@BAB@B@B@B@B@B@B@B@B@B@B@BAB@B@B@B@BBBBB@B@BBB@BBB@B@B@B@B@BBBD@BB@@AB@B@B@B@B@B@B@B@BBBBB@BBBBB@B@B@DBBBB@B@B@@AB@BAB@B@B@B@BAB@B@BAB@B@B@BA@AB@@ABAB@BABAB@B@D@@AB@BAB@B@B@D@B@B@@AB@BAB@B@B@@AB@BAB@BA@AB@BA@ABABA@AB@@AB@BAB@B@BAB@B@BAD@B@BAB@@AB@BA@AB@BAB@@A@A@AB@BABA@A@ABA@ABA@A@AB@BA@A@AB@@AB@@A@A@A@A@ABA@A@A@ABABA@A@AA@@A@ABAB@BABAB@@AB@B@B@@AB@@AB@@A@A@AB@@AB@B@@BB@D@BAB@B@B@@AB@@A@AA@@A@AB@@A@AA@@A@AB@BAB@@A@A@AAA@A@AAA@A@AB@BCBA@A@ABAB@@AB@@AB@BAB@BA@AB@@A@A@AB@AAAA@AB@@AA@@AAA@A@AB@@A@AAAA@A@A@AAA@@A@AB@@A@A@ACC@AA@@A@AAA@A@AAA@AAAA@A@A@A@@AA@AAAA@AAACA@AA@@AA@BA@A@AAA@A@A@A@A@A@A@AABA@ABA@ABABA@ABC@@BA@@BAAA@A@A@A@ABA@A@A@A@CAA@A@A@CBA@A@AAA@A@@ACAA@A@AAA@A@A@@A@AA@BA@AB@@ABA@A@A@A@AB@@AB@@A@ABA@AB@@A@AA@AAA@@AA@@AAA@C@AAAA@A@@A@AAAAA@C@A@C@AB@BABAB@@AA@@CAA@A@AAA@AAA@A@AAA@AAABABAB@BABABAB@@AB@BABAB@B@@AB@@AB@BAB@BAB@BAB@BADABAB@B@DABADADABAB@BA@A@ABC@C@A@CBE@A@A@AB@@AA@AA@AA@AAA@@A@A@AB@AABA@AA@BABAAA@AB@@A@A@AB@AA@A@A@AB@@A@AB@B@BABABAB@BABAB@B@B@B@B@BAB@B@@A@AB@B@@A@A@AB@B@B@B@B@B@B@BAB@BAB@B@@AB@B@B@@AB@@AB@@ABAB@BAB@@AB@B@B@@AHCKG@BWLcJ{DIFCN@JBHJVFPDDFJ@FCDUHYHGFAJ@P@RCNML[^GN@FAXCLGLGLAJ@JJJHRAPIPSJQBOBKAOCMMKOKMGOAE@KJMPMHIDIEEGEGCMGUEO@MFITABKV@NFHVRPNDL]NWFCASEUMMEE@KNKXGTCDIFODYJWNSPIJGLCHAHKRMTQPEBMBWDMDIDEH@HAD@LQPEJBLFHJNBNAJGNCHAFPBHHBFBFIHMHAFDNBP@JNNBLBFBJBN@XHHHHDBDBBBB@BB@B@B@HBD@DFNBD@B@BABABEDEFEFCBCBGBA@C@E@C@EAgEQ@U@MFYJWDOBQE_MSBWLOHQJKJDJVFZBBHABORAJDHPJTNLJ@JmTKFMBcQOIUGKCMASA_AO@IBKBEH@BIJA@EDC@G@GAEAIACAE@GAUDEBEBADCHAHCRAH@L@FCBEBE@E@GAQCAEAECECEEACAE@C@C@ADCDAF@NATCF@DABABA@CAACAECCACAE@EBG@QFGBGBG@E@E@A@AAA@A@AACCECAAAA@AAAAG@C@AA@@A@EBC@A@ABABGLQNQDCBA@C@ACCC@M@A@ABA@CBCBA@CBAAC@AACAACCaCQESAGCICO@GCIKGM@ECCAEQBI@IAKCICGCG@IFMBK@AISMKMKOSAAAU@AAIGMQSEIAEAE@EBC@ABGBCDCLIDCFE^WDCBA@CEAQCGCEECCDGBE@IBA@CDABAFAD@DADA@A@A@A@AAAAAC@A@CBE@EBABADADAFCDADE@A@GAICEA@ACAAC@C@CBCDCDAB@BADBD@B@B@BAB@DEDC@AA@AAGAECGGAA@C@ABCBA@A@ABAD@B@D@FBB@J@D@B@D@BAB@DAB@B@BAAA@A@AAE@ABAA@CAE@G@C@E@CAG@CAACCEA@@A@ABABA@AAA@AAA@CACA@C@AAGAIAECCCCMBUHGJY@IKMAG@ED[AECECEAC@A@A@ABABCFGBIJQAK@C@AAAKKIQACGGUYUOKCWDgDUAKCICOJYjMPK@EAOI[EMCBGJAdEDGOQGKBMCGECY@KGSMIOBEZI@EUEWCAEHSGEODONO\\CFMNMFKDKRILMHYDSJILMNILKBMEMGMBQJQLODA@IACGDIBEAICEEAEAICO@KBCH@HPRBLGJOFM@G@QGGMFIZYFOCGMBACLICAIAMDILCVEFA@AAAGACAAA@EBM@GABOLG@ACACAMBAA@ADCRMHEFCBC@CCCEAeFOOIBOHMDA@AC@EACACGEICKFMDI@GCAOKMCCAGFGLITIVMBGCGEIOCQASBYFOAIGDK\\C^DNAAKKEYMQAICAEAEDCVCH@LBDA@EGGAEAGGEKCM@aBKAEEAK@O@G@EBCFAH@LFHDJ@HCBGKKEE@EFKRCT@@KKG_CE@C@CACI@CAACCKEIEKAEAE@CCAE@EBC@CFG@A@AAAAAIAWBUBIEAG@GBCIIGECCCE@A@ACAC@E@CBCDABC@GACAGACACBCBCD@BADAHAD@BCDCDEBC@E@AAAAEC@CBCDCBCDEBC@AAAC@EBGAC@GBC@AAAAAGAAEBCBC@A@ACECCC@ABE@CAAGAGAAAAABAB@FAJBF@D@BAACIAEAAA@EBABA@AGCC@AAEECAGBKBEACCCCAC@CACA@A@A@ABIBC@G@GBA@@AGACAI@A@CDIFA@CAAACCECKGCG@G@KAM@APM@EAICQEWEIIAGCOIKG_CIBQDEDADEJEDQCO@QDUJ]CSFMJOFSBUDSCCKIAKBMDSVKFY@MMMOm_WGUCQBOBGFANEJSHMBOCQGOAMBECEGBOGQcOWEQDULOCECGBWDGAGAOAA@M@EBQN_NKLCAAB@BC@A@A@@A@A@AA@A@"],"encodeOffsets":[[131541,43028]]}}],"UTF8Encoding":true});}));