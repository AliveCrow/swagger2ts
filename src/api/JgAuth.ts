import axios, {AxiosHeaders} from 'axios'

//#region interface----------------------------------------------------------------
export interface ClientDuiXiang {
    /**
    *	appkey
    *	@format 
    */
    appKey: string,
    /**
    *	业务系统名
    *	@format 
    */
    appName: string,
    /**
    *	秘钥
    *	@format 
    */
    appSecret: string,
    /**
    *	类型,0内部系统,1业务系统, 2外部系统
    *	@format int32
    */
    category: number,
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	创建时间
    *	@format 
    */
    createTime: string,
    /**
    *	创建人ID
    *	@format int64
    */
    createUid: number,
    /**
    *	删除标记 0有效,1删除
    *	@format byte
    */
    deleteFlag: string,
    /**
    *	业务系统简介
    *	@format 
    */
    description: string,
    /**
    *	ICON
    *	@format 
    */
    icon: string,
    /**
    *	
    *	@format int32
    */
    id: number,
    /**
    *	父级应用ID
    *	@format 
    */
    parentId: string,
    /**
    *	盐
    *	@format 
    */
    salt: string,
    /**
    *	状态
    *	@format int32
    */
    status: number,
    /**
    *	租户关联应用的创建时间
    *	@format 
    */
    tenantClientCreateTime: string,
    /**
    *	主键
    *	@format int32
    */
    tenantClientId: number,
    /**
    *	状态
    *	@format int32
    */
    tenantClientStatus: number,
    /**
    *	租户关联应用的更新时间
    *	@format 
    */
    tenantClientUpdateTime: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	租户名称
    *	@format 
    */
    tenantName: string,
    /**
    *	更新时间
    *	@format 
    */
    updateTime: string,
    /**
    *	更新人ID
    *	@format int64
    */
    updateUid: number,
    /**
    *	网站地址
    *	@format 
    */
    website: string,
}
export interface TenantDuiXiang {
    /**
    *	联系地址
    *	@format 
    */
    address: string,
    /**
    *	联系电话
    *	@format 
    */
    contactTel: string,
    /**
    *	创建时间
    *	@format 
    */
    createTime: string,
    /**
    *	创建人ID
    *	@format int64
    */
    createUid: number,
    /**
    *	删除标记 0有效,1删除
    *	@format byte
    */
    deleteFlag: string,
    /**
    *	域名地址
    *	@format 
    */
    domain: string,
    /**
    *	主键
    *	@format int64
    */
    id: number,
    /**
    *	是否是默认的租户
    *	@format int32
    */
    ifDefault: number,
    /**
    *	联系人
    *	@format 
    */
    linkman: string,
    /**
    *	状态
    *	@format int32
    */
    status: number,
    /**
    *	租户应用
    *	@format 
    */
    tenantClients: ClientDuiXiang,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	租户名称
    *	@format 
    */
    tenantName: string,
    /**
    *	更新时间
    *	@format 
    */
    updateTime: string,
    /**
    *	更新人ID
    *	@format int64
    */
    updateUid: number,
    /**
    *	用户id
    *	@format int64
    */
    userId: number,
}
export interface ShouQuan_vo {
    /**
    *	小程序-appId
    *	@format 
    */
    appId: string,
    /**
    *	authCode 授权code
    *	@format 
    */
    authCode: string,
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	小程序-加密串
    *	@format 
    */
    encryptedData: string,
    /**
    *	授权类型,password/wechat/authorization/wechat_authcode/wechat_unionid
    *	@format 
    */
    grantType: string,
    /**
    *	小程序-偏移量
    *	@format 
    */
    iv: string,
    /**
    *	小程序-jsCode
    *	@format 
    */
    jsCode: string,
    /**
    *	用户密码
    *	@format 
    */
    password: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	用户名
    *	@format 
    */
    username: string,
}
export interface YongHu_dto {
    /**
    *	用户头像
    *	@format 
    */
    avatar: string,
    /**
    *	生日
    *	@format 
    */
    birthday: string,
    /**
    *	创建时间
    *	@format 
    */
    createTime: string,
    /**
    *	创建人ID
    *	@format int64
    */
    createUid: number,
    /**
    *	删除标记 0有效,1删除
    *	@format byte
    */
    deleteFlag: string,
    /**
    *	部门
    *	@format 
    */
    deptName: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	邮箱
    *	@format 
    */
    email: string,
    /**
    *	身份证号码
    *	@format 
    */
    idCardNo: string,
    /**
    *	联系电话
    *	@format 
    */
    mobile: string,
    /**
    *	昵称
    *	@format 
    */
    nickname: string,
    /**
    *	密码
    *	@format 
    */
    password: string,
    /**
    *	真实姓名
    *	@format 
    */
    realname: string,
    /**
    *	角色ids
    *	@format 
    */
    roleIds: string,
    /**
    *	角色名称
    *	@format 
    */
    roleNames: string,
    /**
    *	性别 0保密 1男 2女
    *	@format 
    */
    ssex: string,
    /**
    *	状态
    *	@format int32
    */
    status: number,
    /**
    *	租户ids
    *	@format 
    */
    tenantIds: string,
    /**
    *	租户名称
    *	@format 
    */
    tenantNames: string,
    /**
    *	微信unionid
    *	@format 
    */
    unionid: string,
    /**
    *	更新时间
    *	@format 
    */
    updateTime: string,
    /**
    *	更新人ID
    *	@format int64
    */
    updateUid: number,
    /**
    *	用户ID
    *	@format int64
    */
    userId: number,
    /**
    *	账户
    *	@format 
    */
    username: string,
}
export interface YongHu_vo {
    /**
    *	用户头像
    *	@format 
    */
    avatar: string,
    /**
    *	生日
    *	@format 
    */
    birthday: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	邮箱
    *	@format 
    */
    email: string,
    /**
    *	身份证号码
    *	@format 
    */
    idCardNo: string,
    /**
    *	联系电话
    *	@format 
    */
    mobile: string,
    /**
    *	昵称
    *	@format 
    */
    nickname: string,
    /**
    *	密码
    *	@format 
    */
    password: string,
    /**
    *	真实姓名
    *	@format 
    */
    realname: string,
    /**
    *	角色ids
    *	@format 
    */
    roleIds: string,
    /**
    *	性别 0保密 1男 2女 
    *	@format 
    */
    ssex: string,
    /**
    *	状态 0锁定 1有效
    *	@format 
    */
    status: string,
    /**
    *	租户ids
    *	@format 
    */
    tenantIds: string,
    /**
    *	微信unionid
    *	@format 
    */
    unionid: string,
    /**
    *	用户ID
    *	@format int64
    */
    userId: number,
    /**
    *	用户名
    *	@format 
    */
    username: string,
}
export interface RenZhengXinXi {
    /**
    *	
    *	@format 
    */
    exipreTime: string,
    /**
    *	
    *	@format 
    */
    permissions: Array<any>,
    /**
    *	
    *	@format 
    */
    roles: Array<any>,
    /**
    *	
    *	@format 
    */
    tenantDto: TenantDuiXiang,
    /**
    *	
    *	@format 
    */
    tenantDtos: TenantDuiXiang,
    /**
    *	
    *	@format 
    */
    tenantId: string,
    /**
    *	
    *	@format 
    */
    token: string,
    /**
    *	
    *	@format 
    */
    user: YongHu_dto,
}
export interface ServerResponse<T> {
    /**
    *
    *	@format int32
    */
    code: number,
    /**
    *
    *	@format
    */
    data: T,
    /**
    *
    *	@format
    */
    msg: string,
    }

