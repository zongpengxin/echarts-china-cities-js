(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('六安', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"六安"},"geometry":{"type":"MultiPolygon","coordinates":[["@@DAHAHCHAD@DAJADAH@B@HBHADAB@HCFCFCBADADAHEFCDCFEPEDAHAHCLEB@PEDAHABAFA@ALCHCFAHAF@HABADGBECUBU@Q@O@G@G@EAGDKFIJEH@HDHBHDHDFDFDHDHDNBHBHBJ@L@NEJAH@@AD@JEGIEEIAKCICGEICIEI@GCGAGCCCCE@CDGFCDC@E@CACDEFGF@L@FBHACEEGCAACEAAAECGEGAGCICGCGCEEECCGAC@CABC@A@A@@AAABABAB@@ADA@A@AB@@ABAB@@A@AB@B@@AB@@A@AB@D@@A@AB@B@B@@A@ABADAB@BA@AB@B@@ABABABABA@CB@@AA@@A@A@A@A@AB@@AA@@AB@B@BA@ABA@ADAD@JFDBBAFADE@EAC@AAAAA@AAA@ED@BAB@F@FBJ@F@H@FAFCBGBEAG@IAEAGACAACGAE@EBEHKDEDCBCBGBGAA@C@GAI@ABC@A@CFEBC@CBG@EACCCGGCE@ACCCEACAE@G@GBKBABGDADEBE@CBADA@ABABABIAE@C@C@C@A@C@E@C@A@ABE@C@AAA@ACE@A@A@A@ABEDC@A@A@A@ABABAHC@ABABA@A@AB@@ABCDADABAB@DABCBADCBABABCBC@CB@D@BABADAB@FAB@DCBA@A@AAA@AB@B@B@BBB@B@@AB@D@BA@A@A@AB@B@B@BC@ADABA@A@ABAB@B@B@D@@A@ABBD@B@BBDBHDLFJ@NDF@B@JBHBBDPDDFHEJBB@HAPFBCACBAD@J@BFD@HCB@LBH@JDDBDCVBLIPLNDB@F@DCDB@DD@DGAACABAHDB@DEFBCDBHJCDLCDBBHDNBB@HAHCJ@D@BFHEF@DBB@BEPAHCBEBAD@D@JCBB@HNJFHPHD@HAHBFAHEFCBADAH@F@PCNCTFHAHABF@LDDB@FDL@JCFEBID@D@FBLBLBB@LBHDHBN@J@\\QBAFCH@BBFFDBDAJSB@@KNCAAAG@ABIDAAAAADE@ABA@AB@DABAB@HCBABC@AEEIIA@GAY@M@U@IBGBa@A@cCQECAAACACACAAAACCIEEEGEGGGGGGGEEEECGGIEGEKCGEGEGCGEGEKEKCICE@AEE@ACEEECGAEAG@EBGBCDCFEDG@GEGEGCECKAGAG@IBI@M@GAGGKCCKAKAGCEE@EBE@E@GAAECEEGEEIQLGDGFEBC@C@E@EEIQKGIEMICGCEAACEEIEIEKCGAE@ACGAGAAAICGCGEEGEAC@AAGAKBEAKAACAC@O@KBEAA@@CAEAGECECECIGKGQKOEMAKBIDG@GECAIAGACCAEAEAC@A@CBI@EA@AAEAGAC@ABCAECEECEEGEGC@CAE@AAA@AAAGAAA@GCAAAEEGGCCAA@A@ABCDCBCBC@C@CBA@GACACAE@A@A@A@@AAAKICAI@E@CB@BCBCBIEG@IAAACAGKGMECA@A@G@KDKDEBCDABCHABCBCBCBE@E@A@C@ABA@AAGGCAEAEAA@C@AB@BAD@BABABCBIFKHABCBE@ABCBCFA@CBC@E@A@AAACAA@GAAA@AACAA@AA@AAAACA@EACAACCAAGACAAA@A@ADGDC@KBE@E@AAAAGEACACAECK@AAACCAACCC@CACCACCCCAE@I@E@CB@D@DBHBB@BAB@BAD@BBBBFBDBD@B@D@B@D@D@BAD@DBDBDDDBB@D@B@BABBD@DBFDJDDDDBFBDBD@DBBLLFHBBDFBDBD@B@DABCFABABCB@B@B@BBDDD@B@D@BCF@B@H@D@D@BBD@B@BADAFA@ABAD@D@DADBH@B@BBBBDBB@BBB@BAB@BADABA@@BC@EBCBA@A@A@AACAAA@A@AAC@AAAA@GCECAAACAACC@ACAA@CAEGCECCCGCGACA@@AA@E@A@A@ADCB@DCFA@A@AAACCEGGICEAE@G@CAEACCCACEAEA@A@CAE@C@EBCBC@E@CBCBEDAD@LAFAFCFCDEHGFABAB@BCB@BCB@BCBA@C@C@I@E@AAC@A@AAABC@IFG@I@A@MHIFGBCBA@EECCAACAA@AAGAAC@A@C@A@C@CAAAAAAAAAACAAAAACAA@EAAACBC@C@A@IAGCGECAAA@AAC@A@ABEAA@AAACGEC@AGABAAAA@A@C@AABABAAAC@C@A@@A@AAAEAAAAAABC@@A@ABACAAAA@C@@A@A@CI@A@BA@AAAACAA@E@CACCCACAAICAAEAQESKEEGEICGCIAA@E@AAI@E@MBIDIHELAD@DBDBFAHCHEFEFEDGDKDE@QEOCIAEAKCECEAA@CAABABEBEBCBCBCDCBA@AACAAACAC@AABE@A@CAAAAGEGCMEOEGCIMEGMSACBI@GEG@GAIAM@IMBCAC@QAKCE@EBCBCBAFAHAJ@HCJEBGAK@IF@BIFCBCBE@E@EDKBGBICUEEBC@CHBFBF@HBH@JAFAFA@GBCBEBIDMLIHGH@BAAE@@AA@@AA@AB@BA@@BABABABABABABA@ABADAFCDEH@JAH@H@LCLCFCLGDEFGBEAGAKEGEIGGIECGCCAE@E@EBE@GDEBGBGAEAA@EAGAGAECCIKGCCEAEAKBEFEFAF@FCHENADCJEDCFCBCDEBEDEFCFCHCHCJCFCDCDCBCDCDEFEDCFEFIJCDGDIBIDQDKBKBGBE@IBGAIACAECACCCCECGCG@EEGIGECGAGAGAGACCACAG@GAIAECEAEEEAAKCC@GBIFGFGDGFCDEFA@ADAFCHGJCFEHGLCH@H@LAF@F@B@D@H@DAH@BBD@D@DBFAFADAFGJAFEJCDCFGFEHEDEDCBGDEBEBG@GAC@GCGAOAE@CDEJ@FCBEFGDA@ABAB@FBDDH@DBJ@H@FDFDDAJ@DABA@A@EECAC@C@CDCJAFC`CJADCBCBABE@C@A@AACAC@C@ADADCAGEGCECAAAEACA@A@CBCFCDEBQB[FCB@BBBBBRJBB@F@BOR@DB@BBLDBDLLDJBDADABGDUREDDJBDFFHFBDBBAD@F@HBF@N@FBFBBBBDB@B@BCFUb@DADAHCD@FABBBBD@B@BCBAB@B@D@B@BHLDDPFHBDDDBBDDDBBBBJDJDFDJHDBFLDDFLDJBD@B@FBDBFBBBBABADCD@B@B@B@DDDDJBBBBHD@BB@@H@D@BBDDDFDDBHBNDDBBDFBLHFDFBH@FBFBDBBDDHBF@JADGLGLGH@BAB@B@BDDFBDBDD@D@H@B@D@B@BB@FBB@FJBFBFBBHDJDNFFDDFFJFFFDHDDBD@DAF@FANCD@F@DDBD@BBD@BBBFFDBDDD@B@H@FBHBFBBDDDBD@D@BDBFBHDFDBDDDBBF@JDLFJDHFFFDBHFBB@BFH@BB@BBD@DBB@DBB@XDD@BBFDDFFFBBFFBDDDBDD@D@B@B@DAD@B@BAD@@ABCBCJEBAD@B@D@DBDBDBB@B@FAFEFAVEJ@B@B@@BBBABA@A@A@ABA@A@@B@BB@B@BB@B@BAB@B@BB@@BB@B@D@B@B@BB@B@B@B@BBBBBB@DAD@B@B@B@D@B@BBB@B@B@B@B@H@B@@BDDBDB@B@BABAB@B@@AB@DAB@BAB@B@BAB@B@@AB@B@B@B@B@@AB@@ADABABCBABAB@B@B@@AB@B@BAF@BBB@BBB@B@@A@CA@@A@AB@@ABA@AB@BAB@BAB@BAB@@BB@@BBBB@@BBBBBBBBBBBB@B@BBBBBB@BBBBB@BB@D@BA@ABA@AB@B@B@B@@BBBBBB@@BB@@B@B@BBB@BB@@BB@BBBBBBB@B@B@@A@ABA@AB@@A@C@A@ABABA@ABAB@B@B@B@DBD@BBB@B@BBB@@AB@B@@AB@B@B@B@B@B@B@B@DBF@B@BBDBBDBB@B@BBB@BB@BBDBBBB@@DBBBBDBD@D@FAB@B@BB@FBB@B@F@DBDDH@H@D@FAFIHCDADCDCBC@A@C@CBABAB@H@BBD@B@DBH@B@R@DBB@B@B@B@BABBFDFBB@BAH@B@B@B@BDBDBDBHNDHBBN^@DFR@BCH@BCDAF@DBB@DABGHEDAH@JBHFFDHFVJJDL@DADAD@BBBDHDBB@DADABB@BB@@BB@@BA@@BB@@B@BA@A@ABA@A@@B@BB@@BABA@@BA@@B@B@BB@@B@BB@@BBBA@@BA@A@@B@B@BA@BBB@@BA@@B@BBB@BA@A@A@@A@AA@AD@B@BC@@BA@@BA@BB@B@B@BB@B@@BA@@BB@B@B@@BB@B@@BB@@BBBA@AB@BBBCB@BA@@B@BB@ABA@@BB@@BBDA@A@A@@BBB@BBB@B@BB@ABBBBBDBHBFDFBDFBHDF@DBBAB@BIFIHA@ADANCLAFAD@BDDDBBBBB@D@D@H@BBDBFBBBD@B@BBB@FBD@FBB@B@F@BBD@B@B@DABAB@B@DBF@DBB@BBB@BBD@B@BADABABITADCDCBGFCH@B@D@L@FELABGVEN@H@D@JBLBTBFFNDFBB@FADILABCDABABBF@JAJADABIBA@EBAB@BBDFDFDBB@D@BCN@B@DBB@BBDANAN@BEBCDAB@B@B@DAF@BBF@F@B@BAD@F@D@F@D@B@B@BBB@B@N@F@F@B@BADCF@BCF@BAFAB@DADADADAJ@BBD@B@B@BAB@DGFABCBA@A@@B@B@BBB@B@BA@@BB@@BBAB@BA@B@B@BA@@BA@@BB@@BB@@N@JABIDU@A@A@ABABBBBBBDDBFDBDBBB@BBFBF@B@@D@D@F@HDJ@BAHADKFA@AB@F@D@BCBC@G@K@GAE@EAEAAAABADBDDFFFFHHDNFB@JFFDDFBF@J@H@DDBPJPJB@FDFBJJLLDBD@D@FCDADBH@DBABRHDFZ`BBBBBBPPJHd@D@LADAD@DAHCXIDALEDEN]FMDO@ABEBCJCB@ZIjCNELEDBT_DGFOBGDIDKFMBQBCDGHOHCZIHA@CFOBEDOP@X@FKBEJKP^N^ZMT`TGZNFGLOJBDP@BCPABCVdVBFDHDLF^dAL@V@H@T@ZUP[JSHMT_HCjSPGBAFAFABALCJBXFRDPDHATGPEZIZBAG@C@CAE@E@EACAE@CACCEBCBCFCFEFAFCBEMOIUA@BE@A@A@ABIFMBEDCB@FCTQNcBCRODCBeBGHUBO@CIU@G@AJS@CBGIIOYQEAAGGDEHERMBOOSFUBEHYTMDMBE@OAIAGEQHSBAFOTO@CDCDGFG@C@CCAF@AAA@CA@ACC@AAA@C@CAE@A@AD@BABADMDE@AB@BA@CAA@ECKAGA@AA"],["@@A@@BBA"]],"encodeOffsets":[[[119344,32797]],[[118709,32805]]]}}],"UTF8Encoding":true});}));