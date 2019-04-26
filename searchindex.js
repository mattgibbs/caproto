Search.setIndex({docnames:["api","async-clients","basics","command-line-client","index","install","iocs","loggers","mock-records","protocol-compliance","pyepics-compat-client","references","release-notes","servers","shark","sync-client","threading-client"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api.rst","async-clients.rst","basics.rst","command-line-client.rst","index.rst","install.rst","iocs.rst","loggers.rst","mock-records.rst","protocol-compliance.rst","pyepics-compat-client.rst","references.rst","release-notes.rst","servers.rst","shark.rst","sync-client.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Beacon":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],our_role:[0,2,1,""],process_commands:[0,3,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{clear:[0,3,1,""],client_name:[0,3,1,""],create:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{clear:[0,3,1,""],create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],process_command:[0,3,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},"caproto.server.records":{AaiFields:[8,1,1,""],AaoFields:[8,1,1,""],AcalcoutFields:[8,1,1,""],AiFields:[8,1,1,""],AoFields:[8,1,1,""],AsubFields:[8,1,1,""],AsynFields:[8,1,1,""],BiFields:[8,1,1,""],BoFields:[8,1,1,""],BusyFields:[8,1,1,""],CalcFields:[8,1,1,""],CalcoutFields:[8,1,1,""],CompressFields:[8,1,1,""],DfanoutFields:[8,1,1,""],DigitelFields:[8,1,1,""],EpidFields:[8,1,1,""],EventFields:[8,1,1,""],FanoutFields:[8,1,1,""],GensubFields:[8,1,1,""],HistogramFields:[8,1,1,""],LonginFields:[8,1,1,""],LongoutFields:[8,1,1,""],MbbiFields:[8,1,1,""],MbbidirectFields:[8,1,1,""],MbboFields:[8,1,1,""],MbbodirectFields:[8,1,1,""],MotorFields:[8,1,1,""],PermissiveFields:[8,1,1,""],RecordFieldGroup:[8,1,1,""],ScalcoutFields:[8,1,1,""],ScanparmFields:[8,1,1,""],SelFields:[8,1,1,""],SeqFields:[8,1,1,""],SscanFields:[8,1,1,""],SseqFields:[8,1,1,""],StateFields:[8,1,1,""],StringinFields:[8,1,1,""],StringoutFields:[8,1,1,""],SubFields:[8,1,1,""],SubarrayFields:[8,1,1,""],SwaitFields:[8,1,1,""],TableFields:[8,1,1,""],TimestampFields:[8,1,1,""],TransformFields:[8,1,1,""],VmeFields:[8,1,1,""],VsFields:[8,1,1,""],WaveformFields:[8,1,1,""]},"caproto.sync.client":{Subscription:[15,1,1,""],block:[15,4,1,""],interrupt:[15,4,1,""],read:[15,4,1,""],read_write_read:[15,4,1,""],subscribe:[15,4,1,""],write:[15,4,1,""]},"caproto.sync.client.Subscription":{add_callback:[15,3,1,""],block:[15,3,1,""],clear:[15,3,1,""],interrupt:[15,3,1,""],process:[15,3,1,""],remove_callback:[15,3,1,""]},"caproto.threading.client":{Batch:[16,1,1,""],Context:[16,1,1,""],PV:[16,1,1,""],SharedBroadcaster:[16,1,1,""],Subscription:[16,1,1,""],VirtualCircuitManager:[16,1,1,""]},"caproto.threading.client.Batch":{read:[16,3,1,""],write:[16,3,1,""]},"caproto.threading.client.Context":{get_pvs:[16,3,1,""]},"caproto.threading.client.PV":{go_idle:[16,3,1,""],read:[16,3,1,""],subscribe:[16,3,1,""],time_since_last_heard:[16,3,1,""],timeout:[16,2,1,""],unsubscribe_all:[16,3,1,""],wait_for_connection:[16,3,1,""],wait_for_search:[16,3,1,""],write:[16,3,1,""]},"caproto.threading.client.SharedBroadcaster":{cancel:[16,3,1,""],get_cached_search_result:[16,3,1,""],received:[16,3,1,""],search:[16,3,1,""],search_now:[16,3,1,""],send:[16,3,1,""],time_since_last_heard:[16,3,1,""]},"caproto.threading.client.Subscription":{add_callback:[16,3,1,""],clear:[16,3,1,""],remove_callback:[16,3,1,""]},"caproto.threading.client.VirtualCircuitManager":{events_off:[16,3,1,""],events_on:[16,3,1,""],received:[16,3,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Beacon:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ChannelType:[0,1,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""],set_handler:[7,4,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"01321e":3,"09173e":3,"0x1041672b0":6,"0x1041672e8":6,"0x104167320":6,"0x104167358":6,"0x104167550":6,"0x104167588":6,"0x1041675f8":6,"0x10928fe10":6,"0x10928fef0":6,"0x10928ffd0":6,"0x2c":3,"0x2d":3,"0x2e":3,"0x7f5505bb81c8":16,"0x7f5505d24348":15,"0x7f5515270480":16,"0x7f55152704e0":16,"15495e":3,"18551e":3,"250x":10,"40m":12,"47361e":3,"64561e":3,"88171e":3,"abstract":[2,13],"boolean":[0,7,15,16],"byte":[0,2,3,14,15,16],"case":[2,3,6,7,15],"char":[0,3,6,12],"class":[0,3,6,8,15,16],"default":[0,3,6,7,12,15,16],"enum":[0,3,15,16],"final":[2,3,11,15,16],"float":[0,3,6,12,15,16],"function":[2,3,7,10,12,14,15,16],"import":[0,2,5,6,7,9,10,12,14,15,16],"int":[0,3,6,12,15,16],"long":[0,3,4,6,9],"new":[0,2,3,5,6,7,9,12,15,16],"return":[0,2,6,7,12,15,16],"short":12,"true":[0,6,7,12,15,16],"try":[2,5,6],"while":[6,12,15,16],Added:12,And:[0,4,6,14],But:[7,15],For:[0,3,4,5,6,9,10,15,16],GPS:5,IDs:2,Its:[2,4,16],PVs:[2,3,5,6,10,12,15,16],That:[3,16],The:[1,2,3,4,5,6,7,8,10,12,13,14,15,16],There:[2,9,12,14,15,16],These:[0,2,5,8,11,16],Use:[0,3,6,7,12,14,15],Used:[15,16],Useful:4,Using:[2,4],Will:16,With:0,__doc__:6,__init__:0,__main__:6,__name__:6,__repr__:0,__stdin__:6,_broadcast:3,_caproto_pv:10,_circuit:3,_io:7,aaifield:8,aaofield:8,abandon:[4,15,16],abc:6,abid:[2,12],abl:5,about:[0,4,11,12,16],abov:[2,4,6],acalcoutfield:8,acceler:4,acceleromet:5,accept:[0,2,3,7,12,15,16],access:[0,3,5,6,7,9,10,11,12,13,14,15,16],access_respons:2,access_right:[0,2,3,12,14,16],access_rights_callback:[12,16],accessor:12,accessright:[2,3,14,16],accessrightsrespons:[0,2,3,14],accident:[12,15,16],accordingli:9,account:9,acctst:12,accumul:[15,16],achiev:12,ack:6,ackt:6,across:16,action:16,activ:[12,15,16],actual:[2,3,10,12],adapt:9,add:[12,15,16],add_callback:[10,15,16],added:[6,7,12,16],adding:[7,10],addit:[0,2,3,4,12,16],addition:[3,12],addr:7,address:[0,2,7,10,12,16],address_str:0,adel:6,adher:2,adjust:12,advantag:10,advis:4,affect:[2,12,16],affirm:0,after:[12,16],again:[2,3,7,15,16],against:[0,2,4,5,9,10,12],aggreg:16,aifield:8,aim:9,air:3,alarm:[0,3,6],alarmsever:3,alarmstatu:3,alia:15,all:[0,2,3,4,5,6,7,9,12,14,15,16],alloc:0,allow:[0,3,12],alon:5,along:[6,7,12],alongsid:16,alreadi:[2,3,6,7,14,16],also:[0,2,4,5,6,11,12,14,15],alst:6,altern:3,altogeth:12,alwai:[2,7,12,15],ambigu:12,analog:[1,6],analogu:9,analysi:[6,14],analyz:14,andrew:11,ani:[0,2,3,5,6,7,9,12,14,15,16],announc:[0,2],anoth:[0,2,3,4,5,15,16],another_func:16,ansi:[3,7],answer:[0,2],anyth:[2,15],aoff:6,aofield:8,apart:10,api:[2,4,7,10,12,13],app:5,appear:[9,12],append:[15,16],appendix:4,appli:[3,16],applic:[4,15,16],approach:[12,15,16],appropri:0,apt:[4,5],arbitrari:16,architectur:4,archiv:3,area:[12,14],arguabl:[1,12],argument:[0,3,4,5,6,9,12,14,15,16],around:[1,4,6],arr:[9,12],arrai:[0,2,3,4,5,6,12,15,16],array_pad:3,arriv:[2,12,15,16],asg:6,asid:2,ask:[2,3,16],aslo:6,aspect:10,assign:[0,6,16],associ:6,assum:[3,12,16],asubfield:8,async:[1,5,6,7],async_get:6,async_lib:6,asynchron:[2,4,12],asyncio:[5,6,12,13],asynfield:8,atexit:6,attempt:[12,16],attr:6,attr_separ:6,attribut:[0,3,7,15,16],authent:2,author:[4,10,13],auto:[2,6,8,12],autogener:6,automat:[0,6,9,12,16],avail:[2,3,5,6,14,15,16],avoid:[9,12,15,16],await:[6,7,16],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,awar:12,back:[4,5,6,12,14,16],background:[15,16],backlog:[12,16],backward:3,base:[3,4,6,9,11,12],basi:6,basic:[0,4],batch:[7,9,10,12],batteri:[4,14],battl:4,bcast:7,bcast_socket:2,beacon:[0,9,12,16],beacon_id:0,beamlin:6,beazlei:11,becaus:[2,5,7,10,15,16],becom:[2,9],bee:4,beej:11,been:[0,2,3,4,6,7,9,12,15],beer:4,befor:[0,2,3,6,12,15,16],begin:[2,12,16],behav:15,behavior:[6,12],behind:6,being:[0,6,12,16],bell:6,below:[3,6,7,12,15,16],benchmark:4,best:[4,12],better:[2,4,12,14],between:[0,2,3,6,12,15],beyond:16,bifield:8,big:2,bigendianstructur:[0,15,16],bin:6,binari:[3,11],bit:[5,16],block:[9,12,15,16],blog:11,bofield:8,bookkeep:4,both:[0,2,7,10,12,16],bottom:6,branch:11,brew:4,bridg:[10,15,16],brief:10,bring:5,broad:4,broadcast:[2,4,12,16],broadcast_address_list_from_interfac:12,broke:12,broken:12,bsd:4,buffer:[0,15,16],buffers_to_send:[0,2],bug:6,build:[4,5],built:[0,4,5,7,13,16],builtin:2,bulk:[10,16],bundl:14,busyfield:8,button:5,bytearrai:2,bytes_receiv:2,bytes_recv:16,bytes_to_send:[0,2],byteslik:0,cach:[3,9,15,16],caget:[3,5,9,10],calcfield:8,calcoutfield:8,call:[0,2,6,10,12,15,16],callabl:[15,16],callback:[6,10,12,15,16],callback_count:3,caller:0,camonitor:[3,9],can:[0,1,2,3,4,5,6,7,10,12,15,16],cancel:[6,12],cannot:[12,15],capabl:6,caproto:[0,1,2,7,8,9,10,12,13,15,16],caproto_io:5,caproto_skip_motorsim_test:5,caproto_string_encod:0,caprotoerror:0,caprotokeyerror:0,caprototimeouterror:16,captur:[5,14,15],caput:[3,5,9,10,15],care:2,carefulli:16,carepeat:3,casever:[0,2,3,6,14,15,16],castatu:0,castatuscod:[0,2,3,6,14,15,16],cat:15,catv:12,caus:[6,12,16],cb_id:15,certain:7,chain:6,chan:2,chang:[0,2,3,7,13,16],channel:[3,6,7,9,10,11,12,13,14,15,16],channel_st:[10,16],channeldata:[6,12],channeltyp:[0,2,3,6,12,14,15,16],channnel:0,check:[0,2,3,12,15],chnage:0,choic:[4,5,6,10,14],choos:2,cid:[0,2,3,14],circ:7,circuit:[0,2,3,7,9,10,12,15,16],circuit_manag:[7,16],circuit_st:[10,16],circuitst:0,class_nam:[0,3],claus:4,clean:[2,12],cleanup:12,clear:[0,2,4,15,16],clear_callback:10,clearchannelrequest:[0,2,3],clearchannelrespons:[0,2],clearchannelresposn:0,clever:4,cli:[12,14],click:0,client:[0,4,5,6,7,11,12,14],client_address:[0,3,14],client_nam:[0,2,16],clientchannel:[0,2],clientnamerequest:[0,2,3,14],clog:2,clone:5,close:[0,12,16],code:[0,2,3,4,6,7,8,10,11,12,13,14,15,16],code_with_sever:[0,2,3,6,14,15,16],collabor:6,collect:[12,15,16],collis:12,color:[3,7,14],color_log:12,com:[0,5],combin:[3,5],come:[2,10,15,16],command:[2,4,5,6,7,12,14,15,16],commandlin:[6,7,12],common:[7,8,12,15],commonli:5,commun:[0,2,4,12],compani:4,companion:0,comparison:2,compat:[3,4,7],competit:10,compil:12,complet:[0,2,3,5,6,7,9,10,12,14,15,16],complianc:4,compliant:6,complic:15,compon:[12,16],compos:[2,6],compound:0,comprehens:[3,10],compressfield:8,comput:[5,6],concept:[2,6,11],conceptu:1,concurr:[4,9,12,13,15,16],conda:[4,5],condens:2,condit:12,configur:[2,6,7,9,12,16],confirm:[0,3,12,15,16],conflat:12,confusingli:6,congest:0,connect:[0,2,3,6,7,9,10,12],connection_callback:12,connection_state_callback:16,consequ:14,consist:[0,4,10,12],constant:4,construct:[15,16],consum:14,contain:[3,6,12,14],context:[6,7,10,12,15,16],context_default_timeout:16,contigu:[4,15,16],continu:[12,16],contribut:3,contributor:10,control:[0,2,3,4,5,7,9,10,13,15,16],conveni:[0,2,4,5,6,7,12,15,16],convention:2,convert:0,cooper:4,copi:[2,4,15,16],core:[4,12],correct:12,correctli:9,correspond:0,cost:4,costli:[15,16],could:[2,6,9,12],count:[0,2,4,15,16],counterpart:[3,12],coupl:[6,16],cours:[4,6,7],cover:6,coverag:9,creat:[0,5,6,12,15,16],create_chan_respons:2,create_connect:2,create_fail:0,createchanrequest:[0,2,3,14],createchanrespons:[0,2,3,12,14],createchfailrespons:[0,12],creation:[0,16],critic:12,ctrl:[3,6,12,15],ctrl_char:0,ctrl_doubl:[0,3],ctrl_enum:0,ctrl_float:0,ctrl_int:0,ctrl_long:0,ctrl_string:0,ctx:[6,7,16],ctype:[0,4,15,16],curio:[1,5,6,12,13],current:[0,2,3,12,15,16],current_raw_valu:6,custom:[3,12],custom_writ:6,customwrit:6,daemon:[3,6],dallan:[3,14],daniel:3,data:[2,3,4,6,9,12,14,15,16],data_count:[0,2,3,6,12,14,15,16],data_typ:[0,2,3,6,14,15,16],databas:[0,8],datagram:[0,2,3,10,12],date:[3,7],datefmt:7,david:11,davidsav:[11,12],dbe:9,dbe_alarm:[0,12],dbe_properti:0,dbe_valu:[0,12],dbnd:9,dbr:[0,9],dbr_ctrl_float:3,dbr_time_doubl:0,dead:16,deadlock:12,debug:[3,4,6,7,12,15],decim:3,declar:12,declin:16,decod:14,decompos:6,decor:6,decreas:16,dedent:6,deem:12,def:[2,6,10,15,16],default_prefix:6,default_protocol_vers:0,defens:4,defin:[6,10,12,15,16],defunct:[0,2,3,6,14,15,16],delimit:3,demo:[2,3,10,15,16],demonstr:[2,4,6,16],depend:[4,5,6,12],deprec:[0,9,15,16],depth:[11,14],dequ:2,desc:6,describ:[0,15],descript:[0,2,3,6,14,15,16],descriptor:[6,12],design:[0,1,2,4,6,10,15],desir:0,detail:[0,2,4,6,12,16],detect:3,detector:[6,12],determin:2,determinist:16,develop:[1,4,6,11,13],devic:[4,5,6,12,16],dfanoutfield:8,dict:6,dictionari:16,did:[2,12],differ:[2,4,10,12,13],differenti:12,digit:3,digitelfield:8,direct:0,directli:[0,2,4,5,13,15,16],directori:6,disa:6,discard:16,disconnect:[0,12,16],discuss:12,disp:6,displai:[3,6,12,16],diss:6,distinct:12,distribut:4,disv:6,doc:5,docstr:16,document:[4,5,10,11,12,13],doe:[0,2,3,9,12,14,16],doesn:2,dog:15,doing:[0,2,3],don:[2,6],done:[2,6],dot:[3,14,15,16],doubl:[0,2,3,6,12,15,16],doucment:10,down:6,dpkt:14,dport:14,driver:6,drop:[3,4,10],drown:[9,12],dst:14,dtyp:6,dtype:[0,6],durat:[3,15],dure:[12,16],dynam:12,each:[0,2,3,6,12,14,15,16],easi:[2,4,6,7,8],easier:[2,3,6],easili:5,eca_newconn:0,eca_norm:[2,3,6,14,15,16],echo:[0,6,12,16],echorequest:0,echorespons:0,effect:[3,12,16],effici:[4,9,10,12,15,16],effort:[4,12],effortlessli:4,egu:6,eguf:6,egul:6,either:[2,12,16],element:[0,2],elid:10,els:[6,14],embodi:4,emploi:4,empti:12,en10mb:14,enabl:[12,14],encapsul:[0,2,6,10,15,16],encapul:0,encod:[0,2,4,6,7],end:[0,2],endian:2,enforc:[9,12],engin:[4,5,6],ensur:[2,12],entir:[10,12],entri:[4,6],enumer:0,env:6,environ:[0,2,3,5,6,9,12,16],eoff:6,epic:[0,2,3,4,5,6,8,9,10,11,12,15,16],epics_bas:5,epics_ca:9,epics_ca_addr_list:2,epics_ca_auto_addr_list:2,epics_ca_conn_tmo:16,epics_ca_repeater_port:3,epidfield:8,equival:[0,2,16],era:4,err:5,erron:12,error:[0,12],error_messag:0,errorrespons:[0,15],escap:[3,15],eslo:6,especi:12,establish:[4,10],etc:[2,4,5,12,14,16],ethernet:14,evan:11,even:[3,4],event:[0,3,6,7,12,15],eventaddrequest:[0,2,16],eventaddrespons:[0,2,12],eventcancelrequest:[0,2],eventcancelrespons:[0,12],eventfield:8,events_off:16,events_on:16,eventsoff:[9,12],eventsoffrequest:0,eventson:[9,12],eventsonrequest:0,ever:10,everi:[0,2,4,6,9,10],evnt:6,exactli:0,exampl:[0,2,3,4,5,7,8,10,12,14,15,16],exce:16,except:[4,6,12],exchang:16,exe:14,exec:5,execut:[3,5,12,16],exercis:[4,10],exist:[2,4,6,10,12,16],exit:[2,3,6,12,14,16],expand:[0,12],expect:[0,2,5,12,15,16],experi:[2,12],experiment:[1,4,12,13],explicitli:[12,16],explor:[1,4,6],expos:[6,7,12],express:5,extend:[6,12],extern:14,extra:[6,12,14],extract:14,extract_address:2,extrem:[3,5],f_getfl:6,f_setfl:6,facil:4,facilit:2,fact:14,factor:12,fail:[0,12,16],failur:[0,12,15],fairli:12,fall:[5,16],fals:[0,2,3,6,7,12,14,15,16],fan:[15,16],fanoutfield:8,faq:6,fashion:7,fast:[4,12],faster:16,favor:12,fcntl:6,featur:[1,9,14],field:[0,3,6,8,12,15,16],field_spec:6,file:[7,12,14,16],filenam:[6,7],fileno:6,fill:[0,2,6],filter:[5,9,12],find:5,fine:2,finish:[12,16],first:[0,2,4,5,12,15,16],fixed_random:6,flat:6,flavor:2,flnk:6,flow:9,follow:[2,3,6,12,14,16],forc:16,force_int_enum:15,forev:[6,12,15,16],fork:12,form:14,format:[7,12,14],formerli:12,formul:16,formula:11,found:[2,3,16],four:15,framework:[1,4,7],frequenc:16,fresh:[0,2,12,15,16],friendli:[4,6,10,15,16],from:[0,2,3,4,5,7,8,9,10,12,14,15,16],full:[10,15],fulli:[0,12,16],fun:4,func:[15,16],functool:16,fund:4,futur:[1,6,12,15,16],g10:3,gain:12,garbag:[15,16],gener:[0,2,3,6,8,12,14,15,16],gensubfield:8,get:[5,6,7,9,10,12,15,16],get_address_list:2,get_cached_search_result:16,get_pv:[6,10,16],get_random:6,get_with_metadata:12,gethostnam:16,getlogg:[6,7,16],getpass:[0,16],getter:6,getus:[0,16],git:5,github:[5,9,12],give:[0,2,5,10,12],given:[0,2,6,7,9,12,16],go_idl:16,goal:[3,13],going:2,gone:9,got:16,gr_char:0,gr_doubl:0,gr_enum:0,gr_float:0,gr_int:0,gr_long:0,gr_string:0,grab:6,graphic:[0,3,15,16],greater:[12,16],group1:6,group2:6,group3:6,group3_prefix:6,group4:6,group:6,guarante:[15,16],guid:11,h11:[4,11],had:[12,14,16],hand:[10,16],handi:[4,7,14,16],handl:[0,2,4,6,11,12,16],handler:[4,12],handshak:[12,16],happen:12,hard:[0,12],hardwar:[4,6],has:[0,2,3,4,6,7,9,10,12,15,16],have:[1,2,3,4,5,6,9,12,14,15,16],header:[0,15,16],health:12,healthcheck:12,healthi:16,heard:16,heartbeat:[0,2],heavi:10,heavili:[1,12],heel:12,help:[2,3,6,12,14],here:[0,2,6,7,13,16],hex:[2,3],hhsv:6,high:[0,2,6,9,12,15,16],higher:[2,3,12],highest:[0,3,15,16],highli:12,hihi:[6,12],histogramfield:8,histori:4,hobbi:4,hold:[15,16],homebrew:[4,5,11],honor:3,hopr:6,host:[0,2],host_nam:[0,2,16],hostnamerequest:[0,2,3,14],hour:3,how:[2,4,7,9,12,15,16],howev:[1,6,14],hsv:6,html:5,http:5,human:[4,6,15,16],hurrai:2,hyst:6,iOS:4,icanon:6,idempot:15,ident:12,identif:0,identifi:[0,12],idl:[0,10],ifi:6,ignor:[2,9,12,16],illeg:[0,2],imagin:6,immedi:[12,15,16],implement:[0,1,2,3,4,5,6,8,9,10,12,13,14,15,16],impli:3,implicitli:[6,16],incident:2,inclu:12,includ:[0,2,3,4,5,6,7,9,10,12,13,14,16],incom:[2,15],increas:[12,16],increment:0,inde:15,indefinit:[3,15],independ:2,index:2,indic:[0,12],indispens:4,individu:[0,2,16],industri:4,ineffici:15,infer:15,info:[0,3,7],inform:[5,7,12,14,16],inherit:[0,16],init:6,initi:[0,2,4,6,12,15,16],inline_styl:6,inlinestyleioc:6,inp:6,input:[0,4,13,15],insensit:3,insid:0,inspir:4,instal:[2,3,4,12,14],instanc:[0,6,7,16],instanti:[0,2,6,16],instead:[0,4,10,12,15,16],int32:6,integ:[0,2,3,6,12,15,16],integr:12,intend:[3,4,6,10,12,15,16],interact:[0,6,13,15],interest:[1,2,4,6,11,13],interfac:[2,6,7,9,12,14,15],intermedi:[5,15,16],intern:[0,2,15,16],interpret:[2,3,4,12],interrupt:[12,15],interv:[12,16],introduc:12,introspect:4,invalid:6,invoc:[3,7],invok:6,involv:3,io_interrupt:6,ioc:[2,3,4,5,8,10,12,13,15,16],ioc_arg_pars:6,ioc_exampl:[2,3,4,5,6,7,10,15,16],ioc_opt:6,ioerror:6,ioid:[0,2,3,6,12,14,15,16],iointerruptioc:6,ipad:5,iphon:5,irrelev:12,isatti:6,isn:3,issu:[1,3,9,12,16],item:[6,14],iter:[0,4,6,12,15,16],its:[0,2,3,4,5,6,7,9,12,15,16],itself:[2,4,14],job:[2,12],johnson:11,join:12,json:6,juggl:2,just:[2,4,6,10,12,15,16],kah:4,keep:[0,4],kei:[0,6],ken:11,kenneth:11,keyboard:6,keyerror:[0,16],keypress:6,keystrok:6,keyword:15,kill:12,kind:4,klauer:5,know:[6,16],known:[1,12,16],kwarg:[6,10],label:3,laboratori:4,lack:[1,12],lalm:6,lambda:[15,16],larg:[4,10,16],last:16,late:16,latenc:[9,12],later:[15,16],latin:0,lauer:11,launch:[5,6],layer:[0,4,12,14],layout:8,lbrk:6,lcnt:6,lead:10,leak:12,learn:4,least:[1,2,15,16],left:16,len:[14,15,16],length:[0,3,12],less:12,let:[0,2,3,6,15,16],level:[0,2,10,12,13,15,16],leverag:10,lib:[5,6],libca:10,librari:[2,6,13,14],licens:4,lifetim:16,lightweight:5,like:[0,2,3,6,12,14,15,16],likewis:12,limit:[0,12,16],line:[5,6,15,16],link:[8,14],linr:6,linux:4,list:[0,2,3,4,6,7,12,14,15,16],listen:[2,3,6,14],littl:[9,12],llsv:6,load:[0,7,9,12,15,16],local:3,localhost:2,localprotocolerror:[0,2],locat:2,lock:12,log:[0,3,4,6,10,12,16],logger:[0,4,6,12],logger_nam:7,lolo:[6,12],longinfield:8,longoutfield:8,look:[0,2,6],loop:[6,14],lopr:6,lost:0,low:[0,2,6,9,12,13,15,16],lower:10,lower_alarm_limit:[3,6],lower_ctrl_limit:[3,6],lower_disp_limit:3,lower_warning_limit:[3,6],lowest:[0,3,15,16],lsv:6,lyric:2,macbook:3,machin:[2,4,6],macroifiednam:6,made:[12,16],mai:[0,2,4,6,9,10,11,12,15,16],main:[6,10],maintain:[0,4],make:[2,3,5,6,7,8,10,12,14,15,16],maker:4,manag:[0,16],mani:[4,5,6,7,9,12,15,16],manual:[2,5,7,12,16],map:16,mask:[0,2,3,9,12,15,16],match:[0,2,5,12,15,16],matplotlib:14,matrix:[2,11],matter:16,max:12,max_length:6,max_work:[12,16],maxim:[7,16],maximum:[3,12],mbbidirectfield:8,mbbifield:8,mbbodirectfield:8,mbbofield:8,mdel:6,mean:[0,2,5],mechan:9,medium:12,meet:4,member:16,memori:[4,15,16],memoryview:2,mere:[15,16],messag:[0,2,3,4,6,7,9,12,14,15,16],messagehead:[0,15,16],metadata:[0,2,3,6,12,14,15,16],meth:16,method:[0,2,4,5,6,7,12,15,16],metric:7,michael:[11,12],microsecond:[7,12],middl:15,might:[2,15],millisecond:12,mini_beamlin:12,minim:[4,14,16],minor:12,minut:3,mirror:6,miss:[12,16],mit:4,mix:6,mixtur:16,mlst:6,mock:[4,12],mock_record:6,mocking_record:6,mode:[3,5,7],model:4,modifi:6,modul:[1,5,7,10,16],monitor:[6,9,12],more:[0,2,3,4,5,7,9,10,14,15,16],most:[1,4,9,12,16],motorfield:[8,12],motorsim:[5,11],move:3,much:[2,7,12,16],multipl:[2,3,4,9,12,15,16],must:[0,2,6,12,15,16],must_clos:0,my_beamlin:6,my_custom_prefix:6,my_func:16,my_writ:6,mypvgroup:6,mysubgroup:6,name:[0,2,3,4,5,10,12,14,15,16],namespac:14,narrow:7,nativ:[0,2,3,6,15,16],native_data_count:[0,15],native_data_typ:0,natur:[14,16],navig:5,ndarrai:[0,2,4,15,16],necessari:[2,4,5,16],need:[0,2,3,4,12,13,14,15,16],need_data:0,neg:0,neo:2,nerd:4,nest:6,netifac:[5,12],network:[0,2,4,5,9,10,11,12,14,16],never:[12,16],new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,new_value_callback:6,newattr:6,next:[2,3,6,12,15,16],nice:6,no_alarm:3,no_repli:0,non:[7,12,16],none:[0,2,3,6,14,15,16],normal:[2,3,6,14,15,16],note:[0,6,10,15,16],notfoundrespons:0,noth:14,notic:[0,2,9,12,15,16],notif:[0,3,15],notifc:0,notifi:[0,3,6,12,15,16],notion:15,now:[2,3,4,6,10,12,15,16],nsev:6,nsl:5,nsta:6,num_bytes_need:0,number:[0,3,4,5,6,7,10,12,14,15,16],numer:3,numpi:[0,2,4,5,12,15,16],o_nonblock:6,obei:2,object:[2,4,6,7,10,12,14,15,16],observ:[6,12],obtain:[0,3],obviou:0,obvious:15,occasion:10,occur:[12,16],octal:3,off:[0,6,7,9,12,14],ofs:3,old:[2,3,9],older:12,oldflag:6,oldterm:6,omit:12,onc:[2,15,16],one:[0,2,3,4,6,7,9,10,12,14,15,16],ones:[2,12,16],onli:[0,3,4,5,6,12,15,16],onto:[15,16],opaqu:0,open:[0,2,5,6,14],oper:[12,15,16],ophyd:12,oppos:10,opt:14,optim:15,option:[0,2,4,5,6,11,12,14,15,16],oraw:6,order:[0,15,16],ordereddict:6,organ:4,origin:[0,1],original_request:0,osx:[4,11],other:[2,4,5,6,7,9,12,15,16],our:[0,2,3,4,6,14],our_rol:[0,2],out:[0,2,6,7,9,10,12,13,14,15,16],outgo:2,output:[0,2,4,12,13,14],outsid:[6,16],over:[0,2,4,7,15,16],overal:[12,16],overflow:11,overhead:12,overload:2,overridden:16,overriden:16,overs:12,owes:4,own:[4,9,16],pack:0,packag:[3,4,5],packet:[0,10,12],pact:6,pad:[0,3],pai:4,paramet:[0,2,6,7,12,15,16],parameter1:[0,15,16],parameter2:[0,15,16],paramt:7,parent:6,pariti:[1,9,12],pars:[0,2,3,4,11,12],part:[0,7,16],partial:16,particl:4,particular:[2,3,13,15,16],pass:[0,2,5,6,12,15,16],path:[3,6],pathlib:6,pattern:[2,4,5],payload:[2,4,12],payload_s:[0,15,16],pcap:[4,12],peer:[0,2],per:[0,5,6,9,12,16],perform:[4,7,9,15,16],period:[3,6,15,16],permiss:2,permissivefield:8,persist:16,pha:6,physic:4,pick:6,pickl:12,pini:6,pip:[4,14],pipe:14,pitfal:16,place:[3,12],placeholder1:6,placeholder2:6,plai:[0,2,5],platform:[2,6],plot:14,plugin:[11,14],point:[3,4,6,12,15,16],poke:1,polic:2,pop:14,popul:16,port:[0,2,3,9,14,15,16],portabl:[4,10],posit:[3,15,16],possibl:[3,6,9,12,16],post:11,pprint:6,prec:6,precis:[3,6],prefix:[6,8],present:7,press:6,pretti:14,prevent:12,previou:[2,7,12],previous:[6,12],primarili:[12,16],principl:4,print:[3,6,7,10,12,14,15,16],prio:6,prior:16,priorit:[0,9,12],prioriti:[0,2,3,7,9,10,14,15,16],proc:6,process:[0,2,3,6,10,12,15,16],process_command:[0,2],processs:16,produc:[14,16],program:[4,11,14],programmat:4,progress:[12,16],project:[4,11],prolif:[9,12],promis:12,promptli:[15,16],pronounc:4,propag:[6,7],properli:[2,12,16],properti:3,protcol:11,protect:12,proto:4,protocol:[0,2,6,11,16],protocol_vers:0,protocolerror:0,provid:[0,2,3,6,10,12,14,15,16],pull:10,purchas:5,pure:2,purpos:3,put:[4,6,9,10,12,15,16],put_ack:3,put_ackt:3,putf:6,putter:6,pv_name:[3,6,10,15],pva:6,pvdb:6,pvfunction:6,pvgroup:6,pvproperti:[6,12],pvpropertyinteg:6,pvpropertyintegerro:6,pvpropertystringro:6,pvs:[3,4,6,10,16],pvspec:6,pyepic:[4,7,11],pyepics_compat:10,pytest:5,python3:[2,3,4,5,6,7,10,15,16],python:[0,3,5,7,8,9,10,11,12,13,14,15,16],pythonista:5,queri:[0,3],queu:[9,12],queue:[0,6,12],quick:2,quickli:12,quiet:3,quota:[9,12],race:12,rais:[0,2,6,12,16],randint:6,random:12,random_int:6,random_str:6,random_walk:[2,3,6,7,10,15,16],randomwalkioc:6,randstr:6,rang:2,rapid:12,rare:[2,12,16],raspberrypi:4,rate:[6,9,12],rather:[0,5,6,10,16],rational:4,raw:[2,15,16],rbv:6,reactiv:[15,16],read:[0,3,4,7,12,14],read_data_typ:15,read_from_bytestream:0,read_write_read:15,readabl:6,readi:[0,4],readnotifyrequest:[0,2,3,14,15,16],readnotifyrespons:[0,2,3,6,14,15,16],readrequest:[0,15,16],readrespons:[0,9,15],readsyncrequest:0,reagan:4,realli:2,rebroadcast:2,recal:[2,7,15],receipt:[0,15,16],receiv:[0,2,3,4,6,7,10,12,15,16],recent:[12,16],recommend:[10,12],reconnect:[9,12,16],record:[0,4,12],record_like1:6,record_typ:6,recordfieldgroup:8,recordlik:6,recordlike1:6,recordlike2:6,recordmockingioc:6,recv:[0,2,16],recv_address:2,recvfrom:2,redo:16,reduc:[12,16],redund:12,redundantli:15,refer:[0,3,4,5,6,8,9,12,13,14,15,16],reflect:[12,15],regist:[0,3,6,15,16],registr:0,registration_retry_tim:16,registri:[15,16],regular:[12,16],reissu:16,relat:[3,4,12,14,15,16],releas:[1,4],reli:[4,5,6,12],reliabl:[4,12],remot:0,remoteprotocolerror:[0,2],remov:[7,12,15,16],remove_callback:[15,16],repeat:[0,15],repeatedli:16,repeater_address:0,repeaterconfirmrespons:0,repeaterregisterrequest:[0,2,3,14],replac:[3,4,7,10],repli:[0,7,12,14,16],report:[0,2,16],repositori:5,repr:2,repres:[0,10,16],represent:[15,16],repsons:15,req:2,request:[0,2,3,5,7,9,10,12,15],requir:[0,2,4,5,6,16],res:[15,16],resend:12,resent:12,reset:[6,16],reset_termin:6,resid:6,resolv:[0,12],resourc:[4,11,12],respect:[0,1,9,12,16],respond:[0,9,12,16],respons:[0,2,3,7,9,10,12,15,16],respres:14,rest:[10,12],restart:5,restor:0,result:[3,14,15,16],results_queu:16,resum:0,retri:16,retriev:[3,15],retval:6,reus:[2,6,12,14],reusabl:4,revers:2,revert:12,review:6,revis:[1,12],reward:4,richer:3,right:[0,2,5,12],robust:4,roff:6,role:[0,2],roll:9,root:4,round:3,rpc_function:6,rpi:14,rpro:6,rtyp:6,rule:2,run:[2,3,4,5,6,7,8,10,12,15,16],run_opt:6,run_test:5,runawai:12,runtim:12,rval:6,safe:[3,16],safeguard:12,sai:[2,4],said:4,same:[0,2,4,5,9,12,14,15,16],sampl:10,san:[2,4,11],sandwich:15,satisfi:15,save:16,saw:6,scalar:[0,3,6,12],scalcoutfield:8,scan:[6,12],scanparmfield:8,scenario:16,schedul:[9,16],scientist:[4,6],scratch:4,script:5,sdi:6,search:[0,3,7],search_now:[12,16],search_respons:2,searches_pend:[10,16],searchrequest:[0,2,3,9,12,14,16],searchrespons:[0,2,14],second:[2,3,6,12,15,16],section:[2,6,7,12,14],secur:2,see:[0,2,3,4,5,6,7,8,9,10,12,13,15,16],seen:[0,6,12],select:[15,16],select_backend:5,selector:[9,16],self:[0,6,15,16],selfield:8,semant:6,send:[0,2,3,6,9,12,15,16],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:2,sendto:2,sent:[0,2,3,4,6,7,12,16],sentinel:0,separ:[2,3,4,5,6,7,10,15,16],seqfield:8,sequenti:[0,16],serach:2,seri:3,serial:[3,6,12],serializ:12,serv:[0,2,5,6],server:[0,2,3,4,5,7,8,10,11,14,15],server_port:0,serverchannel:0,serverdisconnrespons:0,servic:[6,16],set:[2,3,4,5,6,7,12,15,16],set_handl:[7,12],setlevel:[7,16],sever:[0,2,3,4,5,6,12,14,15,16],sevr:6,share:[4,12,16],sharedbroadcast:16,shark:[4,12],shell:[2,3,5,10,15,16],shim:[10,12],ship:12,shorthand:9,shot:16,should:[0,2,3,5,12,15,16],show:[2,3,6,14],shut:6,sid:[0,2,3,14],side:[0,3,6,7,12],sigint:[12,15],signal:[6,15],signatur:[12,15,16],silenc:16,silent:[12,15,16],silo:6,sim:6,similar:[3,6,12,14],similarli:[0,6,14],siml:6,simm:6,simpl:[0,2,4,5,12],simpleioc:6,simplenamespac:14,simpli:6,simplic:15,simplifi:4,simul:6,sinc:[0,3,9,16],singl:[0,2,6,16],siol:6,site:5,situat:14,size:[12,14],skip:[5,12],sleep:[6,10],slide:11,slow:[9,12],slower:[12,16],small:[5,12],smoo:6,snip:[3,6],snippet:4,so_keepal:12,so_reuseport:12,sock:2,socket:[0,2,4,6,11,12,15,16],softioc:5,some:[0,1,2,3,4,5,6,10,12,14,15,16],some_network_traff:14,someth:[0,4],somewhat:[2,3,6],sort:0,sourc:[0,5,7,8,11,12,13,15,16],space:[2,3,16],spawn:[3,15],speak:[4,6,12],spec:[0,11,12,15],special:4,specif:[0,2,3,6,7,9,12,15,16],specifi:[0,2,3,7,10,16],speech:5,speed:10,speedup:10,spell:2,spin:6,spirit:12,spoof_beamlin:12,sport:14,src:14,sscanfield:8,sseqfield:8,stabl:12,stack:[10,11],stackoverflow:6,stai:16,stale:16,stand:12,standard:[3,4,5,6,7,14,15,16],star:4,start:[0,2,3,4,5,6,10,12,14,15,16],start_io_interrupt_monitor:6,startup:[3,6,12],stash:[2,5,12,16],stash_result:16,stat:6,state:[2,4,7,10,12,15,16],statefield:8,statu:[0,2,3,6,12,14,15,16],stdin:6,stdout:[5,7,12],steadi:12,steer:4,step:[2,6,10],still:[1,2,3,7,12,13,16],stipul:15,stop:[6,15],store:[5,6,12,15,16],stori:2,str:[6,7,15,16],straightforward:12,strateg:4,strategi:4,stream:14,streamhandl:7,string:[0,3,6,7,14,15,16],string_encod:0,stringinfield:8,stringoutfield:8,struct:0,structur:[0,4,6,15,16],sts_char:0,sts_doubl:0,sts_enum:0,sts_float:0,sts_int:0,sts_long:0,sts_string:0,stsack_str:[0,3],stuck:16,sub1:15,sub2:15,sub:[15,16],sub_dt:15,sub_x:15,subarrayfield:8,subfield:8,subgroup4:6,subject:13,subpackag:6,subscrib:[0,3,6,10],subscript:[0,2,9,10,12,15,16],subscriptionid:[0,2],subscriptiontyp:[0,12,15,16],subsequ:16,substitut:6,subtl:12,success:[0,2,3,6,12,14,15,16],successfulli:15,succinct:[2,4],succinctli:2,sudo:14,suffici:[14,15],suggest:[12,16],suit:[4,10,12],suitabl:4,sum:14,summari:9,superset:3,support:[0,2,3,4,5,7,10,15,16],suppos:16,suppress:3,supsens:16,sure:6,surpris:[15,16],suspend:16,suspens:9,sustain:12,sval:6,swaitfield:8,sync:[9,14,15],synchron:[2,4,5,12],synchrotron:4,syntax:[9,16],sys:[6,7],system:[0,2,4,12],tab:3,tablefield:8,take:[0,6,9,12,15],talk:[2,3,10,11,15,16],tap:5,target:6,task:[6,9,12],tcgetattr:6,tcp:[0,2,7,10,12,14,16],tcp_nodelai:12,tcpdump:[4,12],tcsaflush:6,tcsanow:6,tcsetattr:6,tech:11,telescop:4,tell:[0,6],temp:6,temp_path:6,temporari:9,temporarili:[0,16],term:[0,2,4],termin:[3,4,6],termio:6,ters:3,test:[0,4,5,9,10,12],text:5,textiowrapp:7,textwrap:6,than:[6,10,12,15,16],thank:6,thei:[0,1,3,4,5,6,12,15,16],them:[0,1,2,6,10,15,16],therebi:12,therefor:[15,16],thi:[0,2,3,4,5,6,7,9,11,12,14,15,16],thing:[2,6,14],think:[0,16],thoroughli:12,those:[2,4,6,16],though:14,thread:[1,4,5,6,7,10,12,15],threader:16,threadpool:12,threadsafequeu:6,three:[3,6,12,13,15],threshold:16,through:[0,5,12,14],throughput:12,thu:[12,16],time:[0,2,3,4,6,7,10,14,15,16],time_char:0,time_doubl:0,time_enum:0,time_float:0,time_int:0,time_long:0,time_since_last_heard:16,time_str:0,timedelta:3,timeout:[3,12,15,16],timestamp:[3,14],timestampfield:8,tmp:[6,7],todo:[6,7],togeth:[0,2],token:[3,14,15,16],too:[2,7,12],tool:[4,6],toolkit:4,top:[10,15],total:12,touch:16,toward:6,tpro:6,track:[0,2,12,16],tracker:9,trade:[9,12],traffic:[2,11,12,14,16],transact:0,transformfield:8,translat:2,transmiss:12,transmit:[0,2],transpar:16,transport:[2,4,14,16],tri:0,triag:[15,16],trick:4,trigger:6,trio:[1,5,6,12,13],tse:6,tsel:6,tty:6,tune:11,tupl:[0,2,15],turn:[0,7,16],tutori:4,twice:[12,16],twist:11,two:[0,2,6,10,12,16],txt:[5,7],type:[2,3,4,6,9,12,14,15,16],typic:[2,12],typo:[12,16],udf:6,udp:[0,2,7,10,12,14,16],udp_sock:2,uint8:6,ulen:14,unansw:[9,12,16],uncoupl:6,under:[0,4,7,9,12,15,16],underli:[10,12,15,16],understand:[4,6],uniqu:[0,2,16],unit:[3,4,6,12],unless:[2,5,15,16],unlik:16,unlimit:[0,3,16],unnecessari:12,unpack:3,unrespons:12,unset:16,unsubscrib:[0,2],unsubscribe_al:16,until:[2,16],unus:[0,12,16],unwant:16,updat:[0,3,6,7,9,15,16],upgrad:[12,15],upon:16,upper_alarm_limit:[3,6,12],upper_ctrl_limit:[3,6],upper_disp_limit:3,upper_warning_limit:[3,6,12],usag:[3,6,8,10,12,14],use:[0,2,3,4,5,6,7,10,12,15,16],used:[0,2,3,4,6,7,12,14,15,16],useful:[0,4,5,6,11,15,16],user:[0,2,4,6,7,10,12,15,16],user_offset:12,uses:[0,7,14,15,16],using:[0,1,2,3,4,5,6,9,10,11,12,14,15,16],usr:6,usual:[6,7],utf:7,util:[2,3,12,15],val:6,valid:[0,2,16],valu:[0,3,4,6,10,12,15,16],valuabl:6,valueerror:[6,16],variabl:[0,2,3,5,9,16],variant:3,variou:[0,4,16],vector:6,verbos:[3,4,5,7,10,12,16],veri:[1,12,15],verifi:[2,4,5],version:[0,2,3,4,5,9,12,14],version_respons:2,versionrequest:[0,2,3,14],versionrespons:[0,2,3,14],vestigi:3,via:[2,3,5,6,7,12,16],view:[0,3,6,15,16],violat:0,virtual:[0,2,3,15,16],virtualcircuit:[2,4,16],virtualcircuitmanag:16,virtualciruit:0,visual:3,vmefield:8,vsfield:8,vvv:[3,7,12],wai:[0,2,6,7,12,15,16],wait:[3,6,12,15,16],wait_for_connect:16,wait_for_search:16,want:[2,4,5,10,15,16],war:4,warn:[3,12,16],wast:12,watch:2,waveform:12,waveformfield:8,weak:[15,16],web:6,welcom:3,well:[0,4,5,10,15],were:[4,11,12,15,16],what:[0,2,4,6,15],what_is_happen:7,when:[0,2,4,7,9,12,15,16],whenev:[6,12,15,16],where:[6,7,12,14,16],wherea:[6,10],wherein:12,whether:0,which:[0,2,3,4,6,7,12,14,15,16],whichev:[3,6],whistl:6,who:[4,6,12,14],whose:16,why:[2,4,10],wide:3,wifi:5,wild:12,win32:6,window:[4,12],windump:14,wire:[2,4],wireshark:[4,11],wish:15,within:[12,16],without:16,wlp59s0:14,word:[2,4],work:[0,2,5,6,9,12,15,16],worker:16,world:[4,6],worthwhil:9,would:[4,10,15],wrap:4,wrapper:10,writabl:6,write:[0,3,4,7,12,13,14],write_data_typ:15,write_respons:15,writenotifyrequest:[0,2],writenotifyrespons:[0,2,6,15,16],writerequest:0,written:[10,15],wrong:12,wrongli:12,wrote:6,x00:[2,14,15,16],x00random_walk:2,x01:[2,15,16],x05:[2,14],x06:[2,14,15,16],x08:[15,16],x0f:[15,16],x10:[2,14],x11:2,x15:14,x18:2,x7f:2,x_pv:10,xa8v:14,xc0:14,xdb:14,xdbrpi:14,xe0:14,xf0:16,xf2k:14,xf31id:6,xfd:14,xff:14,yes:2,yet:[0,3,12,13,15,16],you:[0,2,4,5,6,7,10,11,15],your:[0,3,4,5,13,16],zero:[4,12,16]},titles:["Core API Documentation","Asynchronous Clients","Writing Your Own Channel Access Client","Command-Line Client","caproto: a pure-Python Channel Access protocol library","Install Caproto","Input-Output Controllers (IOCs)","Loggers","Mock Records","Details of our Protocol Compliance for CA Nerds","Pyepics-Compatible Client","References","Release History","Servers","Shark (pcap/tcpdump parsing)","Synchronous Client","Threading Client"],titleterms:{"break":12,"function":6,"try":4,Not:4,The:0,Use:4,Useful:7,Using:[5,6],access:[2,4],acknowledg:4,alarm:12,api:[0,3,15,16],asynchron:1,basic:2,batch:16,big:4,bookkeep:2,broadcast:0,bug:12,cancel:16,caproto:[3,4,5,6,14],chang:12,channel:[0,2,4],check:16,client:[1,2,3,9,10,15,16],close:2,command:[0,3,9],compat:[10,12],complianc:[9,12],connect:[15,16],constant:0,content:[0,4],control:[6,12],core:[0,9],creat:2,custom:6,data:0,debug:16,demonstr:10,deprec:12,detail:9,develop:5,document:[0,3,15,16],event:[2,16],exampl:6,except:0,featur:12,file:6,fix:12,format:3,four:4,from:6,get:3,handl:15,handler:7,health:16,histori:12,iOS:5,idl:16,improv:12,inlin:6,input:6,instal:5,intern:12,interrupt:6,ioc:6,just:14,librari:4,line:[3,4,9],log:7,logger:[7,16],machin:0,macro:6,minim:5,mock:[6,8],monitor:[3,15,16],more:[6,12],name:[6,7],nerd:9,object:0,off:16,option:3,our:9,output:[3,6],over:12,own:2,pars:14,payload:0,pcap:14,perform:12,pip:5,protocol:[4,9,12],pure:4,put:3,pyepic:[10,12],python:[4,6],random:6,read:[2,6,15,16],reason:4,record:[6,8],refer:11,regist:2,releas:12,repeat:[2,3],request:16,rpc:6,search:[2,12,16],server:[6,9,12,13,16],shark:14,simpl:6,simplifi:2,snippet:7,special:0,state:0,stateless:15,statist:4,style:6,subgroup:6,subscrib:[2,15,16],support:[9,12],synchron:[9,15],tcpdump:14,thi:10,thread:[9,16],tune:12,tutori:[3,15,16],type:0,updat:[2,12],usabl:12,use:14,valu:2,virtualcircuit:0,vital:4,walk:6,what:10,when:6,why:[6,14],window:14,wireshark:14,write:[2,6,15,16],written:6,your:2}})