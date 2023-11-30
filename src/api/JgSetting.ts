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
export interface IPage<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
    /**
    *	
    *	@format 
    */
    hitCount: boolean,
    /**
    *	
    *	@format int64
    */
    pages: number,
    /**
    *	
    *	@format 
    */
    records: Array<any>,
    /**
    *	
    *	@format 
    */
    searchCount: boolean,
    /**
    *	
    *	@format int64
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface IPage<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
    /**
    *	
    *	@format 
    */
    hitCount: boolean,
    /**
    *	
    *	@format int64
    */
    pages: number,
    /**
    *	
    *	@format 
    */
    records: Array<any>,
    /**
    *	
    *	@format 
    */
    searchCount: boolean,
    /**
    *	
    *	@format int64
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface IPage<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
    /**
    *	
    *	@format 
    */
    hitCount: boolean,
    /**
    *	
    *	@format int64
    */
    pages: number,
    /**
    *	
    *	@format 
    */
    records: Array<any>,
    /**
    *	
    *	@format 
    */
    searchCount: boolean,
    /**
    *	
    *	@format int64
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface IPage<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
    /**
    *	
    *	@format 
    */
    hitCount: boolean,
    /**
    *	
    *	@format int64
    */
    pages: number,
    /**
    *	
    *	@format 
    */
    records: Array<any>,
    /**
    *	
    *	@format 
    */
    searchCount: boolean,
    /**
    *	
    *	@format int64
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface IPage<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
    /**
    *	
    *	@format 
    */
    hitCount: boolean,
    /**
    *	
    *	@format int64
    */
    pages: number,
    /**
    *	
    *	@format 
    */
    records: Array<any>,
    /**
    *	
    *	@format 
    */
    searchCount: boolean,
    /**
    *	
    *	@format int64
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface ProductTenantVo {
    /**
    *	计时: 过期时间
    *	@format date-time
    */
    expTime: string,
    /**
    *	计数: 剩余数量
    *	@format int32
    */
    num: number,
    /**
    *	产品编号
    *	@format 
    */
    productId: string,
    /**
    *	主键
    *	@format int64
    */
    ptId: number,
    /**
    *	状态 0锁定 1有效
    *	@format int32
    */
    status: number,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	计数: 总数
    *	@format int32
    */
    total: number,
}
export interface ProductVo {
    /**
    *	产品类型 1计数, 2计时
    *	@format int32
    */
    category: number,
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	主键
    *	@format int64
    */
    id: number,
    /**
    *	产品名称
    *	@format 
    */
    productName: string,
    /**
    *	状态
    *	@format int32
    */
    status: number,
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
}
export interface YeWuXiTong_vo {
    /**
    *	业务系统名
    *	@format 
    */
    appName: string,
    /**
    *	类型,0内部系统,1业务系统, 2外部系统
    *	@format int32
    */
    category: number,
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
    *	主键
    *	@format int32
    */
    id: number,
    /**
    *	状态
    *	@format int32
    */
    status: number,
    /**
    *	网站地址
    *	@format 
    */
    website: string,
}
export interface YeWuXiTongBanBenJiLu_vo {
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	ID
    *	@format int64
    */
    id: number,
    /**
    *	发布时间
    *	@format 
    */
    releaseDate: string,
    /**
    *	状态 0锁定 1有效
    *	@format int32
    */
    status: number,
    /**
    *	版本
    *	@format 
    */
    version: string,
}
export interface ZiDian_vo {
    /**
    *	字典码
    *	@format 
    */
    code: string,
    /**
    *	主键
    *	@format int64
    */
    dictId: number,
    /**
    *	字典值
    *	@format 
    */
    dictKey: string,
    /**
    *	字典名称
    *	@format 
    */
    dictValue: string,
    /**
    *	父主键
    *	@format int64
    */
    parentId: number,
    /**
    *	字典备注
    *	@format 
    */
    remark: string,
    /**
    *	排序
    *	@format int32
    */
    sort: number,
    /**
    *	状态
    *	@format int32
    */
    status: number,
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
export interface ZuHu_vo {
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
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	租户名称
    *	@format 
    */
    tenantName: string,
}
export interface ZuHuYingYong_vo {
    /**
    *	应用Id
    *	@format 
    */
    clientId: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
}
export interface CaiDan_dto {
    /**
    *	应用名称
    *	@format 
    */
    appName: string,
    /**
    *	类型 0菜单 1按钮
    *	@format int32
    */
    category: number,
    /**
    *	子集
    *	@format 
    */
    children: CaiDan_dto,
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	对应路由组件component
    *	@format 
    */
    component: string,
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
    *	是否隐藏;1隐藏0不隐藏
    *	@format int32
    */
    hide: number,
    /**
    *	图标
    *	@format 
    */
    icon: string,
    /**
    *	菜单/按钮ID
    *	@format int64
    */
    menuId: number,
    /**
    *	菜单/按钮名称
    *	@format 
    */
    menuName: string,
    /**
    *	菜单/按钮名称Title
    *	@format 
    */
    menuTitle: string,
    /**
    *	上级菜单ID
    *	@format int64
    */
    parentId: number,
    /**
    *	对应路由path
    *	@format 
    */
    path: string,
    /**
    *	权限标识
    *	@format 
    */
    perms: string,
    /**
    *	排序
    *	@format int32
    */
    sort: number,
    /**
    *	状态
    *	@format int32
    */
    status: number,
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
}
export interface CaiDan_vo {
    /**
    *	类型 0菜单 1按钮
    *	@format int32
    */
    category: number,
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	对应路由组件component
    *	@format 
    */
    component: string,
    /**
    *	是否隐藏;1隐藏0不隐藏
    *	@format int32
    */
    hide: number,
    /**
    *	图标
    *	@format 
    */
    icon: string,
    /**
    *	菜单/按钮ID
    *	@format int64
    */
    menuId: number,
    /**
    *	菜单/按钮名称
    *	@format 
    */
    menuName: string,
    /**
    *	菜单/按钮名称Title
    *	@format 
    */
    menuTitle: string,
    /**
    *	上级菜单ID
    *	@format int64
    */
    parentId: number,
    /**
    *	对应路由path
    *	@format 
    */
    path: string,
    /**
    *	权限标识
    *	@format 
    */
    perms: string,
    /**
    *	排序
    *	@format int32
    */
    sort: number,
}
export interface HangZhengQuHua_vo {
    /**
    *	邮编
    *	@format int32
    */
    codeId: number,
    /**
    *	邮编父级
    *	@format int32
    */
    codePid: number,
    /**
    *	城市全称
    *	@format 
    */
    fullname: string,
    /**
    *	主键ID
    *	@format int32
    */
    id: number,
    /**
    *	纬度
    *	@format 
    */
    lat: number,
    /**
    *	1省2市3区
    *	@format byte
    */
    level: string,
    /**
    *	经度
    *	@format 
    */
    lon: number,
    /**
    *	标志
    *	@format 
    */
    name: string,
    /**
    *	备注
    *	@format 
    */
    note: string,
    /**
    *	上级分类ID
    *	@format int32
    */
    pid: number,
    /**
    *	层级路径
    *	@format 
    */
    pidPath: string,
    /**
    *	排序（同级有效）
    *	@format int32
    */
    sort: number,
    /**
    *	数据状态(1默认)
    *	@format int32
    */
    status: number,
    /**
    *	标题
    *	@format 
    */
    title: string,
}
export interface JiaoSe_dto {
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
    *	菜单id,逗号分隔
    *	@format 
    */
    menuIds: string,
    /**
    *	内置角色(0不是,1是)
    *	@format int32
    */
    readonly: number,
    /**
    *	角色描述
    *	@format 
    */
    remark: string,
    /**
    *	角色ID
    *	@format int64
    */
    roleId: number,
    /**
    *	角色名称
    *	@format 
    */
    roleName: string,
    /**
    *	排序
    *	@format int32
    */
    sort: number,
    /**
    *	状态
    *	@format int32
    */
    status: number,
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
}
export interface JiaoSe_vo {
    /**
    *	菜单id,逗号分隔
    *	@format 
    */
    menuId: string,
    /**
    *	角色描述
    *	@format 
    */
    remark: string,
    /**
    *	角色ID
    *	@format int64
    */
    roleId: number,
    /**
    *	角色名称
    *	@format 
    */
    roleName: string,
    /**
    *	排序
    *	@format int32
    */
    sort: number,
    /**
    *	状态
    *	@format int32
    */
    status: number,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
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
*   app_新增
*/
function addUsingPOST({clientVo}:{clientVo: YeWuXiTong_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app/add`,
        method: 'post',
        data: {clientVo},
        headers
    })
}
/**
*   app_列表
*/
function listUsingGET({appKey,appName,category,clientId,createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status}:{appKey?: string,appName?: string,category?: number,clientId?: string,createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app/list`,
        method: 'get',
        params: {appKey,appName,category,clientId,createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status},
        headers
    })
}
/**
*   app_所有应用列表
*/
function listAllUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app/list/all`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   app_修改
*/
function updateUsingPOST({clientVo}:{clientVo: YeWuXiTong_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app/update`,
        method: 'post',
        data: {clientVo},
        headers
    })
}
/**
*   app_versions_新增
*/
function addUsingPOST_1({vo}:{vo: YeWuXiTongBanBenJiLu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app_versions/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   app_versions_删除
*/
function deleteUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app_versions/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   app_versions_列表
*/
function listUsingGET_1({clientId,createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,version}:{clientId?: string,createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,version?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app_versions/list`,
        method: 'get',
        params: {clientId,createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,version},
        headers
    })
}
/**
*   app_versions_修改
*/
function updateUsingPOST_1({vo}:{vo: YeWuXiTongBanBenJiLu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/app_versions/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   dict_新增
*/
function addUsingPOST_2({dictVo}:{dictVo: ZiDian_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/dict/add`,
        method: 'post',
        data: {dictVo},
        headers
    })
}
/**
*   dict_删除
*/
function deleteDictsUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/dict/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   dict_列表
*/
function listUsingGET_2({code,createTimeFrom,createTimeTo,dictValue,pageNum,pageSize,sortField,sortOrder}:{code?: string,createTimeFrom?: string,createTimeTo?: string,dictValue?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/dict/list`,
        method: 'get',
        params: {code,createTimeFrom,createTimeTo,dictValue,pageNum,pageSize,sortField,sortOrder},
        headers
    })
}
/**
*   dict_修改
*/
function updateUsingPOST_2({dictVo}:{dictVo: ZiDian_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/dict/update`,
        method: 'post',
        data: {dictVo},
        headers
    })
}
/**
*   menu_新增
*/
function addUsingPOST_3({menuVo}:{menuVo: CaiDan_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/add`,
        method: 'post',
        data: {menuVo},
        headers
    })
}
/**
*   menu_删除菜单
*/
function deleteUsingGET_1({menuIds}:{menuIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/delete`,
        method: 'get',
        params: {menuIds},
        headers
    })
}
/**
*   menu_删除用户和租户menu的Redis数据
*/
function deleteRedisUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/delete/redis`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   menu_列表
*/
function listUsingGET_3({category,clientId,createTimeFrom,createTimeTo,hide,pageNum,pageSize,sortField,sortOrder}:{category?: string,clientId?: string,createTimeFrom?: string,createTimeTo?: string,hide?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/list`,
        method: 'get',
        params: {category,clientId,createTimeFrom,createTimeTo,hide,pageNum,pageSize,sortField,sortOrder},
        headers
    })
}
/**
*   menu_根据角色id,获取menuId
*/
function findMenuByRoleIdUsingGET({roleId}:{roleId: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/list/by/role`,
        method: 'get',
        params: {roleId},
        headers
    })
}
/**
*   menu_根据应用ID,获取Menu树形列表
*/
function findMenuByClientIdUsingGET({clientId}:{clientId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/list/${clientId}`,
        method: 'get',
        params: {clientId},
        headers
    })
}
/**
*   menu_根据应用ID和租户ID,获取Menu树形列表
*/
function getTreeMenuByClientIdAndTenantIdUsingGET({clientId,tenantId}:{clientId: string,tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/list/${tenantId}/${clientId}`,
        method: 'get',
        params: {clientId,tenantId},
        headers
    })
}
/**
*   获取父级菜单列表
*/
function getParentMenusUsingGET({clientId}:{clientId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/parent/menus`,
        method: 'get',
        params: {clientId},
        headers
    })
}
/**
*   menu_测试Redis
*/
function testRedisUsingGET({tenantId,userId}:{tenantId: string,userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/test/redis`,
        method: 'get',
        params: {tenantId,userId},
        headers
    })
}
/**
*   menu_修改
*/
function updateUsingPOST_3({menuVo}:{menuVo: CaiDan_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/menu/update`,
        method: 'post',
        data: {menuVo},
        headers
    })
}
/**
*   product_新增
*/
function addUsingPOST_4({vo}:{vo: ProductVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   product_列表
*/
function listUsingGET_4({category,clientId,createTimeFrom,createTimeTo,pageNum,pageSize,productId,productName,sortField,sortOrder,status}:{category?: number,clientId?: string,createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,productId?: string,productName?: string,sortField?: string,sortOrder?: string,status?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product/list`,
        method: 'get',
        params: {category,clientId,createTimeFrom,createTimeTo,pageNum,pageSize,productId,productName,sortField,sortOrder,status},
        headers
    })
}
/**
*   product_更新
*/
function updateUsingPOST_4({vo}:{vo: ProductVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   product-tenant_新增
*/
function addUsingPOST_5({vo}:{vo: ProductTenantVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product_tenant/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   product-tenant_删除用户和租户menu的Redis数据
*/
function deleteRedisUsingGET_1(headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product_tenant/delete/redis`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   product-tenant_列表
*/
function listUsingGET_5({createTimeFrom,createTimeTo,pageNum,pageSize,productName,sortField,sortOrder,status,tenantId}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,productName?: string,sortField?: string,sortOrder?: string,status?: number,tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product_tenant/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,productName,sortField,sortOrder,status,tenantId},
        headers
    })
}
/**
*   product-tenant_更新
*/
function updateUsingPOST_5({vo}:{vo: ProductTenantVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/product_tenant/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   region_列表
*/
function listUsingGET_7({codeId,fullname}:{codeId?: string,fullname?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/region/list`,
        method: 'get',
        params: {codeId,fullname},
        headers
    })
}
/**
*   region_获取子集列表
*/
function listUsingGET_6({codeId}:{codeId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/region/list/${codeId}`,
        method: 'get',
        params: {codeId},
        headers
    })
}
/**
*   region_修改
*/
function updateUsingPOST_6({regionVo}:{regionVo: HangZhengQuHua_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/region/update`,
        method: 'post',
        data: {regionVo},
        headers
    })
}
/**
*   role_新增
*/
function addUsingPOST_6({roleVo}:{roleVo: JiaoSe_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/role/add`,
        method: 'post',
        data: {roleVo},
        headers
    })
}
/**
*   role_检查角色名称是否可用
*/
function checkUsingGET({roleName,tenantId}:{roleName: string,tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/role/check/${tenantId}`,
        method: 'get',
        params: {roleName,tenantId},
        headers
    })
}
/**
*   role_列表
*/
function listUsingGET_9({createTimeFrom,createTimeTo,pageNum,pageSize,readonly,roleName,sortField,sortOrder,status,tenantId}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,readonly?: number,roleName?: string,sortField?: string,sortOrder?: string,status?: number,tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/role/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,readonly,roleName,sortField,sortOrder,status,tenantId},
        headers
    })
}
/**
*   role_获取租户下的角色列表
*/
function listUsingGET_8({tenantId}:{tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/role/list/${tenantId}`,
        method: 'get',
        params: {tenantId},
        headers
    })
}
/**
*   role_修改
*/
function updateUsingPOST_7({roleVo}:{roleVo: JiaoSe_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/role/update`,
        method: 'post',
        data: {roleVo},
        headers
    })
}
/**
*   tenant_新增租户
*/
function addUsingPOST_7({tenantVo}:{tenantVo: ZuHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/add`,
        method: 'post',
        data: {tenantVo},
        headers
    })
}
/**
*   tenant_查看租户关联的所有应用
*/
function getTenantClientsUsingGET({tenantId}:{tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/client/list`,
        method: 'get',
        params: {tenantId},
        headers
    })
}
/**
*   tenant_租户列表
*/
function listUsingGET_10({createTimeFrom,createTimeTo,linkman,pageNum,pageSize,sortField,sortOrder,status,tenantId,tenantName}:{createTimeFrom?: string,createTimeTo?: string,linkman?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: string,tenantId?: string,tenantName?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,linkman,pageNum,pageSize,sortField,sortOrder,status,tenantId,tenantName},
        headers
    })
}
/**
*   tenant_租户名称搜索列表
*/
function tenantsBynameUsingGET({tenantName}:{tenantName?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/list/by/name`,
        method: 'get',
        params: {tenantName},
        headers
    })
}
/**
*   tenant_移除租户的应用
*/
function removeClientUsingPOST({vo}:{vo: ZuHuYingYong_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/remove/client`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   tenant_设置租户的应用
*/
function addClientUsingPOST({vo}:{vo: ZuHuYingYong_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/set/client`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   tenant_修改租户
*/
function updateUsingPOST_8({tenantVo}:{tenantVo: ZuHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/tenant/update`,
        method: 'post',
        data: {tenantVo},
        headers
    })
}
/**
*   user_新增用户
*/
function addUsingPOST_8({user}:{user: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/user/add`,
        method: 'post',
        data: {user},
        headers
    })
}
/**
*   user_用户列表
*/
function userListUsingGET({createTimeFrom,createTimeTo,idCardNo,mobile,pageNum,pageSize,sortField,sortOrder,ssex,status,tenantId,username}:{createTimeFrom?: string,createTimeTo?: string,idCardNo?: string,mobile?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,ssex?: string,status?: string,tenantId?: string,username?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/user/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,idCardNo,mobile,pageNum,pageSize,sortField,sortOrder,ssex,status,tenantId,username},
        headers
    })
}
/**
*   user_重置密码
*/
function resetPasswordUsingGET({userIds}:{userIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/user/password/reset`,
        method: 'get',
        params: {userIds},
        headers
    })
}
/**
*   user_设置角色
*/
function setRoleUsingPOST({tenantId,userVo}:{tenantId: string,userVo: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/user/set/role/${tenantId}`,
        method: 'post',
        data: {tenantId,userVo},
        headers
    })
}
/**
*   user_修改用户
*/
function updateUsingPOST_9({user}:{user: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/admin/user/update`,
        method: 'post',
        data: {user},
        headers
    })
}

export default {
    addUsingPOST,
    listUsingGET,
    listAllUsingGET,
    updateUsingPOST,
    addUsingPOST_1,
    deleteUsingGET,
    listUsingGET_1,
    updateUsingPOST_1,
    addUsingPOST_2,
    deleteDictsUsingGET,
    listUsingGET_2,
    updateUsingPOST_2,
    addUsingPOST_3,
    deleteUsingGET_1,
    deleteRedisUsingGET,
    listUsingGET_3,
    findMenuByRoleIdUsingGET,
    findMenuByClientIdUsingGET,
    getTreeMenuByClientIdAndTenantIdUsingGET,
    getParentMenusUsingGET,
    testRedisUsingGET,
    updateUsingPOST_3,
    addUsingPOST_4,
    listUsingGET_4,
    updateUsingPOST_4,
    addUsingPOST_5,
    deleteRedisUsingGET_1,
    listUsingGET_5,
    updateUsingPOST_5,
    listUsingGET_7,
    listUsingGET_6,
    updateUsingPOST_6,
    addUsingPOST_6,
    checkUsingGET,
    listUsingGET_9,
    listUsingGET_8,
    updateUsingPOST_7,
    addUsingPOST_7,
    getTenantClientsUsingGET,
    listUsingGET_10,
    tenantsBynameUsingGET,
    removeClientUsingPOST,
    addClientUsingPOST,
    updateUsingPOST_8,
    addUsingPOST_8,
    userListUsingGET,
    resetPasswordUsingGET,
    setRoleUsingPOST,
    updateUsingPOST_9,
}