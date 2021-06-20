import { IActionReducer } from '../../shared/hooks/useStore'
import { format, subDays, isWithinInterval } from 'date-fns';
import { subMonths } from 'date-fns/esm';
import axios from 'axios'
import useStore, { IModelStore, IStore, IDispatch, ISelect } from '../../shared/hooks/useStore';

export interface customerData {
    date: string
    user_count:string
    login_method: {[key:string]:number}[]
    attribution_type: {[key:string]:number}[]
    attribution_source: {[key:string]:number}[]
    os: {[key:string]:number}[]
    os_version: {[key:string]:number}[]
}

export interface IStateReducer {
    new_registrationMap: Map<string, any>
    new_registration: customerData[]
    memberMap: Map<string, any>
    member: customerData[]
    firstQuoteMemberMap: Map<string, any>
    firstQuoteMember: customerData[]
    customerMap: Map<string, any>
    customer: customerData[]
}

const state: IStateReducer = {
    new_registrationMap: new Map(),
    new_registration: [],
    memberMap: new Map(),
    member: [],
    firstQuoteMemberMap: new Map(),
    firstQuoteMember: [],
    customerMap: new Map(),
    customer: []
}


const reducer = {
    setInitialData: (global: any, state: IStateReducer, action: IActionReducer ) => {
    
        const newMap = new Map(action.data.map((item:any) => [item.date, item]))

        const newDataMap = new Map([...state.new_registrationMap, ...newMap])

        const newCustomer = Array.from(newDataMap.values())

        return {
            ...state,
            new_registrationMap: newDataMap,
            new_registration: newCustomer
                
        }
    },
    setInitialMemberData: (global: any, state: IStateReducer, action: IActionReducer ) => {
    
      const newMap = new Map(action.data.map((item:any) => [item.date, item]))

      const newDataMap = new Map([...state.memberMap, ...newMap])

      const newCustomer = Array.from(newDataMap.values())

      return {
          ...state,
          memberMap: newDataMap,
          member: newCustomer
              
      }
  },
  setInitialFirstQuoteData: (global: any, state: IStateReducer, action: IActionReducer ) => {
  
    const newMap = new Map(action.data.map((item:any) => [item.date, item]))

    const newDataMap = new Map([...state.firstQuoteMemberMap, ...newMap])

    const newCustomer = Array.from(newDataMap.values())

    return {
        ...state,
        firstQuoteMemberMap: newDataMap,
        firstQuoteMember: newCustomer
            
    }
  },
  setInitialCustomerData: (global: any, state: IStateReducer, action: IActionReducer ) => {
  
    const newMap = new Map(action.data.map((item:any) => [item.date, item]))

    const newDataMap = new Map([...state.customerMap, ...newMap])

    const newCustomer = Array.from(newDataMap.values())

    return {
        ...state,
        customerMap: newDataMap,
        customer: newCustomer
            
    }
  }

}

async function* myIterator(base:Date, url:string,action:string) {
    let date = base
    let count = 0 

    do {
        const startDate = subMonths(date, 3)
        const AjaxCall = await axios.post(url, {
            action:action,
            data:{
                startDate: format(startDate, 'yyyy-MM-dd'),
                endDate: format(date, 'yyyy-MM-dd')
            }
            
        }).then((res => res.data))

        date = subDays(startDate, 1)
        count = AjaxCall.count
        yield AjaxCall;
    }
    while (count < 1)
}

const asyncReducer = {
    'newRegistration': async (global: any, state: any, data: any, dispatch: IDispatch):Promise<void> => {
        // console.log('data',data)
        const base = new Date(Date.now())

        for await (const rows of  myIterator(base, 'https://68pq23ov5a.execute-api.us-east-1.amazonaws.com/v1', "new_registration_report")){
            // console.log('rows', rows.data)

            dispatch.sync.customerReport.setInitialData({
                data: rows.data
            })
        }

        
    },
    'member': async (global: any, state: any, data: any, dispatch: IDispatch):Promise<void> => {
        // console.log('data',data)
        const base = new Date(Date.now())

        for await (const rows of  myIterator(base, 'https://68pq23ov5a.execute-api.us-east-1.amazonaws.com/v1', "new_member_report")){
            // console.log('rows', rows.data)

            dispatch.sync.customerReport.setInitialMemberData({
                data: rows.data
            })
        }

        
    },
    'firstQuoteMember': async (global: any, state: any, data: any, dispatch: IDispatch):Promise<void> => {
        // console.log('data',data)
        const base = new Date(Date.now())

        for await (const rows of  myIterator(base, 'https://68pq23ov5a.execute-api.us-east-1.amazonaws.com/v1', "first_quote_report")){
            // console.log('rows', rows.data)

            dispatch.sync.customerReport.setInitialFirstQuoteData({
                data: rows.data
            })
        }

        
    },
    'customer': async (global: any, state: any, data: any, dispatch: IDispatch):Promise<void> => {
        // console.log('data',data)
        const base = new Date(Date.now())

        for await (const rows of  myIterator(base, 'https://68pq23ov5a.execute-api.us-east-1.amazonaws.com/v1', "new_customer_report")){
            // console.log('rows', rows.data)

            dispatch.sync.customerReport.setInitialCustomerData({
                data: rows.data
            })
        }

        
    },
}
const tabSet = ["Daily", "Weekly", "Monthly", "Quaterly", "Annualy"]

