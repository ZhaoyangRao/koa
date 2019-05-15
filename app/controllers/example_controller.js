/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-25 10:43:58 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-25 11:07:04
 * @Description: example api 
 */

const userModel = require('./../models/example');

const {
    find,
    add,
    remove,
    updateData
} = require('../utils/index.js');
const format=require('./../middleware/resFormat')

//控制器调用
const findExample = async (ctx, next) => {
    const req = ctx.request.query;
 ctx.status = 200;
    const result = await find(req, userModel,ctx)
    format(ctx, result)
}

const addExample = async (ctx, next) => {
    const req = ctx.request.body;
  ctx.status = 200;
    const result = await add(req, userModel,ctx)
    format(ctx, result)
}

const removeExample = async (ctx, next) => {
    const req = ctx.request.body;
   ctx.status = 200;
    const result = await remove(req, userModel,ctx)
    format(ctx, result)
}

const editedExample = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;
    const result = await updateData(req, userModel,ctx)
    format(ctx, result)
}

module.exports = {
    findExample,
    addExample,
    removeExample,
    editedExample
}
