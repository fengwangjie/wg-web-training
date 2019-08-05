const heatMapParams = {
    "date_ranges": [{
        "start": "2018-06-30",
        "end": "2018-07-31"
    }],
    "dimensions": [{
        "name": "day-of-week"
    },
    { "name": "hour" }],
    "metrics": [{
        "name": "tc:page_view"
    }],
    "filters": {}
};

const fetchHeatMapData = (params) => {
    const option = {
        body: JSON.stringify(params),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
    };
    return fetch("http://dashboard.qa.tronclass.com.cn/api/al/heatmap", option)
        .then(response => response.json())
};

export const getHeatMapData = () => {
    let heatMapPromise = fetchHeatMapData(heatMapParams);
    let onSuccess = (response) => {
        return response.result
    };

    return Promise.resolve(heatMapPromise)
        .then(onSuccess)
};
