(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('滨州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"滨州"},"geometry":{"type":"Polygon","coordinates":["@@A@@CE@GA@AAACCEAA@@B@B@DBB@BAB@B@B@DA@A@@BCLA@CBKGKEMEEAAACACACACAA@A@EAA@C@AAC@IAE@C@C@EDADCFA@EFABABEBCBMDCBCBC@GDGBM@E@E@EAC@A@ICEAKECAEC@AKGAAMISOKGCAAAEAAAAAA@CAA@C@G@E@G@EBIBC@A@EBWBE@CBG@aHA@EBA@A@ABKBEBABCBCBCDEDCDKHABA@EDIBC@CBA@CAOGEAAAGCEGACGGEG@AEGAE@AAK@C@EAG@AACCGAAIIAAACAAIC@AQECCCC@AAE@CAA@A@C@AAEAG@GCM@IEI@ACEA@MKCCEAKCC@A@GAA@MCE@@ABGCA@C@AFB@CAABIBCDB@E@AB@D@CA@AL@DBFCHCD@BAAED@BA@CACAAA@@AKA@E@EB@D@@ED@BC@K@EBAF@BABAHC@DHBB@@CB@B@BAD@FBB@HBBBB@FB@BB@D@B@B@D@B@D@F@B@DAJCB@B@BAD@FAB@HAB@D@B@DAB@B@BAJCHADAFADAFAB@BAJABAD@LAB@JAHAH@DAD@B@B@B@D@P@D@BBB@B@D@F@DAB@B@B@DAB@BADADAD@B@D@F@H@D@F@BBB@F@D@H@B@B@NFB@B@B@B@B@FBF@D@B@F@DBB@B@B@B@B@B@F@D@B@B@B@D@BAD@B@B@B@B@DAD@HAD@D@D@D@D@F@F@H@B@BAB@F@DA@AAE@AAA@AA@@A@C@A@AAC@CBA@EAA@GACCGCCACH@@EBCHABA@ABB@BDAAAB@D@@BH@@EBA@BD@@DN@@GFADC@A@EA@CA@EBBB@@AB@@AC@CA@A@K@ABCAE@ADAAIB@D@@CZAB@D@DCF@L@LAB@F@DA@C@GF@AS@EF@@E@A@IDAFCF@@CFAACFABCB@HADCBABG@OBC@AACAG@EB@BD@BDF@D@B@BDFFDBA@E@AD@@CA@CC@EBABBBB@HB@BA@GD@@DBBB@BBF@@BD@FAAWC@A@@EAAC@GC@EAAG@G@C@@ABA@G@EE@C@C@GCBG@AC@EBE@EE@AACA@@A@AAQA@C@A@A@CAGBE@A@IDC@E@A@@C@AEAAAA@BAFAGAG@@C@AO@@HEBE@ABA@C@@A@E@AGBAAAAEB@CG@G@G@Y@@AC@CAAC@E@IBAHE@A@IAC@AA@@EA@CCAE@AACC@A@A@AE@A@GAIEA@CDA@ED@@A@EA@C@@GA@A@A@@G@AD@@EA@@ARABK@I@AB@DDDEBA@AB@@B@BA@@B@BB@B@@B@DDAB@HAFEBAB@BC@EBABADCB@ACACAA@A@CDCFA@AAEC@@CG@ACC@A@E@EAEAABEBDDDDBBGH@DABC@ABBB@BAB@BG@CA@CGAAA@AB@@BD@BABA@CA@CA@A@AACCCB@B@DE@C@CA@ADCACEAB@BAA@AB@@ACC@A@ACBE@@A@AA@@CAA@ECCA@@AE@@ACEBE@A@GAECCI@@CC@A@A@E@EC@AF@AA@A@A@A@AAACCC@ABABAAAAC@A@A@A@@DCAA@E@MBCF@DA@A@AAAG@AKAGFE@C@CABG@ACAIAA@@BBHEBA@E@AD@H@FBBNHDBHJBBBBLH@B@BELDJJVFDBDSJE@KDIBG@G@CCA@I@O@I@CBABCFEF@DADAJ@BMTADOLUPEDQLMFGDKD_LABKFQRIJEF@BGHOPEX@DBPFNB@FPCNADCFEHAFMRABIFMDCBA@WJ@FIDE@@DDLFFDA@CBAHAB@DA@CD@BBBLPFDBD@BDBJBB@JCDC@GDABA@QFAFBDFBF@@CB@AFBBADCBCDCDE@ACE@C@G@@CCAC@@CA@@EACA@C@@AA@@CAAKC@G@AAAAB@DGB@DADA@AB@BAFA@C@ABA@C@EB@BI@A@@CEAE@C@CAAAA@@D@BIAADE@AADE@AB@ADB@DG@C@AA@GAQC@BCBCACCC@MBE@C@GAGAGCGFIHCBCBIBCAIGIIMAICOBC@CDCDADCLER@BAHCLCLCJIJEDGDC@IDMDKDABMDGFABMN@N@BLFJD@BB@LJFHBBBJDJ@D@LB@@BCDGBABABBDFDTCLCB@LAB@F@F@FDB@FBBBDBB@JFBBRLPHB@FBD@JBH@PBNBD@B@H@FBB@B@DBLJLLLLAHA@AB@D@BCFABAL@BADCFAH@B@BCLCL@B@FCL@TAHCHGLEFEDABCDGHA@IH@BAFCFCDGHCFABABADADCFDBBLBFAB@BDDFDD@BAHADDDBFAD@F@D@@DEBCB@BABDHF@BBAHF@@CBACEDBDFJA@AHABBBB@B@BC@BD@BKDAB@HBJD@@DE@@DI@@F@FCL@DEFGFCDGFAFCHEJAH@DAF@BAH@PDF@DBDDL@N@BC@ABC@AFFNDBFDMPGHGHEDOJIDEBOJKDMPCDFL@BBBBB@BB@BBDF@DBFBNAD@D@BMPGHA@ABGDC@K@E@OAOC[@G@SDGHHJRHCDCDMD[FDPFDFDPDF@FBB@NBBBHJ@J@DGJABABIBCBA@G@IBG@IBAJ@B@DAHQHENFLDNBPDN@B@JBDDF@BJJDDHFDBHDPLBBDD@BBDFHFP@B@LADAHAFAF@DAJCBABC@CBBDE@BDJBFBBNDNFLDHFFLJNHB@LFHF@BBB@HCFABA@JNABA@BHBFF@B@@ABADCHEHADA@A@S@GCED@@CA@A@ACCCECAOF@CI@CDAB@BEDID@@AB@N@HDDBPJFDB@DBHJDF@BBFBDLLJKB@DEBADAF@B@HCHADBLDHDDBBBPCJKBABAJIDCB@BAD@F@FADBBBDF@DB@@BBD@DBFLRLDDDB@BAD@F@BDB@@BBB@FB@F@BBDBB@R@D@J@B@BB@HLBB@ABB@BB@B@BDDDFIBAD@BHDCD@B@DD@@BH@FDFEDEFDADBBKDCB@DDBAB@BA@C@BBABG@@B@HFD@BDHCBBFBBABC@ABBFI@C@A@CBE@@FADE@BBGB@AC@AB@D@DHB@BBDJ@D@B@BBFDBDL@DA@BBD@BEBCBBBDABDABFFDDABBFBD@DDFBDHJBD@DF@BA@CBAFJBD@DABCH@BDBBBBBDBB@B@B@B@B@D@JFJF@BDB@BBD@B@FB@@BBBDBFB@BF@BBB@BBBBBB@B@BBFIBAHGFA@A@@BG@GBCBGFCD@D@BDH@B@BA@@B@JA@@GAD@FCDCDKDC@IBKAQBINAF@F@L@BALAJINGLCLTJFBHBNFLDFBFDADFDH@BNADAJAPCJGA@DB@D@B@BJAD@JABAPML@BCBKHE@IBDF@D@D@BBF@FDDBBDDHFDDDDB@@BDD@B@BA@@B@BA@A@@B@DB@@BA@A@@BA@@BB@@B@BB@B@@B@B@BA@@BAB@BB@B@BAB@B@BBB@BB@B@BAB@BBBBBB@D@B@B@B@B@B@B@BBD@DDDDFDHBJ@B@NBD@F@FALCB@DAF@NB@BD@H@B@RBFBB@L@LAH@D@FBDDDDFDHBD@JAFANAFAJ@F@FDB@HHFFDBNJFBBBBDBH@H@B@D@B@BBBBDHHFFDHFFFDDBF@DBBBD@BBHBF@JDDDBD@F@JAJAFCHAF@DBDDD@BDB@AB@BAB@D@BBBB@B@BB@BBD@DAB@FBB@BADAB@B@@BBDBBB@B@DBBB@B@BA@@BE@C@EDABABABDDDDBHDJ@DAFADBFFHDFDHDDBBB@@B@D@H@DBBBBNFRJHFh`BBFHHHDLHLvE[HORM|cqfYRKPG\\K\\@ZJ´P@F@PEDMYm[qÝAE@IDEBAFAJCLAN@^@`AbG`E¸E\\A^CQaACAACCCAECAA@CBADAJAD@F@@ADABCBCDI@A@AAACACAAA@AAE@CCEAG@CA@CACAEAA@AA@ABADE@CBC@C@C@E@C@ABE@CAEAI@EAC@A@GCM@SAI@ICU@CDABAAG@CBAFCBAGCCAEA@MBG@IBC@KC@A@BEOAAA@ABEDAD@JBF@@GBCBG@A@CAE@A@C@QJ@DA@ABGEABADC@CDKDBAFDCDIDM@AA@AABCBAEADE@CA@E@AA@ABA@A@E@C@CBG@CHABCFQB@B@@B@VAFDBD@HEAEGB@IH@FIBEAOBEB@JFBDBBHBADB@LBNDHBCFB@NBADHBADBBB@ADB@JDDEBCDAD@JEBDF@B@B@DBJBD@DEHOAABENY@AA@I@@AAE@AB@H@@BDBD@@CH@AI@EBAH@HCDA@AAC@AC@AA@CBABAD@@A@A@AI@@C@CL@@EB@B@BCBABEAABC@AEA@CA@AFK@A@AAAAACCICGACCE@AL@CEE@@C@GAALIB@LA@ABC@IAAAAICAAGBAG@CA@E@@CBCAC@C@C@AAAK@I@@AC@E@ABC@@A@GBA@M@ABCC@CBACAKAEEBAC@CAABGBCACCCEBBE@IKAAAAEE@AAAEDAAECAAAAA@AA@@FA@@CCAAIKAECG@ABGE@AEAE@S@CBABCDGCEACBABABCDGCGF@DGA@AKAAB@DAFA@E@ACBA@AAAC@KH@BABCAEIQAABC@ECAECBA@CM@ECGA@ABG@C@BIE@@AH@@CC@AE@AAA@CECA@I@@CBAJABGC@@FABE@@EBAB@@K@EAEACAACAEGABCC@EDEAA@AKCA@K@ECEGB@@ACEAC@AD@@IDAP@@C@AA@E@@EC@@C@ABIB@HBDEH@DFB@JABBBDBDBBF@B@@GDAB@BFJ@@BHBFMCABEG@A@@C@CDABCG@@EAAA@@DEA@EGAA@BEAEEECAGBCCAA@ECEGEC@ACC@AA@CD@@ABC@CGAAABKE@DG@AA@AGE@AAA@@ABA@G@CEAACG@AAAE@G@ACCCBCA@A@C@C@CHCPCB@CG@AA@GDAA@A@CEK@AFACIA@DAD@@BF@@AL@BBDA@DF@FBH@B@BAFADCF@@AD@DCDIB@FBFA@ACACEBABG@AF@JBBCGACA@E@CBEBACGEE@ABEAEBA@A@A@AA@CBGBOBE@GCAACEA@AC@EDCFEDAB@@BLBB@F@B@BABCBCDAAAA@@E@AC@BC@AF@BABADBLDJFHDFBJFFBJFB@PHPFF@F@D@@C@ABE@I@EBAFBBAACBAHBJBD@@ABAB@L@H@DF@DABAFBBJA@FJ@B@B@BCBABQ@EB@JA@CBAB@B@@BB@DCB@BB@BB@D@JBH@DABED@@AAAAAAAAC@AH@T@D@VBB@@S@Q@S@A@QD@BAAKBCD@L@BA@EAKBAFAD@PBF@@A@CJBBAAAG@A@ACBED@L@H@B@BAF@@C@AACBADANB@ECAE@AABAT@@A@KF@@I@E@AG@E@ACAACAEMCEAAG@I@EMAGBABANBAAGCLQDADCFGBA@A@AF@JC@CH@BC@A@CB@@AAGF@BIBAD@AE@ADA@GF@@A@EA@C@AEE@@IC@@IA@@Q@A@CA@I@@GA@E@AEEBCBAAGI@CACQBAC@GC@CAA@ACBEBCH@@A@A@AA@I@C@DMDDBAFE@CAA@CB@B@DC@ABEACE@GDAEEDABE@A@@AAAB@B@D@BAAEFAAEH@BCAEI@AECCCE@A@ED@DG@AB@BAAIAG@AAC@ABA@AB@@C@AMGKGAGDCB@@AAE@ACEAAGCCAA@G@CACE@E@CCCA@A@EBCAACAEA@AAAEI@@OAACFGD@CAAMDGB@BE@@AG@ACAAG@A@E@GB@A@C@CE@AKBC@IG@@AQB@EAAE@@C@IAAC@GCAEACC@C@@DC@EACCCEEAA@CB@DKDA@C@BD@BGBBDB@@B@DADQ@A@CB@DA@GBEAC@CBI@A@E@@DBD@FC@GAGB@BAHDB@BBFAB@BM@@DE@BDBBE@EBAJBB@B@B@BAAADAP@BCA@DFND@@H@N@BB@D@DBB@J@BBBB@HA@@B@FB@@DFD@CD@BBBH@DCBGBA@@AC@CAIBA@BAC@IB@FEB@D@B@DBDDDABABADCFAD@JA@GBCBCDABABA@G@BHA@C@AA@AAIG@MCC@GAC@A@E@CBECCAAAA@CAEA@FE@@A@EC@CAEACA@FEAADABAD@BDBCDC@A@CFCDB@@BEAABCA@H@HABJDD@HDDIJHHBDBBD@DDBHBBBABJBCBBBCDGJCFCF@DGDADALBBB@@B@BC@EC@FD@BB@DE@@F@BDD@FFBFDLH@BB@EH@F@BB@@BB@BBBBB@@BB@@BB@BBB@BBB@@B@BEFAAA@CPAAA@@B@BAFD@AHGAAB@FI@@D@BGAAA@A@AO@AAA@A@ABAJ@B@HEDEAGHG@IBK@AABMC@@GQECDE@A@A@ABG@CAA@C@@FCBE@CAECA@C@ABBDB@AHABC@A@@EC@CBA@@B@HBBD@BHB@@LBDB@B@B@BA@BBHE@@BD@JFDAB@DBBBFHCFABA@AAAA@B@BAFD@@BAPC@A@ADCFAAA@AAEBA@AB@CCAA@@HABGDA@ABE@CC"],"encodeOffsets":[[120794,38165]]}}],"UTF8Encoding":true});}));