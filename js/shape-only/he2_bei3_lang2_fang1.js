(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('廊坊', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"廊坊"},"geometry":{"type":"MultiPolygon","coordinates":[["@@@AA@JAB@BE@CFB@ABCBB@CBB@AB@@K@AA@EDCBDGDEB@B@ADFB@AHCFAB@ABHB@B@FH@B@LEHCFA@ACBBKA@@AHCB@BCPJ@CDB@ABBBBDAB@@BB@ABRDDEHEB@LDBAAADAJCIMKFCABA@ABCGA@A@ACAA@A@@AA@@A@AC@@AA@AABAA@@COAADCAA@BEE@BKA@@AEAA@@CACDCDBBEC@@A@AFB@CAA@C@AB@@AA@BEDEA@BEBC@AA@AFEA@A@A@A[C@BK@BEB@BCA@BCB@B@@AD@BABAJBA@HBBAB@@AGABC@AI@@CE@@BEA@EBCBBDKDK@CB@@AB@HBB@BAB@LBHHDIFFDDDDB@ABD@@DH@ADA@@DAB@DBB@ELB@BB@DBDB@AB@@AF@DE@AA@CBA@@CA@BEEAB@BE@A@CB@B@ADB@BEB@@ALBFCB@B@@AFBBGA@BCE@BEBM@C@C@AAAAC@AC@E@DQA@@AEAADEAQCA@@A@EGA@IHB@ELBDQBG@EBI@AIAFKHOECBA@O@GB@D@BA@AB@B@B@DD@EB@@IDAD@@AD@CGB@D@@EI@A@@A@AA@A@AA@B@FA@@BA@@BA@@AA@AHEBCADIAA@OA@E@@B_C@ABQH@DG@I@A@GB@@A@A@CAA@AB@@C@ABAAMA@FCAE@CBABA@CAMBACAACBBBBB@B@@AB@B@@AD@D@B@hBDARCJABAB@@A@A@AB@@AB@@A@A@AB@@A@A@A@AB@@AB@B@B@B@DKDQA@A@A@A@A@BGB@B@B@BBBAA@@A@ACE@ACIABA@A@A@A@@BA@A@A@A@@A@A@A@A@AA@@A@A@AEBAA@AGUI@ACAA@C@AAAA@A@A@A@@AAA@AA@@A@AA@ACA@C@A@@A@A@A@A@A@AA@A@EBAAEAGABAFQG@DKO@GABEC@QAO@@FC@@EGBC@EAICC@EA@BBBA@A@@AA@@BA@@D@BA@G@A@@AA@@BE@AAA@IB@DE@C@@BA@A@A@@AC@@AC@@BAAC@@CA@@CC@@DA@@BAB@BD@@FD@B@B@B@B@B@BBD@@AD@BHC@GBEBA@@AACA@A@A@CAAC@AAAB@@AB@ACA@ACGBCEKBKDI@@A@AA@@A@AA@@A@AACCG@A@A@A@AB@B@B@@AB@@AB@FA@I@K@AAAC@A@@A@A@A@A@A@AB@@A@A@AA@@A@A@AA@@A@A@A@AA@A@@AAA@A@C@AAA@A@AA@@BA@@C@AAA@AA@AB@AAA@A@AAA@A@AAAAAAA@AA@A@A@A@A@A@@A@A@AAAA@AAA@AAA@AC@AAA@CAA@AAAA@A@@A@A@A@C@CAEAIAA@A@A@AAA@CAA@AA@@CAA@AA@A@A@A@A@A@@AAA@A@A@ABCA@A@@A@G@C@G@E@G@E@A@O@C@GD@D@D@D@D@D@B@B@@A@A@A@C@C@A@CBA@C@A@A@A@C@A@A@A@A@A@A@A@A@C@A@A@A@A@A@A@A@A@A@A@A@A@A@A@A@A@A@AB@@BB@BAB@B@B@B@B@B@B@B@B@B@D@DAB@B@B@B@B@B@@A@A@AAA@C@A@C@AAA@A@A@A@AAA@AB@@A@A@AB@BAB@B@B@@BB@B@B@AA@A@A@AAA@CC@A@@A@A@AA@@A@A@A@A@AAA@AAA@AA@@AAAA@@A@AA@@AAADAB@B@BA@AAA@AAAAA@AB@B@FAB@AA@A@ACBC@AA@A@AAA@A@AA@@A@AA@@A@A@A@AD@BAB@B@@A@A@AB@B@B@B@D@B@B@BAAC@C@CAAAC@C@AAC@CAA@A@C@AAC@A@C@A@ABB@BB@D@DB@A@AHBB@B@D@@ABAA@@AB@B@@AB@B@@E@AD@B@@A@A@A@A@A@EA@@A@CC@BCGAAABCDCAABEFBB@@E@CAGEA@G@CGAE@@EAAQBAEB@J@D@B@@CB@DDDBAAFADA@A@A@A@A@ANE@AA@BC@C@AGABEA@@ABA@A@ABA@A@ABA@ABCBAFIBA@ABI@AAMCIACAA@ACIGCBE@IA@AB@F@DEBIAABBBG@AAMA@AACI@BADCA@@EDEKADEGIIAG@@BGAGECAYTGGIIADDDABA@AAAACEKEA@CABADAHAACAAACAACC@AACCBG@G@CAGIEIBAFAFACE@GB@D@FIDE@AC@AB@DUBACG@ACG@OB@GC@@GB@HDCIFA@BDHB@DC@EBCH@BCDAB@HA@EB@JBDBDE@EEACA@KAEGCECAC@EACI@BC@EA@CC@CI@AGIBE@ADS@DJQ@AECCAACBCK\\C@AACAACCACABCGAAA@A@C@AB@CA@BAB@BA@AACA@DABEAEJ@@C@AEAG@@HG@@DBBKA@DEA@D@BG@A@@HGAECBE@CG@@EC@A@@FC@@AACC@@CBEBAE@A@C@@BG@@ACBA@KN@DFB@DA@A@CBABBDDF@DIJOBKAMAIEAA[GSB@A@AC@CBEBC@_BGBIHECEBC@A@C@AD@HBFEBGBCACDBFCBC@@HC@@B@B@D@BF@DFBFBJMB@DD@@BBB@BC@C@SACGA@ACCB@DBDBBBJGBA@@HDD@BCBA@BHBBF@B@B@BDVFD@JA@B@BEHILHNDHBDIBeJA@G@ABBDBDEHIHGDA@EBSHGBCBKHCDIJABCFABCPCJCL@DCL@NAF@FADER@P@HDHDHRFBBPDTDDBNDLHDBDBNJBBBBFHDFFF@BBDBFBBAH@B@HCLAPIPADABCH[VIDEFEBEBA@IDCBIDC@IDODCBEBKBOFEDGBA@CBCBMBKDA@EBACA@@DA@OBi@EBA@]HDJLCB@BBBDBBABADKBFN@DA@EB@BCDCAA@KDGBIBABIDCFBN@HGBEBCB@BE@EJCFIACAGAAAAHMA@BABGB@BBBAJAJGDAFBBFD@B@NEB@H@HGFBD@BFCB@FB@NB@D@FBJ@JBB@FBH@BBBB@FG@A@@BBXNBBLPB@GD@@U@AAAOCBEF@DBNDHB@B@BBBDB@BD@DAJFB@FDFBBBF@D@D@FBDBBBD@FDBB@V@L@BJNBBBBFALGCCBANEBADA@D@BB@FDDBBBBBBB@BB@@BDF@DB@DAB@BBBB@BBD@B@BB@EDAD@BDDKHCBGFGGA@ABDFABA@CAAEECGBACE@EBFJA@C@BFGDA@BFEBFLDHBDF@NE@BEB@BBBFABDABG@I@BD@DDHDDB@Z@BHF@BEB@DFFHE@OCA@ADAX@B@HBHEDBDDBBD@LAF@DCHAFCDA@ABAFCHEHKJEBA@A@E@@DEDGAEBCB@DA@EFGHEHADIH@J@BAJKBQDA@KDEBKBSFEFCDKJCH@BCL@H@DAFBB@D@F@N@B@HBB@DBFBDBJI@QJA@IAIJ@DAH@BDHBBDFDHAFBFH@BDBFDH@DELADAD@DJTFH@J@J@H@FBH@HBFBDBF@DBF@NBD@DAB@JAFAFEH@BEJCJGHCDEBE@C@@E@AECCAEBC@@DABK@AAKBC@G@IAG@EBC@CEG@A@AFGDADAICBAB@BDD@B@BC@@B@BCDCAGB@F@DAF@D@DBBBDFD@BBBDBDFDF@BBF@BBB@BBB@B@B@BBFBD@B@H@B@DAR@H@F@DRA@B@DE@BBBDIBDHBDDDBDDFB@@BDF@LBBBD@BFL@DD@J@FBB@BDBDB@DD@BJ@@LF@BDB@FABB@N@BDDH@H@BJZD@HB@@DDFBAJBB@J@FA@CFAAKFBHDBBBDDJJH@BDAH@BA@ADCBAD@B@@ABAB@BABABA@ABA@A@A@ABA@ABAD@FADCB@DAF@B@B@D@BABABCBAD@B@@B@B@BD@BAB@B@@AB@B@B@B@B@B@B@B@B@BAB@B@BAB@B@B@B@B@BAB@@A@A@A@AB@@ADADABA@EBABADAB@DA@A@A@A@A@CB@BADAB@BA@A@ADCBAB@@AB@BAB@@AD@@AB@B@BAB@B@B@B@B@B@B@B@@A@AB@B@B@B@BA@BB@@B@BB@B@B@B@B@B@B@BAB@B@B@BB@A@A@AB@B@B@B@B@@AB@B@D@D@F@D@HAD@B@B@D@BBBBD@B@D@BAD@BA@AB@B@B@D@D@DBB@BAB@FAB@F@D@BAB@B@B@BAB@B@BAD@@AB@@AD@BAB@BBBBBBB@B@B@B@B@@BB@B@B@@BB@B@@BB@B@B@B@@B@B@B@BB@BBB@B@DF@DEAEJCFAH@BB@@LABADA@C@@FC@C@A@@BA@C@@AA@@AA@BA@AC@BAIA@AA@@BA@@DC@@B@BDB@AF@CJADA@AACCCAE@GACAAB@DB@ABDB@DDABB@B@DBF@BBBB@H@CFADCJGAAFI@@DA@A@@BB@@BC@@BEB@B@B@D@F@H@DA@@BD@D@@AA@@AD@B@H@@AB@P@B@BCD@@AA@@A@ABCB@@AAAA@@EBA@EF@JBBEDBLBFBAD@B@FC@A@AF@BD@AFC@@BADHBR@F@B@@DL@@A@AJB@D@DH@@DB@@BF@@BB@B@B@B@B@@ABB@BA@@BABD@BBAHABABA@@DBBABC@@DA@AFD@@AJ@H@@AB@FB@ABBD@B@@EB@F@@AD@@BJBFAD@B@B@BB@B@BAD@BB@@B@B@DD@@D@BB@B@@BAB@BB@F@HB@B@BABB@B@B@@BABB@B@BBB@B@D@B@AB@B@BADA@C@A@C@@F@BBBB@@BB@@B@B@BA@@DAB@BB@B@AFFB@DFB@DB@D@@CD@@AD@B@@ADAF@BA@B@FB@AFABFBABDBBE@A@AC@BEB@B@F@@BB@DBD@ABHB@BB@HB@BJBABB@@DABD@@BA@ADDB@ADBAB@BA@@DC@@HF@@BB@TA@HF@BAD@D@@AB@BCB@BBBBBC@@@AD@@ADBA@HBAFD@B@@B@BB@J@@A@A@C@ADAB@B@BIF@B@@MF@B@@A@A@A@CB@D@@AD@@AF@@ANB@DB@@BADF@@CHB@BBEF@BEFBD@B@B@@AB@@BFB@BABB@DBD@@BB@F@J@@CHAJAB@@AB@@BB@BEB@@BB@@BF@B@@CDB@BFBFKD@DGB@BCB@@AB@B@F@D@B@HB@BFBBAB@B@ABFBB@@BB@D@@DAF@CA@@AAFC@@BABEB@DAB@ACB@AA@ABB@AB@BCBA@ABA@C@@BC@ABA@@BD@AD@BA@CH@FJB@EFBBA@AB@BBB@B@@BD@@BB@@BL@@DFBDCB@D@BED@@CJ@@A@AF@@BF@@DBBFABBDAB@D@BAFAFCB@BABAB@BCFCDA@CHA@ABIFE@EB@B@D@F@@BBB@BJ@@BA@@LFACJB@ADADF@DBD@B@@AJBADHBBAHBDBFICABADC@A@AA@E@DIA@CBA@CA@DABD@@BA@A@@BHBABB@ADGC@ACA@BEA@ABAF@BAAA@BA@@AA@@AD@@AD@@AB@@AEAADAA@AABAAA@@BA@@BA@BEA@@A@EB@BEABA@BCBAB@DA@A@AB@B@@ABABA@ADB@CFCC@C@BEA@@A@AA@CAA@ECA@A@AAA@BAAAB@BAA@A@C@BACAB@GEBGE@ACA@@CA@BGFB@ED@BAD@BE@AB@BC@EH@BKDABAB@F@JBB@@AH@AF@BFDBCFKEBBKDM@ABAA@@AC@IAEAC@DQCB@CE@@AJ@@C@AB@BABGA@BC@A@AFAA@@IA@A@A@FAA@A@AAABABC@A@@CC@@CIAEAGAA@BCE@G@@AAAABC@@A@ABAE@@ADAE@"],["@@AA@BB@"],["@@B@AA@B"],["@@DAC@@B"],["@@AHB@@G"],["@@ADB@@C"],["@@@ACBD@"],["@@ABDBABABA@@BA@@FA@A@@B@B@B@DA@EAC@ADA@@BBBB@B@AF@BDBFBDD@A@ADEB@DA@BB@BBABA@BB@BB@B@@BDBB@BBB@CFABAB@BABFFDDFBJ@D@F@J@FCBAD@B@@AB@B@B@BB@B@BA@@B@B@BAB@BB@DBB@B@BA@B@B@BAB@BA@ABA@A@C@GBC@ABA@A@AB@BA@@BB@ABAF@BD@F@B@D@@DA@ABC@@BGFEDCBAB@BA@@B@BBD@B@B@DAD@B@BAD@D@FAD@DCFCFABCDADABGDEB@BAAA@@AA@A@@AA@A@C@AA@C@CBCBCDA@ADE@CAACAA@GBCBEDCBAFGHEDCBE@C@@A@A@AA@@BA@A@A@A@@AA@A@A@ABA@A@ABA@@B@B@BC@A@ABC@C@AB@B@BAB@B@BA@@BA@@B@BA@@B@BA@A@A@A@A@A@CBABIJA@@AA@A@@BABEFEHADAB@BEBABC@C@EA@BAB@BA@A@A@@B@B@B@B@DAB@B@BA@A@A@A@@A@A@A@A@AA@A@A@A@@A@A@A@A@A@A@AC@A@A@ABABA@A@ABA@ABIFCDADAD@L@F@DAH@BAFABBB@F@B@D@B@B@H@H@B@D@D@BBB@B@B@BAB@F@B@D@HCDGBEDIBKDABCDCBAB@B@D@B@DBDBDDBDBBBDF@HBDBD@BDDJJ@BBB@D@D@F@FCDADABABADBDBBBBBDBDBF@D@B@BBBB@@D@B@FB@@BB@BBB@B@B@B@B@B@B@B@B@B@ACHCB@DAHABBDDH@HA@BBB@A@AB@D@@CJ@@DDA@BA@@B@B@F@D@B@BD@@B@B@B@F@BB@DBB@B@B@@BD@B@@FB@B@B@B@B@F@B@B@B@B@B@B@@BB@B@B@B@BB@B@BFAJCCCBAB@B@B@B@BABABADCBABCF@B@B@B@B@BBBBB@BBBBB@@BBAB@B@B@B@B@BBB@B@B@BABA@B@BB@HBF@D@@BB@BB@BB@B@@BB@BBB@B@B@B@D@B@@CBCBB@A@AB@@A@A@AB@BB@BD@FB@BB@@B@B@BD@AB@BB@BCB@AD@B@BB@B@DEB@D@@AB@@ADBB@@CE@@AF@AA@AB@B@BB@BB@B@BC@CB@@EB@DBBBBBB@FDBBFDB@DDD@B@B@@EBABBB@D@BCBCB@@AC@@E@AAA@ABAB@@ABBDBB@FBB@B@B@D@F@B@B@DAB@BAB@DABABAB@BAD@@A@CJBD@F@B@@B@BF@@A@AF@B@@BD@@BB@@CBAB@D@@BAFB@D@B@B@ADAFBBB@DBBBBBB@BBBBBD@BBBBBDBB@B@BBBAD@HBB@@BD@@BB@@DA@A@@F@BBBBAB@@B@BB@B@B@BAD@BB@BB@B@B@ABB@B@B@FBB@@BAB@DD@D@B@B@DBB@D@@GD@@BB@@FD@@B@D@B@DH@P@BDDAB@@BFAAA@AB@BAB@BAB@B@B@B@B@B@B@@BB@@AB@B@@AB@@BB@@BB@@AB@FCB@BAB@@A@AB@@AB@FAB@FAB@B@D@B@DDB@D@F@BBDBB@DBB@B@BBDD@DBD@BABDAB@FA@BFCD@DABB@ABAB@@BBA@AB@BA@BBAD@@AB@FD@FB@B@@B@BABEB@BABB@@BB@BBBB@B@BBAB@B@BA@AB@AA@A@ABA@ABA@C@ABAB@@ABAB@B@B@DAACBAB@@B@BB@B@DBB@B@@B@B@BB@BB@B@BBBA@E@A@@D@BB@DDBBB@B@DA@AB@BA@A@CBA@AB@@ABAB@BAB@BA@ABCDA@AAAA@C@@AA@ABA@A@A@A@AAA@@BCBCAAAA@A@A@A@@BA@A@A@ABA@A@ABA@A@A@AAB@AC@A@A@AEBAAA@ABA@ABAA@AAA@A@ABCBA@AA@@ADABABA@ADCA@@A@AA@@C@A@A@A@A@A@C@A@A@ABA@C@C@A@CBA@AB@D@BABA@C@A@AAA@AB@BA@A@ABA@AAAB@BBBA@AAA@A@A@A@AA@@CBA@AB@AA@AB@@C@AB@AEA@@A@AC@@AC@BEE@@IA@@CC@@ACAA@G@A@AAA@BC@GAA@AD@@AAE@AA@CG@AC@A@@BAFA@E@A@A@IFA@@ADADA@ABAACBA@A@ABA@ACEA@C@CAA@ECA@AAAAAAAACBABABACB@@ABAB@B@B@FCFGBA@AAAAAA@EDA@A@A@EE@A@ADE@CBABAAAC@GAAAC@E@A@@A@AH@D@@AB@@ABA@C@CBA@AD@B@H@B@B@B@B@D@BA@A@CACCAICAAA@@AAA@CBAFAFEDCDAA@@AAA@AA@@AAA@A@A@AAAAA@AA@@A@ABAB@BBB@@BB@@BB@B@B@DABAB@@A@A@AB@@AB@B@B@B@@BBB@B@B@BB@DADA@A@AOI@ADAD@BAB@D@BBBB@DBBB@B@DA@A@AAC@ABAB@D@@BB@BDB@B@BAFGB@BAB@D@BBB@@BBAB@B@FAFAF@B@@EB@@AB@B@FBF@DABAHCB@B@B@@FBBB@B@DAB@B@B@@BBB@DBBD@B@D@BBDAB@FE@A@ABADE@ABADC@ABABCB@@AA@@AC@ABAA@A@ACC@ADA@AA@AAA@A@@ABABADBB@@ABCA@ODGBMBC@C@GACAA@AACCGA@FKDC@A@A@AAA@AFA@A@ICADA@AAA@A@A@E@BEDE@CA@A@AAADIAE@C@@AG@K@@AA@E@@IE@CAEFAB@CA@@CA@@CJQA@AAEBBC@EA@BKHB@BB@B@B@BA@ADFHBBEF@@ABAF@@C@A@A@C@ABA@A@A@EDA@AB@BABAHADABABAB@BADCB@B@@CBAFCFEAA@AECG@@AEB@A@ACEC@C@C@CE@AGBEACBEAC@CACAA@CBAAA@AA@A@ABCBCDC@CBAAAA@ABABA@A@A@@ABAMAACB@@AB@@ACCFACEAC@AJ@@AF@@AHA@ABABB@FDA@A@ABCG@@AA@AABGDB@BF@@ABGC@@G@AB@@ABAB@AEAA@EBI@AA@BCE@BEAABABG@C@ABCC@C@@GC@@A@A@AA@A@A@A@A@@A@A@AA@@A@AB@@AB@@A@AB@@BB@@AB@@A@AA@@AB@@A@A@A@AB@BBB@@AB@B@B@@GBAB@B@B@@AB@B@B@B@@ABA@AA@A@A@A@@A@AA@@A@A@A@AA@A@A@A@A@@AA@A@A@A@A@A@A@A@A@A@A@@AA@@A@AA@@AAAAAA@A@A@@AAAB@BABAB@@AA@A@@AB@@AC@AAA@A@C@BAAAE@A@C@CCC@@AGDC@IDAA@ABA@AD@@AA@A@A@A@ABA@@B@BCAC@@B@BA@@BA@@AABC@@B@B@BA@CBA@@A@A@AAB@B@BC@C@A@@B@B@BA@A@A@BBMDKDKFGDIBMDIDIDIBE@GBIBEBIDC@GBEBIBC@A@@A@AA@A@A@A@@AA@@A@A@AA@@BA@A@@AA@@A@AC@A@@A@AA@A@A@C@EAC@@AA@A@A@A@@AA@BABAC@@BA@A@A@AAA@A@@AA@A@A@A@AAA@AAA@@BA@A@@BABB@B@@D@D@D@B@BA@ABABA@A@AAACA@CA@AA@@AA@@BA@ADCDADAB@DAB@B@BAD@B@B@B@BBDBFC@@BA@A@ABA@CBA@A@@BA@A@@B@B@B@BABB@@BDBD@B@BBA@@BABA@@BABA@ABAD@BABBB@DA@BB@BA@@B@BA@@BB@B@@BBB@B@BBB@BB@@BBBB@BA@A@AB@B@@DCJA@A@A@A@A@C@A@A@A@A@A@A@@AAAA@@AA@ABA@@BABA@G@A@A@A@C@A@A@A@A@A@A@@A@A@A@A@A@A@ABAB@BA@AA@A@ABA@A@A@A@@AB@@ACA@A@AB@@A@A@A@AA@A@A@A@@AE@ADC@@BAAE@GAA@A@@BA@CAB@@AA@CFB@BBFBADDBCD@B@BA@ABA@A@A@@BA@DBAF@BA@@B@BBD@B@BAB@BB@ADC@CDB@BB@BBB@DB@B@@DJ@B@B@B@@BB@B@B@D@@B@BD@B@ABBBB@B@B@BBB@B@B@B@BBJA@D@B@DG@@DA@A@@FB@DBB@ADA@"],["@@ABB@@A"],["@@BB@AA@"],["@@CBB@BA"]],"encodeOffsets":[[[119589,40415]],[[119615,40399]],[[119620,40450]],[[119239,40427]],[[119450,40551]],[[119526,40544]],[[119523,40551]],[[119719,40698]],[[119715,41014]],[[119915,41036]],[[119971,41040]]]}}],"UTF8Encoding":true});}));