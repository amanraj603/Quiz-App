import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'

// get all questions
export async function getQuestions(req, res){
    try{
        const q = await Questions.find();
        res.json(q)
    }catch(error){
        res.json({error})
    }
}

// insert all questions
export async function insertQuestions(req,res){
    try {
        Questions.insertMany({ questions, answers}).then((data)=>{
            res.json("Saved..");
        }).catch((error)=>{
            console.log(error);
        })

    } catch (error) {
        res.json({error})
    }
}

// delete all Questions
export async function dropQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Deleted succesfully"})
    } catch (error) {
        res.json({error})
    }
}

// get all result
export async function getResult(req,res){
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({error})
    }
}

// post all result
export async function storeResult(req,res){
    try {
       const {username, result, attempts, points, achived} = req.body;
       if(!username && !result) throw new Error("Data not Provided"); 

       Results.create({username, result, attempts, points, achived}).then((data)=>{
            res.json({msg: "Result Saved"});
       }).catch((error)=>{
        console.log(error)
       })

    } catch (error) {
        res.json({error})
    }
}

// delete all result
export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({ msg: "Result deleted Successfully"});
    } catch (error) {
        res.json({error});
    }
}