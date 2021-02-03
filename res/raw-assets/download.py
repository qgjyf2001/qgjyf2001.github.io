urls=["http://127.0.0.1:8080/index/res/raw-assets/d2/d2cb5a4f-1334-4eab-8578-a76aa028644e.mp3","http://127.0.0.1:8080/index/res/raw-assets/f2/f26ac5a6-b8e1-480f-b741-cf0608b83bb0.mp3","http://127.0.0.1:8080/index/res/raw-assets/a7/a74390ae-6d68-48d1-ad36-f652a43b8694.mp3","http://127.0.0.1:8080/index/res/raw-assets/d3/d314aef5-920d-44f4-aa26-423c3664acc6.mp3","http://127.0.0.1:8080/index/res/raw-assets/bb/bb54cc4f-da05-430f-be09-a0dab6473562.mp3"]
import requests
import os
for url in urls:
    url=url.replace('127.0.0.1:8080/index/','cdn.monspi.cn/melon/')
    print(url)
    if (url.find('h')!=-1):
        response = requests.get(url)
        path,name=url.split('/')[-2:]
        img = response.content
        if not os.path.exists(path):
            os.makedirs(path)
        with open( path+'/'+name,'wb' ) as f:
            f.write(img)
        
