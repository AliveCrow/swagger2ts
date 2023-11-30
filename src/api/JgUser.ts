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
export interface DictDuiXiang {
    /**
    *	
    *	@format 
    */
    children: DictDuiXiang,
    /**
    *	字典码
    *	@format 
    */
    code: string,
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
export interface ProductTenantLogVo {
    /**
    *	创建人ID
    *	@format int64
    */
    createUid: number,
    /**
    *	备注
    *	@format 
    */
    node: string,
    /**
    *	數量
    *	@format int32
    */
    num: number,
    /**
    *	产品编号
    *	@format 
    */
    productId: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
}
export interface ProductTenantDuiXiang {
    /**
    *	产品类型 1计数, 2计时
    *	@format int32
    */
    category: number,
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
    *	计时: 过期时间
    *	@format 
    */
    expTime: string,
    /**
    *	产品编号
    *	@format 
    */
    productId: string,
    /**
    *	产品名称
    *	@format 
    */
    productName: string,
    /**
    *	主键1
    *	@format int64
    */
    ptId: number,
    /**
    *	状态 0锁定 1有效
    *	@format int32
    */
    status: number,
    /**
    *	计数: 剩余数量
    *	@format int32
    */
    stock: number,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	计数: 采购数量
    *	@format int32
    */
    total: number,
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
export interface RegionDuiXiang {
    /**
    *	子集
    *	@format 
    */
    children: RegionDuiXiang,
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
export interface UserDataPermissionDuiXiang {
    /**
    *	数据权限范围： all（全部）、dept（部门）、myself（自己）
    *	@format 
    */
    dataScope: string,
    /**
    *	部门ID
    *	@format 
    */
    deptId: string,
    /**
    *	部门和子集部门Id
    *	@format 
    */
    deptIds: Array<any>,
    /**
    *	主键
    *	@format int64
    */
    id: number,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	用户id
    *	@format int64
    */
    userId: number,
}
export interface UserDepartmentDuiXiang {
    /**
    *	部门ID
    *	@format int64
    */
    deptId: number,
    /**
    *	部门名称
    *	@format 
    */
    deptName: string,
    /**
    *	主键
    *	@format int64
    */
    id: number,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	用户id
    *	@format int64
    */
    userId: number,
}
export interface UserDuiXiang {
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
    *	用户权限
    *	@format 
    */
    dataPermission: UserDataPermissionDuiXiang,
    /**
    *	删除标记 0有效,1删除
    *	@format byte
    */
    deleteFlag: string,
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
    *	用户部门
    *	@format 
    */
    userDept: UserDepartmentDuiXiang,
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
*   Dict_获取字典表code数据,code以逗号分隔
*/
function getListUsingGET({code}:{code: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/dict/getList`,
        method: 'get',
        params: {code},
        headers
    })
}
/**
*   Dict_获取字典表对应值
*/
function getValueUsingGET({code,dictKey}:{code: string,dictKey: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/dict/getValue`,
        method: 'get',
        params: {code,dictKey},
        headers
    })
}
/**
*   检查租户产品是否有效
*/
function checkProductTenantUsingGET({productId,tenantId}:{productId: string,tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/product/tenant/check`,
        method: 'get',
        params: {productId,tenantId},
        headers
    })
}
/**
*   根据产品Id获取租户相关产数据
*/
function getProductTenantByIDUsingGET({productId,tenantId}:{productId: string,tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/product/tenant/list`,
        method: 'get',
        params: {productId,tenantId},
        headers
    })
}
/**
*   记录产品使用情况
*/
function saveProductTenantLogUsingPOST({vo}:{vo: ProductTenantLogVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/product/tenant/save/log`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   Region_根据codeID获取行政区子集数据
*/
function getListUsingGET_2({codeId}:{codeId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/region/getList`,
        method: 'get',
        params: {codeId},
        headers
    })
}
/**
*   Region_获取所有行政区数据
*/
function getTreeListAllUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/client/region/getTreeListAll`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   Region_获取指定CodeId行政区数据
*/
function getValueUsingGET_2({codeId}:{codeId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/region/getValue`,
        method: 'get',
        params: {codeId},
        headers
    })
}
/**
*   User_获取用户信息
*/
function getUserUsingGET({username}:{username: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/shiro/user/getUser`,
        method: 'get',
        params: {username},
        headers
    })
}
/**
*   User_通过UserId,获取用户信息
*/
function getUserByIdUsingGET({userId}:{userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/shiro/user/getUserById`,
        method: 'get',
        params: {userId},
        headers
    })
}
/**
*   User_获取用户租户权限信息
*/
function getUserPermissionsUsingGET({tenantId,userId}:{tenantId: string,userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/shiro/user/getUserPermissions`,
        method: 'get',
        params: {tenantId,userId},
        headers
    })
}
/**
*   User_获取用户租户角色信息
*/
function getUserRolesUsingGET({tenantId,userId}:{tenantId: string,userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/shiro/user/getUserRoles`,
        method: 'get',
        params: {tenantId,userId},
        headers
    })
}
/**
*   User_获取用户的(有效)租户信息
*/
function getUserTenantUsingGET({userId}:{userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/shiro/user/getUserTenant`,
        method: 'get',
        params: {userId},
        headers
    })
}
/**
*   获取租户的应用
*/
function getClientsByTenantIdUsingGET({tenantId}:{tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/tenant/clients`,
        method: 'get',
        params: {tenantId},
        headers
    })
}
/**
*   UserClient_创建用户
*/
function addUsingPOST({user}:{user: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/add`,
        method: 'post',
        data: {user},
        headers
    })
}
/**
*   UserClient_根据用户ID获取多个用户信息
*/
function getUsersByUserIdsUsingGET({isAll,userIds}:{isAll: boolean,userIds: Array<any>}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/by/userIds`,
        method: 'get',
        params: {isAll,userIds},
        headers
    })
}
/**
*   UserClient_获取用户数据权限
*/
function getUserDataPermissionUsingGET({tenantId,userId}:{tenantId: string,userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/data/permission`,
        method: 'get',
        params: {tenantId,userId},
        headers
    })
}
/**
*   UserClient_获取用户部門
*/
function getUserDeptUsingGET({tenantId,userId}:{tenantId: string,userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/dept`,
        method: 'get',
        params: {tenantId,userId},
        headers
    })
}
/**
*   UserClient_更新用户
*/
function updateUsingPOST({user}:{user: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/update`,
        method: 'post',
        data: {user},
        headers
    })
}
/**
*   UserClient_根据电话获取单个用户信息
*/
function getUsersByMobileUsingGET({mobile}:{mobile: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/users/by/mobile`,
        method: 'get',
        params: {mobile},
        headers
    })
}
/**
*   UserClient_根据电话list获取多个用户信息
*/
function getUsersByMobilesUsingGET({mobiles}:{mobiles: Array<any>}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/user/users/by/mobiles`,
        method: 'get',
        params: {mobiles},
        headers
    })
}
/**
*   Dict_获取字典表对应值
*/
function getValueUsingGET_1({code,dictKey}:{code: string,dictKey: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dict/code`,
        method: 'get',
        params: {code,dictKey},
        headers
    })
}
/**
*   Dict_获取字典表code数据,code以逗号分隔
*/
function getListUsingGET_1({code}:{code: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dict/list`,
        method: 'get',
        params: {code},
        headers
    })
}
/**
*   home_租戶/用户/访客数量
*/
function indexUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/home/index`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   home_测试sessionID
*/
function testUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/home/test`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   home_版本记录
*/
function versionsUsingGET({createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/home/versions`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder},
        headers
    })
}
/**
*   获取用户Vue路由菜单
*/
function getUserRoutersUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/menu/user/router`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   product_查看租户产品详情
*/
function infoUsingGET({productId}:{productId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/product/info`,
        method: 'get',
        params: {productId},
        headers
    })
}
/**
*   product_查看租户产品列表
*/
function listUsingGET_2({createTimeFrom,createTimeTo,pageNum,pageSize,productName,sortField,sortOrder,status,tenantId}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,productName?: string,sortField?: string,sortOrder?: string,status?: number,tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/product/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,productName,sortField,sortOrder,status,tenantId},
        headers
    })
}
/**
*   Region_获取指定CodeId行政区数据
*/
function getValueUsingGET_3({codeId}:{codeId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/region/code`,
        method: 'get',
        params: {codeId},
        headers
    })
}
/**
*   Region_根据codeID获取行政区子集数据
*/
function getListUsingGET_3({codeId}:{codeId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/region/list`,
        method: 'get',
        params: {codeId},
        headers
    })
}
/**
*   Region_获取所有行政区数据
*/
function getTreeListAllUsingGET_1(headers?: AxiosHeaders) {
    return axios({
        url: `/system/region/list/all`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   syslog_错误日志列表
*/
function logErrorListUsingGET({createTimeFrom,createTimeTo,pageNum,pageSize,serviceId,sortField,sortOrder,tenantId}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,serviceId?: string,sortField?: string,sortOrder?: string,tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/syslog/error/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,serviceId,sortField,sortOrder,tenantId},
        headers
    })
}
/**
*   syslog_操作日志列表
*/
function listUsingGET_1({createTimeFrom,createTimeTo,pageNum,pageSize,serviceId,sortField,sortOrder,tenantId,type}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,serviceId?: string,sortField?: string,sortOrder?: string,tenantId?: string,type?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/syslog/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,serviceId,sortField,sortOrder,tenantId,type},
        headers
    })
}
/**
*   syslog_登录日志列表
*/
function listUsingGET({createTimeFrom,createTimeTo,grantType,pageNum,pageSize,sortField,sortOrder,tenantId,type,userId,username}:{createTimeFrom?: string,createTimeTo?: string,grantType?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,tenantId?: string,type?: string,userId?: string,username?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/syslog/login/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,grantType,pageNum,pageSize,sortField,sortOrder,tenantId,type,userId,username},
        headers
    })
}
/**
*   tenant_查看租户关联的所有应用
*/
function getTenantClientsUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/clients`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   user_用户授权登录二维码
*/
function getUserAuthQRCodeUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/auth/qr_code`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   检查用户字段是否可用,用户名[username]/手机号码[mobile]/身份证[IdCardNo]
*/
function checkFieldUsingGET({fieldKey,fieldValue,userId}:{fieldKey: string,fieldValue: string,userId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/check`,
        method: 'get',
        params: {fieldKey,fieldValue,userId},
        headers
    })
}
/**
*   user_检查用户是否是默认密码
*/
function checkDefaultPasswordUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/check/default/password`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   user_用户详情
*/
function detailUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/detail`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   user_根据用户姓名/手机号码搜索租户下的用户信息
*/
function getUserNamesByRealnameUsingGET({keyword}:{keyword: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/list/name`,
        method: 'get',
        params: {keyword},
        headers
    })
}

