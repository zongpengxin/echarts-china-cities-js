(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('鹤岗', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"鹤岗"},"geometry":{"type":"MultiPolygon","coordinates":[["@@@AA@AAAAAAAAA@AAA@A@A@A@A@A@A@A@A@A@A@ABA@A@ABA@A@ABA@@BAB@B@DAB@B@B@BAB@B@BAD@B@BA@@B@D@D@B@B@B@BBB@B@D@B@D@B@B@BABA@ABA@A@ABA@A@@BA@ABA@@BA@@BA@@BAAA@C@A@A@C@A@ABC@A@A@A@A@A@ABABABA@@BA@A@E@{VWDEFBJBHBBHDT@BBzAH@FRCFEJ@HPJPDBDADIBKAG@E@GHGN_V]JSHSTADBBBDADED@DBRBFBDFBNDJAH@RFPHXLD@D@FAB@B@B@DAB@B@BAB@BABBAB@BAB@BABA@@BAB@BB@@BB@@BA@@BA@ABAB@B@BAB@B@DA@@BA@A@A@ABGFADAFAFBDBFFDL@HAFBBB@DADCBOB]JEDABAD@DLfBLBHAHCFCDIFAD@BDD`RJLFFNDHDH@FALGJAB@B@DA@AB@BBB@@BBBBDBB@BBB@B@BB@BBC@ABA@A@ABA@A@@BABA@ABC@ABA@A@C@A@E@GCE@G@EDAFCLGZBXBJDBTFLHFHDL@JCH@DBFLFJJBF@DKPa\\KDCDADBDDDBFEVBDLLLPBF@DGNKHw^¿`EDIN@LCHKDeDK@AB@FL`@FCPCFABEAG@G@OHCJCJBh@FA@A@@BA@A@ABA@@BA@ABABABA@ABA@A@@BB@BBB@BBFBF@@BB@B@B@@B@B@D@D@BB@@FADEBE@SGUEK@KDOPIP@JBFPLHFFF@FE^GFOBQ@I@EFCPBFHFBFAFGDIDAFCPER@FFDNBJ@RCLAN@NFJBF@VKH@HBt\\PLJFBBAPCBQDEDEFADYNQDEBA@BBJJFDBHATEVCFBFDH@HALCFJPFB@B@DGBMFEHAF@HJRFFF@dFJFPHVRJPRJBD@DIBCFAFBD`TDDAHIJAH@FBHHNDLAXEJKLYNIHAD@DDDhVTDP@LCNBNDJFLJJPNNBHCNEJBNFHJFFBFFJBLCDKDAD@D@FBFBD@FADCLKDGVIRKVQBEDADAJ@D@LGPOLKNI@A@AAK@EBADCFE@A@C@C@A@A@A@AHAB@BA@ABAH@HCDA@AAAB@@ANCB@BABCBAH@JCF@BAAA@AB@DAD@D@@ABAFG@AB@H@@AB@B@B@B@B@B@@AD@@A@A@ABAB@B@@AD@@A@A@AB@@AB@B@B@@AA@A@@AD@B@@ABAB@B@@AA@@CBAB@B@DB@AB@B@B@BA@A@ABA@AB@D@B@B@@AB@B@@AB@B@BABABA@AB@B@@A@ABAB@@BB@B@@AA@@AB@@ABA@ABA@A@A@AB@@ABAB@AABAB@@ABADB@A@AA@@AB@B@AAB@B@@AA@A@@A@AB@BABAF@DBB@DBD@B@BABAB@BBB@B@@BB@D@@AD@B@@A@AB@BBB@@AB@BBB@@BBBBBB@@AFBB@@B@B@BB@B@`RB@BCB@B@BBBFDB@BABBBF@D@B@BDBB@B@B@BBBHBJFD@B@B@FAJEDAB@B@B@BBDDB@B@BADADAD@B@FBB@HAB@F@@BBBB@D@JAB@DAD@FBD@DANEHAB@B@BBAN@BBB@BBBB@NFHBB@@BBBABABA@G@KBA@CBGDABAB@D@DBDBBDBDBB@@B@BEFCD@DBBHFFFFP@BDV@P@B@B@BA@I@ABEBEBCB@BA@DH@BB@BAFABABBD@TJDBHHJJBB@B@BABEFOJCB@BAB@BB@@BB@D@D@B@BCB@BBBBB@JBNDB@BBBD@DBB@BB@H@^DD@XBL@D@B@FCB@B@N@H@D@D@FAFCFADAB@DBHBHBBB@B@B@D@B@DBBDHBDDBJ@BBBBB@BBB@DAFALEDAB@B@BB@D@LAHBF@BBBFDB@B@B@B@DAHGFEDADAHADAB@B@B@BBDHDJBBB@B@BAFCB@B@BBB@@BDFBDBBB@B@D@BADCBC@ABAJ@H@DAB@B@@AHKJSBCBAB@DARAJA@AB@@C@AB@JDBBB@DAB@BCDEBCBAB@B@L@JBPBF@BBFDB@BBLBFBD@F@F@B@B@@B@B@BBBHDTFDBDAF@NENCL@DADBBBHDHBHBDBFANAF@D@B@BBBBDDBBHDFBDBH@F@BAD@FGDCBAD@B@PJFDBB@B@BABAD@B@BB@B@J@F@B@DBHDJFBBB@D@DAHCDAF@D@BBBDDJBJ@BB@B@B@F@VAJ@BBD@BAFCB@F@F@BFCH@DBDBBDDFBXJHF_VUNULQDKBIAGGISMS]GIQG[COESQQaESAMDgAKoYgyIQCQ@KDKJKZ[BKBWDOHKLGRGlIPCFAHGVa^[xWZO¾h_bslFMBIEFBMHM\\Y^OU¦I@LVDF@bJp\\NLfA|C^ApGF\\JvPfBZExGCTERKNIH[FqDInkjAXAfJnb^`XVLFdDzIYnQxOTAV@°TNARG~OZAJAL@NDHFRRTvBBrFVCpOxCpB BZDxNVBbA^GH@|PV\\LTjfJl@NCgªg°SCGEEAECACECC@CAACA@ACIA@KAEAG@_CQAQCCCCAACAA@E@CDGHOHIDCBEBABABCBC@AB@@ABCBA@A@A@C@AGKIMCCCCKCMEGAEAGEACBCBG@GBC@A@CAACCCACEEGAA@C@C@CAIEGACIOAABIBEAECCCCGAK@O@GAIAGCSIGEGGEGCEAEAEAE@CACCAIIOIYKMCGCCGCCA@AAC@E@KEGCECAA@E@A@ABC@C@CACCEECEAE@M@E@EAGAEAECCCKKCCCCECCAKCIEEEQKKIGICAEAE@M@CBAAQDUBQAMAaEIAGAIECEAAAECAEAeGMCA@CAA@AAAACAAACAEA@AA@A@CAA@YGOAICCAEECCEIAI@M@UBKBAHEREBABA@A@A@A@CACAACAA@AAE@I@CAAC@A@EGWAA@G@C@QA@@AAAAAAAAAAAAAEGECEMEAAAA@OACAAAAAA@C@A@ABGBC@CBE@IAE@G@C@K@A@C@A@CCACKAAASAQCOAQDIFGJADCF@BUTUPIDQ@OCKCCAIASAMAGAKAMAG@MAKBUBI@C@GDA@E@CACAGCA@AAGGAAAAAAC@GAA@A@A@@AECECAAA@@A@CA@CCAAIGCAEAGAE@A@A@C@KBABA@]HIBA@MBE@C@EAC@ICIAAAiGKCA@E@O@O@A@E@KAG@M@E@E@I@GDMBK@GBSBEBKDCBC@CDEB@BE@CBA@OHA@C@A@A@A@@ABA@AFE@CAAA@A@A@A@GDABA@G@CBG@CBCBA@@BCBA@CBC@CBC@A@A@A@GCGGEGECCCGEAAMEMEOAK@C@A@CCCCCAC@M@A@E@K@A@CAC@MGICC@@ACACCIICAEGAEIKEEIG]IUEYAI@E@CBA@CBA@C@CBABA@ADCB@BI@IBA@CAC@A@E@EAC@A@GBCBA@EDGHEDEBGBEBEBG@I@E@A@A@GDC@ABABCFGDGBEDCBCDMF@BSHY@K@O@U@SCECGAKAOCEECEAKCICEQEKAE@K@KFOLMHQHABEBWHK@]@]DcDQFKBIBE@CAICABELEHCDCBCB@BB@@BA@@B@B@BD@B@@ABBB@B@@AB@BABB@BBBA@@BA@@BB@D@@AB@@BB@@AB@@B@BB@@ABB@BB@B@BBBB@BB@BBB@B@B@B@B@B@BBB@B@B@B@BBAB@B@BA@A@A@@B@BB@@B@BA@A@A@BBB@B@@BA@A@A@AB@BB@B@BBD@@B@BA@BBD@@B@B@BB@@BA@A@A@@AB@@AA@A@@B@B@BA@@BA@A@A@@BA@ABA@C@ABBBFBB@B@ABA@AAA@A@@BABA@A@AAA@A@A@@BBBAB@BB@B@BBA@@BB@@BB@B@BA@BB@B@B@@BA@ADB@D@@BABB@BBB@DBB@@BA@A@A@@B@BABA@AAA@ABA@BBBA@BB@@BA@@BB@B@B@ABA@ABAAAB@BBA@B@BB@@AB@@B@BABB@@BA@ABA@@BA@ABB@@B@BB@B@@B@BABB@B@BBB@@AB@BBBBB@B@ABABB@BAB@@BABB@B@@BB@ABAAA@AAC@C@CAC@C@CAE@EAC@C@CAC@A@CAE@CAA@E@CAC@C@EAE@IACAA@C@EAG@EAG@EAE@GAC@IAC@EAE@CAG@EAC@EAC@C@EAE@CAE@A@EAE@C@CAE@G@EAE@A@E@KAYAK@WCE@QFGDEBGBGBE@C@IFA@OHMBGDYF[HKBCBABOJOHIFCBIBGBC@OBSBA@M@CBE@EBKBE@GBE@A@AAA@A@A@A@A@A@A@AAA@A@A@AAE@EAYC_EQAGA@ACA@A@AA@@BA@A@AAB@@AD@B@@AAA@ADI@AFAB@B@F@BAB@BA@AAADA@ADAFAB@@ABAAAA@@ABABA@CAABCBABBB@@AB@B@B@BAB@BAB@B@@AB@BAB@@A@A@AB@BA@AAABAA@@A@AB@@ABBB@B@B@BAB@B@FB@AAA@AB@B@@AA@@AB@D@BB@C@AB@@AB@BAB@AAB@BB@AB@@BB@@AB@BBB@BABA@AB@BBB@B@@AB@@AAA@ACBA@A@@AB@B@@AB@B@AAA@ABA@@ABAAAA@BAB@@ABBBAA@@AB@BBB@D@@A@AB@D@@ABAB@@AA@AAA@BA@AB@@BB@B@B@@AAABAD@BBB@@A@AD@B@B@AAB@BB@BBBBA@AB@@AA@BA@AB@BBB@@AAAA@ACB@B@B@AAA@@ABAC@@AD@CA@AB@B@@AA@A@A@@AD@@AB@B@@AA@@AB@@AB@B@B@@BB@BAB@@ABAB@@AAAB@B@@AB@@BABB@BA@BB@@A@A@AB@B@AAB@B@AA@ABBDDB@BBBAAAB@B@B@@AB@B@@BB@@AAA@AB@@BB@B@@AA@@A@AB@@AB@@DB@BAAA@EB@B@B@B@AA@AB@DBB@@A@A@AB@AA@ABAD@@AB@@AB@BBB@@AAA@AB@B@BAA@CACAA@@AA@A@BBA@CA@B@BA@C@@A@A@AA@A@ABA@@AB@@AA@A@BAAAA@@BA@A@@AAA@B@BA@C@@BB@BB@BA@AAC@@AB@AA@AA@@AA@@BACA@A@@BA@@A@AA@@BAAA@@BA@A@A@@BA@AA@B@BAAA@A@A@A@@AB@B@B@@AA@A@@A@ABA@AB@@ABAA@@AB@DA@B@BB@BEBA@BD@B@@AA@@AAB@A@AC@AAC@@A@A@A@AA@A@A@@AB@@AB@@AA@A@A@A@@AA@ABA@A@@AB@@A@AB@B@AAA@@AA@A@AB@A@AA@C@A@BAA@@AA@@ABA@AAB@A@AA@CB@ACAB@B@@AAAB@BAAAB@B@AAA@BAB@@AA@ABA@BA@AA@ABA@AAA@@A@AA@@BA@@BCB@AA@@AABA@A@AAABBBA@C@@AAAA@@BBBC@A@BB@BA@@AA@A@A@A@A@CBOIB@B@BBB@BAA@BAA@A@@AD@B@BAA@A@@AAB@AA@@AAAA@AB@BA@A@@AA@A@@AA@A@A@DAC@CAB@@AD@@AA@^eTWJMNOVAA@@AFACA[MBCF@^EFEAEMEIASGDKKOg@a@k@m@SBIDMWs@GbiABM_LEB@JERaAEH@D@FAL@HZ@BCH@ADA@GBW@@VIDAPSNBABA@ABADA@A@A@A@A@A@A@A@A@AAAA@A@C@IBC@C@KBCBE@GBC@A@ODA@AAB@@A@A@A@A@AAAAAAACCAA@A@A@AAA@AAC@CAA@ABA@A@ABA@C@CBADABABABAB@BABAB@BABA@C@ABC@E@AA@A@KBC@A@@AA@CA@AC@AAA@OAA@ABA@C@A@C@ABG@EBA@A@CBC@E@CBA@c@GB@AAAA@@AA@@BA@@BABA@@BA@A@AAA@A@AD@BA@A@C@C@CBA@@BABA@@BC@A@@AA@A@@BA@A@A@ABADA@A@A@A@A@ABABAAAAA@A@A@CBAAAAA@A@A@@B@B@BA@C@ABA@A@@BAB@BA@A@A@ABABA@@AA@A@A@@AA@A@A@@BA@ABABB@@BB@@BA@A@A@@BA@@BB@ABA@ABA@ABAAAB@AAB@AA@A@BAA@A@@AA@@BA@A@A@A@@BADA@A@A@@BA@@AA@A@AAA@AAA@@BA@A@ABABA@@BA@A@A@A@A@@B@BA@@BB@ABCA@BA@ABB@@B@BA@A@A@A@@BA@C@@BA@@B@BABA@A@@BABAB@B@BB@AB@BA@ABA@@BA@AAA@A@BB@BA@A@A@@B@BA@@BA@A@@BA@BB@B@BA@A@ABA@A@A@A@@BA@@AA@A@ABA@@BA@@AAAB@B@B@ECaCDGJEQUS@S@SBO@MMEGDUHGHE]IT]BAHIVFBC[KTI_OIDKD@D[HKF@DED@FOHDHJDEJDJDLBBELFPDLFNHAFD@FIDE@T^MDc^dpC|OPSNMBBB@@ABAB@AB@B@B@BA@@BA@@B@BA@@BB@B@AB@BB@@B@B@BB@B@BBA@@BA@A@@BB@ABA@@BB@B@@BBBA@A@A@AB@BA@@BB@@BB@@BB@AB@BB@BBB@@BBB@BABB@B@@B@BA@@AA@@BAAA@BBA@A@@BB@@BA@ABB@ABA@A@A@@BB@@BA@A@A@@BB@B@B@@BB@ABA@@BB@@B@BB@@B@BA@@BA@A@@BBBA@A@ABB@@B@BA@AB@AABA@@BB@@BA@@B@B@B@BA@A@@BA@@B@B@BA@@BB@@BA@ABA@A@@BA@ABABA@ABA@A@ABA@A@A@A@@BA@A@A@A@A@A@A@ABA@A@A@A@A@A@ABA@A@A@ABA@A@A@ABA@A@ABA@A@A@@BA@A@ABA@A@CBA@CBA@CBA@C@ABC@CBA@A@A@ABA@ABA@A@@BA@A@A@A@C@C@A@A@A@ABC@A@A@A@A@AAA@@AA@A@ABA@A@AAA@A@ABA@A@A@A@AAA@@BA@ABA@@AA@A@C@A@@BA@A@@BA@@B@BAB@BA@@BABABA@AAA@A@AAA@ABA@A@A@A@A@AB@B@B@BABA@@BA@A@@B@B@B@BBBABAB@B@BA@@BA@@B@B@BABA@ABA@ABA@A@@AA@A@AB@BA@@BABA@A@AB@BA@@BA@A@A@A@A@A@A@A@A@ABA@A@A@ABA@"],["@@BBB@@AC@"],["@@B@@AA@@B"],["@@B@@AA@@B"],["@@AAABB@B@"],["@@@AA@BB"],["@@B@@AA@@B"],["@@@BB@BAC@"]],"encodeOffsets":[[[133082,48397]],[[133785,48326]],[[133785,48307]],[[133766,48287]],[[133763,48286]],[[133745,48289]],[[133739,48281]],[[133217,49309]]]}}],"UTF8Encoding":true});}));