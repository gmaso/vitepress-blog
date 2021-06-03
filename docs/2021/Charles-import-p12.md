---
title: Charles 导入 p12 格式证书
date: 2021-06-03 20:59:12
tags: Charles
---


# Charles 导入 p12 格式证书

Charles 中需要抓取 HTTPS 流量时，需要 Android 等设备安装 Charles 的 SSL 证书。而当 Charles 重新安装或更换设备后，Charles 默认会使用一份新的 SSL 证书，导致 Android 上的证书失效，又需要重复证书安装步骤。

Charles 提供了导出及导入证书的功能，可以解决以上问题。



## 导出证书

1. 选择导出证书：Help -> SSL Proxying -> Export Charles Root Certificate and Private Key。

   ![image-20210603203630319](http://static.gmaso.cn//md/20210603203630.png?imageslim)

2. 设置导出证书密码，导入时需要输入。

   ![image-20210603203837338](http://static.gmaso.cn//md/20210603203837.png?imageslim)

3. 密码输入后，点击 OK，选择证书保存位置。证书格式为 p12。

   ![image-20210603204129824](http://static.gmaso.cn//md/20210603204129.png?imageslim)

4. 证书导出完成。

## 导入证书

1. 当重新安装 Charles 或在新设备安装 Charles 后，进行证书导入。选择：Proxy -> SSL Proxying Settings。

   ![image-20210603204343511](http://static.gmaso.cn//md/20210603204343.png?imageslim)

2. 弹出窗口中选择 Root Certificate，点击下方的 Import P12 按钮。

   ![image-20210603204517095](http://static.gmaso.cn//md/20210603204517.png?imageslim)

3. 弹出框中选择之前导出的 p12 文件，输入设置的密码。

   ![image-20210603204651283](http://static.gmaso.cn//md/20210603204651.png?imageslim)

4. 密码输入完成后，点击 OK。可以看到导入按钮前出现了证书的名称，证明导入成功。

   ![image-20210603204735783](http://static.gmaso.cn//md/20210603204735.png?imageslim)

5. 证书导入成功。设备可以连接 Charles 愉快地进行调试啦(*^_^*)



完毕！
