import axios, {AxiosHeaders} from 'axios'

//#region interface----------------------------------------------------------------
export interface StoreAuthCodeVoDuiXiang {
    /**
    *	VR授权码
    *	@format 
    */
    authCode: string,
    /**
    *	ID
    *	@format 
    */
    ids: string,
}
export interface StoreVoDuiXiang {
    /**
    *	VR分类ID
    *	@format int64
    */
    categoryId: number,
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
    *	项目id
    *	@format int64
    */
    projectId: number,
    /**
    *	vr空间数据,json
    *	@format 
    */
    spaces: KongJianJiChuPeiZhi,
    /**
    *	状态 0草稿 1发布
    *	@format byte
    */
    status: string,
    /**
    *	VR名称
    *	@format 
    */
    vrName: string,
    /**
    *	VR编号
    *	@format 
    */
    vrNo: string,
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
export interface VRShuJuTongJi {
    /**
    *	项目的VR统计
    *	@format 
    */
    projects: XiangMu_VRShuJuTongJi,
    /**
    *	VR总数
    *	@format int64
    */
    total: number,
    /**
    *	用户的VR统计
    *	@format 
    */
    users: YongHu_VRShuJuTongJi,
}
export interface VrCategoryVo {
    /**
    *	分类ID
    *	@format int64
    */
    categoryId: number,
    /**
    *	分类名称
    *	@format 
    */
    categoryName: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	状态
    *	@format int32
    */
    status: number,
}
export interface YongHu_VRShuJuTongJi {
    /**
    *	用ID
    *	@format int64
    */
    createUid: number,
    /**
    *	用户详情
    *	@format 
    */
    createUser: UserDuiXiang,
    /**
    *	vr数量
    *	@format int64
    */
    vrCount: number,
}
export interface KongJianJiChuPeiZhi {
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
export interface XiangMu_VRShuJuTongJi {
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
    *	vr数量
    *	@format int64
    */
    vrCount: number,
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
*   category_新增
*/
function addUsingPOST({categoryVo}:{categoryVo: VrCategoryVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/category/add`,
        method: 'post',
        data: {categoryVo},
        headers
    })
}
/**
*   category_删除
*/
function deleteUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/category/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   category_分类列表
*/
function listUsingGET({categoryName,createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status}:{categoryName?: string,createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/category/list`,
        method: 'get',
        params: {categoryName,createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status},
        headers
    })
}
/**
*   category_更新
*/
function updateUsingPOST({categoryVo}:{categoryVo: VrCategoryVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/category/update`,
        method: 'post',
        data: {categoryVo},
        headers
    })
}
/**
*   vr-store_新增
*/
function addUsingPOST_1({vo}:{vo: StoreVoDuiXiang}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   vr-store_添加授权码
*/
function addAuthCodeUsingPOST({vo}:{vo: StoreAuthCodeVoDuiXiang}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/auth/code`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   vr-store_删除
*/
function deleteUsingGET_1({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   vr-store_获取VR访问地址
*/
function getVrLinkUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/link`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   vr-store_列表
*/
function listUsingGET_1({categoryId,createTimeFrom,createTimeTo,createUid,pageNum,pageSize,projectId,sortField,sortOrder,status,vrNo}:{categoryId?: number,createTimeFrom?: string,createTimeTo?: string,createUid?: string,pageNum?: number,pageSize?: number,projectId?: number,sortField?: string,sortOrder?: string,status?: string,vrNo?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/list`,
        method: 'get',
        params: {categoryId,createTimeFrom,createTimeTo,createUid,pageNum,pageSize,projectId,sortField,sortOrder,status,vrNo},
        headers
    })
}
/**
*   vr-store_下线
*/
function pushDownUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/push/down/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   vr-store_发布
*/
function pushUpUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/push/up/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   vr-store_VR二维码流
*/
function qrCodeUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/qr_code`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   vr-store_VR数据统计
*/
function statisticalUsingGET({createTimeFrom,createTimeTo,createUid,projectId}:{createTimeFrom?: string,createTimeTo?: string,createUid?: string,projectId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/statistical`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,createUid,projectId},
        headers
    })
}
/**
*   vr-store_更新
*/
function updateUsingPOST_1({vo}:{vo: StoreVoDuiXiang}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   vr-store_更新VR部分字段,vrNo/vrName/description
*/
function updateFieldUsingPOST({vo}:{vo: StoreVoDuiXiang}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-store/update/field`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   vr-task_列表
*/
function listUsingGET_2({storeId}:{storeId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/vr-task/list`,
        method: 'get',
        params: {storeId},
        headers
    })
}

export default {
    addUsingPOST,
    deleteUsingGET,
    listUsingGET,
    updateUsingPOST,
    addUsingPOST_1,
    addAuthCodeUsingPOST,
    deleteUsingGET_1,
    getVrLinkUsingGET,
    listUsingGET_1,
    pushDownUsingGET,
    pushUpUsingGET,
    qrCodeUsingGET,
    statisticalUsingGET,
    updateUsingPOST_1,
    updateFieldUsingPOST,
    listUsingGET_2,
}