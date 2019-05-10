(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('文山壮族苗族自治州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"文山壮族苗族自治州"},"geometry":{"type":"Polygon","coordinates":["@@AB@BA@AB@BA@@BA@ABABAB@D@F@B@B@B@B@B@B@D@B@D@D@B@BA@@B@BAB@B@B@BB@@BB@@B@BBBB@@BBBAD@B@BBB@B@B@BAB@B@B@BB@@BB@B@@B@B@BA@@BA@A@A@AB@BBD@B@BABA@A@CBADA@A@@BA@@BBFABAB@BA@@BBB@B@B@BA@@BABADABABABAB@B@BA@EFCDA@@BA@@B@B@BBB@DAB@BCBCDAB@B@BA@@DBF@B@B@B@BBB@BBDA@@BBB@BBBABAB@BB@BBBD@BABA@@BBBBB@BA@@BAB@BBB@D@BBBB@B@@BB@BBBB@BB@B@BBBBB@D@BBBBB@BBB@BB@B@BBB@BB@B@@B@B@BB@@BB@@BBBA@@B@B@B@B@BB@@BA@@B@BA@A@A@@B@BABBBAB@BA@A@A@@BB@@BA@A@ADA@AB@BB@@BA@@BBBABBBA@@B@BA@ABABA@@B@B@B@B@BAB@BB@@BA@A@@BA@@B@BAB@BA@ABAB@BA@@BA@@BB@AB@B@B@B@BB@@BABA@AAABABABA@@BAB@D@BA@C@@BA@A@A@A@A@A@ABA@@BAB@BABA@A@A@ADCBAB@BA@@BABABCBCBABC@E@C@E@CBCBABCAGBC@CBCBABCBCDC@EBCDCDADABADCBABABA@A@C@ECCCACACAAACCAAAABABADADABAF@D@DCF@FHLHNEj@DCDGJGLBDFFJDLFDN@LEJABKLMFGFDFHDFHBJBJAHCFCAK@KAEDCDDLBBJLHL@BA@A@A@CACCEBIBG@I@CDCFCFEBA@CAECCAIAGAE@GBICGAE@ADBLFJ@FADEDKFGDEDBFDB\\JBFDHD@PBB@BBABABA@A@I@G@EBAB@BCHGHEBIAICIGGCEG@C@EAAACIUCACBGDMJCBKEAAGGGICAIGIEKCMBA@G@GDIJCFAB@FAFABCBIFSNULCFAJ@RBJAJCHCDCHBBDDDBN@DBHBHDJ@BBFDBH@BRJFHDF@HDHHLTR@BDDBD@HBFJLBBFHFJAHADAFBJCDEBGDEFADAD@D@D@HF@F@CHCB@FDDBDBD@DAFCBED@DBBDDBDABCJANIHDFDJADICAACDEFGJHFFFFFDFFJ@HBJAH@L@LBFDDBHBH@H@F@DFHDFABEAE@G@A@ADBHHFD@BABADB@FBDBLFHDHHHBF@H@FAHCFADDFHDLBP@FBFDBBBF@FDBFAFDNFFDDBABABEBADBDBDDH@DADCDEDEBGFCDCFAD\\R@JGJEHCDGAKGCAC@ABCDILEDCDGDGJGHEDGDIBQFAAE@@BBBB@B@BDDB@B@B@BBBFDBB@D@BAB@BABAB@B@DAB@BCDA@EDCBABABABAB@B@BABABAB@D@BABABA@ABAAABABA@AB@B@BBBAB@BCBCBABAB@BABADABCBCDCBABA@ABCDABA@@BAB@BABABA@@BABCD@BCBABA@@BABB@@B@BBB@DBD@BABAB@B@BABBD@D@BAB@DA@ABBBAB@BABA@A@@B@DA@BB@B@BAB@B@B@D@BBBBDB@@BBB@B@B@DBDBBBB@BBDBDBDDBBBBBB@BB@BAB@B@BB@@BDBBBBDBBBBDDBBDBBBDBBBBBB@B@BBBBB@FBB@B@DBDBBBBBD@BBDBBBBDBB@B@BAB@B@BABABAB@BBB@BBD@BBB@DB@@BBBBBBDBB@BBBBBBBBDBBBBDBDBBBB@DBB@B@@BB@FBB@DBDBB@FDDDDBD@BBB@BBB@D@B@D@B@BADAD@BAD@B@B@D@B@BBBB@BB@BD@DBB@B@DBB@B@B@B@BBB@B@D@BBBBBBAB@BABABCDAB@DAB@D@D@BADBD@DAB@D@D@B@F@B@D@BBB@BBF@B@B@B@BBBBD@DBD@B@B@D@D@FBB@BBB@BAD@D@D@B@B@BAD@D@DBBBDDDBDF@BBDBD@DBB@DABBDA@@B@BBD@BDD@BBD@D@B@BCFAD@B@B@B@BBBBBB@B@DBDBF@FBDBDBFDB@DBB@@B@B@B@B@B@B@BBBD@BBDBBBBBBD@BABAD@B@B@B@B@D@BAB@B@B@BB@B@BD@D@B@B@BADAB@D@B@DB@@BBBBBDBD@DBD@FBDBDDDBDBBBBD@B@D@BA@@BBBB@BDDDBDBD@B@BBBBBB@BBAB@BBDBB@B@D@DB@@BBBFBBBBDBB@D@BBBBBBDBD@BBDBBBBD@B@H@B@D@DBDBB@D@B@BBBB@D@BBDBBBBBBDBBBB@BBDBB@BDB@DBD@DAB@B@@BFDBB@B@BBBB@@DADBB@BBBDBBB@BBBDDBBFFHHBB@DBDBBBBDBBBBBBDBDBDDBBBBDDDDDDBFBD@DDBBDBDBDBBDD@DBB@B@BADAF@B@FADADAFAD@D@BBBBBBDFDFBBDDDBDBB@B@B@D@D@B@D@DAFADAFCB@FADAB@D@BABCBCBABCDADABAB@BCBCBCBCBABAD@D@F@F@BBB@DBFDDBDBDBFBFDFBDBD@@BF@DBDBD@B@B@DBFBDDFBDDB@DBFBDBFBD@FBB@FBB@BBD@BBDBDDBBBBFAHC@EBEJ@`LH@B@D@DBDBFBB@FABC@ABABAD@@AFEDCFEFENWHMHEHCDCDGHIFEDE@C@CQWCCEAIG@E@C@C@CAC@ADCBCDABAD@BDBDBBFBDBB@BC@CD@H@FBDAD@DCDABCDAB@BBBBBDD@BBD@BA@ADBBFFHHBJ@JCJGFCLMJCHCF@DFHHBBFBD@D@FADADBDBDBDDBDD@RDL@HD@F@F@FHDJFPBJCLBJBP@H@HBJDL@H@B@H@LJ@H@HCDGJ@BAB@DABAB@BBBD@D@BBDB@D@D@BAD@D@BBBDBF@D@DBFBFBDDDBBBB@D@FBBBD@DBFBDBDBDDDBD@D@D@B@@ABCBAB@FBFBHBFBF@F@F@HBF@FBF@DAFADADABAF@F@DADAF@@BBFCHCHAF@FBDDBFAPCJ@J@LBDDDFFRFFBDF@BA@AAC@A@A@C@A@CBABCBABABA@CBC@CBA@AAC@AA@@ACAB@BA@A@CBABA@ABC@A@ABC@A@C@A@ABC@ABA@ABCB@DAB@BBB@DBBBDBDBB@D@D@B@D@BAB@@AB@F@B@D@HBD@F@BA@A@CBCB@B@FADSDGDC@AAAMECAEKCEEKAABCD@D@JAFCJCB@DAD@FAJAB@LGPKJCFGLKJIJKJILEJINCH@FBLFFHFLBLALAVCLABAR@BCJEPCPERANAN@F@DBBDD@BBFBBB@BBBBDLBFBDB@BBF@D@JFD@FCDADADADAB@HEHADADBBFA\\@FDBBBD@HBHBF@BADABABABCBEDAJGFCRARALBN@PBRDJBJAJCJAH@PGVGRAD@JAPENAJAJCJGBAFCFGJIJCRAPDPDL@RBL@NFNHHHDHHJLFNFFBVBPBJBN@FAB@BC@C@CBEB@B@@AB@@AB@@BBAB@@AB@BA@BB@B@B@@AB@@BB@B@@BB@B@@A@AB@@AB@@BB@@AB@B@BABAB@B@@AB@@AB@B@@AB@B@@AB@@ABA@BB@@AB@B@B@B@B@B@B@B@B@@ABAB@B@@AB@BAB@B@@AB@B@B@B@B@@ABA@A@KEMEMAIBIHKJGJANDVDHBNAHEFCLGNKLGLGNEJEJKFGBG@A@KCECCAACEC@GCGEEGIKAGDEFCBG@CAAE@G@EBC@IM@CBAD@H@DAHIJKFEDCAE@AAAA@AA@C@ADAD@H@JBH@DADCFCBGDM@ILYFGDADABBDBDDB@F@DBF@B@B@BABA@AAEAABCBCBADFD@DABA@C@GAGCK@G@AAAAAA@@IACAACAC@AA@I@KCCEAEAG@C@AACCCCCB@F@HADABABG@AAACAACBABCBCAABC@@A@CAACBADC@ABAC@C@CAEEGAEBCD@D@B@BC@EAAAAA@@C@ADC@A@CACBCFEJCDCDEHUDKJEHGHGFCHEHADADCBEBEDCFEJALAHCDAFGBCBADADADBDBBB@BHADAH@B@FBF@DBB@BDFLFDD@@B@D@DCBCBE@CDCBAF@BCBC@ABABED@N@BD@H@FADAD@DFDJDFDFDBDADAF@H@JFJDB@D@B@FEJKBC@A@CBCDCBA@C@ADABBBBBA@BD@JEDC@IHCF@H@F@JMHAFBD@D@BABEBCFGD@DCD@BAF@DBD@DABGFMDIFIHEFEPCPCNALAH@FCDAFAFBF@F@FCFADCBADAD@F@BABAFCJ@FAB@DADBBBBBDFDDB@F@D@F@BB@B@D@F@FABADEJ@BABBBBB@BBD@BBBB@@B@B@D@D@F@B@BB@@BBBDFDDBB@B@B@BBB@BBB@H@B@B@B@B@B@BA@@B@B@D@B@D@BBB@B@B@B@BBD@BBB@B@BB@@BB@@BBBBBBBBBB@BB@BB@BBBBBB@B@BABCD@BAB@D@B@D@BBBB@@BB@B@B@B@B@B@B@BAD@BAB@BABABABAB@B@B@B@BBB@BBBBBBB@BBB@BBB@B@B@B@B@BBB@B@B@BBB@B@B@F@B@B@B@B@BAB@DAB@F@B@B@BDBB@BB@B@BBB@@B@BB@@BBBB@B@B@B@DAB@B@BAB@B@D@B@B@@AB@B@@AB@B@B@@BB@B@B@BCBA@AB@B@B@@AB@BAB@DCBA@A@A@A@AAA@A@AB@@A@A@C@ADC@CCI@C@ADADAB@B@@E@IBQFQHSBCAGAEAGDQBADGFIDCFAFBDHFBJ@FAHBFBJH@BB@FHLHDJFLLHHBJANCPAHCJCN@LFJFJFLFB@FFP@JALANCJELGFKCIIIEEECCEAGAGDEFCHEF@PHFBLAHDFBD@JCDAD@JDFBDDDFBHDHFJ@DAF@FDBHAFBFEFEDALAH@BCFED@FBFCDCDAHBFDFHBJFL@BAB@FBFDH@DEFBFAJALALAJDLHLFHJJHFF@DBR@FAJENELGH@FAFANDJDDFD@PDNDJFHBH@BAB@AAA@EAA@C@CAAA@A@A@ABABABADADCBA@ABC@ABCBCBADCBAFBF@DBDDD@D@BA@A@AB@B@D@B@BA@AB@@A@AB@@AB@B@B@@AB@B@@AB@B@@AB@@AB@B@B@B@B@@AB@B@BADIDO@QA@@A@A@A@ABC@A@EAE@ABA@A@A@ABABEDCNGJEFG@EFCF@B@HFF@DADCHGBCBE@CGY@C@A@A@A@AA@A@@AABC@A@A@AA@AACAAAA@AB@BAB@BABAB@@AB@B@@BB@B@B@B@B@B@B@BABA@AB@@ABCBAB@BAB@BCBA@ABABA@A@A@AB@B@BABCHIHGJCFEFGDIDIDM@MDIBE@AB@D@B@B@@A@ABABABABABADABA@ABABAB@@ABC@A@C@A@AB@@AB@B@@AA@@AAAA@@A@A@ADELILENCL@JALCFEDE@AAKIEK@IBIAGAJMJMDIPO@G@MCCOGKEMBOCKACAQMGGCECG@IDMBODO@MBSBCBIJQJKFK@Q@KEKCGCQAO@O@SEOEQEMAEEMGOIKGMGMAIBKDIDGHANIBAFEBA@ABGCECAGCOEICGIGOEMCIAAMKM@MGEEEKCIGMAAAIACACEEICIAMAMAICGAIGKGECEKAAA@@AAAAA@CIKIGKGC@E@EBIL@FDFDJJHDJ@FAHCDEFKHKBODKBI@CBIDKFOJIJK@IAKGECCCCAG@GFEFCJALEJGHKFKBK@IAC@O@OAOEQGSICAEEIGCIAI@G@E@M@GAKCGGEI@MAO@O@MCMCMEEEAICCEEEIIKGIIGKGIEMKMKGEIGGCIBCBCBIDCDC@A@EBA@CBACEGAAAACBKBGBKBI@IAEAGAAANEB@D@FBJALEFEJCBCDAB@@BB@B@B@FEFC@C@E@C@ABADAD@HAFAF@DADCBA@ABCAAAAAACACEAACAC@A@C@GDE@CA@AAA@C@CBABADAF@DBF@FCHIFABCBAB@DCFE@CBA@CAAAAC@AACAE@EDA@ABAAEGAAC@CBGDCD@B@D@DFJBBAD@BIFABAFC@ABC@C@GAA@E@EAA@@E@E@AAAA@CACCC@EBCAIEEGCCECC@CBABA@AA@AACCA@A@CBABAB@@A@AAAA@A@KBA@GAC@C@E@CAA@AEAAAAA@AACIKOGGEEGIGOCOAKEGOEKEOAMCGGAG@KFODI@E@AB@BABABABA@ABAB@@AB@BA@AB@@ABA@AB@@A@A@ABA@AB@@ABAB@BABAB@CAA@AACA@C@A@AACAA@GSBGBGNIDG@OHKHGTAROREPEHGHGHGBEDIFIHELEN@JALCHILKHGBG@EECKIEMCKDIJOXGLI@A@CBEDABEBABCBCD@BA@AH@BCDABCDCD@BA@@BABCD@BA@AB@BA@@BAB@BA@@BABAB@D@B@B@B@BAB@B@B@B@B@B@BBB@B@BABBB@B@BABAB@BABAB@BA@ABCBABABABA@ABABA@ADCB@BA@ABA@@BABAB@DAB@B@BA@AB@BA@A@A@CA@AA@ACAAAA@ACAAAAAAAA@A@A@A@GKAECGGGGMMMKMGEeAGIDSBKGSIUMOAMAQCIEII@MBSDODSLOFQBSK_MUKMGQGOIMAOACHGJCDMJG@OAKIIGKGSCUWQSWMWCQCEKASCCoDKAGCEEEEAMCICU@KEGCIE@I@CFAJGBIAKDEDCFKTgIMEGIAKBSEOAQAEEIIAM@MBOEQCMEEEGIEDCLIDMAIMBUFeNGDG@K@[JIBECO@KLIFQDOHQDMLSLMJENGDMBKBOAECOOMOMSCMAMGKEKGMGOCKAMCIEKOO]G_QIOAOAGGBQFQBQCEWCUDU@QCMCMCK@KHILKHMBK@KBKDM@A@IB@AB@@A@AA@A@@ABAB@B@B@@A@ABAB@B@@AA@AABAA@@AA@@A@AA@@A@AB@@AA@ABAB@BA@A@@ABA@AAA@A@AA@AAAAAA@BABA@@B@BA@@AAAA@@AABA@A@A@A@A@@AA@@AA@A@ABA@@BB@@B@B@BB@AB@B@BB@BBB@B@ABA@BBB@B@B@B@ABB@@BABB@@B@BABA@@BA@@BAB@BAB@BA@@B@B@B@B@BA@@BB@@B@BA@A@AB@BA@A@@BA@I@E@E@I@KEGIEIOIQCKCEAMGMKAMAGGOOKAAQCCEAMEEYIMISMIIOIOCSGOEQGGIMOEOCKGKU@MEEIKIMAMDIHOLKH@B@B@B@B@B@B@B@DABAD@BABAB@BA@A@A@ABABABC@ABA@ABABABC@ABABA@C@C@C@C@CAEAE@E@EBA@CBABABABCBCBABEBEBABA@ABA@A@AAC@A@A@C@ABAB@B@BBD@B@B@B@B@BAB@BADABA@@BABABABABABABABAB@BA@@B@B@B@B@B@BAB@B@B@BABA@@BB@@BB@@B@DBB@BBB@B@B@B@BBB@BBB@BBB@B@B@BBD@DBB@DBBBBABB@@BBBB@@B@BAB@BB@BB@B@B@BA@@B@BA@@BBB@BBB@BDBBD@DBFBA@B@BDBDHDDBB@B@D@BBB@BAD@B@DAD@BCF@DAB@H@BCDCDA@EBCDA@ABCBCDABA@C@C@CAAAECC@AAEAA@AAA@A@@AA@G@CBABCFGFC@CAE@CAIGEEIKACGCEACEACIGCAA@I@GDCD@HBFDBBJ@F@H@HAFA@IIEE@AA@CACBEAAACAE@CBIFCJALAFAFABGBCD@DBF@D@F@DCBEAACIAMBEACGAG@EAGAAABEAIGI@IO@C@CAECEACCECCEEAECEAC@A@EI@CACAEACACCLCFACAGEM@CDC@EBC@G@@FCHAHCDIBEAECCACGBCAECCECACDE@EDE@EH@DBFDDA@EEGEC@EBADAHFBC@COOEG@CAABE@ABIBAAA@AA@AC@C@AEGAEAAEAEEEKAC@B@BCFCBEAICAG@A@AB@@A@A@CAC@EBG@C@C@CCCCCAECECEEECCECCAMQGCGGIQEB@FBHAHBF@BBHCBGHCDEBC@C@GBGAEAC@IECEAEBE@GAEGAUBQHMLIRCJBB@B@B@D@B@BAB@BAB@BB@B@@BBDBBB@BBBBBB@BDB@BBBBBBB@BB@BBB@BB@B@B@B@BAFABADAB@BAB@BAD@DAD@B@BABADADABA@@B@B@B@B@B@BAB@BAD@B@B@B@B@B@BAB@BBB@D@BBDBB@BBB@B@BBDBB@D@B@B@B@B@BABABABA@@BA@ABCBA@ABA@@BABAB@BA@@BBBBBBBDBD@B@B@DADADAD@B@B@B@B@BBB@B@BB@BB@DFBBB@@B@BBFBB@B@DBB@B@BBBBB@BAB@B@DBB@B@B@BBB@B@B@B@B@BB@@BA@@B@BAD@B@BAB@B@BBB@B@BAB@B@BBBBB@BAB@BA@@B@F@BAD@BAB@B@BAB@B@BBDB@@BDD@B@B@BAD@BAB@B@DAB@BAB@B@BBB@B@BA@CBA@@BABADA@@B@DBBB@@DDB@BBB@BFJ@BDBBBD@DBB@BBDD@B@BBB@B@BBDDD@DB@BDB@BBBBBBBBBBB@B@BBD@B@B@B@B@B@BB@BB@@B@B@B@D@B@B@B@BBB@BBBABAB@BB@@B@D@B@BB@@B@BAB@B@DBD@B@D@BBB@BBBFJ@B@B@B@DBD@B@D@BBBA@AB@B@BABABAB@BAB@BABABA@AB@B@B@BA@@BA@@B@BA@ABABAB@B@BABAFAB@B@B@BABABABABA@@BA@@D@B@D@B@D@B@DAB@B@BBB@B@BB@@BB@DBBBBBDFBB@B@B@B@BABCBAB@B@B@B@BDDBFBDDDBFB@@BAB"],"encodeOffsets":[[106441,23645]]}}],"UTF8Encoding":true});}));