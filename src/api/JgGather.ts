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
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
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
export interface FormField {
    /**
    *	关联的字段
    *	@format 
    */
    associatedField: string,
    /**
    *	子项
    *	@format 
    */
    children: FormField,
    /**
    *	子项结果集合
    *	@format 
    */
    childrens: Array<any>,
    /**
    *	对应的字典
    *	@format 
    */
    correspondDictionary: string,
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
export interface FormTemplateVo {
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	模板采集字段,json
    *	@format 
    */
    fields: FormField,
    /**
    *	模板名称
    *	@format 
    */
    name: string,
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
    *	模板类型 1默认(采集), 2问卷
    *	@format byte
    */
    templateType: string,
    /**
    *	模板存储路劲
    *	@format 
    */
    templateUrl: string,
}
export interface FormTemplateDuiXiang {
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
    *	模板采集字段,json
    *	@format 
    */
    fields: FormField,
    /**
    *	模板名称
    *	@format 
    */
    name: string,
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
    *	主键ID
    *	@format int64
    */
    templateId: number,
    /**
    *	模板类型 1默认(采集), 2问卷
    *	@format byte
    */
    templateType: string,
    /**
    *	模板存储路劲
    *	@format 
    */
    templateUrl: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
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
    *	updateUser 更新人用户详情
    *	@format 
    */
    updateUser: UserDuiXiang,
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
export interface TaskDataVo {
    /**
    *	模板采集字段,json
    *	@format 
    */
    fields: FormField,
    /**
    *	任务数据ID
    *	@format int64
    */
    id: number,
    /**
    *	状态 0草稿 1提交
    *	@format byte
    */
    status: string,
    /**
    *	任务ID
    *	@format 
    */
    taskId: string,
}
export interface TaskDataDuiXiang {
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
    *	模板采集字段,json
    *	@format 
    */
    fields: FormField,
    /**
    *	主键ID
    *	@format int64
    */
    id: number,
    /**
    *	状态 0锁定 1有效
    *	@format byte
    */
    status: string,
    /**
    *	任务id
    *	@format int64
    */
    taskId: number,
    /**
    *	任务名称
    *	@format 
    */
    taskName: string,
    /**
    *	模板类型 1默认(采集), 2问卷
    *	@format byte
    */
    templateType: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
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
    *	updateUser 更新人用户详情
    *	@format 
    */
    updateUser: UserDuiXiang,
}
export interface TaskPublishVo {
    /**
    *	任务ID
    *	@format 
    */
    taskId: string,
    /**
    *	结束时间
    *	@format 
    */
    timeTo: string,
}
export interface TaskVo {
    /**
    *	描述
    *	@format 
    */
    description: string,
    /**
    *	模板采集字段,json
    *	@format 
    */
    fields: FormField,
    /**
    *	任务名称
    *	@format 
    */
    name: string,
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
    *	任务ID
    *	@format int64
    */
    taskId: number,
    /**
    *	模板类型 1默认(采集), 2问卷
    *	@format 
    */
    templateType: string,
}
export interface TaskDuiXiang {
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
    *	模板采集字段,json
    *	@format 
    */
    fields: FormField,
    /**
    *	是否关注,0未关注,1已关注
    *	@format byte
    */
    ifFollow: string,
    /**
    *	是否发布(1发布,0未发布)
    *	@format byte
    */
    ifPublish: string,
    /**
    *	任务名称
    *	@format 
    */
    name: string,
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
    *	主键ID
    *	@format int64
    */
    taskId: number,
    /**
    *	模板类型 1默认(采集), 2问卷
    *	@format byte
    */
    templateType: string,
    /**
    *	租户ID
    *	@format 
    */
    tenantId: string,
    /**
    *	开始时间
    *	@format 
    */
    timeFrom: string,
    /**
    *	结束时间
    *	@format 
    */
    timeTo: string,
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
    *	updateUser 更新人用户详情
    *	@format 
    */
    updateUser: UserDuiXiang,
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
*   dict_新增
*/
function addUsingPOST({dictVo}:{dictVo: ZiDian_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dict/add`,
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
        url: `/system/dict/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   dict_列表
*/
function listUsingGET({code,createTimeFrom,createTimeTo,dictValue,pageNum,pageSize,sortField,sortOrder}:{code?: string,createTimeFrom?: string,createTimeTo?: string,dictValue?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dict/list`,
        method: 'get',
        params: {code,createTimeFrom,createTimeTo,dictValue,pageNum,pageSize,sortField,sortOrder},
        headers
    })
}
/**
*   dict_修改
*/
function updateUsingPOST({dictVo}:{dictVo: ZiDian_vo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/dict/update`,
        method: 'post',
        data: {dictVo},
        headers
    })
}
/**
*   formTemplate_新增
*/
function addUsingPOST_1({formTemplateVo}:{formTemplateVo: FormTemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/add`,
        method: 'post',
        data: {formTemplateVo},
        headers
    })
}
/**
*   formTemplate_删除模板
*/
function deleteUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   formTemplate_表单excel模板
*/
function excelHeaderUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/excel/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   formTemplate_导入Excel获取表头数据
*/
function readExcelHeadUsingPOST({file,headNum}:{file: File,headNum: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/import/excel/head/${headNum}`,
        method: 'post',
        data: {file,headNum},
        headers
    })
}
/**
*   formTemplate_详情
*/
function infoUsingGET({templateId}:{templateId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/info`,
        method: 'get',
        params: {templateId},
        headers
    })
}
/**
*   formTemplate_列表
*/
function listUsingGET_1({createTimeFrom,createTimeTo,name,pageNum,pageSize,sortField,sortOrder,status,templateType}:{createTimeFrom?: string,createTimeTo?: string,name?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: string,templateType?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,name,pageNum,pageSize,sortField,sortOrder,status,templateType},
        headers
    })
}
/**
*   formTemplate_Test导入表头数据,用于测试
*/
function importExcelUsingPOST({file,headNum}:{file: File,headNum: number}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/test/import/${headNum}`,
        method: 'post',
        data: {file,headNum},
        headers
    })
}
/**
*   formTemplate_修改
*/
function updateUsingPOST_1({formTemplateVo}:{formTemplateVo: FormTemplateVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/form/template/update`,
        method: 'post',
        data: {formTemplateVo},
        headers
    })
}
/**
*   task_新增
*/
function addUsingPOST_2({taskVo}:{taskVo: TaskVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/add`,
        method: 'post',
        data: {taskVo},
        headers
    })
}
/**
*   taskData_新增
*/
function addUsingPOST_3({taskDataVo}:{taskDataVo: TaskDataVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/add`,
        method: 'post',
        data: {taskDataVo},
        headers
    })
}
/**
*   taskData_删除数据
*/
function deleteUsingGET_2({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   taskData_导出taskData数据
*/
function taskDataExportUsingGET({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/export/${taskId}`,
        method: 'get',
        params: {taskId},
        headers
    })
}
/**
*   taskData_taskDataExport2数据
*/
function taskDataExport2UsingGET({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/export2/${taskId}`,
        method: 'get',
        params: {taskId},
        headers
    })
}
/**
*   taskData_列表
*/
function listUsingGET_3({createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status,taskId,templateType}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: string,taskId?: string,templateType?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status,taskId,templateType},
        headers
    })
}
/**
*   taskData_测试导出taskData数据
*/
function test2ExportUsingGET({isMerge,taskId}:{isMerge: string,taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/test`,
        method: 'get',
        params: {isMerge,taskId},
        headers
    })
}
/**
*   taskData_测试验证taskData数据
*/
function testCheckUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/test/check`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   taskData_测试导出taskData数据
*/
function testExportNumUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/test/num/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   taskData_测试导出taskDataExport2数据
*/
function testExportUsingGET({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/test/${taskId}`,
        method: 'get',
        params: {taskId},
        headers
    })
}
/**
*   taskData_修改
*/
function updateUsingPOST_3({taskDataVo}:{taskDataVo: TaskDataVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/data/update`,
        method: 'post',
        data: {taskDataVo},
        headers
    })
}
/**
*   task_删除任务
*/
function deleteUsingGET_1({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/delete`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   task_详情
*/
function infoUsingGET_1({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/info`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   task_列表
*/
function listUsingGET_2({createTimeFrom,createTimeTo,ifPublish,name,pageNum,pageSize,sortField,sortOrder,templateType}:{createTimeFrom?: string,createTimeTo?: string,ifPublish?: string,name?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,templateType?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,ifPublish,name,pageNum,pageSize,sortField,sortOrder,templateType},
        headers
    })
}
/**
*   task_发布任务上架
*/
function putawayUsingPOST({taskPublishVo}:{taskPublishVo: TaskPublishVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/publish`,
        method: 'post',
        data: {taskPublishVo},
        headers
    })
}
/**
*   task_任务下架
*/
function publishUsingGET({ids}:{ids: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/sold/out`,
        method: 'get',
        params: {ids},
        headers
    })
}
/**
*   task_修改
*/
function updateUsingPOST_2({taskVo}:{taskVo: TaskVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/task/update`,
        method: 'post',
        data: {taskVo},
        headers
    })
}
/**
*   wechat_Dict 获取字典表code数据,code以逗号分隔
*/
function getListUsingGET({code}:{code: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/list`,
        method: 'get',
        params: {code},
        headers
    })
}
/**
*   wechat__TaskData 删除数据
*/
function taskDataDeleteUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/data/delete`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   wechat_TaskData 已完成/未完成的任务
*/
function taskDataListUsingGET({createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status,taskId,templateType}:{createTimeFrom?: string,createTimeTo?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,status?: string,taskId?: string,templateType?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/data/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,pageNum,pageSize,sortField,sortOrder,status,taskId,templateType},
        headers
    })
}
/**
*   wechat_TaskData 我的任务数量已完成/未完成
*/
function taskDataNumsUsingGET(headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/data/nums`,
        method: 'get',
        params: {},
        headers
    })
}
/**
*   wechat_TaskData 提交任务数据
*/
function taskDataSubmitUsingPOST({taskDataVo}:{taskDataVo: TaskDataVo}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/data/submit`,
        method: 'post',
        data: {taskDataVo},
        headers
    })
}
/**
*   wechat_TaskData 数据详情
*/
function taskDataInfoUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/data/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}
/**
*   wechat_Task 任务列表(广场)
*/
function taskListUsingGET({createTimeFrom,createTimeTo,ifPublish,name,pageNum,pageSize,sortField,sortOrder,templateType}:{createTimeFrom?: string,createTimeTo?: string,ifPublish?: string,name?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,templateType?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,ifPublish,name,pageNum,pageSize,sortField,sortOrder,templateType},
        headers
    })
}
/**
*   wechat_TaskUser 关注任务、取关任务
*/
function taskUserFollowUsingGET({taskId}:{taskId: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/user/follow`,
        method: 'get',
        params: {taskId},
        headers
    })
}
/**
*   wechat_Task 我收藏的任务列表
*/
function taskUserListUsingGET({createTimeFrom,createTimeTo,ifPublish,name,pageNum,pageSize,sortField,sortOrder,templateType}:{createTimeFrom?: string,createTimeTo?: string,ifPublish?: string,name?: string,pageNum?: number,pageSize?: number,sortField?: string,sortOrder?: string,templateType?: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/user/list`,
        method: 'get',
        params: {createTimeFrom,createTimeTo,ifPublish,name,pageNum,pageSize,sortField,sortOrder,templateType},
        headers
    })
}
/**
*   wechat_Task 任务详情
*/
function taskInfoUsingGET({id}:{id: string}, headers?: AxiosHeaders) {
    return axios({
        url: `/system/wechat/task/${id}`,
        method: 'get',
        params: {id},
        headers
    })
}

export default {
    addUsingPOST,
    deleteDictsUsingGET,
    listUsingGET,
    updateUsingPOST,
    addUsingPOST_1,
    deleteUsingGET,
    excelHeaderUsingGET,
    readExcelHeadUsingPOST,
    infoUsingGET,
    listUsingGET_1,
    importExcelUsingPOST,
    updateUsingPOST_1,
    addUsingPOST_2,
    addUsingPOST_3,
    deleteUsingGET_2,
    taskDataExportUsingGET,
    taskDataExport2UsingGET,
    listUsingGET_3,
    test2ExportUsingGET,
    testCheckUsingGET,
    testExportNumUsingGET,
    testExportUsingGET,
    updateUsingPOST_3,
    deleteUsingGET_1,
    infoUsingGET_1,
    listUsingGET_2,
    putawayUsingPOST,
    publishUsingGET,
    updateUsingPOST_2,
    getListUsingGET,
    taskDataDeleteUsingGET,
    taskDataListUsingGET,
    taskDataNumsUsingGET,
    taskDataSubmitUsingPOST,
    taskDataInfoUsingGET,
    taskListUsingGET,
    taskUserFollowUsingGET,
    taskUserListUsingGET,
    taskInfoUsingGET,
}