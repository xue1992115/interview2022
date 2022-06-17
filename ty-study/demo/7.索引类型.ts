{
    type indexSign = {
        // 必须以ed结尾可以这么写
        [x: `${string}ed`]: any,
        // [x: string]: any,
        city: string
    }
    let hd: indexSign = {
        nameed: '小明',
        ageed: 18,
        sexed: '男',
        city: 'bj'
    }
}
