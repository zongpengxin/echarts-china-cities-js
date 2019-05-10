(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('烟台', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"烟台"},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@B@@AA@A@@B"],["@@AA@BA@@BB@B@B@@AA@"],["@@B@@AA@@B"],["@@AA@BB@"],["@@A@BB@A"],["@@AA@B@BBA"],["@@@B@BBA@AA@"],["@@A@A@@BB@BA"],["@@@BB@@A@AA@@B"],["@@A@A@ABA@A@@BB@B@B@@AB@B@@A"],["@@D@BBDCFA@AA@GB@BCA@BAB"],["@@BABAB@@AA@A@AAA@@F@BABA@ABA@@BB@FCB@@A"],["@@@AABB@"],["@@B@B@B@@BB@B@@BBAAA@AB@B@@AA@AAA@A@A@A@A@A@@BB@@B@B"],["@@AAA@A@ABB@B@B@B@"],["@@@B@BB@@A@AA@"],["@@B@@BB@BAB@B@@A@A@AAAA@A@A@@BEAABABABB@B@ABB@B@B@B@"],["@@@AB@B@@AB@@AA@@AA@@ABAA@CB@BCAA@AAAAA@A@A@@AA@A@@AAA@AA@A@@AA@AA@BC@@BD@AB@B@BH@BBBBB@@DB@@BA@EBA@@BBBD@B@@AB@@BB@@AB@@BB@B@B@D@B@B@"],["@@XHD@NDJBLDDBJBJBLDB@FBFFBBBH@DADAD@BEJCFGFIFEDAD@B@DBBBBBBF@N@LAJAPIF@RAD@FCRKHGJIBAD@PCHALEPEDEBCCCECIAEAG@GBQ@GBWFCDC@A@CAACAC@AB@BAB@J@D@BE@C@GBCBEBKBI@OBA@ABAB@B@DALMHCDABAHAL@HAF@DADCFEPKFC@AHADC@ABC@AAC@CA@AE@IAA@G@ABE@ABCDEPONODCDANAFCJCNGJALCHCH@FBLBD@B@BABADEDKBABADAD@D@@ABABADAJADATGBDL@DT@FBFBFFDHFHDJBFBJBFBDDHFFDDBLFPJNNDBF@J@J@LCFAHI@A@GBGHIN@TAZAfA`AfCtAZBPBL@PBVBV@VBX@XAJ@R@V@^BB@lDBEHS@I@AD@BABAB@@C@A@CG@AE@AECKWAGAI@AAEEK@AAAGMACCCAAIMCAICECOGAAMKIMACAS@OCMAKKMICYIOIOKGOOGC@YDEBEBACCAACDO@A@CGUACBCGK@IGCCAEGAOAAa@MEAAACCI@EBEA@@A@ABA@AA@@A@A@AB@BAD@B@B@B@DE@IC@BED@DHDA@E@ABB@F@FFABG@AAAGG@E@AHDBBFEBE@C@CEAA@CA@CB@BBDCEAA@GBAGB@BE@E@EC@EB@AEC@BAJE@BM@ABAB@FCB@BB@DD@FFBBD@BCBAAAAAHEIC@AD@@ABCEGCCA@ADABA@@E@AEACCB@DAB@@AACC@@E@AAAEGFE@AIEG@K@@GBA@AACGEE@EAQ@UBG@G@A@ALGLAH@BIFE@EEBEBADADC@CIACA@EBCBE@AG@CAGICGECCCCDFF@DAHABE@C@AAGBCBBBABGDA@AA@DA@C@ABDD@DCBA@AC@BA@A@AB@B@DBB@BA@A@@B@DEACAC@G@DCIGEAA@A@BA@CC@ABA@KGA@ABBBEFCB@BCH@BCDCDDBBD@DCCA@EAE@@DC@A@AA@A@AB@AA@AAEAAAACEDCFCBC@AA@@ACIBEGCCACKAAKFOAUEOAI@S@WAC@W@Q@OHKFCBOFIFKFcFKEIIGIAACGAGCAA@IBE@CCCAA@@DAFABC@GIKCGAE@CBCFAFCFCHCBKHA@EGEACBEDGHMJB@@BABABA@@BA@@BD@@BA@ABB@D@BABABAB@@ADBDBBBBB@B@BAB@B@BABEF@B@BA@AAAAC@A@A@AAA@@AC@@AAA@AAA@A@AA@AACA@AA@C@@BABC@CAA@ABA@A@@AAAE@@BB@@B@BABA@@AA@A@@BA@@BABE@A@AB@DBBGHOBYEKEKISKMIGEKKGGIIAEEOKGK@GAUGWI[MBIB]IUBIAIBCD@HEBE@CAEG@MAECCOCIBIDEDAD@FDD@B@DAJCHEPKBAF@H@FFD@D@BABC@C@GBK@ADGFEDCBKXCFABABC@OBCBENMBCDCBAFAB@BDD@D@DAFEDGB@FAH@F@D@D@F@L@B@B@BI@A@CDGBCF@DAHDBBLDNFDB^PPDH@DAFMDMBC@CEGBA@CHADCDABIDCFAB@FGFG@A@ACAMDYIGGACCCDCBABAGOBEDKBABAJ@NADA@GBIBCLIHODGBABAHEBCBAAK@C@CDED@BAB@B@D@H@F@D@HDRAF@J@J@JAF@F@ZKHEBCDCFGLEAA[KECAC@GCCAACA[A[C]AOEA@SOEGAC@EDCBAFBH@JADAFEBG@GEMCEIEMEOAG@ODCDEHGLEBCBE@IAUEWGOCICK@QBI@OAICICKIKKIIYUCCEAG@G@eHK@IAYKEOIYQECmYSK[]SOKIMIKGEICOCMBKBk@k@OBK@G@aRSJIP@J@DBD@DBD@D@DCDED_LGBEAGAE@EBCB@BEBCBOGADEBGOCsSUE]KICCDA@C@AAAB@B@BBBEF@B@DA@IHABC@A@A@AFQCADABGLA@A@CBA@ABABA@AAA@A@ABABA@C@DAEAAAA@ABAB@DF@B@ABCDCBC@ABA@G@@AC@EAEAE@C@A@@EBAAICAACC@C@AA@AAAA@BA@CBAB@@CB@BA@CA@E@A@A@A@E@C@@CA@AAAAA@A@CCCACA@AA@A@ABAAA@A@AAA@ABA@@AAA@AA@A@A@ABA@@AACAAAACAA@AAA@C@@AA@AAA@CBA@AAEAA@AAA@ACC@A@@AA@CD@B@D@B@BAB@D@F@BA@@DBF@JBBBBB@B@BB@B@DA@BF@HAB@BB@@BB@@BB@B@BD@BB@AB@B@D@F@BBDD@@BDBF@D@@CH@@BBBBD@DAD@LA@@B@BB@BB@B@BBBA@BDAB@BABA@@BC@@BA@ACA@A@@BABABAB@B@DB@B@@B@BBBBDABAAC@ABA@A@@BB@ABAAABA@ABAAA@AAAAA@@AA@C@E@@AACA@A@A@AHAPD@B@BBB@B@@B@BA@@BC@ABA@@B@BABC@AAAB@BB@ABABAAABB@ADAD@BB@ADABCAA@ABABA@ABAA@BA@A@C@@AABC@A@A@A@@BABAAC@ABC@@BAACBA@ABABFBCBAA@BFDBB@BFB@BBBBBB@@B@B@BABBBA@@B@BA@@BCA@B@BB@@BB@@BE@AHAD@BDBA@ABA@ABABA@@DA@@B@F@BCDA@ABA@EAEA@AE@C@@BC@C@A@ABA@@BAB@BA@A@@BD@ADA@AAC@A@A@ABABAB@B@BAAGA@BABAD@B@B@B@DB@@B@BD@D@@B@BA@EAAB@DBBAB@BABADCFFBB@B@B@D@AB@B@B@BABD@BBABD@BBHD@B@BB@BBB@@B@BB@@B@B@B@BBBBDBF@BB@@BB@@B@DB@AD@BA@@BBBFBB@@ABADBBBB@@AD@B@B@L@DAB@BBBA@B@BB@@A@AB@B@@AB@B@@BB@B@@BD@BADA@BADDBB@BBBBBB@BDBA@@BABB@BDAD@BDBE@@BD@B@@BA@A@DBBB@DBBBBB@@BB@@B@BBBA@@BABABABE@CBA@CBA@A@ABCDA@CBAAE@@FA@@CA@A@@BBB@D@BB@B@@DDB@B@BD@B@@BABB@@BD@@BC@ABCB@BA@@BB@ABABA@AAA@@BCAA@CBC@@BA@@BA@@B@BBFAB@BB@@B@D@BA@@BADBB@B@BAFB@DABBBBB@B@B@DBD@B@B@F@D@D@DBBBBBB@@AD@BAB@D@B@@D@BB@BBB@B@B@D@B@DB@B@BHBADB@@B@DAJB@BBALD@ADAAABA@AHAAA@@CA@C@A@O@C@C@C@@DGAA@A@@BA@AB@BAB@BAAAD@B@BAAC@ABAB@BC@@BA@@BA@C@@BB@@BABCBC@@BC@@B@B@B@BB@@BBBA@@BABBBA@ABBB@B@D@BB@BBADA@AFA@G@A@BD@BC@A@A@@BAB@B@BAD@B@DA@A@A@@DB@D@B@B@@DBBD@B@@B@BAB@BBD@B@BABD@@B@B@BB@@BA@@F@BB@@BB@@B@BB@@DB@ADFA@LD@@D@HBBBBDBD@BABADA@AH@@CB@@ED@@AB@BAD@B@H@AHF@@BBB@BA@@DDABBBB@B@B@B@BA@@D@B@FGD@BD@@BBDBBBBD@B@DB@BB@BD@B@BA@@DAB@BAD@B@D@BCBA@C@A@AB@BBB@BDB@AD@B@AB@DCHABA@A@AAAA@BA@A@E@@BEA@BOBCCABBD@B@D@B@B@BB@AB@B@BA@@BC@A@CE@A@A@C@AAAA@A@AAAAA@A@AA@AC@ABA@CAABC@ABA@AAECEAAAAACACBCBA@EB@BB@@DE@ABA@ABA@@BAFABADBB@BD@B@FD@DBB@B@BAD@BB@AD@BA@@B@BF@@B@B@HA@CB@B@BC@@F@BBB@B@D@B@B@BB@BD@BB@@BA@ABD@@BABABABD@ABB@@BABH@B@D@@B@DBDBF@B@B@B@B@BAB@BAD@BAB@BAD@BAB@BBD@DA@ABA@AAAA@BABC@AC@DA@GDABAB@B@B@B@BADCBE@C@@BAB@B@BB@ABC@A@AAA@G@@BA@A@C@BABAAAA@AC@ACACCCAAACAAAAAAA@AAGBAACAAA@A@A@@AC@@AA@G@C@ABCAAAKCAAAACAC@@AAA@AA@ABA@A@ABA@ABABA@C@A@AAGB@D@BA@A@@BA@@BA@A@BAC@A@BAB@@A@AG@A@@AB@@AB@BAC@A@C@E@@CA@C@CAEA@AAAADC@@BABA@AAACAAA@A@A@A@A@@BABA@A@A@@ABAB@@AB@@A@ABC@A@AB@B@@A@A@EAAAAAA@AA@C@A@OB@BA@@BA@A@AB@BABABABA@A@A@@BA@AAC@ABBDA@ACA@@BC@A@A@EAA@A@A@CBAAA@@AA@A@AAAAA@AA@A@AAC@AAA@A@AAAEAAAD@BA@C@CA@ABA@A@@CA@A@@A@ABA@ACAAAA@AA@B@BAB@BA@AB@B@B@B@B@BBBABCBC@A@AB@BABA@A@AB@B@DBD@B@F@BB@@BEAC@ADB@B@@DDA@BA@@BADCDA@ABA@A@@A@A@AA@AAA@@AA@EAA@@DABAAA@AB@BADA@C@KDA@@CBAAA@A@AAAA@AB@BAD@B@BB@@BB@AB@B@B@BA@A@@B@B@BBB@BDD@B@F@B@BABEA@A@AA@ABA@A@A@A@C@@BA@C@CAA@@A@A@AAA@AABA@BFAB@BA@A@AAA@@AAAA@AA@AAA@AC@AAACBAA@AAA@AC@AA@A@@AA@AAA@C@A@GDCDEBABA@ACA@A@A@ABABADABABCBC@A@@CAAACACAAD@@A@C@A@AA@@A@A@AA@@A@A@AAABABA@AA@@ABA@A@A@AA@@CA@C@ACBA@AB@@EKACAC@@A@AA@@AAA@ABA@AC@@CBCCAAABAAAAC@A@ADA@ABG@C@CACA@AAA@CA@ADAA@ACAA@ABA@AA@@AA@@BAAAA@AB@B@AA@AA@AAA@@AB@@AAAAAA@A@AAA@A@CAA@@AA@@AA@A@@BA@ABA@BDA@ABAAA@@AA@@AA@CB@AA@@C@AA@A@C@ABC@A@CBAC@A@A@A@CAAE@AAA@@A@A@A@A@CB@BAA@@AA@CCCAA@A@A@BAAAA@AAA@@B@BABA@A@AAA@A@C@ABAAA@A@A@BBAB@AA@A@@B@B@H@BA@E@C@GACAA@CCCACAA@A@ABE@C@A@AAA@AAA@A@C@A@E@AAA@A@AB@AA@ABA@A@@BA@A@@BA@@BA@A@A@A@C@@BA@CAE@ABC@A@A@A@ACA@A@A@A@@BC@ABG@A@CBCAABC@A@A@C@E@A@@CCA@AAC@AAC@ABECAC@AAA@@AA@@A@AAAAA@AAAA@AAA@A@@B@BA@BB@BA@AAABAACAA@A@@B@BADABA@ABA@C@CBC@C@CBA@@BBBA@ABC@C@@B@B@BA@A@A@@BA@AAAAC@AB@AA@@BA@A@ABABA@CBA@@BABAAAB@AA@@BA@A@@A@AACAAA@ACA@A@CBA@@BABA@C@C@A@EAC@A@@AA@A@AACAAAAFAAA@@AA@BAA@@ABA@AA@AAC@CAA@A@A@A@EEADAAABA@BAAAB@B@B@@AB@CACAEAEAA@EEW@CBO@AB@BABGBC@M@CDIAC@M@CBA@I@A@A@@BUB@AK@AAC@A@E@A@@BI@A@CB@DC@@CA@C@@C@AG@A@@B@B@B@BC@C@@DE@BDC@AHCAAFC@AA@DQ@@EA@A@A@A@E@AA@AIAB@GAA@C@@BA@@BA@@CC@C@@A@CC@@CDB@CE@@ABE@AE@GGE@CAOAA@BDG@G@EACA@AA@KAOHAB@FAB@BB@ABC@@B@B@BEHB@@BUG@AB@@AA@A@AAA@@BCDQEC@AAACA@A@IB@D@DCBGA@DG@SHA@EA@BEB@BA@E@A@@BA@@BKAA@C@AFG@@DC@C@E@CCAAA@K@AD@FA@A@A@CAAAEC@D@BDLBR@DCFIHUHMDMHMHWHCFELDJNNJFHH@DCJIPXPHFJDPD\\PFAFINE^DhFTFTDNpFHDFFFFBHFD@BZTHFFHHLFJHJLJJFFDHDBBJHFHN\\HLJFHFTD\\FDBRDJDPJHJDDFJA@A@]@GBM@AHBFDDZB^@HBDFBJBHIFGJBTBJ@HCBADABCJSTG@EB[JEJCLSLAFFLBD@HBHAHCLJJ®LNDLBTBNBD@HBFFBDBFDNDHDHEFFFB@JHX@PDPBTDLFHHJHNJDBDB\\BvFDBJ@LBLFFDFHHHFDDDB@LBPDNDD@PFZH^JNFJHDDXNPJ^RFD@BHPBFPFD@ZJJJRVVPBL@BDDLNILCNJJN@LBjBdJLRD\\IPQB_CWJYTCFCHAHBHDFFDLDl@j@DABVAP@R@TDXDLBRJRJldZDFFDDDBDBDBDFDHBL@LBLAJAJAPAPARCRAB@D@DFBBBBDBB@FBV@^BBBX@VBFBHBD@JDDBFDJJJHNNDBPNJFPFD@JAPEF@JBFBHDNHnX^PFDPHVLFDB@D@B@D@H@B@B@BDB@BDB@FBB@D@BADCJIBAD@D@F@LBHBF@JAJALCLERETAVBHDD@BBLDLDFDD@RDTB`AH@B@@AFGBEDAD@D@F@FBB@FADAJED@B@NDFBD@DAFCBEJGBCBCBCAG@C@CAACAEAACAA@C@ABEDCDEFCHGVMZODAHADAF@J@D@D@BADCLEDCDEFCBAFCBCBGBEBCBCFEPKHCFCPCJAJ@TDBFFJD@DC@GFAVFTDX@V@LBXAH@HAJEHEFEFGBEBE@EACAEEIMOEGCGAG@SFALAFADADEDEBE@E@CACACCCEGEE@ACAAE@E@CBC@ABCFEJGPKFEJGNCBANCbIVGBAX@LAX@J@B@L@N@L@LBH@B@R@H@H@N@"],["@@A@@BA@@BA@@BB@B@B@@A@A@A"],["@@B@AAA@@BB@"],["@@@BBB@A@AA@"],["@@AA@BB@"],["@@B@@AB@@AA@@AABA@@BBB"],["@@@BBBBA@AAGA@@F@B"],["@@@C@ABBB@BBBA@AA@A@A@AEABAB@B@DB@@BB@"],["@@B@BAB@@A@A@A@AAABA@AA@A@@B@BCD@BBB@D"],["@@A@AB@DBD@BBBB@DA@A@A@CAACA"],["@@EBE@CB@B@D@BD@B@@ADABBB@B@B@BC@A@AAAA@"],["@@BC@E@A@AAAAAA@EDAD@D@B@FB@JA"],["@@@B@B@BBB@AB@BBB@@B@B@B@BB@@B@B@B@DB@DBBBB@B@ACB@B@@A@A@AB@@BB@BA@A@AAAAA@AA@@A@C@AAA@AA@GCABA@AB@BA@A@@AA@@B"],["@@GLBJFHDBFBDEBK@GCGK@"],["@@@BFH@B@BABABA@@DBBBBBB@BAFBB@BD@DADEBABE@ABAHABA@A@AIIEAKCC@AB@B"],["@@E@EBADAH@HFJDDF@B@JGBCBEAEAEGEC@"],["@@E@GFEDADADAN@BBBB@DABCDAB@F@B@JABABCBE@E@AAACCG@"],["@@ABAB@BAAAAAAA@CB@B@D@BBBFDDBBDAB@BAD@B@BDBNFB@AB@BABBBFBB@BABK@EAICG@ACEGEA@C@"],["@@EF@FBFDDDBHBD@H@DDD@BABC@ACE@A@CBADBFADA@CAACAE@AC@CBCHEBC@CCAE@IDGFQT"],["@@@F@FDDDBFBFBDB@DBBDFDBF@D@HEHGHGBGBCACAAC@KFC@CAECA@GDC@MEEBCB"],["@@@AAC@AE@AAC@@DA@EBEBC@MBIDA@ABGFCBA@@BABABBBBB@B@BABABA@ABADA@A@ABAB@BABABCB@B@BB@B@BAB@D@D@DB@BB@BB@DB@B@BADADAB@B@BADABAA@@AB@BAB@BAF@BBBBBBB@DADAD@BCFIB@@E@CBCFCFA@ACABECA"],["@@EG@ACAE@GBGFKFABGFABGLCH@FBJFFDDJFJDF@D@DADAF@B@HABABC@EAI@G@EBE@GAK"],["@@CCAECGIEIAGAGDAF@DBDFFDFDJFRHHJDZDL@NCJEDEBCCGCEEEICE@MAIBEA"],["@@EAMAK@OBGDA@E@EA@C@C@AACACA@CDADIDEFCF@R@HFZDXBFBBF@DCHKHSDKBEDAH@FAF@LCNMDEBC@C"],["@@ACCA@CBEBABE@A@CDEBEAACCCEAB@FC@EBA@KF@D@DIHADABABGB@AG@G@CBADG@@BAFBBF@HBFBBD@DABA@C@A@@BAF@BB@BCBAB@BBADADC@A@AAABC@A@BF@D@F@FADBDD@F@BBB@B@FB@B@B@DBBDDDBDAJCDA@ABE@EBAFCBAAA@AD@BABAAABABABA@ABEBADABCDABA@AACAEAA"],["@@B@B@@A@AA@A@@B@B"],["@@F@DAFABABAAAA@AA@A@AACAAAAC@AAAABA@AAAA@A@@A@A@AA@@D@BA@C@A@A@A@AAA@A@@DABABAB@DABCDABAF@B@BDBB@DBDAB@BBB@BA@AB@D@FBBBD@"],["@@A@ABA@A@@B@FBFB@DBDADA@A@AAAAAA@@A@AAA"],["@@@CA@@DB@"],["@@BBB@B@B@@AA@@AA@A@A@@B"]],"encodeOffsets":[[[124390,38484]],[[124404,38480]],[[124439,38479]],[[124385,38479]],[[124406,38480]],[[124402,38481]],[[124446,38460]],[[124413,38468]],[[124452,38460]],[[124390,38477]],[[124392,38483]],[[124398,38475]],[[124438,38475]],[[124438,38474]],[[124437,38475]],[[124438,38475]],[[124417,38467]],[[124441,38467]],[[124217,38485]],[[124473,38486]],[[124326,38515]],[[124275,38538]],[[124569,38016]],[[123588,38873]],[[123759,38985]],[[123567,38904]],[[123575,38896]],[[123570,38853]],[[123527,38848]],[[123780,38940]],[[123540,38877]],[[123541,38969]],[[123741,39258]],[[123542,39048]],[[123847,38933]],[[123578,38839]],[[123800,39281]],[[123801,39305]],[[123632,38877]],[[123527,38863]],[[123721,39217]],[[123687,39075]],[[123661,38827]],[[123320,38698]],[[123346,38696]],[[122698,38205]],[[123516,37796]],[[124379,37646]]]}}],"UTF8Encoding":true});}));