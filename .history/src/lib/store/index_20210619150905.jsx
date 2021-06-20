// store.js
import React, { createContext, useReducer } from 'react';
import UserModel from './userModel'
import CustomerReportModel from './customerReportModel';
import { IModelStore} from '../../shared/hooks/useStore';

const model: IModelStore = {
    user: UserModel,
    customerReport: CustomerReportModel
}


export default model