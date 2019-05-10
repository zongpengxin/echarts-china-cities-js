(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('惠州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"惠州"},"geometry":{"type":"MultiPolygon","coordinates":[["@@ABB@@A"],["@@B@DAFCFCDA@BAFADA@@B@BCAA@ABCDABBBABADKJA@CDCBA@@F@HEAE@CBEDQHABA@IHABABCDABAHCFCJAD@RAF@BAHCDEBC@G@GBCBMDOAA@MEMGCAGECAKGIAAAE@C@I@ABE@CBA@ADCBCBCBA@GDCBKPADCBABCDCBABABCBCBGFA@C@A@C@C@A@A@A@CAA@AAA@A@A@CAE@A@AAC@KCEAGBKDA@C@IDEBEBCBE@A@I@IEAA@D@DCBE@A@CBA@CBEDABABABABABA@A@AAAAAAAAAAAAAACCAAC@A@A@C@ABA@C@@BA@C@A@A@C@@B@F@BAFCBA@@F@BDFADBBBDBFBBAF@B@BBB@BBBFDFBBFDFFBJ@B@DDBDBBBBDBD@J@BAH@FAD@LDBDDBDJ@FGDIAGBCHCH@B@D@BA@@B@B@B@BB@@B@B@B@BBB@BBBBB@BHDBFBJHAJ@BB@FBDAFEBCFEJ@DA@CNEHBJDBBDBH@BABABA@ABC@ABA@ABA@@BABA@ABABA@A@A@@BA@A@@B@BBBBB@BB@BBBBB@BB@BDB@BBB@BBB@BBB@BBBBBBH@BEF@DDBBH@B@BBJBDDF@B@J@BBBBB@B@BB@@BA@A@A@A@@BA@@D@BADCB@BAB@B@B@B@B@BBBBB@BBBBB@DBB@BBBBBB@BBD@DBB@D@BABABAD@@AB@B@LALAHAFBJBHBFEJGB@D@B@DABAD@DABAB@@A@AB@@GBCCKAGDADCLCNGDA@EBAH@FAHCD@D@B@B@BAB@AF@B@D@DBHGHAF@BEF@J@B@DA@ABABA@AB@B@BB@BAB@B@B@BB@BH@DDBDBBDFBBBB@B@DA@CDKHCFAJAFCFAHCDCFAFBDBBFBDDFBDDB@B@B@@BB@BB@BB@@BB@@BBB@B@B@B@BABABABCBCBCBADC@ABABABABAB@B@B@B@BBB@BB@@BBBA@@B@BAB@BAB@BBB@BB@BB@BBB@B@B@DABA@ABIEIAIDC@C@C@A@C@AB@BABABABABCDABAFDN@B@B@BA@@B@B@BAB@DBD@D@B@BBB@BB@LCF@L@HBDBBBFHDBGHABABA@ABCAC@A@C@CBABA@A@A@C@CCC@A@C@CBE@CAA@A@CAA@C@C@CBCDABAD@B@BBAB@BADAB@B@B@BBBBFFDJBBA@@BKBM@E@CDCHED@BA@C@C@A@A@A@C@A@ABABA@@BAB@B@BABAB@BA@ABA@ABCBA@ADADIBABADAB@BAB@B@B@B@BBDADABABCBA@CBA@C@A@CBC@ABABABAB@BAB@B@B@BAB@BAB@B@B@B@B@B@BA@@BA@@BA@@B@B@B@BAB@BAB@BCBABABA@C@ABA@A@@B@B@B@B@BBBBD@DBBBB@BBBB@BBDBBBB@@B@BA@@BC@ABAB@BABBF@DBBBDBB@B@BAB@D@DABCBABC@ABCBA@ABABEBEBA@A@A@AAA@A@C@@BA@ABA@@B@BBB@B@BA@@BE@C@E@A@C@AAA@A@A@ABAB@B@BABA@@B@BBDBB@B@BBBBBB@B@B@B@BBB@B@@BBB@BBB@B@BBBBB@BA@@BA@A@ABA@A@A@CD@DAB@DB@L@RALBDJ@HBFBDRC@FOHABHHBB\\BDBFBD@B@D@D@B@DBB@DBD@BBDBDBDBBBBBFLFFB@BL@D@HDHB@D@L@FBFJBDBDBFB@@BB@H@FDJBBBFADB@FB@@B@BB@B@B@D@D@B@B@BAHEFAFDDFB@JDHAB@D@BHBB@BBB@D@B@D@D@D@D@BBBDBDBD@D@B@D@D@B@DBB@B@DBB@BBDBBBBBBDDBHHBFFDFBDAAEAEICAI@A@AB@FAD@DBBE@CDCDGD@BFDJFDJF@FDDBBDDHBFBVDDAAB@BELCFOBIFCDCBADBFLDHFIHIBCJBH@DDFDFJDFDHB@D@B@H@B@FD@BH@BD@BDCDABA@ABCFABBBABCD@DBBADAD@DAB@BABEBA@AD@DDDBD@B@B@D@DA@@DBBADA@A@ADA@@BADA@@B@B@B@HB@@ABDBDDDAD@BDBBBDHB@@BBD@BBBFHAFBDBBBDBBBBBBBBDADCDAB@DAN@D@@ABKJBJBD@BCBCF@BBDDDDJ@JADBFBJDHDCFBBFAD@JDD@FFCDF@DCBBF@D@BADABCD@F@DBHDHLDPD@D@DD@BDDFBD@B@B@BAD@FAFAAA@GDCFGBAD@B@D@B@HGFDDBB@F@FDB@FEFAFAPAHDD@D@LNFAHDFFF@B@FFBFBDHAFBDABGHAIC@GKGIACACCEBAAC@CCCCDCFBDAEGGAEKCECGGE@GLELAL@HFBBH@DID@BA@CJAJ@DABBABFDHBD@@EFCFADCFABC@CFCBBF@F@LB@BL@FFFDDBDBJKFCFABCF@BAFAEE@A@EAC@ABABADCFED@D@@CA@ECCBCAEAC@EEECAA@ECCCAEC@E@E@I@CCICEDK@GC@FIBCBC@C@ABCLAF@DGCCBIF@FIBA@C@AAC@AACAAAAAAAAAAACEE@C@ABI@ADGBABA@AACAA@GJELAH@B@B@BA@ABA@C@CEEAAAADCB@BA@CDCDAD@BABCD@@DBB@D@BBDBBBDBBBBHNB@FE@CL@BABCBAFKBEDCBEBCDKACDCHCJ@HDDD@AB@B@DABA@ABA@ABC@A@A@CBC@CAA@C@AFBDABDHGB@DCDAB@B@HBDBBBDDBBB@HDHBFBHDDBLFHAFAFBBCBADAF@BBFADCBABAB@H@BABAFCFAD@B@AABCDEBABABGCCBCFKF@DBFADCB@@E@CDCBCJM@KBGDC@CBABABABED@FGDBDE@CFA@G@CAC@GAA@AAACACCFAACB@BCFGAA@AAAAC@AFADEDCBEF@BAB@BAAC@IBCFEDEHABABCDBBBDBBAB@BC@AD@DAB@DAJADCB@BCB@BA@AB@FEBABA@ABA@GC@A@AC@CDADCFADABAFCD@D@BBDD@BABCACBDB@FB@@BAHABDDAD@BDBDAD@DAFBBADBAFDBBF@BD@DD@BFBBBBCDBBDD@DBB@DI@EBEBK@K@CDEFCBAHCHAH@F@DBNDF@DABAFEBCBCAEEE@AEEGCCCACCEAIAIBCDGDKBAHIHIDCBABGAGCCKCEAC@EAA@GAA@A@EEMIGISWU]IGCAG@BE@AD@BAACBABBB@BAD@@EDCB@D@DAB@DAB@@B@DABAD@B@BBD@DBB@BBBB@B@BCD@@AB@B@@ABA@A@AAABABBD@DD@B@BBB@BBBDABBB@BBD@BABDB@DBBABAF@@BDBB@HCDABABADCH@D@DADAD@@AA@CAE@@ACCA@CA@A@AA@A@ACACBAFADADABE@ACA@CBADAAC@AAABABCAA@AB@B@B@BCCCA@C@A@AAA@@ADCD@FABBB@BB@ABAB@B@BED@DBDAB@DA@A@ICEAAAA@CBAD@@CB@BABAB@AA@CBABB@BB@DA@C@A@EBCACBA@BBBBA@BBBB@BBBBBDB@@ADA@AAA@A@ABABADDFBFBBADCDBB@D@BAACBAHABA@A@AB@BE@AACD@FAB@BB@BB@B@BABAF@DA@AAA@ABA@ABCBAA@AA@ADAD@DAAA@CCC@CA@A@@CAAECAACCBACI@AA@@CDEDAB@BBDBDA@AAEAABABCBADAB@B@BBD@BABAAAAC@C@ABAAADCB@BCBC@C@A@CBA@C@CBACA@AABCAAAAAACBA@ABAAA@A@AAAACA@AABABA@ADA@ABAAA@AAC@A@CBC@AAAB@BABBF@D@D@BA@AB@D@B@B@B@BC@A@CBADABAD@BABADA@A@ABADAD@B@D@BA@ABABA@ABA@ABABB@CBAB@BA@AAABADA@ADCBCACD@D@DBDADABC@A@ADBD@B@B@DB@BDDDDBBBD@B@BABBBBBBDBBD@BDDBB@@B@BBBB@@DABCBBD@BBBABBBA@@BA@A@A@ABA@AB@B@DBDB@CB@DAD@BD@BB@DDBB@B@DBBBBB@B@BDB@BDBB@BBADBD@B@DBBD@@BBDAD@B@D@BBBH@DBB@BBBABBBBDABBB@DBB@BBADAD@DABADBBBDBBD@BB@FB@BB@DBBDBB@BDABBBBBDBBBBDBB@B@B@D@B@BCB@D@BBFAD@BBB@BAB@BDB@B@D@DBDB@BB@BABBB@BBDB@@BBDABC@A@@DBJ@BAF@BA@@DBDCF@B@B@DA@DBB@B@DAD@F@BB@BBBB@DBBBDBBBB@DABBDBBDBBBBBABBBB@ABCB@D@@AHABC@AB@@CAGEE@C@ACA@AB@D@B@@AB@B@BAB@B@B@@BB@@AB@B@@AB@@A@A@A@A@AB@@AB@B@B@BA@A@ABA@AB@@AB@BAB@B@@BB@BBB@BB@A@A@AAAAA@AACAA@C@AAA@A@ABABABA@AB@BA@AB@BA@AB@B@B@B@B@B@B@@BB@B@BAB@BB@BB@B@BB@BBB@DDB@D@B@BBBDBBBAB@BABADBBBDBBFD@BDBABBBD@BB@B@B@B@B@B@BABBBDAFADADBB@B@B@BADBFAB@BAB@HBDAB@BAB@D@BAB@BCDABABBB@BEB@B@DBDAB@D@BDB@DD@DABBFBBD@D@DBBADA@BDDBD@DBB@B@DDDFDDAB@D@DABBB@BBBBBDDADBBB@DDDDBDBABB@DBB@D@BBFBB@FBBB@BBBHBDBBBADBBBAB@DAB@@AD@D@BABBFABA@AB@BADADBB@B@DABA@BB@B@B@BBBBD@DABB@BB@DBBB@B@BB@B@B@D@DBB@CDAB@DBDBB@BDBB@DBBBDBBAB@B@B@B@DAB@B@B@BABADA@CBB@BB@DBBDB@BBB@D@@ABAD@FADBBBBBBABDBAB@BABBBB@BB@B@B@DBBBDADAB@FBDBDBD@@A@CAABAA@@AB@BADADABBBBD@DBBBDBD@H@DAD@B@B@@BBDDBB@BABCFAAAB@BAB@@AB@D@DABABABA@A@A@CBAD@@BBAB@BA@A@CBBBAB@B@@CDAB@@CB@BABA@ABBB@D@D@DBDBBBDAAEA@AA@C@A@ACC@AF@AAAAA@@ABA@AB@BBBA@CAGAA@EAA@G@CAA@CF@DCB@CC@CB@@AAADC@AACBA@ABA@AB@B@DBHDLJFBBDFBFDBBDABABAF@DCDABEBCBE@ABBF@BAB@DADAJADCBEH@D@D@BBBBB@BBAKPODDDA@ABAB@BADBD@BC@A@ABCDCFGGC@EB@D@BA@A@IAABABED@AA@C@C@AAAA@DEFAD@@AB@BABADCF@DAB@@BB@B@D@BA@A@CBA@AA@@AB@B@@ECBA@CBA@A@AACBA@C@CBC@@A@CEEA@CAA@BIBEAABCCEA@CBAAC@A@ABCBC@ABC@CCAC@EAC@AA@CCCBEC@CGAG@C@A@CACGE@CAE@@A@ACBA@CCA@CAC@CA@E@ABGEEA@A@@C@CBAAACC@ABCBACAG@A@CAAEAACABGAACBCBCBEBEGCCE@C@E@CBCDCBGACAAAC@A@CAC@A@BE@GCGACB@@IDC@CBACCCA@C@CAABED@BEBABABCACFE@ABCCABEDCBAACCCBC@CG@CAEACAC@@BAAG@CBGAE@CABEDA@CBA@AA@CAGCCECACCCAEI@CAACC@CAAECG@AAACEAE@EAG@CBCC@A@ACAA@AAA@@BC@CCA@GC@CCAA@GDI@A@@AA@ACE@GAGAAEA@AACCGEAAAEGAAE@E@ABA@CCA@C@CA@GCECACGECE@CDAAA@E@AACC@AB@BCBIF@BCBA@A@A@CB@BAB@BA@ABC@A@ABCBA@EBCDCB@D@BCBC@ABA@@ABA@A@CA@AAAA@A@A@AAACAA@CA@AAA@A@A@AAAABABABAB@BABA@ABA@@BA@CBADA@@BA@ABAAAAA@A@CAAA@A@AAAA@@ACA@A@AB@@ABAA@AAC@A@A@ABAAAAECA@@BABA@A@AGBA@A@AAAAAA@@AA@@CAA@A@AA@AAAA@AACAA@AAA@A@A@AAAA@A@ABCBABAAA@AAA@CABAACA@CAABEAAAAAA@A@CAAAAAAAAAAAE@EBGAA@@A@AAAA@AB@BA@AAAACAAA@AA@@ABA@AAE@A@ACEAAC@A@AA@AC@C@CAA@@BABCBABC@C@A@A@@AAA@CAAAACAGE@A@AAAA@C@CBA@C@A@ABA@C@ACCA@AA@CA@A@AAA@AC@E@C@C@G@CBC@AEC@@A@AAAAAA@AAAACAACAAA@@ABAB@B@B@BA@ABABABAB@@AAE@A@EBA@A@ADAB@BAB@BABA@A@A@AB@@CDC@AB@D@B@BA@AAA@A@AB@@AAA@AAACDAAA@AAA@EDC@AACC@A@A@ABA@CB@B@D@@ABABC@CCC@AAA@AAC@A@A@ABCDA@AB@@A@CBAFA@BFBDD@ABAB@B@@ABAB@DCB@@AB@@A@A@A@CBACEA@@AB@@ABAAA@A@A@ADC@A@AAAAAAAA@ABAA@A@A@CBAB@BAB@@AD@AA@A@AAA@CB@D@@A@A@C@ABAB@B@BBBA@CBAB@BAD@B@B@B@DBBADA@ABAB@BBB@BA@AAC@A@A@ADADEBABAB@BADAB@BBB@DABA@AD@DA@BNDB@@A@A@A@AAA@A@ACAAA@A@CBA@AAAAAAGBADE@ABA@AB@@AB@B@B@B@B@@A@AB@@ABA@ABAB@@BB@B@BAB@@A@A@AA@AG@A@A@A@A@AFEBCB@B@B@B@BA@AB@BA@A@AB@@AB@@AAC@A@A@AB@@A@AB@@AB@BA@A@AA@@A@A@ABCA@E@A@CAGAMCA@AAGGACAEAECCOKMGQIYS_[OOKQGMGUAO@S@I@GBA@C@C@EBE@ABGBK@I@ECGECOGC@E@E@E@EAGCIEEAC@C@CD@BAH@L@DBFFJ@FAJETAHEJCDABEBK@Q@G@UAcESCSAS@kA]AYAA@ABAB@B@D@D@B@HAHCFAFCD@BBDBDBFBFBJ@D@L@HELILGHEFAFAD@D@DDPDHDHFFDHBHALCVALAJ@LBJJTPdDFDDBB@DAFCDIDOFKDIJGHABCDA@EDEDEBC@A@M@ECACAC@EAC@CCGEGECcMECSGmQYIEEE@C@CBABAJEDADCDODI@CAEACEAIAOCWAAAWCQEIGKIWMECCAI@C@C@OGCF@BA@@BA@A@@BA@A@@BA@@BA@A@G@CBEAABA@@BCAA@C@A@CAC@C@AGAA@ACA@BA@A@A@ABABA@@BABA@ABE@A@E@C@ABABC@EBAAA@@AAA@AAAA@A@AAGAA@A@A@AAC@A@@AA@A@A@A@A@@B@BB@@B@B@B@BA@CB@D@BAB@D@B@BDBB@D@BBBBB@BB@BB@DBB@B@@BFJBBAHCD@BAB@BAAA@A@A@CBAFA@A@GAA@@AA@EH@B@B@B@DBBABABCB@B@BABACA@AAA@@BA@C@A@AAAAABA@@BB@@B@BA@ADAD@BCDAB@B@B@BB@B@@AB@B@@B@D@HBBDBBBBB@BB@@B@B@B@BBBBB@F@B@BAB@B@B@DA@BBB@B@B@B@@BB@B@@B@B@B@BA@A@A@@BB@B@B@B@@BB@@BB@@BA@ABA@A@@AAB@B@BA@@BB@@B@BA@@BA@A@@BA@@B@B@B@BABA@@BAB@BABA@A@ABA@@BA@@BABCACACAAAA@AA@EAC@A@A@ABA@A@A@A@CAA@C@AA@A@GCA@A@@B@BA@A@A@A@A@@BA@A@@BA@CBA@ABA@A@A@ABA@A@@BA@ABA@A@A@CAAAA@A@AA@BCBA@@B@BBDAF@BBBCFABGBA@AAC@ABAB@DABAB@BDBBDBBB@B@DBB@BF@F@B@BA@ADBHB@BB@B@BABAAA@ABAB@BA@A@AACBABA@A@A@CAC@C@A@C@AC@AAAA@G@EBCB@AACAA@A@AA@AAC@@B@B@BC@A@C@CA@AA@MBEBA@@D@B@BA@A@AB@BAAA@AAC@CBAA@AAA@A@A@AEEAAA@CA@A@AAACAA@CAA@A@@ABA@CAAEEA@EEA@CBC@C@AAA@@ACB@B@BGHAFABA@A@C@ABIBA@@B@D@B@B@BAB@JAB@BA@CD@B@FB@@BBBB@BBBB@BBB@B@B@BBFABAB@FBBBB@B@D@D@B@B@DABA@AB@B@BBB@BA@AB@B@B@B@DB@B@BA@BBB@BABAB@DBB@H@B@BA@@BAD@B@BA@AB@BAFBB@D@B@DBBBBBDBBB@BBBAB@B@@A@ADAB@BABAB@B@@BB@@DDBB@B@B@@BBB@D@BB@@BB@@BB@@BB@@BB@@B@B@B@BBBB@@B@B@B@B@BA@@B@B@BCBA@A@@AA@A@A@EA@BADED@B@BEAA@CBA@CB@BA@@BG@A@A@CBA@AB@BABABCBCBAB@DA@ABCBABABAB@B@B@B@DAJAD@B@B@DBBB@B@B@@B@BABAD@BAB@BA@C@A@@BA@@BJ@@BDBBB@BD@DD@BB@D@DBB@AF@B@BBB@B@BABBDABA@@BBBABBBADA@A@ABC@@B@BCFA@ABA@CAABEAEB@AE@C@@BC@@BB@BB@BCB@AA@A@ABCCGDABA@A@AF@BA@AAGK@AGEA@CAAAC@AA@C@AA@A@A@ABA@ECA@@AEDBB@BABA@E@@AA@A@@B@BABA@A@ABC@A@C@EBA@ABADCDAFAA@CAAA@@AA@@BA@CB@BAB@B@B@B@BBBB@@BBB@BB@ADD@FB@BB@BBCDBBB@BBAB@BBBBDBDBD@BBD@DBB"],["@@BA@AA@A@@BB@@B"],["@@BAA@ABA@@BB@B@@A"],["@@B@@A@AA@@B@B"],["@@@BB@BA@AA@AB"],["@@@B@BB@B@@AAAA@"],["@@A@A@@BBBBAB@@AA@"],["@@@AA@A@@B@BB@BA"],["@@@AA@A@AB@BB@B@B@@A"],["@@A@A@@BA@BBB@ABB@BA@A@A"],["@@B@B@@A@AA@A@@BA@@BB@"],["@@BAA@@AAAA@@BAB@BB@B@B@"],["@@B@B@@A@AA@A@@AABA@@B@BB@B@"],["@@@B@BB@@AB@B@BA@AA@AA@BA@AB"],["@@@AAAA@ABA@@BA@@BB@B@B@B@BA"],["@@ABB@@BB@B@@BB@B@B@@AA@AAA@AAA@"],["@@@AA@A@A@A@@BA@A@@B@BB@B@B@B@B@B@@A@A"],["@@BBBABA@AAA@AA@A@@AA@@BA@@B@BBBBB"],["@@@BBBB@B@B@D@B@B@@A@AA@A@A@A@@AA@@AA@ABA@@B"],["@@A@E@AB@BD@BBBBBBB@@ABA@AAA@AA@"],["@@BB@B@B@BB@B@DA@A@A@AA@@A@A@A@AA@@BAB@BA@AB"],["@@@BBBBB@BB@@BB@@ABC@A@A@A@AA@@AA@A@AB@A@A@A@AA@BA@AA@@A@A@AA@ABABABAB@F@B@BABA@AB@BBBABEBGAAAC@@B@B@BABABBBABABA@@BB@@BB@@BA@@B@BB@BABB@DB@@BB@B@BABE@A@AA@@ABAB@B@BABBB@@A@A@AB@B@D@BAB@BA@A@A@AA@BA@AB@"],["@@@K@A@AA@AA@BA@A@@BA@@B@B@B@B@B@DB@B@@BA@A@A@@B@B@B@B@BD@@B@BAD@B@BD@BA@A@A@AB@@A@AB@@A@G@A"],["@@@B@DB@B@@AB@@AD@B@D@@A@A@AAAA@AA@AACAAA@@BA@AA@A@AA@A@CBA@@BBB@B@BB@BD@BBDB@"],["@@BDDD@BDHD@BDBDB@BDB@BBD@F@BA@EAAECAA@A@AB@@AAACCCA@AA@A@A@A@A@AAAAA@ABA@@B"],["@@A@ADCD@BAJA@A@CBBD@BABA@@DBBDBDBBBB@B@FAB@DBBB@DB@DABC@CB@B@D@F@BA@CB@FDDBD@DCBCBAC@CE@A@ACBA@@ABC@A@AA@ABI@E@AAA@ABA@@ACCGEA@A@A@"],["@@B@@AA@@B"],["@@D@@A@AABA@@B"],["@@@AA@A@@BB@B@"],["@@@BB@@A@AA@@B"],["@@AB@BB@BAAA"],["@@A@@AA@AB@BBB@BB@BABDDFDBDBB@BADCB@B@B@D@B@@C@C@AAACAA@A@@BABA@ACAAAAA@A@@AA@@A@AA@AAAB@B@B@BAB@B@B"],["@@@BB@@BB@BA@A@A@AAA@AA@@B@B@BB@ABA@"],["@@AB@BBBB@BBD@@A@A@AA@C@AA"],["@@@B@B@B@BBBBAB@@A@A@AAAAAA@A@@BB@"],["@@A@AAA@ABABABA@AB@B@BBB@BAB@B@BB@@ABB@B@BB@DA@AB@@ABA@A@A@A@AB@@ABA@AAA"]],"encodeOffsets":[[[116880,23578]],[[116880,23578]],[[117400,23182]],[[117393,23200]],[[117397,23167]],[[117392,23235]],[[117394,23162]],[[117399,23197]],[[117390,23108]],[[117387,23173]],[[117387,23260]],[[117400,23225]],[[117397,23112]],[[117402,23133]],[[117392,22989]],[[117392,23259]],[[117365,23236]],[[117383,23204]],[[117399,23178]],[[117382,23154]],[[117423,22939]],[[117397,22987]],[[117411,23113]],[[117406,23208]],[[117361,23214]],[[117393,22968]],[[117381,22988]],[[117484,23117]],[[117842,23195]],[[117488,23168]],[[117860,23175]],[[117793,23091]],[[117596,23049]],[[117488,23168]],[[117483,23276]],[[117602,23069]],[[117481,23120]]]}}],"UTF8Encoding":true});}));