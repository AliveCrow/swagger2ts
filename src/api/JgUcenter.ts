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
export interface PasswordVo {
    /**
    *	新密码
    *	@format 
    */
    newPassword: string,
    /**
    *	密码
    *	@format 
    */
    password: string,
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
export interface UsernameVo {
    /**
    *	key 验证码Key
    *	@format 
    */
    key: string,
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
    /**
    *	verifyCode 验证码
    *	@format 
    */
    verifyCode: string,
}
export interface YingYongDeCaiDan_DTO {
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
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	ICON
    *	@format 
    */
    icon: string,
    /**
    *	菜单
    *	@format 
    */
    menus: CaiDan_dto,
    /**
    *	应用状态
    *	@format int32
    */
    status: number,
    /**
    *	网站地址
    *	@format 
    */
    website: string,
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
export interface YongHuQuanXian_UserDataPermissionVo {
    /**
    *	数据权限范围： all（全部）、dept（部门）、myself（自己）
    *	@format 
    */
    dataScope: string,
    /**
    *	部门ID
    *	@format int64
    */
    deptId: number,
    /**
    *	用户id
    *	@format int64
    */
    userId: number,
}
export interface YongHuBuMen_UserDeptVo {
    /**
    *	部门ID
    *	@format int64
    */
    deptId: number,
    /**
    *	用户id
    *	@format int64
    */
    userId: number,
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
export interface BuMen_vo {
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
    *	上级部门ID
    *	@format int64
    */
    parentId: number,
    /**
    *	备注
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
*   dept_新增
*/
function addUsingPOST({vo}:{vo: BuMen_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   dept_删除
*/
function deleteUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   dept_获取部门数据详情
*/
function infoUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/info/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   dept_列表
*/
function listUsingGET_1({createTimeFrom,createTimeTo,deptName,pageNum,pageSize,sortField,sortOrder,status}:{createTimeFrom?: string,createTimeTo?: string,deptName?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,deptName,pageNum,pageSize,sortField,sortOrder,status},
        headers
    })
}
/**
*   dept_获取租户所有部门数据
*/
function listAllUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/list/all`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   dept_根据父级id获取子集部门
*/
function listUsingGET({parentId}:{parentId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/list/${parentId}`,
        method: 'get',
        params: {parentId},
        headers
    })
}
/**
*   dept_更新
*/
function updateUsingPOST({vo}:{vo: BuMen_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dept/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   menu_获取租户各个应用权限
*/
function listGroupClientUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/menu/list`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   menu_根据角色id,获取menuId
*/
function findMenuByRoleIdUsingGET({roleId}:{roleId: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/menu/list/by/role`,
        method: 'get',
        params: {roleId},
        headers
    })
}
/**
*   menu_根据应用ID和租户ID,获取Menu树形列表
*/
function getTreeMenuByClientIdAndTenantIdUsingGET({clientId}:{clientId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/menu/list/${clientId}`,
        method: 'get',
        params: {clientId},
        headers
    })
}
/**
*   role_新增
*/
function addUsingPOST_1({roleVo}:{roleVo: JiaoSe_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/role/add`,
        method: 'post',
        data: {roleVo},
        headers
    })
}
/**
*   role_检查角色名称是否可用
*/
function checkUsingGET({roleName}:{roleName: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/role/check`,
        method: 'get',
        params: {roleName},
        headers
    })
}
/**
*   role_列表
*/
function listUsingGET_2({createTimeFrom,createTimeTo,pageNum,pageSize,readonly,roleName,sortField,sortOrder,status,tenantId}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,readonly?: number,roleName?: string,sortField?: string,sortOrder?: string,status?: number,tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/role/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,readonly,roleName,sortField,sortOrder,status,tenantId},
        headers
    })
}
/**
*   role_获取租户下的角色列表
*/
function listByTenantIdUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/role/list/all`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   role_修改
*/
function updateUsingPOST_1({roleVo}:{roleVo: JiaoSe_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/role/update`,
        method: 'post',
        data: {roleVo},
        headers
    })
}
/**
*   tenant_查看租户关联的所有应用
*/
function getTenantClientsUsingGET({status}:{status?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/client/list`,
        method: 'get',
        params: {status},
        headers
    })
}
/**
*   tenant_邀请用户
*/
function inviteUserTenantUsingGET({userId}:{userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/invite/user`,
        method: 'get',
        params: {userId},
        headers
    })
}
/**
*   tenant_租户名称查询租户列表
*/
function tenantNameListUsingGET({tenantName}:{tenantName: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/list/by/name`,
        method: 'get',
        params: {tenantName},
        headers
    })
}
/**
*   tenant_我的租户列表
*/
function userTenantListUsingGET({status}:{status?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/list/by/user`,
        method: 'get',
        params: {status},
        headers
    })
}
/**
*   tenant_移除我的租户关联
*/
function removeOneselfUsingGET({tenantId}:{tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/remove/oneself`,
        method: 'get',
        params: {tenantId},
        headers
    })
}
/**
*   tenant_移除用户的租户关联
*/
function removeUserTenantUsingGET({userIds}:{userIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/remove/user`,
        method: 'get',
        params: {userIds},
        headers
    })
}
/**
*   tenant_设置我的租户关联
*/
function setUserTenantUsingGET({ifDefault,tenantId}:{ifDefault?: number,tenantId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/tenant/set/user`,
        method: 'get',
        params: {ifDefault,tenantId},
        headers
    })
}
/**
*   user_新增用户
*/
function addUsingPOST_2({user}:{user: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/add`,
        method: 'post',
        data: {user},
        headers
    })
}
/**
*   user_我的应用
*/
function getUserTenantClientsUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/clients`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   user_刪除用戶的角色
*/
function removeRoleUsingGET({userIds}:{userIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/del/role`,
        method: 'get',
        params: {userIds},
        headers
    })
}
/**
*   user_用户列表
*/
function userListUsingGET({createTimeFrom,createTimeTo,idCardNo,mobile,pageNum,pageSize,sortField,sortOrder,ssex,status,tenantId,username}:{createTimeFrom?: string,createTimeTo?: string,idCardNo?: string,mobile?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,ssex?: string,status?: string,tenantId?: string,username?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,idCardNo,mobile,pageNum,pageSize,sortField,sortOrder,ssex,status,tenantId,username},
        headers
    })
}
/**
*   user_邀请用户,搜索用户
*/
function listUsingGET_3({createTimeFrom,createTimeTo,idCardNo,mobile,pageNum,pageSize,sortField,sortOrder,ssex,status,tenantId,username}:{createTimeFrom?: string,createTimeTo?: string,idCardNo?: string,mobile?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,ssex?: string,status?: string,tenantId?: string,username?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/list/all`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,idCardNo,mobile,pageNum,pageSize,sortField,sortOrder,ssex,status,tenantId,username},
        headers
    })
}
/**
*   user_检查密码是否正确
*/
function checkPasswordUsingGET({password}:{password?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/password/check`,
        method: 'get',
        params: {password},
        headers
    })
}
/**
*   user_修改密码
*/
function editPasswordUsingPOST({passwordVo}:{passwordVo: PasswordVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/password/edit`,
        method: 'post',
        data: {passwordVo},
        headers
    })
}
/**
*   user_重置密码
*/
function resetPasswordUsingGET({userIds}:{userIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/password/reset`,
        method: 'get',
        params: {userIds},
        headers
    })
}
/**
*   user_修改个人信息
*/
function updateProfileUsingPOST({userVo}:{userVo: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/profile`,
        method: 'post',
        data: {userVo},
        headers
    })
}
/**
*   user_刪除用戶的数据权限
*/
function removeUserDataPermissionUsingGET({userIds}:{userIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/remove/data/permission`,
        method: 'get',
        params: {userIds},
        headers
    })
}
/**
*   user_刪除用戶的部门
*/
function removeUserDeptUsingGET({userIds}:{userIds: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/remove/dept`,
        method: 'get',
        params: {userIds},
        headers
    })
}
/**
*   user_设置用戶的数据权限
*/
function setUserDataPermissionUsingPOST({vo}:{vo: YongHuQuanXian_UserDataPermissionVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/set/data/permission`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   user_设置用戶的部门
*/
function setDeptUsingPOST({vo}:{vo: YongHuBuMen_UserDeptVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/set/dept`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   user_设置角色
*/
function setRoleUsingPOST({userVo}:{userVo: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/set/role`,
        method: 'post',
        data: {userVo},
        headers
    })
}
/**
*   user_修改用户
*/
function updateUsingPOST_2({user}:{user: YongHu_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/update`,
        method: 'post',
        data: {user},
        headers
    })
}
/**
*   user_修改用户账号
*/
function editUsernameUsingPOST({usernameVo}:{usernameVo: UsernameVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/user/username/edit`,
        method: 'post',
        data: {usernameVo},
        headers
    })
}

export default {
    addUsingPOST,
    deleteUsingGET,
    infoUsingGET,
    listUsingGET_1,
    listAllUsingGET,
    listUsingGET,
    updateUsingPOST,
    listGroupClientUsingGET,
    findMenuByRoleIdUsingGET,
    getTreeMenuByClientIdAndTenantIdUsingGET,
    addUsingPOST_1,
    checkUsingGET,
    listUsingGET_2,
    listByTenantIdUsingGET,
    updateUsingPOST_1,
    getTenantClientsUsingGET,
    inviteUserTenantUsingGET,
    tenantNameListUsingGET,
    userTenantListUsingGET,
    removeOneselfUsingGET,
    removeUserTenantUsingGET,
    setUserTenantUsingGET,
    addUsingPOST_2,
    getUserTenantClientsUsingGET,
    removeRoleUsingGET,
    userListUsingGET,
    listUsingGET_3,
    checkPasswordUsingGET,
    editPasswordUsingPOST,
    resetPasswordUsingGET,
    updateProfileUsingPOST,
    removeUserDataPermissionUsingGET,
    removeUserDeptUsingGET,
    setUserDataPermissionUsingPOST,
    setDeptUsingPOST,
    setRoleUsingPOST,
    updateUsingPOST_2,
    editUsernameUsingPOST,
}