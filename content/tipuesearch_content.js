var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'Table Football motion simulation system \n 協同產品設計實習第一組 \n Github \n Blog \n Reveal \n ★Leader： \n 40623203 蔡宜芳 \n ★Member： \n 40623206\xa0 邱妍蓁\xa0   \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0   40623228\xa0 陳永錩 \n 40623211\xa0 王得榮  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0   40623233\xa0 謝宗宏 \n 40623212\xa0 魏有泉  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  40623240\xa0 何冠均 \n 40623216\xa0 楊士平  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  40623245\xa0 練峪愷 \n 40623221\xa0 蔡和勳 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40623222\xa0 蔡博淮 \n \n ★Assignments\xa0 : \n ⦿Onshape: \n 40623206\xa0 邱妍蓁\xa0 、 40623240\xa0 何冠均 \n ⦿V-rep\xa0simulation: \n 40623203 蔡宜芳\xa0 、 \xa040623228\xa0 陳永錩、 40623233\xa0 謝宗宏 \n ⦿Website\xa0maintain: \n \xa040623245\xa0 練峪愷、 \xa040623222\xa0 蔡博淮 \n ⦿Blog: \n 40623221\xa0 蔡和勳、 \xa040623216\xa0 楊士平\xa0 \n ⦿Slideshow: \n 40623212\xa0 魏有泉、 40623211\xa0 王得榮 \n ⦿Report: \n 40623211\xa0 王得榮 \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Directory Structure', 'text': '\n 第二位想要編輯這裡 \n \n CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n 還有這裡 \n 首先修改這裡 \n', 'tags': '', 'url': 'Directory Structure.html'}, {'title': 'Onshape', 'text': '', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Process', 'text': '一開始用Inventor畫草圖，設計出大概的樣子。 \n \n 組合出大概的樣子。 \n \n 在詢問老師後才知道底板規格是固定的，不能更改，所以直接用Onshape重新畫一個新的。 \n \n \n 組合的過程，因不想一直做重複的事情，所以用次組合。 \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Process.html'}, {'title': 'Complete', 'text': 'Table Football \n \n \n \n \n', 'tags': '', 'url': 'Complete.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'Tutorial', 'text': 'BubbleRob \n \n', 'tags': '', 'url': 'Tutorial.html'}, {'title': 'BubbleRob', 'text': "A.\xa0Add a primitive sphere \n 1.\xa0Add a primitive sphere to the scene with [Menu bar --> Add --> Primitive shape --> Sphere] \n \n 2.\xa0Diameter 0.2,\xa0adjust the X-size item to 0.2, then click OK.\xa0 \n \n 3. Enable Collidable, Measurable, Renderable and Detectable in the object common properties for that shape. \n \n 4. Click the sphere representing BubbleRob's body. \n 5. Click translation tab and enter 0.02 for Along Z. \n 6. Click Translate selection so that all selected objects by 2 cm along the absolute Z-axis. \n \n 7.\xa0Double-click the sphere's name, edit and enter bubbleRob and press enter. \n B. Add a proximity sensor \n 1. Select [Menu bar --> Add --> Proximity sensor --> Cone type] \n \n 2.\xa0 In the orientation dialog on the orientation tab, we enter 90 for Around Y and for Around Z, then click Rotate selection. \n \n 3.\xa0In the position dialog, on the position tab, we enter 0.1 for X-coord. and 0.12 for Z-coord. \n \n 4. Double-click the proximity sensor's icon in the scene hierarchy to open its properties dialog. \n 5. Click Show volume parameter to open the proximity sensor volume dialog. \n 6. Adjust items Offset to 0.005, Angle to 30 and Range to 0.15. \n \n 7. Click Show detection parameters in the proximity sensor properties, opens the proximity sensor detection parameter dialog. \n 8. Uncheck item Don't allow detections if distance smaller than then close that dialog again. \n \n 9. Double-click the proximity sensor's name, edit and enter bubbleRob_sensingNose and press enter. \n C. Attaches the sensor to the body of the robot \n 1.\xa0Select bubbleRob_sensingNose, then control-select bubbleRob \n 2.\xa0Click [Menu bar --> Edit --> Make last selected object parent] \n 1. + 2. => Can\xa0also drag bubbleRob_sensingNose onto bubbleRob in the scene hierarchy. \n \n D. Add BubbleRob's wheels \n 1.\xa0Add a pure primitive cylinder with [Menu bar --> Add --> Primitive shape --> Cylinder] \n \n 2.\xa0Dimensions (0.08,0.08,0.02) \n \n 3.\xa0Enable Collidable, Measurable, Renderable and Detectable in the object common properties for that cylinder. \n \n 4.\xa0Set the cylinder's absolute position to (0.05,0.1,0.04) \n 5.\xa0A bsolute orientation to (-90,0,0) \n 6.\xa0Change the name to\xa0 bubbleRob_leftWheel \n 7.\xa0Copy and paste the wheel \n 8.\xa0Set the absolute Y coordinate of the copy to -0.1 \n \n 9.\xa0R ename the copy to\xa0 bubbleRob_rightWheel \n E.\xa0A dd\xa0 j oints \xa0 (or motors) for the wheels \n 1.\xa0Click [Menu bar --> Add --> Joint --> Revolute] to add a revolute joint to the scene\xa0 \n \n 2.\xa0 Keep the joint selected, then control-select\xa0 bubbleRob_leftWheel \n 3.\xa0\xa0In the\xa0position dialog, on the\xa0position\xa0tab, we click the\xa0Apply to selection\xa0button: this positioned the joint at the center of the left wheel. \n \n 4.\xa0In the\xa0orientation dialog, on the\xa0orientation\xa0tab, we do the same: this oriented the joint in the same way as the left wheel. \n \n 5.\xa0Rename the joint to\xa0bubbleRob_leftMotor \n 6.\xa0Double-click the joint's icon in the scene hierarchy to open the\xa0joint properties\xa0dialog. \n 7.\xa0click\xa0Show dynamic parameters\xa0to open the\xa0joint dynamics propertiesdialog. \n 8. Enable the motor, and check item\xa0Lock motor when target velocity is zero. \n \n 9. Repeat the same procedure for the right motor and rename it to\xa0bubbleRob_rightMotor. \n \n \n \n 10. Attach the left wheel to the left motor. \n 11. Attach\xa0 the right wheel to the right motor. \n 12.\xa0Attach the two motors to\xa0bubbleRob. \n F.\xa0Add a small slider (or caster) \n 1.\xa0Add a pure primitive sphere with diameter 0.05 \n 2.\xa0E nter\xa0-0.07 for X-coord \n \n 3.\xa0Click\xa0the sphere Collidable, Measurable, Renderable and Detectable \n \n 4. Rename it to bubbleRob_slider \n 5. Set the Material to noFrictionMaterial in the shape dynamics properties \n G.\xa0Add a force sensor \n 1.\xa0 Click [Menu bar --> Add --> Joint --> Revolute] to add\xa0\xa0a force sensor \n \n 2.\xa0Rename it to bubbleRob_connection \n 3. E nter\xa0-0.07 for X-coord,\xa00.05 for Z-coord \n \n 4.\xa0Attach it to the robot body \n \n H.\xa0Avoid bubbleRob_slider and bubbleRob colliding with each other \n 1. In the shape dynamics properties, for bubbleRob_slider we set the local respondable mask to 00001111 \n \n 2.\xa0For bubbleRob, we set the local respondable mask to 11110000 \n \n I.\xa0Stability of dynamic simulations is tightly linked to masses and inertias of the involved non-static shapes. \n 1.\xa0Select the two wheels and the slider, and in the shape dynamics dialog we click three times M=M*2 (for selection) \n \n \n \n 2.\xa0All selected shapes will have their masses multiplied by 8 \n 3.\xa0Run the simulation again \n 4.\xa0In the joint dynamics dialog, we set the Target velocity to 50 for both motors. \n \n \n J.\xa0Define a collection of objects that represent BubbleRob \n 1.\xa0Click [Menu bar --> Tools --> Collections] to open the collection dialog or\xa0open the dialog by clicking the appropriate toolbar button \n \n 2.\xa0In the collection dialog, we click Add new collection. \n 3.\xa0Select bubbleRob in the scene hierarchy \n 4.\xa0Click Add in the collection dialog \n 5.\xa0Collection is now defined as containing all objects of the hierarchy tree starting at the bubbleRob object (the collection's composition is displayed in the Composing elements and attributes section) \n \n 6. To edit the collection name, we double-click it, and rename it to bubbleRob_collection.\xa0 \n K.\xa0Track the minimum distance between BubbleRob and any other object \n 1. Open the distance dialog with [Menu bar --> Tools --> Calculation module properties]\xa0or open the calculation module properties dialog with the appropriate toolbar button \n \n 2.\xa0In the distance dialog, click Add new distance object and select a distance pair: [collection] bubbleRob_collection\xa0- all other measurable objects in the scene. \n 3.\xa0Added a distance object that will measure the smallest distance between collection bubbleRob_collection (i.e. any measurable object in that collection) and any other measurable object in the scene. \n \n 4.\xa0Rename the distance object to bubbleRob_distance with a double-click in its name \n L.\xa0Add a graph \n 1.\xa0Click [Menu bar --> Add --> Graph] \n \n 2.\xa0Rename it to bubbleRob_graph \n 3.\xa0Attach the graph to bubbleRob \n 4.\xa0Set the graph's absolute coordinates to (0,0,0.005) \n \n 5.\xa0Open the graph properties dialog by double-clicking its icon in the scene hierarchy \n 6.\xa0Uncheck Display XYZ-planes \n 7.\xa0Click Add new data stream to record and select Object: absolute x-position for the Data stream type, and bubbleRob_graph for the Object / item to record \n 8.\xa0Data stream of bubbleRob_graph's absolute x-coordinate (i.e. the bubbleRobGraph's object absolute x position will be recorded).\xa0 \n 9.\xa0Record the y and z positions: we add those data streams in a similar way as above. \n 10.\xa0Click Add new data stream to record and select Distance: segment length for the Data stream type, and bubbleRob_distance for the Object / item to record \n 11.\xa0In the Data stream recording list, we now rename Data to bubbleRob_x_pos, Data0 to bubbleRob_y_pos, Data1 to bubbleRob_z_pos, and Data2 to bubbleRob_obstacle_dist. \n \n 12. Select bubbleRob_x_pos,\xa0bubbleRob_y_pos and bubbleRob_z_pos in the Data Stream recording list and in the Time graph properties section, uncheck Visible \n \n 13.\xa0Only the bubbleRob_obstacle_dist data stream will be visible in a time graph \n 14.\xa0Set-up a 3D curve that displays BubbleRob's trajectory \n 15.\xa0Click Edit 3D curves to open the XY graph and 3D curve dialog \n 16.\xa0Click Add new curve \n 17.\xa0In the dialog that pops open, we select bubbleRob_x_pos for the X-value item, bubbleRob_y_pos for the Y-value item and bubbleRob_z_pos for the Z-value item. \n \n 18. Rename the newly added curve from Curve to bubbleRob_path \n 19.\xa0Check the Relative to world item and set Curve width to 4 \n \n M.\xa0Add a pure primitive cylinder \n 1.\xa0 Add a pure primitive cylinder with [Menu bar --> Add --> Primitive shape --> Cylinder] \n \n 2.\xa0Dimensions: (0.1, 0.1, 0.2) \n 3.\xa0Click the object translation toolbar button \n \n 4.\xa0Drag any point in the scene: the cylinder will follow the movement \n 5.\xa0Copy and paste the cylinder a few times \n 6.\xa0Move them to positions around BubbleRob (it is most convenient to perform that while looking at the scene from the top) \n 7.\xa0During object shifting, holding down the shift key allows to perform smaller shift steps. Holding down the ctrl key allows to move in an orthogonal direction to the regular direction(s). \n 8.\xa0Select the camera pan toolbar button \n N.\xa0Finish BubbleRob as a model definition \n 1.\xa0Select the model base (i.e. object bubbleRob) \n 2.\xa0Check items Object is model base and Object/model can transfer or accept DNA in the object common properties: there is now a stippled bounding box that encompasses all objects in the model hierarchy. \n 3.\xa0Select the two joints, the proximity sensor and the graph, the proximity sensor and the graph \n 4.\xa0Don't show as inside model selection and click Apply to selection \n 5.\xa0The model bounding box now ignores the two joints and the proximity sensor \n 6.\xa0Disable camera visibility layer 2 \n 7.\xa0Enable camera visibility layer 10 for the two joints and the force sensor \n 8.\xa0This effectively hides the two joints and the force sensor, since layers 9-16 are disabled by default \n 9.\xa0Select the vision sensor, the two wheels, the slider, and the graph \n 10. Select base of model instead \n O.\xa0Add a vision sensor \n 1.\xa0Click [Menu bar --> Add --> Vision sensor --> Perspective type] \n \n 2.\xa0Attach the vision sensor to the proximity sensor \n 3.\xa0Set the local position and orientation of the vision sensor to (0,0,0) \n \n 4.\xa0Open its properties dialog \n 5.\xa0Set the Far clipping plane item to 1, and the Resolution x and Resolution y items to 256 and 256 \n \n 6.\xa0Open the vision sensor filter dialog by clicking Show filter dialog \n 7.\xa0Select the filter component Edge detection on work image and click Add filter \n 8. Position the newly added filter in second position (one position up, using the up button) \n \n 9.\xa0Double-click the newly added filter component and adjust its Threshold item to 0.2, then click OK \n \n P. Add a floating view to the scene, \n 1.\xa0Right-click [Popup menu --> View --> Associate view with selected vision sensor] (we make sure the vision sensor is selected during that process) \n \n \n Q. Add a small child script that will control BubbleRob's behavior \n 1.\xa0Click [Menu bar --> Add --> Associated child script --> Non threaded] \n \n 2.\xa0Opened with [Menu bar --> Tools --> Scripts] or through the appropriate toolbar button. \n \n 3.\xa0Double-click the little script icon that appeared next to bubbleRob's name in the scene hierarchy \n 4.\xa0Copy and paste following code into the script editor \n \n Finish \n", 'tags': '', 'url': 'BubbleRob.html'}, {'title': 'Table Football', 'text': '', 'tags': '', 'url': 'Table Football.html'}, {'title': 'Experience', 'text': '', 'tags': '', 'url': 'Experience.html'}, {'title': '40623203', 'text': '', 'tags': '', 'url': '40623203.html'}, {'title': 'week1 - 03', 'text': '', 'tags': '', 'url': 'week1 - 03.html'}, {'title': 'week2 - 03', 'text': '', 'tags': '', 'url': 'week2 - 03.html'}, {'title': 'week3 - 03', 'text': '', 'tags': '', 'url': 'week3 - 03.html'}, {'title': 'week4 - 03', 'text': '', 'tags': '', 'url': 'week4 - 03.html'}, {'title': 'week5 - 03', 'text': '', 'tags': '', 'url': 'week5 - 03.html'}, {'title': 'week6 - 03', 'text': '', 'tags': '', 'url': 'week6 - 03.html'}, {'title': 'week7 - 03', 'text': '', 'tags': '', 'url': 'week7 - 03.html'}, {'title': 'week8 - 03', 'text': '', 'tags': '', 'url': 'week8 - 03.html'}, {'title': 'week9 - 03', 'text': '', 'tags': '', 'url': 'week9 - 03.html'}, {'title': '40623206', 'text': '', 'tags': '', 'url': '40623206.html'}, {'title': 'week1 - 06', 'text': '用了很久的可攜式系統在這學期要自己創建，體驗如何製作一個可攜式系統，跟著老師的步驟做，一步一步的去拼湊它，才發現它需要下載很多程式，再慢慢的連結各項功能，建立出屬於自己的開發環境，使它可以幫助自己完成這學期的工作 \n', 'tags': '', 'url': 'week1 - 06.html'}, {'title': 'week2 - 06', 'text': '由於228連假，把課補到第一週上完。在第一週快下課前沒有做完的東西把它補好，以便下個禮拜能跟上老師的進度 \n', 'tags': '', 'url': 'week2 - 06.html'}, {'title': 'week3 - 06', 'text': '在這週學到如何利用程式亂數分組，在不熟的情況下如何把東西成功的展現出來，不知道自己的組員有誰，好幾次執行之後，以為這次就會確定組員，但結論是到下週才知道結果，每一次的執行都讓人覺得刺激 \n', 'tags': '', 'url': 'week3 - 06.html'}, {'title': 'week4 - 06', 'text': '經過緊張又刺激的分組後，已經確定組員，由於之前都是老師已經把網站架設好讓我們使用，這次是網站要自己弄出來，在一個空的倉儲裡如何建立網站，一開始有點不知道怎麼下手，理解之後才發現其實不難 \n', 'tags': '', 'url': 'week4 - 06.html'}, {'title': 'week5 - 06', 'text': '這週分配工作，確定每個組員要做的事情，我被分配到的工作是畫圖，由於上學期對Onshape不熟，所以先用Inventor畫出他的樣子再慢慢修改，原本因為美觀把底版加長，詢問老師之後才知道網站上的手足球平面圖是比賽規格，不能更動，所以直接用Onshape重畫一個 \n', 'tags': '', 'url': 'week5 - 06.html'}, {'title': 'week6 - 06', 'text': '在用Onshape繪製的過程中，遇到了一點問，詢問同學之後才知道，繪製零件時，如果同時擠出分開的實體，內建會自動分成多實體，最後在用Boolean的Union把所有實體合併在一起。組合每個零件時也遇到一些問題，花了一點時間去研究，摸索他的功能，才發現Onshape的組合比Inventor好用。組裝過程中，為了避免桿子在移動時，整個超出手足球的側板，我約束了他的前後移動範圍，也測試桿子會不會太短導致撞到側板，終於把手足球完成了 \n', 'tags': '', 'url': 'week6 - 06.html'}, {'title': 'week7 - 06', 'text': '', 'tags': '', 'url': 'week7 - 06.html'}, {'title': 'week8 - 06', 'text': '這週上課做了BubbleRob tutorial，因為還不熟悉裡面的功能，邊看邊做的時候常常因為找不到而一直請教同學功能在那裡，一開始做總是比較難，希望之後能順利的完成後面的東西 \n \n', 'tags': '', 'url': 'week8 - 06.html'}, {'title': 'week9 - 06', 'text': '', 'tags': '', 'url': 'week9 - 06.html'}, {'title': '40623211', 'text': '', 'tags': '', 'url': '40623211.html'}, {'title': 'week1 - 11', 'text': '第一週是把自隨身碟製作一個可攜式系統，並且下載很多程式來方便本學期上課用，之後慢慢整理出自己的環境。 \n', 'tags': '', 'url': 'week1 - 11.html'}, {'title': 'week2 - 11', 'text': '228連假 \n', 'tags': '', 'url': 'week2 - 11.html'}, {'title': 'week3 - 11', 'text': '老師利用程式進行分組，並且個人整理隨身碟，下周將會知道組員有誰! \n', 'tags': '', 'url': 'week3 - 11.html'}, {'title': 'week4 - 11', 'text': '看著組員各個都非常厲害，深深的覺得自己也要加強，才能跟上大家的進度。 \n', 'tags': '', 'url': 'week4 - 11.html'}, {'title': 'week5 - 11', 'text': '分組結果我的工作室報告製作和上台報告，上台報告的人需要非常清楚的了解大家工作的內容，並且熟悉自己製作的報告內容，這樣才能具體地描繪出我們的作品。........ \n', 'tags': '', 'url': 'week5 - 11.html'}, {'title': 'week6 - 11', 'text': '看著手足球已經設計完成，真的非常厲害，也畫得非常細，然後互評要一個一個人打說真的是蠻麻煩的。 \n', 'tags': '', 'url': 'week6 - 11.html'}, {'title': 'week7 - 11', 'text': '放假~~~~~ \n', 'tags': '', 'url': 'week7 - 11.html'}, {'title': 'week8 - 11', 'text': '期中考前的準備，趕快整理自己的東西，並且製作ppt，以便下週錄影和報告時使用。 \n 發現我的隨身碟不見，下周就要報告了，要趕快買一個然後備份。 \n', 'tags': '', 'url': 'week8 - 11.html'}, {'title': 'week9 - 11', 'text': '', 'tags': '', 'url': 'week9 - 11.html'}, {'title': '40623212', 'text': '', 'tags': '', 'url': '40623212.html'}, {'title': 'week1 - 12', 'text': '我們在上課做出屬於自己的可攜程式放入我們自己的隨身碟，以便於我們往後上課進行老師的要求的任務。與之前老師給我們的可攜系統不同的地方是我們這次都由自己做出，自己打造自己的環境。 \n', 'tags': '', 'url': 'week1 - 12.html'}, {'title': 'week2 - 12', 'text': '因為二二八彈性放假，所以在晚上進行補課，一天連上8堂課以至於許多東西都一次性下來有點吸收不好，希望下周前可以將進度補齊。 \n', 'tags': '', 'url': 'week2 - 12.html'}, {'title': 'week3 - 12', 'text': '上課中利用老師的亂數分組的程式碼進行班上亂數分組，雖然老師多次都說就決定是這次的分組名單，但最後分了5次，卻還是說分組留到下周進行，使我既期待又害怕的等待分組名單。 \n', 'tags': '', 'url': 'week3 - 12.html'}, {'title': 'week4 - 12', 'text': '今天終於將分組確定了，然後老師要求我們將組別的Github領取完成並且將組員都加入組別裡，起初老師說不要讓倉儲空無一物，要放點東西進去，經過太久，之前我們如何放入東西到組別倉儲都忘了，但經由老師檢查且提醒我們，才使我又想起如何建立內容。 \n', 'tags': '', 'url': 'week4 - 12.html'}, {'title': 'week5 - 12', 'text': '分配了工作，我的工作分配到了維護簡報，然而大家做完的東西，最後要經由報告呈現出，使得簡報的重要度不亞於其他的比重，我會更加認真的對待自己組別的簡報。 \n', 'tags': '', 'url': 'week5 - 12.html'}, {'title': 'week6 - 12', 'text': '這周在等待組員的部分進展，再將它們一一呈現在簡報上，以至於至此周簡報部分只有開頭，但內容還缺乏。 \n', 'tags': '', 'url': 'week6 - 12.html'}, {'title': 'week7 - 12', 'text': '~清明節連假~ \n', 'tags': '', 'url': 'week7 - 12.html'}, {'title': 'week8 - 12', 'text': '在一周就要期中了，上課老師說了期中的作法，老師若不提前先說明中考的內容，我可能會在期中考周當天戰戰兢兢的。 \n', 'tags': '', 'url': 'week8 - 12.html'}, {'title': 'week9 - 12', 'text': '', 'tags': '', 'url': 'week9 - 12.html'}, {'title': '40623216', 'text': '', 'tags': '', 'url': '40623216.html'}, {'title': 'week1 - 16', 'text': '心得 \n 第一周把隨身碟加入自己的可攜程式，在之後的操作上會比較方便，然後可攜程式都是自己一步一步做出來的。 \n', 'tags': '', 'url': 'week1 - 16.html'}, {'title': 'week2 - 16', 'text': '中秋連假 \n', 'tags': '', 'url': 'week2 - 16.html'}, {'title': 'week3 - 16', 'text': '這週老師用程式來進行亂數分組，在不知道跟誰同組的情況下，大家都很緊張會被分到哪組，分完組別後，開始分配工作，而我被分配到部落格網站整理及更新。 \n', 'tags': '', 'url': 'week3 - 16.html'}, {'title': 'week4 - 16', 'text': '這次的網站是要從無到有每個組員合力創建出來，然後討論如何做出手足球並用V-rep進行模擬，之前對V-rep只會一點點，這學期需要大量用到V-rep，所以會花很多時間在這上面，慢慢去熟悉。 \n', 'tags': '', 'url': 'week4 - 16.html'}, {'title': 'week5 - 16', 'text': '\n', 'tags': '', 'url': 'week5 - 16.html'}, {'title': 'week6 - 16', 'text': '1 \n', 'tags': '', 'url': 'week6 - 16.html'}, {'title': 'week7 - 16', 'text': '', 'tags': '', 'url': 'week7 - 16.html'}, {'title': 'week8 - 16', 'text': '', 'tags': '', 'url': 'week8 - 16.html'}, {'title': 'week9 - 16', 'text': '', 'tags': '', 'url': 'week9 - 16.html'}, {'title': '40623221', 'text': '', 'tags': '', 'url': '40623221.html'}, {'title': 'week1 - 21', 'text': '可攜式系統要自己創建，學習如何製作一個可攜式系統，跟著老師的腳步，發現它需要下載很多程式，再慢慢新增，建立出屬於自己的隨身系統這樣才可以完成這學期的作業。 \n', 'tags': '', 'url': 'week1 - 21.html'}, {'title': 'week2 - 21', 'text': '在禮拜一補完課，老師的教學影片讓我們能更加瞭解自己的可攜式系統內部的東西。 \n', 'tags': '', 'url': 'week2 - 21.html'}, {'title': 'week3 - 21', 'text': '認識亂數分組，將班上修課名單利用亂數分組，讓系統編排各組學員。 \n', 'tags': '', 'url': 'week3 - 21.html'}, {'title': 'week4 - 21', 'text': '這週分組名單已經出爐了，也選出組長，也順利進入github的協同。 \n', 'tags': '', 'url': 'week4 - 21.html'}, {'title': 'week5 - 21', 'text': '分配工作後我們都已經知道自己的工作，接著一起完成整組的成品，在編輯部落格的時候，因為leo的路徑用錯，詢問組後，可以順利上傳。 \n', 'tags': '', 'url': 'week5 - 21.html'}, {'title': 'week6 - 21', 'text': '老師教了v-rep模擬，回去後我們組也有組員順利模擬出來，雖然對模擬很生疏，但有組員能教，而且也多學了不少。 \n', 'tags': '', 'url': 'week6 - 21.html'}, {'title': 'week7 - 21', 'text': '放假。 \n', 'tags': '', 'url': 'week7 - 21.html'}, {'title': 'week8 - 21', 'text': '先了解下週期中考內容，第一節要先利用share X，錄製自己在1到八週作的內容(5分鐘內)，第二節在依照學號上去口頭報告。 \n', 'tags': '', 'url': 'week8 - 21.html'}, {'title': 'week9 - 21', 'text': '', 'tags': '', 'url': 'week9 - 21.html'}, {'title': '40623222', 'text': '', 'tags': '', 'url': '40623222.html'}, {'title': 'week1 - 22', 'text': '', 'tags': '', 'url': 'week1 - 22.html'}, {'title': 'week2 - 22', 'text': '', 'tags': '', 'url': 'week2 - 22.html'}, {'title': 'week3 - 22', 'text': '', 'tags': '', 'url': 'week3 - 22.html'}, {'title': 'week4 - 22', 'text': '', 'tags': '', 'url': 'week4 - 22.html'}, {'title': 'week5 - 22', 'text': '', 'tags': '', 'url': 'week5 - 22.html'}, {'title': 'week6 - 22', 'text': '', 'tags': '', 'url': 'week6 - 22.html'}, {'title': 'week7 - 22', 'text': '', 'tags': '', 'url': 'week7 - 22.html'}, {'title': 'week8 - 22', 'text': '', 'tags': '', 'url': 'week8 - 22.html'}, {'title': 'week9 - 22', 'text': '', 'tags': '', 'url': 'week9 - 22.html'}, {'title': '40623228', 'text': '', 'tags': '', 'url': '40623228.html'}, {'title': 'week1 - 28', 'text': '', 'tags': '', 'url': 'week1 - 28.html'}, {'title': 'week2 - 28', 'text': '', 'tags': '', 'url': 'week2 - 28.html'}, {'title': 'week3 - 28', 'text': '', 'tags': '', 'url': 'week3 - 28.html'}, {'title': 'week4 - 28', 'text': '', 'tags': '', 'url': 'week4 - 28.html'}, {'title': 'week5 - 28', 'text': '', 'tags': '', 'url': 'week5 - 28.html'}, {'title': 'week6 - 28', 'text': '', 'tags': '', 'url': 'week6 - 28.html'}, {'title': 'week7 - 28', 'text': '', 'tags': '', 'url': 'week7 - 28.html'}, {'title': 'week8 - 28', 'text': '', 'tags': '', 'url': 'week8 - 28.html'}, {'title': 'week9 - 28', 'text': '', 'tags': '', 'url': 'week9 - 28.html'}, {'title': '40623233', 'text': '', 'tags': '', 'url': '40623233.html'}, {'title': 'week1 - 33', 'text': '這學期第一堂課因為228放假所以就直接上八節課真的是上的很痛苦阿，再加上這學期要自己建立可攜系統，跟著老師的步驟一步步的來完成，剛開始需要下載很多東西也需要慢慢的將所需之程式做連接以便之後需要，自己建立完才發現其實沒那麼簡單要學的東西還很多。 \n', 'tags': '', 'url': 'week1 - 33.html'}, {'title': 'week2 - 33', 'text': '228放假 \n \n', 'tags': '', 'url': 'week2 - 33.html'}, {'title': 'week3 - 33', 'text': '這學期新教了一個東西較ungit，這個東西相較於之前的新增和資料的推送有點不太一樣，ungit可以很簡單也很快速地將東西傳送到倉儲裡面，也可以將資料做樹狀圖的方式合併，ungit也不一定要開github內的commit來確認有無推送至倉儲內，雖然看起來很方便但還是要看自己比較習慣使用哪個才是最重要的。 \n', 'tags': '', 'url': 'week3 - 33.html'}, {'title': 'week4 - 33', 'text': '這次的分組是由老師隨機分組，分完組後並自己架設網站和討論如何做出手足球和進行v-rep模擬，之前對v-rep還不是很了解和也只有稍微碰一下而已，藉由這次的手足球來加以練習這個模擬軟體，最重要的是v-rep都是英文所以操作起來不是很順利和熟練，所以必須要再加以練習才行。 \n', 'tags': '', 'url': 'week4 - 33.html'}, {'title': 'week5 - 33', 'text': '分配組員大致上的工作並討論要如何製作手足球。 \n', 'tags': '', 'url': 'week5 - 33.html'}, {'title': 'week6 - 33', 'text': '這練習 BubbleRob tutorial的v-rep模擬，剛開始在座的時候還不是那麼的熟悉，但是至少有操作流程但沒想到都是英文，所以在操作過程中要一直查單字，而且在操作過程中還會一直操作錯誤，主要的原因還是因為有些敘述看不太懂所以才會一直做錯，但是也藉由這次的練習讓我增加了一些英文的閱讀能力，以及還有很多東西需要花時間研究才行。 \n', 'tags': '', 'url': 'week6 - 33.html'}, {'title': 'week7 - 33', 'text': '', 'tags': '', 'url': 'week7 - 33.html'}, {'title': 'week8 - 33', 'text': '', 'tags': '', 'url': 'week8 - 33.html'}, {'title': 'week9 - 33', 'text': '', 'tags': '', 'url': 'week9 - 33.html'}, {'title': '40623240', 'text': '', 'tags': '', 'url': '40623240.html'}, {'title': 'week1 - 40', 'text': '\n 心得 \n 第一週用自己的可攜系統，有點不清楚要做什麼，所以去請教了解的同學幫助我完成了自己的環境。這次又是新的東西，但是基本上都跟上學期學到的東西類似，可以跟上老師的進度。 \n', 'tags': '', 'url': 'week1 - 40.html'}, {'title': 'week2 - 40', 'text': '228連假 \n', 'tags': '', 'url': 'week2 - 40.html'}, {'title': 'week3 - 40', 'text': '心得 \n 第三週分組討論分配工作，我分配到的是和上學期一樣的使用onshape畫圖部分，這次的比上次的不了，這次組員比較多所以需要話時間討論內容，希望可以順利完成圖。 \n', 'tags': '', 'url': 'week3 - 40.html'}, {'title': 'week4 - 40', 'text': '經過隨機分組後，這次網站要自己建立從沒有到有，需要大家集思廣益，如何去用好網站，只是比之前多一點步驟而已，經過大家討論後，網站的基本架構慢慢成形了，每組的進度也要開始了。 \n', 'tags': '', 'url': 'week4 - 40.html'}, {'title': 'week5 - 40', 'text': '分配到的組別是畫圖，Onshape是英文版不太熟悉但是有用過Solidwork所以上面的圖示基本是一樣或是類似的，我們必須了解自己要設計的產品，這樣才能畫出好的圖檔，會跟同學好好的討論並且繪出我們的Onshape。 \n', 'tags': '', 'url': 'week5 - 40.html'}, {'title': 'week6 - 40', 'text': '模擬部分是不太熟悉的部分，所以要花更多時間去探索，常常會遇到困難，就只能請教比較厲害的同學去跟他學習，手足球也差不多完成了，每週的自評互評也開始了，必須更加的認真了。 \n', 'tags': '', 'url': 'week6 - 40.html'}, {'title': 'week7 - 40', 'text': '春節連假...... \n', 'tags': '', 'url': 'week7 - 40.html'}, {'title': 'week8 - 40', 'text': '', 'tags': '', 'url': 'week8 - 40.html'}, {'title': 'week9 - 40', 'text': '', 'tags': '', 'url': 'week9 - 40.html'}, {'title': '40623245', 'text': '', 'tags': '', 'url': '40623245.html'}, {'title': 'week1 - 45', 'text': '第一堂學的是之前使用的可攜系統在這一堂學習如何去建立自己想要的系統，跟著老師的步驟做也發現需要下載一些程式，再去做統整，使他可以變成一個完整的系統。 \n', 'tags': '', 'url': 'week1 - 45.html'}, {'title': 'week2 - 45', 'text': '這禮拜是２２８放假 \n', 'tags': '', 'url': 'week2 - 45.html'}, {'title': 'week3 - 45', 'text': '', 'tags': '', 'url': 'week3 - 45.html'}, {'title': 'week4 - 45', 'text': '', 'tags': '', 'url': 'week4 - 45.html'}, {'title': 'week5 - 45', 'text': '', 'tags': '', 'url': 'week5 - 45.html'}, {'title': 'week6 - 45', 'text': '', 'tags': '', 'url': 'week6 - 45.html'}, {'title': 'week7 - 45', 'text': '', 'tags': '', 'url': 'week7 - 45.html'}, {'title': 'week8 - 45', 'text': '', 'tags': '', 'url': 'week8 - 45.html'}, {'title': 'week9 - 45', 'text': '\n', 'tags': '', 'url': 'week9 - 45.html'}, {'title': 'Attend', 'text': '\xa0●\xa0 :\xa0 \xa0正常出席 \n \xa0○\xa0 :\xa0 \xa0缺席 \xa0 \n △:\xa0 \xa0病假、事假 \n ❂:\xa0 \xa0國定假日 \n \n \n \n 組員 \n 2/22 \n 3/01 \n 3/08 \n 3/15 \n 3/22 \n 3/29 \n 4/05 \n 4/12 \n 4/19 \n 4/26 \n \n \n 40623203 蔡宜芳 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623206邱妍蓁 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623211王得榮 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623212魏有泉 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623216楊士平 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623221蔡和勳 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623222蔡博淮 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623228陳永錩 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623223謝宗宏 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623240何冠均 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n 40623245練峪愷 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n ● \n \n \n \n \n \n', 'tags': '', 'url': 'Attend.html'}, {'title': 'Q and A', 'text': '1.\xa0 Q：為何更改完之後SAVE檔案會不見只剩1個PAGE? \n \xa0 \xa0 \xa0A：有些字元無法被讀取，讓系統無法偵測到進而變成亂碼讓網站整個壞掉。 \n \xa0 \xa0 \xa0解決方法：可以重新CLONE一次然後從還沒改之前再去做就可以了。 \n \n', 'tags': '', 'url': 'Q and A.html'}]};