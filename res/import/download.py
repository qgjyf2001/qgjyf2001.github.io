urls=["http://127.0.0.1:8080/index/res/import/41/417a8a59-c0fc-4767-8be2-bf5124bb4b8d.json"]
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
        
