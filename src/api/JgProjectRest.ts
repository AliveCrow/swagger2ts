import axios, {AxiosHeaders} from 'axios'

//#region interface----------------------------------------------------------------
export interface ModifyProjectInfoCommand {
    /**
    *	项目描述
    *	@format 
    */
    description: string,
    /**
    *	项目ID
    *	@format int64
    */
    id: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	项目编号
    *	@format 
    */
    projectNo: string,
}
export interface NewProjectCommand {
    /**
    *	项目描述
    *	@format 
    */
    description: string,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	项目编号
    *	@format 
    */
    projectNo: string,
}
export interface PagedList<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
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
    *	@format int32
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface PagedList<T> {
    /**
    *	
    *	@format int64
    */
    current: number,
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
    *	@format int32
    */
    size: number,
    /**
    *	
    *	@format int64
    */
    total: number,
}
export interface ProjectListQuery {
    /**
    *	分页页码
    *	@format int32
    */
    pageNum: number,
    /**
    *	分页大小
    *	@format int32
    */
    pageSize: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	项目编号
    *	@format 
    */
    projectNo: string,
    /**
    *	排序字段
    *	@format 
    */
    sortField: string,
    /**
    *	排序方向, ascend | descend | &#x27;&#x27;
    *	@format 
    */
    sortOrder: string,
}
export interface YingYongGuanLianXiangMuChaXun {
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	分页页码
    *	@format int32
    */
    pageNum: number,
    /**
    *	分页大小
    *	@format int32
    */
    pageSize: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	排序字段
    *	@format 
    */
    sortField: string,
    /**
    *	排序方向, ascend | descend | &#x27;&#x27;
    *	@format 
    */
    sortOrder: string,
}
export interface YingYongDeGuanLianXiangMuXinXi {
    /**
    *	项目ID
    *	@format int64
    */
    projectId: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
}
export interface TianJiaXiangMuYingYong {
    /**
    *	应用ID列表
    *	@format 
    */
    clientIds: Array<any>,
    /**
    *	项目ID
    *	@format int64
    */
    projectId: number,
}
export interface YiChuXiangMuYingYong {
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	项目ID
    *	@format int64
    */
    projectId: number,
}
export interface XiangMuLieBiaoXinXi {
    /**
    *	创建时间
    *	@format date-time
    */
    createTime: string,
    /**
    *	创建人ID
    *	@format int64
    */
    createUid: number,
    /**
    *	项目描述
    *	@format 
    */
    description: string,
    /**
    *	项目ID
    *	@format int64
    */
    id: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	项目编号
    *	@format 
    */
    projectNo: string,
}
export interface XiangMuMingCheng {
    /**
    *	项目ID
    *	@format int64
    */
    id: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
}
export interface XiangMuYingYongPeiZhiXiang {
    /**
    *	应用ID
    *	@format 
    */
    clientId: string,
    /**
    *	应用名称
    *	@format 
    */
    clientName: string,
}
export interface XiangMuXiangQing {
    /**
    *	创建时间
    *	@format date-time
    */
    createTime: string,
    /**
    *	创建人ID
    *	@format int64
    */
    createUid: number,
    /**
    *	项目描述
    *	@format 
    */
    description: string,
    /**
    *	项目ID
    *	@format int64
    */
    id: number,
    /**
    *	项目名称
    *	@format 
    */
    projectName: string,
    /**
    *	项目编号
    *	@format 
    */
    projectNo: string,
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
*   根据项目ID查询项目名称（跨租户）
*/
function getProjectNameCrossTenantsUsingGET({projectId}:{projectId: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/project/ct/name`,
        method: 'get',
        params: {projectId},
        headers
    })
}
/**
*   根据项目ID列表查询项目名称列表（跨租户）
*/
function getProjectNameListCrossTenantsUsingPOST({projectIds}:{projectIds: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/project/ct/names`,
        method: 'post',
        data: {projectIds},
        headers
    })
}
/**
*   根据项目ID查询项目名称（仅限当前租户）
*/
function getProjectNameUsingGET({projectId}:{projectId: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/project/name`,
        method: 'get',
        params: {projectId},
        headers
    })
}
/**
*   根据项目ID列表查询项目名称列表（仅限当前租户）
*/
function getProjectNameListUsingPOST({projectIds}:{projectIds: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/client/project/names`,
        method: 'post',
        data: {projectIds},
        headers
    })
}
/**
*   获取项目详情
*/
function getProjectDetailUsingGET({id}:{id: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/project/detail/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   更新项目信息
*/
function modifyProjectInfoUsingPOST({command}:{command: ModifyProjectInfoCommand}, headers?: AxiosHeaders) {
    return axios({
        url: `/project/info/update`,
        method: 'post',
        data: {command},
        headers
    })
}
/**
*   获取项目列表
*/
function getProjectListUsingPOST({query}:{query: ProjectListQuery}, headers?: AxiosHeaders) {
    return axios({
        url: `/project/list`,
        method: 'post',
        data: {query},
        headers
    })
}
/**
*   新增项目
*/
function newProjectUsingPOST({command}:{command: NewProjectCommand}, headers?: AxiosHeaders) {
    return axios({
        url: `/project/new`,
        method: 'post',
        data: {command},
        headers
    })
}
/**
*   添加项目应用
*/
function addProjectAppUsingPOST({command}:{command: TianJiaXiangMuYingYong}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/config/app/add`,
        method: 'post',
        data: {command},
        headers
    })
}
/**
*   获取项目应用配置列表
*/
function getProjectAppListUsingGET({projectId}:{projectId: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/config/app/list`,
        method: 'get',
        params: {projectId},
        headers
    })
}
/**
*   获取应用关联的项目列表
*/
function getClientRelatedProjectListUsingPOST({query}:{query: YingYongGuanLianXiangMuChaXun}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/config/app/related-projects/query`,
        method: 'post',
        data: {query},
        headers
    })
}
/**
*   移除项目应用
*/
function removeProjectAppUsingPOST({command}:{command: YiChuXiangMuYingYong}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/project/config/app/remove`,
        method: 'post',
        data: {command},
        headers
    })
}

export default {
    getProjectNameCrossTenantsUsingGET,
    getProjectNameListCrossTenantsUsingPOST,
    getProjectNameUsingGET,
    getProjectNameListUsingPOST,
    getProjectDetailUsingGET,
    modifyProjectInfoUsingPOST,
    getProjectListUsingPOST,
    newProjectUsingPOST,
    addProjectAppUsingPOST,
    getProjectAppListUsingGET,
    getClientRelatedProjectListUsingPOST,
    removeProjectAppUsingPOST,
}