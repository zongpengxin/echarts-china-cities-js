(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('大兴安岭地区', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"大兴安岭地区"},"geometry":{"type":"MultiPolygon","coordinates":[["@@AE@EDCFC@C@GEGEEIAKAICKGKIIEGAGFCFCDI@KBGDO@I@CBGJAFIDI@EACCEGCCKAK@MAIAECIGKKIKIGICK@WDIBGJINAHGFEHKBOBG@GCECEAEBCFBHCFGBKHGFCH@JDLFLDHBFALAFDHDH@HELELEDI@IBIBKFEDGJ@JAFG@O@G@GBCFAPADIBGBEBCFBF@FCFEH@DE@IAI@CD@DDLJTBJBJBD@DEBCCEECAC@GBEDEF@HJTJJHJHH@PDHHN@F@F@FEFGDC@@FDFPLFFFHHFHBH@HALCHCHCDGDMFEHEDC@KAG@GBEDEHAJAR@HAD@HCPCDADA@ECEDCJCFADA@EAEBAFALCLAJALELGFFHFDDBH@HBFFFLFJDJBH@JAL@L@HBLJRNJLDHDHJHFF@DMFEFCBHHDDDDABGFCD@DFD@HBHDDAH@DFDBFAFAJBFAFIDIBEDAFAFCDCFBDFBLBRBP@JBJBHFDH@F@PAHFDh@PB`@d@DDBFADCFIJGFCF@H@DPFV@^BhC\\CRAhIXCTCTAnAtDRBNATCN@LALALEPIFEDIBCDCF@H@PFNBJBH@JEH@HBNFHFJFLBZDT@dBN@LCHADEBEAEAKESAI@I@IDMAE@EDGFGFGDE@EAECEEE@E@GBCMASAEAECAC@CFGDEBKDGHKFIDEBC@EEKCGBCDEJKDEBE@ECCGCECCCECG@KAGAECCE@ECCCAEAKCK@K@GBMBI@GACCEE@GAG@EGEEEAC@ECAC@ACBGBMBGDEFAJARAP@BA@CCEMEKCOGGGCEBIBGLIFIDEFCFCDCDEAAGAICICCEAEBG@QACECEGCG@GFIHGHEFEDE@EECGGQGCAAAECGGGCEAE@IDGBI@GDGDIBGBIBEDEFEJANBJCDEH@FBHFDDFBHG@IAI@IAO@U@W@KAQGWGSGK@EBGJCFBFDFADEDOFIAEACAAGAEECE@IBGBKBEBAHEFKDKBQAW@EA"],["@@KFGDSJIJC@gMWCUAQA]JBRcN[@]@IEKCeC[A]EO@sbWDMDWBWBkHeHIJBFJVCHELBDDFLTBD@HCFQLUTIPCRENKNM@UYUKCAIBGDGPINABC@aFEDIVIJ_COBADG^OLAL@JG\\QTMLUF[AeKuACBOBoEaNKPKHADQpEDO@[CIEAABCDW@AIGAAO]ACWKEQIK_QWGJMLKSMkIgEFQHQWcSKOG{cQEEGO_UECGAGAICMIMiYYEKAOAHQA]AKBIFoTUHOFYFMDoJuFCBEBAHDP@\\MTGFKHKPWTUNWLHRbjCDULYLELEHODiCaAYBIFOPYNSB_EYGODQ\\MLEBAD@FABADC@E@ICOBKAEBGFEDGDG@GAEBCBCDCBMDMDIBK@E@AB@B@B@DCDAF@J@NABABABE@WBGBE@AD@DABCBEBEAI@KAC@CBIDGBA@AB@B@FADCBCBABEHEDCBGAE@CDAB@DBB@BCHANCJCBC@G@OBGBGBGFOFSHGBA@KGICCBMAK@KCYCM@IBIDKHCBEBK@GBCBCBCDMJ@D@BFDPHRHPDTFZFJDFFBFBDJJJDLFJBPBFDLHRLHBBB@F@F@FBDNDH@FDBBAHBFDDHBNDL@Z@JDHBJ@N@N@NBRHHHDHBFNBLDFDFDNJJHFFHHHFLFJDRFHDBFDJLNBLDFDHDBHDDBBLBDDBFBLBT@LBPFLJ\\TBDLLTDFDJFRHHBTH\\PT`JJLDJDHD@DITUNAFHLHH@BEPDB`DXRNFTDPJRVJRBR@NFFJJNNHNLRLLBLFJHFPFbFxPDDDBFBDBFBF@HDDDBDBBBFAD@B@D@BDBDDDBDD@D@BBBBDBDDHFBDBDBD@DBBDDFDF@D@DADCBCBCBGBE@EBGDEDEBABAFEDOHEDAD@DDBBDBBDDFFBD@BABA@CF@BADAF@FEBEFEDCDABAD@BADADAD@DADEDIJABEDC@C@EAGAEAEAC@E@EBG@E@ABEBADCBCDCDCDCBE@CBEBEBEBCBEBIBEBEBEBMFCDCBCDCDAD@DBF@B@D@DADBDBBBBHDH@DBH@FBFB@BAB@DADADADAD@D@D@D@D@DBDDBDDBB@D@B@F@BBD@B@DADABEBEBCDEBEDCBIFCBCDABCDCDCBC@CBC@C@C@EAIAGAGAG@EBGB@BADABCDABCDGDABCDCBCDCBABCDABEDABCBADCDCBCBE@GBE@EBEBCDCBCBADCDCDEDEDEDEDC@EBE@CBGBGBC@EBGBKJEJ@DEPjD\\D´TLB^hL\\FPFJFFDDDJDFDDBDBNDNAjGVAT@RDZJhPHDPFJDJDPFPDNBXB`FNFXF`ChAJ~BX@vAjG~CX@RB\\HxhplPHjAjKLAFAFAF@D@J@NBJ@pNNFfLNHf\\lRN@H@XMNKFO@EBCBEBCBCDCbO`MtWx@rTTHxG\\AXBXFJDHBHBH@JBJ@HBbDGF@NAL@NAN@z@VB^DBNAN@HARAH@VCP@LAP@f@¤LJBHBNDJDLDTJ\\PĞpRBN@t@SDALBHBjNTHJLFFDDDBFDFBFDBDDBDDDDFDHFFDLHFBHDFDFDHBRHxNLB|EPEJCHAPEJCJAJAHAQR@JAt@lAD@DADADABCBEDE@EBCBGBCBEDEZSJCJ@J@HDNL@HkbDbNNhR\\A`KZUAQIGGEEEQMKOJOPCRBbNV^DHJpRHb@PAtQ\\GRGFKFEFCDCNQX[JED@JAJAJ@HBHBLDLDF@JBOJALAFAL@HAH@N@F@ZBZBhAzQzetUPGFAHEFADAFALCJCJEJCFCJG`mFGDAFAVATBHFHBBBDBJ@JAD@FADADAHCFEFCDEBEDSJKRGJEHSPGFCJAD@`BDBt^rRbFXDdBXETUdWPI`OTC`MDCJQX[BG@EACBEBEJENKFCDCDCBCBKBGDGHGSJA^UDCDG@GDCFCPCJAJAH@HAH@DAH@D@D@H@J@FAJGJKpGCTFNDJBLBR@J@JBL@J@F@AtCJ@HAJCdOVGLICQY_NO`ONCzGR@RAJLCJEHMJQDMDKHGHELGFCJAfFPJHLDLGNGJELEHAHCDADAHEJAF@B@F@D°hzT`FJH@HBV@P@xD¶@\\CFAJ@ZCJA\\@fI[^Mp_FCnUZB^AZKbKnCHAFCFCDCFCBAFAJ@HAFCJCJGVCNCTARClGVKDMEOAQ@GBEDGPMJEHCLBHBHDLFJFHDJFNHxZNDPBV@LCJE^[BEDW@IBGBCDCHEDEJCPGLK\\WQNAJCHAFAFADADCFEDCAAGGACAAGCGECAAACC@A@EBCBIDGBIBC@EAAEECCECGCAAEA_EeCSGICMQCGAKAIBIBADOBIAIBKHG@CFAJCHBJBHBF@FBDBDBBBFBDBBBDDBDDDBBHBFBDBP@ZBL@F@FBBBFFBDNJLJB@JBD@DARCDAR@D@B@F@FBH@HBNBFBH@J@FADADAFAFAFADCBCCKAO@IFG^]LI\\ObURKFCFCDCDABC@EDEDIDGBEBCBEFITEFADADA@ABCBEBCBCDCFEBEDABCDAF@D@ZABBJDTRX^DNJH`HXBJ@DADAD@DCJCFCFAHAFCFCFCFC^KHAFCFCFCFC@C@EBCACAAGAEAyC{MECECAA@A@CBCLYBEDCDEFCFEHGFEFMBOASCGGEGAs@DQ@GCIE[[CECWAWJOLSTSmRGNANBLDHFBBLRBJFLDDV@bIPGmpYPKzeDCFKDECEEICECCEIQ_CIAOBINIPETDdLLBLBh@FAD@DABAFCDEHGFIDGZUVSdUXWFIHKNSDE@C@EBEBEAEAEAE@CEKAGMKUEECGACCCCAC@EAE@CAEBG@EFILO`KF@^@@VA^EHAFAD@DCDEBEBA@E@EAECEAAG@I@WJOBOEqUeIcSMGIEECCACEECCCC@GBE@C@ADCHG[vI^AH@J@HAJ@FAFCHCFCFCFAFADA~OzE\\C[TIPENEHCDEBC@GBEAE@CAGIKGMACCIMaACCEEECAAAGCECGEAEEIJOCECEECG@iFKBO@eKUOGO@G@GBET[VY@IKa@YRUTMfCHCNILUHMTQ\\UXUPYHMXwDEJGFEZS`qLKfQTGPEHEFEC[DKPIXE`BXBXIT]EWMQAOBGFGLWFIFIDK@KW]ICKASGWIYOCEEEAEBEBE`]FCFApO¤ULAPCvOhQHCFADCDE@OSYk_QY@KAMAEEC]_AGPW`SnOLAhALACTCLMT[Lc@UMUgOHcDU@KAKIWUEIGO@IPJO`[lU^EPAL@Z@JDZZ@NENSV}bEJAHDNDDRH~PnFrBNAPEFEDOAOCUIQeeQQmcCGCKKSIOO[GIBIDODEBOPqH[DWBmDmBiJKpKkvkLQZcSEE@@AAAA@@AA@@A@AAA@A@AA@CC@C@A@AB@BA@A@AAAAACA@AAAAAAA@AAAAAC@AA@A@AA@BA@AB@@AAC@A@C@A@AB@@A@A@AB@BABA@ABA@AA@@AC@A@A@CAECCAA@A@A@CBA@A@AB@BA@@BA@ABA@A@CBA@A@C@AA@AA@AAEAEAAAA@EAGAA@I@I@I@K@IAI@K@I@IAKAIAIAI@KAIAKAIAC@G@I@I@I@K@I@I@K@K@I@I@I@I@I@K@K@EAGAC@A@A@A@A@@AA@EBO@A@A@A@CAA@G@I@E@C@GAGAGAIAE@IAGACAE@C@C@E@GAE@A@A@E@CAEDEDEDEBEDEDEAGCGAGCGAGCKCEAEBI@GBGBIBGBIBEAG@G@IAG@E@IAG@IAI@C@G@I@EAI@G@G@I@G@I@G@C@E@A@C@A@C@E@C@A@C@I@E@IAI@I@G@GAA@ABC@ABA@ABA@@BA@@BA@@BA@@BA@@BA@@BA@@BA@@BA@@BA@@BA@ABED@BA@AB@BA@@BB@@B@D@B@BA@ABA@ABA@CDA@CBA@A@A@A@A@A@CAC@C@CAQ@ABGDGFEBADGDGFEFGDEFGDGFEFGDEFCBCBGDIFIDIFGDIDGDED@B@BBB@B@B@BA@@BC@ABG@EBEDG@C@CBA@A@A@@BA@G@CAM@EBIAA@E@I@ABEAA@C@ABC@A@E@A@ABA@A@A@ABA@A@ABA@A@@BA@@BCBA@A@ABAAEBA@CBA@AAA@A@A@A@ABAA@BA@AAA@A@A@A@A@A@EAA@@AAAA@@AA@ECAA@AAA@A@AA@@ACAA@AAA@AAA@@A@AA@C@@AA@@AC@A@@AA@AAC@C@AA@A@AA@@ACAAAG@A@AA@AA@@AA@@AAA@AA@A@A@C@ABC@A@ABBDABA@A@A@CBA@E@A@ACAA@AA@CAA@ABAAA@A@AB@BA@A@A@ABCBA@C@A@AAA@A@A@A@A@@BA@A@A@A@A@A@A@@A@A@CBA@AB@BA@AB@@AB@@ABA@A@E@AB@@C@AAA@AAA@CA@@A@C@ABA@AE@GEEEECECCCCCECCCAAECCCGAA@C@C@C@A@A@A@A@A@A@A@A@A@EAA@A@A@@AA@A@A@E@A@A@@BA@A@A@A@G@@AIAA@AAEBA@CBA@A@AB@BAAABAAC@A@EBEBA@A@A@@BA@A@A@@BCAC@A@A@@AGE@BAFBDBB@BFBDDFBDBBBB@BBD@B@BABAB@AC@AAC@A@ABAD@B@B@BBBD@LBD@BAF@BBB@DBDHFBB@DBD@BB@BBHAB@B@BB@B@BABAB@BB@D@BBDBBBF@D@F@BBB@@BABA@E@A@ABABBBBDBB@D@BB@@BBD@B@BA@@BC@E@AACAAA@ABAA@@ACAA@A@A@AB@B@B@BA@E@A@@B@BA@A@C@A@CBA@CBA@@B@BBBDBFBBB@B@BABCD@B@BD@F@BBB@BB@BABA@A@CAC@CBIDC@@B@BAHABCD@BBBDBDDB@FBFDBB@BADCDEDAD@B@B@BB@B@BCBCB@BAB@DBBBBDBB@BCDA@C@C@A@CBABAB@B@BBBD@F@B@BABABABAB@DAD@DBDBBDBDADADCDGBEBC@EACAA@A@CBEDEBEBCB@B@BB@FBBB@BABC@EAC@ABCBE@M@GAA@ABBBB@B@BBBBBBB@FBFFDB@DABA@A@A@CAA@AAC@EBC@GBABEFIFKFGDGDGBA@@BBBB@D@BAB@DAF@D@DB@BABA@@BA@CAC@C@CBCBAB@B@BB@D@B@B@BB@BAB@BBBF@F@B@BBB@@BCBABAB@DBBDBB@@B@BA@ABABBB@BDBBBB@@B@F@BABA@A@A@AA@CAA@AAAC@ABAB@D@BBB@BADABEBEBC@CAAACAGEAAAASIAACACCCAC@EBA@@AA@C@C@A@@BD@B@BBBBABG@ABCBA@ABA@@BB@B@BAB@B@BBB@@BC@A@A@@B@B@BBB@B@BA@A@AAA@A@A@CB@B@BB@DA@BB@AB@BB@@BD@B@@BC@ABABC@ABA@A@AACCA@@B@B@BC@AB@BB@BAB@BBB@@BABA@EBA@ABABA@EBA@AAA@AAA@@AAAA@A@@B@BABABA@A@@AB@BAB@AAA@ABA@CAAAA@A@AAAAA@CB@BBBD@@B@BABE@C@C@CAABA@CAA@@B@B@BCBAAEAA@A@@B@BB@B@@B@BA@CBA@AB@BBBB@BAB@B@@BCDAB@B@BB@BA@AB@@AB@@BBBB@FAB@B@@B@BABABA@A@AB@DABB@@BD@DAB@BB@BAB@BA@C@CBADCB@BB@BBB@@BA@A@CAA@ABABA@ABABBBBBDD@BBBABEDCBABBBBB@BABCBA@AB@B@BBD@B@B@B@BABCDCBAB@B@BB@DBBB@BABA@E@ABA@@B@BBBBB@BA@A@A@C@AAAAA@ABABA@@B@BB@BBAB@BA@@B@BA@A@A@C@ABABABA@A@A@ABA@A@AA@AA@A@A@@BB@BB@BA@EBABC@A@AAB@@AA@A@A@A@ABA@E@AAA@A@A@AAA@AAA@ABA@A@AAA@@B@BA@@BABAAA@ABABA@AA@AB@BACAA@A@@BABA@A@C@AAAB@BAAA@AAA@@BA@A@A@A@@A@AA@@AA@@B@B@BA@A@A@A@ABCAA@ABBB@BA@AA@AABA@@AA@ABB@@BA@ABA@AB@B@BA@A@@BBBB@BBB@BBB@BBB@B@@BB@@B@BB@B@@BA@@BB@@BB@B@@B@BB@@BA@@BA@A@AB@BB@@B@B@BA@@B@BABBBB@BB@BA@@BB@@B@BA@A@A@@BA@@BA@ABA@@AA@A@@BA@BBA@A@A@ABC@@BBB@BA@AAA@A@@BADABB@B@BBABA@@AA@A@@BABA@@BB@ABAAAB@BB@@BC@BB@BA@CAA@A@A@A@@BAB@BBB@BB@B@@BA@C@A@@BB@B@AB@BC@A@A@ABA@@B@B@BC@A@@BC@@B@BABA@@BB@CBA@@BB@B@ABBBB@BBA@A@A@A@@AABA@@BA@AAA@A@AB@B@BA@A@A@@BB@BBB@D@B@B@BB@BBBA@A@ABA@A@AB@BA@@B@BABB@B@AB@B@BCACBAAA@AB@BB@AB@DB@BBA@@BA@@BAAA@@BABBBB@ABAAABB@@BABABC@A@@B@BA@@BB@B@B@@BA@C@@BB@B@ABB@ABABA@A@A@A@@BA@AAA@BAA@A@@BAAA@A@C@AB@BA@A@A@A@@B@BA@@AA@A@@BA@ABA@@B@B@BA@ABAA@BABB@ABB@@BA@A@A@@BA@A@@AABA@C@AB@BABBBB@B@B@@BBB@BA@A@A@C@AA@BC@A@@BAAA@@BA@A@ABA@BBA@A@@BB@B@CBA@A@ABBBCB@B@BBB@BB@B@ABA@ABAAA@@B@BA@@BA@A@@AABA@A@ABA@@BB@@B@BA@A@A@A@A@A@@BA@@BA@BBA@A@@BB@@BB@@B@BA@@BA@A@@BA@@BB@@BB@@BA@A@A@A@ABA@@BB@BBB@B@@BA@A@BBB@AB@BBBB@B@@BA@ABB@@BA@AAA@@BA@A@A@@AABA@@BA@AA@B@BA@A@@B@BA@AAA@@AA@@AA@@B@B@B@BB@@BA@@BA@@B@BA@A@@AA@@BA@@B@BA@A@@BB@@BB@@BA@@BA@A@@BA@@AA@A@A@@B@B@BB@@BA@A@AB@BC@ABA@@B@B@B@BCA@B@BA@A@@BABA@BBA@A@@AA@@BA@A@@AC@A@@BA@@BAA@BA@AB@BB@B@@BA@@BA@A@A@@BABABB@@BA@@BB@BBB@B@@BD@ABB@B@@BA@@BB@BAB@DD@B@BAAA@@BABB@BBABB@@BA@A@ABA@@BA@A@AA@BA@A@@AABAA@BABA@BBA@@BB@@B@BA@A@ABAAABC@A@AB@BB@@B@BCBA@A@AAAAA@@BABA@ABA@A@ABA@@DBBA@ABBBA@@BAB@B@BA@ABA@@B@BA@@BA@A@A@AB@BABABA@A@@BA@A@ABABB@ABBB@BABC@@BA@A@@BB@ABA@A@ABA@ABA@C@@BA@@BABABAB@AA@@BA@A@@B@BA@A@@BA@@BCBAB@BB@@BA@A@A@A@A@AB@B@BA@A@@B@BA@A@A@A@ABA@@BABA@A@@BAB@BA@@AABA@A@@BB@@BA@@BABA@A@@BB@@BA@@B@BA@@BA@@BA@@BA@A@A@@BA@A@A@A@ABA@A@A@ABC@ABA@@BA@@BA@@BA@@B@BB@@BA@@BA@A@A@@BA@A@AB@BABA@ABAB@BA@A@A@@BA@@BAB@BA@ABA@A@A@A@@BA@A@A@@B@BA@A@AB@B@BA@@BA@@BA@ABA@ABA@@B@B@BA@ABC@A@A@@BA@AB@BA@A@A@@BA@@BA@@BA@ABA@A@@BA@A@AB@BA@A@@BA@A@A@@BA@A@ABA@@BA@A@A@A@@BA@ABA@A@@BA@@BA@ABA@ABA@@BA@A@@BA@AB@B@DAB@BAB@B@B@B@B@D@BB@@B@B@B@BA@A@@BA@AD@BA@@BAB@BABCFQHQLYC[GKIGEQJchMFUAGIOAmRQBKCIMEEVQ@IC]EcBAD@X@HALODWBSEMWIMIGGEIECK@QIGGKCKAEReDODIBGAQ[]GGOISA[CgFCAMKGMEIIEQAkCA@oMCCCI@MIEICDKNCREHIFMFSEKIGOGQAQEGCIIWUGIAMBU@CQIWGUBQDYFeHSBWBQBWCOECAAEKgEKAASIWKOEIEG@gOG@iBiAKAIGEAQBCBYVIHCDIHIPONYNODUF_C[BUJ[DC@UAM]IGOA[@YEMGKOAEGWDKDc@I@COMAEMWOOM@SFkHEB_OC@EBEHAJCNBHABA@EAIAOCU@KNKBEB[NWFADCRGLGDmdMFMFM@MASIQIKAWDOFIFIAGCWCEBEFODWCQAQAQCEEIWGGMCQ@g@gD{@QA_G]C_EOIKOQL]NYNCBghCHSXKJQNOBM@QGMCQCQ@SHMFYH]PCDQJMLKJQDMACEGGKKIGGEKI@I@UGKMEQCII@CD]AMWBM@wMS@SAMEMC@I@OECWCSCS@OAYAYBgFOB[CQCCAIKEMICUAMBUDOJ_CMC_OM@SFMD[BYEWISKUICAK@E@KBMBYFSFQHOHEJDHBBIFKBU@UAWFSFUHKNOFGAG@MAUAE@CDUPUDUBOFIDQJUBQAGAYEA@EAICA@CAA@CAAAA@EAWDCDOLSRIFSVCHGRCN@LFNDPBJGNOJOLUFWFO@IBOHINAJDJDNCLOH]FMHAREHMHCDEHBDRHDDNLJJ@BDN@NCBUJQPDHHHHBXHHFBDBDAFADKPIH]RYJ[N@BBLBDLJTNLJGJMRGF]NKFENBPENkvIJKLILGLCT@NENINEJCBUH@B@DBBTXPPFLBNGJCLAJGNMNEJEJKLQNABAN@BFL@RELGRCROJKFKHDRJRXNJJBH@HALITBLBNBPBJCHAN[BgEQEMLKJ@FAHKNAL@ZCNKPGL@PA\\SHYDC@AD@BbBD@DBF@D_fAD@DBDB@\\DZ@DHH\\DfHVHDJJLr`DBDJBVAR@JERKRDJlNFLEN"],["@@@AABB@"],["@@@AA@@BB@"],["@@@AABB@"]],"encodeOffsets":[[[127079,51444]],[[125735,53507]],[[128779,52493]],[[128732,52542]],[[128687,52576]]]}}],"UTF8Encoding":true});}));