import axios, {AxiosHeaders} from 'axios'

//#region interface----------------------------------------------------------------
export interface ContractCategoryVo {
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
export interface ContractField {
    /**
    *	子项
    *	@format 
    */
    children: ContractField,
    /**
    *	子项结果集合
    *	@format 
    */
    childrens: Array<any>,
    /**
    *	editable VUE表格字段,是否可编辑(0否,1是)
    *	@format 
    */
    editable: string,
    /**
    *	是否是excel字段(0否; 1默认,是)
    *	@format 
    */
    excelField: string,
    /**
    *	字段属性(string/number)
    *	@format 
    */
    fieldClass: string,
    /**
    *	字段英文名称
    *	@format 
    */
    fieldEn: string,
    /**
    *	关联的父级字段
    *	@format 
    */
    fieldEnP: string,
    /**
    *	字段名称
    *	@format 
    */
    fieldName: string,
    /**
    *	字段类型(field/table)
    *	@format 
    */
    fieldType: string,
    /**
    *	字段值
    *	@format 
    */
    fieldValue: string,
    /**
    *	公式(例如:(字段1+字段2))
    *	@format 
    */
    formula: string,
    /**
    *	是否是计算字段(0默认,1计算字段)
    *	@format 
    */
    ifCalculate: string,
    /**
    *	是否是公共字段,(1是,0否)
    *	@format 
    */
    ifCommon: string,
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
    /**
    *	表字段更新word的参数
    *	@format 
    */
    tableInfo: TableInfo,
    /**
    *	用途(replace替换,seal盖章,sign签字,user用户关联,add新增)
    *	@format 
    */
    useType: string,
}
export interface ContractsVo {
    /**
    *	合同分类ID
    *	@format int64
    */
    categoryId: number,
    /**
    *	数据id
    *	@format int64
    */
    contractId: number,
    /**
    *	合同名称
    *	@format 
    */
    contractName: string,
    /**
    *	协议模板字段,对应的用户数据 json
    *	@format 
    */
    fields: ContractField,
    /**
    *	所有者用户ID
    *	@format int64
    */
    ownerUid: number,
    /**
    *	项目id
    *	@format int64
    */
    projectId: number,
    /**
    *	是否需要生成pdf,0不生成,1生成
    *	@format int32
    */
    resetPdf: number,
    /**
    *	数据状态 0待验证 1有效 2无效
    *	@format byte
    */
    status: string,
    /**
    *	模板ID
    *	@format int64
    */
    templateId: number,
    /**
    *	模板存储路劲
    *	@format 
    */
    templateUrl: string,
}
export interface TableInfo {
    /**
    *	复制行,表的行索引
    *	@format int32
    */
    copyRowNo: number,
    /**
    *	插入行,表的行索引
    *	@format int32
    */
    insertRowNo: number,
    /**
    *	表编号,表的顺序号(0,1,2...)
    *	@format int32
    */
    tableNo: number,
}
export interface TemplateVo {
    /**
    *	合同分类ID
    *	@format int64
    */
    categoryId: number,
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	excel导入模板url
    *	@format 
    */
    excelUrl: string,
    /**
    *	模板替换字段,json
    *	@format 
    */
    fields: ContractField,
    /**
    *	项目id
    *	@format int64
    */
    projectId: number,
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
    *	模板存储路劲
    *	@format 
    */
    templateUrl: string,
    /**
    *	word,模板中的表数据
    *	@format 
    */
    wordTables: WordTableBiaoGeXiangQing,
}
export interface WordTableBiaoGeXiangQing {
    /**
    *	表中&#x27;${}&#x27;格式的替换字符串
    *	@format 
    */
    replaceStrings: Array<any>,
    /**
    *	表表字段详情
    *	@format 
    */
    tableFields: ContractField,
    /**
    *	word中的table索引
    *	@format int32
    */
    tableNo: number,
    /**
    *	表名
    *	@format 
    */
    title: string,
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
function addUsingPOST({categoryVo}:{categoryVo: ContractCategoryVo}, headers?: AxiosHeaders) {
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
function updateUsingPOST({categoryVo}:{categoryVo: ContractCategoryVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/category/update`,
        method: 'post',
        data: {categoryVo},
        headers
    })
}
/**
*   contracts_新增
*/
function addUsingPOST_1({contractsVo}:{contractsVo: ContractsVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/contracts/add`,
        method: 'post',
        data: {contractsVo},
        headers
    })
}
/**
*   contracts_删除
*/
function deleteUsingGET_1({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/contracts/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   contracts_导入数据
*/
function importExcel2UsingPOST({file,importNo,importType,templateId}:{file: File,importNo?: string,importType?: string,templateId?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/contracts/import`,
        method: 'post',
        data: {file,importNo,importType,templateId},
        headers
    })
}
/**
*   contracts_详情
*/
function infoUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/contracts/info/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   contracts_列表
*/
function listUsingGET_1({categoryId,contractName,createTimeFrom,createTimeTo,importNo,pageNum,pageSize,projectId,sortField,sortOrder,status,templateId}:{categoryId?: number,contractName?: string,createTimeFrom?: string,createTimeTo?: string,importNo?: string,pageNum?: number,pageSize?: number,projectId?: number,sortField?: string,sortOrder?: string,status?: number,templateId?: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/contracts/list`,
        method: 'get',
        params: {categoryId,contractName,createTimeFrom,createTimeTo,importNo,pageNum,pageSize,projectId,sortField,sortOrder,status,templateId},
        headers
    })
}
/**
*   contracts_更新
*/
function updateUsingPOST_1({contractsVo}:{contractsVo: ContractsVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/contracts/update`,
        method: 'post',
        data: {contractsVo},
        headers
    })
}
/**
*   template_新增
*/
function addUsingPOST_2({templateVo}:{templateVo: TemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/add`,
        method: 'post',
        data: {templateVo},
        headers
    })
}
/**
*   template_删除
*/
function deleteUsingGET_2({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   template_下载数据导入Excel模板
*/
function templateExcelUsingGET({templateId}:{templateId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/excel`,
        method: 'get',
        params: {templateId},
        headers
    })
}
/**
*   template_下载采集模板
*/
function templateExcelToGatherUsingGET({templateId}:{templateId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/excel/gather`,
        method: 'get',
        params: {templateId},
        headers
    })
}
/**
*   template_详情
*/
function infoUsingGET_1({templateId}:{templateId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/info/${templateId}`,
        method: 'get',
        params: {templateId},
        headers
    })
}
/**
*   template_列表
*/
function listUsingGET_2({categoryId,createTimeFrom,createTimeTo,pageNum,pageSize,projectId,sortField,sortOrder,status,templateName}:{categoryId?: number,createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,projectId?: number,sortField?: string,sortOrder?: string,status?: number,templateName?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/list`,
        method: 'get',
        params: {categoryId,createTimeFrom,createTimeTo,pageNum,pageSize,projectId,sortField,sortOrder,status,templateName},
        headers
    })
}
/**
*   template_模板名称列表,用于搜索筛选
*/
function templateNameListUsingGET({templateName}:{templateName: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/name/list`,
        method: 'get',
        params: {templateName},
        headers
    })
}
/**
*   template_更新
*/
function updateUsingPOST_2({templateVo}:{templateVo: TemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/update`,
        method: 'post',
        data: {templateVo},
        headers
    })
}
/**
*   template_uploadWord 上传协议模板,并获取模板变量字段
*/
function uploadWordGetFieldsUsingPOST({file}:{file: File}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/template/upload/word`,
        method: 'post',
        data: {file},
        headers
    })
}

export default {
    addUsingPOST,
    deleteUsingGET,
    listUsingGET,
    updateUsingPOST,
    addUsingPOST_1,
    deleteUsingGET_1,
    importExcel2UsingPOST,
    infoUsingGET,
    listUsingGET_1,
    updateUsingPOST_1,
    addUsingPOST_2,
    deleteUsingGET_2,
    templateExcelUsingGET,
    templateExcelToGatherUsingGET,
    infoUsingGET_1,
    listUsingGET_2,
    templateNameListUsingGET,
    updateUsingPOST_2,
    uploadWordGetFieldsUsingPOST,
}