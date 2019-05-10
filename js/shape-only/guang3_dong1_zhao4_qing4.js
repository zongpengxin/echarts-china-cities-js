(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('肇庆', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"肇庆"},"geometry":{"type":"MultiPolygon","coordinates":[["@@BA@C@CBABBB@B@@AACC@AAC@CA@A@E@EACAC@ABAD@DAD@B@B@@A@C@AAC@C@CDGBEBGAK@G@ABCHGLIBADABAHGBAFKBC@G@ABW@A@A@[DQBCDKBCDEBCHEFIHK@AAQBUJUJUBCFOBCBGGAEACAEACACAECCACCAAA@CCAACCCAAAA@CACA@ACCAAE@EBADBD@D@BB@B@B@@AB@@BB@@BB@@BA@ABA@@AA@@B@BA@@A@A@AA@AAA@A@@AGAA@A@E@@A@CA@ABEAAC@CEEACCCAAA@@C@AC@C@ABAHAAA@AB@BCDAF@BG@C@@ECAEAEAACCA@A@E@ECC@ADADE@CAC@AD@H@@CBAAEACECCCBEAECE@A@A@AA@ACCCA@A@CBC@A@CGAAA@A@A@C@@AA@CA@AACC@AB@B@BA@CFCF@BBFBB@DABCBABA@AFEAEBA@CAEBA@AAAA@AA@CC@D@B@BAA@A@EA@A@CBC@AC@AD@BA@C@ADCBA@A@ABABADCF@@B@BBB@AB@B@BBBB@BA@@BD@@AB@AAACAAA@BADAB@BB@AB@@BB@@BBAD@BAA@C@@AA@A@A@@AA@A@@A@CAD@B@BCBA@@AAAB@BABABC@ABCB@B@DA@A@A@AC@A@@AA@AAA@@BEB@A@AB@BC@AACA@A@DCDA@ABABAAAA@AA@AA@@BA@A@AAAA@BCBABAB@B@BA@@AA@A@A@AC@AA@@AB@BAB@AAACA@ECC@CCGACBC@@EAAE@C@ABC@AAA@EAE@EACAABECGEBEA@AAOACACAA@EA@DAD@BICCC@CCAA@ADAB@AACCCCBA@ABGA@C@CAAECEBI@MFEDGFGDCA@ECCBABABAA@AAA@@CBA@AB@BBB@@C@CBC@AFC@ABBB@B@@ABABADCB@BCAA@C@CA@A@@A@CBAAEA@ABABA@@A@A@AAEA@ABABABCCAEC@ACABC@A@AAA@A@AAA@@BA@@AAAA@C@C@A@AAIAAB@BAAAA@C@ABCCA@AA@C@@B@BABA@@BCD@AC@@BBB@DABADABA@CACACAECA@CBCBCDABC@AAAA@EBCBABABAAC@AAEC@EAAAAAC@C@AA@A@CACAE@CA@CEA@EAABA@CAGACAEC@AE@A@C@CDE@EBCACACBABA@CAACACEAEAGEGAGCCAEAG@AAACEAA@AAECE@A@CAA@ABADA@C@ACAA@DCBABABCD@DA@@D@B@BABA@AB@BBBB@BBBB@BABAB@BCBA@ABABA@ABA@ABAA@A@ACAA@A@AA@AC@AAA@CAA@A@AAA@A@A@CACBADABCAA@AA@ADCAAA@AB@BA@A@CAA@A@ABA@C@ADAAA@AAA@CAA@A@AB@BC@AAC@A@A@ABCBA@A@@D@B@BBB@BD@B@BDBB@BBD@BB@D@B@@ABBB@B@B@B@B@B@@BBB@BBBB@AB@BABB@@BABA@A@AB@BABABAB@DABA@ABA@ABA@@BAB@B@BCBC@CAA@A@CAABA@@B@BBBBD@BAB@BABBBB@@D@HADAB@B@BBBB@@BAB@BBB@DABC@A@AB@BBBABCDAD@BABA@ADA@C@@D@D@DABAB@B@B@BBFBBBBB@B@@B@BABAB@B@B@F@BBDB@BBBBDB@BBB@DBB@D@D@B@B@D@B@B@DABA@A@AAA@ABAB@B@BA@A@C@A@A@AACAABAAA@AACAA@C@@BABCBA@E@AAAAAAC@@AAACAAAA@@AEBA@ABABA@A@AB@B@BB@BB@B@BBBBB@BAB@D@BBBABA@A@@BBB@BDB@F@HB@B@@B@DABBBAB@BAAAB@BB@@B@BA@@BABA@@AABAA@BA@@B@BBB@BBBB@B@B@B@BABABBBAB@@AB@B@B@AA@ABAB@@ABAB@@BBBBBB@B@DABB@DB@B@BADED@B@BD@D@B@BBBDBAB@BABABC@ABA@DB@D@DADC@@DA@A@A@ABA@AB@B@BBBD@FD@B@BAAA@@BBBB@F@BB@B@BAB@DBD@BB@D@@B@BB@BBAD@B@DBDBFD@@BBD@DBBBDBDBB@DC@@AA@CBABADGBAD@B@BADBDBBBBBDA@ABBD@HC@BHCFA@@F@DBFBFB@BFFDBBFJ@D@BBFDJ@HDHFB@CF@FCFBDDFB@BABDB@BBDBBDDDBDFCD@F@BBDB@@B@B@B@BA@ABABCBGFEFCBAD@JA@ABA@C@G@C@CDCBCBABC@A@ADI@AHA@GKGEIEKCSAAAA@C@SAMCECECEEGGCCCCACCCGGGGOMECKIMAE@G@KBK@EBCBEBEBCDQDGFM@C@MCKAMHMHC@A@E@CCECCCGCIEGAEAE@GAIAE@IASCKAKBIHCFABA@ABE@E@E@QDI@C@EBCBC@CBABCBABGFCJANAF@FAFAF@D@DADCFCDCBIDGBGBSCMASCWCU@SBC@CBC@CBCBCBCBEBONKFE@M@ECIEQEAAA@A@CAC@A@S@@AY@Y@MBG@G@EBE@E@IBE@A@IDMDGBABEDCBABIDIDEDEBGBI@E@A@GAG@EBIFIDEBEBC@C@CACAGAA@aDKBABEFCBADEJCJEJADABCFEDC@IDGBE@E@GAI@C@C@G@C@E@A@C@A@A@A@ABE@CBEBA@ABC@CBA@CBCBEDCBCBABCBCBC@ABEDIFGDGDCBABGHAF@BBD@BFHBDDDDDJBFBF@LBFDNFHHDHBDBB@J@B@FAD@BAD@B@BA@@D@BA@AB@BABABAB@BCBADCBAB@BGHEHABGHADKRGNOTABCAG@AAA@BADG@ADDBA@ECA@GGEGCAIDEAA@CCABEACA@A@@C@CE@ABC@GEE@@BADA@AAACEBCBC@CEEBA@ICIEIEADBBADCCEACADEAACDCDCDA@AAEHDB@DAD@BCFEBC@C@C@EDCBC@@DD@@DBBBB@DABEBADGFCBEFCCCD@DEDGD@AIAG@ADEDCBIDCFE@AAE@IAAD@BADGCBEDCC@A@CAAA@E@CGDKFEH@BALBJBB@HBHDFBFB@JJBD@DDHBLBBFFFBJFBDBRBHCFGHA@CD@FFHADHH@NDDAHBND@FL@DEN@BDFBDBFFBCHADDB@B@FBDVAH@PCN@BL@FHJJBFHHHAFDDJPJCF@BHD@DD@LDDBBFFDF@DDJHFDFAJALDH@FBF@HBDNDBDBBBHAHEFDH@F@JALEH@HAFCF@B@BFD@BBL@J@JNBDBFCJDAFD@FEBEDABFFCVDLFJCDABHPNJDDBF@JEGC@EFBBAF@BDF@TNNFAGBAD@B@BCFDD@BFLEPED@FBFB@BBH@B@BCD@J@LDBBHABDBLLBH@BB@FAFAJH@JCBFHBFHJFADBDDF@DAFBJBFBADCJDN@DFFABC@GBK@GDAGCHA@A@GOCDBDDBAHABGCI@KDA@GD@JEBABBDFDP@B@@HAFADBBBDEHDD@BBDADAHBLALAFA@BFFBCNFBPEB@AJDLDDHF@HDJABCFBDB@DF@BHB@J@BBLB@BBB@BBFCFBB@BAB@BADABABABABCBAB@@A@AB@@AB@B@@AB@@BB@B@B@B@@AB@B@@A@AB@@AB@B@@AB@B@@A@AFB@F@FBBB@@BAH@DDD@B@B@BBB@BB@B@DBF@BAB@B@B@B@FBDABID@@CDCDCCAB@FEBBB@DAF@@CB@BCBDF@DCBDFADBD@BCBABAFA@ABCH@FDBCFA@DB@DBBCD@ACBADBDA@ADABBHDDADABAFADDD@@DBBHHB@HGBBBBHGHEDD@HCHDJBDBD@D@BH@HDDB@B@JAD@BBBBBABABBDDD@FCCE@CD@HFF@DABAD@BDBBH@FCDEDC@CDADBBAD@DAFDJFHB@FHBHCB@BBHBDFBDABAF@F@DBF@@GDBDCFCDBDHBBB@FFDFBDCDDDAF@DCF@BABCBAB@HBFDD@B@HD@BBLED@BBFI@CFCBBDAD@FC@DJFFFLDD@FBD@B@D@DEFBDAD@BFAB@B@BA@@BA@@DD@D@D@D@BBBBD@@BBB@BABDH@B@B@DBDBAB@DDBB@BBB@BB@BFFFFBB@DD@B@D@BADEFEDAB@B@D@BABKPCDCDAD@DBH@DAL@L@F@FADADA@ABCBCBCACBCBCBAFAFAFEJCHABBDAFADCDEDADCDABBDBDBB@D@DAB@DCBCBABA@AFAB@BAHAHAD@F@HBJ@FADBFBFBDBB@D@D@DBBBFDJDJ@D@F@DADCDCBA@ABEBCDCFCBAB@B@DBNBDBDBD@D@D@DAD@BBP@H@HBFBF@D@D@D@DDBF@BAB@BAB@HCFCJAJAF@H@F@FBDBBDBB@DBF@DD@DBBBBBB@B@DAD@DCDABCD@B@BBBBBDD@D@DBFBB@D@HAFADCFCDCDCDADADADADEBC@CBEBEDEDCFEBABABADABEBC@C@C@CBADABAB@B@@BBDBBFBB@D@HAH@NANBJBJDFDDH@DADADCFAH@J@BBDFBDDDBBD@F@D@H@FBFBH@DBBDBF@DBBDBFBDDHBBDBDBB@D@FADADAF@DAD@DCBA@CBCBCDEBCDCDADCFE@ADC@EBABAB@B@F@FBFADADCBC@EBEBEBCDEDCFADAD@HCHCDC@ABC@EBC@CB@FCHADAH@FBDBBBBDBDAD@DBBD@D@D@D@HBFBDDBBD@DBF@F@FDDDBB@DB@DFDHFDDDFDDF@DBDAHAH@F@FB@BBB@D@D@F@B@DBF@DBD@DADADCDABAD@BBDDDHFJBH@BBD@D@H@JAH@JBHDHDDDD@FAHAJALADAF@H@H@DBDRCHCF@NBLFHDFBBFA\\EfIRALBJFLDBB@B@HCFAFGFEDAD@HBHBB@D@DCBADCDCBCBCBCB@B@FIPQLCTAB@@AB@BAFAHAFBD@B@DCBC@CBCBGBEDEHCFAF@DAB@@C@A@C@EDEFEFEFCDABADBD@DCBEFEDEBEBC@E@CBABANBLDF@F@B@B@DADABCBE@ABKDODUBODGBE@C@MAKAGAGAEAC@CAC@AA@A@CDA@A@@A@CBC@E@CACEA@AAAAAAAAC@AAK@IAAACC@CAAAAC@ABCBCBCBC@CCAC@A@AABCBCDCBABC@C@CCECACCAC@KBIBCBCFCD@D@F@B@BADAD@HDFBD@@A@ACCAA@E@ABAD@DBFFFDDBD@D@DADCFCB@BAD@H@DABADKHSBC@AACCAACAA@ABCBCHAFBDA@CBABC@CAA@EAGAGAA@EBABELIB@B@@A@A@E@C@CBC@ABC@AB@@ABA@AB@@ABA@A@ABA@A@C@A@ABA@A@ABAB@@ABA@AB@AA@AAAAAA@@AAACAECA@A@@AAA@C@CBADAB@B@@A@EA@@C@AFCBEB@AC@A@A@A@A@C@AB@@ABC@ABADAD@D@FAFADAB@DAB@B@B@B@FBB@F@D@D@DBBB@BB@BDB@BBB@B@B@B@B@B@BAD@BA@CAE@ABCBCBAD@F@DDB@DAB@DABADADCDCBCBAHAFALCHBFAFADAFCDADCFCF@B@D@B@D@B@D@BABAB@DAB@B@B@D@B@BBDBBBDBB@DHF@DBH@D@DADEFADCBCDAB@BAB@D@B@BABCBG@EACAE@CB@BCFCBCDAFE@A@ABAACAC@C@AAAAAAAAACACA@A@ADABA@AHA@CA@@AEAAA@E@AAAAAC@AAAA@C@ACAA@@A@A@AAAAA@C@AC@A@AA@ABABCD@BAB@BC@C@AAACACA@AA@AAAAACAABABA@A@C@A@A@A@A@CBAB@BCBCACEEA@AAAAA@AAA@CAA@AAAAII@EFAH@F@JDBBH@FABAHCFGFARBL@DAACEMAC@CDADC@CAG@IAEGGAC@A@GBCFCDE@EBCBCF@F@JDPDDBD@DBH@FCBAHAB@@CACEAAC@GACACACEEAAAECECCGACC@ECEEECCC@@CBC@ABAJDBBH@BBDA@AAC@CAAEICECCCCBCFABCB@BA@AB@B@D@BA@CBC@ABAD@BBDDBBBBBBB@DBBBB@FBBA@CACA@AGACACACBCBCF@DFBDDDD@B@D@BAD@DCD@DBBFBBB@B@B@B@DADADAFA@AB@BAB@BC@A@A@A@G@GDCBA@A@CCI@AAA@AACA@CCAACAAAA@CAA@A@IEEAEAEACCAAACAGBGAG@C@EDCFCBA@A@AB@D@B@D@D@D@D@D@D@DCBCAAACBEDCD@BAFCN@F@FBB@B@B@B@B@BA@CCE@G@EBA@A@ABCC@EBCA@A@A@ABA@ABABC@CBC@A@C@C@A@AAADCBABADEHBNAH@HFFAFAHABE@IB@DAHAD@HEJGBAAE@G@ICIAIAE@I@G@IBEA@@AGDEECIAAAA@A@A@GCCACGCIAGCE@AAE@AEAAA@CICGA@CKBA@A@A@C@A@A@A@A@AAAAAA@AAAAAAA@@AAA@A@A@A@E@E@E@E@AAA@A@A@AIECCBI@ACCAA@A@A@E@G@G@E@A@C@C@ABAB@BAJCN@HAD@FDBDAB@BEFBJAH@DDBFDFDRCB@F@F@BAPCTQX[H_XBPECUKYACEKCUAKAEAC@ACCC@IGIQECAAAAEK@KGCIIICAAACCAACCAACACAAAC@A@A@AFFHHHAHCFCD@DC@ABDH@@CEABEB@@CDD@C@CCBACCGA@AAA@AAAAEEAAECI@A@C@CBMBAC@CEYM@E@@BBF@FBDDBBB@BAFEHBB@DADA@AD@DCBAACCBC@AAAAC@A@C@ABC@AAC@ABAA@AACAEAA@AACBADBFADEH@BDFFD@BEBABC@CAE@E@AACA"],["@@BB@AA@"],["@@B@@AAB"],["@@AB@BBA@A"],["@@@B@BBA@BBB@ABAA@CA"],["@@A@BDBAAA"],["@@B@@BB@ACA@@B"],["@@B@@AAB"],["@@BADA@AED@B"],["@@EDDABA"],["@@@AA@BB"]],"encodeOffsets":[[[115476,23781]],[[115393,23482]],[[115399,23484]],[[115400,23479]],[[115402,23480]],[[115404,23483]],[[115405,23484]],[[115405,23481]],[[115403,23477]],[[115401,23473]],[[115390,23448]]]}}],"UTF8Encoding":true});}));