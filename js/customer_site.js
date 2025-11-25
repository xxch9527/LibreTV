const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
    // ikun: {
    //     api: 'https://ikunzyapi.com/api.php/provide/vod',
    //     name: 'ikun',
    // },
    // liangzi: {
    //     api: 'https://cj.lziapi.com/api.php/provide/vod',
    //     name: '量子',
    // },
    // baofeng: {
    //     api: 'https://bfzyapi.com/api.php/provide/vod',
    //     name: '暴风',
    // },
    // taohua: {
    //     api: 'https://thzy1.me/api.php/provide/vod',
    //     name: '桃花',
    // },
    // senlin: {
    //     api: 'https://slapibf.com/api.php/provide/vod',
    //     name: '森林',
    // }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
