import axios, {AxiosHeaders} from 'axios'

//#region interface----------------------------------------------------------------
export interface BaseConfig {
    /**
    *	是否旋转
    *	@format int32
    */
    autorotate: number,
    /**
    *	默认缩放等级
    *	@format int32
    */
    defaultZoomLvl: number,
    /**
    *	最大缩放等级
    *	@format int32
    */
    maxFov: number,
    /**
    *	最小缩放等级
    *	@format int32
    */
    minFov: number,
    /**
    *	全景图质量
    *	@format int32
    */
    quality: number,
    /**
    *	版本
    *	@format int32
    */
    version: number,
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
export interface TaskVoDuiXiang {
    /**
    *	vr空间基础配置,json
    *	@format 
    */
    baseConfig: BaseConfig,
    /**
    *	标题
    *	@format 
    */
    caption: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	说明
    *	@format 
    */
    note: string,
    /**
    *	vr空间数据,json
    *	@format 
    */
    spaces: KongJianPeiZhi,
    /**
    *	状态 0待制作 1制作中 2制作完成 3制作失败
    *	@format byte
    */
    status: string,
    /**
    *	ID
    *	@format int64
    */
    taskId: number,
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
export interface VrIconVo {
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	名称
    *	@format 
    */
    iconName: string,
    /**
    *	Icon分类,target 目标、tab 标记
    *	@format 
    */
    iconType: string,
    /**
    *	icon地址
    *	@format 
    */
    iconUrl: string,
    /**
    *	ID
    *	@format int64
    */
    id: number,
    /**
    *	排序
    *	@format 
    */
    sort: string,
    /**
    *	状态 0锁定 1有效
    *	@format byte
    */
    status: string,
}
export interface VrTaskDuiXiang {
    /**
    *	vr空间基础配置,json
    *	@format 
    */
    baseConfig: BaseConfig,
    /**
    *	标题
    *	@format 
    */
    caption: string,
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
    *	createUser创建人用户详情
    *	@format 
    */
    createUser: UserDuiXiang,
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
    *	是否需要VR授权码,1需要授权,0不需要
    *	@format int32
    */
    ifAuth: number,
    /**
    *	说明
    *	@format 
    */
    note: string,
    /**
    *	点赞数
    *	@format int64
    */
    praiseNum: number,
    /**
    *	制作人ID
    *	@format int64
    */
    producedUid: number,
    /**
    *	制作人
    *	@format 
    */
    producedUser: UserDuiXiang,
    /**
    *	项目id
    *	@format int64
    */
    projectId: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	vr空间数据,json
    *	@format 
    */
    spaces: KongJianPeiZhi,
    /**
    *	状态 -1作废 0待制作 1制作中 2制作完成 3制作失败
    *	@format byte
    */
    status: string,
    /**
    *	VR仓库ID
    *	@format int64
    */
    storeId: number,
    /**
    *	ID
    *	@format int64
    */
    taskId: number,
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
    *	浏览量
    *	@format int64
    */
    viewNum: number,
    /**
    *	VrCode
    *	@format 
    */
    vrCode: string,
}
export interface ThreejsDuiXiangDeTongYongPeiZhi {
    /**
    *	位置
    *	@format 
    */
    position: TongYongZuoBiao,
    /**
    *	旋转
    *	@format 
    */
    rotate: TongYongZuoBiao,
    /**
    *	缩放
    *	@format 
    */
    scale: TongYongZuoBiao,
}
export interface BiaoZhuPeiZhi {
    /**
    *	空间描述
    *	@format 
    */
    description: string,
    /**
    *	提示 id
    *	@format 
    */
    id: string,
    /**
    *	位置
    *	@format 
    */
    position: TongYongZuoBiao,
    /**
    *	旋转
    *	@format 
    */
    rotate: TongYongZuoBiao,
    /**
    *	缩放
    *	@format 
    */
    scale: TongYongZuoBiao,
    /**
    *	跳转的空间 id
    *	@format 
    */
    targetSpaceId: string,
    /**
    *	提示图案纹理贴图
    *	@format 
    */
    textureUrl: string,
    /**
    *	空间标题
    *	@format 
    */
    title: string,
}
export interface KongJianWenLiTieTu_urlLieBiao {
    /**
    *	后侧贴图 url
    *	@format 
    */
    back: string,
    /**
    *	下侧贴图 url
    *	@format 
    */
    down: string,
    /**
    *	前侧贴图 url
    *	@format 
    */
    front: string,
    /**
    *	左侧贴图 url
    *	@format 
    */
    left: string,
    /**
    *	右侧贴图 url
    *	@format 
    */
    right: string,
    /**
    *	球形贴图 url
    *	@format 
    */
    sphere: string,
    /**
    *	上侧贴图 url
    *	@format 
    */
    up: string,
}
export interface KongJianPeiZhi {
    /**
    *	相机配置
    *	@format 
    */
    camera: ThreejsDuiXiangDeTongYongPeiZhi,
    /**
    *	空间贴图列表
    *	@format 
    */
    cubeSpaceTextureUrls: KongJianWenLiTieTu_urlLieBiao,
    /**
    *	空间描述
    *	@format 
    */
    description: string,
    /**
    *	空间 id
    *	@format 
    */
    id: string,
    /**
    *	其他
    *	@format 
    */
    other: any,
    /**
    *	提示配置列表
    *	@format 
    */
    tips: BiaoZhuPeiZhi,
    /**
    *	空间标题
    *	@format 
    */
    title: string,
    /**
    *	box盒模型, sphere球形
    *	@format 
    */
    type: string,
}
export interface TongYongZuoBiao {
    /**
    *	x 轴坐标
    *	@format int32
    */
    x: number,
    /**
    *	y 轴坐标
    *	@format int32
    */
    y: number,
    /**
    *	z 轴坐标
    *	@format int32
    */
    z: number,
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
*   vr-icon_新增
*/
function addUsingPOST({iconVo}:{iconVo: VrIconVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/add`,
        method: 'post',
        data: {iconVo},
        headers
    })
}
/**
*   vr-icon_批量新增
*/
function addListUsingPOST({iconVos}:{iconVos: VrIconVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/add/list`,
        method: 'post',
        data: {iconVos},
        headers
    })
}
/**
*   vr-icon_根据iconType获取系统ICON列表
*/
function getDefaultListByIconTypeUsingGET({iconType}:{iconType: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/default/list/by/type`,
        method: 'get',
        params: {iconType},
        headers
    })
}
/**
*   vr-icon_删除
*/
function deleteUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   vr-icon_列表
*/
function listUsingGET({createTimeFrom,createTimeTo,iconName,iconType,pageNum,pageSize,sortField,sortOrder,status}:{createTimeFrom?: string,createTimeTo?: string,iconName?: string,iconType?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,iconName,iconType,pageNum,pageSize,sortField,sortOrder,status},
        headers
    })
}
/**
*   vr-icon_根据iconType获取列表
*/
function getListByIconTypeUsingGET({iconType}:{iconType: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/list/by/type`,
        method: 'get',
        params: {iconType},
        headers
    })
}
/**
*   vr-icon_更新
*/
function updateUsingPOST({iconVo}:{iconVo: VrIconVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-icon/update`,
        method: 'post',
        data: {iconVo},
        headers
    })
}
/**
*   vr-task_取消收藏
*/
function cancelCollectUsingPOST({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/cancel/collect/${taskId}`,
        method: 'post',
        data: {taskId},
        headers
    })
}
/**
*   vr-task_我的收藏列表
*/
function collectlistUsingGET({createTimeFrom,createTimeTo,createUid,pageNum,pageSize,projectId,sortField,sortOrder,status,storeId}:{createTimeFrom?: string,createTimeTo?: string,createUid?: number,pageNum?: number,pageSize?: number,projectId?: number,sortField?: string,sortOrder?: string,status?: string,storeId?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/collect/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,createUid,pageNum,pageSize,projectId,sortField,sortOrder,status,storeId},
        headers
    })
}
/**
*   vr-task_领取、收藏任务
*/
function collectUsingPOST({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/collect/${taskId}`,
        method: 'post',
        data: {taskId},
        headers
    })
}
/**
*   vr-task_详情
*/
function detailsUsingGET({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/details`,
        method: 'get',
        params: {taskId},
        headers
    })
}
/**
*   vr-task_任务列表
*/
function listUsingGET_1({createTimeFrom,createTimeTo,createUid,pageNum,pageSize,projectId,sortField,sortOrder,status,storeId}:{createTimeFrom?: string,createTimeTo?: string,createUid?: number,pageNum?: number,pageSize?: number,projectId?: number,sortField?: string,sortOrder?: string,status?: string,storeId?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,createUid,pageNum,pageSize,projectId,sortField,sortOrder,status,storeId},
        headers
    })
}
/**
*   vr-task_更新
*/
function updateUsingPOST_1({vo}:{vo: TaskVoDuiXiang}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   vr-view_Vr数据详情
*/
function infoUsingGET({code}:{code: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-view/info/${code}`,
        method: 'get',
        params: {code},
        headers
    })
}
/**
*   vr-view_Vr点赞
*/
function praiseUsingGET({code}:{code: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-view/praise/${code}`,
        method: 'get',
        params: {code},
        headers
    })
}
/**
*   vr-view_VR授权码验证
*/
function verifyUsingGET({auth_code,store_id}:{auth_code: string,store_id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-view/verify/auth/code`,
        method: 'get',
        params: {auth_code,store_id},
        headers
    })
}

export default {
    addUsingPOST,
    addListUsingPOST,
    getDefaultListByIconTypeUsingGET,
    deleteUsingGET,
    listUsingGET,
    getListByIconTypeUsingGET,
    updateUsingPOST,
    cancelCollectUsingPOST,
    collectlistUsingGET,
    collectUsingPOST,
    detailsUsingGET,
    listUsingGET_1,
    updateUsingPOST_1,
    infoUsingGET,
    praiseUsingGET,
    verifyUsingGET,
}