export default {
    getListUsingGET,
    getValueUsingGET,
    checkProductTenantUsingGET,
    getProductTenantByIDUsingGET,
    saveProductTenantLogUsingPOST,
    getListUsingGET_2,
    getTreeListAllUsingGET,
    getValueUsingGET_2,
    getUserUsingGET,
    getUserByIdUsingGET,
    getUserPermissionsUsingGET,
    getUserRolesUsingGET,
    getUserTenantUsingGET,
    getClientsByTenantIdUsingGET,
    addUsingPOST,
    getUsersByUserIdsUsingGET,
    getUserDataPermissionUsingGET,
    getUserDeptUsingGET,
    updateUsingPOST,
    getUsersByMobileUsingGET,
    getUsersByMobilesUsingGET,
    getValueUsingGET_1,
    getListUsingGET_1,
    indexUsingGET,
    testUsingGET,
    versionsUsingGET,
    getUserRoutersUsingGET,
    infoUsingGET,
    listUsingGET_2,
    getValueUsingGET_3,
    getListUsingGET_3,
    getTreeListAllUsingGET_1,
    logErrorListUsingGET,
    listUsingGET_1,
    listUsingGET,
    getTenantClientsUsingGET,
    getUserAuthQRCodeUsingGET,
    checkFieldUsingGET,
    checkDefaultPasswordUsingGET,
    detailUsingGET,
    getUserNamesByRealnameUsingGET,
}