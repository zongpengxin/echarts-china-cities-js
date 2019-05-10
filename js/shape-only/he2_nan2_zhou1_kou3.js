(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('周口', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"周口"},"geometry":{"type":"MultiPolygon","coordinates":[["@@G@@B@BA@@FA@@AA@A@@EAFIAJ@QA@EI@AA@CC@C@@BB@@BA@@BE@@CA@@DE@@BE@@B@BD@@DCBA@@F@P@FKAABA@C@@AAA@E@CC@@CC@A@@BC@C@@BA@@B@B@BB@@DB@@DB@@DD@@D@BB@BBA@A@@B@B@FD@E`E@ADC@@BC@@BC@A@ANA@C@@B@BCA@AGA@CA@@AI@A@@EA@@CC@@AA@E@@EA@@AA@G@A@E@A@@DA@@BE@@B@JE@A@CB@BA@@AA@AB@B@BAA@D@FA@E@E@@AA@A@@BB@@B@DC@@BA@EBA@G@@CAC@DA@@AA@@HC@@BA@@BA@@B@FA@@D@B@BB@@FBBA@@BC@A@C@ACGB@DA@@BC@BBB@@D@BD@@BB@BH@B@BC@@B@B@BA@@BAB@BC@A@@DD@@DB@@BB@@HB@B@BHBB@BEB@B@BAB@D@BK@@AA@A@EA@B@DA@BJ@BA@C@A@CDC@I@A@A@BCA@A@A@A@A@E@CBA@ABA@C@@ACA@OK@AA@BC@A@E@@DO@M@E@A@KA@AC@@AE@@AE@DAG@@B@D@FDA@B@FB@@DBX@B@DC@@BA@FBC@@DA@@DA@@CE@@BC@@AA@@CA@@DA@@DA@@C@AA@@BE@@AA@@AC@@AA@@BCA@A@C@GGB@FA@@DG@BDA@BLA@@BB@@D@FD@@AB@@D@BC@@B@DA@C@@FA@@CA@@DA@@EC@@FI@@B@DA@A@MA@CA@@CA@G@@AB@@A@AA@@BE@@DA@@C@AA@@DA@@BA@@CA@@BA@@DA@@AE@@B@BC@C@@BA@A@A@A@A@AAA@A@@BE@@AA@@AA@@EKAA@ABA@A@AA@ACB@AG@@AK@@CG@@BA@E@@AA@@EB@@IC@A@@BB@@DC@@BA@@DD@@DB@@B@HC@@CA@@BC@@CA@@DE@@BA@@AC@@AC@@CA@E@AB@A@EB@@ECB@FC@BEC@@B@D@DB@@HB@@BBAB@@HA@@DA@A@@DA@E@@BC@@AA@A@A@A@@BAACA@HA@@AC@@AC@@DA@@FACA@C@@DA@@BB@@BA@@BB@BB@BE@BBC@@AA@@BEBC@@BC@@FA@C@@BC@@BA@A@@BA@@CA@@DC@@BE@C@@AC@@A@AC@@A@CI@@A@CA@@DA@A@@CA@@CA@@BE@@FBB@BG@@BB@@B@B@B@B@BA@@BA@@BA@@HD@@BA@@DD@@B@B@FA@@BA@@B@BA@A@BD@BD@@BC@@DC@@DAB@B@DD@DB@BF@B@@FF@@AB@@FN@@BE@@HDB@RBB@HA@@AA@@DA@A@@BDB@DB@@ABB@BAFDBAJBFB@ADK@@AK@ACA@C@@B@D@DA@@DC@@F@BF@@D@F@BE@A@CAADA@AFC@@FGA@BA@@B@F@B@BCB@DAB@B@BAD@B@B@BFD@BD@D@D@@AD@D@@AHDB@BFA@A@BFAB@B@BD@@DDA@HHA@F@H@BG@A@@BE@@BE@@B@DEA@BEAAB@BA@@BC@@DE@@BAD@B@BAB@B@BBDBD@HB@@FB@@F@B@DBHC@A@@B@BA@AB@BBA@DC@@BA@@JA@@BD@@BD@D@@FB@@BB@@BB@D@@DH@D@B@@BI@AJ@HA@@EW@@BIB@DF@@DA@@DA@@BA@@D@BD@@F@D@D@B@BA@@BAAA@ECKAEACAAAIAEAE@A@A@C@A@A@@ACACEAAA@A@IBCBCAE@A@AAAACACAEEEAAA@AAA@A@CBCBA@A@CA@@AA@A@A@A@C@ABA@AAAEACAAAAA@A@A@C@ABABABADA@A@A@C@CCGEACAA@A@A@A@A@A@ADC@AA@@AA@@AA@A@C@K@E@A@KBE@GBM@A@A@AB@B@F@J@D@B@BB@@BB@B@@D@B@BABAD@FHB@BA@CAA@C@@B@JG@ABAA@BC@GCA@A@G@@J@JF@@FAB@BCB@BC@@B@HC@@FA@@NA@A@@JF@@DA@@DB@@R\\@@B@B@D@B@B@B@BB@BDB@AFCAAJC@@PA@@BC@@AE@@FA@@B@H@BB@B@D@B@J@TB@CDA@BBDB@F@B@@AB@D@D@B@N@B@B@D@@BAD@BC@@BB@@DBD@DA@@DA@BLB@@HA@@BC@@BA@@BA@@B@BA@@D@B@B@B@DD@BHB@B@@HB@@DB@F@ACB@D@B@@C@AV@@AB@@ABAB@@AD@@ED@@ADBB@B@BD@DB@B@BAB@B@BDB@@BA@@BBB@BBAB@@A@AB@@A@AAA@A@AB@BBB@B@@B@BD@B@BAB@B@@BBBB@B@@ADA@A@AB@BBB@D@@AA@@ADABB@BB@B@@BB@B@@A@ADBB@BA@FB@B@@B@D@BB@@BBBB@@E@EA@@CDCHEBAB@R@B@B@B@HCD@BAD@B@BC@CBABC@CP@@BD@BBB@TCAGJAAAB@AEH@B@@AD@@AB@BAA@BABBB@B@BCB@ACB@@AB@@BB@D@@B@B@BB@DDFBB@BB@BB@DB@B@BB@@BB@@D@HL@F@D@BFBHABDLCBBD@FB@BFDABBBBB@@FD@B@BBDBB@D@@HA@@DA@@DA@AD@D@FB@@BB@BBB@@BEA@B@BA@@B@DG@@BEAALCAABA@@DAB@BA@M@A@ATXB@DDBA@@BADDB@HD@@DC@@DC@@DC@@BBDFHDH@BC@E@@BA@@BADA@@DC@AD@HAPA\\AP@FC@@H@FA@@DB@@BE@@DF@@BB@@DAJ@D@BCB@BDH@BDJV@B@@FE@@HE@@FC@@F@D@HH@@BD@@NA@@BA@@FB@@BA@BHC@A@@FC@@B@BG@G@@AA@A@@D@BEA@H@BE@A@C@@DALB@@H@BB@@DB@@F@FAF@D@B@BD@ABADCFADDB@B@DA@C@A@@BK@@CA@@DCBC@BEA@@DA@@D@BAB@DB@@B@BB@@B@BB@@HE@@FBB@DI@@B@B@DA@@B@JI@@BB@@BB@@DD@@F@BBHA@@BIB@BA@@DE@@BBH@BB@BBB@B@@BB@D@DAD@D@BBD@B@@DBFG@BFBF@DD@BB@B@BFA@BB@DHBBB@BFB@BFB@@BB@BFDDBBA@@BCBC@@HA@@DB@CB@HABA@A@@BG@@BH@@BC@C@BD@BB@@DA@A@A@BB@BCD@DBJD@BBB@@BE@@BA@BFABE@@BBB@BA@@BF@@DC@AC@F@B@DBJB@@DBDA@@BA@BDBFBABFBFB@@DB@@CB@@DB@@BD@@DBBATADA@A@BBAB@B@BCDCA@HI@A@@BA@@FA@@LBD@B@B@DA@E@A@@BCB@BABBBCBA@EDB@AB@B@B@BD@DB@ADDB@HF@D@HD@@BD@BFB@@BD@@DF@DAD@BFD@FE@BRC@DB@D@@CB@FAD@@EH@@ADAJA@BF@D@F@B@@AB@AAHADADA@AD@@EB@D@B@B@@ED@BA@AF@@AD@@BD@@AJA@AD@@BBBB@ACF@BBB@@BB@@C@ATCF@DAB@B@B@DA@BDA@BD@@BB@DA@DH@@DDABB@AB@B@HAB@LJ@B@DA@BJBFBJ@BJAD@NAD@@BB@@DD@B@BBFFCB@FB@H@BB@B@B@F@DBB@D@DA@@FC@AFGBBDG@ABAA@BABA@AF@B@BAAABE@ABE@@DA@@CC@CAA@@B@FB@D@J@B@D@ABF@@BB@@BF@@BD@@BDBB@@D@DCB@FF@ABA@@B@BD@@HB@@EB@@B@B@BADC@A@@DE@@BE@@DD@@BB@@BF@@AB@L@@A@CBAC@@A@AA@BED@@ABAFBBCB@@CF@AAD@@AD@@AR@@BF@ABA@@B@B@BABC@ABHB@D@BD@L@@BH@B@B@B@DAD@BAD@DAAAEBAAADCA@ABB@CB@BBBAB@FKFB@AD@BABBB@BCA@BEAABABGF@B@BADA@BD@NAD@@L@BB@LA@CD@@A@AA@@AAAF@DA@B@DF@BCA@@CH@DAB@@ACBG@C@@AA@AA@AB@@A@GBAB@@E@AB@@CAAA@@EB@CCD@B@@CB@@BD@F@B@@AD@D@H@ABB@@FB@@AF@@BH@B@D@@CC@A@BMCA@AB@@C@CD@@CD@DAAAB@F@B@ABH@D@@BN@@BF@DAF@@BB@@BH@HBBBB@@AB@D@FAD@B@@AD@BEDA@ADA@CF@@CFB@CD@@AN@@AF@@BB@@DD@@BC@@BJ@@AB@@AH@BA@CHGBCDA@ABAB@B@BABAFA@B@BD@@AB@@B@BD@@BB@@AD@D@@BB@@BB@H@BABBB@B@B@@E@ABAA@@A@AB@@AB@@AB@D@@BF@@A@ABBB@DA@DB@@B@DD@@AF@B@@ADBD@JAD@B@@AF@@A@AF@@AB@@ED@@DB@@DB@BA@BDA@AB@@ID@BCA@@CA@A@CBA@A@@DCB@AB@@AACC@HA@AA@@CB@@CB@@CB@@D@FB@@EF@@CD@@AB@B@@DH@@AD@@BD@@B@BD@@HABH@HFBA@AB@B@@BB@@AB@D@@DH@B@@BD@B@BBB@D@B@@BD@@B@BB@B@@D@DA@@BC@BBC@A@@BCAA@A@@D@DH@@BB@@DD@@FF@H@D@@CB@@DD@BB@AB@@BH@B@B@B@@FD@@BD@FDB@H@@AB@@AB@B@@BD@J@F@@AH@@AF@@BB@@A@AB@@DB@@BB@@BF@F@@BA@@BB@D@@D@BB@@BB@D@@BH@@DB@@DB@@DAB@BC@A@@F@B@BBB@DA@@DB@B@@FB@@AB@H@BEJ@@ABAD@@A@CB@B@@ADBD@F@D@@CAA@AD@@CB@@AH@@A@CB@H@D@H@F@F@@EJ@B@@ET@F@B@@F@DB@@HA@@B@DA@@D@BD@@B@D@BC@@AA@C@@D@BXAF@@GJBB@D@@AF@@B@BD@VAD@D@@E@CC@@ANA@GA@@GDA@A@ACEB@F@@B@BB@@FF@@BB@@BD@D@BCB@@CB@@A@AB@@AD@@CBAB@F@@AB@@CB@@AB@@BFA@BB@@BD@@BA@A@BD@B@B@B@BB@@B@BB@BB@FB@D@@EB@@BBA@AB@@AF@@AB@@AHAA@CGAAA@BC@CB@BBDA@BDABBB@BDB@@DHCCGA@@A@A@GD@B@B@@BB@B@@BA@BBBBB@AAD@BDD@@HB@@ADA@CD@@AB@@BD@@ABAB@@DDA@DFADA@BB@B@@DDABA@DHAD@@CB@@EB@B@D@HMFO@CB@D@@ABAJ@@A@AJCB@F@HBFB@CFABBNABDDA@AB@B@@A@AB@D@@BD@@AB@@A@CBAD@@AD@@ED@@BF@@GD@B@@EB@BCB@B@B@B@DDFDD@BBD@B@DCAA@AB@AGGBACEBAAGBAGB@@AB@@BF@@DHAAG@AB@@AB@B@@AE@@CC@ACC@@CDA@DF@@GD@D@@EB@@BB@@DLI@DH@BC@CC@@G@A@E@CA@@CJ@@ACABCC@@AB@@AD@@AE@@AD@@AIB@EA@@CA@@BA@@AC@@A@A@AB@@EA@A@@CA@@A@CD@AG@AAC@CB@@GA@@CA@@BA@@AA@A@@AC@C@@A@AB@@AD@@A@C@AB@@B@BB@@ED@B@B@@G@AA@@A@A@ABC@A@AD@@IC@A@C@@AA@@BA@C@@CC@A@@AD@B@@C@A@A@A@C@ED@@AB@BAAAABA@@AFAAAB@@AA@@CB@@CA@ACA@@BC@@CACB@BBBAB@@AB@@A@CA@@AA@@CAAF@B@B@@AH@FA@AB@@CH@BAFCBC@AAAB@@CB@AAA@A@@A@A@ACAC@@EA@BACC@AAA@ACAAAAEAAAE@CAA@AAA@AEB@DA@EB@DC@@C@AA@@BAA@AA@@E@C_DC@M@K@C@C@C@AAC@@OZ@BCBA@CACCB@AB@@CB@AAC@@E@AC@AA@AA@@A@CA@@BA@E@@CAA@CA@C@@C@CA@@CGB@CG@@CAB@A@AA@@C@CF@@EB@B@BABAA@AGA@@AA@@DA@@AC@AA@A@CB@AEB@@I@AB@@A@AE@@BA@@AA@A@E@@BC@@AA@@A@A@ADACAA@@A@CDAD@@GA@@AB@@AB@@AB@BAB@@BB@@CF@BBB@@BB@BBB@@BD@@CFCFADA@BB@@AB@F@FAB@B@DADADA@AHB@AD@@BB@@BB@B@@BJ@@AD@@BB@DHB@@BBHB@@D@BC@@AC@@B@BAB@BBBFHA@CDB@D@@FD@@DB@BD@BH@@BBA@AB@B@@DD@H@B@B@D@B@B@DCD@B@D@D@@C@AB@AAB@@C@AB@@CA@AEB@@BB@@ALA@AB@HADABCFBB@TD@BB@@BBADD@B@BD@@BB@B@@B@BB@NA@DB@@HAB@BB@@DA@BD@BP@@CJ@@BB@@AD@@BHBDB@ABD@BA@@B@BAB@BCBCBABCBA@EDCAA@A@@BDBCFB@ADB@AF@FJ@DBB@@ADEBAB@DAFAFAFADAD@DABADAD@DADCFAB@BFA@@DA@@BA@@FL@@AHA@AB@@GDBBBF@DBJBB@DBF@@DC@@AA@@BA@@DAA@HB@AD@DA@AHA@@DA@@DB@ABABADABABA@FBAJ@FAA@DD@ADB@B@@BFB@BB@@EL@DAB@D@F@D@BDD@@AB@@BD@@BF@@BL@B@D@@AB@@BLB@BJB@A@EAACAAAAEAECGAEC@@AB@@ADA@E@C@AD@@AJ@@AB@@BB@DAD@@DB@@CB@@DBA@DF@@AH@@BB@@B@FBFF@@BD@BDJ@@BB@@AJAB@D@@BDABF@BDFD@@BD@@BBA@HB@B@B@BAB@B@BABADAB@BD@DB@BB@BB@BAB@DEHEBAD@BADABANEBADADADABABABADAFCB@BANAH@H@D@@AB@BAB@BAHBBADABADAB@DAD@D@B@BAB@B@H@H@F@D@J@@B@DBB@BABABB@BBD@BDA@BB@BB@@BBDAB@B@H@F@BB@DABBD@@CB@B@@AD@BAB@@DH@@BD@@DB@@B@BB@B@B@@BB@D@BD@BBFDABABA@AFAFAB@B@@BD@@BFA@DD@B@B@@BB@@DA@@FD@@BB@B@DC@BB@@ABCDADCDC@AB@BBB@@AD@@BA@@B@BB@P@B@BD@DD@@DBDA@C@@JF@@BB@@DB@@DB@@BBDD@@DBABAB@@BB@@BAB@DA@@D@JB@@BBDAD@F@B@H@DBB@B@HAFAJKBAFB@@BD@@DB@BAD@@BF@@BD@@HD@D@@DF@@ALA@AF@@DBAB@@AFAB@@A@AHA@AB@J@@A@AB@D@F@@FB@BFC@@HJ@AC@ABAB@BAD@BA@ABAB@@BB@H@@DJ@D@@IF@B@B@@AD@@BFBAHPB@BB@D@@AH@BA@ABCH@@EF@@A@ABAB@ACBCAA@AA@@CF@@AB@@A@GA@BAB@BAFCBIACACCAACAAAA@EBIBA@A@AOEEAIBM@EAECCBAB@BABA@C@CAICGE@AA@@AA@AC@ABABABABEBCBA@AACA@GAQ@@ACE@ECG@CACC@AAAA@C@CBABAHADA@AAAAAAA@E@CAAA@OC@AAA@C@CAK@G@A@ADG@CAAC@A@AAC@CCAA@C@ABC@C@C@C@C@ACAEAAAACCI@E@CBAA@BAAAAB@AFCDAFCB@AE@AAAEBCAE@CACCAC@ABAFABA@A@CACCCAACBGBA@A@AA@AAO@CBC@AB@B@B@DBD@BBD@BAB@@A@C@AB@@AB@F@B@B@@BB@BBFDBBB@F@B@B@BBB@B@BAB@DCB@BA@ADA@AB@@AB@DAB@B@B@B@B@BAB@B@B@B@B@B@BAB@BBDDB@BBBBB@B@B@B@B@B@B@@BBB@BBBB@@BDCB@BCBAB@D@B@DCDC@CCABE@EBC@EBA@ABABCBC@E@C@AA@GCGCCA@G@E@CAG@AAAKAA@AAAA@ABABABADABADAAAAAAC@CACBE@ABC@CACAA@CAGCM@CEEA@CBCBCBCBC@EBCBCBE@ABC@ABCBCBABA@ABA@A@A@C@AAAAAA@C@ACAAAC@G@AA@C@CAAAC@A@AB@JIBA@A@A@A@ADIBCDCFCDADADADCBCBCDEDCBABADCBCBC@CBA@ADEBCBC@AAEAAEGAC@E@E@ADCBCDAB@@AB@@A@A@AB@BABA@AG@EA@A@CAC@GBEBCBABAB@AE@I@CAC@A@ABADIBABCBCBCBABABCFGBABCBABA@AB@BCHGB@@AB@@ABEBCBCFMBIDIDGBGBC@CBA@CBAEAE@C@]CEACAA@C@CAGAE@CAC@A@C@C@K@IAG@E@I@G@A@@AAOAEAAECC@CBCFC@E@E@E@CAICC@C@E@EAACCAC@EACACAACCAC@ABEFCBAD@FABABEAGAIEGAAAE@G@EAABA@ABEDADADAB@BC@C@C@EECCC@M@KAKCIAG@AAC@GGCCAEAG@EAEAAAAAAA@A@A@AA@AAABCBCACA@AACAA@@ABABEBEB@AA@ECGEGAACCA@AB@FABEDA@@EA@@B@FGFCBA@CBABC@C@C@A@@HCBCBCD@AAA@AA@CCACAAGEKGCCCECCB@@A@A@AB@@ABA@E@AB@@AA@@AB@DA@AACA@AAB@AC@AA@ABA@@A@AA@@CB@BAD@@AB@@OAGAE@K@I@EAAG@AAIAA@ABA@AFA@CD@BEDCBAC@AAABABAAA@CE@AAA@ABC@@CB@BABA@C@A@EAA@ACE@E@G@CBI@CNQBADEDCBC@C@AAA@ACCAEEAAACC@AMS@A@A@A@ABABABAB@J@H@H@D@N@FBFA@ADO@ADI@C@A@ABI@EAE@A@ABAFAJBJ@DAB@@AES@CAE@GCI@C@C@ADEBG@AACA@C@AAEBC@CBABCBC@C@CAEAAA@AABA@@AA@@A@A@A@A@A@A@AAI@ABAB@BABA@A@ABA@A@AB@@A@ABA@CB@@A@A@A@A@A@A@EACCCGEGGAC@G@CDI@E@AAAAAAACCAAACAAGACACA@CACBA@AHAJADA@A@C@AAAA@AAE@CAE@ACA@KAKAA@AAAAAAA@A@@A@AAA@CAAAI@AD@@A@ADA@A@A@CEI@G@ABABEBCBEBABA@ECI@ABAB@@A@ABAD@@ACM@AA@AAA@ABCDC@A@@A@AAKAC@AA@A@A@A@CDABC@A@QDCBAAAAAEAAA@E@C@CBCBGDC@C@C@A@CC@ACGCCEAI@K@C@GCCAAAAAGGCGA@@BADABA@ABA@ABC@A@C@AB@BA@CAOGOEAAECEEEI@CAC@M@CACA@@AIAIAGAIAC@E@G@E@]@E@OAMBA@I@G@EBCBG@MBC@I@C@C@AAA@AACACAA@A@ABA@@BABALABC@A@AAECAAEAAAA@KDE@ABG@CBE@CDIFGFC@C@GBE@IBE@CDA@@B@F@B@H@DBF@DBFAB@BA@E@A@ADA@ABA@@BCFCBC@A@G@CDA@@B@B@B@B@B@BAB@B@BEBBB@D@B@BCBABCAAAA@AD@BE@ABA@C@ABA@E@C@GBA@A@C@E@ABACB@@ABA@A@EA@@AAAA@A@A@@AAEAA@AA@E@C@UCA@ACAA@AAAEAAA@A@A@A@ABAB@BCBE@EACAKA@@EACCEEG@AAE@G@ED@@I@CA@@CG@@BM@@DI@G@@CC@A@A@@AA@@BG@@AA@E@BAE@A@C@@BA@G@A@@A@GBK@ADC@E@AC@@BA@A@@CB@@BBA@A@A@AB@@AAA@AAAC@@CA@A@@AC@A@@BAB@BA@@BA@@AA@@BA@@AA@@B@DKB@BA@@DC@A@@BC@@AC@A@@CA@@AE@@AEB@CA@A@@DAB@B@BA@@BABA@A@@BA@A@C@@A@AA@@CA@@CE@@AA@@BE@A@@DC@@DD@@BB@@BB@@BADA@@DEA@DA@@BC@A@A@@BCA@BA@@AIAABG@@BGA@AE@@AEAADB@AD@DDBABB@AFD@@FB@AFF@@FGA@FE@AFCJADCFDB@BAJC@AF@D@BA@EA@AC@@BC@@AC@@EE@@AE@@AB@@AA@A@@DC@AHC@@FC@ABC@@D@B@FB@@B@BA@@BC@@BI@@BG@@BC@@BA@@JBB@DC@@B@D@D@BCB@BA@@BB@@DC@@DCAABA@A@MA@B@N@HCB@BK@@D@DBFA@BF@BG@@AGB@BC@@BCB@AE@@BE@@B@BF@@FDABDB@@BB@@BB@BDB@ABB@BFB@BA@DCBBBD@@BB@@B@BB@B@@BDBBBB@@D@DA@@BC@EB@DH@B@@BABA@HF@BB@DBDBFBB@BCB@AFDGAHBEBBAFD@B@BE@BD@@HD@@BE@@B@D@B@BAB@B@B@BB@D@@BE@@BF@AB@B@BF@@FD@B@@AD@@DB@@BC@@BC@@DAB@NA@@BB@@B@DD@@ADB@A@AB@@BB@@DB@@B@B@DAA@B@FB@@B@B@DABC@@DB@ABC@AH@B@B@D@DAB@BA@@CA@@B@B@DD@@BB@@AD@@BF@@AB@@B@DABAF@B@BBBABAB@BA@A@@DA@A@G@DF"],["@@@AB@ACA@BF"],["@@C@@BDA"],["@@@AAAA@DD"]],"encodeOffsets":[[[117475,34098]],[[117064,34281]],[[117726,33939]],[[117818,34770]]]}}],"UTF8Encoding":true});}));