import time

import requests
url = 'https://jw.qlu.edu.cn/jwglxt/xsxk/zzxkyzbjk_xkBcZyZzxkYzb.html?gnmkdm=N253512'
url2 = 'https://jw.qlu.edu.cn/jwglxt/xsxk/zzxkyzb_cxXkTitleMsg.html?gnmkdm=N253512'
#cookie请自行抓取


headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Cookie': 'JSESSIONID=*****************'
}

data = {
        'jxb_ids': '5d6ecd17183562e6efda74764b485fde62efa2eec8d94e42af9cf7ca8cb7eeb29278586511a470cb33157e72f76879ffe3a2d638af7b142ab648a4b21cd7fe24328a83912844c1282dddc814e829d6a0724712e4ea00f9163f14390e2d27623e78160c335619b9f3ad496939aba9e5b3cb45aa5e13bdf96270cfb7e48ac88dc3',
        'kch_id': 'A9E97B0F7FBF40CF859F2F41BF3C45E6',
        'kcmc': '(B08t022)传统文化与现代企业管理 - 1.0 学分',
        'rwlx': '2',
        'rlkz': '0',
        'rlzlkz': '1',
        'sxbj': '1',
        'xxkbj': '0',
        'qz': '0',
        'cxbj': '0',
        'xkkz_id': '03F339A882AB5CF3E0630101007FE9CB',
        'njdm_id': '2022',
        'zyh_id': 'A9B06EE894274E94871D7B1A78E9248A',
        'kklxdm': '10',
        'xklc': '1',
        'xkxnm': '2023',
        'xkxqm': '3',
}


payload = {
    "jxb_ids": "515382e0884e1ca58510b097919e6b6afe02d7ca70129dc76acfcac2eef61789aa1094257ed3c5a6da14a10a0b6857fadc1c07a6ad1c5d7ef9f6e0bde9133d465161aaff1ccbe4a1cee760d22cc2abb7a484b91a47bc5a522bf213a7c96ec5f6f8e21ffbb3152ae9beff537f13a9250793d6cd5a2d0223342036adaab432ecb6",
    "xkxnm": 2023,
    "xkxqm": 3,
    "bj": 7,
    "kch_id": "A9E97B0F7FBF40CF859F2F41BF3C45E6",
    "njdm_id": 2022,
    "zyh_id": "A9B06EE894274E94871D7B1A78E9248A",
    "kklxdm": 10
}


while True:

    response = requests.post(url, data=data, headers=headers)
    reeee = requests.post(url2, data=payload, headers=headers)
    response_json = response.json()
    jsone = reeee.json()
    print(response_json)



