var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'Table Football motion simulation system \n 協同產品設計實習第一組 \n Github \n Blog \n Reveal \n ★Leader： \n 40623203 蔡宜芳 \n ★Member： \n 40623206\xa0 邱妍蓁\xa0   \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0   40623228\xa0 陳永錩 \n 40623211\xa0 王得榮  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0   40623233\xa0 謝宗宏 \n 40623212\xa0 魏有泉  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  40623240\xa0 何冠均 \n 40623216\xa0 楊士平  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  40623245\xa0 練峪愷 \n 40623221\xa0 蔡和勳 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40623222\xa0 蔡博淮 \n \n ★Assignments\xa0 : \n ⦿Onshape: \n 40623206\xa0 邱妍蓁\xa0 、 40623240\xa0 何冠均 \n ⦿V-rep\xa0simulation: \n 40623203 蔡宜芳\xa0 、 \xa040623228\xa0 陳永錩、 40623233\xa0 謝宗宏 \n ⦿Website\xa0maintain: \n \xa040623245\xa0 練峪愷、 \xa040623222\xa0 蔡博淮 \n ⦿Blog: \n 40623221\xa0 蔡和勳、 \xa040623216\xa0 楊士平\xa0 \n ⦿Slideshow: \n 40623212\xa0 魏有泉、 40623211\xa0 王得榮 \n ⦿Report: \n 40623211\xa0 王得榮 \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Directory Structure', 'text': '\n 第二位想要編輯這裡 \n \n CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n 還有這裡 \n 首先修改這裡 \n', 'tags': '', 'url': 'Directory Structure.html'}, {'title': 'Onshape', 'text': '', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Process', 'text': '一開始用Inventor畫草圖，設計出大概的樣子。 \n \n 組合出大概的樣子。 \n \n 在詢問老師後才知道底板規格是固定的，不能更改，所以直接用Onshape重新畫一個新的。 \n \n \n 組合的過程，因不想一直做重複的事情，所以用次組合。 \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Process.html'}, {'title': 'Complete', 'text': 'Table Football \n \n \n \n \n', 'tags': '', 'url': 'Complete.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'BobbleRob', 'text': '\n', 'tags': '', 'url': 'BobbleRob.html'}, {'title': 'Tutorial', 'text': "A.\xa0Add a primitive sphere \n 1.\xa0Add a primitive sphere to the scene with [Menu bar --> Add --> Primitive shape --> Sphere] \n \n 2.\xa0Diameter 0.2,\xa0adjust the X-size item to 0.2, then click OK.\xa0 \n \n 3. Enable Collidable, Measurable, Renderable and Detectable in the object common properties for that shape. \n \n 4. Click the sphere representing BubbleRob's body. \n 5. Click translation tab and enter 0.02 for Along Z. \n 6. Click Translate selection so that all selected objects by 2 cm along the absolute Z-axis. \n \n 7.\xa0Double-click the sphere's name, edit and enter bubbleRob and press enter. \n B. Add a proximity sensor \n 1. Select [Menu bar --> Add --> Proximity sensor --> Cone type] \n \n 2.\xa0 In the orientation dialog on the orientation tab, we enter 90 for Around Y and for Around Z, then click Rotate selection. \n \n 3.\xa0In the position dialog, on the position tab, we enter 0.1 for X-coord. and 0.12 for Z-coord. \n \n 4. Double-click the proximity sensor's icon in the scene hierarchy to open its properties dialog. \n 5. Click Show volume parameter to open the proximity sensor volume dialog. \n 6. Adjust items Offset to 0.005, Angle to 30 and Range to 0.15. \n \n 7. Click Show detection parameters in the proximity sensor properties, opens the proximity sensor detection parameter dialog. \n 8. Uncheck item Don't allow detections if distance smaller than then close that dialog again. \n \n 9. Double-click the proximity sensor's name, edit and enter bubbleRob_sensingNose and press enter. \n C. Attaches the sensor to the body of the robot \n 1.\xa0Select bubbleRob_sensingNose, then control-select bubbleRob \n 2.\xa0Click [Menu bar --> Edit --> Make last selected object parent] \n 1. + 2. => Can\xa0also drag bubbleRob_sensingNose onto bubbleRob in the scene hierarchy. \n \n D. Add BubbleRob's wheels \n 1.\xa0Add a pure primitive cylinder with [Menu bar --> Add --> Primitive shape --> Cylinder] \n \n 2.\xa0Dimensions (0.08,0.08,0.02) \n \n 3.\xa0Enable Collidable, Measurable, Renderable and Detectable in the object common properties for that cylinder. \n \n 4.\xa0Set the cylinder's absolute position to (0.05,0.1,0.04) \n 5.\xa0A bsolute orientation to (-90,0,0) \n 6.\xa0Change the name to\xa0 bubbleRob_leftWheel \n 7.\xa0Copy and paste the wheel \n 8.\xa0Set the absolute Y coordinate of the copy to -0.1 \n \n 9.\xa0R ename the copy to\xa0 bubbleRob_rightWheel \n E.\xa0A dd\xa0 j oints \xa0 (or motors) for the wheels \n 1.\xa0Click [Menu bar --> Add --> Joint --> Revolute] to add a revolute joint to the scene\xa0 \n \n 2.\xa0 Keep the joint selected, then control-select\xa0 bubbleRob_leftWheel \n 3.\xa0\xa0In the\xa0position dialog, on the\xa0position\xa0tab, we click the\xa0Apply to selection\xa0button: this positioned the joint at the center of the left wheel. \n \n 4.\xa0In the\xa0orientation dialog, on the\xa0orientation\xa0tab, we do the same: this oriented the joint in the same way as the left wheel. \n \n 5.\xa0Rename the joint to\xa0bubbleRob_leftMotor \n 6.\xa0Double-click the joint's icon in the scene hierarchy to open the\xa0joint properties\xa0dialog. \n 7.\xa0click\xa0Show dynamic parameters\xa0to open the\xa0joint dynamics propertiesdialog. \n 8. Enable the motor, and check item\xa0Lock motor when target velocity is zero. \n \n 9. Repeat the same procedure for the right motor and rename it to\xa0bubbleRob_rightMotor. \n \n \n \n 10. Attach the left wheel to the left motor. \n 11. Attach\xa0 the right wheel to the right motor. \n 12.\xa0Attach the two motors to\xa0bubbleRob. \n", 'tags': '', 'url': 'Tutorial.html'}, {'title': 'Experience', 'text': '', 'tags': '', 'url': 'Experience.html'}, {'title': '40623203', 'text': '', 'tags': '', 'url': '40623203.html'}, {'title': 'week1 - 03', 'text': '', 'tags': '', 'url': 'week1 - 03.html'}, {'title': 'week2 - 03', 'text': '', 'tags': '', 'url': 'week2 - 03.html'}, {'title': 'week3 - 03', 'text': '', 'tags': '', 'url': 'week3 - 03.html'}, {'title': 'week4 - 03', 'text': '', 'tags': '', 'url': 'week4 - 03.html'}, {'title': 'week5 - 03', 'text': '', 'tags': '', 'url': 'week5 - 03.html'}, {'title': 'week6 - 03', 'text': '', 'tags': '', 'url': 'week6 - 03.html'}, {'title': 'week7 - 03', 'text': '', 'tags': '', 'url': 'week7 - 03.html'}, {'title': 'week8 - 03', 'text': '', 'tags': '', 'url': 'week8 - 03.html'}, {'title': 'week9 - 03', 'text': '', 'tags': '', 'url': 'week9 - 03.html'}, {'title': '40623206', 'text': '', 'tags': '', 'url': '40623206.html'}, {'title': 'week1 - 06', 'text': '', 'tags': '', 'url': 'week1 - 06.html'}, {'title': 'week2 - 06', 'text': '', 'tags': '', 'url': 'week2 - 06.html'}, {'title': 'week3 - 06', 'text': '', 'tags': '', 'url': 'week3 - 06.html'}, {'title': 'week4 - 06', 'text': '', 'tags': '', 'url': 'week4 - 06.html'}, {'title': 'week5 - 06', 'text': '', 'tags': '', 'url': 'week5 - 06.html'}, {'title': 'week6 - 06', 'text': '', 'tags': '', 'url': 'week6 - 06.html'}, {'title': 'week7 - 06', 'text': '', 'tags': '', 'url': 'week7 - 06.html'}, {'title': 'week8 - 06', 'text': '', 'tags': '', 'url': 'week8 - 06.html'}, {'title': 'week9 - 06', 'text': '', 'tags': '', 'url': 'week9 - 06.html'}, {'title': '40623211', 'text': '', 'tags': '', 'url': '40623211.html'}, {'title': 'week1 - 11', 'text': '', 'tags': '', 'url': 'week1 - 11.html'}, {'title': 'week2 - 11', 'text': '', 'tags': '', 'url': 'week2 - 11.html'}, {'title': 'week3 - 11', 'text': '', 'tags': '', 'url': 'week3 - 11.html'}, {'title': 'week4 - 11', 'text': '', 'tags': '', 'url': 'week4 - 11.html'}, {'title': 'week5 - 11', 'text': '', 'tags': '', 'url': 'week5 - 11.html'}, {'title': 'week6 - 11', 'text': '', 'tags': '', 'url': 'week6 - 11.html'}, {'title': 'week7 - 11', 'text': '', 'tags': '', 'url': 'week7 - 11.html'}, {'title': 'week8 - 11', 'text': '', 'tags': '', 'url': 'week8 - 11.html'}, {'title': 'week9 - 11', 'text': '', 'tags': '', 'url': 'week9 - 11.html'}, {'title': '40623212', 'text': '', 'tags': '', 'url': '40623212.html'}, {'title': 'week1 - 12', 'text': '心得: \n 我們在上課做出屬於自己的可攜程式放入我們自己的隨身碟，以便於我們往後上課進行老師的要求的任務。與之前老師給我們的可攜系統不同的地方是我們這次都由自己做出，自己打造自己的環境。 \n', 'tags': '', 'url': 'week1 - 12.html'}, {'title': 'week2 - 12', 'text': '', 'tags': '', 'url': 'week2 - 12.html'}, {'title': 'week3 - 12', 'text': '', 'tags': '', 'url': 'week3 - 12.html'}, {'title': 'week4 - 12', 'text': '', 'tags': '', 'url': 'week4 - 12.html'}, {'title': 'week5 - 12', 'text': '', 'tags': '', 'url': 'week5 - 12.html'}, {'title': 'week6 - 12', 'text': '', 'tags': '', 'url': 'week6 - 12.html'}, {'title': 'week7 - 12', 'text': '', 'tags': '', 'url': 'week7 - 12.html'}, {'title': 'week8 - 12', 'text': '', 'tags': '', 'url': 'week8 - 12.html'}, {'title': 'week9 - 12', 'text': '', 'tags': '', 'url': 'week9 - 12.html'}, {'title': '40623216', 'text': '', 'tags': '', 'url': '40623216.html'}, {'title': 'week1 - 16', 'text': '心得 \n 第一周把隨身碟加入自己的可攜程式，在之後的操作上會比較方便，然後可攜程式都是自己一步一步做出來的。 \n', 'tags': '', 'url': 'week1 - 16.html'}, {'title': 'week2 - 16', 'text': '', 'tags': '', 'url': 'week2 - 16.html'}, {'title': 'week3 - 16', 'text': '', 'tags': '', 'url': 'week3 - 16.html'}, {'title': 'week4 - 16', 'text': '', 'tags': '', 'url': 'week4 - 16.html'}, {'title': 'week5 - 16', 'text': '', 'tags': '', 'url': 'week5 - 16.html'}, {'title': 'week6 - 16', 'text': '', 'tags': '', 'url': 'week6 - 16.html'}, {'title': 'week7 - 16', 'text': '', 'tags': '', 'url': 'week7 - 16.html'}, {'title': 'week8 - 16', 'text': '', 'tags': '', 'url': 'week8 - 16.html'}, {'title': 'week9 - 16', 'text': '', 'tags': '', 'url': 'week9 - 16.html'}, {'title': '40623221', 'text': '', 'tags': '', 'url': '40623221.html'}, {'title': 'week1 - 21', 'text': '', 'tags': '', 'url': 'week1 - 21.html'}, {'title': 'week2 - 21', 'text': '', 'tags': '', 'url': 'week2 - 21.html'}, {'title': 'week3 - 21', 'text': '', 'tags': '', 'url': 'week3 - 21.html'}, {'title': 'week4 - 21', 'text': '', 'tags': '', 'url': 'week4 - 21.html'}, {'title': 'week5 - 21', 'text': '', 'tags': '', 'url': 'week5 - 21.html'}, {'title': 'week6 - 21', 'text': '', 'tags': '', 'url': 'week6 - 21.html'}, {'title': 'week7 - 21', 'text': '', 'tags': '', 'url': 'week7 - 21.html'}, {'title': 'week8 - 21', 'text': '', 'tags': '', 'url': 'week8 - 21.html'}, {'title': 'week9 - 21', 'text': '', 'tags': '', 'url': 'week9 - 21.html'}, {'title': '40623222', 'text': '', 'tags': '', 'url': '40623222.html'}, {'title': 'week1 - 22', 'text': '', 'tags': '', 'url': 'week1 - 22.html'}, {'title': 'week2 - 22', 'text': '', 'tags': '', 'url': 'week2 - 22.html'}, {'title': 'week3 - 22', 'text': '', 'tags': '', 'url': 'week3 - 22.html'}, {'title': 'week4 - 22', 'text': '', 'tags': '', 'url': 'week4 - 22.html'}, {'title': 'week5 - 22', 'text': '', 'tags': '', 'url': 'week5 - 22.html'}, {'title': 'week6 - 22', 'text': '', 'tags': '', 'url': 'week6 - 22.html'}, {'title': 'week7 - 22', 'text': '', 'tags': '', 'url': 'week7 - 22.html'}, {'title': 'week8 - 22', 'text': '', 'tags': '', 'url': 'week8 - 22.html'}, {'title': 'week9 - 22', 'text': '', 'tags': '', 'url': 'week9 - 22.html'}, {'title': '40623228', 'text': '', 'tags': '', 'url': '40623228.html'}, {'title': 'week1 - 28', 'text': '', 'tags': '', 'url': 'week1 - 28.html'}, {'title': 'week2 - 28', 'text': '', 'tags': '', 'url': 'week2 - 28.html'}, {'title': 'week3 - 28', 'text': '', 'tags': '', 'url': 'week3 - 28.html'}, {'title': 'week4 - 28', 'text': '', 'tags': '', 'url': 'week4 - 28.html'}, {'title': 'week5 - 28', 'text': '', 'tags': '', 'url': 'week5 - 28.html'}, {'title': 'week6 - 28', 'text': '', 'tags': '', 'url': 'week6 - 28.html'}, {'title': 'week7 - 28', 'text': '', 'tags': '', 'url': 'week7 - 28.html'}, {'title': 'week8 - 28', 'text': '', 'tags': '', 'url': 'week8 - 28.html'}, {'title': 'week9 - 28', 'text': '', 'tags': '', 'url': 'week9 - 28.html'}, {'title': '40623233', 'text': '', 'tags': '', 'url': '40623233.html'}, {'title': 'week1 - 33', 'text': '', 'tags': '', 'url': 'week1 - 33.html'}, {'title': 'week2 - 33', 'text': '', 'tags': '', 'url': 'week2 - 33.html'}, {'title': 'week3 - 33', 'text': '', 'tags': '', 'url': 'week3 - 33.html'}, {'title': 'week4 - 33', 'text': '', 'tags': '', 'url': 'week4 - 33.html'}, {'title': 'week5 - 33', 'text': '', 'tags': '', 'url': 'week5 - 33.html'}, {'title': 'week6 - 33', 'text': '', 'tags': '', 'url': 'week6 - 33.html'}, {'title': 'week7 - 33', 'text': '', 'tags': '', 'url': 'week7 - 33.html'}, {'title': 'week8 - 33', 'text': '', 'tags': '', 'url': 'week8 - 33.html'}, {'title': 'week9 - 33', 'text': '', 'tags': '', 'url': 'week9 - 33.html'}, {'title': '40623240', 'text': '', 'tags': '', 'url': '40623240.html'}, {'title': 'week1 - 40', 'text': '心得 \n 第一週用自己的可攜系統，有點不清楚要做什麼，所以去請教了解的同學幫助我完成了自己的環境。這次又是新的東西，但是基本上都跟上學期學到的東西類似，可以跟上老師的進度。 \n', 'tags': '', 'url': 'week1 - 40.html'}, {'title': 'week2 - 40', 'text': '', 'tags': '', 'url': 'week2 - 40.html'}, {'title': 'week3 - 40', 'text': '心得 \n 第三週分組討論分配工作，我分配到的是和上學期一樣的使用onshape畫圖部分，這次的比上次的不了，這次組員比較多所以需要話時間討論內容，希望可以順利完成圖。 \n', 'tags': '', 'url': 'week3 - 40.html'}, {'title': 'week4 - 40', 'text': '', 'tags': '', 'url': 'week4 - 40.html'}, {'title': 'week5 - 40', 'text': '', 'tags': '', 'url': 'week5 - 40.html'}, {'title': 'week6 - 40', 'text': '', 'tags': '', 'url': 'week6 - 40.html'}, {'title': 'week7 - 40', 'text': '', 'tags': '', 'url': 'week7 - 40.html'}, {'title': 'week8 - 40', 'text': '', 'tags': '', 'url': 'week8 - 40.html'}, {'title': 'week9 - 40', 'text': '', 'tags': '', 'url': 'week9 - 40.html'}, {'title': '40623245', 'text': '', 'tags': '', 'url': '40623245.html'}, {'title': 'week1 - 45', 'text': '', 'tags': '', 'url': 'week1 - 45.html'}, {'title': 'week2 - 45', 'text': '', 'tags': '', 'url': 'week2 - 45.html'}, {'title': 'week3 - 45', 'text': '', 'tags': '', 'url': 'week3 - 45.html'}, {'title': 'week4 - 45', 'text': '', 'tags': '', 'url': 'week4 - 45.html'}, {'title': 'week5 - 45', 'text': '', 'tags': '', 'url': 'week5 - 45.html'}, {'title': 'week6 - 45', 'text': '', 'tags': '', 'url': 'week6 - 45.html'}, {'title': 'week7 - 45', 'text': '', 'tags': '', 'url': 'week7 - 45.html'}, {'title': 'week8 - 45', 'text': '', 'tags': '', 'url': 'week8 - 45.html'}, {'title': 'week9 - 45', 'text': '\n', 'tags': '', 'url': 'week9 - 45.html'}, {'title': 'Attend', 'text': '\xa0●\xa0 :\xa0 \xa0正常出席 \n \xa0○\xa0 :\xa0 \xa0缺席 \xa0 \n △:\xa0 \xa0病假、事假 \n ❂:\xa0 \xa0國定假日 \n \n \n \n 組員 \n 2/22 \n 3/01 \n 3/08 \n 3/15 \n 3/22 \n 3/29 \n 4/05 \n 4/12 \n 4/19 \n 4/26 \n \n \n 40623203 蔡宜芳 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623206邱妍蓁 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623211王得榮 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623212魏有泉 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623216楊士平 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623221蔡和勳 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623222蔡博淮 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623228陳永錩 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623223謝宗宏 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n 40623240何冠均 \n ● \n ● \n ● \n ● \n ● \n ● \n ❂ \n \n \n \n \n \n \n', 'tags': '', 'url': 'Attend.html'}, {'title': 'Q and A', 'text': '1.\xa0 Q：為何更改完之後SAVE檔案會不見只剩1個PAGE? \n \xa0 \xa0 \xa0A：有些字元無法被讀取，讓系統無法偵測到進而變成亂碼讓網站整個壞掉。 \n \xa0 \xa0 \xa0解決方法：可以重新CLONE一次然後從還沒改之前再去做就可以了。 \n', 'tags': '', 'url': 'Q and A.html'}]};