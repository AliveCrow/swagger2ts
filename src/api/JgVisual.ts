import axios, {AxiosHeaders} from 'axios'

//#region interface----------------------------------------------------------------
export interface DictDto {
    /**
    *	子集
    *	@format 
    */
    children: DictDto,
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
    *	层级
    *	@format int32
    */
    level: number,
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
export interface FieldVerify {
    /**
    *	验证类型
    *	@format 
    */
    code: string,
    /**
    *	最小值
    *	@format int32
    */
    max: number,
    /**
    *	最小值
    *	@format int32
    */
    min: number,
    /**
    *	正则表达式
    *	@format 
    */
    regexp: string,
}
export interface JsonField {
    /**
    *	子项
    *	@format 
    */
    children: JsonField,
    /**
    *	子项结果集合
    *	@format 
    */
    childrens: Array<any>,
    /**
    *	字典项
    *	@format 
    */
    dict: DictDto,
    /**
    *	字段属性
    *	@format 
    */
    fieldClass: string,
    /**
    *	字段英文名称
    *	@format 
    */
    fieldEn: string,
    /**
    *	字段名称
    *	@format 
    */
    fieldName: string,
    /**
    *	字段类型(field/map/table)
    *	@format 
    */
    fieldType: string,
    /**
    *	字段值
    *	@format 
    */
    fieldValue: string,
    /**
    *	验证规则
    *	@format 
    */
    fieldVerify: FieldVerify,
    /**
    *	是否是公共字段,(1是,0否)
    *	@format 
    */
    ifCommon: string,
    /**
    *	是否必填(1是,0否)
    *	@format 
    */
    ifRequired: string,
    /**
    *	key 字段唯一值
    *	@format 
    */
    key: string,
    /**
    *	
    *	@format 
    */
    pkey: string,
}
export interface ProjectDataVo {
    /**
    *	可视化数据,json
    *	@format 
    */
    fields: JsonField,
    /**
    *	主键
    *	@format int64
    */
    id: number,
    /**
    *	项目id
    *	@format int64
    */
    projectId: number,
    /**
    *	项目模板id
    *	@format int64
    */
    ptId: number,
}
export interface ProjectTemplateVo {
    /**
    *	别名
    *	@format 
    */
    alias: string,
    /**
    *	主键
    *	@format int64
    */
    id: number,
    /**
    *	項目ID
    *	@format 
    */
    projectId: string,
    /**
    *	模板ID
    *	@format 
    */
    templateId: string,
}
export interface ProjectVo {
    /**
    *	项目地址
    *	@format 
    */
    address: string,
    /**
    *	市
    *	@format 
    */
    city: string,
    /**
    *	封面
    *	@format 
    */
    cover: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	区县
    *	@format 
    */
    district: string,
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
    *	联系电话
    *	@format 
    */
    linkmanPhone: string,
    /**
    *	联系人照片
    *	@format 
    */
    linkmanPhoto: string,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	省
    *	@format 
    */
    province: string,
    /**
    *	项目开始时间
    *	@format 
    */
    startTime: string,
    /**
    *	状态 0锁定 1有效
    *	@format int32
    */
    status: number,
}
export interface TemplateVo {
    /**
    *	封面
    *	@format 
    */
    cover: string,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	模板替换字段,json
    *	@format 
    */
    fields: JsonField,
    /**
    *	页面效果图,多张图逗号分割
    *	@format 
    */
    imgs: string,
    /**
    *	状态 0锁定 1有效
    *	@format byte
    */
    status: string,
    /**
    *	模板ID
    *	@format int64
    */
    templateId: number,
    /**
    *	模板名称
    *	@format 
    */
    templateName: string,
    /**
    *	模板类型 1默认(项目模板), 2大屏模板
    *	@format byte
    */
    templateType: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	VUE模板编号,前端模板编号
    *	@format 
    */
    vueCode: string,
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
*   dc_項目数据
*/
function projectDataUsingGET({projectId}:{projectId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dc/project/data`,
        method: 'get',
        params: {projectId},
        headers
    })
}
/**
*   dc_用户的项目列表
*/
function listUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/dc/project/list`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   project_新增
*/
function addUsingPOST({vo}:{vo: ProjectVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   project_添加项目关联的用户
*/
function addUserUsingGET({projectId,userId}:{projectId: string,userId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/add/user`,
        method: 'get',
        params: {projectId,userId},
        headers
    })
}
/**
*   project-data_新增
*/
function addUsingPOST_1({vo}:{vo: ProjectDataVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   project-data_删除
*/
function deleteUsingGET_1({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   project-data_詳情
*/
function listUsingGET_2({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/info/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   project-data_列表
*/
function listUsingGET_3({createTimeFrom,createTimeTo,pageNum,pageSize,projectId,ptId,sortField,sortOrder,status,templateType}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,projectId?: string,ptId?: string,sortField?: string,sortOrder?: string,status?: number,templateType?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,projectId,ptId,sortField,sortOrder,status,templateType},
        headers
    })
}
/**
*   project-data_发布数据
*/
function publishUsingPOST({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/publish/${id}`,
        method: 'post',
        data: {id},
        headers
    })
}
/**
*   project-data_更新
*/
function updateUsingPOST_1({vo}:{vo: ProjectDataVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   project-data_下架数据
*/
function withdrawUsingPOST({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/data/withdraw/${id}`,
        method: 'post',
        data: {id},
        headers
    })
}
/**
*   project_删除项目关联的用户
*/
function delUserUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/del/user`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   project_删除
*/
function deleteUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   project_列表
*/
function listUsingGET_1({createTimeFrom,createTimeTo,pageNum,pageSize,projectName,sortField,sortOrder,status}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,projectName?: string,sortField?: string,sortOrder?: string,status?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,projectName,sortField,sortOrder,status},
        headers
    })
}
/**
*   project-template_新增
*/
function addUsingPOST_2({vo}:{vo: ProjectTemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/template/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   project-template_删除
*/
function deleteUsingGET_2({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/template/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   project-template_下载数据导入模板
*/
function downloadExcelUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/template/download/excel`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   project-template_导入数据
*/
function importExcelUsingPOST({file,id}:{file: File,id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/template/import`,
        method: 'post',
        data: {file,id},
        headers
    })
}
/**
*   project-template_詳情
*/
function listUsingGET_4({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/template/info/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   project-template_列表
*/
function listUsingGET_5({projectId,templateType}:{projectId?: string,templateType?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/template/list`,
        method: 'get',
        params: {projectId,templateType},
        headers
    })
}
/**
*   project_更新
*/
function updateUsingPOST({vo}:{vo: ProjectVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/update`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   project_项目关联的用户列表
*/
function userListUsingGET({projectId}:{projectId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/user/list`,
        method: 'get',
        params: {projectId},
        headers
    })
}
/**
*   template_新增
*/
function addUsingPOST_3({vo}:{vo: TemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/add`,
        method: 'post',
        data: {vo},
        headers
    })
}
/**
*   template_删除
*/
function deleteUsingGET_3({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   template_导入Excel获取表头数据
*/
function readExcelHeadUsingPOST({file,headNum}:{file: File,headNum: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/import/excel/head/${headNum}`,
        method: 'post',
        data: {file,headNum},
        headers
    })
}
/**
*   template_詳情
*/
function listUsingGET_6({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/info/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   template_列表
*/
function listUsingGET_7({createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status,templateName,templateType,tenantId}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: number,templateName?: string,templateType?: number,tenantId?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status,templateName,templateType,tenantId},
        headers
    })
}
/**
*   template-market_詳情
*/
function listUsingGET_9({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/market/info/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   template-market_列表
*/
function listUsingGET_8({templateType}:{templateType: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/market/list`,
        method: 'get',
        params: {templateType},
        headers
    })
}
/**
*   template_更新
*/
function updateUsingPOST_2({vo}:{vo: TemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/update`,
        method: 'post',
        data: {vo},
        headers
    })
}

export default {
    projectDataUsingGET,
    listUsingGET,
    addUsingPOST,
    addUserUsingGET,
    addUsingPOST_1,
    deleteUsingGET_1,
    listUsingGET_2,
    listUsingGET_3,
    publishUsingPOST,
    updateUsingPOST_1,
    withdrawUsingPOST,
    delUserUsingGET,
    deleteUsingGET,
    listUsingGET_1,
    addUsingPOST_2,
    deleteUsingGET_2,
    downloadExcelUsingGET,
    importExcelUsingPOST,
    listUsingGET_4,
    listUsingGET_5,
    updateUsingPOST,
    userListUsingGET,
    addUsingPOST_3,
    deleteUsingGET_3,
    readExcelHeadUsingPOST,
    listUsingGET_6,
    listUsingGET_7,
    listUsingGET_9,
    listUsingGET_8,
    updateUsingPOST_2,
}