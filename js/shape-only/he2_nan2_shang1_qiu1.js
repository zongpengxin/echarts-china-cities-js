(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('商丘', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"商丘"},"geometry":{"type":"MultiPolygon","coordinates":[["@@D@@AREVGLCDALTNBXBF@B@B@BBdDD@N@H@XBD@X@B@FBtNDBLBR@XBHDHDBZ@F@BLXLBTBVWDAPQ\\QJ@ZDNHB@PHRHFBH@JATABA`_HO@CDIBCDCBCJKDELCFEFCB@H@B@H@BBFBHDJFFDFDPFB@DBDBFDLHBBBCBEEABA@A@A@C@E@CACBEAECCAEAE@CAA@E@EDEBCBCDCDE@CJE@C@E@KIEIGGIWABM@E@CAAAAAA@A@AAACECCG@ACBC@AAEIKDCBEFEDAHGBABABG@ABC@CBGBA@AFCHADAFCFCDAFEFAB@FCDADEDCDEBCDA@EBC@ECCCCA@EC@A@CDEDCFCB@DAB@DAFAHAHAF@@AH@F@BBF@FBF@F@FAH@B@FADAD@DCDAB@DADAFCFADGFC@ABEBEBCDCBABCBADADCHAHCDA@AFAH@DAHCDCHCDAF@DAB@HAFAHCHAFCDADAJCBADCBCBCBC@C@ADC@A@ABE@CBCAECECECE@CACCAACBE@A@ABCFAJCBDDFDBFBB@FBF@FBDBD@@CLB@EB@@B@FJBBC@AD@BD@A@AB@@CBBBA@DBGD@BCB@BB@BB@BA@BB@@ALF@CB@DBBBBCB@AJABABBBDFBADBA@DBADB@@AB@@BBB@BDBDBB@DBB@F@B@DCGKHGFEBE@CTDHFBBFFDBFDBB@BBBFDBBFFDBDBFDDBFBB@FBH@J@D@D@HAFAFAB@FAF@DAF@HAFCH@HAFAF@HADAF@@AD@HEDAHCBAFC@A@A@C@A@E@AA@CAAECCAACCEC@AACAAA@AAC@CACAA@@AA@AC@AAAAACAA@C@A@A@A@A@C@A@@AAA@ABA@AB@@A@A@AAC@AB@BCB@@A@AAACAAA@A@A@AAA@A@ABA@A@A@A@A@A@A@ADCBAB@@AAACAA@@A@ABADABA@AAC@A@ABABABAB@@A@ABA@ABAB@B@@AB@FBDA@A@A@CB@@A@A@A@A@AB@BA@AB@BABA@AAA@ABAGEGCEAE@ICA@AAIGCCACCC@EACAC@CACAGAEA@AC@C@EAE@A@C@E@C@CBCBCBEDABAFCF@B@B@HAHAF@FCFAFEDCDCDGBCBE@EAGFI@BD@@AD@B@AAB@@AB@BA@AFB@CE@@CBA@A@ABABABA@C@A@ABAFCBA@A@C@AB@@ALGBAB@BA@AHQBEBABA@ABA@A@A@CAC@A@AE@@A@AB@AADAAAFAAAHA@AAC@C@ABCJCBABABAB@BAB@DCDABAAEB@@CPAACD@@AF@AC@CPBDABCBABAB@B@BCDEBEAIAACCEECCCCAC@CBC@CBEFE@GBECGCCCCAC@AAC@E@A@EBGBEDEBG@C@EAAAAGCC@G@G@EBIDGDGDIFIFIFGBGBEDIBE@G@G@GAE@CCCCCCAE@E@ECG@AD@@AB@@A@A@C@CWB@CAGIC@BA@@ACBAD@F@DGBAAC@ACG@@A@CAEEGEBE@EDE@CAC@CKACA@EBA@C@A@KFA@CBA@AAAAACCAAAC@CAACKBE@AA@AA@A@C@AA@C@A@A@CAAAAAAA@A@AA@AAAGAC@M@E@@AB@@A@A@A@GAA@GCE@AAE@CAI@A@C@C@ABCDMBC@C@AA@@AA@AAAA@CA@A@ABA@A@ABA@A@A@@AAAA@ABCDGH@BA@ABA@A@ABA@A@AAAA@A@AACCB@A@AAAAECCCCCAAE@CACK@AAA@ABA@A@AC@ACAA@C@ABG@ECIB@ACAA@AAABI@E@EB@BEAC@IAKCA@CA@AAC@CAC@AA@@BA@A@C@A@ABABCBCBA@AA@AAC@AACCECC@AA@@ACACAGAGAGAGAGAGCCCCEECCC@AAAAECCCAAACAE@GAM@G@GDE@A@E@I@IAKCGAE@GAGBGAEACAEA@AGCCAAAACECCCECEAA@EAE@A@C@AB@AA@A@GBC@CDCFCD@B@BCFCFCH@FAFAB@BBFCBABABABAB@BAD@BABABAB@BCBA@EBGBABA@C@A@CBC@CBC@ABA@ABCDCDAB@DADAFABAD@B@BBBDB@B@BCFA@A@G@I@A@G@EACAC@A@CBCB@BA@@B@B@DDDBD@B@BABC@IDA@@B@B@DABEBEBGDBF@BF@BBBDBF@BA@@BC@AJK@GBE@@BBF@DDDF@B@@GJ@BAFADB@BB@@BADABBD@DBB@FBDBLABABC@ABGDA@@B@BDFBF@DC@C@AHA@C@ABA@@BAB@B@BCB@BA@ADABABA@A@C@CACA@D@B@B@B@B@BGDCBIBEBI@E@@F@F@F@B@BABADABC@GBCBE@E@C@AAA@A@C@C@A@@DCDADCF@D@BBFBJDFBHDFBFBFBHBB@FDBBFBHBF@BBDBFBF@DADAFCDCFADEDEHCFCDABABCDCDCBGFABCDCDCBCBEDEBC@E@GAE@EBE@E@E@C@C@EBA@EBGDC@GACAG@EBCBCBCF@DAHAFAFADCBEBEDC@A@C@ECCAAA@C@C@G@O@A@CBE@A@A@CC@GBC@E@AAGBC@E@E@AAEBCDCHAD@D@F@DBF@F@D@DADEB@BCBEDEDCBGHEBCDCDCBCFCDABCF@BABABG@IBK@CBAB@BABABA@ABA@A@CBABABABAB@BC@ABA@A@ACIECACAG@C@C@KBMFGDMHA@CAIGEAEAECC@CA@CAAAAEAAAGAAB@FCBEBC@A@EAE@IBA@A@C@CAGEGGEACAEBEBCFA@C@EAEDABA@ABB@@H@BA@@BE@@DB@@BBBADBDA@AB@B@BE@@FG@AD@BABG@@BC@A@@AOABGEA@AC@@BA@A@E@@JC@I@@CG@A@@AA@AB@BABC@ABA@AB@BBDI@@GD@AEA@@EE@C@A@@B@BI@A@@BGB@B@BA@EB@BA@AB@CE@@BKB@BE@@CC@C@@GC@@AE@@AC@ABA@@CC@@AA@BELABIBE@G@AAA@C@G@A@EBCAC@AA@@I@CB@@CBA@AA@@AA@ABAB@CC@AC@AA@@CA@@CA@@AE@@ID@B@AC@CC@@CACA@O@A@@A@AB@@AC@@BA@AAA@@BCDCDCBAD@BA@@ACDA@A@@AC@@EB@@CA@@AA@A@C@@CEB@AC@@AA@A@EBEB@BABABCBAE@AACC@A@@AA@A@A@@A@AA@@CC@@AG@@CA@ABC@@BA@A@@DC@AACBA@@A@E@G@ABAAC@AA@@AAAB@ACC@AAA@BABA@AAA@C@AI@C@E@G@G@A@A@ABA@C@C@CBA@CBABCBABGAABA@ABA@@BC@G@G@MBABA@EDCBABABABCBCBCBABMFABCBABC@ABGFCFA@ABA@@AAAA@@CACA@CBABABA@A@ABA@A@A@@GAB@AC@@AC@CE@AAECB@AC@A@IB@BA@@AI@ACC@@AE@AE@E@AA@@AG@@BE@@CAB@CA@@DA@@CC@CBA@@AA@@BI@@BC@@B@D@FCB@BA@@BD@BFDHBFBFBBDBBB@F@BIA@AKA@AA@@BC@A@K@@AE@@AC@@AA@@BC@ACC@E@C@A@CBK@@FA@@AEA@AA@A@BCC@@CBB@EBIEAB@BABABCBABAA@@CB@@CB@BGB@@CBCA@@GBB@CB@@AB@@BD@@CE@CAA@IACAE@AACA@HA@@BGB@BK@@EB@@AB@@CB@AEA@EBCDCBC@CBABCBC@CBEBEBEBCBA@ABCF@BA@CAI@@EBEA@BCA@DECA@AB@B@DBFCB@DABADADA@ABA@A@AB@@AAC@BCAGA@AC@@BA@@AI@@DO@@AACB@@CA@@ABA@GA@@CMBA@@A@AA@A@@AC@@A@ACCAB@AA@@ASCA@EAADCBGBA@@BKB@BA@@AA@BFB@@DA@@B@DA@BBA@@B@DC@C@A@C@CDA@A@C@A@A@G@C@@CA@A@@BAB@AG@@AACA@@CC@@EC@A@DCB@EGAA@ABA@A@AD@@BD@@A@CA@AG@AA@CGA@@AC@@BI@@AA@A@@AA@@AC@@BGA@BCBCBCBA@A@EBE@A@@BA@@ACBEBED@DC@@AA@AAA@@AA@AAE@@DA@@AA@ABA@@BA@@BA@@BB@@HC@CB@D@BB@DBCB@B@B@BB@@BD@@AF@B@B@@BB@@AF@@B@BA@@B@JA@BFA@@D@BBBD@@BB@@CB@@BB@BHB@ABABA@A@@FE@@D@DB@@B@BBA@DH@@DHA@DB@@D@DD@B@@DBB@DF@B@@AB@@D@BB@@BBBD@@B@FD@BBA@@DA@@BDABD@DABADY@@PD@BBD@D@D@L@N@D@`C@D@FB@@BBB@AB@@B@DD@@CFAB@@CFA@BBB@BBB@DBFBBBFBBDB@BBB@BDDABB@@FD@DB@B@B@BB@B@BBA@@DA@BB@BADEDABG@@DA@@BEBG@@BA@A@E@BB@DB@@BB@@D@BA@@BA@ABAAA@BD@DD@@AB@BDB@@DA@@DB@@BA@BBEB@BB@BABBABA@@BC@@F@D@B@B@B@DA@C@@BB@D@@DD@B@@AB@@BD@B@D@@JC@@B@BAD@B@B@BB@@B@HA@A@C@@FA@@A@AA@@B@D@BC@@BA@@B@BD@D@@BB@B@@BB@@AB@@DB@@HA@@DBD@BBHC@@D@BB@@DB@B@@FA@@B@B@BD@@BB@@AB@@DB@@FJA@BC@@BF@@BC@@BA@@BD@ADDB@BI@@DB@@D@F@B@HD@@DADG@@CKJ@CA@@AA@@FC@C@@HE@@CCB@DD@BDD@@DF@@BA@A@@BA@@BBHGB@CE@@AA@@BA@BHHABBFABDHABHA@@BBBCDA@C@AAC@ECCCA@A@A@A@ADA@@FA@C@@HE@@AC@@FC@@BC@AB@D@BA@@BC@@AC@A@@B@BA@A@@BCBACMBAAEB@DEAGAE@A@ID@B@BI@AB@BC@A@@DEPGNC@A@A@@FA@@DC@GB@CABCB@CA@A@@ACBEB@CCB@CA@AB@BC@@AA@@BC@@DCB@BA@@GC@ACC@BBA@AAAAB@@AA@A@@AA@A@C@@H@B@BB@DHGD@CA@ACA@AACB@ACBAAA@@DADB@BBDHB@GB@BA@@BE@@BA@@BAB@AA@@FC@A@@EAAA@@A@AA@@A@A@A@AACB@B@@AC@@AA@@AEB@AA@@BA@@DA@@BE@A@AB@DC@@BA@@B@BA@@DA@ADC@C@@AA@@AE@@EA@@A@AE@A@DF@B@BCB@HB@@HMB@BD@@D@FC@C@UBC@@A@AE@@BC@A@IA@HE@WB@BA@@BA@@DC@@F@DA@A@@CE@@HD@BA@FA@A@A@@BA@@AA@A@ABA@@BC@@A@AC@@BC@A@A@A@@D@BA@@CC@AA@B@BA@@B@DB@BDC@BDH@@BB@B@DAB@ABB@@B@DA@@DB@@BA@@D@B@BB@@DG@A@A@@AC@A@C@A@C@A@ADC@A@@BADA@@D@B@BA@@BE@@BEB@JDA@CF@@DB@@B@B@BB@B@AB@B@BAB@BD@@D@DA@@DA@ABEBB@B@ABD@@B@BA@FB@AJBADD@AFC@AJB@@DD@@BDB@AHB@BXDAD@BB@BBD@@FFBF@@DB@B@@BA@@D@D@BA@@EA@BAC@@DCA@BC@@B@B@DA@A@@AC@@DA@@BC@@BAJC@@BA@@BA@CA@BIA@BAA@DA@C@E@@BI@A@@BA@@AC@@DJBA@@B@BA@@BC@AHB@@AB@@B@BH@@B@BBC@B@B@BB@@B@BCB@D@BC@DD@DA@ACA@@BCBBD@B@BB@B@@DN@@FHBABF@@BCB@BA@C@E@ABC@@BB@@FB@@DB@B@BAD@@H@BA@@DA@@DD@BHD@@BB@BB@H@BFB@AB@B@BAC@CED@@EF@@ADAJC@AB@BBBFBDDDBFF@JA@BD@DBB@@BDFB@@BD@BFFLBFD@DJDABFFABBA@BF@BBFABFJA@ABEBACA@AACBCAACCDBBB@BBB@@B@B@B@FFABFB@@BA@DF@BABC@BFF@CBEBB@B@BDC@BFB@@CDDA@@BABDFBBBFC@@EA@@BA@A@CBBBA@@B@BABC@BDBBAB@B@BBBB@@BH@@ABFA@@BA@A@@B@BABE@@BEA@CABA@@D@DB@@DB@AHADAL@BBHBB@D@B@B@DD@@HB@BB@B@HA@A@@BE@@AC@@BA@@B@D@HAJ@DAH@B@DAD@H@D@B@B@DCF@B@B@B@F@B@BABDJBLBDI@@DA@AFEBG@@FB@@BB@@BB@@DB@@DD@@BB@@B@BB@B@@DB@@DB@@EB@@FB@B@AED@@D@FBC@BD@@B@BB@@D@FB@@DB@@BB@B@B@@CB@AGB@B@@A@AB@D@@BB@B@B@B@B@B@@A@AB@D@J@@E@A@AB@@BF@@D@BB@@DBH@F@B@B@B@BC@@B@BA@C@@BB@@HA@@B@BE@@B@BA@I@@CADA@A@IB@B@BA@@AA@A@A@A@@DAAAFI@@AA@@B@FC@BBA@WBOBA@@E@G@E@GAAE@@AA@I@AAA@A@@AA@C@C@@BC@@DA@@DABBJA@ABA@BBB@BDB@IBBBB@H@@BE@@BB@BBABA@@BD@ABB@@D@B@BC@A@A@@DB@@BA@A@AAC@A@A@A@AAA@C@A@@BA@@AA@@ACA@DA@@BA@@B@B@BD@B@@BH@BFC@@B@BB@@B@F@BF@@B@BB@B@@BD@B@@A@AE@@AB@BAB@@A@CB@@F@D@BBH@BD@D@B@B@H@D@@FB@@FM@@BC@@DA@@HA@@BC@@BC@@B@BC@@AA@@AC@@AA@@BA@@AA@@BA@@AA@@AA@@CC@@AC@@BC@A@BB@BA@BB@B@B@F@BC@@BA@@DC@E@@BA@@D@BB@@B@DH@@D@B@BA@BBA@JB@CB@B@B@B@DA@JB@BAAAB@B@@BJ@@CF@@BB@DC@AB@@BB@B@BBF@F@BB@DA@BBBF@DDA@DD@H@ADB@@AH@LABB@DBBBA@EJ@@A@E@A@CB@@C@CAA@ED@@CBB@A@AB@BA@AB@B@B@@AB@D@@AB@H@@BH@@ABAB@B@B@@AB@D@BG@ADCB@B@D@D@@BB@B@D@@BD@JAF@F@F@@BBBBLDAB@B@@BD@B@F@F@@BB@@B@BB@B@B@B@F@B@D@B@F@@BB@@EBBBAF@BB@ABA@BB@@AB@@B@BBBA@BNB@@BB@DAACAI@CBDBA@A@AB@@DH@B@@ABBB@B@BB@BBB@BB@@H@F@BB@@D@DD@B@B@@BD@@AD@@EB@@FD@@BB@D@@BB@@DB@@AB@AAB@BAB@BAB@@BB@ACBAB@@CB@@BB@@DBABBDB@BB@H@FB@C@CLED@JBB@@AD@@CF@F@@HH@BDD@N@B@T@L@F@@CBBB@B@@BJ@@DB@DBJA@B@DH@BPBJBAB@@DBA@CD@H@@BB@@DJAB@@BFAB@@CB@B@@DB@H@D@ACFAAGD@@IDABAD@BFBABBB@DA@DF@@AB@@AB@HB@FA@@B@D@B@BD@BHB@B@H@BBBFBHB@ABBBB@H@B@@AB@D@B@D@@ABB@CBAAE@AD@@BBBB@@BB@@A@CBDBB@B@B@BBDB@@BB@@AB@BBB@BBEB@B@BN@HARAVCLA@AB@B@@CF@D@B@BBB@@B@B@FB@D@D@@DE@@BA@CBBBA@@DA@@BAAGBBD@BB@BD@EBB@BBCB@@BBABBBADBDA@CB@@BB@BDB@@CBB@D@BB@BBBFD@@B@B@D@DA@AAA@ABHBDDBB@DE@@BBBCBGFEPFDDDFFFDB@F@HBHAFAHAH@NFFDFDHBHBB@DAB@FAFAFEHCFCH@DA@APCFAHCDCJIDADAFAPADCDCHAHBFDH@H@HAFCHCHADCAGDCFCDEEC@EFCF@B@F@HADEBA@CBC@CDCDE@GB@@C@E@CBE@CBA@CBEBCDE@C@ABCBABEBE@CAC@AACACACEEAEACAA@EA@@CAC@ADEBCDCFEBEBABABEBE@A@C@E@EACAC@EAA@E@C@E@CBE@ABCDE@ABABERQBEBEBI@M@ADAFBF@HAHAFEFGDG@CBC@GDEDCJMFEBAHGBADCHGDCDGDA@AFAFEB@BAJCB@FADAB@DAB@H@DAB@F@@A@ABAB@F@B@D@BBB@HDBBD@F@B@DAF@B@DAB@D@B@B@B@B@B@B@B@B@BBD@B@BBB@B@F@B@B@BAD@H@B@BBDAD@FBDBDBB@B@B@B@B@DAB@B@B@DABABBBAD@DAB@BAB@B@@BDABCB@DAB@BADAB@JABAB@BCBAB@B@DAFA@AD@B@B@F@B@B@F@D@BAB@B@BABBB@@B@BBB@BB@BBD@BD@BDB@BDB@BB@@BB@@B@J@R@B@J@J@FBB@BJBDAF@F@DCBEBAFCJCB@D@F@L@D@F@B@F@JAB@D@B@B@FAB@BBHAHAFAB@DAB@BAFAHAB@D@B@B@DAJAHADABA@ABC"],["@@A@@BB@@A"],["@@AA@BB@"],["@@B@@AAB"],["@@@AA@@BB@"],["@@@BB@AA"],["@@D@@ACB"]],"encodeOffsets":[[[118580,35404]],[[118416,35401]],[[117745,35076]],[[117732,35084]],[[117616,35277]],[[118017,35649]],[[119399,34831]]]}}],"UTF8Encoding":true});}));