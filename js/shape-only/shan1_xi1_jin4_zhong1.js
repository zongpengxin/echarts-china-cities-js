(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('晋中', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"晋中"},"geometry":{"type":"Polygon","coordinates":["@@BDBB@BAD@D@B@D@BBBDDBBB@BBD@DBD@BBF@DBDAHBF@F@FBDDBDDF@BA@A@A@CBA@E@E@ABABAF@B@D@DAB@BABCBCDAB@B@D@D@B@BBDBJ@H@F@D@DAFADADABABABCFAFAD@B@DAD@BC@@B@BA@CAA@A@EBGBC@A@ABA@@D@B@D@FBF@DAF@B@F@FAD@D@DBDBBDBDBFBD@FBFAF@F@D@D@DBF@HBDBDBDBBD@H@DCBCBC@EBEBABABABAFAB@FBB@BDBFBD@BD@B@D@HBBBBD@B@D@B@FBDBBBBD@H@D@DABADCBABCB@DBB@DBFFBBBFBB@D@D@FBF@J@F@B@DB@BBFBD@FBH@F@D@B@B@BBBB@DBB@BBBBB@DBBDDDBBBBABABC@ADABADBD@F@D@D@BAB@BABCBABAB@B@BABABADCB@B@B@BBB@BB@BBD@B@DBB@DDDBLHBBLFDDFDBDBB@B@DIRGJ@HFL@BHHLFBBBBBD@B@D@D@BDDB@D@JBJ@B@@F@BADADBBJ@B@JAFAFBDBB@BD@BDDB@@BD@BBBBBBBB@D@D@FBF@DBBBDB@FDDBB@DBDBBBD@BBD@DAD@FAFCFAFCFCDADEFED@B@B@@D@DADADADADA@ADAD@B@B@B@DABADABADCDAB@D@D@D@F@BADABADABADBB@BBBBBDDBDHBB@DBBDAD@BADCBABABCBCDAB@B@DB@@BFFDBHJFFFJFDDDDFDFDDFDFFFDFBDBDBDBB@DBDDB@@BBB@B@B@BABADCD@DBDBDDBDBD@B@BD@BBBD@D@BABC@ABABAFAB@BAD@D@D@DAD@BA@ADCBABAB@D@D@B@F@D@DBB@DBD@FBDDB@DBDBD@D@B@D@FABABAFADAB@D@FBDBF@HBDBF@DBD@D@BAD@DADAFAFADAD@D@BBBBB@BB@BBBBBBBBDFBDDDBDDDF@DBF@BFDDDF@NENM@AB@@ABABAHCH@LBF@FFBF@RD@BBB@B@BBDABBB@BBBB@B@BBB@BB@D@B@BBAB@BABAB@BA@AD@BABA@ABABC@@BA@A@ABA@@BBBB@BB@BB@BBBBB@BBBBBBB@BBD@BBB@B@D@B@JAJ@JAB@B@B@B@B@BAB@B@B@B@BBB@B@BBBBBBBBBBBBB@BBH@@BD@H@D@BBFBHCD@P@J@DD@F@B@B@BBBFFHFRJPJJBHBJIFIHILGJIHELANAJ@X@THFJJNBHJRPHJHJDH@LBRCLAJEFCDGDIDGACGAGEEE@KNUBCBKBKFCN@JCJADCDEDG@E@GBI@MDGDKFCDABCNALBN@F@PGHCFGDEBC@I@ICM@GAGEOCMEMAGACAMAKBIDOFIJELGJCPGLEJEBCDCAOCIBKBEDIDEFCLGFCJEJIDIFMLMDEJKJOJIJGLGJEFEBABE@Q@KDMFGHKFI@ARKLEPQJUPAPALAPBN@HGHGDILKRCJ@LAP@VBXAL@RBNFTBPAJCPMHGHAHCJAJ@FAJ@PBHFDDBBJ@HBH@H@DDBB@BAB@FBFFDBBHBLBJBL@H@HBL@LAHAD@DABAB@D@H@DAFCDG@C@ADIBIJCJDVJXFP@NBH@PBVBNHVLTJLLDDJFNJXBL@H@VENEVGLCTIFCZKPIPCPBHFBJDRBPBHTARRPDhJJBPBNBLAXIJEHIXERCLCL@PGPMFQBKCOEMEOAKGIKMGICK@KJUFOCIEKIMOQOQOOIOGKS[OSGIIIKIKKMKEQEMEIBOAIASAGAMCKGGIMOEQ@C@MIIGIIIIIUCOAACGAMCO@CBMEMOMKAEAICICGCCAKEIGCAECCAKMCKBE@I@K@GAIEOEKAEGGGMAM@C@G@QMKQOKEMCIIKSIKKS@M@M@AIOO@G@OCGEAAGEUEM@EAGAKCKMDMBED]BIBQGO@AIGEMCGAEAIHMFEHEPED@D@P@DI@G@C@MGIGGMOAAEOFIHILENGHKEKAAQMCGAA@AAAAKMEOGCIJQFOBE@AHGFAFBFDDA@G@CIGAIDGJOFGDEDIBMBKEOCCEEA@CAG@EDIBACAGJICKE@@HGJA@MAAAAACK@AAACCA@C@CAABCAABA@@BAB@BA@@D@BCBA@C@EB@D@H@F@FBBAD@F@DADCDA@C@AAC@AAC@C@EDCBADABABOCKEGIAACMGIGGCCGEAGAMBCBIHMHMCIIGAECKJQDOOEQ@KAEAKEMGCAOKIGKGEAQKUISBOJM@M@KCOCKCACIKKDGDCBIBIHILEJGJCHAFEJGRETCNCDGHIHMHMBSHEHGJABKJKHIHABMJEDEBIDQDUDMHEBIJCDGHEAC@CAQBA@ABBD@BHL@DJLBLBF@D@BEFGDADB@DF@BB@SJCDEHGHABIHIH@BOLCAE@GBCFDDFDEHCFCFIPCHOHIAGAAAKKCMGICGA@IACBC@CEA@CCCCAC@C@CCAE@CDABAFA@A@GIECCACAGAEEAA@ECACBC@CD@LCLSD@GAKCI@GOCI@CBIBABA@ABGAEBA@AD@BGb@BCJA@AC@GACECGBCDCDGDC@AC@M@MACAC@CBABC@ABCBC@A@AACC@A@EHGDGBCBYCcDEECIA@E@A@SAKDIHEDODC@O@U@MCU@SBUFCAKCSMGCMIYMQMCCIK_UKKEGIECGA@CAGASBCBSFA@@BB@JNEJADEHMJKFEJABBLBDHLBFBLAHGPIH@BARBBBLDHBBFV@FCJGHEFUBMBIFGFABEFADADILIBOFOASCQ@CBIDIJCP@FCHIHKHENCFGDKAOAMD@D@LBR@JIPGHKNA@MLQFSAODQB[RMNQJA@IBKAGE@GBEAGIAQ@QEIMKMGECGCCCAG@EBGBKDIDG@EBGBCBGBG@E@E@C@C@ADAD@DAHAHABADCBCBC@E@IAA@CBCB@D@BBDBDBD@F@BABABC@G@C@GACBC@IDG@ECGEKCKAC@C@AAA@A@ABA@EAEAAAC@GBIBA@C@ACDKJGPER@TENGBEBKDaCSACCGBIJENGHGBAFGDIFMDMAKCOHMTEN@R@LEFCDKBEBGAACKKMKEQGQCQAMDKFMJODGAGGECKCGGEEIIKESCU@KBIHKHMHIDS@QBQFIBO@IAICEGACCCEGCK@AA@AAA@C@E@CDCB@HCBMROLKFCBMFA@OLEJKJOFS@OBIBKHKFGFCNCNCJIFCAK@A@EDIAM@OAK@E@KCCCGCCGGKKEGAG@IEGCCGCGG@IDGDGEKEIASCK@YAQBM@KCAC@IFKHIJILKJIDADC@C@EAGAGEGMGGGCKHIFCHEJIACGGCEACQCKAU@OHMFO@MGEGFKFKGUKSKIDG@GCMBC@A@CEGOGOEEAGO@Q@IBCFABABECG@CEKAGBCBAHBD@D@FKDIHGHGBECIKICCAA@E@YAUCODSAGKGOCQJMJKHIFKJGDKFGBODMBKCSDC@GDE@C@G@C@KDIDE@CAGCIEMDBGAEAAACIAICEAG@C@@B@B@BDFBBHD@BBBAD@DCBEBK@AAIEAACBEDEDC@MCEAQEEAA@GAGASHKFGDCDIFA@GDGAKESCMAUAGCA@IEKCICMCA@CAA@QEC@GAAIACDCFMXODC@CGI@GCIEAECCACAIBOJCBQRKLOJMJMNGBMFIDEDA@SNCBEFOJQJKNGHMPADILEFELCF@BCNALHLF@HBDHEFADCDCBADA@A@A@C@AABEA@AAA@C@@BABAFEBCDA@A@E@AAAA@AAE@CAEAAAAA@A@ABAD@HBH@BA@CBADCDAFAFAFA@C@A@CA@A@E@A@AAC@AAACE@A@EEOCAKEMEIAC@MBKDOFEDCAA@EBCHABCDGHIJEHM@ADAHCTBLANBHBD@BB@H@B@@BAJ@B@BB@@FBBB@D@B@JDBABABAB@R@JBD@LFBDBJ@DBBBDFFDFPBLBLDD@DBDB@FBFDBDDDBFBLHPBZAF@LDFBLFBDDBJFLHJJBDDDFBJ@FBLHFD@BBBCBCDIDEDGDE@G@CCCCC@EBGFCBC@C@ABCBAD@JBN@HAJCBGDCDADKJEHCBCDE@C@C@AFINKLCFHBLDPBVHJADACG@C@IFINGHAHDBDFBH@DADADAJEDCLEJGJCDANAJANELEB@JCDC@C@CAABCBCJCLAJBBBBD@F@F@HBBBDFFBDBBBBD@D@N@F@BBBDFLD@B@JEDAB@D@DBDFBHADAH@FBDLLF@NBNBN@RDL@B@B@DIRACLDJFHFBDBHDTJJBFBRDFBD@DBF@LDJDLFVHJFFBHFDBCHDBJAB@BAHEDCNEN@FBLDAH@LHDHFNDJFDHFHJRFB@FB@@D@F@DBBFDBFDFBBBBBBFDFDHFD@PFHLDPBD@DBDBH@B@B@FBB@NBF@HFH@BDDBHBDBDHHB@BF@BFNBBABCPAD@F@B@JAJ@B@D@FBHBFBBRJBBBHABABADAF@NABCDCBGBK@AB@F@B@D@DBBDBJ@N@BA@CD@V@B@DBBB@B@BHB@BDRBFBBD@BC@EBEB@D@@BDLDBF@F@DABEBAF@RBB@BBAB@BEHCF@DDFF@B@@CFEDE@EB@BAFAHBHDBBBFBBHBLBBBB@BFAH@FDL@DFDHFDBHFFH@BDFDD@BP@RBJCJCBA@AAE@A@C@AB@BCDEHEF@DAJ@JADCBGBE@EAK@EBAFCPCJGDAFDFBFF@FFFFD@BBF@BBB@BDBB@FDB@DBBB@FBBBBDDFD@BB@@BBDBDDDDDDBJDB@FDDBFDDDDBDDDFBBB@@DAB@B@BFDBBDBNDBBBBDB@BBBBD@D@B@DDHBBFBFHBDHJBB@BDB@BABB@B@DBBBBDBB@B@BHDJJFFFN@HAF@DBJ@DBLHLNLJHVNXFD@BBTDH@J@HFBBB@DB@BBJBDBDDBDAB@@BB@BB@BBBDAD@L@D@DDDFDH@FADFPBDF@B@JAFBB@BBHAH@P@DA@ACOBEBEDEBADC@AJAFBHBFBH@DADCHCH@D@BAB@H@@BBBBBBNBFBBFJBDF@D@PAFAFEBCBADCDAB@F@H@DDFFBDD@JAHBD@DBFBFBFAHBBBBBBD@H@B@D@D@L@F@D@B@D@F@FB@BBD@F@F@F@DBFBDBD@BBB@D@D@FABBBB@BBBB@D@B@F@DAD@FAD@DABABAB@BAD@F@FABAD@HAJAHADA"],"encodeOffsets":[[115293,38407]]}}],"UTF8Encoding":true});}));