//endregion----------------------------------------------------------------


/**
*   退出登录
*/
function logoutUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/auth/logout`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   获取认证token
*/
function tokenUsingPOST({authVo}:{authVo: ShouQuan_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/auth/token`,
        method: 'post',
        data: {authVo},
        headers
    })
}
/**
*   获取微信数据[SessionKey,OpenId,UnionId]
*/
function getWxSessionInfoUsingGET({appId,jsCode}:{appId: string,jsCode: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/auth/wx/session`,
        method: 'get',
        params: {appId,jsCode},
        headers
    })
}
/**
*   验证码
*/
function generatorCodeRedisUsingGET({height,len,type,width}:{height?: number,len?: number,type?: string,width?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/captcha/generator`,
        method: 'get',
        params: {height,len,type,width},
        headers
    })
}
/**
*   Demo 获取用户sessionInfo
*/
function demoUsingGET({code,mpId}:{code: string,mpId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/demo`,
        method: 'get',
        params: {code,mpId},
        headers
    })
}
/**
*   Demo2
*/
function demo2UsingGET({code,encryptedData,ivStr,mpId}:{code: string,encryptedData: string,ivStr: string,mpId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/demo2`,
        method: 'get',
        params: {code,encryptedData,ivStr,mpId},
        headers
    })
}
/**
*   shiroTest 测试shiro是否集成
*/
function shiroTestUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/shiro`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   shiroTest2 测试
*/
function shiroTest2UsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/shiro2`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   shiroTest3 测试
*/
function shiroTest3UsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/test`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   timeOut
*/
function timeOutUsingGET({userId}:{userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/timeOut`,
        method: 'get',
        params: {userId},
        headers
    })
}
/**
*   createUser
*/
function createUserUsingGET({mobile}:{mobile: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/user/${mobile}`,
        method: 'get',
        params: {mobile},
        headers
    })
}
/**
*   createUser1
*/
function createUser1UsingGET({mobile}:{mobile: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/user1`,
        method: 'get',
        params: {mobile},
        headers
    })
}
/**
*   createUser2
*/
function createUser2UsingPOST({userVo}:{userVo: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/demo/user2`,
        method: 'post',
        data: {userVo},
        headers
    })
}

export default {
    logoutUsingGET,
    tokenUsingPOST,
    getWxSessionInfoUsingGET,
    generatorCodeRedisUsingGET,
    demoUsingGET,
    demo2UsingGET,
    shiroTestUsingGET,
    shiroTest2UsingGET,
    shiroTest3UsingGET,
    timeOutUsingGET,
    createUserUsingGET,
    createUser1UsingGET,
    createUser2UsingPOST,
}