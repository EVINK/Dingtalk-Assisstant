///<reference path="../../node_modules/vue/types/index.d.ts"/>
// @ts-ignore
new Vue({
    el: '#app',
    data: {
        fullScreen: true,
        loginStatusPersistence: true,
        fsSwitchAnimation: false,
        lspSwitchAnimation: false,
        menuOn: false,
        menuClicked: false,
        version: undefined,
    },
    methods: {
        onFullScreen() {
            this.fullScreen = true
            this.fsSwitchAnimation = true
            StorageArea.set({fullScreen: true})
            sendMessage({fullScreen: true})
        },
        offFullScreen() {
            this.fullScreen = false
            this.fsSwitchAnimation = true
            StorageArea.set({fullScreen: false})
            sendMessage({fullScreen: false})
        },
        keepLoginStatus() {
            this.loginStatusPersistence = true
            this.lspSwitchAnimation = true
            StorageArea.set({loginStatusPersistence: true})
            sendMessage({bubble: '设置完成'})
            sendMessage({checkLSPStatus: true})
        },
        notKeepLoginStatus() {
            this.loginStatusPersistence = false
            this.lspSwitchAnimation = true
            StorageArea.set({loginStatusPersistence: false})
            sendMessage({bubble: '设置完成，下次重新登陆后将生效'})
        },
        clickMenu() {
            this.menuOn = !this.menuOn
            this.menuClicked = true
        },
        snapshot() {
            // console.log('about to send msg')
            // return sendMessage({ alert: '功能即将完成' })
            return sendMessage({bubble: '功能即将完成'})

            // console.log(chrome.runtime.id)
            // console.log(chrome.tabs)

            // chrome.tabs.({}, (stream)=>{
            //     console.log(stream)
            // })

            // 截图 (当前网页)
            // chrome.tabs.captureVisibleTab(null, {}, function (image) {
            //     console.log(image);
            // });

            // 录屏
            // const thisPage = await getCurrentPage()
            // chrome.desktopCapture.chooseDesktopMedia(['screen', 'window', 'tab'], thisPage, (streamId) => {
            //     console.log(streamId)
            // })

            // sendMessage({snapshot: true})

            // return
        },
    },
    async mounted() {
        const manifestData = chrome.runtime.getManifest()
        this.version = manifestData.version
        this.fullScreen = await StorageArea.get('fullScreen') || false
        this.loginStatusPersistence = await StorageArea.get('loginStatusPersistence') || false
    }
})