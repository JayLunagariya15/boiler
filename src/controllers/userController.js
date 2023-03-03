const user = require('../model/userSchema');

//Register user 
const register = async (req, res) => {
    
    const {username,email,phone,gender} =  req.body

    try {
        const users =  new user({username:username,email:email,phone:phone,gender:gender}); 
        const saveUser = await users.save();

        console.log("user data : ", users);
        res.status(200).json({ message: "Data Added Successfully"});
    }catch(err){
        res.status(400).json({ message: err.message});
    }        
};

//updateOne user
const updateone = async(req,res)=>{

    const {username,email,phone,gender} =  req.body

    try{
        const updateuser = await user.updateOne({username:username},{email:email});

            console.log(updateuser);
            res.status(200).json({message: "User Updated"});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

//updateMany user
const updatemany =async(req,res)=>{

    const {username,email,phone,gender} =  req.body

    try{
        const updatemanyuser = await user.updateOne({username:username},{email:email,phone:phone,gender:gender});

            console.log(updatemanyuser);
            res.status(200).json({message: "User data are Updated"});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};


//deleteOne user
const deleteone = async(req,res) =>{

    const {username,email,phone,gender} =  req.body

    try{
        const delOne = await user.deleteOne({username:username});
            console.log(delOne);
            res.status(200).json({message: "data deleted "})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    };
};

//deleteMany for particular field using updatemany and $unset
const deletemany = async(req,res)=>{
    const {username,email,phone,gender}= req.body

    try{
        const delMany = await user.updateMany({username:username},   // use deleteMany for multiple data with same username 
            { $unset: {gender:gender,phone:phone}  });

        console.log(delMany);
        res.status(200).json({message: "deleted similar data"})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    };
};

//insertOne user
const insertuser =  async(req,res)=>{

    const {username,email,phone,gender}= req.body

    try{
        const insertone = await user.create({
            username:username,
            email:email,
            phone:phone,
            gender:gender
        });
        res.status(200).json(insertone);
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

//find user
const finduser = async(req,res)=>{
    const {username,email,phone,gender} = req.body

    try{
        const userfind = await user.find({username:username},{_id:0});

        console.log(userfind);
        res.status(200).json(userfind);

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

// findone user only
const findoneuser = async(req,res)=>{
    const {username,email,phone,gender} = req.body

    try{
        const oneuserfind = await user.findOne({username:username},{_id:0});
        
        console.log(oneuserfind);
        res.status(200).json(oneuserfind);

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

//find by Id 
const findid =  async(req,res)=>{
    const {_id} = req.body

    try{
        const byId = await user.findById({_id :_id});

        console.log(byId);
        res.status(200).json(byId);  
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

//find and update
const modify = async(req,res)=>{
    const {username,email,phone,gender} = req.body
    try{
        const modified = await user.findOneAndUpdate({username:username},{email:email,phone:phone,gender:gender},{new:true});

        console.log(modified);
        res.status(200).json(modified)
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};



module.exports = {register,updateone, updatemany, deleteone, deletemany, insertuser,finduser,findoneuser,findid, modify};