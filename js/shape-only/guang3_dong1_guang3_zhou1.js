(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('广州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"广州"},"geometry":{"type":"Polygon","coordinates":["@@ABA@GAE@C@M@IAOAIBE@G@@BE@CBGHCDGFGFA@GDE@ABCBA@CBCDAFADAD@BBB@BBB@BCD@BB@F@B@B@BBB@B@FD@BFB@BD@BBRAD@B@D@B@@BBBA@@BBBDBBBAB@BBB@B@BA@@BB@@BD@B@@B@D@BAB@AC@AAA@EBAF@FAD@BA@A@CB@BBBBAB@@B@BABAB@B@BB@@B@DADH@D@BDBJ@DBF@B@D@J@BA@@BE@A@C@C@A@G@A@A@A@A@C@A@EDCD@B@B@F@H@DBBDFBDDDDB@BBBBBB@HDLD@BBDBB@BAF@D@B@B@D@B@BBB@DADADADADAB@BA@ADABCBCBABABABADA@ABAD@BG@E@ABED@BEDBH@FAHAF@B@BD@@BB@@FBDBF@B@DBF@B@DAB@DAF@D@BAF@BAD@DCFABCDABC@A@C@A@ABA@AB@B@DAB@DA@@BA@A@C@C@A@A@ABABA@@BAD@B@D@BB@@B@DABABEFC@EBA@KHKNEMACS@ABAFKMAA@AF@@A@ABA@A@AACEGMBC@A@C@A@AACAAA@AA@AAA@@AA@A@C@@AC@E@C@C@A@A@@A@A@ABCBABABC@A@A@CBA@ABABA@ABABCBA@ABC@CAA@C@A@A@CAAA@AAA@A@C@AAA@C@A@@BA@A@ABABC@ABAAA@C@A@A@A@C@A@CBA@AAA@AAE@@DFFFHBHB@DB@DAB@BA@AB@BBH@FADCDABE@EDGHCDBBB@@BABAFADA@A@A@@B@F@FBDBH@FBB@BFB@DADCBCBE@@CA@CBEFABBFDHBDDDDDFDBFFDDFFH@B@BABABABABC@A@C@A@AAAAA@CEA@AEEEEACAAEA@CB@DABAD@D@F@BA@ABA@A@AAAAA@ABA@ABA@ABA@A@A@ABA@AAC@A@C@A@A@ABAB@B@B@B@D@D@D@B@BA@@BAB@BA@@BA@A@CDBBDBDDA@ABCB@DBBDBD@@B@B@BA@A@ABB@BD@BB@D@B@@B@BABADAB@B@B@BB@DBB@@BBB@BB@BAB@@BB@@BBB@BB@B@B@B@B@BBABA@AB@BABC@CH@BADC@ABABAD@B@BAB@DAB@DA@@BA@@BA@AB@B@B@BB@@BLD@D@FABABCCC@EAA@AECECCC@C@CCCCCCACE@A@@BAF@FBDBFBF@HDBDBDAB@B@DDDD@FB@BDBJAD@DD@DB@BB@B@HAB@DADBDBDB@BBCDABAHAF@F@BBHBFEBABBEF@BJ@@BBBCB@BPHDCBARB@BBDH@LGB@B@FBFBHHBD@BBB@BBBBBB@B@@BB@B@B@@BB@BAB@@BH@BHHHFDHADAHHH@DAD@DDHBDANHDFEHABBBB@BBFIHDFFDBHALCF@LAACFA@AJCFDDB@D@B@BFBB@FAHHDCALDF@A@I@CHBLBTBDBBB@BABEHDDFBBJB@DBBBB@HHBDHADF@FCDGFBDBBB@@BBBABADCBCBABABABABBHBFBHAF@BDBDDDBDBDDDBB@D@DAB@BBD@@BB@F@@J@FBBF@DAFCDAF@DEBAB@BD@D@D@BCF@BBBGPDBLIDBBBDDB@BBB@BBD@B@D@B@B@DBB@BB@BBBBBDBFBDBBCBCBEB@@AB@@B@B@BBBBBDBBBB@BBBBB@BBBDBB@BBF@FBDBF@BB@@BBB@BB@@B@BA@A@ABC@CBA@CBA@@B@B@BB@BBB@D@D@D@B@DBB@D@DAD@BAB@DAB@D@B@FBH@DAB@DBB@BB@B@B@B@B@DAD@B@DB@B@B@B@B@B@BBB@BBBD@F@DB@@BBBB@B@BBD@B@B@B@B@BBBB@B@B@DBB@B@BBBBBBDBB@B@B@B@B@BBBBDBFDDBF@BBF@DBD@BBDBBBBBBFAF@DFB@@B@B@B@B@H@FBFBHBDBAB@BAB@B@B@D@JAHBHC@ABA@ABAB@FADBF@F@D@B@D@D@BBB@BBBBB@B@B@BA@ABABAB@FDB@FDB@F@B@BADA@CIAFCB@BEAAFAB@DCBAHCB@B@B@FABAFADCCEBA@ADABCBA@GACHCBAHEHAFFDAFAB@B@B@HED@HBDBH@FCH@DBDDFBB@B@BABBB@B@DBDBDDFBDBFDFBBBBBCDI@HFJBDAD@B@D@B@B@FAJI@A@GD@DABABA@A@AAACCBGJDB@BADABABABAB@@AF@D@D@@I@AHCBAB@BAB@B@BA@ABAB@@B@DBBDFB@BBDD@BRLBBABCDAFBBBBBBJDBBFF@DAFFDFBB@B@B@D@BAD@DFA@ADEDE@CF@JBBB@DB@DAD@D@HFFD@@BABABGJHLDJ@BCBED@BAFAD@B@BAB@BADAB@BABA@@BA@ABABC@GLAFHDDDCDE@@DB@HANLLJ@BADBDBFFB@DBFBD@BB@DDDBFB@BJBDA@A@ABBFBDAF@@ADCDAHBRABABAFB@JFPF@FEBCB@F@FABCBCHAHFFDDBF@DD@DCBADCJAFBBDDBLCHELGDBFDDBDLGBDB@D@DEAGB@FB@FB@D@BCDAF@FDFDB@DADCDC@BD@HD@BF@BDFHBDDBDJB@BBBBD@FHFL@BFN@B@HDBDBDBBF@BHBHAD@F@D@DBBADC@ABBB@D@BBDB@BBBBBB@DBDBFBDBB@BBB@BBBBBBBBBBDBDBDBD@FBD@F@DBDBFBDBDD@BB@BBBBDBR@DBD@D@BC@CDADADABBDD@DDDBB@BDCBCH@DBD@D@DEBCFAHBHDFBJDFAB@B@DBD@B@@C@ADABA@AD@DDH@LHNBDADADBHFDACEHBL@FBBCDCFDD@HDHAJ@FFB@B@BBB@@ABCBABBDCB@@ABAB@BA@CB@@BB@D@B@DAB@B@B@BABAD@@AB@@ABA@AAABA@ACC@C@C@CBEDADA@G@A@A@AB@BC@AB@BCB@B@BCAA@CB@@C@C@A@AACCC@CBCB@FABA@ABA@CBCBCAA@CDCBAAABADEBAB@BADCACC@@AAGC@@E@A@G@A@CGAECICCECE@CAGDIJAJGGEKCAEBCDADCJEPADEFK@ABACBUCEAGACCAACC@EIEECCIAEC@CHCD@DAFCAC@EBA@@B@BBJJDBFBFCBEAECAEGGCAACAAAACAAAA@CAA@A@CAA@C@C@A@C@C@CACAAA@A@C@C@C@C@A@CAA@AAAAGC@A@GBICA@CEECEBGFABA@A@C@C@A@A@A@@A@AA@@ECAEBAAIAECG@A@@AA@AEACACEIEAK@C@A@CG@G@CAKA@EEEKAAAACACACAAAC@CAA@CAA@C@C@A@C@EACA[AAAGGBAPG@EQDACAE@GCIKAQBK@A@@CBA@CDCB@B@B@BAB@B@@AB@@AAAAA@A@AAA@AAA@AA@A@AAA@A@A@A@AAAA@A@AAAAC@A@AB@BA@A@ABABAB@B@B@BBD@B@F@D@F@@AB@@A@AAA@A@AB@BAB@@AD@B@B@BBB@B@B@FAFABABAB@DABAD@BADABA@C@CBA@A@AAAACAA@CAEBA@ABABAD@@AB@@A@AA@AACAAAA@AA@AAAAA@CACAA@A@A@A@A@AB@B@BAD@B@BABADA@ABA@ABA@A@A@A@AB@@AB@@AB@@A@A@A@A@A@ABA@ABA@A@A@ABA@ABABABABAD@DAB@D@B@DAB@DABABABCAC@A@A@A@ABA@ABABCBAJABCBCB@DABAB@BAB@@ABABA@A@ABA@AB@BABAB@D@B@B@B@D@D@B@@AFCDGDCF@N@LA@AB@AACIEEAAAAA@A@A@CBABA@AB@A@ABCBADCDAD@D@B@DBB@B@DBF@DAD@B@D@DDD@B@B@B@BADAD@B@D@DBBAB@BABAHGCAEGAACAGAK@E@KDA@@AAA@A@A@CAC@CBA@A@A@AB@@A@A@ACMBEBADCBABABABA@ABAD@B@D@D@D@JCJBJFBAB@BA@C@A@AAA@AAAA@@AAA@ABA@ABA@A@AB@AA@AA@@AAA@A@A@A@ABABABABABAD@BCDADADABABABA@A@A@A@AAA@AA@@AA@@AAAA@@AA@A@A@CCEACCEAAAACBEDEDCBGDEBEBIDELGDCB@@C@AAAAACEAAACCCG@@AAAA@A@A@ABA@@A@ABAB@BABAB@@C@A@IFE@ABEHGAG@C@C@ABEA@ABA@A@C@C@GDEBG@AB@FCBMHKDCDCBBHDLAD@HA@@B@BA@ABCBC@ABCBA@C@A@IHEFGAIAEAGBKBKBA@A@@BC@ABABABC@A@CAC@AAA@AAAA@AAA@CAAAA@AAAAA@A@A@A@A@ABA@ADABC@A@CB@@AB@B@B@B@@AA@@A@AAAAA@A@I@ACEACAI@A@AAGCA@CFE@AAGAAAA@AAA@AAA@AAA@ACA@AAAA@AAAAA@@AAAAA@A@AB@B@@AB@B@B@BABAB@BA@AB@BAB@BAD@BAB@BABA@AAGACCAAIFGDMB@@CFIDEFABEAC@EAAI@GBAIAEGC@AAAAA@AAA@A@A@A@AA@@A@A@A@AB@@A@C@ADGDGHAJBHC@ECICAACKCC@EBG@ABI@C@CAAAAAACCCA@I@EACEAEEAECAA@AAA@A@ABEAAAEACAABCCE@A@EA@@EC@@MABEDIBCBGDABEBA@ABKDGBMBIAOAGBC@IDEBE@IAC@KAI@E@GFEFKHEDCBC@E@E@IACAA@GACAIEECCAGCGEAAAAGEGEKCG@GAG@GEICA@@FBD@BABC@A@A@AAA@A@ABA@AB@AA@AAAAA@AAECAA@ABABAB@AA@AAAACCAG@E@IAIBM@K@IEAAACAACCCAECGCEAEC]EA@AAC@KCE@E@GECAACEMAA@CAAAC@ACEAACCMICGGGEKAG@G@A@E@IBM@EBK@AB@BQBIDK@CJWHKFIBABEHUHSBAJWPaNOHM@G@G@ECMCQ@O@A@GHKFKNSZ[TUDCFEBAFERUDABABCJIVYHGHITWHGNQLMNQDGVsTmTiV§RH_EMSKmK[ASAiBSBCLUveKLIFOJCBK@A@EBEDCBIHCFAAEDEEGFEE@BEHGLADCBEL@BKRCFEJIPGN@B@BD@D@FBBRUPMJKHGFKHIFABEBMJQNABKHGFABMLBBFNeLCBMBCBG@E@K@EBKDIDMHCBA@ED@BGDIFSLCDIFCBGHGDABCF@BCHCJAJ@DB@DAHBFBBBDBDBDCBABBBBFBB@DDB@JJBBBBDBBD@BCBEBABABABAB@BEDCBCDC@ABA@A@CAC@A@A@ABABC@KCC@A@AA@CEAA@@AEAAF@BA@A@CAE@AAA@EFABEDG@CBKDGDCDAD@DAJ@XI@ABAB@BCDAFGA@DB@AFJFCHAHDBB@@DABUNABABKHEBCH@F@BBBBBD@D@D@BB@D@BAD@D@D@F@LAF@BAH@BB@BBDBB@@ABABBBDJBFDCHADCFABAB@BCBCDADC@CB@BA@EBCBA@ABCDA@CACCA@BHABABCDEDEBA@@BCBEFA@CF@F@D@BBBBD@B@B@D@D@DDDBBB@BBBBB@@BADA@IBABAF@D@D@BBDBB@BB@B@BB@BABAH@DJABAB@DA@BBDBBABA@CAAB@BAPCJAF@DDF"],"encodeOffsets":[[115975,23597]]}}],"UTF8Encoding":true});}));