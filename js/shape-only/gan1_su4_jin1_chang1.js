(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('金昌', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"金昌"},"geometry":{"type":"MultiPolygon","coordinates":[["@@DBLLVXFDL@BBB@BD@BB@BDBBBBRNFDFBFDFBBBDD@DDDBBBBDBBBDDBBDBDFB@FBB@BBB@B@B@DAB@DAB@D@DDBBB@BBBBB@D@H@D@HCJCD@DANC^EFAFAJCFCDADBFDHBDBF@HALEHCLGJEHGBADAB@PJZRTPVRTPVPVNLLHDTRJHÌÚ°BFDDDDDBLHÆEDuXEFA@KJQJEBFBL@NARAK^CVABArCbAdCB@@EJcLCeB@öefGRCRCBHNxHALE\\I|U°ilOJCLCEGEGBA\\MBMNyJwHYA@UQ_UKwAO@CE[@GCUQ¡@ABAB@VOBAB@ECAABAFCB@B@DAFEDABCB@B@D@DBB@@CB@@AZSBCB@JGBBA@BBBADC@AB@@A@CBADCBAB@@ABEBMA@@C@GBE@E@CBA@AB@BAFADAJCDADAHCB@BA@AJKBCDIBEBEBC@CBABG@EBEBCB@FEDCBADABCDC\\m^I@A@OaYB@@AEE§²@f@R@j@XC\\CFG@C@C@K@E@ICMAEAIEMCKAKCKAC@A@GBGBEAIAC@CBAAG@G@CA]AC@A@QAQ@AHAF@DABAHK@A@A@A@A@CFGDC@AC@ECA@@ELBJBF@@BB@B@@C@CBABAB@@AAA@AB@BCDAB@HYBCAA@K@ACCACGA@AA@GA@AHMFKBABA@ABAAAACAACGAA@A@AA@GEBAA@A@AAA@A@IDEBMA@BABABECABCA@AE@ABCB@BE@IAA@@ABCD@AA@E@A@A@AACDE@CA@@AA@DAB@@A@ABAAA@CBC@C@CG@C@C@E@C@AAA@A@C@ABCAABA@AACBA@A@A@A@A@@BA@A@A@A@A@A@A@C@A@@BA@CBABA@CBCBCBA@ABA@A@A@CBADA@ABCBA@A@A@ABABA@@AA@G@GBE@C@A@@AA@ABA@A@A@A@A@AAA@A@ABC@C@A@IBC@A@ABC@IB@BC@A@ADCBAB@B@BA@C@A@CBA@C@ABAAA@@AA@AB@BA@A@@AAACBCAAAA@C@CAEAA@C@@AA@CCA@AA@A@A@AAAAAAAAAAAA@A@@AA@ECA@@BA@A@@AA@C@A@AAAAA@@AA@A@C@AA@AAA@AAAAACCAECCAAGEC@AACAAAEACACCEACAIAAAAAACAA@CGGCECEACACCAA@CAEAICA@E@SBI@A@CBCDA@@B@B@B@BBBCB@BAD@FDHA@EBA@@BCDADABEBGDIDIDKBIBC@G@A@CAIAG@CACAA@C@C@A@AAA@A@A@A@A@A@CA@AA@A@A@A@A@A@EB@AA@A@E@AA@G@EKAOBA@AAAAA@A@E@Q@A@@AAAEBI@K@@AA@A@AAAAC@AAEACAAAGAA@A@CACAAAA@C@G@ECA@IACAA@AAACA@@CAE@IAA@CAA@AEECEAACAAA@A@A@AAA@AAEAC@A@ABA@EAIACCCACA@AAA@A@AAA@A@AA@BA@A@@A@AA@C@ADA@AAA@@AA@AAAAA@@BA@ADAB@BCDA@AB@AA@@AA@AA@AAAABA@@BA@@AAADABAACCAECA@ABA@@B@DABABA@@BC@A@@B@B@BABA@A@A@CAA@@A@ACAAAAAAAAAAAA@A@A@C@A@E@CAA@AA@CCAAACA@AAACAA@CBA@ABA@A@A@A@AACA@AA@C@A@A@A@@AAAEBA@@BA@AAAAA@A@A@AA@AC@AAAA@AA@C@CAAACAAABABAACA@CAAAA@@AA@A@ABA@E@@BDBD@B@BBA@A@A@ADA@A@A@ABA@A@AAAAA@AAA@A@ABA@A@A@A@AAAAAAA@@A@A@AAAA@ABAAABC@A@A@ABABAAA@A@AAA@@BA@ABA@ABABCBAB@DABA@@B@BABA@ADABCBABCDA@@B@B@D@B@B@BBB@DA@@B@BBD@DA@@BA@@BA@@DC@ABA@@B@DA@A@@BAFAB@D@B@BB@@B@BABBDAB@BA@A@EBA@AB@DCBABA@C@A@ABAB@BA@CBA@C@GBABA@ABAAEBA@AACAA@@AA@@A@AA@@CAA@ACA@AB@@AA@@AA@A@GBA@A@A@AAA@@A@CA@A@ABA@AAA@@AA@A@ABEAE@ABABAAAAC@A@CB@BEDA@CBC@A@A@ABEBABA@C@CBC@A@CDABAB@B@DA@@BA@A@C@A@A@A@ABC@A@ABG@A@A@@B@BA@A@ABA@AAA@A@@DA@ABE@A@@AAAA@@AA@A@C@A@A@CAC@ABA@A@A@AA@AA@E@A@A@ABCBA@A@A@@AAA@AA@A@AAA@A@AAA@@AAAAAA@A@@AAAA@ACAA@A@AAAAABA@AA@AAAEA@AA@A@AA@E@A@@CAACAAACCGCCAA@A@C@C@C@AAA@CDA@AAA@A@A@@BCBA@@DA@@BA@E@CBABC@A@EBC@CBABB@@B@BA@A@C@ABC@ABA@C@EBA@ABABABAD@B@B@BA@CBABA@A@AAA@CBA@A@C@CAA@C@ABAB@BAB@F@BA@A@AACAC@A@AAAAG@CAAAA@E@A@A@CBI@AB@AA@A@CAA@AA@AAAAACAAAAAACAAGI@A@ABA@AA@AA@C@A@ACDABABABCBABA@E@CBA@CDABA@@BAB@BCBABABCBA@CBABA@C@CBC@ABEDCCAACACAC@A@AA@AA@@ABA@C@A@A@AAA@ACCA@@A@A@ACCCAA@AAACAAA@AAABA@@BA@@BABA@C@C@ABA@C@AAA@AAEAAAACAAA@C@C@A@A@E@A@EAA@EAE@A@A@A@AAA@KBCBA@A@G@A@ABABABC@EBA@C@A@CBA@CBA@@AA@A@A@A@C@AAA@A@ABAB@BI@@BA@CBA@CACAAACAA@EAA@C@@BAB@BA@CB@B@BA@A@A@C@A@ADI@ADADIFABCBCBA@@BADCD@BA@A@A@AAA@AAA@ABA@ABC@A@A@A@ABCBA@ABA@@B@B@BADCBADADEFEDAB@L@H@BC@G@EDA@A@A@A@@AA@A@A@A@@BA@A@ABA@ABA@A@A@A@CBA@AAEBEDCBCDA@CBAB@B@B@BB@@BB@@BA@@BABA@BB@DBBAB@B@BDD@BBB@BDB@BADA@@BB@BDB@@B@BA@@B@BBBB@BB@BBB@BB@DBB@@BB@DBBB@BBBB@F@B@@BB@ABDBDDHHBBFDFFJFLLJFBFFDHFBFFNBDHPHHJJBF@DABQLMDCBKTIDSNA@OFMFQHGDED@B@JDDABA@A@A@A@A@C@C@E@KBABAL@ZEL@BCF@F@B@DBI@C@@BAFCHAJ@FAD@D@B@BB@@B@B@B@B@B@B@B@D@B@BAB@B@B@D@B@BAB@BA@@BABA@@BABAB@BD@BBB@FBHAFCDABAF@B@D@BBBBBBB@D@FBF@BB@BB@@B@BADAB@BAB@BADA@AD@B@BB@B@B@BBBB@BBB@BD@BA@BB@B@BAB@B@B@F@B@B@DB@BB@D@B@B@@AB@B@BAB@BBB@B@DBBBB@D@D@B@BBD@B@@BBB@BBBBB@B@BF@D@DADCBAF@D@B@B@B@BABAB@B@@AB@B@@AD@BAB@B@BAB@B@B@D@BAD@B@B@@B@DBB@BD@B@B@B@DBF@DAB@F@@BB@BBDDBBBB@DB@@B@B@BBBBBDB@BB@@BB@@B@BB@@BB@@BBB@BB@@B@BBBFDDBDDRLB@BBFDFDDDB@BDD@@BB@@BDFDFBDDFBB@BBBBDBDB@@BBB@B@B@B@B@B@BA@A@A@ABA@@BAAAB@AA@A@AAA@AAA@A@ABA@@BA@A@A@A@A@A@A@A@A@@B@BB@BB@B@B@BA@AB@B@B@BA@@B@BB@@B@BB@@BA@@BA@@BA@A@@BAB@B@B@B@B@B@BBB@BB@@BA@@BB@@B@BB@BBB@BBB@BAB@B@@BB@B@B@@AB@B@@A@A@AB@@AB@B@@AB@@ABAB@@BB@B@B@B@@ABBBBB@BA@BB@@AB@B@B@B@B@B@@BB@B@B@BA@BB@@BD@B@B@B@B@B@B@BBBB@DABAB@B@B@BABAB@BBB@B@B@B@B@B@B@BA@@B@B@BA@@BAB@BA@@B@BA@@D@BA@@BBB@DCFABABAB@BABB@ABABA@@B@BABA@@DY\\A@BBB@dLFBJFfVDBBBANCVE`NNRR"],["@@@AB@B@B@BAB@BA@ACC@AA@AAC@CAABC@EBA@A@ABBBABABAB@BB@@BB@B@B@DBB@BBD@BABAB@"],["@@ABB@@A"]],"encodeOffsets":[[[104017,39555]],[[104561,38947]],[[105183,39178]]]}}],"UTF8Encoding":true});}));