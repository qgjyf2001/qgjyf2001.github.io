urls=["http://127.0.0.1:8080/index/res/import/07/079499991.json","http://127.0.0.1:8080/index/res/import/07/07ce7530a.json","http://127.0.0.1:8080/index/res/import/0d/0d669730c.json","http://127.0.0.1:8080/index/res/import/0e/0e4bc3b03.json","http://127.0.0.1:8080/index/res/import/28/2874f8dd-416c-4440-81b7-555975426e93.json","http://127.0.0.1:8080/index/res/import/79/79eafaef-b7ef-45d9-9c3f-591dc836fc7a.json","http://127.0.0.1:8080/index/res/import/07/079499991.json","http://127.0.0.1:8080/index/res/import/07/07ce7530a.json","http://127.0.0.1:8080/index/res/import/0d/0d669730c.json","http://127.0.0.1:8080/index/res/import/0e/0e4bc3b03.json","http://127.0.0.1:8080/index/res/import/6f/6f801092-0c37-4f30-89ef-c8d960825b36.json","http://127.0.0.1:8080/index/res/import/ec/eca5d2f2-8ef6-41c2-bbe6-f9c79d09c432.json","http://127.0.0.1:8080/index/res/import/0a/0ab855d50.json"]
import requests
import os
for url in urls:
    url=url.replace('127.0.0.1:8080/index/','cdn.monspi.cn/melon/')
    print(url)
    if (url.find('raw')!=-1):
        response = requests.get(url)
        path,name=url.split('/')[-2:]
        img = response.content
        if not os.path.exists(path):
            os.makedirs(path)
        with open( path+'/'+name,'wb' ) as f:
            f.write(img)
        
