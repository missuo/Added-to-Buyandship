#!/bin/bash
###
 # @Author: Vincent Young
 # @Date: 2023-04-09 23:56:13
 # @LastEditors: Vincent Young
 # @LastEditTime: 2023-04-10 00:08:22
 # @FilePath: /add-to-buyandship/release.sh
 # @Telegram: https://t.me/missuo
 # 
 # Copyright © 2023 by Vincent, All Rights Reserved. 
### 
version=${1#refs/tags/v}
mkdir dist
zip -r dist/added-to-buyandship-$version.zip *