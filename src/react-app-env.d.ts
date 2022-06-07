/// <reference types="react-scripts" />
export type SortType ={
    NONE:(list:any)=>any,
    TITLE:(list:any)=>any,
    DATE:(list:any)=>any,
    SIZE:(list:any)=>any,
  }

export type ActionType ={
    type:String,
    payload:Any
}
export type StateType ={
    data?:any,
    loading:Boolean
}
export type SearchInputProps = {
    Change:((event:any)=>any),
    Value:string
}
export type ButtonProps ={
    btntext:String,
    css :String,
    onClick?:()=>any
}
export type ImageComponentProps={
    imgcss:String,
    hiddenDisplay ?:boolean,
    image :any
}
export type ImageWrapperProps = {
    imgcss:String,
    images ?:any,
    hiddenDisplay ?:boolean,
}
export type HeadingProps={
    title:String,
    description:String,
    btntext :{
        text:String,
        css:String,
        onClick?:()=>any
    }
}
export type ModalComponentProps  = {
    onOpen?:()=>any,
    onClose:()=>any,
    visible: boolean,
    children:React.ReactNode | React.ReactNode[],
    width:number
  }
export type AddIMageProps = {
    onClose:()=>any
}
export type SelectImagePageProps ={
    onCloseSelect:()=>any
}