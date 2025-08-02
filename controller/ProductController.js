

exports.add_product = (req,res)=>{
    res.json({
        msg:"hello from add_product",
        state:1,
        data: ['iphone','mac','android'],
    })
}