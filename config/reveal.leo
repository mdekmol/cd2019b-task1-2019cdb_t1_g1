<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1" a="E"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2" a="E"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3" a="E"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4" a="E"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6" a="E"><vh>body</vh>
<v t="leo.20180902120523.7" a="E"><vh>reveal div</vh>
<v t="leo.20180902120523.8" a="E"><vh>slides div</vh>
<v t="leo.20190418185134.1" a="E"><vh>封面投影片</vh>
<v t="leo.20190418185134.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20190418185600.1" a="E"><vh>工作</vh>
<v t="leo.20190418173439.2"><vh>任務</vh></v>
<v t="leo.20190613223832.1" a="E"><vh>繪圖</vh>
<v t="leo.20190613223832.3"><vh>ONSHAPE</vh></v>
<v t="leo.20190613223839.1" a="E"><vh>模擬</vh>
<v t="leo.20190613223839.4"><vh>V-rep</vh></v>
</v>
</v>
</v>
<v t="leo.20190614002159.1"><vh>繪圖</vh>
<v t="leo.20190614002159.2"><vh>ONSHAPE</vh></v>
</v>
<v t="leo.20190614002430.1" a="E"><vh>模擬</vh>
<v t="leo.20190614002430.2"><vh>V-rep</vh></v>
</v>
<v t="leo.20190418180442.1" a="E"><vh>快捷鍵</vh>
<v t="leo.20190418180442.2"><vh>投影片快捷鍵</vh></v>
</v>
<v t="leo.20180902120523.13" a="E"><vh>各式內容引用範例</vh>
<v t="leo.20180902120523.14"><vh>導入數學符號與方程式</vh>
<v t="leo.20180902120523.15"><vh>LaTeX 格式方程式</vh></v>
</v>
<v t="leo.20180902120523.16"><vh>導入縮排程式碼</vh>
<v t="leo.20180902120523.17"><vh>引用程式碼</vh></v>
</v>
<v t="leo.20180902120523.18"><vh>導入影片</vh>
<v t="leo.20180902120523.19"><vh>iframe 導入影片</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.13">&lt;section&gt;
@others
&lt;/section&gt;

</t>
<t tx="leo.20180902120523.14">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.15"># 數學符號與方程式

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$
</t>
<t tx="leo.20180902120523.16">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.17">## 利用 Markdown 寫投影片
以下利用 Markdown 格式展示 Python 程式碼:
```
@language python
# use threading and subprocess to threading the make process
import os
import subprocess
import threading

def domake():
    
    path = "../exposed/api/exposed"
    ubuntu = "../Ubuntu"
    
    # create obj path
    
    if not os.path.exists(path+"/../obj"):
        os.makedirs(path+"/../obj")
    
    subprocess.call(["make", "clean"], cwd=path)
    subprocess.call("make", cwd=path)
    subprocess.call(["cp", "{libslvs.so, _slvs.so, slvs.py}", ubuntu], cwd=path)
    subprocess.call(["python3", "circle_ex.py"], cwd=path+"/"+ubuntu)
    
make = threading.Thread(target=domake)
make.start()
```
</t>
<t tx="leo.20180902120523.18">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.19">## 使用 iframe 導入影片

### 導入影片 template

&lt;iframe src="https://player.vimeo.com/video/183950627" width="640" height="492" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;
</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
CMSimfly 網際內容管理
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20190418173439.2"># 任務分配

* V-rep模擬:
40623203、40623228、40623233
*投影片:
40623221
*繪圖:
40623206
*工程圖:
40623216、40623211、40623245
*零件表、尺寸分析:
40623212、40623222
pdf報告:40623240、40623245


</t>
<t tx="leo.20190418180442.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20190418180442.2"># 投影片快捷鍵

* 利用箭頭上下前後換頁
* 按 f 鍵進入全螢幕模式 (full screen)
* 按 s 鍵可以顯示投影片筆記 (show)
* 按 o 鍵可以切換單張或全域檢視 (overview)
* 按 b 或 . 鍵可以切換螢幕黑屏 (black)
* 按 Esc 可以退出全螢幕或全域檢視 (Escape)

</t>
<t tx="leo.20190418185134.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;

						
</t>
<t tx="leo.20190418185134.2">## 2019 Spring協同產品設計實習

### BG1

&lt;small&gt;
Created by [BG1](https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g1)
&lt;/small&gt;

[BG1網誌](https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g1/blog/)


</t>
<t tx="leo.20190418185600.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20190613223832.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20190613223832.3"># Onshape

[手足球+送球機構的完成圖](https://cad.onshape.com/documents/fcd2ce4571d668249938c4fb/w/f8cf7d2aff1a9bbd00da57c4/e/8ed15db245d28cf2aa49ffb2)
[操作桿尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/dfea3cfcbfd14803555ea587)
[握把尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/adbe6de668cc33c0ef63ead9)
[球員尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/1b2291c268d8828737c1754e)
[進球區尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/28ae8a75d5ffe68cd8521686)
[球場邊界](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/85005b7341024c67868ab79c)
[場地](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/9bc721c57da73b9de65aa09d)

</t>
<t tx="leo.20190613223839.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20190613223839.4"># V-rep模擬

[Foosball](https://github.com/40623203/40623203_cd2019b/tree/gh-pages/downloads)
[Foosball people vs people](https://github.com/mdecadp2018/site-40623233/tree/gh-pages/foosball/foosball%20people%20vs%20people)
[Foosball people vs ai](https://github.com/mdecadp2018/site-40623233/tree/gh-pages/foosball/Foosball%20people%20vs%20ai)
</t>
<t tx="leo.20190614002159.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20190614002159.2"># Onshape

[手足球+送球機構的完成圖](https://cad.onshape.com/documents/fcd2ce4571d668249938c4fb/w/f8cf7d2aff1a9bbd00da57c4/e/8ed15db245d28cf2aa49ffb2)
[操作桿尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/dfea3cfcbfd14803555ea587)
[握把尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/adbe6de668cc33c0ef63ead9)
[球員尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/1b2291c268d8828737c1754e)
[進球區尺寸](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/28ae8a75d5ffe68cd8521686)
[球場邊界](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/85005b7341024c67868ab79c)
[場地](https://cad.onshape.com/documents/70ae09b84ba72fe5c5ef14ab/w/613d8349b354bd768b830627/e/9bc721c57da73b9de65aa09d)

</t>
<t tx="leo.20190614002430.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20190614002430.2"># V-rep模擬

[Foosball](https://github.com/40623203/40623203_cd2019b/tree/gh-pages/downloads)
[Foosball people vs people](https://github.com/mdecadp2018/site-40623233/tree/gh-pages/foosball/foosball%20people%20vs%20people)
[Foosball people vs ai](https://github.com/mdecadp2018/site-40623233/tree/gh-pages/foosball/Foosball%20people%20vs%20ai)
</t>
</tnodes>
</leo_file>
