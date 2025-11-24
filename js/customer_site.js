const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun资源',
    }
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源',
    }
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风资源',
    } 
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
