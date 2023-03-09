const studentsmodel = require('../models/students')


module.exports = {
    getHome:(req,res)=>{
        res.render('index')
    },
    formsubmit:async(req,res)=>{
        try {
        const name = req.body.name
        const age  = req.body.age
        const course = req.body.course
        const date1 = req.body.startdate
        const date2 = req.body.enddate
        const register = new studentsmodel({
            name:name,
            age:age,
            course:course,
            StartedDate:date1,
            EndedDate:date2
        });
        await register.save().then(result=>{
            console.log("student added", result);
            res.redirect('/')
        })
        } catch (error) {
            console.log(error);
        }
        
    },
    studentslist:async(req,res)=>{
        try {
            await studentsmodel.find().then(result=>{
            res.render('studentslist',{result})
            })
        } catch (error) {
            console.log(error);
        }
       
        
    },
    studentdelete:async(req,res)=>{
        try {
        const id = req.params.id
        await studentsmodel.deleteOne({_id:id}).then(result=>{
        console.log(result);
        res.redirect('/students')
        })
        } catch (error) {
        console.log(error);
        }
        
    },
    studentedit:async(req,res)=>{
        try {
        const id = req.params.id
        await studentsmodel.findOne({_id:id}).then(result=>{
        console.log(result);
        res.render('editform',{result})
        })
        } catch (error) {
            console.log(error);
        }
        
        
    },
    postedit:async(req,res)=>{
        try {
        const id = req.params.id
        const name = req.body.name
        const age  = req.body.age
        const course = req.body.course
        const date1 = req.body.startdate
        const date2 = req.body.enddate
        await studentsmodel.updateOne({_id:id},
      {
        $set:{
            name:name,
            age:age,
            course:course,
            StartedDate:date1,
            EndedDate:date2
        }}).then((result)=>{
            console.log(result);
            res.redirect('/students')
        })
        } catch (error) {
        console.log(error);
        }
        
     }

}