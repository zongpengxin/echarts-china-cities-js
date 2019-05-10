(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('新余', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"新余"},"geometry":{"type":"MultiPolygon","coordinates":[["@@AABA@AA@@BA@@B@BB@@BA@AAAAAAA@A@@BABA@A@ABABA@@AAAAA@BA@AAAABAA@AAAACAA@A@A@A@AAA@@AA@A@A@A@@B@BB@B@@B@BB@B@@BA@A@A@@BA@A@A@A@C@ABA@@BBB@BB@@B@BA@@AAA@AA@A@A@A@@AA@A@A@A@A@A@A@AA@AA@A@A@C@ABD@BBB@@B@B@BABA@@BA@@CA@AAA@ABA@@DBB@BBBB@@DABA@BB@BAB@BA@@BB@BBA@A@@BA@ABA@@BA@A@A@A@@BABA@@B@BB@AB@BC@A@A@A@ABA@@BA@AA@AAA@BA@A@@BA@A@A@A@@BA@BBB@B@@BA@AB@DA@@BA@@B@B@BA@A@@BAAAB@BA@A@A@A@A@A@A@BAA@A@A@@AB@DA@AA@A@@AAA@A@AAA@AA@A@@AA@@B@BCCB@@A@AAA@AA@@CA@A@AA@BA@A@A@@AAABAAAA@@AA@A@@AAC@B@BA@@AA@A@@ABABAAA@BA@@BABAB@BCBA@A@C@@BAABAA@A@AACAA@@ABA@AA@AAAA@AB@@A@A@AA@AA@ACA@AA@AA@AA@@BAB@DAAA@@B@BA@@B@B@BABBB@DA@A@A@A@A@A@AB@A@A@AA@A@C@@AA@A@A@A@A@@AA@AAABA@A@A@A@A@AAA@A@A@@AA@A@AAA@A@A@A@CAA@ABA@A@@D@BABAAB@AAAEA@A@A@A@A@AA@A@AC@ABA@A@A@@AA@AAAAA@A@AAA@@AAA@AA@@A@A@A@A@A@A@AA@@A@ABCAAA@AA@AB@BAAA@AAAA@ABA@@A@A@AA@A@ACA@AA@AA@@A@AA@AA@A@AAA@AAA@A@ACG@AA@@A@A@AC@@AB@BAAA@AC@AAA@@AA@@A@AA@A@@AA@A@@AAAA@@AA@A@A@A@A@AAA@AB@AA@@BA@AD@BA@A@ABABA@@BA@@B@BA@@BABA@A@@BABB@@B@BB@BB@B@B@BA@BBA@@BA@ABAAC@A@@AA@ABABA@AAA@A@@BA@@A@AA@A@@AA@A@A@A@A@@BABA@@BA@@DA@@BA@@BA@@B@B@BBBBB@BABA@A@@BA@@BC@@AA@@AA@A@@BA@AA@ACBA@@BA@A@@BA@AAA@A@A@A@AA@BABAAA@AAABA@A@AAA@A@A@A@A@A@A@AAA@A@AA@BA@A@A@A@@BAA@AA@@AB@AAA@A@A@A@DBABA@A@@BAB@AA@@AAAA@@BABABABA@ADA@@BA@@BB@B@@BB@@B@BA@@B@B@B@D@B@BB@@BA@@B@BABBB@B@BABAB@BA@@B@BABA@@BBB@BBBABABB@@BBB@BAB@BB@@BBB@B@BD@@BB@BBB@@BB@@BB@B@B@@B@BA@BBA@A@A@@BA@A@@BA@BB@B@B@BAB@BE@@B@BA@AB@BCBABBB@D@B@BB@@BBB@B@BBB@BBB@B@BB@@BBBA@BBB@BB@BBBBBB@B@BB@BB@@B@B@B@BA@BB@B@B@BADA@@B@BAB@B@BB@@BB@B@@BBBB@BAB@B@@B@BA@ABB@B@B@B@B@ADCD@B@BA@BBBBB@@BBB@B@BBBB@BBB@@BB@B@@BBBAB@B@B@B@BB@@BB@@BA@@B@BBBB@BBBBB@@B@BB@DBB@B@D@B@@BBAB@B@B@@BA@@BBB@BBA@ABA@BB@@BBA@B@BABA@@BB@BBB@@B@BBBB@@BAB@B@BB@BBA@A@@BA@BBA@@BABBB@BB@B@@AB@BBG|JZ@BA@ABABABA@@B@BA@A@@A@AA@@BABBDBB@B@BA@@AA@@BBBB@B@B@UVA@ABA@A@A@@BDD@FBBD@@B@BB@B@B@B@@DDBB@B@B@@BBBB@BBBBB@D@@BA@@BB@@BB@ADBBA@BBBB@BB@@BABA@A@@B@B@BB@@FC@AB@B@B@D@B@B@B@B@BB@@BA@@BABA@@AAB@B@B@BAB@BAB@B@B@BA@@AA@@B@B@DA@CA@BA@BBAB@BA@AAA@A@@AA@AAA@A@A@AAAAAA@AA@AAA@ABA@AAAA@A@AA@@AA@@AA@A@AAB@@AB@@AA@@ABAB@B@BABA@AA@@AAAEEAAA@CAABA@EFABADABA@A@@BA@@AABAAA@A@@AA@A@@BAB@BA@@B@BA@CAC@CAA@A@A@A@A@ABABBBAB@BA@A@A@A@AA@BA@A@ABA@ABBBBB@DB@AB@BA@@BA@@BBBABBBA@AA@B@BAD@B@BABA@A@ABABC@@BB@B@@B@BB@AB@B@BAB@BAB@B@BAB@BA@A@BBA@A@@BB@@BB@@B@BA@A@AA@BADAB@B@B@BB@@B@B@B@B@B@BA@@B@B@B@B@BA@A@BB@BAB@BA@A@BB@BB@BABBABBBA@@BA@@BA@@AA@A@@BBBB@B@B@@BB@@BBB@BB@B@@D@B@BAB@BB@B@@BBA@B@BBB@BABA@A@BBB@@B@BB@@BA@@BA@ABBB@ABBB@@BB@@AB@@BBB@ABABBB@BAB@@BB@BB@BBA@BB@ABB@BB@ABBB@@BBA@AB@B@BA@AB@B@BBB@@D@BB@B@B@B@B@B@@BB@@A@AAA@AAB@ABCB@B@@BB@@D@BBBBDADA@AAABA@A@@B@BA@@BAB@BB@B@B@@BA@@BA@ABA@@BA@ABAFA@@BB@ADA@@B@B@B@BB@@ABBBB@AB@@BBB@BB@B@@B@BB@B@@B@BB@@BB@BADAB@BBB@B@@BB@BAB@B@@B@BB@B@B@B@@AB@BBBAB@@BB@ABB@@BB@B@BABA@AD@@AB@@ADBDBA@@BBBBBBABBD@@CB@B@B@B@BAB@@AB@BCF@D@@B@BB@ABBB@BB@B@@AB@@ABAAAD@@B@BBB@BB@BDBB@BB@B@B@@BBBB@B@BBBB@BA@@BB@B@B@@BB@@BB@@BABBB@BB@@BB@B@B@BAB@B@@AB@@BB@@DAB@B@B@BBB@BB@@BBBD@@ABAB@@BB@B@@BBBBAB@@BAB@B@BB@@BA@CBA@AAAAAAC@A@C@ABBBA@AB@BB@ADD@B@BB@B@BADC@CB@BB@@BBB@BABABA@@B@D@BABADCF@BCB@B@BCB@B@DA@@BABA@A@A@A@A@@BA@AA@BCA@BB@@BB@@BB@B@B@@A@AB@B@D@B@@BAB@B@BAB@B@BB@@B@BB@BBB@@B@BABA@@BABABAB@BBDC@C@@BB@BBA@ABA@C@@B@BCA@B@BABA@A@A@ABA@A@AB@BAB@B@BBB@BBBB@BBBBBBBBBB@BBBB@BBB@BBB@BB@BB@BBDB@BBABBDABABAB@@BB@@B@DAB@BC@AA@BABAB@DBADBDB@BB@B@BBB@@A@ABA@ABBB@B@B@B@BADBB@@B@BB@@ABAB@@BB@BAB@BA@ABADBBBB@@BB@B@@BB@BBB@B@BBDBBAB@B@BBBBB@B@BBDB@BBB@BB@@BB@BDBBB@B@@AB@BBBB@AB@DBDBD@DABBB@BBB@B@@AD@D@@BABA@BB@BBBBAB@BDB@B@B@BBB@B@BAB@DAF@B@D@BAB@FBD@BBB@B@B@B@B@@ABBB@@AB@BAD@BAA@@A@ABABA@ABB@BB@@B@BB@B@D@DBBA@AB@BBB@@BB@@BB@B@B@@B@D@BBBB@B@@AB@@AB@B@FADAB@BBB@BBB@B@B@H@@B@BA@@BA@BB@BB@B@BBBAB@BAB@H@B@DAB@DABABAB@DC@BB@@BB@@B@BB@BBB@B@BBB@B@BA@AB@@AB@B@BBB@@BD@BBB@B@BB@BB@B@BA@ABA@AAA@ABA@ACA@AA@BA@AA@@A@A@AAA@A@A@A@ABABAB@@AB@B@B@@A@A@ABA@A@AAAAAA@@A@AB@@AA@@A@A@ABA@A@A@A@ACAA@@A@AA@BAAAC@@AA@A@A@A@A@@AAABA@A@A@ABA@A@CABA@@AAA@A@AB@@ABAB@@AA@AB@ABA@ABA@AB@B@@B@B@BA@@B@BB@@BB@B@B@B@BAB@B@B@BB@A@EA@BC@A@ABADA@ABABAB@@A@A@ADAB@B@DBD@D@B@B@D@D@@BJH@B@BA@@BBBD@BBBAB@@BDDB@@BFBB@DDB@B@@AB@BAF@B@B@B@D@DBDADBBAB@D@BAB@DBB@B@BBDBB@FABABABAD@B@B@D@D@DBBA@CAC@ABABAA@BAB@@A@ABAB@D@BAB@B@@A@AA@@ABABABA@B@BBAB@B@B@B@B@B@BABBB@@BB@B@BAB@BBDB@BB@@B@B@BB@@DDBLMB@E^HF@BABB@@BD@@BBD@B@BBB@BB@B@@BB@@B@BB@B@BBB@B@BBBB@AB@BAB@B@@BB@B@B@B@B@BBBBFBB@B@B@BBBBB@@BB@BBBBB@@BB@@B@B@B@B@D@B@BD@BBBD@BB@@BB@B@@BBBFHPD@BB@B@BAFABBB@@AAA@ADABAB@DCBB@B@BB@B@BAB@@BB@@AB@@AA@BCA@A@@AA@AAAAAABADAF@BBB@@A@ABAB@BABAB@@AA@BAB@B@BBBBBBBBB@D@B@D@D@BB@BAB@BBBB@@BD@BAB@B@@BB@B@BBBB@CB@B@B@B@@AB@BAD@@ADCB@@AFAB@B@@AB@@B@BB@@A@ABB@BBAB@B@B@@ABBBBBB@ABA@DB@BBB@@DB@@ABABABA@AB@@A@A@AB@@A@AB@BAB@B@DBDBB@B@D@BBB@B@B@@AAAB@BCDDBBB@ABBBB@@B@BB@BBB@DB@BBBB@@AB@B@@ABBBA@BB@@BB@@BB@B@@BD@B@B@B@B@@B@BB@BABAB@@B@B@BA@@BA@BBA@ABB@@BB@@AB@@AB@@BB@@AB@@AB@B@@AB@@AB@FADA@A@A@A@ABBB@B@B@B@B@B@@BA@@BD@BBB@B@BBD@BAB@@BBBB@@B@BB@@ABAB@@C@ABABAB@D@B@B@BAB@BB@BB@BAB@@BHADEBABA@AB@@A@A@A@AB@B@@AAABAB@@A@AEAAC@AAAA@@AB@BAB@B@B@B@BCA@BA@A@AB@@ABBBAA@CAAAA@A@A@@A@AA@@AAAAAA@@ABAAAA@@ABA@CAABAB@@A@A@AA@@A@A@AAA@A@AA@@AA@@AB@B@@C@ABB@A@AA@@AABA@@A@A@CB@@AA@@AAA@AB@CAAAA@AAAAA@AAA@@AG@AB@ABAA@@AAAA@@B@BA@A@A@A@A@BCAA@A@AB@@A@C@ABB@AB@@AB@@A@A@AA@A@A@A@BAA@AC@A@ACA@A@AB@B@B@@A@A@ABADAA@@ABAB@@BB@@BD@B@BA@A@ABA@A@A@AABAA@AAAAAA@A@BAA@AA@BA@AAABA@AAAA@AAAA@A@@AA@@AA@AAAAA@A@A@A@@AAA@EBAB@BAAAB@DBB@@C@CAA@AAAB@AA@C@A@ABAB@B@BA@A@ABAB@B@B@BAB@@AA@@AB@@A@AAAB@B@B@AA@ABA@AA@@A@A@AB@BA@AB@DA@CAA@A@AB@@A@ABA@CBBBA@AA@@A@AA@@A@A@A@AB@@ABAB@@CB@@BB@D@@BB@B@@A@AB@B@BC@AB@B@@BB@BB@AB@BAB@B@B@AABAAAA@@BABA@AA@AA@A@ABA@A@AAA@@EB@BABA@AA@@A@ADABBB@BC@BB@@BA@@BA@@BBBA@A@ABBB@BB@B@DBBABCD@BBF@B@B@BABABBBAB@BAB@B@B@@AA@@AB@DABAB@BABAA@@A@AB@BBB@@AB@B@B@B@@DD@D@B@@A@A@A@A@ABABBB@DBBBDBFDDBD@BAB@BAB@DC@A@ABAB@B@BAB@BADAB@B@DBB@BBDBBBBB@B@B@D@BAD@BBBBDB@BBB@B@B@B@FCDCDGFEBCBABABAB@BABAD@B@BBD@DDBBB@B@B@B@BABAB@@C@A@ABA@ABABAB@B@DBBBBBDBDBDDB@DBFDHDBBB@DBD@H@B@BAB@BABAFEDCDABAB@BAB@B@B@BBDBDB@B@BB@@BB@DBH@B@@AD@@ABA@ABA@C@C@AB@BAB@B@B@D@BBB@DFB@B@BBB@D@FAF@B@BABA@AB@B@BBB@BDBB@BBBBBB@B@D@BAB@DABAB@B@FABBDBBBDBBBBBD@BBB@DAB@DAH@BABAB@B@DAA@A@@AAAGAC@@AAAA@A@AAA@A@AAC@@AB@@AA@AA@A@A@CA@ABCBABA@@B@B@BA@AAAA@AA@C@EDA@A@A@A@A@@AA@A@@BCAA@A@C@AAAA@A@C@A@A@AB@D@@ABA@A@AAA@AAA@A@C@AC@@AACAAACA@A@@AA@AA@AAA@A@AAA@A@AAA@AA@@B@BA@@AA@@AA@@AAAA@@B@BA@A@@A@A@A@AA@@AACA@A@@AAAA@A@@AA@@A@AA@A@A@@AA@A@C@@AA@AA@AABAAAAAC@AB@@AA@AA@A@A@ABA@A@AA@A@@AA@@A@A@AA@AAAA@AAA@A@AAA@AA@A@AAA@BA@AA@AAA@A@A@A@@ACAA@AA@A@AAAA@@A@AA@AAA@A@A@@ACCA@CAA@A@A@@AAAAAA@A@CAC@@AC@AAAB@AA@A@CACAABABA@@AAAA@A@A@A@A@A@A@@AA@CAA@A@AA@BA@@AC@A@A@AAC@@BA@AAC@A@C@AAAAA@A@C@A@A@A@@AAAA@@AA@A@CACAC@A@A@A@A@AAA@A@A@@BAACAC@A@A@@AA@ABA@A@@BAAA@@AA@AACCAA@AB@@AA@@AAAA@@AA@@BC@AAAA@AA@A@AAA@@AA@@AA@A@ABAA@A@AAACB@AA@@AA@C@A@@BA@A@A@C@@AA@BCAAA@@A@AA@@AA@A@A@AAB@@AAAA@CA@ABAB@D@B@@A@C@AAAA@@A@AA@@AA@A@A@A@A@A@A@AAABCA@AA@@AA@@AABA@A@A@ABACA@CBA@A@@BDB@B@B@B@BB@@BAB@BABBBBBB@ABB@BB@B@B@BA@@BAAA@A@@BB@BB@DBB@B@B@BA@A@C@@B@BA@A@@DCB@BABA@A@@BAB@BA@@AAA@AA@AAA@C@@AAA@A@ABEAABAAA@AB@@A@AC@A@C@C@@AA@@AABA@A@BC@AB@@A@AAA@A@ABCB@@A@AA@@AA@ABABAAA@A@@A@AAA@AA@A@A@ABA@@AAAB@AA@AA@AACACA@AAA@AA@ABA@@BA@A@AA@BA@AAA@@BA@@BABBBA@@BA@CB@BBB@DB@@BAB@BB@@BAB@BCBABA@ABA@A@ABC@CBC@AB@BB@AB@BABA@AB@B@BA@A@A@A@AB@AA@@AAABAAA@A@ABAAA@AAAAAC@E@A@AAA@A@AAAAA@A@A@@AA@A@AC@AA@A@A@E@@AA@A@AAA@AAA@@A@A@A@A@ABAAAB@@AB@AAB@B@@A@AB@@A@A@AA@@AB@AA@AA@@A@AA@ABA@A@C@ABAA@AA@@ABA@A@AAAAAA@BA@A@AB@@A@A@ABABAAAAA@AAABAA@@ABA@A@A@AAA@AB@BAB@B@@AB@AABAA@AABABAACBAAA@A@A@AA@A@A@AAA@AA@AA@AA@AAB@AA@AB@BA@AAA@@B@B@BB@@B@B@BAAA@ABAAB@AA@ABA@BBB@A@A@AAAABABAB@B@BC@ABABA@ABA@@BAB@BAB@BA@ABABC@@B@BBD@B@BABA@A@BBA@A@A@@B@BA@C@C@AAA@A@C@A@AA@AA@AAA@@AAAACA@@AAAA@AA@AA@@AA@@A@ADABAB@B@DCBBB@BA@AAAB@@AA@@AA@ABA@@A@AB@B@@AA@A@AACAAAA@A@A@@AA@@A@AA@@AA@@BA@@AA@C@ABC@@AA@@AA@AAA@C@ACA@AB@BA@AAA@A@AB@A@A@A@AAABAA@A@@BABA@ABC@AAAAA@C@@AB@B@B@BABAA@A@AAAC@ABA@AA@@A@A@AAAA@A@AB@DA@ABA@A@@A@A@ABABA@AA@@ABAA@@AA@A@A@A@AAAAAAAAA@AAEAC@C@A@A@@BC@A@AAA@A@CAA@@BA@AB@A@AA@@A@A@AAA@AA@ABA@A@@A@AB@@AB@AA@ABBB@@AA@@AA@AB@ABABAEA@BA@@BA@ABA@@ACB@A@ADAB@DABA@A@AA@@A@ACA@AA@A@@AA@","@@@AB@B@@BA@A@"],["@@A@A@BBBA"],["@@A@A@A@A@ABA@ABA@A@@BB@BBAB@BBABA@AB@@BB@@ABB@A@A@AB@B@@BA@@BB@B@@A@A@A"],["@@@BB@AA"],["@@BB@AA@"],["@@BB@AA@"],["@@B@@AA@@B"],["@@@BB@@AA@"],["@@BBB@@AA@A@"],["@@BB@AA@"],["@@A@@BBA"],["@@A@ABABA@@DB@B@B@AAB@AADA@A"],["@@A@@BB@@A"],["@@A@BB@A"],["@@A@@BB@@A"],["@@@B@BBA@AA@"],["@@A@BB@A"],["@@@AA@BB"]],"encodeOffsets":[[[117635,28253],[117354,28664]],[[117582,28254]],[[117864,28761]],[[117865,28761]],[[117869,28761]],[[117870,28762]],[[117870,28761]],[[117871,28758]],[[117872,28757]],[[117729,28314]],[[117236,28546]],[[117237,28577]],[[117243,28591]],[[117322,28629]],[[117322,28630]],[[117361,28756]],[[117549,28282]],[[117546,28290]]]}}],"UTF8Encoding":true});}));