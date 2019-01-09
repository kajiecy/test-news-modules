let $req = {
    // post:()=>{
    //     // 发起一个POST请求
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8080/mvc/common/login.json',
    //         data: {
    //             loginid: 101394,
    //             pwd: "3piub2",
    //             isStock:"0",
    //         }
    //     });
    // },
    post(url, data = {},vue) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                    .then(response => {
                        console.log("1111",response)
                        if(response.data.code===0){
                            resolve(response.data);
                        }else {
                            console.log(response.data.message)
                            vue.$toast(response.data.message)
                            // Toast({
                            //     message: '提示',
                            //     position: 'bottom',
                            //     duration: 5000
                            // });
                        }
                    }, err => {
                        // console.log("关闭err");
                        reject(err)
                    })
        })
    },
    get:()=>{

    }
}