type GroupBy = (format:string) => (items:any[], key:string) => any

 const groupByMonth = (items:any[], key:string) => items.reduce(
  (result, item) => ({
      ...result,
      [format(new Date(item[key]), `${format}`)]: [
          ...(result[format(new Date(item[key]), `${format}`)] || []),
          item,
      ],
  }),
  {},
);

interface ITabMap {
  [key:string]: (items:any[], key:string) => any
}

const tabMap:ITabMap = {
  "Monthly": groupByMonth, 
  "Quaterly": groupByMonth, 
  "Annualy": groupByMonth
}

interface INewRegistrationByDate {
  tab: string
  selectedDate: {
    endDate:  Date | string
    startDate:  Date | string
  }
}

const selector = {
    'newRegistrationByDate': (global: any, state: any, data:INewRegistrationByDate) => {
      // console.log(data)
      // const startDate= format(new Date(data.selectedDate.startDate), 'yyyy-MM-dd')
      // const endDate= format(new Date(data.selectedDate.endDate),
      // 'yyyy-MM-dd')

      const selectedRange = state.new_registration.filter((item:customerData)=>isWithinInterval(new Date(item.date), {
        start:subDays(new Date(data.selectedDate.startDate), 1),
        end: new Date(data.selectedDate.endDate)
      }))
      if(data.tab === tabSet[0]){
        return selectedRange
      }else {
        return tabMap[data.tab](selectedRange, 'date') ||selectedRange
      }
      
    },
    'memberByDate': (global: any, state: any, data:INewRegistrationByDate) => {
      // console.log(data)
      // const startDate= format(new Date(data.selectedDate.startDate), 'yyyy-MM-dd')
      // const endDate= format(new Date(data.selectedDate.endDate),
      // 'yyyy-MM-dd')

      const selectedRange = state.member.filter((item:customerData)=>isWithinInterval(new Date(item.date), {
        start:subDays(new Date(data.selectedDate.startDate), 1),
        end: new Date(data.selectedDate.endDate)
      }))
      if(data.tab === tabSet[0]){
        return selectedRange
      }else {
        return tabMap[data.tab](selectedRange, 'date') ||selectedRange
      }
      
    },
    'firstQuoteByDate': (global: any, state: any, data:INewRegistrationByDate) => {
      console.log(data)
      // const startDate= format(new Date(data.selectedDate.startDate), 'yyyy-MM-dd')
      // const endDate= format(new Date(data.selectedDate.endDate),
      // 'yyyy-MM-dd')

      const selectedRange = state.firstQuoteMember.filter((item:customerData)=>isWithinInterval(new Date(item.date), {
        start:subDays(new Date(data.selectedDate.startDate), 1),
        end: new Date(data.selectedDate.endDate)
      }))
      if(data.tab === tabSet[0]){
        return selectedRange
      }else {
        return tabMap[data.tab](selectedRange, 'date') ||selectedRange
      }
      
    },
    'customerByDate': (global: any, state: any, data:INewRegistrationByDate) => {
      // console.log(data)
      // const startDate= format(new Date(data.selectedDate.startDate), 'yyyy-MM-dd')
      // const endDate= format(new Date(data.selectedDate.endDate),
      // 'yyyy-MM-dd')

      const selectedRange = state.customer.filter((item:customerData)=>isWithinInterval(new Date(item.date), {
        start:subDays(new Date(data.selectedDate.startDate), 1),
        end: new Date(data.selectedDate.endDate)
      }))
      if(data.tab === tabSet[0]){
        return selectedRange
      }else {
        return tabMap[data.tab](selectedRange, 'date') ||selectedRange
      }
      
    },
}

const asyncSelector = {
    'test': async (global: any, state: any) => {


    }
}


const model = {
    state,
    reducer,
    asyncReducer,
    selector,
    asyncSelector
}
export default model

