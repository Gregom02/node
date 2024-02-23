import {pool} from '../db2.js';

export const home =(req,res)=> res.send('home', {title: 'home'})

export const login =(req,res)=> res.send('login', {title: 'login'})

export const registro =(req,res)=> res.send('registro', {title: 'registro'})

export const showUsers= async(req,res)=>{
const {nameuser, password}=req.body;
await pool.query("insert into users (nameuser, password) values(?,?)",[nameuser,password]);
res.send('ok')
        }
         
export const insertUsers= async (req,res) =>{
const [rows]=await pool.query('Select * from users');
res.json(rows)
        }
