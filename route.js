exports = module.exports = [{
    method: 'GET',
    path: '/api/user',
    impl: 'account.userById'
}, {
    method: 'POST',
    path: '/api/user',
    impl: 'account.createUser'
    }, {
    method: 'POST',
   path: '/extend/productInfo/productInfo.view',
    impl: 'account.productInfo'
},
{
    method: 'POST',
    path: '/extend/componenteEmployInfo/componenteEmployInfo.view',
    impl: 'account.componenteEmployInfo'
    },
    {
        method: 'POST',
        path: '/extend/exportFile/exportFile.do',
        impl: 'account.exportFile'
    },
    {
        method: 'POST',
        path: '/extend/componentBatchNoInfo/componentBatchNoInfo.view',
        impl: 'account.componentBatchNoInfo'
    },
    {
        method: 'POST',
        path: '/extend/productInfo/productInfo_detail.do',
        impl: 'account.componenteEmployInfo_detail'
    },
    {
        method: 'POST',
        path: '/extend/index/login.do',
        impl: 'account.login'
    },
    {
        method: 'POST',
        path: '/extend/index/index.do',
        impl: 'account.index'
    },
    
   
];