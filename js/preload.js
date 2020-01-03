function preload(urls = []) {
    return new Promise((resolve, reject) => {
        const mapper = {};
        const deWeightedUrl = urls.filter((e, i) => {
            if (!mapper[e]) {
                mapper[e] = i;
                return true;
            }
            return false;
        })
        const reqs = deWeightedUrl.map(e => axios.get(e, {
            responseType: 'blob'
        }))
        Promise.all(reqs).then(data => {
            const blobData = data.map(e => e.data)
            resolve(urls.map(e => blobData[mapper[e]]));
        }).catch(err => reject(err))
    });
}