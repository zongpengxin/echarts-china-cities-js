(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('吴忠', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"吴忠"},"geometry":{"type":"Polygon","coordinates":["@@DC@ABCBADALADADADADABABABADEBC@ABE@ABCBCBA@C@AFGJBH@UTtCD@@E@C@A@C@CAG@E@ABMK@C@@A@CBEBAHA@AB@@AAAC@C@@A@ABAB@BAD@BA@AB@@CA@BA@ABAAGBAB@@C@ABEFDDBPHB@DAPI@A@A@ABCDE@CBAB@DADCFENE@AB@EGAAGIAAACC@I@C@C@JGBCDCHGB@TBD@R@B@B@DAL@@A@A@A@A@A@ABC@A@C@A@E@ED@B@D@B@N@D@BAB@BA@A@A@EBa@E@CBA@ABAB@BAB@B@AAAKAAQOAAAEAAA@CBA@EAA@C@OFA@CAAAKACAA@G@Q@K@EAC@A@A@E@A@@AC@BAB@@AA@EA@ABABACA@CAAAC@AAAACBADCB@B@B@BA@AAA@AA@AA@A@AF@@AB@@A@AC@AAAA@AB@@A@AB@BEDCB@BAFE@A@CBAD@@AFADABAB@BA@A@EVGTAJALBDCN@AKh]bQBM\\A¤HtJEleXLVGPWjçzHOjAWJZÆ]~E|@@F@jAJC^CnC\\D\\@HBJBBFB\\FZHTFLF^NNR`dFFJNFJHRDJDHDJLTLb@ZiBgFUOMRIL@HAZAHCpBRCJDNBNS@cASIA@YbKrBbBFBBBRDH^tBBB@BBB@KNAF@BBhTFBDDBB@Biq@DAP@R@BBHBDFNVNHFD@DAD@FAD@FAFAD@D@BAF@F@DAFAFADADAFAFADAFAH@DAD@H@F@FABAD@DADADAFADAFAF@FAFAD@FAFAFAD@FAFADAF@FAD@FAF@D@DAB@B@B@D@BAB@B@B@B@B@B@BAD@B@B@DAB@D@B@BAB@B@B@B@BAB@B@B@B@B@BAB@B@B@B@BAB@D@B@D@BAB@B@B@B@D@B@BB@B@BBB@B@BBBB@B@B@B@B@B@@AB@@BB@B@B@B@B@B@B@B@BAB@BABAB@B@BAB@B@BAB@B@D@B@B@B@D@BBB@@BB@BB@BB@BBBB@BB@@BB@@BB@BB@BBB@BBBB@BBBBB@BBB@B@BABAB@@AB@BABAB@B@BABAB@BAB@B@BAB@B@BB@BB@@BBBBBB@B@B@B@B@@AB@BAB@B@B@B@BBB@B@B@BBB@BAB@B@B@F@D@B@D@B@BBD@BBBBBBA@@B@B@B@B@BBB@B@BBB@BBBDDBBDBBDBBBDDDBBDBD@DABABCBABAFAF@F@DAD@F@DAD@DAD@D@D@D@DBFBFDD@DCDABCBADCFCBCBCDABADADCBCDADADAD@DAD@DAF@DABC@ADCBCBCDCBCDADCBABADADADAD@FABAFAF@DAF@B@DAB@B@DAF@D@FCBADAB@DADAD@FADBDAD@F@D@D@D@F@BADAD@DAD@FABAFADADADADADABCBA@CBABCBABCDABCBABCDADABCDABADADADABC@C@ABEBCBADADABCDAFCDADCBADABCDABABCBABCBABCBCBCBABABCBABCBADAD@DAD@DAF@F@D@F@DAD@D@DAF@BAFABADABCBA@A@CHC@AB@BAAACCS]KO@AIOIUAC@ABAHEFEDAB@NCZENCB@BBB@FFDFDDH@XFB@d@HELMf]qFCDANCVE\\GJARE\\GLAPCDAHEFCHCBAB@B@DADCHED]KYGWG]KSggK@KDCHCFEDADCFC@AAC@EACBCBBD@F@BABC@C@CCEEAAA@@ABCFCDAD@BBB@D@D@B@@A@A@CG@E@MGKEI@I@I@I@EAI@GAM@KAIAoMIKG]BM@A@ABGCWCMGOMMQKGEEAIAI@GAGAKAIAGAI@EBIFKHIBG@MAM@CACEAEDEBGDI@CzIF@DA@EAUCCGB_FEAYYA@AAACGGGECCECCCEAAA@CDE@AGEGCKCCCeBAAAAAAE@IBCBCBCBA@A@A@DCFEBC\\eDAJAJAnLFBBAFGBGAAACACAGAGCE@E@ACKAG@CCGCGACECCCAECMACGGGGKGGEkYGCGCIAKCGGEECG@G@K@S@EBI@I@IAGAGAIMyESKWAEEI@E@GBCBGBOAIEICEAC@GBADG@GHWL[FKLILEBCJCBA@A@AB@@BB@@A@A@ABAB@@A@AB@BAB@@AB@@AA@@ABAB@@AB@B@@AAA@AB@@A@AB@@ABB@A@A@A@AB@B@@A@A@ABA@A@AB@BAA@@A@A@ABA@AA@@A@AB@@A@A@A@A@AAAE@SFGBECICIAKAEC@C@EJGPGHCBABABADCDADAHEDCDADADADABADCBAD@B@BBB@@A@A@A@AB@BAB@@A@AA@A@BAB@B@@AB@B@@AB@@A@AB@@A@A@AB@BA@A@A@A@A@AB@B@@BBAAA@AB@B@@A@AAAB@@AB@B@@AB@@AA@@A@AB@B@@AA@@AB@@ABA@A@A@ABAA@@AA@BAB@B@@AB@AAA@A@AA@ABA@AB@@AAAA@AA@AAADAB@AA@AA@A@@AB@BAAAA@@AB@B@@AA@C@BCB@@A@AA@AAA@A@@AB@@A@A@AA@@A@ABAAAA@@AA@AAA@@AA@@AB@AAAAAA@AAA@AA@@AAA@AA@AAA@@AABAA@AA@@A@A@AA@A@AA@BA@@ABA@A@AAA@AAA@AA@AAAA@AAB@BA@@BAB@BAB@BA@@BA@@BA@@BA@ABABA@@BA@@BA@@AA@ABABA@@BA@@B@B@BA@@BA@@BABA@@BA@@B@BA@@BAB@AA@@BA@@BA@ABA@@AC@A@AAAA@AB@@AB@BABA@ABE@C@AA@A@C@A@AA@AA@@AA@@AD@DAB@@BB@BBB@B@B@@A@AC@AAA@@ABE@CBADCBABAD@BABA@AA@A@ABABEBA@CAA@ABCBA@C@GDGBIDEBCBC@A@CA@ACACEAAA@AAAAC@AAA@@B@B@BA@@BA@@BA@A@@B@BA@@BAB@BA@A@@BAB@BA@A@A@@B@BA@A@@BA@@AAB@BA@@BA@A@A@@B@BA@@BA@AB@BA@ABABABABAB@BA@A@@BA@A@@BA@@BABA@@BA@A@AB@AABABABABABA@ABA@AB@BA@@BA@@BA@AB@BA@@BA@@BABAAA@CAC@CACAA@E@C@A@EAC@EAE@C@A@GACAA@A@E@A@A@AAC@AAA@A@@ACAA@A@@AAAA@A@A@@AAAAAA@G@@AABA@A@AAA@A@A@@AC@AAA@@A@AA@AAAAAAAAAAA@AAAAA@A@A@@B@BABA@@BC@AB@B@BA@ABAB@BABA@C@ABC@ABABE@A@A@A@AAA@A@CAA@AAAAAAA@A@A@A@@BEBGBABCBAB@BA@AAA@A@A@ADCBCFA@@BA@@BA@A@A@A@ABABA@A@ACACCG@A@A@ABC@A@AB@BA@ABEBEBA@AAA@A@A@A@A@A@A@AA@@AA@@BAB@B@BA@ABABA@A@A@A@ABA@A@CBA@ABA@A@A@CCA@A@ABABABABABC@ABA@EBABA@A@AA@AA@CA@ABAB@@AF@BA@A@ABA@AB@BADAB@@AA@AACACBA@CBA@E@A@C@E@EBEBCBE@CBA@E@CBEB@BAB@D@B@B@BADABCDABCDEFCBEBABADA@A@CBCBCB@BA@ABC@AB@BABA@ABA@EBABA@C@C@C@ABC@CBCBCBABAAA@AAA@C@AA@A@C@AAACAA@CAA@AA@A@AB@BABAD@DADCDADAB@BBB@D@F@DA@A@A@ABABEBABAAAA@A@A@E@A@C@A@@A@C@C@A@CDADABA@CA@@AA@C@C@CBCAAAA@AACAAAAA@A@A@ABA@AAAC@A@A@ABEFGFCFGFIHA@ABA@A@CAA@C@C@AAC@C@C@ABA@CDCDGFIHEDABA@@A@AA@@BGFABC@ABAB@BCBCDADABADCBCBCBE@E@C@C@EDEDCBCBA@@BAB@BABABA@CBAAA@@BCBCBA@@AA@A@A@A@@AA@@AB@B@@ABAB@DCBAB@AA@AA@AAAAC@@B@B@BAB@B@BA@@AAAC@@CAC@EACAAC@@ABA@AAAAA@CBCDCBCBEDE@CACECCCCGAACACCCC@ACCBA@ABADABADADAAAAAAEAC@C@C@A@EA@ABA@ABEDCDCFABAHBBBB@BADABCBE@IAA@ABADBB@D@BA@@CAAA@ABKHAHBD@B@DBDBB@BA@AAA@E@A@A@E@CAC@C@ABABC@AAA@A@CAA@AAAAA@ABA@A@ABABEFABCDAF@BAAA@@AAACCA@AA@AAA@AACACACACCAAACAC@ABAD@DAHAHABCBCBAAA@AAC@EAE@CAECCACAA@AD@BADAFADC@A@CAABABABCBCBEBCBA@CBA@A@AAAA@ABA@ABA@AA@@BABABA@C@AAAACCBABABADEBEBGB@@C@ADGFE@EBABEBCDCBCDADE@CBCB@D@BAD@BABCDEDABCBC@ABCBCBA@C@C@A@AAA@ABA@A@A@A@AB@BC@A@A@ABAA@@A@CBA@ABABABA@CA@@CBCBABADADABA@C@C@CBAFCHCBA@A@AEECCACCAAACBABCBCBCBE@A@A@A@C@@A@ABABA@A@A@ABA@ABABABA@A@AAA@AAAA@@AAA@AACAG@ABABE@AAAAIA@@AA@@EBC@ABEBABA@AA@A@A@CBC@CAMCGAA@ABABAAA@A@A@@BA@A@A@A@A@E@ABA@A@CDEBABCBA@ABAB@AAA@AA@@AAAA@@AA@@C@A@E@C@A@ABABA@A@CBCAABABABC@AAAA@A@A@A@AAA@AAA@AACAAAA@A@A@C@ABCBCFADABCD@BBBB@D@B@B@BA@AB@B@BBB@@BB@@BA@ABCD@BGD@BABCDBB@B@BA@A@AB@BA@A@A@A@ABA@EFCB@BCDABCBCDAB@BAB@BAD@BAB@BCBCBC@ACAC@A@A@ABABABC@A@A@A@ABABABA@AFEBABC@CB@BA@ABABADA@A@AA@CAAC@AAC@A@AA@@A@ABCBAFADA@AB@@BB@B@DCBABA@AD@D@@AB@B@B@@AB@B@@B@BB@B@B@FAD@BADABADCBABA@CBAB@B@D@FAB@BAFAB@B@BA@ABAB@@CBABADCBC@E@AA@C@@AA@@AAA@A@ADCBE@A@AA@A@@BA@ABABA@@BA@A@@ABA@A@A@ABCDCDADC@AA@@AB@BA@ABABBBBBB@BB@@BB@B@BBB@@B@B@BBBB@BBDBB@B@BBD@BAB@BAB@BABABCB@DABABABA@AAAA@CBA@AACAAA@ABAB@BABA@ABABADA@A@A@AA@AAA@ABCBABA@BABA@A@AA@A@AAA@@AA@@AA@@AA@A@@BA@A@@AB@@AFCB@FCHAFAFAB@@A@AA@@AA@BA@ABA@AB@@AA@@A@C@CAC@A@A@A@CAAA@AAA@@ABAB@D@B@B@B@D@B@BBB@AA@A@AB@@A@A@AB@BADCFADABA@A@A@AABA@@AA@@A@A@ABAB@@A@AAA@AA@A@A@A@@AA@AAABABABA@@AA@@AB@@A@A@A@AA@A@A@A@AA@A@AB@@AB@BA@A@E@A@CAA@AA@AAA@@A@A@AA@A@@BA@@A@AB@AAA@@AB@BA@AA@A@@A@AB@@AB@AA@A@A@ABA@A@A@A@A@A@AA@@A@AA@@A@A@C@C@AA@AA@AAA@C@AA@A@A@A@A@A@AA@ADCBEBABA@AA@@CAEB@B@AA@A@ABAB@@ABA@AB@B@BABA@ABAB@D@DA@AB@@A@CAAA@A@ABABA@CBA@AAAAA@A@ABA@@BABCDCBABABCDABABCB@BA@@BA@AA@AAAA@@A@AAA@A@AA@@DEDABAB@BA@@B@BAB@BA@A@A@A@@BABABAB@BA@AB@B@B@BABA@C@A@A@AA@AAA@CAAAAA@A@ABC@CBCBA@A@A@@A@A@A@AAAAAAABA@ABC@A@ACAC@AA@BA@C@GFEBEBA@A@@AAA@A@A@AAAA@A@A@A@C@@AA@A@@BA@AA@CAC@AA@CBCBABA@@BABAA@A@E@AA@AAECCCCAAAA@ABA@A@AACA@AAAB@@ABA@AFC@A@AB@B@B@@AB@@ABE@ABA@ADEDGBA@CBAA@A@A@ABA@CBA@@AAA@A@AA@A@A@@AABADABA@A@@B@BA@@AA@ABA@AAA@A@@AA@A@@BA@@AC@A@CCIAGCAC@GBIDGBC@ABA@AAEAC@A@A@ABABABABCBC@ABE@A@AA@A@C@@A@ACM@K@CAAE@A@CAA@C@MECAEACCA@C@C@CBEACDABE@IBCBCA@BQLABADABABA@A@@A@A@A@E@AA@EAC@AAEACCCBA@C@C@CAA@AA@AA@@AA@C@C@C@IBGBC@CBC@AAC@A@@AA@@A@AB@BCBABA@AAACCAAAC@AAAA@A@A@CBA@CBC@C@C@C@AAAACACCCCA@AAC@GAA@GAGCEAIEE@E@GAG@E@CBEBCDADABKLKFABA@@BA@A@@AA@@A@AAA@AA@@EA@A@GBCBA@A@AJCR@BEDCDADABA@A@@A@ABABA@A@AAA@AA@A@ABA@ABA@A@A@AA@AA@@A@A@ABCA@EDA@A@A@AAAAAA@AFE@A@AA@ABA@ABA@A@ABABA@C@A@A@CBCBA@A@AAACAAAAA@GBA@A@CDA@A@A@CAACAA@A@C@A@A@E@A@A@A@C@E@I@CCDEDCBA@@BG@C@A@QGA@E@CBA@A@@AAAMIA@CACAABA@EBA@@B@DABABA@GAA@A@C@A@@BAB@B@B@D@B@BBB@DDF@BABABCBEDAB@B@BBDBBBBB@JBBBB@@B@H@D@BAB@BA@GDCDA@@BABABE@C@ABABAD@B@B@B@B@BADAD@BA@@BA@A@E@EAA@CACCCAA@A@AB@BA@@DAHADDDDBHBB@B@@B@D@B@B@BAB@BA@AB@BB@B@AFCDABC@CAABAB@FAD@D@B@B@B@F@DAD@DABABAB@B@B@DA@@B@BA@CBABABABA@MFCDCD@BCDGL@B@BA@ABA@ABABADAJA@BB@B@BEF@BAB@BA@CBA@@B@BBDAD@BBH@BDBBBA@A@A@A@@B@BA@@B@B@BCDBDDFA@CBA@A@ABAB@B@BB@BBBBB@@B@BABABA@IDA@@BA@@B@BABCBC@A@ABA@@BA@@BA@A@A@ABA@A@ABA@A@AAICABBBAFDF@BABBB@BDD@BA@@BA@A@A@A@A@AB@D@BB@@BB@D@D@BADAB@BBB@B@@B@B@BA@ADABCB@BA@E@A@ABA@ABABB@BBFBB@FFBB@B@BA@A@A@@AGAAAA@A@ABBB@BFBFBB@@BB@@B@BA@G@A@A@A@AAAAA@ABCDAB@B@B@BA@ABC@ABAAC@A@A@A@ABABABABCDEDA@ABA@A@A@A@C@@AC@EC@FBBBDBD@B@BA@AAC@CCCAAAIEC@AAA@A@ABBBB@BBBBBBB@CD@B@BDDBBB@FAD@@BBBABC@ABCBB@@BD@BBBAB@B@B@BB@D@BB@@BD@DBBBCDA@AB@BA@@BA@AAA@DC@AAAAAA@A@@BA@@BBBAB@B@BBD@BABA@@BCBNLK@GB@ACAA@A@ADABA@FD@BA@ABA@A@@A@AA@@AA@A@@B@B@D@BBBB@@B@FBBBBBDB@@BEBAB@BABABCDA@A@AA@AAAA@A@A@A@@BCD@B@B@B@BB@FAB@B@BBBBB@@B@BCDAAA@C@@B@BA@CBA@@B@BB@FD@BC@EAAAA@@BA@A@@EAA@AA@ABA@@BAB@BB@@BDBBB@BADA@GBC@EB@BBDCBE@C@AAADC@ABADDDABCAOCBCDEBG@AGAGCKCGBKCAACAC@A@BCAABABCBE@A@CBC@A@CCABA@CBAFA@CIAFGH@@A@EACCCBCBCB@CCA@A@A@ACEGA@AC@CCCEAKGBAHCBCACEEACAA@CDC@AA@A@E@C@C@CBCBEAA@A@CAAA@A@AFCDEB@@CA@CAIFEHA@A@AAAE@CBIBE@C@A@AAEAACAA@A@ABA@A@C@AC@CEGACC@ABAACCIGAAAACBAD@BAB@BCBABBDBBBDBBAFCFBBAFKHC@@B@D@BCDKLGFEBIDE@AAAEAAAAAACBC@AAAACAA@ADABIDGACBEBAAAA@ACAAAGGACAACAAAACAEABCBGD@B@BFD@BAD@DABADADCH@FBBAH@DAH@DAHFHFBB@BABAB@B@DFBDKHCD@B@DBBBBBDBFBDB@BBDB@BB@BBB@DBD@DD@BDBDFBBEDEFCBCBC@CBE@IDEF@B@J@B@BBAB@BBD@@AB@BAB@BCB@@BB@B@D@B@B@FCDABADAB@D@JCB@BBAB@BADBBBBDDDDDBFBJBB@@BBF@B@BBBDBBBB@B@B@BDDBHDHDDBDDBBFBDBBBBDD@FBFBFDFFDD@DDF@D@FABBBAD@DBBBB@BBBB@B@DBFDB@@BD@DBB@@BE@G@UV@F@FELADQPCLILEHCDDLa^_NSTKJCR@H@DHBCRSLcLUPUPaXG`]NCX@JAJGBIHONGAA@CBE@E@C@AAC@A@GBGBGDSJE@[ACAE@OBA@CBC@EDEB@BADAF@BA@@BABA@@BA@ABA@@BA@A@ABC@C@@BC@@DB@B@B@@AFBB@B@B@DAB@D@@BD@B@DBB@@BBB@BB@B@BBBABBB@F@D@FAB@B@D@DBB@B@D@B@BBDBD@@BBBDBDFBBFDDBBBBBBBBBBBFBBBB@B@BB@BB@@BB@BBBBBBBBB@BBBBDBBD@BDBBBBD@BB@@BDBHDHBB@@BB@DFB@FBD@BBLPFCHC@CG@CCDCDE@A\\sBA@MC@CCACBGECEEBCD@DCBABCBCFEFAHEFEJGFI@EH@F@B@F@F@D@D@B@JBHDH@F@HBHDFCHBHBJ@D@HJFD@BCBCD@B@BDFB@D@B@B@@B@BAD@DA@@BABA@A@A@A@E@AD@BBB@BADBBDCB@B@@BABABA@EDA@A@@B@B@B@BBBB@DB@BCDEDEBABA@A@A@ABABAB@B@FBDA@ABA@A@ADBBBF@B@BAB@BABCBABABAD@B@BB@@B@BADAB@DABA@CHABCDORBBBBB@FBDBF@D@DBF@B@D@BBF@B@B@BBDBD@B@DBB@B@BBD@B@BBBBFDDD@BJ@FBDBBBBBBDBF@DBBXAX@JAL@XA|EGD@`AB@BBHFBBDDHDDBBB@BBDLLOLAFIFE@AHEDA@@DG@GFID@AG@E@MJA@ABEBMHA@ECC@ABADMFEACBIFEDIDKFIHGHFLDN@BNAFAH@DAF@HAD@F@D@P@@FBDENEDGRDDRPxLB@@BLEBC@A@AB@B@D@DDBBB@B@B@BAD@B@@B@BBB@BBB@BBBB@CXZBLBLBFBD@XBJ@B@CDGNCDEFABCBCDCBA@CAIBEDAB@BD@NDHAH@F@FBB@HFDBF@BALGD@HDF@HDDFBDDBDB@DAF@BDDBD@D@DDBD@BBBDBBDBDBD@HBBF@BBD@JBDFBF@JCFADBDB@DBBDBJDBBJ@BDBDBD@FAFGFAFCFEBKDGBG@E@EBCBCDABCBAB@B@B@DAFEDCDCD@BABEDABADCDCDKN@DABBL@BHHJLNDBDFDCH@B@DAB@B@BADAB@FDBBBBB@DCHBDBDAB@HGBGDG@CCCHEJE@IAM@OBCBCF[@AGOBC@BDA@@BIBAAAACBAAA@EGEBLPCDA@@BA@C@BBCBGBC@@AAB@GBC@GCOKKQUKQIUACWDG@KBBDPJFJELCDCFAFADABKFJFBJEJDJDDBLFLBdCF@DF@ADHBKD@DD@BDCHBBFBHLHBDF@D]PG@EDAAMHDFMBIDEFOQOUE@MFSDIBEACAEAGDGBG@[DEBCAIEKCGCSEGAEDCAG@GB@BA@CAA@A@CBC@C@A@A@ABA@E@C@GBA@A@A@CCCAC@EBC@AACAGAAAEBA@GAIBCAGAGAAAC@C@CACACACAEAGAEAACAC@AAAG@ICSAM@E@C@KAC@A@FHBJBFBBBF@f@ZDTDTBBBHBBFBNDH@D@JADAJCD@LAFAF@F@F@HEFAF@F@LDNBHDHBJDJDJBFFHDHBJBHBFBHBNHHBJFJHDDJJDHBFDLDF@DDH@DBDDFFJFFFFDDFDBDFFFFBDBD@FDFBHAF@DAD@H@FAFAFAFADCFAHAF@JAJ@H@F@H@HBFBFBFDHDFDHDFFJDFHHFJFDDHDJDFBDBDBDFFDFDFBF@HCHCDEHCFCJCBEFCFGJEHGLABCFCDGHABGJIHGLGLEHCDAHCHCHAJENAHCJAJ@JBFAJBHBH@JBH@JBH@J@DFRAHBPHNBFBDDHHFDDDDBDFFFFLFLDJDNFJFDBLFJHFFB@@FBFFJBDBDHN@DL@RApEH@D@@C@C@CBAF@BA@A@A@EB@HADCJCFAD@B@RE`ILEPEXIDABICGUeoB@NCPG^@HRFPHVBDBBBFFHHJB@dKF@@BBF@LDAB@DADEBAB@D@B@NEHCREDAXPDBFFDBAHAFFFB@HDNNB@BDBBFBB@B@BBB@BAB@@A@ABC@A@AC@E@@ABADC@AACAAC@A@A@@C@ADA@ADE@A@AAACAAAAAB@JANAD@HFB@FBDBD@DAB@BABAB@DA@A@CACACBAFAFAHAAAHAD@BABoBABBFDFBDDBBDBHJDB@BB@D@BBD@B@BAB@BCBAB@DAB@B@@A@CB@BAF@DAB@DAD@B@B@BBF@DBF@B@B@ACAKF@DAB@BABAB@D@@A@A@AB@DADAD@FALCB@DCFADABA@ABAJ[DG@A@AAA@A@ABABE@A@AA@EECCAAIGGKCEACAC@C@CBA"],"encodeOffsets":[[108758,38985]]}}],"UTF8Encoding":true});}));