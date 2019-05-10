(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('湘西土家族苗族自治州', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"湘西土家族苗族自治州"},"geometry":{"type":"Polygon","coordinates":["@@C@EAECEAE@G@I@WEKA@AABEBC@C@A@AAA@CBEBCBAAC@ACAC@C@ABAFABABC@AAACECCACBA@A@GDK@C@CACECGCA@A@A@C@AAAECACE@EAC@CDCFIBCBC@CACCAGACAAACECAECC@CAAECCA@A@CBC@C@C@EAA@AAACAEACEAEEACCCA@GAGACACEEG@CBE@CAAC@E@CBEDC@C@A@CBEBABEBAACG@E@CA@A@AAA@@AAE@CAA@A@OAGBCDAL@HAB@D@@C@E@ABABAFEBC@CAAAEACBEBEHEDG@IAESOWAC@AACC@CBAFADA@A@AAAGECACBCFA@A@ACACAEEK@ACCECA@C@CDAFABABC@C@ACCAA@ABAB@BABCBAAA@A@CDEBA@IEAAAA@EAAC@C@A@AACGGKIEGCC@EDAFCHCBEB@FBJ@B@JAFC@A@CCA@C@@BCBCBAAECCEAIAAAAC@A@ADABMEECIEEGCCCCCAE@EBABADBHDJ@FADEBCAI@I@CAAAAACCACCEAE@ADADCDEBIBC@C@ECAIGGECECECIAEACIEAAGA@ACCEACCAA@CAIAECEEGGHC@E@KCAA@AAAC@A@GDAB@BADA@A@AAAAA@C@CBA@MCE@C@EAC@A@@D@D@BD@JFFHDFBBADABEDKBA@EBA@FHBBAB@BABAFBJABA@EBCBEFGHABAB@B@B@BCBA@A@E@E@A@A@@B@BBBABG@AB@BBBDFHHB@BB@BA@CBC@EAA@A@A@BBBDHHHDD@BBA@A@ABABABBD@BDDDD@FEH@HBHJR@BBB@DCDADGHIHCDIHCF@DBDDBHBHDBB@BABC@I@E@EAAAC@@DBB@D@BCBCDAH@D@F@BDH@DBHABCHGHCF@DFR@DADADAF@B@BBDBB@BADCD@BCD@FAH@DCDEHAD@B@BBF@DDFDDF@H@B@BBBB@BB@D@B@@B@B@B@BB@BB@BAHAH@BAFBDBBJFDBJHHFJFDBD@D@L@JBF@DBB@@BB@@B@B@B@BBB@BB@@BB@@BBB@DBBB@@B@BB@@B@B@BB@BBBDB@@B@B@BB@@BB@B@@DADCBCDCB@B@BADADCBEBGFABADABC@G@EB@BABCDEDKBE@AAEG@AAIA@CICICAGAIAGCCECE@AAAE@C@C@AF@HBJDT@J@DDN@NBHBBHHFFBB@D@DAD@F@BBH@B@FBDFDJJHHDL@LFJFFHHBHAFCT@B@B@DDBDBFDBN@B@FALCV@D@DDLFLBBHJNLFFBF@FADCD@BAB@DB@BBD@FBBBFDFLDHBBAB@DA@EDA@@BBBB@D@DBFDNLFDDBJBL@B@@F@DC@IAE@EBUFE@CAAAE@CA@AAACCEGAAA@C@A@A@A@AD@BDHBBFFDHFFBDABCA@BCBCBEBC@GBIFCBE@E@A@A@AAEKGEIGA@CCEAKCEACBA@EBCBCBABAB@DDFDH@FABABABABABEBCBABAB@DADCBABC@C@ABA@@BA@A@ABA@@B@BB@@BB@@B@B@BA@@B@B@BA@@B@BBBBBB@BBABA@A@A@A@@B@BAB@DCF@B@D@BA@@B@BBBBBBDB@BB@B@B@BBBDDDD@BB@@DBBBBB@BBDDBB@B@B@BB@@BBB@B@B@B@B@B@BBB@B@B@B@BABABA@A@A@A@A@A@A@A@A@A@AB@B@BB@B@@B@BABABA@A@A@A@A@A@ABAB@BA@@B@BAB@BAB@BAB@B@BB@@BBBAB@BA@AB@BB@@B@B@B@BABABAB@B@B@B@B@B@D@BABA@@B@BBB@B@BAD@B@BAB@D@B@BB@@BBB@BA@ABAD@B@BB@@B@B@BBB@B@BAB@BBD@BBB@B@BBB@BBBB@BBB@@BAB@BA@A@AAA@@BBB@B@B@BA@@B@BB@@BBDBDBD@B@B@B@BB@@DBB@B@D@BBBBBBBB@B@B@B@BAB@B@@BB@ABAB@BA@@B@B@D@B@B@BBBAD@B@B@BADB@@B@B@DADAB@D@B@B@BDBB@B@DBBBBB@BBBABA@@BA@A@@B@BA@AB@BA@BBA@BDAB@B@B@B@B@B@B@B@B@BBBFBBBD@BBBBB@BBFBB@@BBB@BBF@BBD@BBBB@BB@D@B@D@B@B@B@BBB@BBB@BB@DDB@@B@B@B@B@BB@@BB@B@DBBBB@B@D@F@B@B@BBBBB@B@@ABAB@@B@BA@@B@B@BB@@B@BA@A@@BA@A@AA@BA@@BABA@@BAB@BA@@BB@@BA@@B@BA@@B@BA@@BA@@BA@A@ABAB@BB@@B@BB@@B@BB@DB@B@B@BADBB@BAB@BABA@@BA@@BB@@B@BA@@BA@A@@BABABA@@BA@AAA@@BA@@AA@A@A@ABABA@A@A@A@AAAAEGAAA@@ACEAA@ABA@AA@AAEBA@CAA@A@AAAAA@AAA@AAAAA@AAA@A@A@A@A@A@A@A@@BA@ABA@@BAB@BA@@BA@@BA@@BA@ABABABCBA@@BA@A@@BA@A@A@A@A@AAA@@AA@@AAA@AA@AAAAA@AAA@AAAAA@@AA@@AA@C@C@AAECECACCCAAA@@B@DABKHEBABCBABCB@BDDBB@BA@G@A@ABAB@BAB@BBBBBLFDD@BBHBDBDBBDBD@FAB@BBJFDB@BB@@BB@B@@BB@B@@BB@BBB@B@BBDBB@@BB@B@BBB@BBB@B@B@BBB@B@BBB@DBB@BBB@B@BBBBB@B@BBB@BBB@BBB@B@BBB@BBBBD@@BB@DBB@@BB@B@BBB@B@BBBBBBB@BB@B@B@BABA@@BABAB@BABABA@@BA@A@A@ABA@A@ABA@@BA@@BA@@BABAB@B@BBBBB@BBBBBB@B@BBB@BBB@BBDBB@BAB@B@B@B@B@@BBBAB@B@BBB@BB@BBB@BAB@@B@BB@@BB@@BHD@BB@@BBBF@@BB@B@BBBD@BB@B@@B@B@BGDABADBFTNBF@D@FADABABA@ABC@ABK@K@CBBB@B@B@B@BA@A@A@ABBBABA@ABABA@@AA@A@@BA@@BA@AA@BA@A@EBCBA@CBA@AB@B@BB@B@BAB@B@@B@BA@@BBBAB@BB@B@@B@BA@A@CBA@C@AAA@A@A@@AAAA@ABA@C@ABABA@@BA@@BAB@B@B@B@BBB@B@B@B@B@B@BBB@B@B@B@BBBBBBB@BBBBDAD@B@B@B@B@B@B@B@B@B@BEH@D@HABADAD@B@DBB@BBBB@@B@BABAB@B@B@B@B@B@BBB@B@B@B@DBB@B@B@B@DA@@B@BABAB@BA@@BABA@@BA@A@@BA@@BBBB@B@@ABB@BA@ABA@@B@FBN@D@B@BDJBBB@BB@B@BA@@BBBB@BBB@B@@BB@@BB@@BB@@B@BBB@B@B@D@BB@@BB@@BBBB@B@B@B@B@B@@B@B@B@B@B@B@B@B@B@B@B@B@B@BAB@B@BAB@B@B@B@BBB@B@BB@@B@B@B@B@BBD@B@BBB@BBB@B@BBB@B@B@B@B@B@BB@@B@BB@@B@BBBBD@BBB@BBBBD@BBBBB@BBBB@@BB@B@D@B@BB@AB@B@B@B@BBB@B@BB@BB@@B@BBBB@@B@B@BB@@B@BBB@B@BBB@BB@@B@B@B@B@B@B@B@B@B@B@D@F@D@BBFDF@BA@@D@B@BBBBBDBBBB@DBFBBB@DDFDJDFFFFDDF@D@DABAFAFA@ADA@@B@D@DCF@B@B@B@BABA@ABC@A@A@EBABA@AAA@GAA@CBGBIFOHABEBAAA@C@AB@BABGFA@ADC@ABC@C@KAC@G@A@E@AB@BA@@H@B@D@DCD@BCDAB@BAFAH@BCB@BBDB@D@B@B@@BBD@BB@HCJCFADBFDFFFFD@JCVBFD@F@D@JCDMJC@@BCDAB@BCHAD@JBHJNFBFDDB@B@BABCF@F@FBFDJBLBD@DADCFGHEFEF@BCBCBAB@F@FFFNHPHPJDBLDjPBBBABBBBBBB@BBBBB@DBBBDBBBDDBDBBB@BBBBDDDB@BBBB@BBB@BB@BBBBB@BB@B@BBBBBBBBBBBB@B@B@B@B@BA@@BB@@BBB@B@BB@@B@B@BADAD@DBDABA@GBE@AB@DDF@FAH@HG\\@BBLBF@BBL@L@LBB@HBDDDFDDBJBB@FDB@HDDBBBD@BADADGBAPCHCD@B@B@@B@BADABABCDADA@A@A@ABA@@BBBBFDD@D@DABADABABADABAB@BABABA@@BA@@BABA@ABABA@A@@B@B@B@BBB@BBB@B@B@BBBB@@B@B@B@BB@BBDBBBDBFBDBDB@BB@@DBDBBDBDBD@DAJCBABABAB@B@@B@BAB@B@DBBABABCBABBBJDBBBBDBB@D@@ABABABBB@@D@DAB@BCBCDCDCBADABADADAB@BBBBDDDDDBFBB@F@D@BA@AD@BADDDBB@BBBDBBBB@B@B@DAB@DAJEDCDAB@BAB@DBB@BDBBAD@DCBCBCFCB@BAD@DBHA@@B@B@D@DBD@BABA@@B@BAD@B@BBBBBBBDBB@B@B@@AB@DABBF@B@DA@ABA@C@C@A@ABABABAB@D@BADABCBADAD@BBB@BD@DABAD@BADAD@BABADAB@B@F@DBF@F@B@BBD@B@D@FBB@B@BDD@BBBDBBBB@BAB@@ABA@AD@B@BADABAB@B@D@F@B@B@B@B@B@@B@DBB@B@BBD@BBBFFDDBFBFBHFTBBAD@D@B@D@B@B@BA@A@E@C@AB@B@DBBBBDBD@D@FADADADADAB@B@BBBBBB@B@B@B@BBB@BB@BAB@B@B@@B@B@BA@A@CBA@A@ABABAB@BABAB@B@D@B@D@BBBBBDAD@B@B@B@BAB@B@BBBBB@@AB@@A@CBAB@B@@A@AAA@A@AA@@AB@@AB@B@D@B@DAB@B@D@B@J@BAB@DADCFCBAB@BBB@BBHDDDB@BBFFDDBB@B@DAD@DBBBBDBPDJBHBJ@D@PBB@B@B@HEFAHADAREJADAFBFBFBB@B@@A@CAU@A@A@AHIFEDCD@D@B@DBFDB@FFDBHBJ@LBPAH@F@HBFDHDJEFCH@HBLFJFHBJ@VAHAB@BADEBEAECECA@A@EBEDGBCFCHCHADEBC@AECUMQKEEKIAAAC@CA@CACBE@ECEGAA@CBAFCDEHMJSFOBAJIPGFK@EDABAH@DABC@A@A@EBGBC@APUNQBAFEDCBABC@CAC@C@ADCDABCBG@E@ACAEACCIIAAAG@A@AFCDCB@FEXYHCDCHIHSPNPLPLJJDDRPNLFD~vBBFDHBB@F@D@H@JELODKDKDIFgHIBAFI@GAEIOCE@A@EDGFADAFCFEBCDK@KKICECCOECCGAAA@A@AJCVEPKLKDCBADAFCDALALAJ@F@BAF@FARMD@DADBRNDBRPDDXRHDDDFBJFHBD@D@BAB@BA@AHAFARIJEFCHIDCTYBK@G@ACMKY@AACAEEACAEAK@EBA@E@A@AAAAAE@A@CBC@CBC@C@A@AAAOM@ACKAODKJIBGBIBEFCDEFMBGDK@I@C@CAG@GDGBCBADEFADADBB@BBBBB@B@B@F@BBD@FAFAFCFCFALDFFFHAJDDFBFBDBFHBDFFDDN@HCFEJGFEJ@BBDFFJBBB@F@B@DBB@BADADCBA@CBC@AB@@AAA@AFGDEBADABABA@A@A@CBAB@DBBBBBB@D@BAACA@AACACEAAAA@ABADADABBD@FBDAD@DAD@DABABAB@D@D@B@J@H@F@BAD@B@BA@ABCBEBC@C@AAAACCE@AAA@AAAC@ECAAAAAEAE@GAE@A@E@ABCDAJCDABCB@@AD@D@BBF@BBFBDDBB@FDDFFHBBBHBD@D@B@DBDDDBJB@ABE@OCEAE@ICQ@AAC@MBEBABABAAA@AFGJEH@BBFDFDDBH@DAHCDBFDF@DC@ADCEK@GHGDG@GAGCEGGCCCE@EACACCGEEAAAAB@F@B@@A@AAAKIAAGAAAA@@A@G@A@ACAOICAAA@EBOBGDCDCDABAB@D@FBDBFBJ@NAPGHCNEJGFEDG@CAUCEGM@G@EB@JATETCLG@EBAAC@AHKDG@AAEIAMEKMGCAAA@G@CAACIMUYGGAK@AAICGAGBK@GBI@IAIAMMOECMCKAM@G@GDIFKHCBC@ECCCAG@IBGDMAMCKCCCC@E@IACAACAAMCOBK@EBEAGCO@GACC@C@GBCBEAKYCAEAABCA@CAEBE@G@ACAC@GDCDEHCBE@EAEIAAACAKEMAEAC@ABCDANCHCHCBA@AAAEAEA@CDKBKFGBA@CAC@CFGHO@CEKKCGEWDADCJCFCBCAE@IBKAA@EPIDGBA@A@EAACCGCGAKAI@MD]@OEAQAECCEBGAKAeAK@S@ADGBCFGFCHABABCAAEECCIAICGACACCAE@CACEAODA@ABBBDJ@DAB@BABABC@CBEAGBEBE@EAAMCEHCFEDCDEBE@CAEAECI@C@KBGHKHGFCFABCB@NQBCHGDEFAB@BBBHBDDDDBDAFAJGDCDCFEBAB@FAHAF@BADGHGFIJAF@F@FBD@DCBC@EBCFC@C@AACKIEECAA@A@A@C@GAGAEEAKAKACAAAAC@@C@M@MFIFGDG@CAC@AA@C@A@E@A@CA@A@CBEBCFEFGBA@AAAA@@A@ABADCBCFCNEFAFAD@B@B@BA@CDI@ADAD@B@DBBAB@DABCD@BBD@B@LEFAHEBCBAAACA@ADGHKBICKACGKCCCAE@G@GBEFEF@BA@A@KCY@C@C@AAAC@EBALCFEBEAKAEAEIEQGUGKI@A@CBCFCLIHEDE@GACCCEA]CQCCAEC@C@ABCBCPKNGBCBCAC@AAAGGAACAAAMECAE@A@I@WBA@A@G@K@E@CAAA@C@ABE@ADMDCFGFGDCTKFCBC@CCA@C@ABC@A@AAACBA@AAAA@A@C@AAAG@E@A@A@ACBADCDGDEBEBCAA@AACCAAACAE@A@A@A@@AAA@C@AAACECC@EAK@G@A@A@CACCACAACCCACCCAAICE@E@C@A@A@AC@CAAA@A@CBCAC@GACAEGEGCCECG@C@AACAAC@A@ADCDC@E@CDE@ABA@C@ACAEEAC@C@CCCAAACGCWKKEG@EBEDABIHIHC@AD@DDJ@BDDAFADEDGBEHEFCBEAIGIGC@AB@B@B@FBPAFADEBCBABADCBEAACACDC@CACCACCC@C@@B@D@FADA@A@E@CBIDE@ECECC@C@GBECCCAA@CB@BC@AAAC@CC@EAEAAE@CBEBIDEFCDK@GBKTCDIFKFEFGHGDK@K@C@CB@BHJDFADGBI@MAG@GEEAGAI@KAE@CACECAA@ABAHGLELCDABC@E@BLDBHFFF@FAF@JBHBFB@DDFDBD"],"encodeOffsets":[[112428,28703]]}}],"UTF8Encoding":true});}));